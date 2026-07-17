import {
  JourneyVersion,
  Question,
  AnswerOption,
  Response,
  ScoreSnapshot,
  Archetype,
  Insight,
  Result,
  RankedSelection
} from '@mindprint/shared-types';

export const RANK_WEIGHTS: { [rank: number]: number } = {
  1: 1.00,
  2: 0.45,
  3: 0.20
};

/**
 * Calculates raw and normalized scores, and confidence for all dimensions.
 */
export function calculateScores(
  journeyVersion: JourneyVersion,
  responses: Response[]
): ScoreSnapshot {
  const snapshot: ScoreSnapshot = {};
  const dimensions = journeyVersion.dimensions;
  const questionsMap = new Map<string, Question>(
    journeyVersion.questions.map(q => [q.id, q])
  );

  // Group responses by question
  const responseMap = new Map<string, Response>(
    responses.map(r => [r.questionId, r])
  );

  for (const dim of dimensions) {
    let rawScore = 0;
    let minPossible = 0;
    let maxPossible = 0;
    let evidenceCount = 0;
    let conflictSum = 0;

    for (const response of responses) {
      const question = questionsMap.get(response.questionId);
      if (!question) continue;

      // Find if this question affects the dimension
      const affectsDim = question.answerOptions.some(opt =>
        opt.effects.some(eff => eff.dimension === dim.id)
      );

      if (!affectsDim) continue;

      evidenceCount++;

      // Compute effect of selected options
      let questionScore = 0;
      for (const sel of response.selections) {
        const option = question.answerOptions.find(o => o.id === sel.answerOptionId);
        if (!option) continue;

        const effect = option.effects.find(e => e.dimension === dim.id);
        if (effect) {
          const weight = RANK_WEIGHTS[sel.rank] ?? 0;
          questionScore += effect.delta * weight;
        }
      }
      rawScore += questionScore;

      // Compute theoretical min and max for this question
      // To do this, we look at the possible selections.
      // Since it can be primary (rank 1), and up to 2 secondary answers (rank 2, rank 3).
      // Let's compute all combinations of selections up to maxSelections.
      const dimEffects = question.answerOptions.map(opt => {
        const eff = opt.effects.find(e => e.dimension === dim.id);
        return { optId: opt.id, delta: eff ? eff.delta : 0 };
      });

      // Simple min/max evaluation:
      // Max possible delta from single/ranked choices:
      // Sort deltas descending to find best options
      const sortedDeltas = [...dimEffects].sort((a, b) => b.delta - a.delta);
      const sortedDeltasAsc = [...dimEffects].sort((a, b) => a.delta - b.delta);

      let questionMax = 0;
      let questionMin = 0;

      // Calculate max possible for this question
      const maxSelections = Math.min(question.maxSelections, sortedDeltas.length);
      for (let i = 0; i < maxSelections; i++) {
        const delta = sortedDeltas[i].delta;
        if (delta > 0) {
          const weight = RANK_WEIGHTS[i + 1] ?? 0;
          questionMax += delta * weight;
        }
      }

      // Calculate min possible for this question
      const minSelections = Math.min(question.maxSelections, sortedDeltasAsc.length);
      for (let i = 0; i < minSelections; i++) {
        const delta = sortedDeltasAsc[i].delta;
        if (delta < 0) {
          const weight = RANK_WEIGHTS[i + 1] ?? 0;
          questionMin += delta * weight;
        }
      }

      maxPossible += questionMax;
      minPossible += questionMin;

      // Check if selected options pull in opposite directions (conflict detection)
      const deltas = response.selections.map(sel => {
        const option = question.answerOptions.find(o => o.id === sel.answerOptionId);
        const effect = option?.effects.find(e => e.dimension === dim.id);
        return effect ? effect.delta : 0;
      });
      if (deltas.length > 1) {
        const hasPos = deltas.some(d => d > 0.1);
        const hasNeg = deltas.some(d => d < -0.1);
        if (hasPos && hasNeg) {
          conflictSum += 1.5; // weight of conflict
        }
      }
    }

    // Normalization
    let normalized = 50;
    if (maxPossible !== minPossible) {
      normalized = ((rawScore - minPossible) / (maxPossible - minPossible)) * 100;
    }
    // Clamp between 0 and 100
    normalized = Math.max(0, Math.min(100, normalized));

    // Confidence score logic:
    // Base confidence increases with evidence count. 4 questions = 100% base.
    let confidence = Math.min(100, evidenceCount * 25);

    // Reduce confidence based on conflict detection
    confidence = Math.max(10, confidence - conflictSum * 15);

    // Reduce confidence slightly if score is extremely neutral (around 50) with high variance,
    // but we keep it simple for MVP.
    snapshot[dim.id] = {
      score: Math.round(normalized),
      confidence: Math.round(confidence),
      evidenceCount
    };
  }

  return snapshot;
}

