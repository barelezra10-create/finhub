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
  title: "Movement Mortgage Review (2026): Speed, Mission, Verdict",
  description:
    "Movement Mortgage is a top-10 purchase lender with a 6-hour underwriting goal and profits that fund a nonprofit. Full 2026 review including the $23.75M settlement.",
  alternates: { canonical: "/reviews/movement" },
};

const brand: Brand = {
  slug: "movement",
  name: "Movement Mortgage",
  domain: "movement.com",
  color: "#DA291C",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "What is Movement Mortgage's 6-7-1 process?",
    answer:
      "It is Movement's internal service goal: upfront underwriting within 6 hours of application, loan processing within 7 days, and closing documents ready in 1 day. It is a target, not a guarantee, and complex files take longer. The practical benefit is that your file is underwritten early, so surprises surface at the start instead of the week of closing.",
  },
  {
    question: "Is Movement Mortgage really a nonprofit?",
    answer:
      "The lender itself is a for-profit company, but its primary shareholder is the nonprofit Movement Foundation. After reinvestment, profits flow to the Foundation, which has received more than $360 million to fund charter schools, affordable housing, and community projects. Your rate is not automatically better or worse because of this, so shop it like any lender.",
  },
  {
    question: "What was the Movement Mortgage False Claims Act settlement?",
    answer:
      "In 2023, Movement agreed to pay $23.75 million to resolve government allegations that it improperly certified FHA and VA loans that did not meet program requirements. The case was brought by two former employees under whistleblower provisions. Movement admitted a material percentage of certified loans fell short of requirements. It remains an approved FHA and VA lender.",
  },
  {
    question: "What credit score do I need for Movement Mortgage?",
    answer:
      "Typical floors are around 620 for conventional and 580 for FHA, with VA and USDA flexibility case by case. Movement does not publish rates online, so ask a loan officer for a quote. As of mid-2026, national 30-year fixed averages sat in the mid to high 6 percent range; your quote depends on credit, down payment, and location.",
  },
  {
    question: "Is Movement Mortgage good for first-time buyers?",
    answer:
      "It is a reasonable fit. Movement is purchase-focused, offers FHA, VA, USDA, and conventional programs plus some down payment assistance, and its early-underwriting model helps first-timers close on schedule. The main watch item is pricing: get the Loan Estimate and compare it against at least two competitors, since mission does not equal cheapest.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Movement Mortgage Review"
        description="Movement Mortgage is a top-10 US retail lender focused on purchase loans, known for its 6-7-1 fast underwriting process and nonprofit ownership structure. Full 2026 review."
        slug="/reviews/movement"
        brandName="Movement Mortgage"
        category="Mortgage"
        ratingValue={7.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Movement Mortgage", href: "/reviews/movement" },
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
                Movement Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Founded" value="2008" />
            <Stat label="Focus" value="Purchase loans" />
            <Stat label="Underwriting goal" value="6 hours" />
            <Stat label="Fintiex score" value="7.6/10" />
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
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Upfront underwriting: the 6-7-1 model surfaces problems at the start, not at closing week</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Top-10 retail lender with local loan officers across the country</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full purchase menu: conventional, FHA, VA, USDA, jumbo, renovation, and some down payment help</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Profits fund the nonprofit Movement Foundation: $360M+ to schools and affordable housing</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong reputation with real estate agents for closing purchases on time</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Paid $23.75M in 2023 to settle False Claims Act allegations over FHA and VA underwriting</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No published rates; pricing is not consistently the sharpest, so you must comparison shop</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>The 6-7-1 timeline is a goal, and complex or self-employed files regularly exceed it</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Refinance products exist but the machine is built for purchases; refi shoppers may find better focus elsewhere</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard brand={brand} tagline="Purchase-focused lender · 6-hour upfront underwriting goal" ctaLabel="Get a quote" />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Movement Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Movement Mortgage was founded in 2008, in the middle of the financial crisis, by former NFL player Casey Crawford and partner Toby Harris. From its base in the Charlotte area it grew into one of the ten largest retail mortgage lenders in the country, funding tens of billions in loans a year, almost all of it purchase business rather than refinances. Its ownership is genuinely unusual: the company&rsquo;s primary shareholder is the nonprofit Movement Foundation, which has received more than $360 million of profit to build charter schools, affordable housing, and community projects.
          </p>
          <p>
            The operational pitch is speed with the risk pulled forward. Movement&rsquo;s 6-7-1 process aims to underwrite your file within 6 hours of a complete application, process it within 7 days, and have closing documents ready in 1 day. Real-world timelines vary, but the structural idea holds up: because a human underwriter reviews your income and assets at the beginning, your pre-approval means more to sellers, and the ugly surprises that kill deals in the final week tend to show up in week one instead. That is why buyers&rsquo; agents tend to like Movement.
          </p>
          <p>
            The record has a significant blemish. In 2023 Movement paid $23.75 million to settle Department of Justice allegations, brought by two former employees, that it certified FHA and VA loans that did not meet program rules, and it admitted a material percentage of those certifications fell short. It remains an approved FHA and VA lender, and its consumer-facing complaint volume is unremarkable for its size, but the settlement belongs in any honest review. On price, Movement is a shop-and-compare lender: it does not publish rates, and mission-driven ownership does not automatically buy you a cheaper loan. Make it earn your file with a Loan Estimate.
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
            { product: "Conventional", score: "620", note: "3% down first-timer programs" },
            { product: "FHA", score: "580", note: "3.5% down; streamline refi available" },
            { product: "VA", score: "Flexible", note: "0% down for eligible veterans" },
            { product: "USDA", score: "Flexible", note: "0% down, rural areas" },
            { product: "Jumbo", score: "680+", note: "Above conforming limits" },
            { product: "Renovation / new construction", score: "620+", note: "Purchase-oriented programs" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.score}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Movement does not publish live rates. National average 30-year fixed rates were in the mid to high 6% range as of mid-2026; confirm your pricing with a loan officer.</p>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Roughly 620 FICO for conventional, 580 for FHA; government programs flex case by case</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>3% down conventional options; 3.5% FHA; 0% down VA and USDA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Down payment assistance programs available in select markets</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Self-employed accepted with standard two-year documentation; expect longer than 6-7-1</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Purchase focus: primary homes, second homes, and some investment properties</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Licensed across the US with branch coverage in most metros</li>
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
            You start online or with a local loan officer, and the difference from most lenders comes right after: Movement pushes your complete file to an underwriter up front. If your documents are ready, income, assets, and two years of history, you can have a genuinely underwritten approval quickly, which functions like a stronger pre-approval when you write offers. The mobile app handles document upload, status tracking, and e-signing without friction.
          </p>
          <p>
            To get the speed the marketing promises, do your part in hour one: W-2s, pay stubs, two months of bank statements, and tax returns if self-employed. Files that trickle documents in are the ones that blow past 7 days. As with any loan-officer lender, the person matters; ask your LO how often their purchase files actually hit the 6-7-1 marks in your market, and get your Loan Estimate into a same-day comparison with two other lenders before locking.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Homebuyers in competitive markets who need a fast, credible approval</li>
              <li>First-time buyers who want a local loan officer and government loan options</li>
              <li>Borrowers who like their loan dollars funding schools and housing projects</li>
              <li>Agents&rsquo; clients on tight purchase timelines</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are rate shopping a refinance; purchase is Movement&rsquo;s machine</li>
              <li>You want published rates and a no-contact digital quote</li>
              <li>You need non-QM products like bank statement or DSCR loans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Movement vs. Rocket vs. CrossCountry
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Movement</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">CrossCountry</div>
          </div>
          {[
            { feature: "Upfront underwriting", a: "6-hour goal", b: "Verified Approval", c: "Varies" },
            { feature: "Min FICO (FHA)", a: "580", b: "580", c: "500" },
            { feature: "Non-QM loans", a: "No", b: "No", c: "Yes" },
            { feature: "Published rates", a: "No", b: "Yes", c: "No" },
            { feature: "Model", a: "Branch + LO", b: "Online + advisor", c: "Branch + LO" },
            { feature: "Profit destination", a: "Nonprofit", b: "Shareholders", c: "Private owners" },
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
          headline="Buying a home on a deadline?"
          tagline="Purchase specialist · Upfront underwriting · Profits fund the Movement Foundation"
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
