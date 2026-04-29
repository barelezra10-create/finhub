# Fintiex Phase 0 — Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the Fintiex monorepo with a deployed hello-world on Railway, so subsequent phases can plug in features (rate pipeline, calculators, programmatic content) without touching infrastructure.

**Architecture:** pnpm-workspace monorepo. `apps/web` is a Next.js 16 App Router site. `apps/worker` is a Node.js TypeScript service for cron jobs (scrapers in Phase 1). Both depend on `packages/db` (Prisma + Postgres schema), `packages/ui` (shared brand tokens and components), and `packages/calculators` (framework-agnostic calculator logic, populated in Phase 2). Deployed to Railway with one Postgres database and two services.

**Tech Stack:**
- Node.js 20+, pnpm 9+, TypeScript 5.x
- Next.js 16 (App Router) on Railway
- Prisma 5.x + Postgres 16 (Railway-managed)
- Tailwind CSS v4 + shadcn/ui
- IBM Plex Serif (display) + Inter (body) via `next/font`
- Vitest for unit tests, Playwright for e2e smoke tests

**Out of scope for Phase 0:** rate scrapers, calculators, content generation, AI advisor, monetization. Those are Phases 1-6.

---

## File structure created in Phase 0

```
~/fintiex/
├── package.json                       Root workspace, shared scripts
├── pnpm-workspace.yaml                Workspace config
├── tsconfig.base.json                 Shared TS config
├── .gitignore
├── .nvmrc                             Pin Node 20
├── .env.example                       Template for local DATABASE_URL
├── README.md                          Setup + deploy instructions
├── apps/
│   ├── web/
│   │   ├── package.json
│   │   ├── next.config.ts
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.ts
│   │   ├── postcss.config.mjs
│   │   ├── components.json            shadcn config
│   │   ├── playwright.config.ts
│   │   ├── app/
│   │   │   ├── layout.tsx             Root layout, font + theme providers
│   │   │   ├── page.tsx               Homepage placeholder
│   │   │   ├── globals.css            Tailwind + brand CSS vars
│   │   │   └── (marketing)/
│   │   │       └── about/page.tsx     Smoke-test page
│   │   ├── components/
│   │   │   └── site-header.tsx
│   │   ├── lib/
│   │   │   └── db.ts                  Re-exports Prisma client
│   │   └── e2e/
│   │       └── smoke.spec.ts          Playwright smoke test
│   └── worker/
│       ├── package.json
│       ├── tsconfig.json
│       ├── src/
│       │   ├── index.ts               Entry: cron registration
│       │   └── jobs/
│       │       └── healthcheck.ts     Trivial job to prove DB connectivity
│       └── test/
│           └── healthcheck.test.ts
├── packages/
│   ├── db/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── prisma/
│   │   │   ├── schema.prisma          Initial schema
│   │   │   └── seed.ts                Dev seed data
│   │   ├── src/
│   │   │   ├── index.ts               Export Prisma client + types
│   │   │   └── helpers.ts             Type-safe query helpers
│   │   └── test/
│   │       └── helpers.test.ts
│   ├── ui/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── tokens.ts              Brand tokens: colors, typography
│   │   │   └── components/
│   │   │       └── logo.tsx
│   │   └── test/
│   │       └── tokens.test.ts
│   └── calculators/
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── index.ts               Empty — Phase 2 fills in
├── railway.json                       Service definitions
└── docs/
    ├── specs/2026-04-29-fintiex-design.md   (exists)
    └── plans/2026-04-29-fintiex-phase-0-foundation.md   (this file)
```

**Why this layout:**
- Apps and packages separated so `packages/*` can be consumed by both `apps/web` and `apps/worker` without circular deps
- `packages/db` is the single source of truth for the Prisma schema + types, preventing drift between web and worker
- `packages/ui` and `packages/calculators` start small but are placeholders for Phase 2's calculator library (which needs to be embeddable in both server-rendered pages and the AI advisor's chat UI)
- Each task below produces a self-contained, committable unit

---

## Task 1: Monorepo skeleton

**Files:**
- Create: `~/fintiex/package.json`
- Create: `~/fintiex/pnpm-workspace.yaml`
- Create: `~/fintiex/tsconfig.base.json`
- Create: `~/fintiex/.gitignore`
- Create: `~/fintiex/.nvmrc`
- Create: `~/fintiex/README.md`

- [ ] **Step 1: Confirm we're at repo root**

Run: `cd ~/fintiex && pwd && git log --oneline -3`
Expected: prints `/Users/baralezrah/fintiex` and the existing spec commits (`b419292`, `fafcd8c`).

- [ ] **Step 2: Create `.nvmrc`**

Write `~/fintiex/.nvmrc`:
```
20
```

- [ ] **Step 3: Create `pnpm-workspace.yaml`**

Write `~/fintiex/pnpm-workspace.yaml`:
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

- [ ] **Step 4: Create root `package.json`**

Write `~/fintiex/package.json`:
```json
{
  "name": "fintiex",
  "private": true,
  "version": "0.0.0",
  "packageManager": "pnpm@9.12.0",
  "scripts": {
    "build": "pnpm -r build",
    "dev": "pnpm -r --parallel --stream dev",
    "test": "pnpm -r test",
    "lint": "pnpm -r lint",
    "typecheck": "pnpm -r typecheck",
    "db:generate": "pnpm --filter @fintiex/db prisma:generate",
    "db:migrate": "pnpm --filter @fintiex/db prisma:migrate",
    "db:studio": "pnpm --filter @fintiex/db prisma:studio"
  },
  "engines": {
    "node": ">=20",
    "pnpm": ">=9"
  },
  "devDependencies": {
    "typescript": "5.6.3",
    "@types/node": "20.16.0"
  }
}
```

