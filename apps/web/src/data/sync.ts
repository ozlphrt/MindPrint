import { db } from './db.ts';

const getApiBaseUrl = () => {
  // Always use the online production API server to ensure both local and remote devices share the same database
  return 'https://mindprint-xhtj.onrender.com';
};

const API_BASE_URL = getApiBaseUrl();
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

    console.log(`[SyncEngine] Attempting to sync ${pendingOps.length} operations...`);

    const response = await fetch(`${API_BASE_URL}/v1/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ operations: pendingOps }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const result = await response.json();
    const syncedIds: string[] = result.syncedIds || [];

    if (syncedIds.length > 0) {
      console.log(`[SyncEngine] Successfully synced operations:`, syncedIds);
      
      // Delete synced operations from local database to prune queue
      await db.transaction('rw', [db.syncOperations], async () => {
        await db.syncOperations.bulkDelete(syncedIds);
      });
    }
  } catch (error) {
    console.error(`[SyncEngine] Sync failed:`, error);
    
    // Mark pending operations as failed so they can be retried later
    const pendingOps = await db.syncOperations
      .where('status')
      .equals('pending')
      .toArray();

    if (pendingOps.length > 0) {
      await db.transaction('rw', [db.syncOperations], async () => {
        const updated = pendingOps.map(op => ({ ...op, status: 'failed' as const }));
        await db.syncOperations.bulkPut(updated);
      });
    }
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
