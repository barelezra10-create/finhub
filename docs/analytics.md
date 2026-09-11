# Fintiex traffic analytics

Dashboard: `/admin`, with an on-site login form at `/admin/login` (username `admin`, same existing password). Login uses an opaque HttpOnly, SameSite=Lax cookie (Secure on HTTPS), expiring after 8 hours; only its hash is stored. Sign out revokes the session, and password changes invalidate sessions. Same-origin POST and a database limit of 10 attempts per IP per 15-minute bucket protect login. IPs are keyed hashes, never stored raw. Always use HTTPS in production. Analytics is disabled until explicitly configured. Missing/short admin credentials fail closed. Dashboard and API responses are never publicly cached. No analytics records are included in the public client bundle.

## Railway setup

Provision a PostgreSQL service in the Fin hub project. Set these **server-only** variables on finhub:

- `ANALYTICS_DATABASE_URL`: PostgreSQL connection string (prefer Railway private networking).
- `ANALYTICS_ADMIN_PASSWORD`: random password, at least 20 characters. Store in the operator's password manager.
- `ANALYTICS_HASH_SECRET`: independent random secret, at least 32 characters.
- `ANALYTICS_ORIGIN`: `https://www.fintiex.com`.
- `ANALYTICS_ENABLED`: `true`.

On server startup, instrumentation creates analytics, admin session, and login attempt tables and indexes, and does not modify existing application tables. For manual setup, run `node apps/web/lib/analytics/manage.mjs init` with the database variable. Deploy after variables are configured: the root layout includes the tracker at build time, and the Dockerfile accepts `ANALYTICS_ENABLED` as a build argument. A runtime toggle also stops ingestion immediately.

Server instrumentation removes events older than 90 days on startup and every hour while running. For manual cleanup, run `node apps/web/lib/analytics/manage.mjs retain` with the same database variable. No separate cron service is needed. Take database backups according to your operational requirements.

## Definitions and limits

- Page views: visible browser page loads and Next.js pathname navigations. Query-only and hash-only changes are not separate page views. Admin/API routes excluded.
- Daily visitors: distinct daily HMAC of Railway's `X-Real-IP` and user agent. The dashboard's multi-day figure sums daily visitors, **not period-unique people**. Shared IPs/browser agents may undercount; network changes may overcount. Raw IP/UA values are never persisted here. Requests without the proxy IP are skipped.
- Source: valid `utm_source`, otherwise external referring domain, otherwise `Direct / unknown`. Initial attribution persists through in-app navigation, but resets on full reload. This is page attribution, not cross-session attribution.
- Campaign: validated source/medium/campaign labels only; URL queries and fragments are discarded. Do not put personal information in campaign labels.
- Outbound clicks: external HTTP(S) link clicks; destination hostname only. Not purchases, leads, or completed applications.
- Known bot UAs, automated browsers, DNT and GPC excluded. Blockers and disabled JavaScript undercount. This is advisory analytics, not fraud-proof measurement.
- API requires exact origin and same-origin fetch metadata, bounded JSON body, path/tag validation and event UUID deduplication. Per-visitor 60 events/minute is a best-effort database limit, not a hard DDoS boundary. Use Railway edge controls for sustained abuse.
- Top pages: 100; sources/campaigns/destinations: 50. Overall totals include all events in the date range.
- Click & visit log: time (UTC), activity type, page, destination domain, source, medium, and campaign. Filter by activity and exact source. Paginated 50 per page, up to 100,000 matching events per reporting period.
- UTC calendar periods include today. No historical request backfill is fabricated.

## Validation

`pnpm --filter @fintiex/web typecheck` and `pnpm --filter @fintiex/web build`.
Use a separate local database and set `ANALYTICS_ORIGIN` to the local server origin for ingestion tests. Supply `X-Real-IP` in local HTTP tests because the Railway proxy is absent. Never insert test events into production.
