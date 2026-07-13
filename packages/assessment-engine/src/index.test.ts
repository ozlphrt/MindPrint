import { describe, it, expect } from 'vitest';
import { calculateScores, getNextQuestion, matchArchetypes } from './index.js';
import { JourneyVersion } from '@mindprint/shared-types';

const mockJourneyVersion: JourneyVersion = {
  id: 'jv-001',
  journeyId: 'test-journey',
  version: '1.0.0',
  dimensions: [
    { id: 'directness', name: 'Directness', lowPole: 'Indirect', highPole: 'Direct' },
    { id: 'social_energy', name: 'Social Energy', lowPole: 'Reserved', highPole: 'Outgoing' }
  ],
  questions: [
    {
      id: 'q-1',
      journeyVersionId: 'jv-001',
      type: 'ranked_choice',
      prompt: 'Q1 prompt',
      minSelections: 1,
      maxSelections: 2,
      required: true,
      answerOptions: [
        {
          id: 'q1-opt-a',
          label: 'Option A (Direct, Outgoing)',
          effects: [
            { dimension: 'directness', delta: 1.0 },
            { dimension: 'social_energy', delta: 0.8 }
          ]
        },
        {
          id: 'q1-opt-b',
          label: 'Option B (Indirect, Reserved)',
          effects: [
            { dimension: 'directness', delta: -1.0 },
            { dimension: 'social_energy', delta: -0.8 }
          ]
        }
      ],
      branchRules: [
        {
          targetQuestionId: 'q-3-branch',
          condition: {
            dimension: 'directness',
            operator: '>=',
            value: 60
          }
        }
      ]
    },
    {
      id: 'q-2',
      journeyVersionId: 'jv-001',
      type: 'single_choice',
      prompt: 'Q2 prompt',
      minSelections: 1,
      maxSelections: 1,
      required: true,
      answerOptions: [
        {
          id: 'q2-opt-a',
          label: 'Option A (Outgoing)',
          effects: [
            { dimension: 'social_energy', delta: 0.5 }
          ]
        }
      ]
    },
    {
      id: 'q-3-branch',
      journeyVersionId: 'jv-001',
      type: 'single_choice',
      prompt: 'Q3 prompt',
      minSelections: 1,
      maxSelections: 1,
      required: true,
      answerOptions: [
        {
          id: 'q3-opt-a',
          label: 'Option A (Direct)',
          effects: [
            { dimension: 'directness', delta: 0.5 }
          ]
        }
      ]
    }
  ],
  archetypes: [
    {
      id: 'archetype-direct-explorer',
      name: 'The Direct Explorer',
      description: 'You speak directly and like exploring.',
      idealVector: {
        directness: 80,
        social_energy: 70
      },
      minimumConfidence: 20
    }
  ],
  insights: []
};

describe('Assessment Engine Scoring', () => {
  it('should calculate scores and normalize correctly', () => {
    const responses = [
      {
        id: 'r-1',
        sessionId: 's-1',
        questionId: 'q-1',
        selections: [
          { answerOptionId: 'q1-opt-a', rank: 1 }
        ],
        answeredAt: '2026-07-12T12:00:00Z'
      }
    ];

    const scores = calculateScores(mockJourneyVersion, responses);
    expect(scores['directness']).toBeDefined();
    // Since only q-1 was answered for directness:
    // opt-a effect delta = 1.0. minPossible = -1.0, maxPossible = 1.0.
    // normalized score = ((1.0 - (-1.0)) / (1.0 - (-1.0))) * 100 = 100
    expect(scores['directness'].score).toBe(100);
    expect(scores['social_energy'].score).toBe(100);
  });

  it('should evaluate branching rules correctly', () => {
    const responses = [
      {
        id: 'r-1',
        sessionId: 's-1',
        questionId: 'q-1',
        selections: [
          { answerOptionId: 'q1-opt-a', rank: 1 }
        ],
        answeredAt: '2026-07-12T12:00:00Z'
      }
    ];

    const nextQ = getNextQuestion(mockJourneyVersion, responses, 'q-1');
    // Since directness score is 100 (which is >= 60), it should branch to q-3-branch
    expect(nextQ).toBe('q-3-branch');
  });

  it('should match closest archetype', () => {
    const scores = {
      directness: { score: 90, confidence: 50, evidenceCount: 1 },
      social_energy: { score: 80, confidence: 50, evidenceCount: 1 }
    };

    const matches = matchArchetypes(mockJourneyVersion.archetypes, scores);
    expect(matches.primary?.id).toBe('archetype-direct-explorer');
  });
});
