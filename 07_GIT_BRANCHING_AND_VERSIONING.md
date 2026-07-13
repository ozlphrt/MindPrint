# Git Branching and Versioning

## 1. Repository strategy

Start with a monorepo.

Recommended structure:

```text
apps/
  web/
  api/
  admin/

packages/
  assessment-engine/
  content-schema/
  shared-types/
  ui/
  eslint-config/
  tsconfig/

content/
  journeys/
  archetypes/
  insights/

docs/
```

Recommended tooling:

- pnpm workspaces
- Turborepo
- Changesets
- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint

## 2. Branching model

Use trunk-based development with short-lived branches.

Permanent branches:

- `main`

Optional temporary stabilization branch:

- `release/x.y`

Feature branch formats:

```text
feat/ranked-answer-ui
feat/offline-sync-queue
fix/ios-resume-sync
content/journey-others-v1
chore/update-workbox
```

Do not maintain a long-lived `develop` branch unless the team becomes large enough to justify it.

## 3. Pull request rules

Every pull request should:

- describe the user-facing change;
- identify technical risk;
- include test coverage;
- include screenshots for UI changes;
- include migration notes;
- include offline impact;
- include privacy impact when relevant;
- reference an issue.

Recommended merge policy:

- squash merge;
- delete branch after merge;
- require passing CI;
- require at least one review;
- require two reviews for scoring or privacy changes.

## 4. Commit convention

Use Conventional Commits.

Examples:

```text
feat(questionnaire): support ranked secondary answers
fix(sync): prevent duplicate response uploads
content(journey): revise conflict question wording
test(scoring): add confidence contradiction cases
chore(ci): cache pnpm dependencies
```

## 5. Semantic versioning

Use SemVer:

```text
MAJOR.MINOR.PATCH
```

### Patch

- bug fixes;
- copy corrections;
- non-breaking visual adjustments;
- scoring implementation fixes that do not intentionally change the model.

### Minor

- new journey;
- new result section;
- backward-compatible API;
- new archetypes;
- intentional scoring model update with migration support.

### Major

- incompatible data schema;
- incompatible journey definition schema;
- result model redesign;
- sync protocol change without backward compatibility.

## 6. Separate content versioning

Application version and journey version must be independent.

Example:

```text
App version: 0.8.2
Journey: how-others-experience-me
Journey version: 1.3.0
Scoring model version: 1.1.0
Insight library version: 1.2.4
```

Every completed result must store all relevant versions.

## 7. Journey publishing

Journey versions are immutable after publication.

Workflow:

1. Create a draft version.
2. Validate schema.
3. Run path simulation.
4. Run scoring distribution simulation.
5. Complete content review.
6. Publish.
7. Make available for download.
8. Keep older versions available for in-progress sessions.

## 8. Release channels

Recommended channels:

- `dev`
- `preview`
- `beta`
- `production`

Journey content channels:

- `draft`
- `internal`
- `beta`
- `published`
- `retired`

## 9. Tags

Examples:

```text
web-v0.4.0
api-v0.3.1
journey-others-v1.0.0
model-v0.6.0
```

## 10. Changelog

Maintain:

- user-facing changelog;
- technical changelog;
- journey content changelog;
- scoring model changelog.

A scoring change must clearly state whether old results will:

- remain unchanged;
- be recalculated;
- be marked as created under an older model.

## 11. Database migrations

Use forward-only migrations in production.

Rules:

- migrations reviewed separately;
- destructive changes require backups;
- deploy compatible code before destructive schema cleanup;
- never couple a risky migration with a large UI release;
- test rollback or recovery procedure.

## 12. Release cadence

Suggested early cadence:

- Development deployments: every merge
- Beta: weekly
- Production patch: as needed
- Production minor: every 2–4 weeks
- Journey updates: only after validation

---

**EOF**
