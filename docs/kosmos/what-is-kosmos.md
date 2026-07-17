---
sidebar_position: 1
slug: /kosmos/what-is-kosmos
title: What is Kosmos?
---

**Kosmos** is a generative AI operating system for integrated work and life. One shell for chat, code, files, and generated apps — with agents that share focus context across every workspace.

Kosmos is **not** a chat sidebar bolted onto an IDE. It owns the shell, workspaces, agent UX, app platform, and the APIs that clients and the [Kosmos SDK](/sdk/overview) talk to.

## What you get

- **Stable shell** — NavRail, windows, and workspaces that stay consistent while agents and apps change underneath.
- **Agent surface** — Chat and tools that share which workspace, window, and entity are in focus.
- **Generated apps** — UI assembled from [Arco](/guide/what-is-arco) tokens, components, and blocks.
- **Platforms** — Desktop (Electron), Android APK, Chromebook, SteamOS, and browser/PWA. iOS is coming.
- **Hosted or self-run** — [Kosmos Cloud](/kosmos/cloud-get-instance) for a private managed instance, or [run locally](/kosmos/run-locally) / [self-host](/kosmos/self-host).

## How it fits together

```
┌─────────────────────────────────────────┐
│  Clients (desktop, mobile, browser)     │
├─────────────────────────────────────────┤
│  Kosmos shell (NavRail, windows, apps)  │
├─────────────────────────────────────────┤
│  Workspaces: Chat, Studio, Settings…    │
├─────────────────────────────────────────┤
│  Arco: tokens → ui/ → patterns/ → blocks│
├─────────────────────────────────────────┤
│  Engines: OpenClaw, Techno Studio, …    │
└─────────────────────────────────────────┘
```

| Layer | Owns |
|-------|------|
| **Kosmos** | Shell, workspaces, agent UX, instance APIs, accounts |
| **Arco** | Design tokens, UI primitives, generative blocks |
| **Kosmos SDK** | Programmatic access to a Kosmos environment |
| **Kosmos Cloud** | Signup, provisioning, billing for hosted tenants |

## Kosmos Cloud

[Kosmos Cloud](/kosmos/cloud-get-instance) is the managed path: sign up at [app.kosmos.computer](https://app.kosmos.computer/signup), get a private instance at `https://kosmos-<name>.fly.dev`, then manage plan, storage, and credits from Settings.

Prefer your own machine or VPS? See [Run locally](/kosmos/run-locally) and [Self-host](/kosmos/self-host).

## Next steps

- [Concepts](/kosmos/concepts) — instance, control plane, shell vocabulary
- [Get a hosted instance](/kosmos/cloud-get-instance) — signup through first owner account
- [Kosmos vs Arco](/guide/kosmos-vs-arco) — naming boundaries
- [SDK overview](/sdk/overview) — connect code to your environment
