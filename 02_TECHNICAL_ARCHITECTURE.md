# Technical Architecture

## 1. Recommended stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Zustand for lightweight state management
- TanStack Query for server state and synchronization
- Dexie.js over IndexedDB for offline persistence
- Zod for runtime validation
- Workbox for service-worker generation and caching
- Tailwind CSS or CSS Modules
- Framer Motion for restrained transitions
- Vitest and React Testing Library
- Playwright for end-to-end tests

### Backend

Recommended default:

- Node.js
- TypeScript
- Fastify
- PostgreSQL
- Prisma ORM
- Redis only when required
- OpenAPI specification
- Background jobs using BullMQ or a managed queue

Alternative low-operations option:

- Supabase Auth
- Supabase PostgreSQL
- Supabase Edge Functions
- Supabase Storage

Supabase is appropriate for an MVP. A custom Fastify backend offers greater long-term control.

### AI layer

Use AI only for:

- transforming deterministic profile data into readable insight prose;
- generating alternative explanations;
- varying wording;
- creating development-time drafts for questions and archetypes.

Do not use AI for:

- primary scoring;
- deciding which answer means what at runtime;
- replacing validation rules;
- making clinical claims;
- interpreting unstructured data without evidence.

### Hosting

Recommended:

- Frontend: Cloudflare Pages, Vercel, or Netlify
- API: Fly.io, Render, Railway, Cloud Run, or Supabase
- Database: managed PostgreSQL
- Object storage: S3-compatible storage
- CDN: Cloudflare or hosting-provider CDN

## 2. High-level system

```text
PWA Client
  ├── UI and journey engine
  ├── deterministic scoring engine
  ├── local insight templates
  ├── IndexedDB
  ├── service worker
  └── sync queue
          │
          ▼
API Gateway / Backend
  ├── authentication
  ├── journey content API
  ├── sync API
  ├── result generation API
  ├── user feedback API
  ├── analytics events
  └── administration API
          │
          ▼
PostgreSQL
  ├── users
  ├── journey definitions
  ├── question versions
  ├── responses
  ├── profile dimensions
  ├── generated results
  ├── sync records
  └── audit metadata
```

## 3. Frontend modules

```text
src/
  app/
    App.tsx
    router.tsx
    providers.tsx

  features/
    onboarding/
    journeys/
    questionnaire/
    results/
    personal-map/
    sync/
    settings/
    auth/

  domain/
    questions/
    scoring/
    archetypes/
    insights/
    profile/

  data/
    local/
    remote/
    repositories/

  service-worker/
    register.ts
    messages.ts

  shared/
    components/
    hooks/
    utilities/
    validation/
    types/
```

## 4. Journey engine responsibilities

The journey engine should:

- load a versioned journey definition;
- determine the next valid question;
- enforce answer rules;
- maintain ranked selections;
- calculate incremental dimension scores;
- calculate confidence;
- detect missing evidence;
- persist every response locally;
- expose progress;
- support resume;
- finalize the journey;
- generate a local result;
- queue synchronization.

## 5. Separation of concerns

### Content layer

Contains:

- question wording;
- answer options;
- scoring effects;
- branching rules;
- insight templates;
- archetype thresholds.

### Engine layer

Contains:

- selection validation;
- ranking weights;
- branching evaluation;
- score normalization;
- confidence calculation;
- result assembly.

### Presentation layer

Contains:

- question screens;
- answer interaction;
- progress indicators;
- reveal animations;
- result cards;
- offline status.

The engine must not contain hard-coded copy.

## 6. API endpoints

Suggested initial API:

```text
GET    /v1/journeys
GET    /v1/journeys/:journeyId/versions/:version
POST   /v1/sync/sessions
POST   /v1/sync/responses
POST   /v1/results/generate
POST   /v1/results/:resultId/feedback
GET    /v1/profile
POST   /v1/auth/anonymous-upgrade
GET    /v1/health
```

## 7. Authentication

MVP options:

### Anonymous-first

- Generate a local anonymous user ID.
- Allow full offline completion.
- Ask the user to create an account only when saving across devices.
- Link anonymous data to the new account after consent.

### Supported sign-in

- Email magic link
- Apple
- Google

Avoid requiring authentication before the first journey.

## 8. Content administration

At minimum, provide version-controlled JSON or YAML journey definitions.

Later, build an admin tool for:

- editing questions;
- setting answer weights;
- defining branches;
- previewing paths;
- simulating profiles;
- publishing a version;
- rolling back a version.

## 9. Observability

Use:

- Sentry for client and server errors;
- OpenTelemetry for backend tracing;
- structured JSON logs;
- privacy-safe product analytics;
- uptime monitoring;
- synchronization failure metrics.

Never log raw answers unless explicitly necessary and protected.

## 10. Performance targets

- Initial JavaScript below 250 KB compressed where practical.
- Lazy-load result visuals and secondary journeys.
- Cache static journey definitions.
- Avoid network calls during question navigation.
- Persist each answer asynchronously without blocking UI.
- Keep score calculations deterministic and local.

---

**EOF**
