import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCarriers, formatCurrency } from "@/lib/insurance";
import { CarrierBox } from "@/components/carrier-box";

export const metadata: Metadata = {
  title: "Best Life Insurance Companies of 2026: 7 Top Providers Ranked | Fintiex",
  description:
    "Compare the 7 best life insurance providers of 2026. Term, whole, and no-exam policies from Haven, Ladder, Northwestern Mutual, Prudential, and more.",
  alternates: { canonical: "/insurance/life" },
};

const faqItems: FAQItem[] = [
  {
    question: "How much life insurance do I actually need?",
    answer:
      "A simple rule: 10 to 12 times your annual income, plus mortgage balance, plus future college costs for kids. For a 35-year-old earning $80K with a $300K mortgage and one child, that lands around $1.4M of 20-year term. Many families are under-insured by half.",
  },
  {
    question: "Term vs whole life: which is right for me?",
    answer:
      "For most people, term life is the right call. It is 5 to 15 times cheaper than whole life for the same coverage, and the policy period (10 to 30 years) is usually long enough to cover income replacement, mortgage, and kids reaching adulthood. Whole life makes sense for estate planning, business succession, or maxing out tax-advantaged savings.",
  },
  {
    question: "Can I get life insurance without a medical exam?",
    answer:
      "Yes. No-exam (accelerated underwriting) policies are widely available for healthy applicants under 60. Haven Life, Ladder, and Policygenius all offer instant or same-day decisions up to $1M to $3M without an exam. Rates are slightly higher than fully underwritten, but worth it for speed and convenience.",
  },
  {
    question: "What does life insurance cost?",
    answer:
      "A healthy 30-year-old can get $500K of 20-year term for around $20 per month. A 40-year-old pays around $30 per month for the same coverage. Whole life for the same face amount runs $300 to $500 per month. Smokers, applicants with chronic conditions, and applicants over 60 pay significantly more.",
  },
  {
    question: "Should I buy life insurance through my employer?",
    answer:
      "Group life through work is a nice supplement but rarely enough on its own. Typical employer coverage is 1 to 2 times salary, which usually leaves a large gap. Group coverage also disappears if you leave the job. Buy a private term policy for primary coverage and treat employer life as bonus.",
  },
  {
    question: "Is life insurance worth it for stay-at-home parents?",
    answer:
      "Absolutely yes. The value a stay-at-home parent provides (childcare, household management, transportation) would cost $50K to $80K per year to replace. A $500K to $750K term policy on the at-home spouse is usually affordable and protects the working spouse from a financial crisis.",
  },
];

export default function Page() {
  const carriers = loadCarriers("life");

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
          { name: "Life", href: "/insurance/life" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> {carriers.length} life providers ranked
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Best life insurance of 2026.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Term, whole, and no-exam life from 7 top providers. From digital-first carriers with instant decisions to traditional carriers built for whole life and estate planning. Plain rankings, no commission upsell.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#picks" className="pill pill-ink">
              See the top 7
              <span aria-hidden>↓</span>
            </Link>
            <Link href="/insurance" className="pill pill-ghost">
              All insurance hubs
            </Link>
          </div>
        </div>
      </section>

      {/* PICKS TABLE */}
      <section id="picks" className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top picks
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The 7 life insurance providers we recommend.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Click any provider for the full review, including underwriting speed, no-exam eligibility, and policy options.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {carriers.map((c, i) => (
            <CarrierBox
              key={c.slug}
              carrier={c.carrier}
              productLabel="Life Insurance"
              tag={i === 0 ? "Top pick" : undefined}
              tagline={c.best_for}
              specs={[
                {
                  label: "Coverage",
                  value:
                    c.coverage_amount_min && c.coverage_amount_max
                      ? `${formatCurrency(c.coverage_amount_min)} to ${formatCurrency(c.coverage_amount_max)}`
                      : "Varies",
                },
                { label: "AM Best", value: c.am_best_rating ?? "N/R" },
                {
                  label: "Ages",
                  value: c.age_range ? `${c.age_range.min} to ${c.age_range.max}` : "Varies",
                },
                {
                  label: "Underwriting",
                  value: c.underwriting_speed
                    ? c.underwriting_speed.split(" ").slice(0, 4).join(" ")
                    : "Standard",
                },
              ]}
              bestFor={c.best_for}
              perks={c.perks.slice(0, 3)}
              rating={c.rating}
              reviewHref={`/insurance/life/${c.slug}`}
              externalHref={c.quote_url}
              externalLabel={`Get a quote at ${c.carrier.split(" ")[0]}`}
            />
          ))}
        </div>
      </section>

      {/* HOW WE RANKED */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Methodology</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                How we ranked life providers.
              </h2>
              <p className="text-mute leading-relaxed">
                Financial strength, pricing, underwriting flexibility, and digital experience.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">AM Best rating (35 percent)</h3>
                <p className="text-mute">
                  Life insurance is a promise that may not be redeemed for 30 to 50 years. Financial strength matters more here than for any other line. We weight AM Best heavily and penalize anything below A.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Price (25 percent)</h3>
                <p className="text-mute">
                  For term life, we compare 20-year, $500K policy prices for a healthy 35-year-old non-smoker. Differences between top carriers are usually under 15 percent for healthy applicants and can be much larger for applicants with health conditions.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Underwriting flexibility (25 percent)</h3>
                <p className="text-mute">
                  Speed of decision, availability of no-exam policies, and willingness to underwrite applicants with health conditions. Haven Life, Ladder, and Policygenius lead on speed. Prudential is strong on impaired-risk applicants.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Digital experience (15 percent)</h3>
                <p className="text-mute">
                  Quote tools, application UX, e-signature, and online policy management. Digital-first carriers naturally lead here; traditional carriers like Northwestern Mutual and State Farm lean on the agent relationship instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY TYPES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Coverage 101</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Life insurance policy types.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              t: "Term life",
              d: "Coverage for a fixed term (10 to 30 years). Pays a death benefit if you die during the term. Cheapest option per dollar of coverage. Right for most families.",
            },
            {
              t: "Whole life",
              d: "Permanent coverage that lasts your entire life and builds cash value. Premiums are 5 to 15 times more than term. Best for estate planning, business succession, or guaranteed savings.",
            },
            {
              t: "Universal life",
              d: "Permanent coverage with flexible premiums and adjustable death benefit. Cash value tied to interest rates. More complex than whole life, with more upside and downside.",
            },
            {
              t: "Variable universal life",
              d: "Universal life with cash value invested in sub-accounts (similar to mutual funds). Higher growth potential but carries investment risk. For sophisticated buyers only.",
            },
            {
              t: "No-exam life",
              d: "Term life that skips the medical exam. Decision in minutes to a few days. Slightly higher rates than fully underwritten, but worth it for speed and simplicity.",
            },
            {
              t: "Final expense",
              d: "Small whole life policy (usually $5K to $25K) designed to cover funeral and burial costs. Available up to age 85, often with guaranteed issue. Higher per-dollar cost than term.",
            },
          ].map((item) => (
            <div key={item.t} className="card p-6">
              <h3 className="font-display font-bold text-base mb-2 tracking-tight">{item.t}</h3>
              <p className="text-mute text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
                <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Protect what matters most.
            </h2>
            <p className="text-ink/70 mt-2">A 35-year-old can lock in $500K of 20-year term for around $25 per month.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/insurance/auto" className="pill pill-ink">
              Compare auto insurance
              <span aria-hidden>→</span>
            </Link>
            <Link href="/insurance/home" className="pill pill-ghost">
              See home insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
