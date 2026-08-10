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
  title: "Sunshine Loans Review (2026): Legit, but APRs Can Top 700%",
  description:
    "Sunshine Loans is a real online small-dollar lender, up to $2,000, but APRs can exceed 700% depending on your state. What it costs, complaint patterns, and cheaper options.",
  alternates: { canonical: "/reviews/sunshine-loans" },
};

const brand: Brand = {
  slug: "sunshine-loans",
  name: "Sunshine Loans",
  domain: "sunshineloans.com",
  color: "#F5A623",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Sunshine Loans legit or a scam?",
    answer:
      "Sunshine Loans is a legally operating online lender, not a scam. Loans are real and get funded, often the same day. The issue is price: depending on your state and loan, APRs start well above 180 percent and have been quoted as high as roughly 722 percent as of mid-2026. It also carries an F rating from the BBB and is not BBB accredited, so go in with clear eyes.",
  },
  {
    question: "How much can I borrow from Sunshine Loans?",
    answer:
      "The cap is $2,000, which is low compared with most online lenders. Products include payday-style loans and short installment loans, with terms often around 10 weeks or five bi-weekly payments. A line of credit has been advertised as coming soon. Availability, amounts, and pricing vary by state.",
  },
  {
    question: "What APR does Sunshine Loans charge?",
    answer:
      "Published starting rates have been around 183 percent APR for installment loans and around 215 percent APR for payday loans, and third-party reviews report rates reaching roughly 722 percent depending on the state, loan size, and term. Sunshine does not display a full APR range up front, so you will not know your exact price until you get an offer. Always check the APR and total of payments before signing.",
  },
  {
    question: "What states does Sunshine Loans operate in?",
    answer:
      "As of recent third-party reviews, Sunshine Loans has served borrowers in around 15 states, including Alabama, California, Colorado, Delaware, Florida, Idaho, Kansas, Louisiana, Mississippi, Missouri, Ohio, Tennessee, Texas, Utah, and Wisconsin. State lists change, so check the site for your state. Products and maximum rates differ by state law.",
  },
  {
    question: "Does Sunshine Loans check credit?",
    answer:
      "It advertises a soft credit check that does not affect your score, with no stated minimum credit score. Approval leans on income and your bank account history. Note that repaying on time may not build your credit if the lender does not report to the major bureaus, so confirm that before counting on any credit-building benefit.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Sunshine Loans Review"
        description="Sunshine Loans is an online small-dollar lender offering payday and installment loans up to $2,000 with APRs that can exceed 700% by state. Full review with real cost math and alternatives."
        slug="/reviews/sunshine-loans"
        brandName="Sunshine Loans"
        category="Personal Loans"
        ratingValue={3.5}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Sunshine Loans", href: "/reviews/sunshine-loans" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">High-Cost Lender Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Sunshine Loans Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Max loan" value="$2,000" />
            <Stat label="APR range" value="183 to 722%" />
            <Stat label="Typical term" value="~10 weeks" />
            <Stat label="Fintiex score" value="3.5/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="See their rate disclosures" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>A direct online lender, not a lead-generation site reselling your application</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fast funding: approvals within the hour on business days, money often same or next day</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Soft credit check to apply, no stated minimum credit score</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Short fixed terms mean the debt has a defined end date, unlike rolling payday loans</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Extreme cost: starting APRs around 183 to 215%, reported as high as roughly 722% by state</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No full APR range published up front, so you cannot price it before applying</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>F rating and no accreditation with the BBB; sparse independent review footprint overall</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>User complaints report unauthorized charges and fees continuing after payoff</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>$2,000 cap and roughly 10-week terms mean large payments in a short window</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Sunshine Loans legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: Sunshine Loans is a real, legally operating online lender, not a scam. If you are approved, real money hits your account, usually fast. The problem is what it costs. This is payday-tier pricing: published starting APRs have been around 183 percent for installment loans and 215 percent for payday loans, and third-party reviews report rates as high as roughly 722 percent depending on your state, loan size, and term as of mid-2026. Loans cap out at $2,000, and repayment windows are short, often about 10 weeks or five bi-weekly payments.
          </p>
          <p>
            Two transparency issues are worth flagging. First, Sunshine does not publish a complete APR range, so you cannot comparison shop before handing over your information; you learn your price when you get the offer. Second, its independent reputation is thin: it is not BBB accredited, carries an F rating there, and has relatively few reviews on major platforms. The complaints that do exist mention unauthorized charges and fees that continued after a loan was paid off, patterns reported by users rather than findings by a regulator, but exactly the kind of thing to watch your bank account for if you borrow here.
          </p>
          <p>
            Our verdict: legitimate but among the most expensive credit legally sold in the US, with weak transparency on top. If you borrow, screenshot every agreement, turn on bank alerts, and confirm in writing when the balance reaches zero. Better yet, try the cheaper routes below first; most of them beat even Sunshine&rsquo;s best-case price by a wide margin.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What a $500 loan really costs over 10 weeks
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Scenario</div>
            <div className="text-right">Approx. cost of credit</div>
            <div className="text-right">Approx. total repaid</div>
          </div>
          {[
            { s: "Credit union PAL, 28% APR", c: "~$15", t: "~$515" },
            { s: "Sunshine installment, ~183% APR", c: "~$100", t: "~$600" },
            { s: "Sunshine payday, ~215% APR", c: "~$120", t: "~$620" },
            { s: "Highest reported tier, ~722% APR", c: "~$390", t: "~$890" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.c}</div>
              <div className="text-right text-mute">{r.t}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates for a $500 loan repaid in equal installments over about 10 weeks. Actual pricing varies by state and offer as of mid-2026. The contract's total of payments box is the number that matters.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper options before a triple-digit APR
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Credit union payday alternative loans (PALs): $200 to $2,000 at a federally capped 28% APR</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Small-dollar loans from major banks for existing checking customers, usually flat low fees</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A payment plan directly with the bill you are covering; most billers prefer a plan to a default</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>An employer paycheck advance or earned wage access benefit through your payroll provider</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Local emergency assistance for rent, utilities, and food: dial 211 or visit 211.org</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Even a credit card cash advance, normally bad advice, is far cheaper than 200%+ APR</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Only consider it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>It is a genuine emergency and every cheaper route above has said no</li>
              <li>You can comfortably make the payments inside the short term</li>
              <li>You will monitor your bank account through payoff and get a zero-balance confirmation</li>
              <li>You are borrowing once, not as a monthly habit</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Walk away if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>The offered APR lands in the upper end of the range; the same $500 is available cheaper</li>
              <li>You would need to reborrow to cover the payments</li>
              <li>Anything about the offer differs from what the site advertised</li>
              <li>You are covering recurring bills rather than a one-time emergency</li>
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
          headline="Still considering Sunshine Loans?"
          tagline="Check your state's rates first · Read the total of payments · Set bank alerts through payoff"
          ctaLabel="Read their disclosures"
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
