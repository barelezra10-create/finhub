import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "APR Calculator: Daily, Monthly, APY Conversion | Fintiex",
  description:
    "Free APR calculator. Enter a balance and APR, see the daily, monthly, and effective annual (APY) interest cost. APR-to-APY conversion done right. No popups.",
  alternates: { canonical: "/calculators/apr" },
};

const faqs: FAQItem[] = [
  {
    question: "What is the difference between APR and APY?",
    answer:
      "APR (annual percentage rate) is the simple annual rate without compounding. APY (annual percentage yield, also called effective annual rate) factors in compounding. On a credit card that compounds daily, a 24.99% APR equals about 28.39% APY. Banks usually quote savings accounts in APY (the higher number, marketing-friendly for deposits) and loans in APR (the lower number, marketing-friendly for borrowing).",
  },
  {
    question: "Why does the IRS care about APR vs APY?",
    answer:
      "Both the IRS and federal Truth in Lending Act require lenders to disclose APR on the loan agreement. APR includes the interest rate plus mandatory fees expressed as an annualized percentage, which lets consumers compare offers apples to apples. The APY math used here is for understanding the true cost, not for matching a regulated disclosure.",
  },
  {
    question: "Do credit cards really compound daily?",
    answer:
      "Most do. Each day, the card calculates interest on the prior day&apos;s balance using the daily periodic rate (APR / 365), then adds it to the balance. By the end of the billing cycle, those daily interest charges have themselves earned more interest. That is why your effective annual cost (APY) is higher than the stated APR. Some cards still compound monthly, listed on page 2 of the cardholder agreement.",
  },
  {
    question: "Is APR the same on loans and credit cards?",
    answer:
      "The concept is the same, but the math differs. Mortgage and personal loan APRs include origination fees and points amortized over the life of the loan, so they are typically a few tenths of a point higher than the stated interest rate. Credit card APRs are usually just the interest rate (no fees), because fees on cards are charged as flat amounts or percentages of transactions rather than rolled into the rate.",
  },
  {
    question: "Why does the same APR look different in different contexts?",
    answer:
      "Because compounding frequency changes the effective cost. A 6% APR compounded annually equals 6.00% APY. The same 6% APR compounded monthly equals 6.17% APY. Compounded daily, it equals 6.18% APY. For long-horizon investments, the difference compounds itself. For short-horizon credit card balances paid off in a few months, the difference is usually under $5 on most consumer balances.",
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
          { name: "APR Calculator", href: "/calculators/apr" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> APR
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            What does that APR actually cost?
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Type in a balance and an APR. See the daily interest, the monthly interest, the simple yearly interest, and the true effective yearly cost (APY) when interest compounds daily, the way credit cards actually do it.
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
                Four ways to read the same rate.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                APR is the simple annual rate. Divide by 365 to get the daily periodic rate, by 12 to get the monthly rate. APY is the effective annual rate when interest compounds.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`daily rate = APR / 365
monthly rate = APR / 12
APY = (1 + APR / 365)^365 - 1
daily interest = balance * (APR / 365)
yearly interest (compounded) = balance * APY`}</code>
              </pre>
              <p>
                On a $2,000 balance at 24.99% APR, the daily cost is about $1.37, the monthly cost is about $41.65, and the true annual cost with daily compounding is about $568. The same APR quoted as a flat annual number understates the cost by roughly $68.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Real-world use</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Where this number matters most.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Comparing two loan offers with different fee structures. Use APR (not the nominal interest rate) because APR rolls origination and points into the rate. A 6.5% rate with 1 point may have a higher APR than a 6.75% rate with zero points, depending on how long you hold the loan.
            </p>
            <p>
              Deciding whether to carry a credit card balance for a month. If your APR is 22.99% and your balance is $1,500, the monthly interest is about $29. That is what you save by paying in full before the due date instead of paying just the minimum.
            </p>
            <p>
              Modeling a credit card balance transfer. The Federal Trade Commission has good rules of thumb at consumer.ftc.gov: if the intro APR is 0% for 18 months and your current APR is above 18%, almost any transfer fee under 5% comes out ahead within the first three months.
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
            Cut that monthly interest in half with a balance transfer.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/balance-transfer" className="pill pill-ink">
              Balance transfer
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/debt-payoff" className="pill pill-ghost">
              Debt payoff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