- [ ] **Step 5: Create `tsconfig.base.json`**

Write `~/fintiex/tsconfig.base.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "declaration": true,
    "sourceMap": true
  }
}
```

- [ ] **Step 6: Create `.gitignore`**

Write `~/fintiex/.gitignore`:
```
node_modules/
.next/
dist/
build/
*.tsbuildinfo
.turbo/
coverage/
.env
.env.local
.env.*.local
!.env.example
.DS_Store
*.log
.pnpm-store/
.railway/
playwright-report/
test-results/
```

- [ ] **Step 7: Create `README.md`**

Write `~/fintiex/README.md`:
```markdown
# Fintiex

Personal finance hub modeled on Bankrate. See `docs/specs/2026-04-29-fintiex-design.md`.

## Local setup

Requires Node 20+ and pnpm 9+.

\`\`\`bash
pnpm install
cp .env.example .env
# edit DATABASE_URL to point to a local Postgres
pnpm db:migrate
pnpm dev
\`\`\`

## Layout

- `apps/web` — Next.js site
- `apps/worker` — cron worker (scrapers, content gen)
- `packages/db` — Prisma schema + client
- `packages/ui` — shared components and brand tokens
- `packages/calculators` — calculator logic
```

- [ ] **Step 8: Install root deps**

Run: `cd ~/fintiex && pnpm install`
Expected: pnpm creates a lockfile, no errors.

- [ ] **Step 9: Commit**

