// Serverless Cloud Sync Connector
// Using a globally distributed KV database for 100% setup-free, zero-configuration sync.

const BUCKET_URL = 'https://kvdb.io/z7R4kP1n9X2w6Q8s3vY5t/';

// 1. Submit peer feedback from phone (anonymous)
export async function submitOnlineFeedback(sessionId: string, feedbackFor: string, result: any) {
  const key = `feedback:${feedbackFor.toLowerCase()}:${sessionId}`;
  const response = await fetch(`${BUCKET_URL}${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId,
      feedbackFor: feedbackFor.toLowerCase(),
      result,
      submittedAt: new Date().toISOString()
    })
  });
  if (!response.ok) {
    throw new Error(`Sync failed with status ${response.status}`);
  }
}

// 2. Real-time feedback subscription for PC
export function subscribeToReceivedFeedback(username: string, onUpdate: (feedbacks: any[]) => void) {
  let active = true;

  async function poll() {
    if (!active) return;
    try {
      // List all feedback keys for this user
      const listRes = await fetch(`${BUCKET_URL}?prefix=feedback:${username.toLowerCase()}:`);
      if (listRes.ok) {
        const keys: string[] = await listRes.json();
        if (keys.length > 0) {
          // Fetch all feedbacks in parallel
          const docs = await Promise.all(
            keys.map(async (key) => {
              const res = await fetch(`${BUCKET_URL}${key}`);
              return res.json();
            })
          );
          if (active) onUpdate(docs);
        } else {
          if (active) onUpdate([]);
        }
      }
    } catch (err) {
      console.warn('[CloudSync] Fetch failed:', err);
    }
    // Poll every 4 seconds for low-latency updates
    if (active) setTimeout(poll, 4000);
  }

  poll();

  return () => {
    active = false;
  };
}

// 3. User Registration
export async function registerOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const key = `user:${username.toLowerCase()}`;
  const check = await fetch(`${BUCKET_URL}${key}`);
  if (check.status === 200) {
    throw new Error('Username already exists');
  }
  await fetch(`${BUCKET_URL}${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, passwordHash, deviceId, createdAt: new Date().toISOString() })
  });
}

// 4. User Login
export async function loginOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const key = `user:${username.toLowerCase()}`;
  const res = await fetch(`${BUCKET_URL}${key}`);
  if (res.status !== 200) {
    throw new Error('Invalid username or password');
  }
  const data = await res.json();
  if (data.passwordHash !== passwordHash) {
    throw new Error('Invalid username or password');
  }
  return data;
}

// 5. Sync/Upload local sessions to cloud
export async function uploadSessionToCloud(sessionId: string, session: any, result: any) {
  const key = `session:${session.deviceId}:${sessionId}`;
  await fetch(`${BUCKET_URL}${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session, result, updatedAt: new Date().toISOString() })
  });
}

// 6. Fetch user's self-assessments from cloud
export async function fetchUserCloudSessions(deviceId: string) {
  const listRes = await fetch(`${BUCKET_URL}?prefix=session:${deviceId}:`);
  if (!listRes.ok) return [];
  const keys: string[] = await listRes.json();
  return Promise.all(
    keys.map(async (key) => {
      const res = await fetch(`${BUCKET_URL}${key}`);
      return res.json();
    })
  );
}
