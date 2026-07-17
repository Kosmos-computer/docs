---
sidebar_position: 3
slug: /kosmos/cloud-get-instance
title: Get a hosted instance
---

Kosmos Cloud gives you a **private hosted instance** — your own Kosmos environment at `https://kosmos-<name>.fly.dev`, with plan credits and workspace storage included.

## Before you start

- You need a payment method (Stripe Checkout).
- You must accept the terms and confirm you are 18+.
- Pick an instance name you can remember; it becomes part of your URL.

## Signup flow

1. Open [app.kosmos.computer/signup](https://app.kosmos.computer/signup).
2. Choose a plan (included credits, workspace quota, private instance).
3. Accept terms, confirm age, and continue to Stripe Checkout.
4. After payment, you land on a **welcome** page that waits until provisioning finishes (usually under a minute).
5. Open your instance URL from the welcome page or email — for example `https://kosmos-yourname.fly.dev`.
6. Create your **owner** account on first visit (local username/password for that instance).

```
Signup → Plan → Stripe → Welcome (poll) → Open instance → Owner account
```

## What you get

| Item | Detail |
|------|--------|
| **Instance URL** | `https://kosmos-<name>.fly.dev` |
| **Isolation** | Separate accounts, data, and tokens from other tenants |
| **Credits** | Plan-included LLM budget (see [Usage & credits](/kosmos/cloud-usage-credits)) |
| **Storage** | Workspace quota; add-ons available under Billing |
| **Idle behavior** | Machines may auto-stop when idle; the first request after idle can take a moment (cold start) |

## After setup

- Bookmark your instance URL — that is your Kosmos home.
- Returning later? Use [Sign in](/kosmos/cloud-sign-in) with the checkout email or instance name.
- On desktop, connect via [Settings → Kosmos Cloud](/kosmos/cloud-desktop-connect).
- Manage plan and storage under [Billing](/kosmos/cloud-billing).

## Next steps

- [Sign in](/kosmos/cloud-sign-in)
- [Connect the desktop app](/kosmos/cloud-desktop-connect)
- [Billing & storage](/kosmos/cloud-billing)
- [SDK overview](/sdk/overview) — point integrations at your instance URL
