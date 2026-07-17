---
sidebar_position: 5
slug: /sdk/auth
title: Auth & tokens
---

The Kosmos SDK authenticates with **Bearer tokens** on every request.

## External client tokens (recommended for SDK)

Mint tokens in **Settings → External Access** inside your Kosmos environment.

| Property | Detail |
|----------|--------|
| **Format** | Bearer token in `Authorization` header |
| **Scope** | `read` or `readwrite` (MCP intents) |
| **Allowed routes** | `/api/chat`, `/api/remote/ping`, `/mcp` |
| **Revocation** | Disable or delete the client in Settings |

```typescript
const kosmos = new KosmosClient({
  baseUrl: "https://kosmos-acme.fly.dev",
  token: process.env.KOSMOS_TOKEN,
});
```

Verify connectivity:

```typescript
await kosmos.ping(); // GET /api/remote/ping
```

## Session tokens (full REST)

User login (`POST /api/auth/login`) returns a session suitable for the Kosmos shell cookie model. Session tokens can access the full `/api/*` surface (sessions list, settings, automations, etc.) subject to role capabilities.

The SDK v0.1 focuses on external client tokens for agent chat. Session-based auth for broader REST coverage is supported by passing the same bearer format if your integration obtains a session token programmatically.

## Security practices

1. **Never commit tokens** — use environment variables or secret managers.
2. **Default to read scope** when using MCP-only integrations.
3. **Rotate tokens** by minting a new client and revoking the old one.
4. **Use HTTPS** for hosted tenants — tokens are sent on every request.
5. **Headless deny by default** — the SDK auto-denies shell confirmations unless you opt into interactive handling.

## Hosted vs local

| Environment | Base URL | Token source |
|-------------|----------|--------------|
| Hosted tenant | `https://kosmos-<name>.fly.dev` | Settings → External Access on that tenant |
| Local Kosmos | `http://127.0.0.1:4600` | Same — on your local instance |

Each environment has its own token store. Tokens do not transfer between instances.

## Control plane (not SDK auth)

[Kosmos Cloud](/kosmos/cloud-get-instance) ([app.kosmos.computer](https://app.kosmos.computer)) handles Stripe checkout and Fly provisioning. It does **not** issue agent API tokens. After provisioning, authenticate against your tenant URL directly — see [Auth practices above](#external-client-tokens-recommended-for-sdk).

## OAuth (future)

The Kosmos server uses cookie sessions and bearer tokens today. OAuth 2.1/OIDC for third-party clients is planned for when the outward MCP server goes multi-user — see the standards map bridge posture for auth.
