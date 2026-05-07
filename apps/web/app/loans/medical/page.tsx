import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Medical Loans 2026: Negotiate the Bill First, Borrow Second | Fintiex",
  description:
    "Medical loan options, in-house provider financing alternatives, and CFPB negotiation guidance. Top picks: Upstart, Best Egg, Prosper. Negotiate the bill first.",
  alternates: { canonical: "/loans/medical" },
};

interface Pick {
  rank: number;
  lender: string;
  brand: string;
  apr: string;
  loanAmount: string;
  term: string;
  highlight: string;
  caveat: string;
  bestFor: string;
}

const picks: Pick[] = [
  {
    rank: 1,
    lender: "Upstart",
    brand: "upstart",
    apr: "7.80% to 35.99%",
    loanAmount: "$1,000 to $50,000",
    term: "3 or 5 years",
    highlight: "AI-driven underwriting weighs education and employment in addition to FICO. Approves applicants with thin or fair credit that traditional lenders reject. Soft-pull prequalification.",
    caveat: "Origination fee 0% to 12% deducted at funding. Higher fees concentrate in lower credit tiers.",
    bestFor: "Fair credit, urgent timeline, $1K to $50K range.",
  },
  {
    rank: 2,
    lender: "Best Egg",
    brand: "bestegg",
    apr: "8.99% to 35.99%",
    loanAmount: "$2,000 to $50,000",
    term: "3 to 5 years",
    highlight: "Same-business-day funding for approved applicants. Strong approval rates for fair credit. Secured option available to lower the rate.",
    caveat: "Origination fee 0.99% to 8.99% deducted at funding.",
    bestFor: "Fair to good credit, fast funding, urgent medical bill.",
  },
  {
    rank: 3,
    lender: "Prosper",
    brand: "prosper",
    apr: "8.99% to 35.99%",
    loanAmount: "$2,000 to $50,000",
    term: "3 or 5 years",
    highlight: "Peer-to-peer model with broader approval criteria than traditional banks. Joint applications allowed (boosts approval and lowers rate).",
    caveat: "Origination fee 1% to 7.99%. Funding typically 1 to 5 business days.",
    bestFor: "Fair credit, joint applicants, willing to wait a few days for funding.",
  },
];

const negotiationSteps = [
  {
    title: "Request an itemized bill",
    detail: "Federal law (No Surprises Act) requires providers to give you an itemized bill on request. Review for duplicate charges, services you did not receive, and out-of-network surprises. The CFPB and CMS both report that 30% to 80% of medical bills contain errors.",
  },
  {
    title: "Ask for the cash-pay or self-pay rate",
    detail: "Hospitals and clinics typically have a cash-pay rate that is 30% to 60% lower than the billed rate. Simply asking 'What is your self-pay rate?' often unlocks a discount. Get it in writing before paying.",
  },
  {
    title: "Apply for the hospital's charity care program",
    detail: "Nonprofit hospitals are required by federal law to offer charity care or financial assistance for patients below certain income thresholds (often 200% to 400% of the federal poverty line). Programs are rarely advertised. Call the billing office and ask specifically for 'financial assistance' or 'charity care'.",
  },
  {
    title: "Negotiate a payment plan with the provider",
    detail: "Most hospitals will set up an interest-free payment plan if you ask. The plan is usually no-interest as long as you pay on schedule. This beats every loan option on cost.",
  },
  {
    title: "Dispute incorrect bills with the CFPB",
    detail: "If a provider refuses to correct errors, file a complaint with the CFPB at consumerfinance.gov. Medical debt under $500 has been removed from credit reports as of 2023, and unpaid medical debt no longer appears on reports until it is at least one year old.",
  },
];

