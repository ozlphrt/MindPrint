import Dexie, { Table } from 'dexie';
import { JourneySession, Response, Result, SyncOperation } from '@mindprint/shared-types';

export class MindPrintDatabase extends Dexie {
  journeySessions!: Table<JourneySession, string>;
  responses!: Table<Response, string>;
  localResults!: Table<Result, string>;
  syncOperations!: Table<SyncOperation, string>;

  constructor() {
    super('MindPrintDatabase');
    this.version(1).stores({
      journeySessions: 'id, journeyId, status, syncStatus',
      responses: 'id, sessionId, questionId',
      localResults: 'sessionId, journeyId',
      syncOperations: 'operationId, entityType, entityId, status'
    });
  }
}

export const db = new MindPrintDatabase();
