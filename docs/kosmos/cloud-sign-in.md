---
sidebar_position: 4
slug: /kosmos/cloud-sign-in
title: Sign in
---

Use the control plane **Sign in** page when you need to find your hosted instance again, or when the desktop app sends you through a web connect flow.

## Sign in on the web

1. Open [app.kosmos.computer/connect](https://app.kosmos.computer/connect).
2. Enter either:
   - The **email** used at checkout, or
   - Your **instance URL** / name (for example `kosmos-yourname.fly.dev`).
3. Continue — you are sent to your tenant to sign in with your instance owner (or user) account.

Need an account first? [Create your cloud account](https://app.kosmos.computer/signup) — see [Get a hosted instance](/kosmos/cloud-get-instance).

## Bookmark your instance

Day to day, open your tenant URL directly:

```
https://kosmos-<name>.fly.dev
```

Sign in with the username and password you created on that instance. The control plane helps you **rediscover** the URL; it does not replace instance login.

## Desktop return flow

From the desktop app, **Connect on web** or **Create cloud account** opens the control plane with a return URL. After signup or lookup, you return to the app with connect parameters so the shell can attach to the hosted instance. Details: [Connect the desktop app](/kosmos/cloud-desktop-connect).

## Next steps

- [Connect the desktop app](/kosmos/cloud-desktop-connect)
- [Billing & storage](/kosmos/cloud-billing)
- [Usage & credits](/kosmos/cloud-usage-credits)