const optionsCompared = [
  {
    title: "Personal loan",
    apr: "8% to 30% typical",
    bestFor: "Fixed amount needed up front. Predictable monthly payment. No risk to assets.",
    caveat: "Higher APR than the hospital's interest-free payment plan. Origination fees common at fair credit.",
  },
  {
    title: "Hospital payment plan",
    apr: "0% typical",
    bestFor: "Almost everyone. Interest-free, often no credit check, and you keep your relationship with the provider.",
    caveat: "Plans typically run 6 to 36 months. Missing a payment can void the no-interest term and send the bill to collections.",
  },
  {
    title: "0% APR medical credit card (CareCredit, Wells Fargo Health)",
    apr: "0% promo, then 26% to 32%",
    bestFor: "Bills you can pay off inside the 6 to 24 month promo. CareCredit covers most providers.",
    caveat: "DEFERRED INTEREST: if you carry any balance past the promo, you owe interest from day one on the original balance, not the remaining amount. The CFPB has issued multiple warnings about deferred-interest cards.",
  },
  {
    title: "401(k) loan or hardship withdrawal",
    apr: "Prime + 1% (loan) or no interest (withdrawal)",
    bestFor: "Last resort only. The IRS allows hardship withdrawals for unreimbursed medical expenses above 7.5% of AGI.",
    caveat: "Withdrawals trigger taxes and a 10% penalty if under 59.5. Loans must be repaid in 5 years or treated as a withdrawal. You lose investment growth on the borrowed amount.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Should I take a medical loan or use a hospital payment plan?",
    answer: "Almost always the hospital payment plan first. Most are interest-free as long as you pay on schedule, which beats every loan option on cost. The CFPB explicitly recommends contacting the billing office to negotiate a payment plan before borrowing. Take a personal loan only if the provider refuses a plan or the term offered is too short for your budget.",
  },
  {
    question: "Are medical loans different from regular personal loans?",
    answer: "No. A 'medical loan' is just a personal loan you happen to use for medical bills. The lender does not require proof that the funds went to a provider, and the rate is no different than a general-purpose personal loan. Anyone advertising a 'specialty medical loan' at preferential rates is usually marketing a regular personal loan with extra steps.",
  },
  {
    question: "What about CareCredit or other medical credit cards?",
    answer: "Use with extreme caution. CareCredit and similar medical credit cards offer 0% promotional APRs of 6 to 24 months, but they use deferred interest: if any balance remains at the end of the promo, you owe interest from day one of the original purchase. The CFPB has fined CareCredit's parent company over $34M for inadequate disclosure of these terms. Read the fine print, set calendar alerts, and pay off well before the promo ends.",
  },
  {
    question: "Will medical debt hurt my credit score?",
    answer: "Less than it used to. As of 2023, medical debt under $500 was removed from credit reports entirely, and unpaid medical debt no longer appears on reports until it is at least one year old. Paid medical debt is removed promptly. The CFPB has signaled it is moving to remove all medical debt from credit reports. Never let medical debt rush you into a high-rate loan; the credit impact is now minimal compared to a few years ago.",
  },
  {
    question: "Can I negotiate a medical bill that has already gone to collections?",
    answer: "Yes, and aggressively. Collection agencies typically buy medical debt for 5 to 20 cents on the dollar. They often accept a lump-sum settlement of 25% to 50% of the original balance. Always negotiate in writing and ask for a 'pay-for-delete' agreement that removes the collection from your credit report once paid. The CFPB recommends consulting a HUD-approved nonprofit credit counselor before settling.",
  },
  {
    question: "What is the No Surprises Act and how does it protect me?",
    answer: "Effective 2022, the federal No Surprises Act bans most out-of-network surprise bills from emergency care, in-network hospital ancillary services (anesthesiology, radiology), and air ambulance. If you receive a surprise bill that should be covered by the law, dispute it with the provider and your insurer, and file a complaint at cms.gov. The law has saved patients an estimated $1B+ in surprise charges since taking effect.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Medical Loans", href: "/loans/medical" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Negotiate first, borrow second
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Medical loans: a tool of last resort.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Before you take any loan for a medical bill, exhaust the free options. The CFPB explicitly recommends negotiating the bill, asking for charity care, and setting up an interest-free payment plan with the provider. Most patients who skip these steps and go straight to a loan end up paying twice as much. We walk through the exact sequence, then the lenders to consider only if borrowing is unavoidable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run loan math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>

      {/* NEGOTIATION SECTION */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-violet mb-4">
                <span className="pulse-dot" /> Step 1: Before you borrow
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Five things to do before applying for a medical loan.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                The CFPB and the Consumer Financial Protection Bureau have published guidance: negotiate before borrowing, every time.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {negotiationSteps.map((s, i) => (
              <div key={s.title} className="card p-6 md:p-7">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-1">
                    <div className="font-mono text-xs text-mute mb-1">Step {i + 1}</div>
                  </div>
                  <div className="col-span-12 md:col-span-11">
                    <h3 className="font-display font-bold text-xl mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-mute leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS COMPARED */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">If borrowing is unavoidable</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Four ways to fund a medical bill.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              In rough order of cost. The hospital payment plan beats almost everything else if you qualify.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {optionsCompared.map((o) => (
            <div key={o.title} className="card p-6 md:p-7">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-display font-bold text-xl mb-2 tracking-tight">{o.title}</h3>
                  <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Typical APR</div>
                  <div className="font-mono tabular text-sm font-semibold">{o.apr}</div>
                </div>
                <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Best for</div>
                    <p className="text-mute">{o.bestFor}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Caveat</div>
                    <p className="text-mute">{o.caveat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">Top 3 personal loan picks</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Three lenders for medical expenses.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                These three are the strongest fair-credit options. If your FICO is 720+, also see SoFi or LightStream on our personal loans page.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {picks.map((p) => (
              <div key={p.lender} className="card p-6 md:p-7">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                    <BrandLogo brand={p.brand} size={48} />
                    <div className="md:hidden font-mono text-xs text-mute">#{p.rank}</div>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="hidden md:inline font-mono text-xs text-mute">#{p.rank}</span>
                      <h3 className="font-display font-bold text-xl tracking-tight">{p.lender}</h3>
                      <span className="chip chip-mute">{p.bestFor}</span>
                    </div>
                    <p className="text-mute leading-relaxed mb-2">
                      <span className="font-semibold text-ink">Highlight: </span>
                      {p.highlight}
                    </p>
                    <p className="text-sm text-mute leading-relaxed">
                      <span className="font-semibold">Caveat: </span>
                      {p.caveat}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">APR range</div>
                      <div className="font-mono tabular font-semibold">{p.apr}</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Loan amount</div>
                      <div className="font-mono tabular">{p.loanAmount}</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Term</div>
                      <div className="text-mute">{p.term}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDER FINANCING WARNING */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">Provider financing</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Why we are skeptical of in-house medical credit.
            </h2>
            <p className="text-mute leading-relaxed">
              Provider-arranged financing (CareCredit, Wells Fargo Health Advantage) is convenient but expensive when used wrong.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Deferred-interest traps</h3>
              <p className="text-mute">
                Most medical credit cards offer 0% APR for 6 to 24 months. The catch: deferred interest. If any balance remains at the end of the promo, you owe interest on the original balance from day one of the purchase, not the remaining amount. The CFPB fined Synchrony's CareCredit over $34M in 2013 for inadequate disclosure of deferred-interest terms.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Provider markup pressure</h3>
              <p className="text-mute">
                Some providers offer financing as a way to upsell expensive procedures. Cosmetic dentistry and elective surgery are common examples. If a provider pushes financing as a tool to afford a more expensive option, walk away and price-shop. Cash discounts often beat financed prices by 30% to 50%.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">When provider financing actually wins</h3>
              <p className="text-mute">
                If your provider offers a true 0% interest payment plan (no deferred interest, no markup) for a balance you can comfortably pay inside the term, take it. It beats every personal loan because there is no interest. Get the terms in writing, set calendar alerts for each due date, and never let a payment slip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "Monthly payment by APR and term." },
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare loan options side-by-side." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Personal loans", href: "/loans/personal", detail: "Top general-purpose lenders." },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-violet">{p.label}</span>
                  <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common questions about medical financing.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq) => (
            <div key={faq.question} className="card p-6">
              <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
              <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Run the loan math, but call the hospital first.
            </h2>
            <p className="text-ink/70 mt-2">An interest-free payment plan beats every loan option on cost.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