/**
 * Determines the next question based on branching rules and progress.
 */
import { generateQuestionPool } from './proceduralPool.js';
export { generateQuestionPool };

/**
 * Determines the next question based on branching rules and progress.
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export function getNextQuestion(
  journeyVersion: JourneyVersion,
  responses: Response[],
  currentQuestionId: string,
  lang: string = 'en'
): string | null {
  const answeredCount = responses.length;

  // Check branching rules of the current question first
  const currentQuestion = journeyVersion.questions.find(q => q.id === currentQuestionId);
  if (currentQuestion && currentQuestion.branchRules) {
    for (const rule of currentQuestion.branchRules) {
      const cond = rule.condition;
      if (cond.dimension && cond.operator && cond.value !== undefined) {
        const scores = calculateScores(journeyVersion, responses);
        const score = scores[cond.dimension]?.score ?? 50;
        let match = false;
        const val = cond.value;
        if (cond.operator === '>=' && score >= val) match = true;
        else if (cond.operator === '<=' && score <= val) match = true;
        else if (cond.operator === '==' && score === val) match = true;
        else if (cond.operator === '>' && score > val) match = true;
        else if (cond.operator === '<' && score < val) match = true;

        if (match) {
          return rule.targetQuestionId;
        }
      }
    }
  }
  
  // Hard limit of 12 questions budget
  if (answeredCount >= 12) {
    return null; // Journey complete
  }

  const responseMap = new Map<string, Response>(
    responses.map(r => [r.questionId, r])
  );

  // Phase 2: Adaptive IRT pathing from the 500-question pool
  const pool = generateQuestionPool(lang);
  const shuffledPool = shuffleArray(pool);

  // Find scenario tags of already answered questions
  const answeredScenarioTags = new Set<string>();
  const fullQuestionsMap = new Map<string, Question>([
    ...journeyVersion.questions.map(q => [q.id, q] as const),
    ...pool.map(q => [q.id, q] as const)
  ]);

  for (const r of responses) {
    const q = fullQuestionsMap.get(r.questionId);
    if (q && q.tags) {
      for (const t of q.tags) {
        if (t.startsWith('scenario-idx-')) {
          answeredScenarioTags.add(t);
        }
      }
    }
  }

  // Filter pool questions: exclude already answered questions AND same scenarios
  const unansweredPool = shuffledPool.filter((q: Question) => {
    if (responseMap.has(q.id)) return false;
    if (q.tags) {
      for (const t of q.tags) {
        if (answeredScenarioTags.has(t)) return false;
      }
    }
    return true;
  });

  // Determine current dimension estimate scores
  const currentScores = calculateScores(journeyVersion, responses);
  
  // Cycle dimensions to test or select the one with lowest confidence score
  const dims = [
    'directness', 
    'social_energy', 
    'reflectiveness', 
    'expressiveness', 
    'assertiveness', 
    'adaptability', 
    'pace', 
    'focus_orientation', 
    'vulnerability', 
    'conflict_style', 
    'feedback_style', 
    'playfulness'
  ];
  const lowestConfDim = dims.sort((a, b) => {
    const confA = currentScores[a]?.confidence ?? 0;
    const confB = currentScores[b]?.confidence ?? 0;
    return confA - confB;
  })[0];

  const estimatedScore = currentScores[lowestConfDim]?.score ?? 50;

  // Find questions in the pool that measure the target dimension and sort by diff
  let minDiff = Infinity;
  const questionDiffs = new Map<Question, number>();

  for (const q of unansweredPool) {
    const targetOpt = q.answerOptions.find((o: AnswerOption) => o.effects.some((e: any) => e.dimension === lowestConfDim));
    if (!targetOpt) continue;

    const effect = targetOpt.effects.find((e: any) => e.dimension === lowestConfDim);
    if (!effect) continue;

    const targetDeltaPct = (effect.delta * 50) + 50; 
    const diff = Math.abs(targetDeltaPct - estimatedScore);
    questionDiffs.set(q, diff);

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  // Gather all candidates within the minDiff + 15% tolerance window
  const candidates: Question[] = [];
  for (const [q, diff] of questionDiffs.entries()) {
    if (diff <= minDiff + 15) {
      candidates.push(q);
    }
  }

  const bestQuestion = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : unansweredPool[0];

  return bestQuestion ? bestQuestion.id : null;
}

/**
 * Matches score snapshot to the closest archetypes using vector distance.
 */
