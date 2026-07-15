import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: true
});

// Global mock state stores
const sessionsStore = new Map<string, any>();
const resultsStore = new Map<string, any>();
const usersStore = new Map<string, any>(); // username -> { password, deviceId }
usersStore.set('Zirt', { password: '1234' });
usersStore.set('Firt', { password: '1234' });

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
        sessionsStore.set(op.entityId, op.payload);
      }
      if (op.entityType === 'result' && op.payload) {
        resultsStore.set(op.entityId, op.payload);
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
  const sessions = Array.from(sessionsStore.values());
  const total = sessions.length;
  const completed = sessions.filter(s => s.status === 'completed').length;
  const inProgress = total - completed;

  const dropoffs: Record<string, number> = {};

  sessions.forEach(s => {
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

  if (usersStore.has(username)) {
    return reply.code(400).send({ error: 'Username already exists' });
  }

  usersStore.set(username, { password, deviceId });
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

  const matchedKey = Array.from(usersStore.keys()).find(k => k.toLowerCase() === username.toLowerCase());
  const user = matchedKey ? usersStore.get(matchedKey) : null;
  if (!user || user.password !== password) {
    return reply.code(401).send({ error: 'Invalid username or password' });
  }

  // Update associated deviceId
  if (deviceId) {
    user.deviceId = deviceId;
  }

  fastify.log.info(`User logged in successfully: ${username}`);

  return reply.code(200).send({
    status: 'success',
    username: matchedKey || username,
    token: `mock-token-${crypto.randomUUID()}`
  });
});

// Retrieve User Sessions endpoint
fastify.get('/v1/user/sessions', async (request, reply) => {
  const { username } = request.query as { username?: string };

  if (!username) {
    return reply.code(400).send({ error: 'Username is required' });
  }

  const user = usersStore.get(username);
  if (!user) {
    return reply.code(404).send({ error: 'User not found' });
  }

  const userDeviceId = user.deviceId;

  // Filter completed sessions by matching deviceId
  const userSessions = Array.from(sessionsStore.values()).filter(
    (s: any) => s.deviceId === userDeviceId && s.status === 'completed'
  );

  // Map to include result payload
  const sessionsWithResults = userSessions.map((session: any) => {
    const result = resultsStore.get(session.id);
    return { session, result };
  });

  return reply.code(200).send({
    sessions: sessionsWithResults
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
