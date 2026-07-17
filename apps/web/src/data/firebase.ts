import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  where, 
  onSnapshot, 
  getDocs 
} from 'firebase/firestore';

// Reads from Vite environment variables, falling back to a shared sandbox project
const firebaseConfig = {
  apiKey: "AIzaSyCLj--rmWNTNNW-idgvkIOiemuC7qi4xek",
  authDomain: "mindprint-cee8c.firebaseapp.com",
  projectId: "mindprint-cee8c",
  storageBucket: "mindprint-cee8c.firebasestorage.app",
  messagingSenderId: "955726659291",
  appId: "1:955726659291:web:21e2cc6c8337245fca96fe"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// 1. Submit peer feedback from phone (anonymous)
export async function submitOnlineFeedback(sessionId: string, feedbackFor: string, result: any) {
  const fbRef = doc(firestore, 'feedbacks', sessionId);
  await setDoc(fbRef, {
    sessionId,
    feedbackFor: feedbackFor.toLowerCase(),
    result,
    submittedAt: new Date().toISOString()
  });
}

// 2. Real-time feedback subscription for PC
export function subscribeToReceivedFeedback(username: string, onUpdate: (feedbacks: any[]) => void) {
  const q = query(
    collection(firestore, 'feedbacks'),
    where('feedbackFor', '==', username.toLowerCase())
  );
  return onSnapshot(q, (snapshot) => {
    const list = snapshot.docs.map(doc => doc.data());
    onUpdate(list);
  }, (error) => {
    console.error('[Firebase] Subscription failed:', error);
  });
}

// 3. User Registration
export async function registerOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const userRef = doc(firestore, 'users', username.toLowerCase());
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    throw new Error('Username already exists');
  }
  await setDoc(userRef, {
    username,
    passwordHash,
    deviceId,
    createdAt: new Date().toISOString()
  });
  return { username };
}

// 4. User Login
export async function loginOnlineUser(username: string, passwordHash: string, deviceId: string) {
  const userRef = doc(firestore, 'users', username.toLowerCase());
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    throw new Error('Invalid username or password');
  }
  const data = userDoc.data();
  if (data.passwordHash !== passwordHash) {
    throw new Error('Invalid username or password');
  }
  if (data.deviceId !== deviceId) {
    await setDoc(userRef, { ...data, deviceId }, { merge: true });
  }
  return data;
}

// 4b. Unified Login & Registration
export async function unifiedLoginRegister(username: string, passwordHash: string, deviceId: string) {
  const userRef = doc(firestore, 'users', username.toLowerCase());
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    // Register new user
    await setDoc(userRef, {
      username,
      passwordHash,
      deviceId,
      createdAt: new Date().toISOString()
    });
    return { username, isNew: true };
  } else {
    // Login existing user
    const data = userDoc.data();
    if (data.passwordHash !== passwordHash) {
      throw new Error('Incorrect password for this username');
    }
    if (data.deviceId !== deviceId) {
      await setDoc(userRef, { ...data, deviceId }, { merge: true });
    }
    return { username: data.username, isNew: false };
  }
}

// 5. Sync/Upload local sessions to cloud
export async function uploadSessionToCloud(sessionId: string, session: any, result: any) {
  const cleanSession = session ? JSON.parse(JSON.stringify(session)) : null;
  const cleanResult = result ? JSON.parse(JSON.stringify(result)) : null;

  const sessRef = doc(firestore, 'sessions', sessionId);
  await setDoc(sessRef, {
    session: cleanSession,
    result: cleanResult,
    updatedAt: new Date().toISOString()
  });
}

// 6. Fetch user's self-assessments from cloud
export async function fetchUserCloudSessions(deviceId: string) {
  const q = query(
    collection(firestore, 'sessions'),
    where('session.deviceId', '==', deviceId)
  );
  const snap = await getDocs(q);
  return snap.docs.map(doc => doc.data());
}
