import { db } from './db.ts';
import { uploadSessionToCloud } from './firebase.ts';

let isSyncing = false;

export async function syncPendingOperations(): Promise<void> {
  if (isSyncing) return;
  if (!navigator.onLine) return;

  try {
    isSyncing = true;

    // Fetch all pending or failed sync operations
    const pendingOps = await db.syncOperations
      .where('status')
      .anyOf(['pending', 'failed'])
      .toArray();

    if (pendingOps.length === 0) {
      return;
    }

    console.log(`[SyncEngine] Syncing ${pendingOps.length} operations to Firestore...`);

    const syncedIds: string[] = [];

    for (const op of pendingOps) {
      try {
        if (op.entityType === 'session' && op.payload) {
          const result = await db.localResults.get(op.entityId);
          await uploadSessionToCloud(op.entityId, op.payload, result || null);
          syncedIds.push(op.operationId);
        } else if (op.entityType === 'result' && op.payload) {
          const session = await db.journeySessions.get(op.entityId);
          await uploadSessionToCloud(op.entityId, session || null, op.payload);
          syncedIds.push(op.operationId);
        } else {
          // Instantly resolve other operations
          syncedIds.push(op.operationId);
        }
      } catch (err) {
        console.error(`[SyncEngine] Failed to sync operation ${op.operationId}:`, err);
      }
    }

    if (syncedIds.length > 0) {
      console.log(`[SyncEngine] Successfully synced ${syncedIds.length} operations to Firestore`);
      
      // Delete synced operations from local database to prune queue
      await db.transaction('rw', [db.syncOperations], async () => {
        await db.syncOperations.bulkDelete(syncedIds);
      });
    }
  } catch (error) {
    console.error(`[SyncEngine] Sync failed:`, error);
  } finally {
    isSyncing = false;
  }
}

// Start periodic syncing every 30 seconds if online
if (typeof window !== 'undefined') {
  setInterval(() => {
    syncPendingOperations().catch(err => console.error('Periodic sync check failed:', err));
  }, 30000);
}
