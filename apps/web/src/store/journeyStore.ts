import { create } from 'zustand';
import { db } from '../data/db.ts';
import {
  JourneySession,
  Response,
  JourneyVersion,
  Result,
  RankedSelection,
  SyncOperation
} from '@mindprint/shared-types';
import {
  calculateScores,
  getNextQuestion,
  matchArchetypes,
  evaluateInsights,
  generateQuestionPool
} from '@mindprint/assessment-engine';
import mockJourney from '../../../../content/journeys/how-others-experience-me.json';
import { syncPendingOperations } from '../data/sync.ts';
import { submitOnlineFeedback, uploadSessionToCloud } from '../data/firebase.ts';

import { Language } from '../data/translations.ts';

interface JourneyState {
  currentSession: JourneySession | null;
  currentQuestionId: string | null;
  responses: Response[];
  isOffline: boolean;
  isLoading: boolean;
  currentLanguage: Language;
  
  // Actions
  initializeSession: (deviceId: string) => Promise<void>;
  submitAnswer: (selections: RankedSelection[]) => Promise<void>;
  navigateBack: () => Promise<void>;
  completeJourney: () => Promise<Result | null>;
  setOfflineStatus: (isOffline: boolean) => void;
  setLanguage: (lang: Language) => void;
}

export const useJourneyStore = create<JourneyState>((set, get) => ({
  currentSession: null,
  currentQuestionId: null,
  responses: [],
  isOffline: !navigator.onLine,
  isLoading: false,
  currentLanguage: 'en',

  setLanguage: (lang) => {
    set({ currentLanguage: lang });
  },

  setOfflineStatus: (isOffline) => {
    const wasOffline = get().isOffline;
    set({ isOffline });
    if (wasOffline && !isOffline) {
      syncPendingOperations().catch(err => console.error('[Sync] Online sync trigger failed:', err));
    }
  },

  initializeSession: async (deviceId) => {
    set({ isLoading: true });
    
    const feedbackFor = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('feedbackFor') || undefined : undefined;

    // Check if there is an active (in_progress) session in Dexie
    const activeSession = await db.journeySessions
      .where('status')
      .equals('in_progress')
      .first();

    const journeyDef = mockJourney as unknown as JourneyVersion;

    const createFreshSession = async () => {
      const sessionId = crypto.randomUUID();
      const pool = generateQuestionPool(get().currentLanguage);
      const firstQuestion = pool[Math.floor(Math.random() * pool.length)];
      const firstQuestionId = firstQuestion.id;
      
      const newSession: JourneySession = {
        id: sessionId,
        journeyId: journeyDef.journeyId,
        journeyVersion: journeyDef.version,
        status: 'in_progress',
        currentQuestionId: firstQuestionId,
        startedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        completedAt: null,
        responseCount: 0,
        scoreSnapshot: {},
        deviceId,
        syncStatus: 'pending',
        feedbackFor
      };

      if (feedbackFor && typeof window !== 'undefined') {
        localStorage.setItem('mindprint_active_feedback_session_id', sessionId);
      }

      await db.transaction('rw', [db.journeySessions], async () => {
        await db.journeySessions.put(newSession);
      });

      // Queue sync operation for creating session
      const syncOp: SyncOperation = {
        operationId: crypto.randomUUID(),
        entityType: 'session',
        entityId: sessionId,
        operationType: 'upsert',
        payload: newSession,
        createdAt: new Date().toISOString(),
        attemptCount: 0,
        nextAttemptAt: null,
        status: 'pending'
      };
      await db.syncOperations.put(syncOp);

      set({
        currentSession: newSession,
        currentQuestionId: firstQuestionId,
        responses: [],
        isLoading: false
      });
      syncPendingOperations().catch(err => console.error('[Sync] Init sync failed:', err));
    };

    const activeFeedbackSessionId = typeof window !== 'undefined' ? localStorage.getItem('mindprint_active_feedback_session_id') : null;
    let recoveredSession: JourneySession | null = null;
    if (activeFeedbackSessionId) {
      recoveredSession = await db.journeySessions.get(activeFeedbackSessionId);
    }

    if (recoveredSession && recoveredSession.feedbackFor === feedbackFor) {
      const resps = await db.responses
        .where('sessionId')
        .equals(recoveredSession.id)
        .toArray();

      set({
        currentSession: recoveredSession,
        currentQuestionId: recoveredSession.currentQuestionId,
        responses: resps,
        isLoading: false
      });
      syncPendingOperations().catch(err => console.error('[Sync] Init sync failed:', err));
    } else if (activeSession && activeSession.feedbackFor === feedbackFor) {
      // Load responses for this session
      const resps = await db.responses
        .where('sessionId')
        .equals(activeSession.id)
        .toArray();

      set({
        currentSession: activeSession,
        currentQuestionId: activeSession.currentQuestionId,
        responses: resps,
        isLoading: false
      });
      syncPendingOperations().catch(err => console.error('[Sync] Init sync failed:', err));
    } else {
      await createFreshSession();
    }
  },

  submitAnswer: async (selections) => {
    const { currentSession, currentQuestionId, responses } = get();
    if (!currentSession || !currentQuestionId) return;

    const journeyDef = mockJourney as unknown as JourneyVersion;
    const responseId = crypto.randomUUID();
    
    const newResponse: Response = {
      id: responseId,
      sessionId: currentSession.id,
      questionId: currentQuestionId,
      selections,
      answeredAt: new Date().toISOString()
    };

    // Update list of responses locally
    const updatedResponses = [...responses.filter(r => r.questionId !== currentQuestionId), newResponse];

    // Compute updated scores
    const pool = generateQuestionPool(get().currentLanguage);
    const fullJourneyDef = {
      ...journeyDef,
      questions: [...journeyDef.questions, ...pool]
    };
    const updatedScores = calculateScores(fullJourneyDef, updatedResponses);

    // Determine next question
    const nextQId = getNextQuestion(journeyDef, updatedResponses, currentQuestionId, get().currentLanguage);

    const updatedSession: JourneySession = {
      ...currentSession,
      currentQuestionId: nextQId ?? currentQuestionId,
      responseCount: updatedResponses.length,
      scoreSnapshot: updatedScores,
      updatedAt: new Date().toISOString()
    };

    // Write to Dexie in single transaction
    await db.transaction('rw', [db.responses, db.journeySessions, db.syncOperations], async () => {
      await db.responses.put(newResponse);
      await db.journeySessions.put(updatedSession);
      
      // Queue sync operations
      const responseSyncOp: SyncOperation = {
        operationId: crypto.randomUUID(),
        entityType: 'response',
        entityId: responseId,
        operationType: 'upsert',
        payload: newResponse,
        createdAt: new Date().toISOString(),
        attemptCount: 0,
        nextAttemptAt: null,
        status: 'pending'
      };
      await db.syncOperations.put(responseSyncOp);

      const sessionSyncOp: SyncOperation = {
        operationId: crypto.randomUUID(),
        entityType: 'session',
        entityId: currentSession.id,
        operationType: 'upsert',
        payload: updatedSession,
        createdAt: new Date().toISOString(),
        attemptCount: 0,
        nextAttemptAt: null,
        status: 'pending'
      };
      await db.syncOperations.put(sessionSyncOp);
    });

    set({
      currentSession: updatedSession,
      currentQuestionId: nextQId,
      responses: updatedResponses
    });
    syncPendingOperations().catch(err => console.error('[Sync] Submit sync failed:', err));
  },

  navigateBack: async () => {
    const { currentSession, responses } = get();
    if (!currentSession || responses.length === 0) return;

    const journeyDef = mockJourney as unknown as JourneyVersion;

    // Find the last answered question index in linear flow
    const lastResponse = responses[responses.length - 1];
    
    // Remove the last response from IndexedDB and state
    await db.transaction('rw', [db.responses, db.journeySessions], async () => {
      await db.responses.delete(lastResponse.id);
    });

    const remainingResponses = responses.slice(0, -1);
    const pool = generateQuestionPool(get().currentLanguage);
    const fullJourneyDef = {
      ...journeyDef,
      questions: [...journeyDef.questions, ...pool]
    };
    const updatedScores = calculateScores(fullJourneyDef, remainingResponses);

    const updatedSession: JourneySession = {
      ...currentSession,
      currentQuestionId: lastResponse.questionId,
      responseCount: remainingResponses.length,
      scoreSnapshot: updatedScores,
      updatedAt: new Date().toISOString()
    };

    await db.journeySessions.put(updatedSession);

    set({
      currentSession: updatedSession,
      currentQuestionId: lastResponse.questionId,
      responses: remainingResponses
    });
  },

  completeJourney: async () => {
    const { currentSession, responses } = get();
    if (!currentSession) return null;

    const journeyDef = mockJourney as unknown as JourneyVersion;

    // Build the final result
    const pool = generateQuestionPool(get().currentLanguage);
    const fullJourneyDef = {
      ...journeyDef,
      questions: [...journeyDef.questions, ...pool]
    };
    const scores = calculateScores(fullJourneyDef, responses);
    const { primary, secondary } = matchArchetypes(journeyDef.archetypes, scores);
    const insights = evaluateInsights(journeyDef.insights, scores, responses, [...journeyDef.questions, ...pool]);

    // Format dimension output for result
    const formattedDimensions = journeyDef.dimensions.map(d => ({
      id: d.id,
      name: d.name,
      lowPole: d.lowPole,
      highPole: d.highPole,
      score: scores[d.id]?.score ?? 50,
      confidence: scores[d.id]?.confidence ?? 50,
      evidenceCount: scores[d.id]?.evidenceCount ?? 0
    }));

    const finalResult: Result = {
      sessionId: currentSession.id,
      journeyId: currentSession.journeyId,
      journeyVersion: currentSession.journeyVersion,
      dimensions: formattedDimensions,
      primaryArchetype: primary,
      secondaryArchetype: secondary,
      insights,
      generatedAt: new Date().toISOString(),
      generationMode: 'local'
    };

    const completedSession: JourneySession = {
      ...currentSession,
      status: 'completed',
      completedAt: new Date().toISOString(),
      syncStatus: 'pending'
    };

    await db.transaction('rw', [db.journeySessions, db.localResults, db.syncOperations], async () => {
      await db.journeySessions.put(completedSession);
      await db.localResults.put(finalResult);

      // Queue completed session sync for self-assessments
      if (!currentSession.feedbackFor) {
        const sessionSyncOp: SyncOperation = {
          operationId: crypto.randomUUID(),
          entityType: 'session',
          entityId: currentSession.id,
          operationType: 'upsert',
          payload: completedSession,
          createdAt: new Date().toISOString(),
          attemptCount: 0,
          nextAttemptAt: null,
          status: 'pending'
        };
        await db.syncOperations.put(sessionSyncOp);

        const resultSyncOp: SyncOperation = {
          operationId: crypto.randomUUID(),
          entityType: 'result',
          entityId: currentSession.id,
          operationType: 'upsert',
          payload: finalResult,
          createdAt: new Date().toISOString(),
          attemptCount: 0,
          nextAttemptAt: null,
          status: 'pending'
        };
        await db.syncOperations.put(resultSyncOp);
      }
    });

    // ── Feedback giver path: Write directly to Google Firebase Firestore ──
    if (currentSession.feedbackFor) {
      submitOnlineFeedback(currentSession.id, currentSession.feedbackFor, finalResult)
        .then(() => console.log('[Firebase] Successfully submitted peer feedback for', currentSession.feedbackFor))
        .catch(err => console.error('[Firebase] Failed to submit peer feedback:', err));
    } else {
      // Self-assessment: sync to Firestore cloud collection
      uploadSessionToCloud(currentSession.id, completedSession, finalResult)
        .then(() => console.log('[Firebase] Successfully synced self-assessment to Firestore'))
        .catch(err => console.error('[Firebase] Local-only mode fallback:', err));
      
      syncPendingOperations().catch(err => console.error('[Sync] Complete sync failed:', err));
    }

    set({
      currentSession: completedSession,
      currentQuestionId: null
    });

    return finalResult;
  }
}));
