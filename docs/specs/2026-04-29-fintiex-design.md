# Fintiex — Design Doc

**Date:** 2026-04-29
**Owner:** Bar Elezra
**Domain:** fintiex.com (defensives: fintiex.io, fintiex.co, fintiex.net)
**Status:** Approved, ready for implementation planning

---

## 1. Overview & Positioning

Fintiex is a personal finance hub modeled on Bankrate / NerdWallet — full breadth across mortgages, banking, credit cards, personal loans, auto loans, savings/CDs, and investing. The differentiation is four stacked moats:

1. **Freshness:** every rate timestamped with a visible "updated X minutes ago" badge and source URLs cited
2. **Tool-density:** 5-10 polished hero calculators at launch, growing to 100+ over time
3. **Programmatic geo + persona coverage:** ~1K pages at launch covering "[best product] in [state]" and persona variants
4. **AI-native advisor:** chat front door (phase 5) that answers personal-finance questions with real product matches and embedded calculators

**Voice & visual identity:** authority/serious, closer to NerdWallet/Investopedia than Mint/SoFi. Editorial typography (e.g., IBM Plex Serif headings + Inter body), serious blue/green palette distinct from Coastal Debt's #3052FF. No em dashes anywhere (standing rule).

**Monetization:** intentionally deferred. Affiliate (CJ, Impact, FlexOffers) and lead-gen into Bar's existing properties (PennyLime, BDI, Coastal Debt) are the natural day-one revenue path. Display ads (Mediavine) layer in once traffic justifies. Decided when traffic warrants the work.

---

## 2. MVP Scope

### Programmatic pages (~1,030)

| Vertical | Pages | Templates |
|---|---|---|
| Mortgages | ~200 | Best mortgage rates / Refinance / HELOC / Jumbo, each per state (50 × 4) |
| HYSA / savings | ~100 | Best HYSA per state (50), Best savings for [persona] (50) |
| CDs | ~100 | Best CD rates per state (50), Best CDs by term (3mo / 6mo / 1yr / 2yr / 5yr) |
| Personal loans | ~150 | Best personal loans per state (50), by credit tier (~30), by purpose (~70) |
| Auto loans | ~100 | Auto loan rates per state (50), by use case (used / new / refi / bad credit) |
| Credit cards | ~150 | Best [category] cards: cash back, travel, balance transfer, 0% APR, no annual fee, business, student, secured |
| Banking (checking + MM) | ~100 | Best checking per state (50), Best money market accounts (50) |
| Investing | ~100 | Best brokers for [persona / use]: beginners, options, IRAs, robo-advisors |

### Hero tools (10, client-side React, embeddable)

1. Mortgage payment calculator
2. Refinance break-even calculator
3. HELOC payment / draw calculator
4. Personal loan payoff calculator
5. Auto loan calculator
6. Credit card payoff (debt avalanche / snowball visualizer)
7. CD ladder builder
8. HYSA savings goal calculator
9. Compound interest visualizer
10. Net worth tracker (no login, localStorage)

### Pillar pages (~25)

Hand-crafted-with-AI long-form hub pages: Mortgages 101, How HYSAs Work, Understanding Credit Card APR, etc. Provide topical authority and internal-link spine.

**Total at launch:** ~1,065 pages.

---

## 3. Architecture

### Stack

