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
  title: "Panda Loan Review (2026): Is It Legit and Who Actually Lends?",
  description:
    "Panda Loan is legally operating but confusing: several similarly named sites, tribal lending, and APRs that can approach 400%. Here is what it really costs and what to use instead.",
  alternates: { canonical: "/reviews/panda-loan" },
};

const brand: Brand = {
  slug: "panda-loan",
  name: "Panda Loan",
  domain: "pandaloans.org",
  color: "#1F1F1F",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Panda Loan legit or a scam?",
    answer:
      "Panda Loan is not an outright scam: real money is lent and real contracts are signed. But it is extremely expensive credit. Depending on which Panda-branded site you land on, you are dealing with either a tribal lender making its own loans or a broker forwarding your application to other lenders. Reported APRs run from roughly 79 percent up to around 398 percent as of mid-2026, varying by product and state.",
  },
  {
    question: "Who is the actual lender behind Panda Loan?",
    answer:
      "It depends on the site. One Panda-branded operation describes itself as a US tribal lender offering personal and installment loans up to $5,000 and short-term advances up to $1,500 under tribal sovereignty. Other similarly named sites describe themselves as free matching services that are not lenders and do not make credit decisions. Before applying anywhere, find the legal lender name in the fine print and look it up.",
  },
  {
    question: "What does a Panda Loan actually cost?",
    answer:
      "Reported APRs range from about 79 percent on larger personal loans to roughly 398 percent on the smallest short-term advances. As one benchmark, a $1,000 loan at 135 percent APR repaid over 12 months costs roughly $600 or more in interest on top of the $1,000. A mainstream personal loan or credit union loan would cost a tenth of that.",
  },
  {
    question: "What does tribal lending mean for me as a borrower?",
    answer:
      "Tribal lenders are owned by Native American tribes and claim sovereign immunity, meaning they may not consider themselves bound by your state's interest rate caps or licensing rules. That can make disputes harder: state regulators have less leverage, and arbitration clauses are common. It is legal in the sense that it operates openly, but you give up protections you would have with a state-licensed lender.",
  },
  {
    question: "Will Panda Loan check my credit or report to the bureaus?",
    answer:
      "Sites in this category typically advertise no hard credit check, relying on income and bank account verification instead. Many high-APR lenders also do not report on-time payments to the major bureaus, so the loan may not help your credit even if you repay perfectly, though defaults can still reach collections and hurt you. Confirm both points in the loan agreement before signing.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Panda Loan Review"
        description="Panda Loan spans several similarly named sites offering high-APR small-dollar loans, including a tribal lending operation. This review covers who lends, real costs, and cheaper alternatives."
        slug="/reviews/panda-loan"
        brandName="Panda Loan"
        category="Personal Loans"
        ratingValue={3.0}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Panda Loan", href: "/reviews/panda-loan" },
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
                Panda Loan Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Model" value="Tribal / broker" />
            <Stat label="Amounts" value="To $5,000" />
            <Stat label="Reported APRs" value="79 to 398%" />
            <Stat label="Fintiex score" value="3.0/10" />
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
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Accepts bad credit; approval leans on income and banking history, not your score</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fast decisions and funding, often within one business day</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Installment structure with fixed payments beats a classic two-week payday rollover</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Some Panda-branded sites publish an APR range at all, which is more than many rivals do</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>APRs reported from about 79% up to roughly 398%, among the most expensive legal credit in the US</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Confusing brand: multiple near-identical Panda sites, some lenders, some brokers, some unrelated</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Tribal sovereignty model can put the lender outside your state's rate caps and regulators' reach</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Broker versions share your data with a lender network; expect marketing follow-up</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>On-time payments may not build your credit at all</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Panda Loan legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: Panda Loan is legally operating, but it sells some of the most expensive credit you can sign for in the United States, and the brand itself is confusing enough that you may not even know which company you are dealing with. There are several similarly named sites: at least one describes itself as a tribal lender making personal loans, installment loans up to $5,000, and short-term advances up to $1,500 under tribal sovereignty. Others describe themselves as brokers or matching services that do not lend and do not make credit decisions. They are not all the same business.
          </p>
          <p>
            The cost is the headline. Reported APRs run from roughly 79 percent on the largest loans to about 398 percent on the smallest short-term advances as of mid-2026, varying by product, amount, and state. For scale, federal credit unions cap payday alternative loans at 28 percent APR. The tribal structure matters too: lenders owned by tribes claim immunity from state interest caps and state licensing, which is why these rates can be offered in states that ban payday lending. If a dispute goes wrong, your state regulator has limited leverage.
          </p>
          <p>
            So the honest verdict is not &ldquo;scam.&rdquo; It is: legally operating, real money, real contracts, and a real chance of paying back two or three times what you borrowed. Before applying, find the exact legal name of the lender in the site footer and loan agreement, search that name plus the word complaints, and price at least one of the cheaper options below first.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What $1,000 really costs at these rates
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Loan</div>
            <div className="text-right">Approx. interest paid</div>
            <div className="text-right">Approx. total repaid</div>
          </div>
          {[
            { s: "Credit union PAL, 28% APR, 12 months", i: "~$150", t: "~$1,150" },
            { s: "Panda-style loan, 79% APR, 12 months", i: "~$450", t: "~$1,450" },
            { s: "Panda-style loan, 135% APR, 12 months", i: "~$620", t: "~$1,620" },
            { s: "Short-term advance near 398% APR, 3 months", i: "~$500", t: "~$1,500" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.i}</div>
              <div className="text-right text-mute">{r.t}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates for equal installment payments. Exact figures vary by state, term, and payment schedule as of mid-2026. Verify the total of payments box in any contract before signing.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper options before a 398% APR loan
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Credit union payday alternative loans (PALs): APR capped at 28%, open to members with thin or bad credit</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Small-dollar loans from your own bank, often $100 to $1,000 with flat fees far below these APRs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A payment plan with the biller you are trying to cover: utilities, medical, rent, car repair</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Employer paycheck advance or a reputable earned wage access app with transparent flat fees</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Local emergency assistance: call 211 for rent, utility, and food programs in your area</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Borrowing from family with a written repayment plan; awkward, but hundreds of percent cheaper</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Only consider it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Every option above has said no and the expense truly cannot wait</li>
              <li>You can repay in weeks, not months; time is the whole cost at these APRs</li>
              <li>You have confirmed the legal lender name and read the full agreement</li>
              <li>The payment fits your budget without borrowing again next month</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Walk away if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are asked to pay anything up front to receive the loan</li>
              <li>The site will not show an APR or total of payments before you sign</li>
              <li>You cannot tell whether you are on the lender's site or a lookalike</li>
              <li>You would be using it to cover regular monthly expenses</li>
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
          headline="Still considering Panda Loan?"
          tagline="Find the legal lender name · Get the APR and total of payments in writing · Compare a credit union PAL first"
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