```bash
cd ~/fintiex
git add package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json .gitignore .nvmrc README.md
git commit -m "$(cat <<'EOF'
chore: monorepo skeleton (pnpm workspace, root tsconfig, gitignore)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Database package with initial Prisma schema

**Files:**
- Create: `~/fintiex/packages/db/package.json`
- Create: `~/fintiex/packages/db/tsconfig.json`
- Create: `~/fintiex/packages/db/prisma/schema.prisma`
- Create: `~/fintiex/packages/db/prisma/seed.ts`
- Create: `~/fintiex/packages/db/src/index.ts`
- Create: `~/fintiex/packages/db/src/helpers.ts`
- Create: `~/fintiex/packages/db/test/helpers.test.ts`
- Create: `~/fintiex/.env.example`

- [ ] **Step 1: Create `packages/db/package.json`**

Write `~/fintiex/packages/db/package.json`:
```json
{
  "name": "@fintiex/db",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./helpers": "./src/helpers.ts"
  },
  "scripts": {
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "lint": "echo 'no lint configured yet'"
  },
  "dependencies": {
    "@prisma/client": "5.22.0"
  },
  "devDependencies": {
    "prisma": "5.22.0",
    "vitest": "2.1.4",
    "tsx": "4.19.2"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

- [ ] **Step 2: Create `packages/db/tsconfig.json`**

Write `~/fintiex/packages/db/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*", "prisma/**/*", "test/**/*"]
}
```

- [ ] **Step 3: Create `packages/db/prisma/schema.prisma`**

Schema covers all eight verticals' core entities. Lenders are normalized; rates are time-series rows so we can show history. Articles are versioned so we can roll back AI-generated content.

Write `~/fintiex/packages/db/prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Vertical {
  MORTGAGE
  HYSA
  CD
  PERSONAL_LOAN
  AUTO_LOAN
  CREDIT_CARD
  CHECKING
  MONEY_MARKET
  INVESTING
}

enum ProductType {
  MORTGAGE_30Y_FIXED
  MORTGAGE_15Y_FIXED
  MORTGAGE_5Y_ARM
  REFI_30Y_FIXED
  HELOC
  JUMBO_30Y_FIXED
  HYSA
  CD_3M
  CD_6M
  CD_12M
  CD_24M
  CD_60M
  PERSONAL_LOAN
  AUTO_LOAN_NEW
  AUTO_LOAN_USED
  AUTO_LOAN_REFI
  CREDIT_CARD_CASHBACK
  CREDIT_CARD_TRAVEL
  CREDIT_CARD_BALANCE_TRANSFER
  CREDIT_CARD_ZERO_APR
  CREDIT_CARD_NO_FEE
  CREDIT_CARD_BUSINESS
  CREDIT_CARD_STUDENT
  CREDIT_CARD_SECURED
  CHECKING
  MONEY_MARKET
  BROKERAGE
}

enum Confidence {
  HIGH
  MEDIUM
  LOW
}

model Lender {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  websiteUrl  String
  logoUrl     String?
  fdic        Boolean  @default(false)
  ncua        Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  sources     Source[]
  rates       Rate[]
}

model Source {
  id          String   @id @default(cuid())
  lenderId    String
  productType ProductType
  url         String
  selector    String?  // optional CSS selector hint for scraper
  active      Boolean  @default(true)
  lastScrapedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  lender      Lender   @relation(fields: [lenderId], references: [id], onDelete: Cascade)
  rates       Rate[]

  @@unique([lenderId, productType, url])
  @@index([active, lastScrapedAt])
}

model Rate {
  id              String      @id @default(cuid())
  lenderId        String
  sourceId        String
  productType     ProductType
  productSubtype  String?
  apyApr          Decimal     @db.Decimal(8, 5)
  termMonths      Int?
  minDeposit      Decimal?    @db.Decimal(12, 2)
  minCreditScore  Int?
  fees            Json?
  sourceUrl       String
  scrapedAt       DateTime
  verifiedAt      DateTime?
  confidence      Confidence  @default(HIGH)
  isCurrent       Boolean     @default(true)

  lender          Lender      @relation(fields: [lenderId], references: [id], onDelete: Cascade)
  source          Source      @relation(fields: [sourceId], references: [id], onDelete: Cascade)

  @@index([productType, isCurrent, scrapedAt])
  @@index([lenderId, productType, isCurrent])
}

model Article {
  id          String   @id @default(cuid())
  slug        String   @unique
  vertical    Vertical
  template    String   // e.g., "best_hysa_state", "refi_state"
  geoSlug     String?  // e.g., "california" for state pages
  variantSlug String?  // e.g., "good-credit", "no-fee"
  title       String
  metaTitle   String
  metaDescription String
  bodyJson    Json     // structured: { intro, h2_blocks: [...], faqs: [...] }
  schemaOrgJson Json?
  versionNumber Int    @default(1)
  publishedAt DateTime?
  lastWrittenAt DateTime @default(now())
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  versions    ArticleVersion[]

  @@index([vertical, template])
  @@index([publishedAt])
}

model ArticleVersion {
  id          String   @id @default(cuid())
  articleId   String
  versionNumber Int
  title       String
  bodyJson    Json
  generatedAt DateTime @default(now())
  generatedBy String   // "gemini-2.x" / "manual" / etc.

  article     Article  @relation(fields: [articleId], references: [id], onDelete: Cascade)

  @@unique([articleId, versionNumber])
}

model ScrapeError {
  id          String   @id @default(cuid())
  sourceId    String?
  url         String
  message     String
  stack       String?
  occurredAt  DateTime @default(now())

  @@index([sourceId, occurredAt])
}
```

- [ ] **Step 4: Create `packages/db/prisma/seed.ts`**

Write `~/fintiex/packages/db/prisma/seed.ts`:
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.lender.upsert({
    where: { slug: "marcus" },
    create: {
      slug: "marcus",
      name: "Marcus by Goldman Sachs",
      websiteUrl: "https://www.marcus.com",
      fdic: true,
    },
    update: {},
  });

  await prisma.lender.upsert({
    where: { slug: "ally" },
    create: {
      slug: "ally",
      name: "Ally Bank",
      websiteUrl: "https://www.ally.com",
      fdic: true,
    },
    update: {},
  });

  console.log("seed: 2 lenders upserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

- [ ] **Step 5: Create `packages/db/src/index.ts`**

Write `~/fintiex/packages/db/src/index.ts`:
```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export * from "@prisma/client";
```

- [ ] **Step 6: Write the failing test for `helpers.ts`**

The first helper we need is `currentRatesFor(productType)` — returns only `isCurrent=true` rates for a product type, sorted by APY/APR. Programmatic pages will rely on this.

Write `~/fintiex/packages/db/test/helpers.test.ts`:
```typescript
import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { prisma, ProductType, Confidence } from "../src/index.js";
import { currentRatesFor } from "../src/helpers.js";

describe("currentRatesFor", () => {
  beforeEach(async () => {
    await prisma.rate.deleteMany();
    await prisma.source.deleteMany();
    await prisma.lender.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("returns only current rates of the requested product type, sorted by APY desc", async () => {
    const lender = await prisma.lender.create({
      data: { slug: "test-bank", name: "Test Bank", websiteUrl: "https://test.example" },
    });
    const source = await prisma.source.create({
      data: {
        lenderId: lender.id,
        productType: ProductType.HYSA,
        url: "https://test.example/hysa",
      },
    });

    await prisma.rate.createMany({
      data: [
        {
          lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA,
          apyApr: "4.50", sourceUrl: source.url, scrapedAt: new Date(),
          confidence: Confidence.HIGH, isCurrent: true,
        },
        {
          lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA,
          apyApr: "4.30", sourceUrl: source.url, scrapedAt: new Date(),
          confidence: Confidence.HIGH, isCurrent: false,
        },
        {
          lenderId: lender.id, sourceId: source.id, productType: ProductType.CD_12M,
          apyApr: "5.00", sourceUrl: source.url, scrapedAt: new Date(),
          confidence: Confidence.HIGH, isCurrent: true,
        },
      ],
    });

    const result = await currentRatesFor(ProductType.HYSA);
    expect(result).toHaveLength(1);
    expect(Number(result[0]!.apyApr)).toBeCloseTo(4.5, 5);
  });
});
```

- [ ] **Step 7: Run the test to verify it fails**

Run: `pnpm --filter @fintiex/db test`
Expected: FAIL with "Cannot find module '../src/helpers.js'" or similar.

- [ ] **Step 8: Implement `helpers.ts`**

Write `~/fintiex/packages/db/src/helpers.ts`:
```typescript
import { prisma } from "./index.js";
import type { ProductType, Rate } from "@prisma/client";

export async function currentRatesFor(productType: ProductType): Promise<Rate[]> {
  return prisma.rate.findMany({
    where: { productType, isCurrent: true },
    orderBy: { apyApr: "desc" },
  });
}
```

- [ ] **Step 9: Run the test again**

You will need a Postgres available locally. Easiest path: install Postgres via Homebrew or run `docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres:16`.

Create `~/fintiex/.env.example`:
```
# Local dev
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fintiex_dev"

# Production (Railway-injected)
# DATABASE_URL is set by Railway automatically
```

Run:
```bash
cd ~/fintiex
cp .env.example .env
echo 'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fintiex_dev"' > packages/db/.env
pnpm --filter @fintiex/db prisma:migrate -- --name init
pnpm --filter @fintiex/db test
```
Expected: migration runs and creates tables, then test PASSES.

- [ ] **Step 10: Commit**

```bash
cd ~/fintiex
git add packages/db .env.example pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
feat(db): initial Prisma schema for lenders, rates, articles

Schema covers all 8 verticals, time-series rates with isCurrent flag,
versioned articles for safe AI rewrites, and scrape error log. One
helper (currentRatesFor) with passing test.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: UI package with brand tokens

**Files:**
- Create: `~/fintiex/packages/ui/package.json`
- Create: `~/fintiex/packages/ui/tsconfig.json`
- Create: `~/fintiex/packages/ui/src/index.ts`
- Create: `~/fintiex/packages/ui/src/tokens.ts`
- Create: `~/fintiex/packages/ui/src/components/logo.tsx`
- Create: `~/fintiex/packages/ui/test/tokens.test.ts`

- [ ] **Step 1: Create `packages/ui/package.json`**

Write `~/fintiex/packages/ui/package.json`:
```json
{
  "name": "@fintiex/ui",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./tokens": "./src/tokens.ts",
    "./components/logo": "./src/components/logo.tsx"
  },
  "scripts": {
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "lint": "echo 'no lint configured yet'"
  },
  "peerDependencies": {
    "react": ">=18"
  },
  "devDependencies": {
    "@types/react": "18.3.11",
    "react": "18.3.1",
    "vitest": "2.1.4"
  }
}
```

- [ ] **Step 2: Create `packages/ui/tsconfig.json`**

Write `~/fintiex/packages/ui/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*", "test/**/*"]
}
```

- [ ] **Step 3: Write the failing test for tokens**

Tokens are exported as a frozen object so consumers can't mutate them. The test asserts the colors are present and the freeze worked.

Write `~/fintiex/packages/ui/test/tokens.test.ts`:
```typescript
import { describe, it, expect } from "vitest";
import { tokens } from "../src/tokens.js";

