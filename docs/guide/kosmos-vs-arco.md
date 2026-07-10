---
sidebar_position: 3
slug: /guide/kosmos-vs-arco
title: Kosmos vs Arco
---

| | **Kosmos** | **Arco** |
|---|------------|----------|
| **What it is** | Generative AI operating system | Generative UI library |
| **Owns** | Shell, workspaces, agent UX, focus model, app platform | Tokens, components, blocks, registry contract |
| **User-facing name** | "Kosmos" on the marketing site and in product copy | "Arco" in docs, spec, and library APIs |
| **Package / app** | [Kosmos-computer/Kosmos](https://github.com/Kosmos-computer/Kosmos), [Kosmos-computer/www](https://github.com/Kosmos-computer/www) marketing | [Kosmos-computer/docs](https://github.com/Kosmos-computer/docs), `src/components/ui/` in the prototype |
| **Demo** | http://localhost:4610 | https://kosmos-docs.vercel.app |

## How they connect

```
┌─────────────────────────────────────────┐
│  Kosmos shell (NavRail, windows, apps)  │
├─────────────────────────────────────────┤
│  Workspaces: Chat, Studio, Settings…    │
├─────────────────────────────────────────┤
│  Arco: tokens → ui/ → patterns/ → blocks│
├─────────────────────────────────────────┤
│  Engines: OpenClaw, OpenHands, Odysseus │
└─────────────────────────────────────────┘
```

When an agent generates UI:

1. Kosmos provides **context** — which workspace, window, and entity is in focus.
2. Arco provides **vocabulary** — which blocks and props are valid.
3. The **registry** (planned) validates output and maps it to React renderers.

## Naming in docs and code

- Use **Kosmos** when describing the OS, shell, workspaces, or end-user product.
- Use **Arco** when describing tokens, components, blocks, schemas, or the generative library.
- The prototype repo is named `Kosmos`; product branding on the website is Kosmos.

## SDK

Programmatic access to a Kosmos environment uses the [**Kosmos SDK**](/sdk/overview) (`@kosmos/sdk`) — not Arco. Arco appears in SDK integrations only when agents emit generative UI or `os_ui` events inside the shell.

See the [Arco spec overview](https://kosmos-www.vercel.app/spec.html) on the marketing site for architecture decisions.
