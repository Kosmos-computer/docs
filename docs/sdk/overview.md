---
sidebar_position: 1
slug: /sdk/overview
title: SDK overview
---

The **Kosmos SDK** connects your code to a [**Kosmos environment**](/kosmos/concepts) — a running instance of the [generative AI operating system](/kosmos/what-is-kosmos). Use it to run agent chat turns, manage sessions, and automate platform workflows from scripts, backends, and CI pipelines.

Need an environment first? [Get a hosted instance](/kosmos/cloud-get-instance) or [run locally](/kosmos/run-locally).

## Kosmos vs Arco vs App Bridge

| | **Kosmos SDK** | **Arco** | **App Bridge SDK** |
|---|----------------|----------|---------------------|
| **What it is** | Client library for Kosmos server APIs | Generative UI library (tokens, blocks) | SDK for apps *inside* the Kosmos shell |
| **Package** | `@kosmos-computer/sdk` | Docs + `ui/` in the Kosmos repo | `packages/app-sdk` in the Kosmos repo |
| **You connect to** | A Kosmos environment URL | Block schemas and render contracts | The shell via postMessage |
| **Typical use** | Bots, integrations, automations | AI-generated UI in chat and apps | Third-party installed apps |

**Kosmos** owns the shell, agent runtime, workspaces, and REST API. **Arco** owns the UI vocabulary agents assemble inside Kosmos. The SDK talks to Kosmos; Arco appears in the stream only when the agent emits `os_ui` events or generative blocks.

## What you can build

- **Chat bots** — stream agent turns with typed `AgentEvent`s
- **Headless automations** — trigger agent work from cron, webhooks, or GitHub Actions
- **Backend integrations** — connect your service to a hosted Kosmos tenant
- **Remote Kosmos chaining** — one Kosmos environment relaying to another (same protocol)

## Architecture at a glance

```
┌─────────────────────┐
│  Your application   │
│  (@kosmos-computer/sdk)      │
└──────────┬──────────┘
           │ HTTPS + Bearer token
           │ POST /api/chat (SSE)
           ▼
┌─────────────────────┐
│  Kosmos server      │
│  agent · tools ·    │
│  apps · automations │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Arco (in shell)    │
│  generative UI      │
└─────────────────────┘
```

Each Kosmos environment is **instance-scoped**. Hosted tenants live at URLs like `https://kosmos-<name>.fly.dev`. There is no global multi-tenant API — your SDK client points at one environment.

## Packages

| Package | Description |
|---------|-------------|
| `@kosmos-computer/sdk` | HTTP + SSE client |
| `@kosmos-computer/types` | Shared types (`AgentEvent`, `Session`, …) |

Source: [Kosmos-computer/kosmos-sdk](https://github.com/Kosmos-computer/kosmos-sdk)

## Deployment modes

| Mode | Base URL | Auth |
|------|----------|------|
| **Local Kosmos** | `http://127.0.0.1:4600` (API server) | External client token or session login |
| **Hosted tenant** | `https://kosmos-<name>.fly.dev` | External client token |

[Get a hosted instance](/kosmos/cloud-get-instance) via Kosmos Cloud, or [run locally](/kosmos/run-locally).

## Next steps

- [Getting started](/sdk/getting-started) — install, mint a token, first chat turn
- [Architecture](/sdk/architecture) — how the client maps to Kosmos server routes
- [Agent events](/sdk/agent-events) — the `AgentEvent` stream protocol
- [Auth & tokens](/sdk/auth) — external clients vs session auth
