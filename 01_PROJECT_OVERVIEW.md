# Project Overview

## 1. Product vision

Create an offline-first Progressive Web App that helps people discover recurring patterns in how they think, decide, relate, respond to stress, and appear to others.

The product is not a clinical assessment and should not imitate Myers-Briggs, DISC, Insights Discovery, or another proprietary framework. It should use an original model supported by transparent scoring and carefully written interpretations.

## 2. Product promise

> Discover the patterns you cannot easily see from the inside.

## 3. Primary experience

1. The user selects a self-discovery journey.
2. The app asks one structured question at a time.
3. The user selects a primary answer and may optionally rank secondary answers.
4. The question path adapts according to earlier answers.
5. The app builds a multidimensional profile.
6. The user receives:
   - strong patterns;
   - possible contradictions;
   - blind spots;
   - how others may experience them;
   - confidence levels;
   - alternative explanations;
   - one memorable primary archetype;
   - an optional secondary archetype.
7. Future journeys add evidence to an evolving Personal Map.

## 4. Initial journey

### How do other people probably experience me?

This journey is recommended for the MVP because it is:

- immediately understandable;
- personally intriguing;
- suitable for multiple-choice scenarios;
- easy to share;
- broad enough to test the scoring architecture.

## 5. Initial target users

- Adults interested in self-reflection.
- People who enjoy personality tools but dislike simplistic labels.
- Travelers and commuters who may lack connectivity.
- Users who prefer structured questions over open-ended journaling.
- Friends or couples who may compare results later.

## 6. Core interaction model

The default question format is:

- one required primary answer;
- up to two optional secondary answers;
- explicit ranking;
- weighted scoring by rank.

Recommended default weights:

- Primary answer: 1.00
- Secondary answer: 0.45
- Tertiary answer: 0.20

The question designer may restrict specific questions to:

- single choice;
- primary plus secondary;
- ranked choice;
- forced trade-off;
- Likert scale;
- slider;
- ordered ranking.

## 7. Product principles

### 7.1 Structured, not chat-first

The main journey should not depend on free-text input. Structured responses improve:

- consistency;
- completion rate;
- offline usability;
- deterministic scoring;
- testability;
- interpretability.

Optional free text may be collected after a result for feedback, but it should not be required.

### 7.2 Insight before label

The result should first explain observed patterns and only then reveal the archetype.

### 7.3 Evidence-based wording

Every insight should be traceable to:

- one or more dimensions;
- supporting answers;
- a confidence score;
- competing interpretations.

### 7.4 No fake certainty

Avoid statements such as:

- “This is who you really are.”
- “You always behave this way.”
- “The test has revealed your true personality.”

Prefer:

- “Your answers suggest…”
- “A strong pattern appears…”
- “One possible interpretation is…”
- “This may be more likely when…”

### 7.5 Offline-first

The user must be able to:

- install the app;
- browse already downloaded journeys;
- answer questions;
- pause and resume;
- view locally computable results;
- safely queue data for later synchronization.

## 8. MVP scope

### Included

- PWA installation.
- One complete journey.
- 25–35 adaptive questions.
- Multiple ranked answer support.
- Deterministic local scoring.
- Local progress persistence.
- Offline completion.
- One primary and one secondary archetype.
- Insight cards with confidence levels.
- Result feedback:
  - Exactly me
  - Partly true
  - Not really
- Optional account creation after completion.
- Anonymous local usage.
- Sync when connectivity returns.

### Excluded from MVP

- Clinical or mental-health diagnosis.
- Relationship matching.
- Employer or hiring use.
- Live AI chat.
- User-generated tests.
- Social network features.
- Real-time multiplayer.
- Subscription billing.
- Complex localization.
- Native iOS or Android apps.

## 9. Success criteria

### Product

- At least 65% of users who start the journey finish it.
- Median completion time below 12 minutes.
- At least 60% of users rate the main result “Exactly me” or “Mostly true.”
- At least 25% save or share their archetype card.
- At least 30% start a second journey when available.

### Technical

- First meaningful screen available offline after installation.
- No answer loss after refresh, crash, or connection loss.
- Lighthouse PWA score of at least 95.
- Core journey interaction under 100 ms on a mid-range mobile device.
- Successful synchronization after reconnect in at least 99% of tested cases.

## 10. Major risks

- Generic or flattering results.
- Archetypes becoming more important than the underlying evidence.
- Poorly designed adaptive branching.
- Excessive dependence on AI-generated prose.
- Privacy concerns around personality data.
- Questions that accidentally measure social desirability rather than actual behavior.
- Offline synchronization bugs.
- Premature expansion before the first journey is validated.

## 11. Recommended product name direction

Do not choose a name that sounds clinical or diagnostic.

Potential naming territories:

- Mirror
- Within
- Patterns
- Unseen
- Inner Map
- Underneath
- Prism
- Echo
- Reveal
- Motif

Trademark and domain checks should be completed before selecting a final name.

---

**EOF**
