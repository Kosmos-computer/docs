---
sidebar_position: 2
slug: /kosmos/concepts
title: Concepts
---

Core vocabulary for running and integrating Kosmos.

## Instance / environment

A **Kosmos instance** (also called a **Kosmos environment**) is one running server with its own accounts, data, sessions, and API tokens. Clients — browser, desktop, mobile, or the [SDK](/sdk/overview) — point at that instance’s base URL.

| Kind | Example URL |
|------|-------------|
| **Kosmos Cloud (hosted)** | `https://kosmos-<name>.fly.dev` |
| **Local development** | `http://127.0.0.1:4610` (shell) / `:4600` (API) |
| **Self-host** | Your HTTPS host (Docker, Coolify, VPS) |

There is no global multi-tenant API. Tokens and data stay on the instance they were created for.

## Control plane vs tenant

```
┌──────────────────────┐     provisions      ┌─────────────────────┐
│  Control plane       │ ─────────────────►  │  Your tenant        │
│  app.kosmos.computer │                     │  kosmos-*.fly.dev   │
│  signup · billing    │ ◄── Stripe / portal │  shell · API · data │
└──────────────────────┘                     └─────────────────────┘
```

- The **control plane** handles signup, Stripe checkout, provisioning, and subscription lifecycle.
- Your **tenant** is the private Kosmos instance you open and sign into. Agent API tokens are minted **on the tenant** (Settings → External Access), not by the control plane.

## Shell, workspaces, and agents

| Concept | Meaning |
|---------|---------|
| **Shell** | The OS chrome — NavRail, windows, focus model |
| **Workspace** | A primary surface (Chat, Studio, Settings, …) |
| **Agent** | Runtime that uses tools and can emit generative UI |
| **Arco blocks** | Schema-validated UI units agents assemble in chat and apps |

## Naming: Cloud, Hosted, instance

Product surfaces use a few related names:

| Name | Where you see it | Meaning |
|------|------------------|---------|
| **Kosmos Cloud** | Settings → Kosmos Cloud (desktop) | Connect the desktop thin client to a hosted instance |
| **Kosmos Hosted** | Settings → Subscriptions / Billing | The managed subscription and plan standing |
| **Hosted instance / tenant** | Welcome email, docs, SDK | Your private `kosmos-<name>.fly.dev` environment |

In these docs, **Kosmos Cloud** means the managed hosted product path; **instance** or **tenant** means the running environment itself.

## Next steps

- [Get a hosted instance](/kosmos/cloud-get-instance)
- [Connect the desktop app](/kosmos/cloud-desktop-connect)
- [What is Arco?](/guide/what-is-arco)
