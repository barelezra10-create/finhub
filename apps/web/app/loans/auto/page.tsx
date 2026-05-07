import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Auto Loan Rates 2026: New, Used, Dealer vs Bank Compared | Fintiex",
  description:
    "Current auto loan rates by credit tier, new vs used, dealer vs bank vs credit union. Get preapproved before shopping. Soft-pull prequalify with no credit hit.",
  alternates: { canonical: "/loans/auto" },
};

interface RateCell {
  tier: string;
  newApr: string;
  usedApr: string;
  newAprDetail: string;
  usedAprDetail: string;
}

const rateGrid: RateCell[] = [
  {
    tier: "Excellent · 720+",
    newApr: "5.99% to 7.50%",
    usedApr: "6.99% to 8.50%",
    newAprDetail: "Credit union or bank, 60-month term",
    usedAprDetail: "2 to 4 model years old",
  },
  {
    tier: "Good · 660 to 719",
    newApr: "7.50% to 9.50%",
    usedApr: "8.50% to 11.00%",
    newAprDetail: "Bank or strong dealer offer",
    usedAprDetail: "3 to 5 model years old",
  },
  {
    tier: "Fair · 600 to 659",
    newApr: "9.50% to 13.00%",
    usedApr: "11.00% to 16.00%",
    newAprDetail: "Captive dealer financing common",
    usedAprDetail: "Independent dealer rates run higher",
  },
  {
    tier: "Subprime · below 600",
    newApr: "13.00% to 18.00%",
    usedApr: "16.00% to 21.00%",
    newAprDetail: "Buy-here-pay-here rates excluded",
    usedAprDetail: "Many lenders decline; cosigner often required",
  },
];

const dealerVsBank = [
  {
    title: "Bank or credit union (preapproval)",
    pros: "Lowest typical APR. No add-on pressure. You walk into the dealer with a check in hand and shop on price, not payment.",
    cons: "You have to shop in advance. Some dealers will not honor a manufacturer rebate when you bring outside financing.",
    verdict: "Best for most borrowers. The Federal Reserve consumer credit data consistently shows credit unions beat dealer financing by 1 to 2 percentage points at every credit tier.",
  },
  {
    title: "Dealer (indirect) financing",
    pros: "One-stop convenience. Manufacturer-subsidized 0% or 1.9% APR offers are real (when you qualify) and beat any bank.",
    cons: "Dealer markup. Dealers can legally add up to 2 percentage points to a wholesale rate as compensation; you pay the markup over the life of the loan.",
    verdict: "Use only if you qualify for a manufacturer special, or if your bank rate is competitive after dealer markup. Always bring a preapproval as your benchmark.",
  },
  {
    title: "Captive lender (manufacturer finance arm)",
    pros: "Best APR on new cars when promotions are running. Loyalty discounts for repeat customers.",
    cons: "Promotional APRs typically require excellent credit and short terms (36 or 48 months). Less flexible on used vehicles.",
    verdict: "Excellent for new-car shoppers with 720+ FICO who want a manufacturer special. Skip for used.",
  },
  {
    title: "Buy-here-pay-here",
    pros: "Will approve almost anyone, regardless of credit.",
    cons: "APRs commonly hit 20% to 28%. Cars are typically older with hidden mechanical issues. The CFPB has issued multiple enforcement actions against this segment.",
    verdict: "Avoid. If your credit is too low for a traditional auto loan, save longer or buy a cheaper car for cash.",
  },
];

