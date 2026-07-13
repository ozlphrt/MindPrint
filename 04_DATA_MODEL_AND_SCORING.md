# Data Model and Scoring

## 1. Core entities

### User

Represents an anonymous or registered user.

### Device

Represents a browser installation.

### Journey

A named self-discovery experience.

### Journey Version

An immutable published definition.

### Question

A scenario or structured prompt.

### Answer Option

A selectable response with scoring effects.

### Journey Session

A user's attempt at a journey.

### Response

A ranked set of selected answer options.

### Profile Dimension

A continuous psychological or behavioral axis.

### Insight

A statement generated from profile evidence.

### Archetype

A memorable label derived from dimension patterns.

### Result

A snapshot of scores, insights, confidence, and archetypes.

### Feedback

The user's rating of an insight or result.

## 2. Recommended initial dimensions

Start with 8–10 dimensions.

Possible foundation:

1. Directness
2. Social energy
3. Intellectual curiosity
4. Relational sensitivity
5. Need for autonomy
6. Reflectiveness
7. Decisiveness
8. Emotional expressiveness
9. Cognitive flexibility
10. Influence style

These names are internal and may later be refined.

## 3. Question definition

```json
{
  "id": "q-001",
  "journeyVersionId": "journey-version-id",
  "type": "ranked_choice",
  "prompt": "Someone confidently says something you believe is clearly wrong.",
  "instructions": "Choose one primary answer and up to two secondary answers.",
  "minSelections": 1,
  "maxSelections": 3,
  "required": true,
  "answerOptions": [],
  "branchRules": [],
  "tags": [
    "conflict",
    "directness",
    "influence"
  ]
}
```

## 4. Answer option definition

```json
{
  "id": "q-001-c",
  "label": "Ask questions that lead them to reconsider it themselves.",
  "effects": [
    {
      "dimension": "influence_style",
      "delta": 0.9
    },
    {
      "dimension": "directness",
      "delta": -0.4
    },
    {
      "dimension": "intellectual_curiosity",
      "delta": 0.3
    }
  ],
  "evidenceTags": [
    "socratic_influence",
    "indirect_challenge"
  ]
}
```

## 5. Ranked answer weights

Recommended defaults:

```text
Rank 1: 1.00
Rank 2: 0.45
Rank 3: 0.20
```

The effective score is:

```text
answer effect × rank weight × question discrimination weight
```

Do not allow every question to affect every dimension.

## 6. Question quality metadata

Each question should include:

- target dimensions;
- expected discrimination;
- social-desirability risk;
- ambiguity risk;
- context sensitivity;
- reverse-coded status;
- validation status;
- author;
- version;
- review notes.

## 7. Adaptive branching

A branch should be triggered by evidence, not a single answer whenever possible.

Example:

```text
If relational_sensitivity > 0.65
AND directness < 0.45
AND fewer than 3 questions have tested conflict behavior
THEN select a conflict-verification question.
```

The engine should choose the next question based on:

1. required coverage;
2. confidence gaps;
3. branch eligibility;
4. repetition avoidance;
5. remaining journey length.

## 8. Score normalization

Raw score per dimension:

```text
sum(weighted answer effects)
```

Normalize relative to the theoretical minimum and maximum for the questions actually answered.

Recommended output:

```text
0–100 dimension score
0–100 confidence score
evidence count
contradiction index
```

## 9. Confidence

Confidence should increase when:

- several independent questions point in the same direction;
- high-discrimination questions agree;
- scenario and forced-choice questions agree;
- later verification questions confirm the hypothesis.

Confidence should decrease when:

- ranked choices conflict;
- answers are highly context-dependent;
- evidence is sparse;
- reverse-coded questions disagree;
- the user repeatedly chooses many answers.

## 10. Contradiction detection

Contradictions are not necessarily errors.

Example:

- high social energy;
- low tolerance for superficial interaction.

Interpretation:

> Socially energized, but selective about conversational depth.

Contradiction rules should identify combinations that create an interesting tension.

## 11. Archetype model

Archetypes should be derived from dimensions.

Example:

```json
{
  "id": "socratic-connector",
  "name": "The Socratic Connector",
  "idealVector": {
    "social_energy": 75,
    "intellectual_curiosity": 85,
    "relational_sensitivity": 72,
    "directness": 45,
    "influence_style": 88
  },
  "minimumConfidence": 60
}
```

Use vector distance or weighted similarity to find:

- closest primary archetype;
- closest secondary archetype.

Do not assign an archetype when confidence is too low.

## 12. Insight definition

```json
{
  "id": "insight-understanding-before-judging",
  "conditions": [
    {
      "dimension": "reflectiveness",
      "operator": ">=",
      "value": 65
    },
    {
      "evidenceTag": "seek_context_first",
      "minimumCount": 2
    }
  ],
  "title": "You tend to understand before judging.",
  "bodyTemplate": "Your answers suggest that...",
  "alternativeTemplate": "An alternative explanation is...",
  "confidenceRule": "weighted_evidence"
}
```

## 13. Result structure

```json
{
  "sessionId": "uuid",
  "journeyVersion": "1.0.0",
  "dimensions": [],
  "primaryArchetype": {},
  "secondaryArchetype": {},
  "insights": [],
  "contradictions": [],
  "blindSpots": [],
  "uncomfortableQuestion": {},
  "generatedAt": "ISO timestamp",
  "generationMode": "local"
}
```

## 14. AI boundaries

The server may receive structured evidence such as:

```json
{
  "dimensions": {},
  "confidence": {},
  "evidenceTags": [],
  "selectedInsightIds": [],
  "archetypes": []
}
```

The AI may rewrite and connect approved insight content.

The AI must not invent:

- unsupported traits;
- diagnoses;
- childhood explanations;
- trauma;
- mental-health conditions;
- certainty beyond the computed confidence.

---

**EOF**
