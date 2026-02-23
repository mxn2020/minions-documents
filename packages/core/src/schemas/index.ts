/**
 * @module @minions-documents/sdk/schemas
 * Custom MinionType schemas for Minions Documents.
 */

import type { MinionType } from 'minions-sdk';

export const documentType: MinionType = {
  id: 'documents-document',
  name: 'Document',
  slug: 'document',
  description: 'A versioned text document with a title, body, and owner.',
  icon: '📄',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'format', type: 'select', label: 'format' },
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'contextRefType', type: 'string', label: 'contextRefType' },
    { name: 'contextRefId', type: 'string', label: 'contextRefId' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'updatedAt', type: 'string', label: 'updatedAt' },
  ],
};

export const documentversionType: MinionType = {
  id: 'documents-document-version',
  name: 'Document version',
  slug: 'document-version',
  description: 'An immutable snapshot of a document at a specific version number.',
  icon: '🗃️',
  schema: [
    { name: 'documentId', type: 'string', label: 'documentId' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'savedAt', type: 'string', label: 'savedAt' },
    { name: 'savedBy', type: 'string', label: 'savedBy' },
    { name: 'changelog', type: 'string', label: 'changelog' },
  ],
};

export const documenttemplateType: MinionType = {
  id: 'documents-document-template',
  name: 'Document template',
  slug: 'document-template',
  description: 'A reusable document scaffold with placeholder fields.',
  icon: '🖨️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'placeholders', type: 'string', label: 'placeholders' },
    { name: 'category', type: 'string', label: 'category' },
    { name: 'tags', type: 'string', label: 'tags' },
  ],
};

export const attachmentType: MinionType = {
  id: 'documents-attachment',
  name: 'Attachment',
  slug: 'attachment',
  description: 'A file or binary asset linked to any Minion.',
  icon: '📎',
  schema: [
    { name: 'filename', type: 'string', label: 'filename' },
    { name: 'mimeType', type: 'string', label: 'mimeType' },
    { name: 'sizeBytes', type: 'number', label: 'sizeBytes' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'contextRefType', type: 'string', label: 'contextRefType' },
    { name: 'contextRefId', type: 'string', label: 'contextRefId' },
    { name: 'uploadedAt', type: 'string', label: 'uploadedAt' },
    { name: 'uploadedBy', type: 'string', label: 'uploadedBy' },
  ],
};

export const customTypes: MinionType[] = [
  documentType,
  documentversionType,
  documenttemplateType,
  attachmentType,
];

