# AI Coding Agent Kickoff Prompt

Build an offline-first Progressive Web App for structured self-discovery assessments.

## Product

The user selects a self-discovery journey, answers adaptive structured questions, and receives evidence-based insights plus a memorable archetype.

The first journey is:

> How do other people probably experience me?

The application is not a clinical or diagnostic tool.

## Core UX

- One question per screen.
- Mostly multiple choice.
- One required primary answer.
- Up to two optional ranked secondary answers.
- Default rank weights:
  - Primary: 1.00
  - Secondary: 0.45
  - Tertiary: 0.20
- Some questions may be single-choice, forced-choice, slider, or ranking.
- Save every answer immediately.
- Support pause and resume.
- Work fully offline after journey download.
- Produce a deterministic local result.
- Synchronize when connectivity returns.

## Technical stack

Use:

- pnpm
- Turborepo
- React
- TypeScript
- Vite
- React Router
- Zustand
- TanStack Query
- Dexie.js
- Zod
- Workbox
- Vitest
- React Testing Library
- Playwright
- Fastify
- PostgreSQL
- Prisma

## Repository

```text
apps/
  web/
  api/

packages/
  assessment-engine/
  content-schema/
  shared-types/
  ui/

content/
  journeys/
  archetypes/
  insights/

docs/
```

## Architectural rules

1. The assessment engine must be a pure TypeScript package.
2. The UI must not contain scoring logic.
3. Journey definitions must be data-driven and versioned.
4. Published journey versions are immutable.
5. The same answers must always produce the same local result.
6. Network failure must never block answering.
7. IndexedDB is the source of truth while offline.
8. Sync writes must be idempotent.
9. Do not rely exclusively on browser Background Sync.
10. AI must not perform primary scoring.

## First milestone

Implement:

- monorepo;
- web app;
- assessment-engine package;
- content schema;
- one sample journey with 8 questions;
- ranked answer UI;
- branching support;
- local scoring;
- IndexedDB session persistence;
- PWA manifest;
- service worker;
- offline completion;
- simple result page;
- unit tests;
- one Playwright offline test.

## Required domain types

Create types for:

- Journey
- JourneyVersion
- Question
- AnswerOption
- BranchRule
- Dimension
- JourneySession
- RankedSelection
- Response
- ScoreSnapshot
- Archetype
- Insight
- Result
- SyncOperation

## Output expectations

- Production-quality TypeScript.
- Strict type checking.
- Clear error handling.
- Accessible mobile-first UI.
- No hard-coded scoring inside React components.
- README with setup instructions.
- Sample content data.
- Automated tests.
- No unnecessary dependencies.

---

**EOF**
