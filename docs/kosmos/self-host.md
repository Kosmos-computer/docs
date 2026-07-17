---
sidebar_position: 9
slug: /kosmos/self-host
title: Self-host
---

Run your own Kosmos server (API + UI) on Docker, Coolify, a VPS, or a homelab — without Kosmos Cloud provisioning.

This page is a short pointer. Full deploy steps live in the Kosmos repo.

## Server-only (built UI + API)

From [Kosmos-computer/Kosmos](https://github.com/Kosmos-computer/Kosmos):

```bash
npm run build
npm start    # serves :4600
```

Or use the repo `Dockerfile` / Coolify compose. For HTTPS, set `ARCO_SECURE_COOKIES=1` and configure CORS as documented in the deploy guides.

## Coolify / Docker

See the Coolify runbook in the Kosmos repo:

- [deploy/coolify/README.md](https://github.com/Kosmos-computer/Kosmos/blob/main/deploy/coolify/README.md)

Important: mount a **named volume** at `/data` (or your `ARCO_DATA_DIR`) so redeploys do not wipe chats, apps, and settings.

## Clients

| Client | How it connects |
|--------|-----------------|
| **Browser / PWA** | Open your HTTPS origin |
| **Desktop** | Settings → Kosmos Cloud (or server profile) with your origin |
| **Mobile APK** | Enter the server host at first run / Settings → Server |

Each server is a separate instance (own accounts, drive, sessions).

## Kosmos Cloud vs self-host

| | **Kosmos Cloud** | **Self-host** |
|--|------------------|---------------|
| **Provisioning** | Control plane + Stripe | You run Docker/VPS |
| **Billing / credits** | Hosted plan + gateway | Bring your own model keys |
| **URL** | `kosmos-*.fly.dev` | Your domain |
| **Ops** | Managed | You own backups, TLS, upgrades |

## Next steps

- [Run locally](/kosmos/run-locally) — develop on your laptop first
- [Get a hosted instance](/kosmos/cloud-get-instance) — skip ops
- [Concepts](/kosmos/concepts) — instance isolation
