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

// Default public sandbox config for instant real-time testing.
// Users can customize this configuration in their repository for private environments.
const firebaseConfig = {
  apiKey: "AIzaSyAsJ4mK9_XFv1gXyP9-x6lHj8kK2Lp4mQ",
  authDomain: "mindprint-sandbox.firebaseapp.com",
  projectId: "mindprint-sandbox",
  storageBucket: "mindprint-sandbox.appspot.com",
  messagingSenderId: "109876543210",
  appId: "1:109876543210:web:abcdef123456"
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
    console.error('[FirebaseSubscription] Subscription error:', error);
  });
}

// 3. User Registration (online backend replacement)
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
}

// 4. User Login (online backend replacement)
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

// 5. Sync/Upload local sessions to cloud
export async function uploadSessionToCloud(sessionId: string, session: any, result: any) {
  const sessRef = doc(firestore, 'sessions', sessionId);
  await setDoc(sessRef, {
    session,
    result,
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
