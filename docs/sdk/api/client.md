---
sidebar_position: 6
slug: /sdk/api/client
title: KosmosClient
---

Reference for `@kosmos/sdk` v0.1.

## `KosmosClient`

```typescript
import { KosmosClient } from "@kosmos/sdk";

const client = new KosmosClient({
  baseUrl: string,
  token?: string,
  fetch?: typeof fetch,
});
```

| Option | Description |
|--------|-------------|
| `baseUrl` | Kosmos environment URL (no trailing slash) |
| `token` | Bearer token (external client or session) |
| `fetch` | Custom fetch implementation (testing, Node polyfills) |

## Methods

### `ping(): Promise<RemotePingResponse>`

`GET /api/remote/ping` — verify token and connectivity.

### `client.sessions`

| Method | Route | Description |
|--------|-------|-------------|
| `list()` | `GET /api/sessions` | List session summaries |
| `get(id)` | `GET /api/sessions/:id` | Full session with messages |
| `delete(id)` | `DELETE /api/sessions/:id` | Remove a session |
| `updateTitle(id, title)` | `PATCH /api/sessions/:id` | Rename a session |

### `client.confirmations`

| Method | Route | Description |
|--------|-------|-------------|
| `answer(id, approved, remember?)` | `POST /api/confirmations/:id` | Respond to `confirm_required` |

`remember` is `"session"` or `"always"` for extended allow options.

### `client.chat`

#### `stream(options): AsyncGenerator<AgentEvent>`

`POST /api/chat` — stream a full agent turn.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `message` | `string` | required | User message |
| `sessionId` | `string` | — | Continue an existing thread |
| `mode` | `"agent" \| "ask"` | — | Agent (tools) vs ask-only |
| `projectId` | `string \| null` | — | Open-folder workspace |
| `signal` | `AbortSignal` | — | Cancel the request |
| `headless` | `boolean` | `true` | Auto-deny shell confirmations |
| `onEvent` | `(event) => void` | — | Side-effect hook per event |

#### `complete(options): Promise<ChatTurnResult>`

Convenience wrapper — streams internally and returns:

```typescript
interface ChatTurnResult {
  sessionId: string;
  text: string;      // concatenated text_delta
  events: AgentEvent[];
}
```

## Errors

```typescript
import { KosmosError } from "@kosmos/sdk";

try {
  await client.ping();
} catch (err) {
  if (err instanceof KosmosError) {
    console.error(err.status, err.message);
  }
}
```

## Low-level utilities

```typescript
import { parseSseLines, streamSse } from "@kosmos/sdk";
```

Exported for custom integrations and tests.

## Types

All types re-export from `@kosmos/types`:

```typescript
import type { AgentEvent, Session, ChatMode } from "@kosmos/sdk";
```

See [Agent events](/sdk/agent-events) for the event union.