const newVsUsed = [
  {
    title: "New car",
    detail: "Lower APRs, longer warranty, manufacturer rebates. The catch: a new car loses 20% to 30% of its value in the first year. The Federal Reserve estimates the average new-car payment is now $740/month, an all-time high.",
  },
  {
    title: "Used (1 to 3 years old)",
    detail: "Sweet spot for most buyers. The first owner absorbed the depreciation cliff. APRs run 1 to 2 percentage points higher than new, but the lower price more than offsets it. Certified pre-owned (CPO) programs add a manufacturer-backed warranty.",
  },
  {
    title: "Used (4+ years old)",
    detail: "Lowest cash price, highest APR. Banks and credit unions typically cap loan terms at 60 months for vehicles 4+ years old. Mechanical risk rises sharply; budget 1% to 2% of purchase price annually for repairs.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Should I get preapproved before shopping for a car?",
    answer: "Yes, almost always. A preapproval from a bank or credit union does three things: it tells you your real rate, it caps your spending power, and it strips negotiating leverage from the dealer F&I (finance and insurance) office. The Federal Reserve consumer survey shows preapproved buyers pay 1 to 2 percentage points less than unprepared buyers at every credit tier.",
  },
  {
    question: "How long should my auto loan be?",
    answer: "60 months is the sweet spot for most buyers. 72 and 84 month loans look attractive (lower payment) but cost thousands more in interest and put you underwater (owing more than the car is worth) for most of the loan. The CFPB warns that loans of 72+ months now make up 35% of new auto financing, a level that has historically preceded delinquency spikes.",
  },
  {
    question: "What credit score do I need for a good auto loan rate?",
    answer: "720+ unlocks the best advertised rates. 660 to 719 (good credit) qualifies for competitive rates from banks and credit unions, typically 1 to 2 percentage points above the floor. 600 to 659 (fair) sees a sharper jump, and below 600 (subprime) faces APRs of 13% or higher. Every tier benefits from preapproval and credit-union shopping.",
  },
  {
    question: "Can I refinance an auto loan I just took out?",
    answer: "Yes. There is no waiting period. Many borrowers take dealer financing at delivery (often at a marked-up rate) and refinance through a credit union within 30 to 60 days. The math works whenever the new APR is at least 1 percentage point lower and you have 24+ months remaining. See our auto refinance page for the full math.",
  },
  {
    question: "Are 0% APR offers real?",
    answer: "Yes, but with caveats. Manufacturer 0% offers are real for excellent-credit buyers (720+) and typically apply only to new vehicles, short terms (36 or 48 months), and specific models. They almost always exclude rebates: you pick 0% APR or a $1,500 cash rebate, not both. Run the math; the rebate often beats the 0% offer once you finance the difference at 7%.",
  },
  {
    question: "What is GAP insurance and do I need it?",
    answer: "GAP (guaranteed asset protection) insurance covers the difference between what you owe and what your car is worth if it is totaled. Useful if you put less than 20% down or take a 72+ month loan, because you will be underwater for years. Skip it if you put 20%+ down or take a 60-month or shorter loan. Buy GAP from your insurer or credit union, not the dealer; dealer GAP commonly costs 2 to 3 times more.",
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
          { name: "Auto Loans", href: "/loans/auto" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Auto loan rates updated weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Auto loans, demystified.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            The dealer F&I office runs a profit center, not a service. Your best move is to walk in preapproved, with a check from your credit union or bank in hand. We show real APR ranges by credit tier, the new-versus-used trade-offs, and exactly when dealer financing actually wins.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run loan math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/auto/refinance" className="pill pill-ghost">
              Refinance an auto loan
            </Link>
          </div>
        </div>
      </section>

      {/* RATE GRID */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Rate snapshot: new vs used</h2>
            <span className="text-xs font-mono text-mute">60-month term, credit union avg</span>
          </div>
          <div className="card-flush overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
              <div className="col-span-4">Credit tier</div>
              <div className="col-span-4">New car APR</div>
              <div className="col-span-4">Used car APR</div>
            </div>
            {rateGrid.map((row, i) => (
              <div
                key={row.tier}
                className={`grid grid-cols-12 px-6 py-4 items-center ${
                  i === rateGrid.length - 1 ? "" : "border-b border-line-soft"
                }`}
              >
                <div className="col-span-12 md:col-span-4 mb-2 md:mb-0">
                  <div className="font-display font-semibold text-base">{row.tier}</div>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <div className="font-mono tabular font-semibold">{row.newApr}</div>
                  <div className="text-xs text-mute mt-1">{row.newAprDetail}</div>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <div className="font-mono tabular font-semibold">{row.usedApr}</div>
                  <div className="text-xs text-mute mt-1">{row.usedAprDetail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW VS USED */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">New vs used</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The math on age matters more than the rate.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              A 1-percentage-point lower rate on a new car is meaningless if the car loses $8,000 of value in 12 months.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newVsUsed.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{item.title}</h3>
              <p className="text-mute text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEALER VS BANK */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">Where to finance</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Dealer, bank, credit union, or captive lender.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                The cheapest financing is rarely the most convenient. Bring a preapproval as your floor.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {dealerVsBank.map((d) => (
              <div key={d.title} className="card p-6 md:p-7">
                <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{d.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm leading-relaxed">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Pros</div>
                    <p className="text-mute">{d.pros}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Cons</div>
                    <p className="text-mute">{d.cons}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Verdict</div>
                    <p className="text-mute">{d.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO QUALIFY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">Negotiation</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Three things the F&I office hopes you forget.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Negotiate the price, not the payment</h3>
              <p className="text-mute">
                Dealers love to ask "what payment can you afford?" That question lets them stretch the term and add fees while keeping the monthly the same. Negotiate the out-the-door price first. Then talk financing as a separate conversation.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Decline add-ons by default</h3>
              <p className="text-mute">
                Extended warranties, paint protection, fabric protection, VIN etching, and dealer-installed alarms are profit centers. The CFPB has flagged several of these as commonly overpriced. If you want an extended warranty, buy it later from a third party for a fraction of the dealer price.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Read the contract before signing</h3>
              <p className="text-mute">
                The most common contract surprise is a longer term than agreed (e.g., 75 months vs 60). The second is a higher APR than promised. Both are easily caught with a 5-minute review. The dealer cannot legally change the contract after you sign and drive off, so review every line.
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
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math before you shop.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "See your monthly payment by APR and term." },
              { label: "Auto refinance", href: "/loans/auto/refinance", detail: "Replace a high-rate auto loan." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Debt payoff", href: "/calculators/debt-payoff", detail: "Compare options side by side." },
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
            Common questions about auto loans.
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
              Walk into the dealership preapproved.
            </h2>
            <p className="text-ink/70 mt-2">Run your numbers, then prequalify with a credit union before you shop.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/auto/refinance" className="pill pill-ghost">
              Auto refinance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
