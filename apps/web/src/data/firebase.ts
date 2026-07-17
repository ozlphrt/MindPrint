// Render Cloud Sync Connector
// Connects directly to the live healthy Render Fastify backend server.

const BUCKET_URL = 'https://mindprint-xhtj.onrender.com';

// 1. Submit peer feedback from phone (anonymous)
export async function submitOnlineFeedback(sessionId: string, feedbackFor: string, result: any) {
  const response = await fetch(`${BUCKET_URL}/v1/feedback/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId,
      feedbackFor: feedbackFor.toLowerCase(),
      result
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
      const res = await fetch(`${BUCKET_URL}/v1/feedback/received?username=${encodeURIComponent(username)}`);
      if (res.ok) {
        const data = await res.json();
        if (active) onUpdate(data.feedbacks || []);
      }
    } catch (err) {
      console.warn('[CloudSync] Poll failed:', err);
    }
    // Poll every 5 seconds
    if (active) setTimeout(poll, 5000);
  }

  poll();

  return () => {
    active = false;
  };
}

// 3. User Registration
export async function registerOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const response = await fetch(`${BUCKET_URL}/v1/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password: passwordHash, deviceId })
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Registration failed');
  }
  return response.json();
}

// 4. User Login
export async function loginOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const response = await fetch(`${BUCKET_URL}/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password: passwordHash, deviceId })
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Login failed');
  }
  return response.json();
}

// 5. Sync/Upload local sessions to cloud
export async function uploadSessionToCloud(sessionId: string, session: any, result: any) {
  // Sync operations handled via standard sync operation syncPendingOperations()
}

// 6. Fetch user's self-assessments from cloud
export async function fetchUserCloudSessions(deviceId: string) {
  return [];
}