export function matchArchetypes(
  archetypes: Archetype[],
  scores: ScoreSnapshot
): { primary: Archetype | null; secondary: Archetype | null } {
  let primary: Archetype | null = null;
  let secondary: Archetype | null = null;

  let minDistancePrimary = Infinity;
  let minDistanceSecondary = Infinity;

  // Convert scores to a simple map of dimension -> score
  const scoreMap: { [dimId: string]: number } = {};
  const confidenceMap: { [dimId: string]: number } = {};
  for (const [dimId, data] of Object.entries(scores)) {
    scoreMap[dimId] = data.score;
    confidenceMap[dimId] = data.confidence;
  }

  for (const arch of archetypes) {
    // Check if user has minimum confidence for all target dimensions
    let confidenceOk = true;
    let matchedDimensionsCount = 0;

    let distanceSquared = 0;
    for (const [dimId, idealVal] of Object.entries(arch.idealVector)) {
      const userScore = scoreMap[dimId];
      if (userScore === undefined) continue;

      matchedDimensionsCount++;
      const userConfidence = confidenceMap[dimId] ?? 0;
      if (userConfidence < arch.minimumConfidence) {
        confidenceOk = false;
      }
      distanceSquared += Math.pow(userScore - idealVal, 2);
    }

    if (matchedDimensionsCount === 0) {
      continue; // Skip archetype if no dimensions match
    }

    const distance = Math.sqrt(distanceSquared);

    if (distance < minDistancePrimary) {
      // Shift primary to secondary
      secondary = primary;
      minDistanceSecondary = minDistancePrimary;

      primary = arch;
      minDistancePrimary = distance;
    } else if (distance < minDistanceSecondary) {
      secondary = arch;
      minDistanceSecondary = distance;
    }
  }

  return { primary, secondary };
}

/**
 * Evaluates insights from score snapshot and evidence tags.
 */
export function evaluateInsights(
  insights: Insight[],
  scores: ScoreSnapshot,
  responses: Response[],
  journeyQuestions: Question[]
): Result['insights'] {
  // Get all evidence tags
  const evidenceTagsCount: { [tag: string]: number } = {};
  for (const resp of responses) {
    const question = journeyQuestions.find(q => q.id === resp.questionId);
    if (!question) continue;
    for (const sel of resp.selections) {
      const opt = question.answerOptions.find(o => o.id === sel.answerOptionId);
      if (opt?.evidenceTags) {
        for (const tag of opt.evidenceTags) {
          evidenceTagsCount[tag] = (evidenceTagsCount[tag] ?? 0) + 1;
        }
      }
    }
  }

  const results: Result['insights'] = [];

  for (const insight of insights) {
    let matched = true;
    let minConfidence = 100;

    for (const cond of insight.conditions) {
      if (cond.dimension && cond.operator && cond.value !== undefined) {
        const dimData = scores[cond.dimension];
        const dimScore = dimData?.score ?? 50;
        const op = cond.operator;
        const val = cond.value;

        minConfidence = Math.min(minConfidence, dimData?.confidence ?? 50);

        if (op === '>' && !(dimScore > val)) matched = false;
        else if (op === '<' && !(dimScore < val)) matched = false;
        else if (op === '>=' && !(dimScore >= val)) matched = false;
        else if (op === '<=' && !(dimScore <= val)) matched = false;
        else if (op === '==' && !(dimScore === val)) matched = false;
      }

      if (cond.evidenceTag && cond.minimumCount !== undefined) {
        const count = evidenceTagsCount[cond.evidenceTag] ?? 0;
        if (count < cond.minimumCount) {
          matched = false;
        }
      }
    }

    if (matched) {
      // Map templates to actual values if needed, here we keep it basic
      results.push({
        id: insight.id,
        title: insight.title,
        body: insight.bodyTemplate,
        alternativeBody: insight.alternativeTemplate,
        confidence: minConfidence
      });
    }
  }

  return results;
}
