import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.resolve('data');
const USERS_FILE = 'users.json';
const SESSIONS_FILE = 'sessions.json';
const RESULTS_FILE = 'results.json';
const FEEDBACKS_FILE = 'feedbacks.json';

// In-memory caches to speed up reads, synced with disk
let users: Record<string, any> = {};
let sessions: Record<string, any> = {};
let results: Record<string, any> = {};
let feedbacks: Record<string, any> = {};

// Helper to write JSON atomically to prevent file corruption
async function writeJsonAtomic(filename: string, data: any) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const filePath = path.join(DATA_DIR, filename);
    const tmpPath = filePath + '.tmp';
    await fs.writeFile(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
    await fs.rename(tmpPath, filePath);
  } catch (err) {
    console.error(`[DB] Failed to write ${filename}:`, err);
  }
}

// Helper to read JSON safely, fallback to empty object if not exists or invalid
async function readJsonSafe(filename: string): Promise<Record<string, any>> {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (err: any) {
    if (err.code !== 'ENOENT') {
      console.warn(`[DB] Failed to read or parse ${filename}, resetting to empty:`, err);
    }
    return {};
  }
}

// Initialize database by loading data from disk
export async function initDb() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  users = await readJsonSafe(USERS_FILE);
  sessions = await readJsonSafe(SESSIONS_FILE);
  results = await readJsonSafe(RESULTS_FILE);
  feedbacks = await readJsonSafe(FEEDBACKS_FILE);

  console.log(`[DB] Database initialized. Loaded ${Object.keys(users).length} users, ${Object.keys(sessions).length} sessions, ${Object.keys(results).length} results, ${Object.keys(feedbacks).length} feedbacks.`);
}

// User methods
export function getUser(username: string) {
  return users[username.toLowerCase()] || null;
}

export async function saveUser(username: string, userData: any) {
  users[username.toLowerCase()] = {
    username,
    ...userData
  };
  await writeJsonAtomic(USERS_FILE, users);
}

export function hasUser(username: string): boolean {
  return !!users[username.toLowerCase()];
}

// Session methods
export function getSession(sessionId: string) {
  return sessions[sessionId] || null;
}

export function getAllSessions() {
  return Object.values(sessions);
}

export async function saveSession(sessionId: string, sessionData: any) {
  sessions[sessionId] = sessionData;
  await writeJsonAtomic(SESSIONS_FILE, sessions);
}

// Result methods
export function getResult(sessionId: string) {
  return results[sessionId] || null;
}

export async function saveResult(sessionId: string, resultData: any) {
  results[sessionId] = resultData;
  await writeJsonAtomic(RESULTS_FILE, results);
}

// Feedback methods — peer feedback stored separately, keyed by sessionId
export async function saveFeedback(sessionId: string, feedbackData: any) {
  feedbacks[sessionId] = feedbackData;
  await writeJsonAtomic(FEEDBACKS_FILE, feedbacks);
}

export function getFeedbacksFor(username: string): any[] {
  return Object.values(feedbacks).filter(
    (f: any) => f.feedbackFor?.toLowerCase() === username.toLowerCase()
  );
}

export function getAllFeedbacks() {
  return Object.values(feedbacks);
}
