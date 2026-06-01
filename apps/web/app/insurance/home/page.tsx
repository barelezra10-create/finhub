import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCarriers, formatPremiumRange } from "@/lib/insurance";
import { CarrierBox } from "@/components/carrier-box";

export const metadata: Metadata = {
  title: "Best Home Insurance Companies of 2026: 8 Top Carriers Ranked | Fintiex",
  description:
    "Compare the 8 best home insurance carriers of 2026. State Farm, Allstate, USAA, Lemonade, and more. Real premium ranges, AM Best ratings, and JD Power scores.",
  alternates: { canonical: "/insurance/home" },
};

const faqItems: FAQItem[] = [
  {
    question: "How much home insurance do I need?",
    answer:
      "Cover the replacement cost of your home, not the market value. Replacement cost is what it would take to rebuild from scratch, including labor and materials. In high-cost markets this can be much less than market value. Most policies also cover 50 to 70 percent of dwelling value for personal property.",
  },
  {
    question: "Does home insurance cover floods?",
    answer:
      "No. Standard home insurance excludes flood damage. You need a separate flood policy through the National Flood Insurance Program (NFIP) or a private flood insurer. About 25 percent of flood claims happen outside high-risk zones, so flood insurance is worth considering even if your mortgage does not require it.",
  },
  {
    question: "What is the difference between actual cash value and replacement cost?",
    answer:
      "Actual cash value pays you what your items are worth today, after depreciation. Replacement cost pays you what it would cost to buy a new version. The difference can be huge: a 5-year-old TV might have an actual cash value of $200 but a replacement cost of $800. Always pick replacement cost if you can.",
  },
  {
    question: "Will my premium go up if I file a claim?",
    answer:
      "Usually yes. A single claim can raise your premium 10 to 30 percent at renewal, and the increase can stick for 3 to 5 years. Many insurers will not raise your rate for the first claim if you have claim forgiveness (Allstate, State Farm offer this). Weather-related claims like hail are less likely to raise rates than liability claims.",
  },
  {
    question: "How much can I save by bundling home and auto?",
    answer:
      "Most carriers offer 10 to 25 percent off both policies when you bundle. The largest discounts come from Allstate (up to 25 percent), Liberty Mutual, and Nationwide (around 20 percent). Always compare the bundled price against two separate quotes to make sure bundling actually saves you money.",
  },
  {
    question: "Is Lemonade a real insurance company?",
    answer:
      "Yes. Lemonade is a fully licensed insurer rated A by AM Best, available in 47 states for homeowners. The difference is the model: AI-powered claims (most paid in minutes via app), a flat fee structure, and unused premiums donated to charity. Best for digital-first renters and first-time homeowners with simple needs.",
  },
];

export default function Page() {
  const carriers = loadCarriers("home");

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
          { name: "Home", href: "/insurance/home" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> {carriers.length} home carriers ranked
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Best home insurance of 2026.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            With home insurance rates up 30 percent in many states since 2022, shopping carriers matters more than ever. Here are the 8 carriers worth comparing in 2026, ranked by premium, financial strength, and customer satisfaction.
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
              The 8 home carriers we recommend right now.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Premium ranges shown for a $300K single-family home with $250K dwelling, $1,000 deductible. Click any carrier for the full review.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {carriers.map((c, i) => (
            <CarrierBox
              key={c.slug}
              carrier={c.carrier}
              productLabel="Home Insurance"
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
              reviewHref={`/insurance/home/${c.slug}`}
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
                How we ranked home carriers.
              </h2>
              <p className="text-mute leading-relaxed">
                Premium, financial strength, satisfaction, and digital experience, weighted into one score.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Average premium (40 percent)</h3>
                <p className="text-mute">
                  Premium estimates for a $300K single-family home, $250K dwelling coverage, $100K personal liability, and a $1,000 deductible. We use national averages, since home insurance varies sharply by state and risk zone.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">AM Best rating (25 percent)</h3>
                <p className="text-mute">
                  Home insurance claims often come during widespread events: hurricanes, wildfires, hail. A carrier with weak financials is risky in those moments. We give heavy weight to AM Best ratings of A or higher.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">JD Power satisfaction (20 percent)</h3>
                <p className="text-mute">
                  JD Power surveys home insurance customers on price, coverage, billing, and claims experience. USAA and State Farm consistently lead the rankings. Newer digital-first carriers without 5-year history get rated on AM Best plus user reviews.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Digital experience (15 percent)</h3>
                <p className="text-mute">
                  Online quote speed, app quality, claim filing through the app, and policy management. Lemonade leads here with AI-powered claims paid in minutes, but traditional carriers like Allstate and USAA also score well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE PARTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Coverage 101</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            The 6 parts of a standard home policy.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              t: "Dwelling (Coverage A)",
              d: "Pays to rebuild your house if it is damaged or destroyed by a covered peril. Set this to replacement cost, not market value.",
            },
            {
              t: "Other structures (Coverage B)",
              d: "Covers detached garages, sheds, fences. Usually 10 percent of dwelling coverage automatically.",
            },
            {
              t: "Personal property (Coverage C)",
              d: "Covers your stuff: furniture, electronics, clothing. Typically 50 to 70 percent of dwelling coverage. Worth choosing replacement cost over actual cash value.",
            },
            {
              t: "Loss of use (Coverage D)",
              d: "Pays for hotel, food, and other extra costs if you cannot live in the home during repairs. Typically 20 to 30 percent of dwelling coverage.",
            },
            {
              t: "Liability (Coverage E)",
              d: "Pays if someone is injured on your property or you damage someone else's property. Carry at least $300K. Most carriers offer $500K to $1M cheaply.",
            },
            {
              t: "Medical payments (Coverage F)",
              d: "Pays small medical bills for guests injured on your property, regardless of fault. Usually $1K to $5K limit. Helps avoid lawsuits over minor injuries.",
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
              Bundle and save more.
            </h2>
            <p className="text-ink/70 mt-2">Most carriers offer 10 to 25 percent off when you combine home and auto.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/insurance/auto" className="pill pill-ink">
              Compare auto insurance
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
