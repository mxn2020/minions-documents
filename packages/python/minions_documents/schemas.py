"""
Minions Documents SDK — Type Schemas
Custom MinionType schemas for Minions Documents.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

document_type = MinionType(
    id="documents-document",
    name="Document",
    slug="document",
    description="A versioned text document with a title, body, and owner.",
    icon="📄",
    schema=[
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="format", type="select", label="format"),
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="contextRefType", type="string", label="contextRefType"),
        FieldDefinition(name="contextRefId", type="string", label="contextRefId"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="updatedAt", type="string", label="updatedAt"),
    ],
)

document_version_type = MinionType(
    id="documents-document-version",
    name="Document version",
    slug="document-version",
    description="An immutable snapshot of a document at a specific version number.",
    icon="🗃️",
    schema=[
        FieldDefinition(name="documentId", type="string", label="documentId"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="savedAt", type="string", label="savedAt"),
        FieldDefinition(name="savedBy", type="string", label="savedBy"),
        FieldDefinition(name="changelog", type="string", label="changelog"),
    ],
)

document_template_type = MinionType(
    id="documents-document-template",
    name="Document template",
    slug="document-template",
    description="A reusable document scaffold with placeholder fields.",
    icon="🖨️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="placeholders", type="string", label="placeholders"),
        FieldDefinition(name="category", type="string", label="category"),
        FieldDefinition(name="tags", type="string", label="tags"),
    ],
)

attachment_type = MinionType(
    id="documents-attachment",
    name="Attachment",
    slug="attachment",
    description="A file or binary asset linked to any Minion.",
    icon="📎",
    schema=[
        FieldDefinition(name="filename", type="string", label="filename"),
        FieldDefinition(name="mimeType", type="string", label="mimeType"),
        FieldDefinition(name="sizeBytes", type="number", label="sizeBytes"),
        FieldDefinition(name="url", type="string", label="url"),
        FieldDefinition(name="contextRefType", type="string", label="contextRefType"),
        FieldDefinition(name="contextRefId", type="string", label="contextRefId"),
        FieldDefinition(name="uploadedAt", type="string", label="uploadedAt"),
        FieldDefinition(name="uploadedBy", type="string", label="uploadedBy"),
    ],
)

custom_types: list[MinionType] = [
    document_type,
    document_version_type,
    document_template_type,
    attachment_type,
]

