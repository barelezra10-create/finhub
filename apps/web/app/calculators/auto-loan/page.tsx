import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Auto Loan Calculator | Fintiex",
  description:
    "Free auto loan calculator. Enter price, down payment, trade-in, sales tax, term, and APR. See the monthly payment, total interest paid, and full out-the-door cost.",
  alternates: { canonical: "/calculators/auto-loan" },
};

const faqs: FAQItem[] = [
  {
    question: "What APR can I qualify for on an auto loan?",
    answer:
      "Auto loan APRs depend on credit score, term, and whether the car is new or used. As of early 2026, Experian data shows new-car average APRs near 7.0% for super-prime (FICO 781+), 8.5% for prime, 12.0% for near-prime, and 17%+ for subprime. Used-car APRs run 1.5 to 3 percentage points higher. Always pre-qualify with a credit union and one online lender before walking into a dealer finance office.",
  },
  {
    question: "Should I roll sales tax into the loan or pay cash?",
    answer:
      "Paying sales tax in cash at signing reduces the financed amount, which lowers both the monthly payment and the total interest. On a $35,000 vehicle at 7% sales tax, that is $2,450 of cash up front to skip 5 years of interest on that amount. If you have the cash and the loan APR is above 5%, paying tax up front is usually the better move. Most U.S. states require sales tax at registration regardless of how you finance.",
  },
  {
    question: "Is a 72 or 84 month auto loan a bad idea?",
    answer:
      "Long terms lower the monthly payment but raise the total interest paid and increase the risk of going underwater (owing more than the car is worth). On a $30,000 loan at 8.25%, a 60-month term costs $6,690 in interest. Stretching to 84 months drops the monthly by about $115 but raises total interest to $9,520. For new cars that depreciate 20% to 25% in year one, 60 months or shorter is the safer ceiling.",
  },
  {
    question: "What is the difference between APR and the dealer's quoted rate?",
    answer:
      "APR includes the interest rate plus mandatory finance charges expressed as an annualized percentage. The dealer's quoted rate is sometimes just the interest rate, excluding fees that get rolled into the financing. Federal Truth in Lending Act requires the APR to be disclosed on the loan contract. Compare APR to APR across lenders. Captive lenders (Toyota Financial, Ford Credit) sometimes offer promotional APRs as low as 0.9% on select models, but that may require giving up the rebate.",
  },
  {
    question: "Should I get pre-approved before going to the dealer?",
    answer:
      "Yes. Pre-approval from a credit union or online lender gives you a known APR and loan amount before negotiating the price. Dealer finance managers earn part of their pay by marking up the lender APR, sometimes by 1 to 2 percentage points. A pre-approval letter forces them to either beat your rate or match your existing offer. PenFed, Navy Federal, LightStream, and most local credit unions offer fast soft-pull pre-approvals.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Auto Loan", href: "/calculators/auto-loan" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Auto Loan
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Auto loan calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Type in the vehicle price, your down payment and trade-in, the sales tax rate, term, and APR. The calculator returns the monthly payment, total interest, and the full out-the-door cost.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">100%</span> formula visible
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Standard amortization on the financed amount.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Auto loans use the same fixed-rate amortization formula as mortgages and personal loans. The difference is what gets rolled into the financed amount:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`Loan amount = Price + (Price * Tax%) - Down - Trade-in
Monthly = P * [r(1+r)^n] / [(1+r)^n - 1]`}</code>
              </pre>
              <p>
                Where r is the monthly rate (APR divided by 12) and n is the term in months. On a $35,000 vehicle at 7% sales tax with $5,000 down, $0 trade, 60 months, and 8.25% APR, the loan amount is $32,450 and the monthly payment is roughly $662.
              </p>
              <p>
                Sales tax in most states is calculated on the full purchase price minus the trade-in value (a tax credit for the trade). This calculator applies sales tax to the price only and rolls it into the loan, which mirrors what most U.S. dealers actually do at signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Common mistakes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Where car buyers leave money on the table.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Negotiating the monthly payment instead of the price. Dealers love the monthly payment frame because they can hide a higher price, a longer term, or a marked-up APR inside the same number. Always negotiate the out-the-door price first, then negotiate financing separately, then negotiate the trade-in value.
            </p>
            <p>
              Ignoring credit union pre-approval. Credit unions consistently beat captive and bank auto loan APRs by 1 to 2 percentage points. PenFed, Navy Federal, and most local credit unions offer same-day pre-approvals with soft credit pulls. On a $32,000 loan over 60 months, 1.5 percentage points of APR equals roughly $1,300 in saved interest.
            </p>
            <p>
              Skipping the gap insurance question on long-term loans. If you finance 84 months on a new vehicle and total it in year two, you may owe more than insurance pays out. Gap insurance covers the difference and runs $200 to $500 lifetime. The dealer will sell it for $700+. Buy it from your auto insurance carrier instead.
            </p>
            <p>
              Forgetting registration, doc fees, and dealer add-ons. Beyond price and tax, expect $300 to $600 in registration and title fees and $100 to $800 in dealer documentation fees depending on state law. Decline VIN etching, fabric protection, and extended warranties at signing. You can buy any aftermarket warranty for half the price online if you really want one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((f) => (
              <div key={f.question} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-ink-soft leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight max-w-2xl leading-tight">
            Pre-approve at a credit union before you walk into the dealer.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Personal loan calc
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/net-worth" className="pill pill-ghost">
              Net worth tracker
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
