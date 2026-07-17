---
sidebar_position: 7
slug: /kosmos/cloud-usage-credits
title: Usage & credits
---

**Settings → Usage & credits** shows token spend for this instance. On Kosmos Cloud tenants, spend is metered against a credits budget (the hosted credits gateway).

## Credits meter

When credits are available you see:

| Field | Meaning |
|-------|---------|
| **Spent** | Cumulative spend against the budget |
| **Remaining** | Budget left (when a max budget is set) |
| Progress bar | Visual share of budget used |

Refresh the panel if numbers look stale after a purchase.

## Buy credit packs

When credit packs are configured for your tenant, purchase buttons appear in Usage & credits. Checkout goes through Stripe; new credits apply to the same instance after the session completes.

Buy credits when remaining budget is low (the UI may warn around 10% remaining). If the budget hits zero, agent model calls that depend on the gateway will fail until you add credits or your plan renews.

## Plan credits vs packs

| Source | Where |
|--------|--------|
| **Included with plan** | Monthly allowance from [Billing](/kosmos/cloud-billing) |
| **Credit packs** | One-time top-ups from Usage & credits |

Plan upgrades (more included credits) live under Billing; packs live under Usage & credits.

## Local instances

Local / self-host environments may show a **local** usage meter without a hosted credits budget. Hosted credit packs and gateway budgets apply to billing-managed cloud tenants.

## Next steps

- [Billing & storage](/kosmos/cloud-billing)
- [Get a hosted instance](/kosmos/cloud-get-instance)
- [Auth & tokens](/sdk/auth) — mint API tokens on the instance (separate from credits)
