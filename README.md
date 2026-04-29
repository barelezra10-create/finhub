# Fintiex

Personal finance hub modeled on Bankrate. See `docs/specs/2026-04-29-fintiex-design.md`.

## Local setup

Requires Node 20+ and pnpm 9+.

```bash
pnpm install
cp .env.example .env
# edit DATABASE_URL to point to a local Postgres
pnpm db:migrate
pnpm dev
```

## Layout

- `apps/web` — Next.js site
- `apps/worker` — cron worker (scrapers, content gen)
- `packages/db` — Prisma schema + client
- `packages/ui` — shared components and brand tokens
- `packages/calculators` — calculator logic
