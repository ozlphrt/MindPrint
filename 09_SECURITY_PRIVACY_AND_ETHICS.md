# Security, Privacy, and Ethics

## 1. Data classification

Personality responses and inferred profiles are sensitive personal data even when they are not medical data.

Treat as confidential:

- individual answers;
- dimension scores;
- archetypes;
- insight feedback;
- Personal Map;
- relationship comparisons;
- free-text feedback.

## 2. Data minimization

Collect only what is needed.

The MVP should not require:

- legal name;
- birth date;
- gender;
- employer;
- contact list;
- precise location.

## 3. Anonymous-first use

Allow users to complete the first journey without an account.

Explain clearly:

- what remains only on the device;
- what synchronizes;
- what creating an account changes;
- how to delete data.

## 4. Encryption

- HTTPS everywhere.
- Encryption at rest for managed databases.
- Secure authentication tokens.
- Never store tokens in insecure localStorage.
- Consider local encryption for especially sensitive future features.
- Do not include raw answers in logs or analytics.

## 5. Consent

Before synchronization, explain:

- what will be uploaded;
- why it is uploaded;
- how it will be used;
- whether AI processing occurs;
- how long it is retained.

## 6. User control

Users should be able to:

- use the app anonymously;
- export their results;
- delete a journey session;
- delete all local data;
- delete their cloud account and data;
- disable analytics where required;
- request correction or deletion.

## 7. Responsible product language

The app must state:

- it is designed for self-reflection;
- it is not a clinical diagnosis;
- results are probabilistic;
- people may behave differently by context;
- archetypes are shorthand, not fixed identities.

## 8. Safety boundaries

Do not provide diagnostic or deterministic claims related to:

- depression;
- anxiety disorders;
- personality disorders;
- trauma;
- autism;
- ADHD;
- addiction;
- dangerousness;
- employability;
- compatibility guarantees.

Where sensitive topics appear, provide neutral and non-alarmist wording.

## 9. AI governance

Store:

- prompt version;
- model version;
- structured evidence supplied;
- generated output;
- safety-filter result;
- regeneration reason.

AI output should be checked against rules that block:

- unsupported certainty;
- diagnosis;
- discriminatory inference;
- abusive language;
- fabricated evidence;
- identity claims not supplied by the user.

## 10. Research ethics

If aggregated data is later used to improve scoring:

- disclose this;
- anonymize or pseudonymize data;
- separate product analytics from research datasets;
- require explicit consent where appropriate;
- document retention and deletion;
- avoid selling inferred personality data.

## 11. Threats

Consider:

- account takeover;
- device theft;
- cross-site scripting;
- malicious journey definitions;
- API replay;
- sync duplication;
- unauthorized profile access;
- insecure share links;
- accidental sensitive-data exposure through analytics;
- prompt injection through future user-generated content.

## 12. Share cards

Share cards should contain only:

- archetype name;
- short trait summary;
- optional dimension graphic;
- application branding.

Do not include:

- raw answers;
- blind spots;
- sensitive relationship insights;
- full profile identifiers.

---

**EOF**
