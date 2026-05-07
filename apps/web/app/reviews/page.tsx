import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";
import { brandsByCategory, type Brand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "All Brand Reviews: Mortgages, Savings, Loans, Credit Cards | Fintiex",
  description:
    "Independent reviews of every major mortgage lender, high-yield savings bank, personal loan provider, and credit card we cover. No sponsored rankings. Updated weekly.",
  alternates: { canonical: "/reviews" },
};

const summaries: Record<string, string> = {
  // Mortgages
  "marcus-mortgage": "Goldman Sachs lender pivoting back into mortgages with low fees and digital underwriting.",
  better: "Online-first mortgage lender with no commissions and same-day pre-approvals.",
  rocket: "The largest U.S. retail lender, strong on tech and 24/7 phone support.",
  loandepot: "Hybrid online and in-branch lender with a wide product menu including jumbo and VA.",
  "chase-mortgage": "Big-bank lender with relationship discounts for existing Chase deposit customers.",
  pnc: "Regional lender with strong physician and grant programs in select states.",
  "wellsfargo-mortgage": "National lender with a deep correspondent network and sizable jumbo book.",
  usbank: "Top-five lender with strong portfolio jumbo pricing in the western U.S.",

  // Savings
  bask: "Texas-based bank that pays American Airlines miles instead of interest on a savings account.",
  bread: "Online savings arm of Comenity, consistently one of the highest APYs on no-minimum accounts.",
  marcus: "Goldman Sachs online savings, no fees, no minimums, and a long track record of competitive rates.",
  ally: "Online-only bank known for clean apps, no monthly fees, and category-leading customer support.",
  sofi: "App-first banking with bonus APY when you direct deposit, plus checking and investing in one stack.",
  "discover-savings": "FDIC-insured online savings with no fees and a generous APY relative to the big four banks.",
  cit: "Consumer-direct savings with tiered APYs and one of the strongest no-penalty CD options on the market.",
  "amex-savings": "Personal savings from American Express, no minimums, no fees, FDIC-insured.",
  "lendingclub-savings": "High-yield savings paired with a checking account that earns interest and refunds ATM fees.",
  synchrony: "Long-running online savings brand with consistently top-quartile APYs and a strong CD ladder.",

  // Personal loans
  "sofi-loan": "Strong rates for prime borrowers, no origination fee, and same-day funding for many applicants.",
  lightstream: "Truist-owned online lender with rate-beat guarantee and the lowest APRs for excellent credit.",
  "marcus-loan": "Goldman Sachs personal loans with no fees, fixed rates, and same-day approval for many.",
  "discover-loan": "Personal loans up to $40,000 with no origination fees and 24/7 U.S.-based support.",
  upstart: "AI-powered underwriting that approves applicants traditional lenders decline. Watch the origination fee.",
  lendingclub: "Marketplace personal loans with funding in days. Origination fees vary based on your credit profile.",
  bestegg: "Fast online personal loans with above-average approval odds for fair-credit borrowers.",
  prosper: "One of the original peer-to-peer lenders, now offering personal loans with transparent fee disclosures.",

  // Cards
  "wells-active-cash": "Flat 2% cash back on everything, $0 annual fee, $200 signup bonus. The simplest top pick on the market.",
  "chase-sapphire-preferred": "60K-point bonus, 5x travel through Chase, and 1:1 transfers to airline and hotel partners.",
  "wells-reflect": "Up to 21 months of 0% intro APR on purchases and balance transfers with no annual fee.",
  "citi-diamond-preferred": "21 months 0% on balance transfers, the longest in the industry, with a 5% transfer fee.",
  "citi-double-cash": "1% when you buy and 1% when you pay. 2% total flat-rate, $0 annual fee.",
  "ink-business-preferred": "100K-point welcome bonus and 3x on travel, shipping, and digital ads. Best business card.",
  "discover-it-cash-back": "5% rotating quarterly categories with first-year Cashback Match doubling everything you earn.",
  "amex-gold": "4x on dining and U.S. supermarkets with $240 in annual statement credits to offset the fee.",
};