- **Next.js 16** (App Router, ISR for rate-driven pages)
- **Railway** for hosting (web app + worker)
- **Postgres + Prisma** (single DB)
- **Tailwind + shadcn/ui**
- **Playwright** in a worker for scraping
- **Gemini 2.x** (Bar's existing key) for rate extraction + content generation
- **Cloudflare** in front for CDN + DDoS

### Repo layout

```
~/fintiex/
├── apps/
│   ├── web/          # Next.js app
│   └── worker/       # Railway worker: scraping + content gen crons
├── packages/
│   ├── db/           # Prisma schema + client
│   ├── ui/           # shared components
│   └── calculators/  # tool logic, framework-agnostic
└── scripts/          # one-off backfills, content gen runs
```

Monorepo because web app and worker share the Prisma schema and types.

### Data flow

Three pipelines feed the site, each independent and idempotent:

1. **Rate pipeline** — daily cron, scrape + AI-extract + diff + ISR trigger
2. **Content pipeline** — one-time backfill + drift-driven refresh
3. **Page build** — on-demand ISR, page renders from current DB state at request time

---

## 4. Rate Data Pipeline

### Sources (~40 lenders to start)

- **Mortgages:** Rocket, Better, loanDepot, Chase, Wells Fargo, US Bank, PNC, BoA, plus Freddie Mac PMMS as benchmark
- **HYSA / CD:** Marcus, Ally, Discover, SoFi, CIT, Capital One 360, Synchrony, Amex, Bask, Bread, LendingClub
- **Personal loans:** SoFi, LightStream, Marcus, Discover, Upstart, LendingClub, Best Egg, Prosper
- **Auto:** Capital One Auto, LightStream, MyAutoLoan, PenFed, Navy Federal
- **Credit cards:** Chase, Amex, Capital One, Citi, Discover, Wells Fargo
- **Brokers:** Fidelity, Schwab, Vanguard, Robinhood, E*Trade

### Daily flow

1. For each source URL: Playwright fetch with stealth headers, capture HTML + screenshot
2. For each capture: send HTML to Gemini with a structured-output schema `{ product_type, apy_or_apr, term, min_deposit, fees, last_updated_on_source }`. Validate (APY < 25%, APR < 40%, etc.)
3. Diff against previous values: if change > 5bp, write a new row and mark affected pages for revalidation. Otherwise, update `last_checked` only.
4. Trigger Next.js on-demand ISR for affected pages.

### Failure handling

- Per-source failures don't block the run; logged to `scrape_errors`
- Sources failing 3 days in a row get flagged for manual review
- Rates older than 7 days surface a "rate may be outdated" badge instead of pretending freshness

### Schema (rough)

```
rates
├── id
├── lender_id           -> lenders.id
├── product_type        (mortgage_30y_fixed, hysa, cd_12m, personal_loan, ...)
├── product_subtype     (good_credit, jumbo, no_fee, ...)
├── apy_apr_value
├── term_months         (nullable)
├── min_deposit         (nullable)
├── min_credit_score    (nullable)
├── source_url
├── scraped_at
├── verified_at
└── confidence          (high / medium / low — from extraction step)
```

### Compliance

Scraping public marketing pages of US banks is legal but bank ToS often prohibit scraping. Mitigation: low frequency (daily, not hourly), cite source URLs visibly, no copying of marketing copy. Risk acceptable for MVP; revisit before scaling beyond ~50K sessions/mo.

---

## 5. Content Generation Pipeline

### Programmatic page bodies (~1K pages)

For each programmatic URL (e.g., `/best-mortgage-rates/california`):

- 800-1,200 word article body (intro, factors affecting rates in [state], current trend commentary, FAQ section, conclusion)
- Meta title + description
- Schema.org structured data (FAQPage, FinancialProduct)

**Generation flow:**

1. For each (template, slug) pair: pull current rates for that vertical, plus state-specific context (median income, top local banks, state regs if any)
2. Build prompt: template + rate data + state context + writing rules
3. Gemini generates article body in JSON: `{ intro, h2_blocks: [...], faqs: [...] }`
4. Sanity validate (length, no em dashes, no hallucinated banks)
5. Store in `articles` table with version number
6. Trigger ISR for the URL

**Drift refresh:** rerun generation when rates change >10% from last write, or every 90 days, whichever first. Articles reference rates by slot (not hardcoded), so most refreshes are cheap.

### Pillar pages (~25, hand-crafted-with-AI)

2,500-4,000 word hub pages. Generated as drafts via Gemini using a structured outline Bar approves, then a quality pass before publish. These are ranking + linking spine.

### Writing rules baked into prompts

- No em dashes anywhere (standing rule)
- US English, plain language, 8th-grade readability
- No fake authorial voice ("As a financial advisor...")
- Cite Freddie Mac / FDIC / CFPB when referencing data
- Always end articles with a real next-step action (compare rates table, calculator link, related guide)

### Cost estimate

~1,000 pages × ~4K tokens × Gemini Flash pricing ≈ $20-40 for full backfill. Drift refreshes ~$5-10/month.

---

## 6. Page Structure & SEO Mechanics

### Programmatic page anatomy

```
H1: Best [Product] Rates in [State] — Apr 2026
Last updated: 14 minutes ago             <- freshness moat

[RATE TABLE]
Lender | APY | Min Dep | [CTA]
Sources: marcus.com (4hr ago), ally.com (2hr)   <- transparency moat

[Embedded calculator relevant to vertical]

[Article body, AI-generated, 800-1200w]
- Intro, state-specific context
- Factors affecting rates
- Current trend commentary
- FAQ block

[Internal links: related state pages, vertical hub, related calculators]
```

### URL structure

```
/mortgages                              <- vertical hub (pillar)
/mortgages/[state]                      <- state landing
/best-mortgage-rates/[state]            <- programmatic
/refinance-rates/[state]                <- programmatic
/heloc-rates/[state]                    <- programmatic
/calculators                            <- tools hub (pillar)
/calculators/mortgage-payment           <- tool page
/calculators/refinance-break-even       <- tool page
/guides/how-mortgages-work              <- pillar
/learn/[topic]                          <- long-tail evergreen
```

### SEO mechanics

- **Sitemap:** auto-generated, segmented (sitemap-mortgages.xml, sitemap-cards.xml, ...) — Google handles segmented sitemaps better than monolithic for large sites
- **Internal linking:** every programmatic page links to (a) its vertical hub, (b) 4-6 related state pages, (c) 1-2 relevant calculators, (d) 1-2 pillar guides. Generated automatically from a graph in DB.
- **Indexing:** submit batches of 200 URLs/day to GSC Indexing API using Bar's existing OAuth refresh token to accelerate first crawl
- **Core Web Vitals:** static rate tables (server-rendered), calculators lazy-loaded, no client-side fetching for rate data

### Freshness signaling

- `<meta property="article:modified_time">` updated when rates refresh
- "Last updated [time ago]" badge above the fold
- Sitemap `<lastmod>` updated on rate changes
- JSON-LD `datePublished` + `dateModified` for Google's "Updated 2 hours ago" snippet eligibility

---

## 7. Phasing

**Phase 0 — Foundation (week 1)**
- Buy fintiex.com + fintiex.io
- Init monorepo, Next.js + Prisma + Railway
- Brand basics (logo, palette, type)
- Schema design + migrations
- Deploy hello-world to fintiex.com on Railway

**Phase 1 — Rate pipeline (week 2)**
- Worker scaffold on Railway, cron schedule
- Scrapers for first 10 sources (mortgages + HYSA — biggest CPL)
- Gemini extraction with structured output
- Diff + ISR trigger logic
- Admin dashboard at /admin for scrape status, errors, history

**Phase 2 — Tools (week 3)**
- 10 hero calculators as standalone client components
- Design system: input controls, result cards, charts (Recharts)
- Embeddable variants (`?embed=1` mode for backlinks)
- /calculators hub page

**Phase 3 — Programmatic content (weeks 4-5)**
- Page templates per vertical
- Content generation pipeline: backfill all ~1K pages
- Quality pass: spot-check 5%, refine prompts
- Internal linking graph builder
- Sitemap generation

**Phase 4 — Pillar content + launch (week 6)**
- 25 pillar pages (AI draft + Bar QA pass)
- GSC verification, sitemap submission, Indexing API setup
- Analytics: Plausible (clean) or GA4 (network compatibility)
- Launch checklist: robots.txt, 404s, redirects, OG images
- Soft launch — start indexing

**Phase 5 — AI advisor (weeks 7-9, post-launch)**
- Chat interface (Vercel AI SDK + Gemini)
- Tool-calling: query rates table, link to relevant pages, embed calculators inline in chat
- Lead capture inside chat for phase-6 monetization

**Phase 6 — Monetization layer (when ready)**
- Affiliate signup (CJ, Impact, FlexOffers)
- Wire affiliate links into rate tables
- Lead-gen forms feeding PennyLime / BDI
- AdSense day one (negligible), Mediavine at 50K sessions/mo

**Time to launch (phases 0-4):** ~6 weeks solo + AI agents; faster with parallelization.

---

## Open questions / deferred decisions

- **Monetization specifics** — deferred per Bar's call. Revisit when programmatic pages start indexing and we see what converts.
- **Brand visual identity** — palette, logo, typography to be designed in Phase 0.
- **AI advisor UX** — chat shape (full-page, sidebar, modal) decided in Phase 5 once we've watched search behavior on the launched site.
- **Lead-gen partnerships (LendingTree-style networks)** — explicitly out of scope until we have traffic data justifying the sales overhead.
