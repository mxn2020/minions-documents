---
title: Quick Start
description: Get up and running with Minions Documents in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-documents/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_documents import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
documents info
```
