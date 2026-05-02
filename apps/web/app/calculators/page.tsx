import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Free Financial Calculators — Mortgage, Savings, Loan, Credit Card Payoff | Fintiex",
  description:
    "Free financial calculators: mortgage payment, refi break-even, CD ladder, debt avalanche, savings goal, compound interest, HELOC, and net worth. No email walls, no popups.",
  alternates: { canonical: "/calculators" },
};

const allCalculators = [
  {
    title: "Mortgage Payment",
    sub: "By rate, term, and down payment",
    href: "/calculators/mortgage-payment",
    icon: "🏠",
    tag: "Popular",
  },
  {
    title: "Refi Break-Even",
    sub: "When does the refinance pay back?",
    href: "/calculators/refinance-break-even",
    icon: "🔁",
    tag: "Popular",
  },
  {
    title: "Debt Avalanche",
    sub: "Credit card payoff visualizer",
    href: "/calculators/debt-payoff",
    icon: "💳",
    tag: "Popular",
  },
  {
    title: "CD Ladder",
    sub: "Build a 5-rung CD ladder",
    href: "/calculators/cd-ladder",
    icon: "🪜",
    tag: "Popular",
  },
  {
    title: "HELOC Payment",
    sub: "Draw period and repayment sim",
    href: "/calculators/heloc",
    icon: "🔓",
    tag: null,
  },
  {
    title: "Personal Loan Payoff",
    sub: "Monthly payment and total interest",
    href: "/calculators/personal-loan-payoff",
    icon: "📄",
    tag: null,
  },
  {
    title: "Auto Loan",
    sub: "New and used car payment calculator",
    href: "/calculators/auto-loan",
    icon: "🚗",
    tag: null,
  },
  {
    title: "HYSA Savings Goal",
    sub: "Months to hit your target",
    href: "/calculators/savings-goal",
    icon: "🎯",
    tag: null,
  },
  {
    title: "Compound Interest",
    sub: "Long-horizon growth visualizer",
    href: "/calculators/compound-interest",
    icon: "📈",
    tag: null,
  },
  {
    title: "Net Worth Tracker",
    sub: "Assets minus liabilities, over time",
    href: "/calculators/net-worth",
    icon: "📊",
    tag: null,
  },
];

const popularCalcs = allCalculators.filter((c) => c.tag === "Popular");

const faqItems: FAQItem[] = [
  {
    question: "Are my calculator inputs saved anywhere?",
    answer: "No. Fintiex calculators are entirely client-side. Nothing you enter is sent to a server or stored in a database. If you close the tab, your inputs are gone. We are exploring optional local-storage persistence for future versions.",
  },
  {
    question: "Do I need an account to use the calculators?",
    answer: "No account, no email address, no signup. Every calculator on this page is free and fully accessible. We will never put a calculator behind a registration wall.",
  },
  {
    question: "Can I export or share my results?",
    answer: "Not yet. Export to PDF and shareable URLs are on the Phase 2 roadmap. For now, you can screenshot the results panel or copy the key numbers from the output section.",
  },
  {
    question: "How accurate are the estimates?",
    answer: "Estimates are mathematically correct given the inputs. The mortgage payment calculator uses standard amortization formulas. The compound interest tool uses the standard formula. The results are as accurate as your inputs: actual lender offers may differ based on credit score, fees, and terms not captured here.",
  },
  {
    question: "Why is there no APY-to-monthly-rate toggle?",
    answer: "Showing monthly rates introduces a decimal place that obscures the comparison. We use APY or APR consistently throughout the site because those are the numbers on your actual offer letters. The goal is to match what you see in the real world, not add conversion steps.",
  },
  {
    question: "Are the calculators mobile-friendly?",
    answer: "Yes. Every calculator is designed to work on phones and tablets. The input layout stacks vertically on small screens. Touch targets meet accessibility minimums. If you find a calculator that breaks on your device, email us at feedback@fintiex.com.",
  },
];