describe("brand tokens", () => {
  it("exposes the Fintiex palette", () => {
    expect(tokens.color.primary).toBe("#0F4C81");
    expect(tokens.color.accent).toBe("#1F8A70");
    expect(tokens.color.ink).toBe("#0B1220");
    expect(tokens.color.paper).toBe("#FBFAF7");
  });

  it("exposes typography stacks", () => {
    expect(tokens.font.display).toContain("IBM Plex Serif");
    expect(tokens.font.body).toContain("Inter");
  });

  it("is immutable", () => {
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      tokens.color.primary = "#FF0000";
    }).toThrow();
  });
});
```

- [ ] **Step 4: Run the test to verify it fails**

Run: `pnpm --filter @fintiex/ui test`
Expected: FAIL with "Cannot find module '../src/tokens.js'".

- [ ] **Step 5: Implement `tokens.ts`**

Palette rationale: deep navy (`#0F4C81`) reads as serious finance authority without being Coastal-Debt blue (#3052FF, distinct enough at a glance). Forest green accent (`#1F8A70`) signals money/growth without the cliché bright-green-fintech vibe. Paper warm off-white (`#FBFAF7`) for editorial feel.

Write `~/fintiex/packages/ui/src/tokens.ts`:
```typescript
export const tokens = Object.freeze({
  color: Object.freeze({
    primary: "#0F4C81",
    primaryDark: "#0A3760",
    accent: "#1F8A70",
    ink: "#0B1220",
    inkMuted: "#475569",
    paper: "#FBFAF7",
    line: "#E5E0D5",
    danger: "#B43541",
    warning: "#C77A26",
  }),
  font: Object.freeze({
    display: '"IBM Plex Serif", Georgia, serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  }),
  radius: Object.freeze({
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  }),
  spacing: Object.freeze({
    pageMaxWidth: "72rem",
    containerPad: "1.25rem",
  }),
});

export type Tokens = typeof tokens;
```

- [ ] **Step 6: Implement `index.ts` and `logo.tsx`**

Write `~/fintiex/packages/ui/src/index.ts`:
```typescript
export { tokens } from "./tokens.js";
export type { Tokens } from "./tokens.js";
export { Logo } from "./components/logo.js";
```

Write `~/fintiex/packages/ui/src/components/logo.tsx`:
```typescript
import { tokens } from "../tokens.js";

export function Logo({ height = 28 }: { height?: number }) {
  return (
    <span
      style={{
        fontFamily: tokens.font.display,
        color: tokens.color.primary,
        fontWeight: 600,
        fontSize: height,
        letterSpacing: "-0.01em",
      }}
    >
      Fintiex
    </span>
  );
}
```

- [ ] **Step 7: Run tests**

Run: `pnpm --filter @fintiex/ui test`
Expected: 3 tests PASS.

- [ ] **Step 8: Commit**

