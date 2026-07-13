export interface DimensionEffect {
  dimension: string;
  delta: number;
}

export interface AnswerOption {
  id: string;
  label: string;
  effects: DimensionEffect[];
  evidenceTags?: string[];
}

export type QuestionType = 'single_choice' | 'ranked_choice' | 'forced_choice' | 'slider';

export interface BranchRule {
  targetQuestionId: string;
  condition: {
    dimension?: string;
    operator?: '>' | '<' | '>=' | '<=' | '==';
    value?: number;
    evidenceTag?: string;
    minimumCount?: number;
    answerOptionId?: string; // e.g. if selected specific option
  };
}

export interface Question {
  id: string;
  journeyVersionId: string;
  type: QuestionType;
  prompt: string;
  instructions?: string;
  minSelections: number;
  maxSelections: number;
  required: boolean;
  answerOptions: AnswerOption[];
  branchRules?: BranchRule[];
  tags?: string[];
}

export interface Dimension {
  id: string;
  name: string;
  description?: string;
  lowPole: string;
  highPole: string;
}

export interface Journey {
  id: string;
  name: string;
  description: string;
}

export interface JourneyVersion {
  id: string;
  journeyId: string;
  version: string;
  questions: Question[];
  dimensions: Dimension[];
  archetypes: Archetype[];
  insights: Insight[];
}

export interface RankedSelection {
  answerOptionId: string;
  rank: number; // 1 = Primary, 2 = Secondary, 3 = Tertiary
}

export interface Response {
  id: string; // uuid
  sessionId: string;
  questionId: string;
  selections: RankedSelection[];
  answeredAt: string; // ISO String
}

export interface ScoreSnapshot {
  [dimensionId: string]: {
    score: number; // 0-100 normalized
    confidence: number; // 0-100 normalized
    evidenceCount: number;
  };
}

export interface JourneySession {
  id: string; // uuid
  journeyId: string;
  journeyVersion: string;
  status: 'in_progress' | 'completed';
  currentQuestionId: string;
  startedAt: string; // ISO
  updatedAt: string; // ISO
  completedAt: string | null; // ISO
  responseCount: number;
  scoreSnapshot: ScoreSnapshot;
  deviceId: string;
  syncStatus: 'pending' | 'synced';
}

export interface Archetype {
  id: string;
  name: string;
  description: string;
  idealVector: {
    [dimensionId: string]: number; // ideal target scores (e.g. 0 to 100)
  };
  minimumConfidence: number;
}

export interface InsightCondition {
  dimension?: string;
  operator?: '>' | '<' | '>=' | '<=' | '==';
  value?: number;
  evidenceTag?: string;
  minimumCount?: number;
}

export interface Insight {
  id: string;
  conditions: InsightCondition[];
  title: string;
  bodyTemplate: string;
  alternativeTemplate?: string;
  confidenceRule?: string;
}

export interface Result {
  sessionId: string;
  journeyId: string;
  journeyVersion: string;
  dimensions: {
    id: string;
    name: string;
    score: number;
    confidence: number;
    evidenceCount: number;
  }[];
  primaryArchetype: Archetype | null;
  secondaryArchetype: Archetype | null;
  insights: {
    id: string;
    title: string;
    body: string;
    alternativeBody?: string;
    confidence: number;
  }[];
  generatedAt: string; // ISO
  generationMode: 'local' | 'server';
}

export interface SyncOperation {
  operationId: string; // uuid
  entityType: 'session' | 'response' | 'result' | 'feedback';
  entityId: string;
  operationType: 'upsert' | 'delete';
  payload: any;
  createdAt: string; // ISO
  attemptCount: number;
  nextAttemptAt: string | null; // ISO
  status: 'pending' | 'failed' | 'completed';
}
