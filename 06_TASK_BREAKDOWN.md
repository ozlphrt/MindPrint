# Task Breakdown

## Epic 1 — Product definition

### Tasks

- Define the final product promise.
- Choose a working product name.
- Define initial target audience.
- Define the first journey.
- Establish non-clinical language rules.
- Define result sections.
- Define share-card content.
- Write success metrics.

### Acceptance criteria

- One signed-off product brief exists.
- MVP inclusions and exclusions are explicit.
- The first journey can be described in one sentence.

## Epic 2 — Personality model

### Tasks

- Define 8–10 dimensions.
- Define each dimension's low and high poles.
- Document overlaps and distinctions.
- Define confidence rules.
- Define contradiction patterns.
- Define evidence tags.
- Create initial archetype candidates.
- Map archetypes to dimension vectors.

### Acceptance criteria

- Every archetype can be derived mathematically.
- No archetype exists only as marketing copy.
- Each dimension is tested by at least three questions.

## Epic 3 — Question content

### Tasks

- Draft candidate questions.
- Categorize question formats.
- Add answer options.
- Add score effects.
- Add discrimination weights.
- Add social-desirability risk notes.
- Add branching metadata.
- Review for ambiguity.
- Pilot manually.
- Revise or remove weak questions.

### Acceptance criteria

- Each answer option is behaviorally distinct.
- No answer is obviously the socially desirable option.
- Questions avoid clinical claims.
- The full journey remains within the target time.

## Epic 4 — Journey engine

### Tasks

- Define TypeScript domain types.
- Build journey loader.
- Build answer validation.
- Build ranked-choice handling.
- Build branching evaluator.
- Build next-question selector.
- Build incremental scoring.
- Build confidence calculation.
- Build contradiction detection.
- Build archetype matching.
- Build result assembler.

### Acceptance criteria

- Same inputs always generate same outputs.
- Invalid ranked answers are rejected.
- Branch selection is unit tested.
- Engine runs without network access.

## Epic 5 — PWA foundation

### Tasks

- Create Vite React TypeScript project.
- Configure routing.
- Add application manifest.
- Add icons and install metadata.
- Configure Workbox.
- Cache the application shell.
- Add offline fallback screen.
- Add update-available flow.
- Test installation on iOS and Android.

### Acceptance criteria

- App installs successfully.
- App opens in airplane mode after first load.
- A new deployment does not corrupt active sessions.

## Epic 6 — Local persistence

### Tasks

- Configure Dexie database.
- Define schema and migrations.
- Save journey definitions.
- Save sessions.
- Save every response transactionally.
- Save score snapshots.
- Save local results.
- Save pending sync operations.
- Add local data deletion.

### Acceptance criteria

- Refresh, crash, and browser restart do not lose answers.
- Schema migrations preserve existing sessions.
- Local data can be deleted by the user.

## Epic 7 — Questionnaire UI

### Tasks

- Build journey selection screen.
- Build download-status indicator.
- Build question layout.
- Build ranked answer interaction.
- Build single-choice interaction.
- Build forced-choice interaction.
- Build progress indicator.
- Build back navigation policy.
- Build resume flow.
- Build completion transition.
- Add keyboard and screen-reader support.

### Acceptance criteria

- User understands primary and secondary ranking.
- Touch targets meet accessibility standards.
- UI remains usable one-handed.
- No accidental answer submission.

## Epic 8 — Results UI

### Tasks

- Build reveal sequence.
- Build archetype header.
- Build dimension visualization.
- Build insight cards.
- Build confidence display.
- Build alternative interpretation block.
- Build blind-spot card.
- Build contradiction card.
- Build uncomfortable question.
- Build result feedback controls.
- Build share-card image generation.

### Acceptance criteria

- Result does not expose raw internal scoring.
- Confidence is understandable.
- User can distinguish observation from interpretation.
- Share card contains no sensitive answer details.

## Epic 9 — Backend and sync

### Tasks

- Create API service.
- Create database schema.
- Add anonymous device identity.
- Add synchronization endpoints.
- Add idempotency support.
- Add authentication.
- Add anonymous-to-account upgrade.
- Add result storage.
- Add feedback storage.
- Add retry and conflict handling.

### Acceptance criteria

- Repeated sync does not duplicate responses.
- Offline-completed sessions upload successfully.
- Authentication failure does not delete local data.
- Conflicting sessions are preserved.

## Epic 10 — Analytics and feedback

### Tasks

- Define privacy-safe events.
- Track journey start and completion.
- Track question drop-off.
- Track answer revision.
- Track offline completion.
- Track sync failures.
- Track insight ratings.
- Track result sharing.
- Build basic dashboard.

### Acceptance criteria

- Analytics do not contain raw answer text.
- Users can opt out where required.
- Key MVP metrics are visible.

## Epic 11 — Quality and release

### Tasks

- Unit tests.
- Integration tests.
- End-to-end tests.
- Offline test matrix.
- Cross-browser test.
- Accessibility audit.
- Security review.
- Load test.
- Backup test.
- Launch checklist.

### Acceptance criteria

- No open critical defects.
- Offline acceptance scenarios pass.
- Recovery procedures are documented.

---

**EOF**
