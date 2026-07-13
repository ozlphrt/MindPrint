# Deployment and Operations

## 1. Environments

### Local

Developer machine and local database.

### Preview

Created automatically for pull requests.

### Development

Shared integration environment.

### Beta

Production-like environment for invited testers.

### Production

Public environment.

Each environment must have separate:

- database;
- authentication configuration;
- analytics property;
- object storage;
- AI credentials;
- secrets.

## 2. CI pipeline

On every pull request:

1. Install dependencies.
2. Validate formatting.
3. Run lint.
4. Run TypeScript checks.
5. Validate journey schemas.
6. Run unit tests.
7. Run integration tests.
8. Build web and API.
9. Run selected Playwright tests.
10. Generate preview deployment.

## 3. CD pipeline

On merge to `main`:

1. Build immutable artifacts.
2. Run database migration checks.
3. Deploy API.
4. Run health checks.
5. Deploy web application.
6. Publish service-worker assets.
7. Run smoke tests.
8. Record release metadata.
9. Notify the team.

## 4. Service-worker releases

Service-worker updates can break offline sessions if handled badly.

Rules:

- never force immediate activation during an active journey;
- show “Update available”;
- activate after completion or user approval;
- keep content versions immutable;
- test cache cleanup;
- retain files required by active journey sessions.

## 5. Feature flags

Use feature flags for:

- new journey releases;
- new scoring model;
- AI-enhanced results;
- account registration;
- share cards;
- experimental questions.

Flags should fail safely.

## 6. Backups

For PostgreSQL:

- daily automated backups;
- point-in-time recovery where available;
- monthly restoration test;
- documented retention;
- separate backup access permissions.

## 7. Monitoring

Monitor:

- API error rate;
- client crash rate;
- sync success rate;
- sync queue age;
- result-generation failures;
- journey completion rate;
- service-worker update errors;
- database latency;
- storage usage;
- authentication failures.

## 8. Alerts

Critical alerts:

- answer upload failures above threshold;
- database unavailable;
- authentication unavailable;
- client crash spike;
- synchronization duplicate spike;
- published journey package unavailable.

## 9. Incident response

For every incident:

1. Identify impact.
2. Stop further damage.
3. Preserve data.
4. Communicate clearly.
5. Restore service.
6. verify synchronization integrity.
7. document root cause.
8. add a regression test.

## 10. Rollback

Maintain:

- previous frontend deployment;
- previous API container;
- backward-compatible database migrations;
- previous published journey versions.

A frontend rollback must not invalidate locally stored sessions created by the newer version.

## 11. Cost control

MVP cost drivers:

- AI result generation;
- database storage;
- analytics;
- error monitoring;
- CDN traffic.

Reduce AI cost by:

- generating locally first;
- requesting enhanced text only once;
- caching result outputs;
- avoiding open-ended chat;
- sending structured compact evidence.

---

**EOF**
