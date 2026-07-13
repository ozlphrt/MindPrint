# Testing and Quality

## 1. Testing pyramid

### Unit tests

Cover:

- ranking weights;
- answer validation;
- branching rules;
- score normalization;
- confidence calculations;
- contradiction detection;
- archetype matching;
- content schema validation.

### Integration tests

Cover:

- answer submission to IndexedDB;
- session resume;
- score snapshot persistence;
- local result generation;
- sync queue creation;
- API idempotency;
- anonymous-account upgrade.

### End-to-end tests

Cover:

- complete journey online;
- complete journey offline;
- lose connection mid-journey;
- reconnect and sync;
- close and reopen app;
- update application during active session;
- create account after anonymous completion;
- share result.

## 2. Offline test matrix

Test:

- app installed before flight;
- journey downloaded;
- airplane mode enabled;
- journey completed;
- browser closed halfway;
- device restarted;
- browser storage nearly full;
- connection repeatedly changes;
- authentication expires while offline;
- server rejects one operation;
- user has two devices.

## 3. Browser matrix

Priority 1:

- Safari iOS current and previous major version
- Chrome Android current and previous major version
- Safari iPadOS current
- Chrome desktop current
- Edge desktop current

Priority 2:

- Firefox desktop
- Samsung Internet

## 4. Content testing

Every question should be tested for:

- comprehension;
- answer overlap;
- cultural assumptions;
- social desirability;
- leading wording;
- emotional discomfort;
- response distribution;
- correlation with intended dimension.

## 5. Result quality testing

Participants should rate each major insight:

- Exactly me
- Mostly true
- Partly true
- Not really
- Completely wrong

Also collect:

- Which insight felt most revealing?
- Which insight felt generic?
- Which statement felt unfair?
- Did the archetype fit?
- Would you share the result?

## 6. Simulation testing

Build a developer tool that can:

- generate random answer sets;
- force dimension profiles;
- test every branch;
- calculate archetype distributions;
- detect unreachable questions;
- detect impossible archetypes;
- detect overrepresented archetypes;
- compare scoring versions.

## 7. Accessibility

Target WCAG 2.2 AA.

Test:

- screen readers;
- keyboard navigation;
- reduced motion;
- text scaling;
- color contrast;
- focus visibility;
- touch target size;
- non-color status indicators.

## 8. Performance

Measure:

- first contentful paint;
- largest contentful paint;
- interaction latency;
- IndexedDB write time;
- service-worker activation;
- journey package download size;
- local result computation time;
- sync completion time.

## 9. Quality gates

Before production:

- all critical paths covered by Playwright;
- assessment engine at least 90% branch coverage;
- no critical accessibility violations;
- no unresolved data-loss defect;
- no known duplicate-sync defect;
- content schema validated;
- offline test suite passes.

---

**EOF**
