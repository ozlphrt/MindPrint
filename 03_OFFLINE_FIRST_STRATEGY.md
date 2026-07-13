# Offline-First Strategy

## 1. Offline requirement

A user should be able to install the app before a flight, open a downloaded journey in airplane mode, complete it, receive at least a valid local result, and synchronize later.

## 2. Offline capability levels

### Level 1: App shell offline

The interface loads without connectivity.

### Level 2: Journey offline

Downloaded journey definitions, questions, assets, and local insight templates are available.

### Level 3: Completion offline

Answers, branching, scoring, and progress work entirely on-device.

### Level 4: Local result offline

The app computes dimensions, confidence, archetype, and templated insights locally.

### Level 5: Enhanced result after reconnect

The server may create a more polished interpretation, combine cross-journey history, and synchronize the Personal Map.

The MVP should support Levels 1–4.

## 3. Service-worker strategy

Use Workbox.

### Cache-first

- versioned JavaScript bundles;
- CSS;
- fonts;
- icons;
- journey illustrations;
- immutable journey definition files.

### Stale-while-revalidate

- journey catalog;
- public educational content;
- archetype descriptions.

### Network-first with fallback

- user profile;
- synchronized Personal Map;
- server-enhanced results.

### Never cache

- authentication callbacks;
- sensitive server responses unless encrypted storage is explicitly implemented;
- administrative pages.

## 4. Local storage

Use IndexedDB through Dexie.js.

Do not rely on localStorage for journey data.

Suggested tables:

```text
appMetadata
journeyDefinitions
journeySessions
responses
localProfiles
localResults
syncOperations
contentAssets
userPreferences
```

## 5. Local session record

Each active journey session should include:

```json
{
  "id": "uuid",
  "journeyId": "how-others-experience-me",
  "journeyVersion": "1.0.0",
  "status": "in_progress",
  "currentQuestionId": "q-009",
  "startedAt": "ISO timestamp",
  "updatedAt": "ISO timestamp",
  "completedAt": null,
  "responseCount": 8,
  "scoreSnapshot": {},
  "deviceId": "uuid",
  "syncStatus": "pending"
}
```

## 6. Persisting answers

When the user submits an answer:

1. Validate the answer locally.
2. Write the answer and updated session in one IndexedDB transaction.
3. Recalculate the local score snapshot.
4. Update the UI.
5. Add or update a synchronization operation.
6. Attempt sync only when online.

The UI must never depend on the sync request succeeding.

## 7. Synchronization queue

Every unsynchronized action becomes an idempotent operation:

```json
{
  "operationId": "uuid",
  "entityType": "response",
  "entityId": "uuid",
  "operationType": "upsert",
  "payload": {},
  "createdAt": "ISO timestamp",
  "attemptCount": 0,
  "nextAttemptAt": null,
  "status": "pending"
}
```

## 8. Idempotency

All write APIs must accept an idempotency key.

The same operation may be sent several times without creating duplicates.

Recommended server uniqueness:

```text
UNIQUE(user_id, client_operation_id)
```

## 9. Reconnect behavior

When connectivity returns:

1. Wait for a stable connection.
2. Refresh authentication if needed.
3. Upload pending sessions.
4. Upload responses in sequence.
5. Upload local result snapshots.
6. Fetch server acknowledgments.
7. Request enhanced result generation when eligible.
8. Mark successful operations complete.
9. Retain failed operations for retry.

Use exponential backoff with jitter.

## 10. Conflict handling

### Same journey completed on one device only

Server accepts the local session.

### Same journey edited on two devices

Do not silently merge ranked answers.

Recommended rule:

- preserve both sessions;
- mark one as active and one as alternate;
- ask the user which result to retain if both are complete.

### Published journey changed during offline use

The user completes the exact version they downloaded.

Do not mutate an in-progress session to a newer question version.

## 11. Result generation while offline

The local scoring engine should compute:

- normalized dimension scores;
- confidence per dimension;
- primary archetype;
- secondary archetype;
- local insight templates;
- evidence references.

The app may show:

> Your complete profile is ready. A more detailed interpretation will be added when you reconnect.

However, the offline result should still feel complete enough to satisfy the user.

## 12. Content download

Before starting a journey, show:

- Available offline
- Download required
- Update available

A journey package should contain:

- manifest;
- question definitions;
- branch rules;
- score mappings;
- local insight templates;
- archetype rules;
- required images and icons;
- integrity hash;
- content version.

## 13. Storage management

Provide a settings screen showing:

- downloaded journeys;
- storage used;
- pending sync status;
- last successful sync;
- delete local data;
- download updates.

## 14. Browser constraints

Test at minimum:

- Safari on iPhone
- Chrome on Android
- Safari on iPad
- Chrome on desktop
- Edge on desktop

iOS may suspend background work. Therefore, synchronization must also run when:

- the app opens;
- the app resumes;
- the online event fires;
- the user manually taps Sync.

Do not rely exclusively on Background Sync.

---

**EOF**
