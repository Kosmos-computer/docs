---
sidebar_position: 5
slug: /kosmos/cloud-desktop-connect
title: Connect the desktop app
---

On desktop, **Settings → Kosmos Cloud** connects the Electron shell to your hosted instance as a **thin client**. Your data and login live on the cloud server; the desktop app is the UI — similar to Cursor or Claude desktop.

## Prerequisites

- A [hosted instance](/kosmos/cloud-get-instance) (welcome email URL such as `kosmos-yourname.fly.dev`).
- The Kosmos desktop app installed and running.

## Connect with a URL

1. Open **Settings → Kosmos Cloud**.
2. Under the connect form, enter your **Instance URL** (for example `kosmos-yourname.fly.dev`).
3. Optionally set a **Label** (display name).
4. Choose **Connect with URL**.

The app tests the connection, saves a cloud profile, and reloads against the hosted backend.

## Connect on the web

Prefer the control plane lookup:

1. In **Settings → Kosmos Cloud**, choose **Connect on web**.
2. Sign in with checkout email or instance URL at [app.kosmos.computer/connect](https://app.kosmos.computer/connect).
3. Complete the return flow back into the desktop app.

**Create cloud account** opens signup with the same return path if you do not have a hosted instance yet.

## Saved profiles

Kosmos Cloud keeps **saved cloud instances**. You can:

- **Connect** to a saved profile
- **Remove** a profile you no longer need
- See which profile is **Active**

## Disconnect (use local backend)

While connected, **Use local backend** clears the active cloud profile and reloads against the local Arco/Kosmos backend on this machine.

| Mode | Backend |
|------|---------|
| **Connected (cloud)** | Your `kosmos-*.fly.dev` tenant |
| **Local** | Backend on this machine (dev / local install) |

## Next steps

- [Billing & storage](/kosmos/cloud-billing)
- [Usage & credits](/kosmos/cloud-usage-credits)
- [Run locally](/kosmos/run-locally) — develop without a hosted tenant