const faqs = [
  {
    q: "Are my calculator inputs saved anywhere?",
    a: "No. Fintiex calculators are entirely client-side. Nothing you enter is sent to a server or stored in a database. If you close the tab, your inputs are gone. We are exploring optional local-storage persistence for future versions.",
  },
  {
    q: "Do I need an account to use the calculators?",
    a: "No account, no email address, no signup. Every calculator on this page is free and fully accessible. We will never put a calculator behind a registration wall.",
  },
  {
    q: "Can I export or share my results?",
    a: "Not yet. Export to PDF and shareable URLs are on the Phase 2 roadmap. For now, you can screenshot the results panel or copy the key numbers from the output section.",
  },
  {
    q: "How accurate are the estimates?",
    a: "Estimates are mathematically correct given the inputs. The mortgage payment calculator uses standard amortization formulas. The compound interest tool uses the standard formula. The results are as accurate as your inputs: actual lender offers may differ based on credit score, fees, and terms not captured here.",
  },
  {
    q: "Why is there no APY-to-monthly-rate toggle?",
    a: "Showing monthly rates introduces a decimal place that obscures the comparison. We use APY or APR consistently throughout the site because those are the numbers on your actual offer letters. The goal is to match what you see in the real world, not add conversion steps.",
  },
  {
    q: "Are the calculators mobile-friendly?",
    a: "Yes. Every calculator is designed to work on phones and tablets. The input layout stacks vertically on small screens. Touch targets meet accessibility minimums. If you find a calculator that breaks on your device, email us at feedback@fintiex.com.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Calculators", href: "/calculators" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> 10 free calculators
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Calculators that show their work.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Every formula visible. Every assumption editable. No popups, no email walls, no upsells. Ten tools covering mortgages, savings, loans, credit cards, and net worth. Built for back-of-the-envelope first, deep-dive second.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/savings-goal" className="pill pill-ghost">
              Savings goal
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">10</span> calculators
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
          </div>
        </div>
      </section>

      {/* MOST POPULAR CARDS */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Most used right now</h2>
            <span className="text-xs font-mono text-mute">Phase 0 preview</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {popularCalcs.map((c) => (
              <Link key={c.href} href={c.href} className="card p-5 block group">
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-display font-bold text-base mb-1 leading-snug group-hover:text-violet transition-colors">
                  {c.title}
                </div>
                <div className="text-xs text-mute">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALL CALCULATORS GRID */}
      <section className="bg-ink text-bg">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <span className="chip chip-lime mb-4">All tools</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Every calculator, one place.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-end">
              <p className="text-white/55 text-lg leading-relaxed">
                Phase 2 ships interactive versions with exportable results and shareable URLs. Phase 0 lists the tools and shows the formula. Pick your number, start there.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allCalculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-ink-soft border border-white/10 hover:border-lime hover:bg-white/5 transition-colors duration-200 rounded-2xl p-5"
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-display font-bold text-base mb-1 leading-snug">
                  {c.title}
                </div>
                <div className="text-sm text-white/55">{c.sub}</div>
                {c.tag && (
                  <span className="mt-3 inline-block chip chip-lime text-ink">{c.tag}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Philosophy</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Tools that respect your intelligence.
              </h2>
              <p className="text-mute leading-relaxed">
                Most financial calculators hide the math and ask for your email before showing you the answer. We think that is backwards.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">No email walls, no popups</h3>
                <p className="text-mute">
                  Every calculator at Fintiex is free to use without an account. You get the answer immediately, not after a signup flow. We believe the right to calculate your own mortgage payment is not a premium feature.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Formulas visible and editable</h3>
                <p className="text-mute">
                  Each calculator shows the formula it uses and lets you adjust key assumptions. You can change the compounding frequency, tweak the amortization term, or add an extra monthly payment and immediately see how the output changes. This is how you build genuine financial intuition, not just get a number.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Back-of-the-envelope first</h3>
                <p className="text-mute">
                  The default view shows the headline number in large type. The advanced view shows a full amortization table or month-by-month projection. Most people need the headline first. The detail is one tap away, not buried under a paywall.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">What is coming in Phase 2</h3>
                <p className="text-mute">
                  Phase 2 brings shareable result URLs, PDF export, side-by-side scenario comparison, and live rate pre-fill from our rate tables. The CD ladder calculator will support custom rungs and reinvestment assumptions. The mortgage calculator will support PMI auto-removal at 80% LTV and ARM adjustment scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common questions.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6">
              <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.q}</h3>
              <p className="text-mute text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Run the numbers on your biggest financial decision right now.
            </h2>
            <p className="text-ink/70 mt-2">No signup. No email. Just the math.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
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
