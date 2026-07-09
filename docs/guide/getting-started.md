---
sidebar_position: 2
slug: /guide/getting-started
title: Getting started
---

This guide covers how to work with Arco inside the [Kosmos prototype](https://github.com/Kosmos-computer/Kosmos) monorepo.

## Get a hosted instance

Sign up at [arco-control-plane.fly.dev](https://arco-control-plane.fly.dev) to provision your own Arco instance at `https://arco-<name>.fly.dev`. After checkout, open your instance URL and create your owner account.

Returning customers can [sign in](https://arco-control-plane.fly.dev/signin) with the email used at checkout or their instance name.

## Prerequisites

- Node.js 22+
- npm (workspaces enabled at repo root)

## Run Kosmos + docs locally

From the Kosmos repo root:

```bash
npm install

# Kosmos shell (port 4610) + API server
npm run dev
```

| Surface | URL | Package |
|---------|-----|---------|
| Kosmos prototype | http://localhost:4610 | [Kosmos-computer/Kosmos](https://github.com/Kosmos-computer/Kosmos) |
| Kosmos marketing | https://kosmos-www.vercel.app | [Kosmos-computer/www](https://github.com/Kosmos-computer/www) |
| Arco docs | https://kosmos-docs.vercel.app | [Kosmos-computer/docs](https://github.com/Kosmos-computer/docs) |

To work on these docs locally, clone [Kosmos-computer/docs](https://github.com/Kosmos-computer/docs) and run `npm start`.

## Where Arco lives in the codebase

```
src/styles/tokens.css     # --arco-* design tokens
src/styles/ui.css         # BEM classes for primitives
src/components/ui/        # React wrappers (Button, Input, …)
src/components/patterns/  # Layout patterns (MasterDetail, Section)
src/components/agent-blocks/  # Chat block renderers
src/apps/appview/         # Generated app surface (AppSurface)
```

## Using tokens in new UI

Always reference tokens — never hardcode colors or spacing:

```css
.my-panel {
  background: var(--arco-bg-surface);
  color: var(--arco-text-primary);
  border: 1px solid var(--arco-border);
  border-radius: var(--arco-radius-m);
  padding: var(--arco-space-l);
}
```

Theme switching uses `html[data-theme="dark"|"light"]`.

## Using UI primitives

```tsx
import { Button, Input, EmptyState } from "@/components/ui";

export function Example() {
  return (
    <EmptyState title="No items" action={<Button variant="primary">Create</Button>}>
      <Input placeholder="Search…" />
    </EmptyState>
  );
}
```

## Next steps

- [Design tokens](/guide/design-tokens) — full token categories
- [UI primitives](/guide/ui-primitives) — available components
- [Generative blocks](/guide/generative-blocks) — how AI output maps to UI