const categoryMeta: { key: Brand["category"]; title: string; tag: string; href: string; description: string }[] = [
  {
    key: "mortgage",
    title: "Mortgages",
    tag: "Mortgage lenders",
    href: "/mortgages",
    description: "Lenders we reviewed against the same APR, fee, and turn-time benchmarks.",
  },
  {
    key: "savings",
    title: "Savings",
    tag: "High-yield savings",
    href: "/savings",
    description: "Online and digital banks ranked on real APY after promotional periods end.",
  },
  {
    key: "loan",
    title: "Loans",
    tag: "Personal loans",
    href: "/loans",
    description: "Personal loan providers measured on APR ranges, fees, and approval odds.",
  },
  {
    key: "card",
    title: "Credit Cards",
    tag: "Credit cards",
    href: "/credit-cards",
    description: "Top cards across cash back, travel, 0% APR, balance transfer, and business.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How does Fintiex make money on these reviews?",
    answer:
      "Fintiex is supported by display advertising and editorial subscriptions. Reviews are not paid placements. Rankings on this site are determined by editorial scoring against published methodology, not by which brand pays us most. We disclose any affiliate relationship inside the relevant review when one exists.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Rate-driven reviews (savings, mortgages, personal loans) are reviewed weekly and updated whenever an issuer publishes a new APY, APR, or fee. Credit card reviews are reviewed weekly and updated when issuers change signup bonuses, rewards rates, or annual fees. The last reviewed date appears at the top of each review page.",
  },
  {
    question: "Why is my favorite brand not listed?",
    answer:
      "We only publish reviews for brands that meet our minimum criteria: nationwide availability, FDIC insurance for deposit accounts, transparent fee disclosures, and a public APR or APY range. Smaller regional banks and credit unions are excellent options for many readers, but we cannot review every one. The Consumer Financial Protection Bureau publishes data on all U.S. financial institutions if you want to research a brand we have not yet covered.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Independent reviews · Updated weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Every brand we cover, in one place.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex publishes independent reviews of mortgage lenders, high-yield savings banks, personal loan providers, and credit cards. No sponsored rankings, no paid placements. Find the brand you want to research, or browse by category to see how the field stacks up.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              Open the calculators
              <span aria-hidden>→</span>
            </Link>
            <Link href="/markets" className="pill pill-ghost">
              See current rates
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categoryMeta.map((cat) => {
        const items = brandsByCategory(cat.key);
        return (
          <section key={cat.key} className="max-w-(--max-w-page) mx-auto px-6 py-16 border-t border-line first-of-type:border-t-0">
            <div className="grid grid-cols-12 gap-8 mb-8">
              <div className="col-span-12 md:col-span-7">
                <span className="chip chip-mute mb-4">{cat.tag}</span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">{cat.title}</h2>
                <p className="text-mute leading-relaxed mt-3 max-w-2xl">{cat.description}</p>
              </div>
              <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
                <Link href={cat.href} className="pill pill-ghost">
                  All {cat.title.toLowerCase()}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((b) => (
                <Link
                  key={b.slug}
                  href={`/reviews/${b.slug}`}
                  className="card p-5 flex items-start gap-4 group hover:bg-bg-soft/60 transition-colors"
                >
                  <BrandLogo brand={b} size={48} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-base tracking-tight truncate">{b.name}</h3>
                      <span className="text-mute text-base group-hover:text-ink group-hover:translate-x-1 transition-all shrink-0">
                        →
                      </span>
                    </div>
                    <p className="text-sm text-mute leading-relaxed line-clamp-2">
                      {summaries[b.slug] ?? "Independent review with rates, fees, approval odds, and what to know before you apply."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">How Fintiex reviews work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
                <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Run the math before you pick the brand.
            </h2>
            <p className="text-ink/70 mt-2">Calculators and live rate data for every category we cover.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              Open calculators
              <span aria-hidden>→</span>
            </Link>
            <Link href="/markets" className="pill pill-ghost">
              See current rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
