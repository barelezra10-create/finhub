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
  title: "Elastic Line of Credit Review (2026): Legit, but the Fees Are Brutal",
  description:
    "Elastic is a real line of credit from Republic Bank & Trust, but its cash advance and carried balance fees work out to effective APRs over 100%. Full 2026 review and cheaper options.",
  alternates: { canonical: "/reviews/elastic" },
};

const brand: Brand = {
  slug: "elastic",
  name: "Elastic",
  domain: "elastic.com",
  color: "#00A6CE",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Elastic a legit lender?",
    answer:
      "Yes. The Elastic line of credit is issued by Republic Bank & Trust Company, an FDIC-insured Kentucky bank, and has operated for years. It is not a scam. It is, however, a very expensive form of credit: instead of interest, Elastic charges a cash advance fee of 5 or 10 percent on every draw plus recurring carried balance fees, which together commonly work out to effective APRs above 100 percent.",
  },
  {
    question: "How do Elastic's fees actually work?",
    answer:
      "Two layers. First, every cash advance costs a fee of 10 percent, or 5 percent if you are on a bi-weekly or semi-monthly billing cycle, taken out of the amount you draw. Second, if you do not pay the balance in full, each billing cycle adds a carried balance fee that scales with your balance, roughly $5 up to $410 per cycle depending on how much you owe, as of mid-2026. There is no traditional interest rate, which makes the true cost easy to underestimate.",
  },
  {
    question: "What is the effective APR on Elastic?",
    answer:
      "Elastic does not quote an APR because it charges fees instead of interest. Independent reviewers who convert the fees into an annualized rate put the effective APR at roughly 100 to 200 percent depending on how much you draw and how long you carry the balance. That is far above credit cards and personal loans, though below a typical two-week payday loan.",
  },
  {
    question: "How much can I borrow with Elastic?",
    answer:
      "Lines range from $500 to $4,500 for most customers, with some existing customers offered up to $6,000 through credit line increase programs. You draw what you need, when you need it, and fees are charged per draw. Availability varies by state, and Elastic is not offered everywhere.",
  },
  {
    question: "Does Elastic help build credit?",
    answer:
      "Elastic has reported payment activity to a credit bureau, but do not count on it as a credit-building tool; confirm current reporting practices before you rely on that. If building credit is the actual goal, a secured card or a credit-builder loan does the job for a tiny fraction of Elastic's cost.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Elastic Line of Credit Review"
        description="Elastic is a line of credit issued by Republic Bank & Trust with cash advance fees and carried balance fees instead of interest, working out to effective APRs over 100%. Full 2026 review."
        slug="/reviews/elastic"
        brandName="Elastic"
        category="Lines of Credit"
        ratingValue={4.3}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Elastic", href: "/reviews/elastic" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Line of Credit Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Elastic Line of Credit Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Credit line" value="$500 to $4.5K" />
            <Stat label="Draw fee" value="5 or 10%" />
            <Stat label="Effective APR" value="100%+" />
            <Stat label="Fintiex score" value="4.3/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="See what it costs" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Issued by Republic Bank &amp; Trust Company, a real FDIC-insured bank, not an anonymous operation</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Reusable line of credit: draw only what you need instead of taking one lump-sum loan</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Accepts subprime credit; approval leans on income and banking history</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Publishes its fee schedule openly, and repaying fast genuinely cuts the cost</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Cheaper than a classic payday loan cycle if you pay balances off within a cycle or two</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Every draw costs 5 or 10% before you have owed the money a single day</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Carried balance fees of roughly $5 to $410 per billing cycle stack up as long as you owe</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No APR quoted, which hides an effective cost reviewers put at roughly 100 to 200%</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Minimum payments are designed to keep a carried balance, and the meter, running</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Not available in every state, and terms differ by billing cycle type</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Elastic legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: Elastic is legitimate. The line of credit is issued by Republic Bank &amp; Trust Company, an FDIC-insured bank based in Kentucky, and the product has been around for years, serving borrowers that mainstream banks decline. Nobody is going to steal your identity or vanish with your money. The reason to hesitate is arithmetic, not legitimacy: Elastic is one of the most expensive bank-issued credit products in the country.
          </p>
          <p>
            Elastic charges no interest rate at all. Instead, it uses two fees. When you draw cash, you pay a cash advance fee of 10 percent, or 5 percent if your billing cycle is bi-weekly or semi-monthly, deducted from the draw. Then, if you carry a balance above $10 past a billing cycle, you pay a carried balance fee each cycle, scaling from about $5 to $410 depending on the balance, as of mid-2026. Because there is no APR on the page, a $2,500 draw that costs $250 immediately, plus roughly $100 in fees every month you carry it, does not feel like triple-digit interest. It is. Independent reviewers who annualize the fees land at effective APRs of roughly 100 to 200 percent depending on repayment speed.
          </p>
          <p>
            Our verdict: a legally solid, honestly disclosed, very expensive product. It beats a payday loan you would have to roll over, and it can make sense for a short, one-time gap that you will clear within a cycle or two. As ongoing credit it is a trap by design, because minimum payments keep the carried balance fee running indefinitely. Check the cheaper routes below first, and if you do use Elastic, pay it to zero as fast as you possibly can.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What a $500 draw really costs
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Scenario</div>
            <div className="text-right">Approx. fees paid</div>
            <div className="text-right">Approx. total cost</div>
          </div>
          {[
            { s: "Paid in full first cycle (5% draw fee)", f: "$25", t: "$525" },
            { s: "Paid in full first cycle (10% draw fee)", f: "$50", t: "$550" },
            { s: "Carried ~3 months (monthly cycle)", f: "~$110+", t: "~$610+" },
            { s: "Carried ~6 months (monthly cycle)", f: "~$170+", t: "~$670+" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.f}</div>
              <div className="text-right text-mute">{r.t}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates based on Elastic's published fee structure as of mid-2026; carried balance fees vary with your exact balance tier and cycle type. Bigger draws scale up fast: a $2,500 draw costs up to $250 before day one.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper options before an Elastic draw
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Credit union payday alternative loans (PALs): capped at 28% APR, built for exactly this situation</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Small-dollar loans from major banks for existing customers, typically flat fees far below 5 to 10% per draw</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A credit card, even at 29% APR; one year of carrying $500 costs about $145 versus Elastic's much higher run rate</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>An employer paycheck advance or earned wage access benefit for payday-gap situations</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>A payment plan with the biller, plus 211.org for emergency rent and utility help</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>A secured card or credit-builder loan if the underlying problem is access to credit, not this one bill</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Can make sense if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You need a one-time bridge and can repay in full within a cycle or two</li>
              <li>Cheaper options have declined you and the alternative is a payday storefront</li>
              <li>You value drawing exactly what you need instead of a full lump-sum loan</li>
              <li>You are on a bi-weekly or semi-monthly cycle where the draw fee is 5%, not 10%</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Avoid it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You would pay only minimums; the carried balance fee never stops on its own</li>
              <li>You qualify for any credit card, PAL, or bank small-dollar loan</li>
              <li>You would draw repeatedly to cover normal monthly expenses</li>
              <li>You are trying to build credit; there are near-free tools for that</li>
            </ul>
          </div>
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
          headline="Still considering Elastic?"
          tagline="Read the full fee schedule · Plan to repay within one or two cycles · Never ride the minimum payment"
          ctaLabel="Review the fee schedule"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/loans" className="pill pill-ghost">
            Compare lower-cost personal loans <span aria-hidden>→</span>
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