```bash
cd ~/fintiex
git add packages/ui pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
feat(ui): brand tokens (palette, type stacks) + Logo component

Tokens are frozen so consumers can't drift the palette accidentally.
Palette: deep navy #0F4C81 primary, forest green #1F8A70 accent, warm
paper #FBFAF7 background. Distinct from Coastal Debt #3052FF.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Calculators package placeholder

**Files:**
- Create: `~/fintiex/packages/calculators/package.json`
- Create: `~/fintiex/packages/calculators/tsconfig.json`
- Create: `~/fintiex/packages/calculators/src/index.ts`

This is a placeholder so apps/web can depend on it without breaking once Phase 2 starts populating it. Keep it tiny.

- [ ] **Step 1: Create `package.json`**

Write `~/fintiex/packages/calculators/package.json`:
```json
{
  "name": "@fintiex/calculators",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "scripts": {
    "test": "echo 'no tests yet'",
    "typecheck": "tsc --noEmit",
    "lint": "echo 'no lint'"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

Write `~/fintiex/packages/calculators/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: Create the index**

Write `~/fintiex/packages/calculators/src/index.ts`:
```typescript
// Phase 2 will populate this package with:
//   - mortgage payment calculator
//   - refinance break-even calculator
//   - HELOC payment / draw calculator
//   - personal loan payoff calculator
//   - auto loan calculator
//   - credit card payoff (debt avalanche / snowball)
//   - CD ladder builder
//   - HYSA savings goal calculator
//   - compound interest visualizer
//   - net worth tracker (localStorage)

export const PHASE_0_PLACEHOLDER = true;
```

- [ ] **Step 4: Commit**

```bash
cd ~/fintiex
git add packages/calculators pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
chore(calculators): scaffold package (populated in Phase 2)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Next.js web app scaffold

**Files:**
- Create: `~/fintiex/apps/web/package.json`
- Create: `~/fintiex/apps/web/tsconfig.json`
- Create: `~/fintiex/apps/web/next.config.ts`
- Create: `~/fintiex/apps/web/postcss.config.mjs`
- Create: `~/fintiex/apps/web/tailwind.config.ts`
- Create: `~/fintiex/apps/web/app/globals.css`
- Create: `~/fintiex/apps/web/app/layout.tsx`
- Create: `~/fintiex/apps/web/app/page.tsx`
- Create: `~/fintiex/apps/web/components/site-header.tsx`
- Create: `~/fintiex/apps/web/lib/db.ts`
- Create: `~/fintiex/apps/web/next-env.d.ts`

- [ ] **Step 1: Create `apps/web/package.json`**

Write `~/fintiex/apps/web/package.json`:
```json
{
  "name": "@fintiex/web",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start --port ${PORT:-3000}",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@fintiex/calculators": "workspace:*",
    "@fintiex/db": "workspace:*",
    "@fintiex/ui": "workspace:*",
    "next": "16.0.0",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@playwright/test": "1.48.2",
    "@tailwindcss/postcss": "4.0.0-beta.3",
    "@types/react": "18.3.11",
    "@types/react-dom": "18.3.1",
    "autoprefixer": "10.4.20",
    "postcss": "8.4.49",
    "tailwindcss": "4.0.0-beta.3"
  }
}
```

Note: Next.js 16 with React 18.3 (not React 19) for stability. If Next 16 has shipped a stable release that requires React 19 by the time you run this, bump both.

- [ ] **Step 2: Create `apps/web/tsconfig.json`**

Write `~/fintiex/apps/web/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "noEmit": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create Next config**

Write `~/fintiex/apps/web/next.config.ts`:
```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@fintiex/ui", "@fintiex/db", "@fintiex/calculators"],
  experimental: {
    typedRoutes: true,
  },
};

export default config;
```

- [ ] **Step 4: Create `next-env.d.ts`**

Write `~/fintiex/apps/web/next-env.d.ts`:
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

- [ ] **Step 5: Create Tailwind + PostCSS config**

Write `~/fintiex/apps/web/postcss.config.mjs`:
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Write `~/fintiex/apps/web/tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        "primary-dark": "#0A3760",
        accent: "#1F8A70",
        ink: "#0B1220",
        "ink-muted": "#475569",
        paper: "#FBFAF7",
        line: "#E5E0D5",
      },
      fontFamily: {
        display: ['"IBM Plex Serif"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 6: Create `globals.css`**

Write `~/fintiex/apps/web/app/globals.css`:
```css
@import "tailwindcss";

:root {
  --color-primary: #0F4C81;
  --color-accent: #1F8A70;
  --color-ink: #0B1220;
  --color-paper: #FBFAF7;
}

html, body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3, h4 {
  font-family: "IBM Plex Serif", Georgia, serif;
  letter-spacing: -0.01em;
}
```

- [ ] **Step 7: Create root layout**

Write `~/fintiex/apps/web/app/layout.tsx`:
```typescript
import "./globals.css";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plex = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: { default: "Fintiex", template: "%s — Fintiex" },
  description:
    "Personal finance hub: rates, tools, and guides for mortgages, savings, loans, and credit cards.",
  metadataBase: new URL("https://fintiex.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      <body>
        <SiteHeader />
        <main className="max-w-page mx-auto px-5 py-10">{children}</main>
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Create `SiteHeader`**

Write `~/fintiex/apps/web/components/site-header.tsx`:
```typescript
import Link from "next/link";
import { Logo } from "@fintiex/ui/components/logo";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="max-w-page mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <Logo />
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/mortgages" className="text-ink hover:text-primary">Mortgages</Link>
          <Link href="/savings" className="text-ink hover:text-primary">Savings</Link>
          <Link href="/loans" className="text-ink hover:text-primary">Loans</Link>
          <Link href="/credit-cards" className="text-ink hover:text-primary">Cards</Link>
          <Link href="/calculators" className="text-ink hover:text-primary">Calculators</Link>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 9: Create homepage**

Write `~/fintiex/apps/web/app/page.tsx`:
```typescript
const verticals = [
  { slug: "mortgages", title: "Mortgages", blurb: "Compare 30y, 15y, refi, HELOC, and jumbo rates." },
  { slug: "savings", title: "Savings & CDs", blurb: "Find the highest-yielding HYSAs and CDs." },
  { slug: "loans", title: "Personal & Auto Loans", blurb: "Compare rates by credit tier and purpose." },
  { slug: "credit-cards", title: "Credit Cards", blurb: "Cash back, travel, balance transfer, and more." },
  { slug: "calculators", title: "Calculators", blurb: "Mortgage, refi, savings, and debt payoff tools." },
];

export default function Home() {
  return (
    <div>
      <h1 className="font-display text-5xl text-primary mb-4">Fintiex</h1>
      <p className="text-lg text-ink-muted max-w-2xl mb-12">
        Rates, tools, and plain-English guides for your money. Updated continuously.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verticals.map((v) => (
          <a
            key={v.slug}
            href={`/${v.slug}`}
            className="block border border-line rounded-lg p-6 bg-white hover:border-primary transition"
          >
            <h2 className="font-display text-2xl text-primary mb-2">{v.title}</h2>
            <p className="text-ink-muted text-sm">{v.blurb}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 10: Create db re-export**

Write `~/fintiex/apps/web/lib/db.ts`:
```typescript
export { prisma } from "@fintiex/db";
export type * from "@fintiex/db";
```

- [ ] **Step 11: Install and run dev**

Run:
```bash
cd ~/fintiex && pnpm install
pnpm --filter @fintiex/web dev
```
Expected: Next.js dev server starts on http://localhost:3000. Open it in a browser. You should see the "Fintiex" headline and 5 vertical cards in the brand palette.

- [ ] **Step 12: Stop dev server (Ctrl-C) and run typecheck**

Run: `pnpm --filter @fintiex/web typecheck`
Expected: no errors.

- [ ] **Step 13: Commit**

```bash
cd ~/fintiex
git add apps/web pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
feat(web): Next.js scaffold with brand layout and homepage placeholder

Tailwind v4 + IBM Plex Serif/Inter via next/font. Homepage shows
vertical cards using the brand palette. Wired to @fintiex/db and
@fintiex/ui packages.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Playwright smoke test

**Files:**
- Create: `~/fintiex/apps/web/playwright.config.ts`
- Create: `~/fintiex/apps/web/e2e/smoke.spec.ts`

- [ ] **Step 1: Create Playwright config**

Write `~/fintiex/apps/web/playwright.config.ts`:
```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "pnpm dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
      },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
});
```

- [ ] **Step 2: Write the smoke test**

Write `~/fintiex/apps/web/e2e/smoke.spec.ts`:
```typescript
import { test, expect } from "@playwright/test";

test("homepage renders Fintiex headline and all 5 vertical cards", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Fintiex" })).toBeVisible();

  for (const vertical of ["Mortgages", "Savings & CDs", "Personal & Auto Loans", "Credit Cards", "Calculators"]) {
    await expect(page.getByRole("heading", { level: 2, name: vertical })).toBeVisible();
  }
});

test("header nav links go to the right URLs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Mortgages" })).toHaveAttribute("href", "/mortgages");
  await expect(page.getByRole("link", { name: "Calculators" })).toHaveAttribute("href", "/calculators");
});
```

- [ ] **Step 3: Install Playwright browsers**

Run: `cd ~/fintiex/apps/web && pnpm exec playwright install chromium`
Expected: Chromium downloads.

- [ ] **Step 4: Run the smoke test**

Run: `pnpm --filter @fintiex/web test:e2e`
Expected: 2 tests PASS.

- [ ] **Step 5: Commit**

```bash
cd ~/fintiex
git add apps/web/playwright.config.ts apps/web/e2e
git commit -m "$(cat <<'EOF'
test(web): Playwright smoke test for homepage and nav

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Worker app scaffold

**Files:**
- Create: `~/fintiex/apps/worker/package.json`
- Create: `~/fintiex/apps/worker/tsconfig.json`
- Create: `~/fintiex/apps/worker/src/index.ts`
- Create: `~/fintiex/apps/worker/src/jobs/healthcheck.ts`
- Create: `~/fintiex/apps/worker/test/healthcheck.test.ts`

- [ ] **Step 1: Create `package.json`**

Write `~/fintiex/apps/worker/package.json`:
```json
{
  "name": "@fintiex/worker",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js",
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "lint": "echo 'no lint'"
  },
  "dependencies": {
    "@fintiex/db": "workspace:*",
    "node-cron": "3.0.3"
  },
  "devDependencies": {
    "@types/node-cron": "3.0.11",
    "tsx": "4.19.2",
    "vitest": "2.1.4"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

Write `~/fintiex/apps/worker/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: Write the failing healthcheck test**

The healthcheck job confirms DB connectivity by counting lenders. We test the function returns the count.

Write `~/fintiex/apps/worker/test/healthcheck.test.ts`:
```typescript
import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { prisma } from "@fintiex/db";
import { runHealthcheck } from "../src/jobs/healthcheck.js";

describe("runHealthcheck", () => {
  beforeEach(async () => {
    await prisma.rate.deleteMany();
    await prisma.source.deleteMany();
    await prisma.lender.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("returns the lender count", async () => {
    await prisma.lender.create({
      data: { slug: "hc-test", name: "HC Test Bank", websiteUrl: "https://hc.test" },
    });
    const result = await runHealthcheck();
    expect(result.ok).toBe(true);
    expect(result.lenderCount).toBe(1);
  });

  it("returns ok=true even with zero lenders", async () => {
    const result = await runHealthcheck();
    expect(result.ok).toBe(true);
    expect(result.lenderCount).toBe(0);
  });
});
```

- [ ] **Step 4: Run the test**

Run: `pnpm --filter @fintiex/worker test`
Expected: FAIL ("Cannot find module").

- [ ] **Step 5: Implement the healthcheck job**

Write `~/fintiex/apps/worker/src/jobs/healthcheck.ts`:
```typescript
import { prisma } from "@fintiex/db";

export interface HealthcheckResult {
  ok: boolean;
  lenderCount: number;
  ranAt: Date;
}

export async function runHealthcheck(): Promise<HealthcheckResult> {
  const lenderCount = await prisma.lender.count();
  return {
    ok: true,
    lenderCount,
    ranAt: new Date(),
  };
}
```

- [ ] **Step 6: Implement the worker entry**

Write `~/fintiex/apps/worker/src/index.ts`:
```typescript
import cron from "node-cron";
import { runHealthcheck } from "./jobs/healthcheck.js";

const HEALTHCHECK_SCHEDULE = process.env.HEALTHCHECK_CRON ?? "*/15 * * * *";

async function main() {
  console.log("[fintiex worker] starting");

  const initial = await runHealthcheck();
  console.log(`[fintiex worker] startup healthcheck: ok=${initial.ok} lenders=${initial.lenderCount}`);

  cron.schedule(HEALTHCHECK_SCHEDULE, async () => {
    try {
      const result = await runHealthcheck();
      console.log(`[fintiex worker] healthcheck: ok=${result.ok} lenders=${result.lenderCount}`);
    } catch (err) {
      console.error("[fintiex worker] healthcheck failed", err);
    }
  });

  console.log(`[fintiex worker] cron registered (${HEALTHCHECK_SCHEDULE}); idling`);
}

main().catch((err) => {
  console.error("[fintiex worker] fatal", err);
  process.exit(1);
});
```

- [ ] **Step 7: Run the test again**

Run: `pnpm --filter @fintiex/worker test`
Expected: 2 tests PASS.

- [ ] **Step 8: Smoke-run the worker locally**

Run: `cd ~/fintiex && pnpm --filter @fintiex/worker dev`
Expected: logs `[fintiex worker] starting`, then `startup healthcheck: ok=true lenders=N`, then `cron registered`. Hit Ctrl-C to stop.

- [ ] **Step 9: Commit**

```bash
cd ~/fintiex
git add apps/worker pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
feat(worker): scaffold cron worker with healthcheck job

Worker boots, runs an initial healthcheck against Postgres, then
schedules it on a cron (default every 15 minutes). Phase 1 plugs in
the rate scrapers as additional jobs.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Railway deployment config

**Files:**
- Create: `~/fintiex/railway.json`
- Create: `~/fintiex/apps/web/railway.web.json` (service-level overrides)
- Create: `~/fintiex/apps/worker/railway.worker.json`
- Create: `~/fintiex/Dockerfile.web`
- Create: `~/fintiex/Dockerfile.worker`

Railway can autodetect Next.js and Node services with nixpacks, but for a pnpm monorepo with workspace packages we get more reliable builds with explicit Dockerfiles. Two services share one Postgres add-on.

- [ ] **Step 1: Create `Dockerfile.web`**

Write `~/fintiex/Dockerfile.web`:
```dockerfile
# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/web/package.json apps/web/
COPY apps/worker/package.json apps/worker/
COPY packages/db/package.json packages/db/
COPY packages/ui/package.json packages/ui/
COPY packages/calculators/package.json packages/calculators/
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY tsconfig.base.json ./
COPY packages ./packages
COPY apps/web ./apps/web
RUN pnpm --filter @fintiex/db prisma:generate
RUN pnpm --filter @fintiex/web build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=build /app /app
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["pnpm", "start"]
```

- [ ] **Step 2: Create `Dockerfile.worker`**

Write `~/fintiex/Dockerfile.worker`:
```dockerfile
# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/worker/package.json apps/worker/
COPY apps/web/package.json apps/web/
COPY packages/db/package.json packages/db/
COPY packages/ui/package.json packages/ui/
COPY packages/calculators/package.json packages/calculators/
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY tsconfig.base.json ./
COPY packages ./packages
COPY apps/worker ./apps/worker
RUN pnpm --filter @fintiex/db prisma:generate
RUN pnpm --filter @fintiex/worker build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=build /app /app
WORKDIR /app/apps/worker
CMD ["pnpm", "start"]
```

- [ ] **Step 3: Create `railway.json`**

Write `~/fintiex/railway.json`:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 5
  }
}
```

- [ ] **Step 4: Smoke-build the web Docker image locally (optional but recommended)**

Run:
```bash
cd ~/fintiex
docker build -f Dockerfile.web -t fintiex-web .
```
Expected: image builds successfully. If you don't have Docker installed, skip — Railway will build remotely. (Install Docker Desktop for Mac if you want local validation.)

- [ ] **Step 5: Commit**

```bash
cd ~/fintiex
git add Dockerfile.web Dockerfile.worker railway.json
git commit -m "$(cat <<'EOF'
chore: Railway deployment via Dockerfiles for web and worker

Two services share one Postgres add-on. Explicit Dockerfiles instead of
nixpacks because pnpm workspaces + Prisma generate need a known build
sequence.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Push to GitHub and connect Railway

This task is partly manual (Railway dashboard, DNS at the domain registrar). Each substep tells you exactly what to click or paste.

**Files:** none new; this is wiring.

- [ ] **Step 1: Confirm fintiex.com is purchased**

Bar buys the domain at his preferred registrar (Namecheap, Cloudflare Registrar, or Porkbun). Set nameservers to the registrar's defaults for now; we'll switch to Cloudflare for CDN/DDoS in a later task.

If not yet purchased: stop and buy fintiex.com (and fintiex.io defensively) before continuing.

- [ ] **Step 2: Create GitHub repo and push**

Run:
```bash
cd ~/fintiex
gh repo create fintiex --private --source=. --remote=origin
git push -u origin main
```
Expected: repo created and pushed; `gh repo view` shows the repo URL.

- [ ] **Step 3: Create Railway project**

In the Railway dashboard:
1. New Project → Deploy from GitHub repo → select `fintiex`
2. Add a Postgres database to the project (one DB, shared by both services)
3. The first service will autodeploy. Configure it as the **web** service:
   - Settings → Build → Dockerfile path: `Dockerfile.web`
   - Settings → Networking → Generate Domain (or attach `fintiex.com` once DNS is ready)
   - Variables → ensure `DATABASE_URL` references the Postgres add-on (`${{ Postgres.DATABASE_URL }}`)
4. Click "+" in the project → Empty Service → name it `worker`:
   - Source → connect the same GitHub repo
   - Settings → Build → Dockerfile path: `Dockerfile.worker`
   - Variables → `DATABASE_URL=${{ Postgres.DATABASE_URL }}`
   - Worker doesn't need a public domain.

- [ ] **Step 4: Run the initial Prisma migration on Railway Postgres**

The first deploy will fail or no-op DB-wise because we haven't run migrations against the Railway DB yet. From your local machine:

```bash
# Get the Railway Postgres URL from the dashboard (Postgres → Variables → DATABASE_URL)
RAILWAY_DB_URL="postgres://..."   # paste from Railway

cd ~/fintiex/packages/db
DATABASE_URL="$RAILWAY_DB_URL" pnpm prisma migrate deploy
DATABASE_URL="$RAILWAY_DB_URL" pnpm prisma db seed
```
Expected: migration applies, seed runs, 2 lenders inserted.

- [ ] **Step 5: Trigger Railway redeploy**

In Railway: web service → Deployments → Redeploy. Same for worker.
Expected: both services build and start. Web service URL serves the homepage. Worker logs show "startup healthcheck: ok=true lenders=2".

- [ ] **Step 6: Smoke-test the deployed site**

Run:
```bash
curl -sSI "https://<your-railway-domain>" | head -5
```
Expected: 200 OK with Next.js headers.

Open the Railway URL in a browser. Confirm the homepage renders with brand palette and 5 vertical cards.

- [ ] **Step 7: Connect custom domain**

In Railway web service → Settings → Networking → Custom Domain → add `fintiex.com` and `www.fintiex.com`. Railway shows a CNAME or A record target.

At your DNS registrar:
- `@` → A record or ALIAS to Railway's target
- `www` → CNAME to Railway's target

Wait for DNS propagation (5-60 min). Verify:
```bash
curl -sSI "https://fintiex.com" | head -5
```
Expected: 200 OK.

- [ ] **Step 8: Run Playwright smoke test against production**

Run:
```bash
cd ~/fintiex
PLAYWRIGHT_BASE_URL="https://fintiex.com" pnpm --filter @fintiex/web test:e2e
```
Expected: 2 tests PASS against the live site.

- [ ] **Step 9: Commit (deployment notes only — no code changes)**

If this task didn't change any committed files, skip. Otherwise:
```bash
cd ~/fintiex
git add .
git commit -m "$(cat <<'EOF'
chore: deployment notes / config tweaks discovered during Railway wiring

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Phase 0 acceptance check

**Files:** none new; this is a verification gate.

- [ ] **Step 1: Run all tests**

Run:
```bash
cd ~/fintiex
pnpm test
```
Expected: all packages and apps report PASS (or "no tests yet" for calculators).

- [ ] **Step 2: Run typecheck across the workspace**

Run:
```bash
cd ~/fintiex
pnpm typecheck
```
Expected: no errors.

- [ ] **Step 3: Confirm production smoke**

Run:
```bash
curl -sS "https://fintiex.com" | grep -E "(Fintiex|Mortgages|Savings)"
```
Expected: matches the homepage strings.

- [ ] **Step 4: Confirm worker is alive**

In Railway dashboard → worker → Logs. Look for `[fintiex worker] healthcheck: ok=true` entries within the last 15 minutes.

- [ ] **Step 5: Update spec with deployment metadata**

Append to `~/fintiex/docs/specs/2026-04-29-fintiex-design.md` under a new "## Phase 0 status" section:
```markdown
## Phase 0 status

- Deployed: <YYYY-MM-DD>
- Production URL: https://fintiex.com
- Railway project: <railway-project-id>
- GitHub: https://github.com/<owner>/fintiex
- Worker cron: every 15 minutes (healthcheck only)
```

- [ ] **Step 6: Commit and tag**

```bash
cd ~/fintiex
git add docs/specs/2026-04-29-fintiex-design.md
git commit -m "$(cat <<'EOF'
docs: Phase 0 deployment metadata

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
git tag phase-0-complete
git push origin main --tags
```

Phase 0 is done. Phase 1 (rate pipeline) is the next plan to write.

---

## Self-review notes

- All tasks have exact file paths, complete code, and exact commands.
- TDD applied where it makes sense (helpers, tokens, healthcheck job). Pure config tasks (workspace, Tailwind config, Dockerfiles) don't have unit tests; the verification is build/run.
- Naming is consistent across tasks: `prisma`, `runHealthcheck`, `Logo`, `tokens` — same name in test, implementation, and consumer.
- Schema covers all 8 verticals' product types so Phase 1 doesn't need migrations beyond adding more lenders/sources.
- React 18.3 (not 19) chosen for stability; if Next 16 stable requires 19 by execution time, bump both.
- Postgres assumed; SQLite via Prisma would also work but Railway's managed Postgres is the path of least resistance.
- The CSS uses Tailwind v4 beta (`@import "tailwindcss"` syntax). If v4 has shipped stable by execution time, prefer the stable release.
