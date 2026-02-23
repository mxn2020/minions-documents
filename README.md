# minions-documents

**Versioned text documents, templates, and file attachments**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-documents/sdk minions-sdk

# Python
pip install minions-documents

# CLI (global)
npm install -g @minions-documents/cli
```

---

## CLI

```bash
# Show help
documents --help
```

---

## Python SDK

```python
from minions_documents import create_client

client = create_client()
```

---

## Project Structure

```
minions-documents/
  packages/
    core/           # TypeScript core library (@minions-documents/sdk on npm)
    python/         # Python SDK (minions-documents on PyPI)
    cli/            # CLI tool (@minions-documents/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [documents.minions.help](https://documents.minions.help)
- Blog: [documents.minions.blog](https://documents.minions.blog)
- App: [documents.minions.wtf](https://documents.minions.wtf)

---

## License

[MIT](LICENSE)
