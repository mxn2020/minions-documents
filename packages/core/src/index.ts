/**
 * Minions Documents SDK
 *
 * Versioned text documents, templates, and file attachments
 *
 * @module @minions-documents/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Documents.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
