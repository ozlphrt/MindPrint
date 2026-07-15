import Fastify from 'fastify';
import cors from '@fastify/cors';
import crypto from 'crypto';
import { 
  initDb, 
  getUser, 
  saveUser, 
  hasUser, 
  getSession, 
  getAllSessions, 
  saveSession, 
  getResult, 
  saveResult 
} from './db.js';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: true
});

fastify.get('/v1/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Idempotent sync endpoint
fastify.post('/v1/sync', async (request, reply) => {
  const body = request.body as { operations?: any[] };
  
  fastify.log.info(`Sync payload received with ${body.operations?.length ?? 0} operations.`);
  
  if (body.operations) {
    for (const op of body.operations) {
      if (op.entityType === 'session' && op.payload) {
        await saveSession(op.entityId, op.payload);
      }
      if (op.entityType === 'result' && op.payload) {
        await saveResult(op.entityId, op.payload);
      }
    }
  }
  
  // Respond that they are saved successfully
  return reply.code(200).send({
    status: 'success',
    syncedIds: body.operations?.map((op: any) => op.operationId) ?? []
  });
});

// Drop-off analytics endpoint
fastify.get('/v1/analytics/dropoff', async () => {
  const sessions = getAllSessions();
  const total = sessions.length;
  const completed = sessions.filter((s: any) => s.status === 'completed').length;
  const inProgress = total - completed;

  const dropoffs: Record<string, number> = {};

  sessions.forEach((s: any) => {
    if (s.status === 'in_progress' && s.currentQuestionId) {
      dropoffs[s.currentQuestionId] = (dropoffs[s.currentQuestionId] || 0) + 1;
    }
  });

  return {
    summary: {
      totalSessions: total,
      completedSessions: completed,
      inProgressSessions: inProgress,
      completionRate: total > 0 ? `${((completed / total) * 100).toFixed(1)}%` : '0%'
    },
    dropoffs
  };
});

// Feedback reception endpoint
fastify.post('/v1/feedback', async (request, reply) => {
  const { sessionId, type, rating, insightId, feedback } = request.body as {
    sessionId: string;
    type: 'overall' | 'insight';
    rating?: number;
    insightId?: string;
    feedback?: string;
  };
  
  fastify.log.info(`Feedback received - Session: ${sessionId}, Type: ${type}, Rating: ${rating}, InsightId: ${insightId}, Feedback: ${feedback}`);
  
  return reply.code(200).send({ status: 'success' });
});

// User Registration endpoint
fastify.post('/v1/auth/register', async (request, reply) => {
  const { username, password, deviceId } = request.body as { username?: string, password?: string, deviceId?: string };
  
  if (!username || !password) {
    return reply.code(400).send({ error: 'Username and password are required' });
  }

  if (hasUser(username)) {
    return reply.code(400).send({ error: 'Username already exists' });
  }

  await saveUser(username, { password, deviceId });
  fastify.log.info(`User registered successfully: ${username}`);

  return reply.code(200).send({
    status: 'success',
    username,
    token: `mock-token-${crypto.randomUUID()}`
  });
});

// User Login endpoint
fastify.post('/v1/auth/login', async (request, reply) => {
  const { username, password, deviceId } = request.body as { username?: string, password?: string, deviceId?: string };

  if (!username || !password) {
    return reply.code(400).send({ error: 'Username and password are required' });
  }

  const user = getUser(username);
  if (!user || user.password !== password) {
    return reply.code(401).send({ error: 'Invalid username or password' });
  }

  // Update associated deviceId
  if (deviceId && user.deviceId !== deviceId) {
    user.deviceId = deviceId;
    await saveUser(user.username, user);
  }

  fastify.log.info(`User logged in successfully: ${user.username}`);

  return reply.code(200).send({
    status: 'success',
    username: user.username,
    token: `mock-token-${crypto.randomUUID()}`
  });
});

// Retrieve User Sessions and Feedback endpoint
fastify.get('/v1/user/sessions', async (request, reply) => {
  const { username } = request.query as { username?: string };

  if (!username) {
    return reply.code(400).send({ error: 'Username is required' });
  }

  const user = getUser(username);
  if (!user) {
    return reply.code(404).send({ error: 'User not found' });
  }

  const userDeviceId = user.deviceId;

  // Filter completed sessions by matching deviceId OR if it is feedback completed for this user
  const userSessions = getAllSessions().filter(
    (s: any) => (s.deviceId === userDeviceId || s.feedbackFor?.toLowerCase() === username.toLowerCase()) && s.status === 'completed'
  );

  // Map to include result payload
  const sessionsWithResults = userSessions.map((session: any) => {
    const result = getResult(session.id);
    return { session, result };
  });

  return reply.code(200).send({
    sessions: sessionsWithResults
  });
});

const start = async () => {
  try {
    // Initialize atomic database connection
    await initDb();
    
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`[API] Server listening on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
