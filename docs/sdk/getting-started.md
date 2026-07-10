---
sidebar_position: 2
slug: /sdk/getting-started
title: Getting started
---

Install the Kosmos SDK and run your first agent chat turn against a Kosmos environment.

## Prerequisites

- Node.js 22+
- A running **Kosmos environment** (local or hosted)
- An **external client token** for machine-to-machine access

## Get a Kosmos environment

### Hosted

Sign up at [kosmos-control-plane.fly.dev](https://kosmos-control-plane.fly.dev) to provision a tenant at `https://kosmos-<name>.fly.dev`. Create your owner account on first visit.

### Local

From the [Kosmos monorepo](https://github.com/Kosmos-computer/Kosmos):

```bash
npm install
npm run dev
```

The API server listens on port **4600** by default (`http://127.0.0.1:4600`).

## Mint an external client token

1. Open your Kosmos environment in the browser.
2. Go to **Settings → External Access**.
3. Enable external access and create a client.
4. Copy the bearer token — it is shown once.

External client tokens can access:

- `POST /api/chat` — agent turns (SSE)
- `GET /api/remote/ping` — health check
- `POST /mcp` — capability intents (MCP)

Full REST access requires a user session token (login flow). Most SDK integrations start with external client tokens.

## Install

```bash
npm install @kosmos-computer/sdk
```

Or clone the SDK repo for examples and development:

```bash
git clone https://github.com/Kosmos-computer/kosmos-sdk.git
cd kosmos-sdk
npm install
npm run build
```

## Hello world

```typescript
import { KosmosClient } from "@kosmos-computer/sdk";

const kosmos = new KosmosClient({
  baseUrl: process.env.KOSMOS_URL!,   // https://kosmos-acme.fly.dev
  token: process.env.KOSMOS_TOKEN!,
});

await kosmos.ping();

const result = await kosmos.chat.complete({
  message: "What can you help me with?",
  mode: "ask",
});

console.log(result.text);
```

Run the bundled example:

```bash
KOSMOS_URL=http://127.0.0.1:4600 KOSMOS_TOKEN=your-token npm run example:hello
```

## Streaming a turn

For real-time output and tool visibility, stream events:

```typescript
for await (const event of kosmos.chat.stream({
  message: "List my calendar events for today",
  mode: "agent",
})) {
  switch (event.type) {
    case "session":
      console.log("Session:", event.sessionId);
      break;
    case "text_delta":
      process.stdout.write(event.delta);
      break;
    case "tool_start":
      console.log("\nTool:", event.name);
      break;
    case "done":
      console.log("\nDone.");
      break;
    case "error":
      throw new Error(event.message);
  }
}
```

## Multi-turn sessions

Pass `sessionId` from the first turn's `session` event to continue a thread:

```typescript
let sessionId: string | undefined;

for await (const event of kosmos.chat.stream({ message: "Hello", sessionId })) {
  if (event.type === "session") sessionId = event.sessionId;
  // ...
}

// Next turn reuses the same session
for await (const event of kosmos.chat.stream({ message: "Tell me more", sessionId })) {
  // ...
}
```

Or use `client.sessions.list()` and `client.sessions.get(id)` to inspect history.

## Headless mode

By default, `chat.stream()` runs in **headless** mode: policy confirmations that require the Kosmos shell are auto-denied. This suits scripts and CI where no user is present.

For interactive integrations, set `headless: false` and handle `confirm_required` events via `client.confirmations.answer()`.

## Next steps

- [Agent events](/sdk/agent-events) — full event reference
- [Auth & tokens](/sdk/auth) — scopes and security
- [API reference](/sdk/api/client) — `KosmosClient` methods
