import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { VisitBrandCta, VisitBrandCard } from "@/components/visit-brand-cta";
import type { Brand } from "@/lib/brands";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Guild Mortgage Review (2026): Rates, Loan Types, Verdict",
  description:
    "Guild Mortgage is a 60-plus-year-old lender strong in FHA, VA, and USDA loans, with credit scores as low as 540 on some programs. Full 2026 review and verdict.",
  alternates: { canonical: "/reviews/guild-mortgage" },
};

const brand: Brand = {
  slug: "guild-mortgage",
  name: "Guild Mortgage",
  domain: "guildmortgage.com",
  color: "#00494B",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "What credit score do I need for Guild Mortgage?",
    answer:
      "Guild generally looks for a 620 score on conventional loans. Government programs are more flexible: FHA, VA, and USDA approvals have been available with scores in the mid 500s, as low as roughly 540 on some programs. Lower scores usually mean more documentation and pricing adjustments, so ask a loan officer to run your exact scenario.",
  },
  {
    question: "Is Guild Mortgage a direct lender?",
    answer:
      "Yes. Guild originates, underwrites, and funds its own loans, and it retains servicing on most of them. That means there is a good chance you will still make payments to Guild after closing instead of being handed to an unfamiliar servicer.",
  },
  {
    question: "Who owns Guild Mortgage now?",
    answer:
      "Funds managed by Bayview Asset Management acquired Guild in an all-cash deal valued around $1.3 billion that closed in late 2025, taking the company private. Guild continues to operate under its own name and branch network.",
  },
  {
    question: "Does Guild Mortgage publish its rates online?",
    answer:
      "No. Guild does not post live rates on its website, so you need to contact a loan officer for a quote. As of mid-2026, average 30-year fixed rates nationally have been in the mid to high 6 percent range, but your quote depends on credit, down payment, and location. Always compare Guild's quote against at least two other lenders.",
  },
  {
    question: "Does Guild offer down payment assistance?",
    answer:
      "Yes. Guild is known for pairing loans with state and local down payment assistance programs, and it offers specialty products like zero-down options for qualifying buyers, manufactured home financing, and renovation loans. Availability varies by state, so ask what programs apply where you are buying.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Guild Mortgage Review"
        description="Guild Mortgage is a 60-plus-year-old direct lender strong in FHA, VA, and USDA lending, with flexible credit requirements and a large branch network. Full 2026 review."
        slug="/reviews/guild-mortgage"
        brandName="Guild Mortgage"
        category="Mortgage"
        ratingValue={8.0}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Guild Mortgage", href: "/reviews/guild-mortgage" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Mortgage Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Guild Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Founded" value="1960" />
            <Stat label="Min credit score" value="~540 (gov)" />
            <Stat label="2024 volume" value="$24B" />
            <Stat label="Fintiex score" value="8.0/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Deep government-loan bench: FHA, VA, and USDA are core products, not afterthoughts</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Flexible credit: scores in the mid 500s can qualify on some government programs</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Wide product menu: renovation, manufactured housing, reverse, bridge, and physician loans</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Retains servicing on most loans, so you usually keep paying Guild after closing</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fewer CFPB complaints than average for its size, with an A+ BBB rating</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong track record pairing buyers with down payment assistance programs</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No published rates: you must talk to a loan officer to get a number</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Paid $24.9 million in 2020 to settle DOJ allegations over FHA underwriting violations</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Branch-driven model means experience varies by which loan officer you get</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Now private-equity owned (Bayview, 2025); long-term strategy under new ownership is unproven</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard brand={brand} tagline="FHA, VA, and USDA specialist · Branches across the U.S." ctaLabel="Get a quote" />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Guild Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Guild Mortgage is one of the oldest independent mortgage lenders in the country. Founded in San Diego in 1960, it grew into a national retail lender that originated about $24 billion in mortgages in 2024, built around local branches and loan officers rather than a call center or an app. In late 2025, funds managed by Bayview Asset Management bought Guild in a deal valued around $1.3 billion and took the company private. Day to day, Guild still operates under its own brand.
          </p>
          <p>
            Guild&rsquo;s identity is government lending. FHA, VA, and USDA loans are where it does its best work, with credit requirements that reach lower than most big-name lenders: roughly 540 on some government programs versus the 580 to 620 floors you see elsewhere. It also carries an unusually broad product shelf for a retail lender, including renovation loans, manufactured home financing, reverse mortgages, bridge loans, and zero-down programs for qualifying buyers. If your situation does not fit a cookie-cutter conventional loan, Guild probably has a program for it.
          </p>
          <p>
            The honest caveats: Guild does not publish rates, so comparison shopping takes a phone call, and third-party reviewers have noted its pricing is not consistently the cheapest. In 2020 it paid $24.9 million to settle Department of Justice allegations that it violated FHA underwriting rules on loans from 2007 to 2011, a serious historical mark, though its recent complaint volume with the CFPB runs below average for its size. On balance, Guild is a strong pick for credit-challenged and first-time buyers who want a human guide, and a weaker pick for rate-obsessed borrowers with spotless files.
          </p>
        </div>
      </section>

      {/* RATES AND PRODUCTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Rates and Products</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Loan types and credit floors
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Product</div>
            <div className="text-right">Typical min score</div>
            <div className="text-right">Notes</div>
          </div>
          {[
            { product: "Conventional", score: "620", note: "3% down programs available" },
            { product: "FHA", score: "~540", note: "3.5% down at 580+" },
            { product: "VA", score: "~540", note: "0% down for eligible veterans" },
            { product: "USDA", score: "~540", note: "0% down, rural areas" },
            { product: "Jumbo", score: "680+", note: "Above conforming limits" },
            { product: "Renovation / manufactured / reverse", score: "Varies", note: "Specialty programs" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.score}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Guild does not publish live rates. As of mid-2026 national average 30-year fixed rates sat in the mid to high 6% range; confirm current pricing with a loan officer.</p>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>620 FICO for conventional; government programs reach into the mid 500s</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>3% down conventional options; 3.5% FHA; 0% down VA and USDA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Down payment assistance programs available in many states</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Self-employed and non-traditional income considered with documentation</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Manufactured homes and fixer-uppers financeable through specialty programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Licensed in 49 states; not available in New York</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">State availability can change under new ownership; check guildmortgage.com for current licensing where you live.</p>
        </div>
      </section>

      {/* APPLICATION AND UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Application and UX</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          How the process works
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Guild is a loan-officer-first lender. You can start an application online or in the MyMortgage app, but the process runs through a named human at a local branch who structures the loan, hunts for assistance programs, and shepherds underwriting. For first-time buyers and anyone using FHA, VA, USDA, or down payment help, that hand-holding is the whole point of choosing Guild.
          </p>
          <p>
            Because the experience depends on the branch, vet your loan officer the way you would a contractor: ask how many loans like yours they closed in the last year and how they communicate during underwriting. After closing, Guild keeps servicing on most loans, so your payment, escrow, and any hardship conversations typically stay with Guild rather than moving to a stranger. That continuity is a genuine, underrated perk.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>First-time buyers who want a human guide and down payment help</li>
              <li>FHA, VA, and USDA borrowers, especially with scores under 620</li>
              <li>Buyers of manufactured homes or fixer-uppers needing specialty programs</li>
              <li>Borrowers who value keeping the same servicer after closing</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want instant online rate quotes without talking to anyone</li>
              <li>You have excellent credit and are purely rate shopping</li>
              <li>You live in New York, where Guild is not licensed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Guild vs. Rocket vs. Better
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Guild</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">Better</div>
          </div>
          {[
            { feature: "Model", a: "Branch + LO", b: "Online + advisor", c: "Fully digital" },
            { feature: "Min FICO (gov)", a: "~540", b: "580", c: "620" },
            { feature: "USDA loans", a: "Yes", b: "Yes", c: "No" },
            { feature: "Published rates", a: "No", b: "Yes", c: "Yes" },
            { feature: "Keeps servicing", a: "Usually", b: "Usually", c: "No" },
            { feature: "Down payment assistance", a: "Strong", b: "Limited", c: "Limited" },
          ].map((r, i, arr) => (
            <div key={r.feature} className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium text-mute">{r.feature}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center font-mono">{r.b}</div>
              <div className="text-center font-mono">{r.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">FAQ</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8 leading-tight">
          Common questions
        </h2>
        <div className="space-y-5 max-w-3xl">
          {faqs.map((item) => (
            <div key={item.question} className="card p-6">
              <div className="font-display font-semibold text-lg mb-2 tracking-tight">{item.question}</div>
              <div className="text-ink-soft leading-relaxed">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <VisitBrandCard
          brand={brand}
          headline="Ready to talk to Guild?"
          tagline="FHA, VA, and USDA specialist · Down payment assistance in many states"
          ctaLabel="Get a quote"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mortgages" className="pill pill-ghost">
            Compare all lenders <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className="font-display font-extrabold text-2xl tabular">{value}</div>
    </div>
  );
}
