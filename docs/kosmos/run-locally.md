---
sidebar_position: 8
slug: /kosmos/run-locally
title: Run locally
---

Run Kosmos on your machine for development or a personal local instance — no Kosmos Cloud account required.

## Prerequisites

- Node.js 22+
- npm (workspaces enabled at the repo root)
- macOS: Xcode Command Line Tools (for native modules such as `better-sqlite3`)
- Linux: standard build tools for native modules

## Setup

Clone [Kosmos-computer/Kosmos](https://github.com/Kosmos-computer/Kosmos) and from the repo root:

```bash
npm install
npm run setup    # first run: .env, prompts, bundled apps
npm run dev      # API + shell
```

| Surface | URL |
|---------|-----|
| Kosmos shell (UI) | http://localhost:4610 |
| API server | http://localhost:4600 |

On first visit, complete the install wizard (model mode, then owner account).

An LLM API key is optional for a first boot — a mock provider works offline. Add a real key in the wizard or Settings when you want live models.

## Desktop app

For the Electron desktop shell against the local backend, follow the desktop packaging notes in the Kosmos repo. While developing, `npm run dev` is enough for the browser shell at `:4610`.

To point the desktop app at a **hosted** instance instead, see [Connect the desktop app](/kosmos/cloud-desktop-connect).

## Working on Arco UI

Arco tokens and components live in the same monorepo. After `npm run dev` is up:

- Tokens: `src/styles/tokens.css`
- Primitives: `src/components/ui/`
- Patterns: `src/components/patterns/`

See the [Arco getting started](/guide/getting-started) guide for library-focused workflows.

## Docs site locally

These docs are a separate repo ([Kosmos-computer/docs](https://github.com/Kosmos-computer/docs)):

```bash
npm install
npm start
```

## Next steps

- [Self-host](/kosmos/self-host) — Docker / Coolify / VPS
- [Get a hosted instance](/kosmos/cloud-get-instance) — managed cloud
- [SDK getting started](/sdk/getting-started) — point the SDK at `http://127.0.0.1:4600`
