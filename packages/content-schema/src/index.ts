import { z } from 'zod';

export const DimensionEffectSchema = z.object({
  dimension: z.string(),
  delta: z.number(),
});

export const AnswerOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  effects: z.array(DimensionEffectSchema),
  evidenceTags: z.array(z.string()).optional(),
});

export const QuestionTypeSchema = z.enum(['single_choice', 'ranked_choice', 'forced_choice', 'slider']);

export const BranchRuleSchema = z.object({
  targetQuestionId: z.string(),
  condition: z.object({
    dimension: z.string().optional(),
    operator: z.enum(['>', '<', '>=', '<=', '==']).optional(),
    value: z.number().optional(),
    evidenceTag: z.string().optional(),
    minimumCount: z.number().optional(),
    answerOptionId: z.string().optional(),
  }),
});

export const QuestionSchema = z.object({
  id: z.string(),
  journeyVersionId: z.string(),
  type: QuestionTypeSchema,
  prompt: z.string(),
  instructions: z.string().optional(),
  minSelections: z.number(),
  maxSelections: z.number(),
  required: z.boolean(),
  answerOptions: z.array(AnswerOptionSchema),
  branchRules: z.array(BranchRuleSchema).optional(),
  tags: z.array(z.string()).optional(),
});

export const DimensionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  lowPole: z.string(),
  highPole: z.string(),
});

export const JourneySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const ArchetypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  idealVector: z.record(z.string(), z.number()),
  minimumConfidence: z.number(),
});

export const InsightConditionSchema = z.object({
  dimension: z.string().optional(),
  operator: z.enum(['>', '<', '>=', '<=', '==']).optional(),
  value: z.number().optional(),
  evidenceTag: z.string().optional(),
  minimumCount: z.number().optional(),
});

export const InsightSchema = z.object({
  id: z.string(),
  conditions: z.array(InsightConditionSchema),
  title: z.string(),
  bodyTemplate: z.string(),
  alternativeTemplate: z.string().optional(),
  confidenceRule: z.string().optional(),
});

export const JourneyVersionSchema = z.object({
  id: z.string(),
  journeyId: z.string(),
  version: z.string(),
  questions: z.array(QuestionSchema),
  dimensions: z.array(DimensionSchema),
  archetypes: z.array(ArchetypeSchema),
  insights: z.array(InsightSchema),
});
