---
sidebar_position: 6
slug: /kosmos/cloud-billing
title: Billing & storage
---

On a hosted instance, **Settings → Subscriptions** (or **Billing**) manages your **Kosmos Hosted** plan, workspace storage, and payment method. Token spend is tracked separately under [Usage & credits](/kosmos/cloud-usage-credits).

## Plan standing

When billing is managed for the tenant, you see:

| Field | Meaning |
|-------|---------|
| **Plan** | Current Kosmos Hosted tier |
| **Price** | Recurring price label |
| **Included credits** | Monthly LLM budget included with the plan |
| **Subscription** | Stripe status (active, past due, canceled, …) |
| **Renews** | Current period end |
| **Billing email** | Email from checkout |
| **Instance** | Your tenant URL |

Local-only instances show a prompt to [create a cloud account](https://app.kosmos.computer/signup) instead of a Hosted plan card.

## Upgrade plan

If upgrade tiers are available, choose a higher plan from Settings. Checkout runs through Stripe and updates included credits and storage for the period.

## Workspace storage

The storage panel shows used vs total quota (including add-ons). Purchase **storage add-ons** when offered to increase workspace space.

## Manage payment method and cancel

**Manage billing** opens the **Stripe Customer Portal** for invoices, payment method, and cancellation. Prefer the portal for payment details; use in-app buttons for plan upgrades and storage add-ons when shown.

## If payment fails

Failed invoice payment or a deleted subscription can **suspend** the tenant. Fix payment in the Stripe portal, then contact support or wait for sync if the instance stays unavailable. Do not rely on the control plane for day-to-day shell login — open your instance URL once the subscription is healthy again.

## Next steps

- [Usage & credits](/kosmos/cloud-usage-credits)
- [Sign in](/kosmos/cloud-sign-in)
- [Concepts](/kosmos/concepts) — Cloud vs Hosted naming
