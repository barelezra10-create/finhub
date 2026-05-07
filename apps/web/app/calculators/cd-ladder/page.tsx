import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "CD Ladder Calculator | Fintiex",
  description:
    "Free CD ladder builder. Distribute your cash across 3 to 5 rungs with realistic 2026 FDIC rates. See per-rung principal, APY, and total maturity value.",
  alternates: { canonical: "/calculators/cd-ladder" },
};

const faqs: FAQItem[] = [
  {
    question: "What is a CD ladder?",
    answer:
      "A CD ladder is a strategy where you split a cash balance evenly across multiple certificates of deposit with staggered maturity dates. As each shorter rung matures, you reinvest the principal into a new long-end CD. The result: liquidity (something matures regularly) plus the higher rates that long CDs pay versus short ones.",
  },
  {
    question: "Why ladder instead of just buying one long CD?",
    answer:
      "Two reasons. First, liquidity: with a 5-rung ladder, you have access to 20% of the principal each year without breaking a CD and triggering early-withdrawal penalties. Second, rate risk: if rates rise after you lock, the ladder lets you reinvest a portion at the higher rate every year. A single 5-year CD locks 100% at one moment in time.",
  },
  {
    question: "Are CDs safe?",
    answer:
      "Yes, when held at FDIC-insured banks or NCUA-insured credit unions. Up to $250,000 per depositor per institution per ownership category is fully government-insured. Use multiple banks if your balance exceeds $250K. The FDIC has never failed to make depositors whole on insured balances since 1933.",
  },
  {
    question: "Where do these APY rates come from?",
    answer:
      "The default rates in this calculator (5.10% at 6mo, 4.90% at 1yr, down to 4.20% at 5yr) reflect the no-fee, no-broker, FDIC-insured top-of-market rates as of early 2026. Specific banks like LendingClub, Bask Bank, Ally, and Marcus typically lead these tables. Confirm the current rate at your chosen bank before locking.",
  },
  {
    question: "What is the early withdrawal penalty?",
    answer:
      "Most banks charge 90 days of interest on CDs of 12 months or shorter and 180 days of interest on longer terms. Some no-penalty CDs exist but carry lower APYs. The ladder structure exists specifically so you do not need to break CDs early. Time your CD maturity dates to known cash needs (tuition, taxes, planned purchases) to avoid penalties entirely.",
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
          { name: "CD Ladder", href: "/calculators/cd-ladder" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> CD Ladder
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            CD ladder builder.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Spread your cash across 3 to 5 staggered CD rungs. Capture the higher long-term rates without locking up everything for five years. See per-rung interest, weighted-average APY, and total maturity value.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">100%</span> FDIC-insured
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
                Even split, compounded by term.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                The total amount divides evenly across the number of rungs you choose. Each rung is assigned the rate that matches its term length from the standard CD curve. The maturity value of each rung uses the standard fixed-rate compounding formula:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>maturity_value = principal * (1 + APY)^years</code>
              </pre>
              <p>
                Example: $25,000 split across 5 rungs (1, 2, 3, 4, 5 years). Each rung holds $5,000. The 1-year rung at 4.90% returns $5,245. The 5-year rung at 4.20% returns $6,141. Total maturity across all five rungs: roughly $28,300. Weighted-average APY lands at 4.48%, which beats most standalone HYSAs while preserving annual liquidity.
              </p>
              <p>
                The strategy advantage shows up at year 1. The 1-year rung matures and rolls into a new 5-year CD at whatever the prevailing rate is then. Repeat each year. After 5 years, every rung is a 5-year CD, and one rung matures every year. You have effectively the highest available CD rate with annual access to 20% of the principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Tips</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              How to actually run a ladder.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Open every CD at the same bank if possible. CD ladders work best when all the rungs are visible in one dashboard. Banks like Marcus, Ally, and Synchrony let you open multiple CDs against the same account login. You see maturity dates, current balances, and interest accrued without managing five separate logins.
            </p>
            <p>
              Use the IRA wrapper if it fits. CD interest is taxable as ordinary income at your marginal rate. Inside an IRA, the interest grows tax-deferred (traditional) or tax-free (Roth). For long-horizon ladder cash that you do not need before age 59.5, an IRA CD ladder skips the annual tax drag entirely.
            </p>
            <p>
              Check the early-withdrawal penalty before locking. Standard penalty is 90 to 180 days of interest. Some banks offer no-penalty CDs at slightly lower APYs (typically 25 to 50 bps below standard). For ladder rungs you may need to break, the no-penalty version is worth the small rate concession.
            </p>
            <p>
              Stay under FDIC limits. Coverage is $250,000 per depositor per bank per ownership category. A joint account doubles to $500K. For balances above the limit, split across multiple banks. The FDIC&rsquo;s EDIE tool lets you confirm coverage in two minutes; never assume.
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
            Compare today&rsquo;s top CD and HYSA rates side by side.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/savings-goal" className="pill pill-ink">
              Savings goal
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings" className="pill pill-ghost">
              Top CD & HYSA rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
