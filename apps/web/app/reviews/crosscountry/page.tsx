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
  title: "CrossCountry Mortgage Review (2026): Products, Complaints",
  description:
    "CrossCountry Mortgage is one of the largest US retail lenders, with FHA from 500 FICO and a huge product menu. Full 2026 review: strengths, complaints, verdict.",
  alternates: { canonical: "/reviews/crosscountry" },
};

const brand: Brand = {
  slug: "crosscountry",
  name: "CrossCountry Mortgage",
  domain: "crosscountrymortgage.com",
  color: "#00263A",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "What credit score does CrossCountry Mortgage require?",
    answer:
      "Roughly 620 for conventional loans with 3% down. FHA goes as low as 500 with 10% down, or 3.5% down at 580 and above. VA and USDA can also reach down to about 500 for qualified borrowers, and jumbo loans generally want 660 or higher. Low-score approvals depend on the rest of your file, so expect extra documentation.",
  },
  {
    question: "Does CrossCountry Mortgage publish its rates?",
    answer:
      "No. CrossCountry does not post live rates online, so you need a loan officer to quote you. Reviewers have noted its pricing can run above some competitors. As of mid-2026, national average 30-year fixed rates were in the mid to high 6 percent range; get CrossCountry's Loan Estimate and compare it against at least two other lenders on the same day.",
  },
  {
    question: "Is CrossCountry Mortgage a broker or a direct lender?",
    answer:
      "A direct lender. CrossCountry originates, underwrites, and funds its own loans through several thousand licensed loan officers and branches nationwide. It began as a broker in 2003 and converted to full lending, which is why its product shelf is unusually wide for a retail lender.",
  },
  {
    question: "What loan types does CrossCountry offer?",
    answer:
      "Nearly everything: conventional, FHA, VA, USDA, jumbo, ARMs, renovation and construction loans, bridge loans, condo and investment property programs, plus non-QM options like bank statement loans and DSCR loans for investors. If a standard lender turned down your scenario, CrossCountry likely has a program that fits it.",
  },
  {
    question: "What are the most common complaints about CrossCountry?",
    answer:
      "BBB records show a few hundred complaints over three years, concentrated in servicing and escrow: unwanted PMI charges, taxes or insurance paid late from escrow, and slow fixes. On the origination side, some borrowers report loan officers going quiet at critical moments and delayed closings. An A+ BBB rating coexists with weak Trustpilot scores, so the experience varies heavily by branch.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="CrossCountry Mortgage Review"
        description="CrossCountry Mortgage is one of the largest retail mortgage lenders in the US, with credit flexibility down to 500 FICO on FHA and one of the widest product menus. Full 2026 review."
        slug="/reviews/crosscountry"
        brandName="CrossCountry Mortgage"
        category="Mortgage"
        ratingValue={7.7}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "CrossCountry Mortgage", href: "/reviews/crosscountry" },
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
                CrossCountry Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Founded" value="2003" />
            <Stat label="Min credit score" value="500 (FHA)" />
            <Stat label="Coverage" value="50 states" />
            <Stat label="Fintiex score" value="7.7/10" />
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
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>One of the widest product menus in retail lending: agency, jumbo, renovation, construction, bridge, non-QM, DSCR</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Real credit flexibility: FHA from 500 FICO, VA and USDA reaching similar depths</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Licensed in all 50 states with thousands of local loan officers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong with self-employed borrowers via bank statement documentation</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>A+ BBB rating and an established, well-capitalized operation since 2003</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No published rates, and reviewers note pricing can run above competitors</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Escrow-related servicing complaints: unwanted PMI charges, late tax and insurance payments</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Branch lottery: some borrowers report unreachable loan officers and delayed closings</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Weak Trustpilot scores sit alongside the good BBB grade; experience is inconsistent</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard brand={brand} tagline="Full-menu retail lender · FHA from 500 FICO · All 50 states" ctaLabel="Get a quote" />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is CrossCountry Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            CrossCountry Mortgage started in 2003 as a small Ohio brokerage and grew into one of the largest retail mortgage lenders in the country, headquartered in Cleveland and licensed in all 50 states. Growth came the old-fashioned way: recruiting productive loan officers and branches by the hundreds. That history explains both its greatest strength, an enormous product menu, and its most common criticism, an experience that varies a lot depending on which branch and loan officer you land with.
          </p>
          <p>
            The product breadth is genuinely unusual. Beyond the standard conventional, FHA, VA, USDA, and jumbo lineup, CrossCountry writes renovation and construction loans, bridge loans, condo and investor programs, and a full non-QM shelf including bank statement loans for the self-employed and DSCR loans for rental investors. Credit floors reach lower than most big lenders, with FHA available from a 500 score with 10% down. If your file is unusual, CrossCountry is one of the few household-scale lenders where a &ldquo;no&rdquo; from underwriting on one program can turn into a &ldquo;yes&rdquo; on another without changing lenders.
          </p>
          <p>
            The trade-offs are cost transparency and consistency. CrossCountry does not publish rates, and multiple reviewers note its pricing can sit above sharper-priced competitors, so you must make it compete on a written Loan Estimate. Its BBB file shows a few hundred complaints over three years, weighted toward escrow administration after closing: PMI that should not be there, tax or insurance bills paid late, and slow corrections. None of this is disqualifying for a lender of its size, but it shapes our verdict: CrossCountry is a strong pick when you need product flexibility or a low credit floor, and an average one when you are a vanilla borrower who just wants the cheapest rate.
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
            { product: "Conventional", score: "620", note: "3% down programs" },
            { product: "FHA", score: "500", note: "10% down under 580; 3.5% at 580+" },
            { product: "VA / USDA", score: "~500", note: "0% down for eligible borrowers" },
            { product: "Jumbo", score: "660+", note: "10%+ down typical" },
            { product: "Renovation / construction", score: "620+", note: "203(k), HomeStyle, new build" },
            { product: "Non-QM: bank statement, DSCR", score: "Varies", note: "Self-employed and investors" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.score}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">CrossCountry does not publish live rates. National average 30-year fixed rates were in the mid to high 6% range as of mid-2026; confirm your pricing with a Loan Estimate.</p>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>620 FICO for conventional; FHA down to 500 with a larger down payment</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>3% down conventional; 3.5% FHA at 580+; 0% down VA and USDA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Self-employed borrowers can qualify with bank statements instead of tax returns</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Real estate investors can use DSCR programs based on property cash flow</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Down payment assistance and buydown programs vary by branch and state</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Available in all 50 states and D.C.</li>
          </ul>
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
            CrossCountry runs on loan officers. You can start online or in its app, but pricing, structuring, and problem-solving all flow through the person and branch handling your file. When that person is good, borrowers describe fast approvals and creative structuring that saved deals other lenders lost. When that person is overloaded, you get the complaint-board version: unanswered calls during underwriting and closing dates that slip. Interview your loan officer up front: ask their average clear-to-close time, how they communicate, and who covers when they travel.
          </p>
          <p>
            Since CrossCountry will not show you a rate without contact, force the comparison yourself. Get its Loan Estimate and same-day quotes from at least two other lenders, and compare rate, points, and lender fees line by line. CrossCountry loan officers can often match or beat a documented competing offer, and the difference between the asked price and the matched price can be real money. After closing, note whether your loan will be serviced by CrossCountry or transferred, and audit your first escrow analysis either way.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Borrowers with low credit scores who still want a major national lender</li>
              <li>Self-employed buyers needing bank statement documentation</li>
              <li>Investors using DSCR or other non-QM programs</li>
              <li>Complex deals: renovation, construction, bridge, or condo edge cases</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want transparent online rates without a sales conversation</li>
              <li>You are a vanilla W-2 borrower purely chasing the lowest price</li>
              <li>You will not have time to vet and manage your loan officer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          CrossCountry vs. Rocket vs. Carrington
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">CrossCountry</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">Carrington</div>
          </div>
          {[
            { feature: "Min FICO (FHA)", a: "500", b: "580", c: "500" },
            { feature: "Non-QM / DSCR", a: "Yes", b: "No", c: "Yes" },
            { feature: "Construction loans", a: "Yes", b: "No", c: "No" },
            { feature: "Published rates", a: "No", b: "Yes", c: "No" },
            { feature: "Model", a: "Branch + LO", b: "Online + advisor", c: "Call center" },
            { feature: "States", a: "50", b: "50", c: "~48" },
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
          headline="See what CrossCountry can offer your scenario"
          tagline="Full product menu · FHA from 500 FICO · Bank statement and DSCR programs"
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
