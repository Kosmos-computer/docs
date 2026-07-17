---
sidebar_position: 2
slug: /guide/getting-started
title: Getting started
---

This guide covers how to work with Arco inside the [Kosmos prototype](https://github.com/Kosmos-computer/Kosmos) monorepo.

For the OS product and hosted instances, see [What is Kosmos?](/kosmos/what-is-kosmos), [Get a hosted instance](/kosmos/cloud-get-instance), and [Run locally](/kosmos/run-locally).

## Prerequisites

- Node.js 22+
- npm (workspaces enabled at repo root)

## Run Kosmos locally

Follow [Run locally](/kosmos/run-locally) for full setup. Short version from the Kosmos repo root:

```bash
npm install
npm run setup   # first run
npm run dev     # shell :4610 + API :4600
```

| Surface | URL | Package |
|---------|-----|---------|
| Kosmos prototype | http://localhost:4610 | [Kosmos-computer/Kosmos](https://github.com/Kosmos-computer/Kosmos) |
| Kosmos marketing | https://www.kosmos.computer | [Kosmos-computer/www](https://github.com/Kosmos-computer/www) |
| Kosmos docs | https://docs.kosmos.computer | [Kosmos-computer/docs](https://github.com/Kosmos-computer/docs) |

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

- [What is Kosmos?](/kosmos/what-is-kosmos) — OS overview
- [Design tokens](/guide/design-tokens) — full token categories
- [UI primitives](/guide/ui-primitives) — available components
- [Generative blocks](/guide/generative-blocks) — how AI output maps to UI
