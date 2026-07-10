---
sidebar_position: 4
slug: /sdk/agent-events
title: Agent events
---

Agent turns stream a sequence of typed **`AgentEvent`** objects over Server-Sent Events (SSE). Each line is `data: { ...json... }`.

The `@kosmos-computer/types` package exports the full union. This page documents each variant and typical client handling.

## Lifecycle

A typical turn:

1. `session` — assigns or confirms the conversation id
2. `text_delta` (zero or more) — streamed assistant text
3. `tool_start` / `tool_end` (optional) — agent tool calls
4. Interactive events (optional) — `confirm_required`, `cursor_request`, `os_ui`
5. `usage` (optional) — token counts
6. `done` — turn complete

Errors emit `error` and the stream closes.

## Event reference

### `session`

```json
{ "type": "session", "sessionId": "abc123" }
```

Emitted at the start of a turn. Persist `sessionId` for multi-turn threads.

### `text_delta`

```json
{ "type": "text_delta", "delta": "Hello" }
```

Incremental assistant text. Concatenate deltas for the full reply.

### `tool_start` / `tool_end`

```json
{ "type": "tool_start", "callId": "c1", "name": "read_file", "args": { "path": "README.md" } }
{ "type": "tool_end", "callId": "c1", "name": "read_file", "result": "..." }
```

The agent invoked a tool. Useful for logging, progress UI, and debugging.

### `confirm_required`

```json
{
  "type": "confirm_required",
  "confirmId": "cfm_1",
  "command": "exec: rm -rf ./tmp",
  "options": ["once", "session", "always", "deny"]
}
```

A policy-gated action is paused until the client responds:

```typescript
await client.confirmations.answer(event.confirmId, true, "once");
```

In headless mode (SDK default), confirmations are auto-denied.

### `cursor_request`

```json
{ "type": "cursor_request", "requestId": "req_1", "command": { "kind": "snapshot" } }
```

Requires the Kosmos shell to execute UI automation. Headless SDK clients typically cannot satisfy these — use `mode: "ask"` or automations without cursor tools.

### `os_ui`

```json
{ "type": "os_ui", "action": { "action": "open_app", "appId": "core.calendar" } }
```

Shell actions driven by the agent. Rendered by the Kosmos shell using **Arco** components. SDK clients log or ignore unless building a custom shell.

### `file_changed`

```json
{ "type": "file_changed", "path": "src/app.ts", "before": null, "after": "..." }
```

Emitted for UI diff rendering. The LLM does not see `before` content.

### `usage`

```json
{ "type": "usage", "promptTokens": 1200, "completionTokens": 340, "totalTokens": 1540 }
```

Cumulative token usage for the turn.

### Platform signals

| Event | Meaning |
|-------|---------|
| `apps_changed` | Generated or installed apps changed |
| `automations_changed` | Automation definitions changed |
| `automation_run_finished` | A scheduled run completed |
| `app_event` | Topic broadcast (e.g. `files.changed`) |

### Terminal events

| Event | Meaning |
|-------|---------|
| `done` | Turn finished successfully |
| `error` | `{ "type": "error", "message": "..." }` — turn failed |

## Parsing SSE manually

The SDK handles parsing; for other languages, follow the same rules as the Kosmos server:

```
data: {"type":"session","sessionId":"..."}

data: {"type":"text_delta","delta":"Hi"}

```

Skip malformed lines. The stream is best-effort.

## Standards posture

Kosmos defines the `AgentEvent` stream as part of its open agent surface (see [standards map](/reference/standards-map)). AG-UI is tracked as a potential future bridge — the SDK types may gain mapping helpers if that standard matures.

## Type import

```typescript
import type { AgentEvent } from "@kosmos-computer/sdk";
```
