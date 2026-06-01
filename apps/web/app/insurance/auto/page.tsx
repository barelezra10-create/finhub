import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCarriers, formatPremiumRange } from "@/lib/insurance";
import { CarrierBox } from "@/components/carrier-box";

export const metadata: Metadata = {
  title: "Best Auto Insurance Companies of 2026: 8 Top Carriers Ranked | Fintiex",
  description:
    "Compare the 8 best auto insurance carriers of 2026. GEICO, Progressive, State Farm, USAA, and more. Real premium ranges, AM Best ratings, JD Power scores.",
  alternates: { canonical: "/insurance/auto" },
};

const faqItems: FAQItem[] = [
  {
    question: "What auto insurance coverage do I really need?",
    answer:
      "Every state requires liability insurance, which covers damage you cause to other people and their property. If you finance or lease, the lender requires collision and comprehensive too. Most drivers should also carry uninsured motorist coverage, which protects you if someone with no insurance hits you.",
  },
  {
    question: "How much auto insurance is enough?",
    answer:
      "State minimum liability limits are usually way too low. We suggest 100/300/100, which means $100,000 per person and $300,000 per accident for bodily injury, plus $100,000 for property damage. If you own a home or have savings to protect, consider adding an umbrella policy on top.",
  },
  {
    question: "What is a telematics or usage-based program?",
    answer:
      "Telematics programs (GEICO DriveEasy, Progressive Snapshot, Allstate Drivewise) use an app or device to track how you drive. Safe drivers can save 10 to 40 percent. The catch: drivers with frequent hard braking, late-night driving, or high mileage can see rates go up.",
  },
  {
    question: "Should I drop full coverage on an older car?",
    answer:
      "A common rule: if your car's market value is less than 10 times your annual collision and comprehensive premium, dropping full coverage often makes sense. If you carry a $1,000 deductible and the car is worth $4,000, the math rarely works in favor of keeping full coverage.",
  },
  {
    question: "How often should I shop my auto insurance?",
    answer:
      "Every 2 years at minimum, or any time you move, marry, add a driver, or buy a different car. Loyalty is rarely rewarded in auto insurance, and a 15-minute comparison can easily save $300 to $800 per year for the same coverage.",
  },
  {
    question: "Does my credit score affect my auto insurance rate?",
    answer:
      "In most states, yes. Auto insurers use a credit-based insurance score to predict claim likelihood. Drivers with poor credit can pay 60 to 90 percent more than drivers with excellent credit for the same coverage. California, Hawaii, Massachusetts, and Michigan ban or restrict this practice.",
  },
];

export default function Page() {
  const carriers = loadCarriers("auto");

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
          { name: "Auto", href: "/insurance/auto" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> {carriers.length} auto carriers ranked
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Best auto insurance of 2026.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            The cheapest auto insurance is rarely the same as the best. Here are the 8 carriers worth comparing in 2026, scored on premium range, financial strength, JD Power satisfaction, and digital experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#picks" className="pill pill-ink">
              See the top 8
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
              The 8 auto carriers we recommend right now.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Premium ranges are full-coverage estimates for a typical 35-year-old driver with clean record. Click any carrier for the full review.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {carriers.map((c, i) => (
            <CarrierBox
              key={c.slug}
              carrier={c.carrier}
              productLabel="Auto Insurance"
              tag={i === 0 ? "Top pick" : undefined}
              tagline={c.best_for}
              specs={[
                { label: "Annual premium", value: formatPremiumRange(c.avg_annual_premium) },
                { label: "AM Best", value: c.am_best_rating ?? "N/R" },
                { label: "JD Power", value: c.jd_power_satisfaction ? String(c.jd_power_satisfaction) : "N/R" },
                {
                  label: "Bundling save",
                  value: c.bundling_discount_pct != null ? `${c.bundling_discount_pct}%` : "N/A",
                },
              ]}
              bestFor={c.best_for}
              perks={c.perks.slice(0, 3)}
              rating={c.rating}
              reviewHref={`/insurance/auto/${c.slug}`}
              externalHref={c.quote_url}
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
                How we ranked auto carriers.
              </h2>
              <p className="text-mute leading-relaxed">
                Four scores combined into one ranking. No paid placement, ever.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Average premium (40 percent)</h3>
                <p className="text-mute">
                  We pull average annual premium data for a typical 35-year-old driver with clean record, $100/300/100 liability, and a 5-year-old midsize car. Carriers with lower realistic premiums score higher.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">AM Best financial strength (20 percent)</h3>
                <p className="text-mute">
                  AM Best rates insurer ability to pay claims. A++ is the top score. Anything below A- gets penalized, since financial strength matters when you actually need to file a claim.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">JD Power satisfaction (25 percent)</h3>
                <p className="text-mute">
                  JD Power surveys policyholders on price, billing, claims, and interaction. Scores are reported on an 1,000-point scale. Above 870 is excellent. Below 820 is below industry average.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Digital experience (15 percent)</h3>
                <p className="text-mute">
                  App quality, online quote, policy management, and claims filing through the app. Carriers with award-winning apps (GEICO, Progressive, USAA) score top marks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE TYPES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Coverage 101</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Auto coverage types, plain English.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              t: "Liability",
              d: "Covers damage you cause to other people and their property. Required in every state. Carry at least 100/300/100, not the state minimum.",
            },
            {
              t: "Collision",
              d: "Pays to repair your car after a crash, regardless of who caused it. Required if you finance or lease.",
            },
            {
              t: "Comprehensive",
              d: "Covers your car for non-crash damage: theft, vandalism, hail, fire, falling trees. Usually pairs with collision as full coverage.",
            },
            {
              t: "Uninsured / underinsured motorist",
              d: "Pays for your injuries and damage if a driver with little or no insurance hits you. About 1 in 7 US drivers has no insurance.",
            },
            {
              t: "Medical payments / PIP",
              d: "Covers medical bills for you and your passengers after a crash, regardless of fault. PIP is required in 12 no-fault states.",
            },
            {
              t: "Gap insurance",
              d: "Pays the gap between what your car is worth and what you still owe on a loan or lease. Worth it for the first 2 to 3 years of a new car loan.",
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
              Shop your auto insurance in 15 minutes.
            </h2>
            <p className="text-ink/70 mt-2">Click any carrier for the full review and direct quote link.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/insurance/home" className="pill pill-ink">
              Compare home insurance
              <span aria-hidden>→</span>
            </Link>
            <Link href="/insurance/life" className="pill pill-ghost">
              See life insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
