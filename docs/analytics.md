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
- Source: valid `utm_source`, paid-search marker, or external referring domain, normalized to Google, Bing, and other recognized engines; otherwise `Direct / unknown`. Initial attribution persists through in-app navigation, but resets on full reload. This is page attribution, not cross-session attribution.
- Campaign: validated source/medium/campaign labels only; URL queries and fragments are discarded. Do not put personal information in campaign labels.
- Outbound clicks: external HTTP(S) link clicks; destination hostname only. Not purchases, leads, or completed applications.
- Known bot UAs, automated browsers, DNT and GPC excluded. Blockers and disabled JavaScript undercount. This is advisory analytics, not fraud-proof measurement.
- API requires exact origin and same-origin fetch metadata, bounded JSON body, path/tag validation and event UUID deduplication. Per-visitor 60 events/minute is a best-effort database limit, not a hard DDoS boundary. Use Railway edge controls for sustained abuse.
- Top pages: 100; other dimension tables: 30. Overall totals include all events in the date range.
- Click & visit log: time (UTC), activity type, page, destination domain, source, medium, and campaign. Filter by period, activity, exact source, country, channel, and device. Export the current 50-row page as CSV. Paginated 50 per page, up to 100,000 matching events per reporting period.
- UTC calendar periods include today. No historical request backfill is fabricated.

## Validation

`pnpm --filter @fintiex/web typecheck` and `pnpm --filter @fintiex/web build`.
Use a separate local database and set `ANALYTICS_ORIGIN` to the local server origin for ingestion tests. Supply `X-Real-IP` in local HTTP tests because the Railway proxy is absent. Never insert test events into production.

## Full dashboard dimensions

Overview includes daily trends, previous-period comparisons, pages, sources, countries, devices, and estimated active visitors in the last five minutes. Acquisition separates organic/paid search, social, email, AI referrals, campaigns, and other referrals. Geography shows approximate country, region, and city using local GeoLite2 lookup via geoip-lite. VPNs/carriers can affect accuracy. Raw IP is discarded after lookup/hashing; no external geolocation service receives it. Keep geoip-lite updated for refreshed databases. This product includes GeoLite2 data created by MaxMind (https://www.maxmind.com). Bowser classifies device, browser, and OS; browser language is retained. Historical events without these fields remain Unknown.

Keywords supplied in utm_term or a recognized search referrer are sanitized and labeled campaign/referrer. Click IDs are not stored; their presence classifies paid Google/Bing traffic. Google/Bing normally withhold organic query strings, so the per-event log honestly says Not provided. Search provider reports are separate aggregate data, never joined to individual visitors.

## Search keyword reports

Admin > Search keywords supports authenticated CSV imports with exact start/end dates. Expected columns: Query (or Top queries/Keyword), Clicks, Impressions, Position. CTR is calculated. Import replaces the engine's latest snapshot, preserving visitor records. Snapshot totals cover imported query rows, not necessarily whole-property totals. Snapshots persist until replaced. Up to 100 matching rows are shown with keyword search over all imported rows.

For automatic read-only reports, set these server-only Railway variables and redeploy:

- Google: FINTIEX_GSC_CLIENT_ID, FINTIEX_GSC_CLIENT_SECRET, FINTIEX_GSC_REFRESH_TOKEN. OAuth scope https://www.googleapis.com/auth/webmasters.readonly with access to sc-domain:fintiex.com.
- Bing: FINTIEX_BING_API_KEY; optional FINTIEX_BING_SITE_URL (default https://www.fintiex.com/), matching the verified property.

Provider reports refresh when opening Search keywords if the cache is older than six hours. Google fetches up to 1,000 queries plus independent property totals. Bing returns weekly query statistics; totals cover reported queries. API date ranges end three days ago, and each card shows its own dates. The visitor audience filters do not apply to provider aggregates. Failed refreshes retain the cached report. Never imply hidden/anonymized queries are complete, or that a query identifies an individual visitor.

## Offer clicks (September 12, 2026)

The Offer clicks tab groups explicitly labeled outbound provider links by product and button placement. Card comparisons/reviews, brand CTAs, and savings comparisons/reviews send sanitized `offer` and `placement` tags. Primary clicks and middle clicks are captured without delaying navigation. Other external links remain ordinary outbound clicks; historical events have empty offer tags and are not backfilled. Page reports show offer clicks, estimated daily clickers, and clicks per 100 page views (not a completed-application conversion rate, and potentially above 100). Global audience filters apply. Activity CSV includes both tags. No destination paths, query strings, or form inputs are added to storage.

## Partner conversion imports (September 12, 2026)

`/admin?tab=conversions` accepts actual partner reports via authenticated, same-origin POST `/api/admin/conversions/import`. Header: `network,conversion_id,occurred_at,offer,status,revenue,currency`. Plain unquoted CSV, max 1 MB and 5,000 rows. Use opaque IDs, date YYYY-MM-DD, status submitted/approved/paid/rejected, nonnegative commission (two decimals), uppercase three-letter currency. Rejected rows must have zero commission. A duplicate ID within a file rejects the whole file; reimporting an existing network/ID updates it atomically. Raw files are not retained. Conversion records are retained for reporting independently of the 90-day anonymous traffic window. No customer PII is required.

The report groups partner, offer and currency and uses the conversion date. Paid commission and approved-but-unpaid commission are separate. Traffic audience filters cannot attribute imported conversions; a real partner integration with shared click IDs is required. No automatic affiliate network connection is configured.

Bing is verified for `https://fintiex.com/`. `FINTIEX_BING_API_KEY` and `FINTIEX_BING_SITE_URL` are configured on Railway; the existing refresh scheduler fetches reports after deployment. The initial query API returned an empty successful result. This indicates no data returned yet, not proof that there have been no Bing impressions.
