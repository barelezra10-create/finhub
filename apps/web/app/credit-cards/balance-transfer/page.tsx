import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best 0% Balance Transfer Credit Cards 2026: Up to 21 Months | Fintiex",
  description:
    "Move high-rate card debt to 0% for up to 21 months. We compare transfer fees, intro lengths, and post-promo APRs across the five strongest balance transfer cards.",
  alternates: { canonical: "/credit-cards/balance-transfer" },
};

interface CardPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  perk: string;
  detail: string;
  bestFor: string;
  introPeriod: string;
  transferFee: string;
  href: string;
}

const picks: CardPick[] = [
  {
    rank: 1,
    name: "Citi Diamond Preferred",
    brand: "citi-diamond-preferred",
    tag: "Longest 0% offer",
    perk: "21 months 0% intro APR on balance transfers",
    detail: "21 months 0% on balance transfers from account opening, 12 months on purchases. After intro: 18.24% to 28.99% variable APR.",
    bestFor: "Cardholders who need the maximum runway to pay off a large transferred balance.",
    introPeriod: "21 months on transfers",
    transferFee: "5% of the amount transferred ($5 minimum)",
    href: "/credit-cards/citi-diamond-preferred",
  },
  {
    rank: 2,
    name: "Wells Fargo Reflect",
    brand: "wells-reflect",
    tag: "Best dual 0%",
    perk: "21 months 0% on purchases AND transfers",
    detail: "21 months 0% intro APR on both purchases and qualifying balance transfers. After intro: 17.24% to 28.99% variable APR.",
    bestFor: "People who want the long intro window to apply equally to new spending and transferred debt.",
    introPeriod: "21 months on both",
    transferFee: "5% of the amount transferred ($5 minimum)",
    href: "/credit-cards/wells-fargo-reflect",
  },
  {
    rank: 3,
    name: "Citi Double Cash",
    brand: "citi-double-cash",
    tag: "Best after-promo card",
    perk: "18 months 0% on transfers, then 2% cash back",
    detail: "18 months 0% intro APR on balance transfers, then a competitive variable APR. The card stays useful after the promo as a flat 2% cash-back card.",
    bestFor: "Borrowers who want a card that earns rewards on new spending once the transfer is paid off.",
    introPeriod: "18 months on transfers",
    transferFee: "3% for the first 4 months ($5 minimum), 5% after",
    href: "/credit-cards/citi-double-cash",
  },
  {
    rank: 4,
    name: "Discover it Balance Transfer",
    brand: "discover-it-cash-back",
    tag: "Best for cash back",
    perk: "18 months 0% plus rotating 5% cash back",
    detail: "18 months 0% intro APR on balance transfers, 6 months on purchases. Includes the standard Discover it 5% rotating categories on new spending.",
    bestFor: "Cardholders who want to earn meaningful cash back while paying down transferred debt.",
    introPeriod: "18 months on transfers",
    transferFee: "3% intro on transfers in the first 4 months ($5 minimum), 5% after",
    href: "/credit-cards/discover-it-balance-transfer",
  },
  {
    rank: 5,
    name: "BankAmericard",
    brand: "BankAmericard",
    tag: "Lowest fee",
    perk: "18 months 0% with a flat 3% transfer fee",
    detail: "18 months 0% intro APR on purchases and balance transfers made within 60 days. Reasonable post-promo APR for those carrying a small remainder.",
    bestFor: "Existing Bank of America customers and anyone prioritizing a low transfer fee.",
    introPeriod: "18 months on both",
    transferFee: "3% of the amount transferred ($10 minimum)",
    href: "/credit-cards/bankamericard",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How does a balance transfer save money?",
    answer: "You move debt from a high-APR card (typically 20% to 30%) to a card offering a 0% intro APR for 12 to 21 months. During the promotional period, every dollar you pay reduces principal instead of going to interest. On a $5,000 balance at 22% APR, that saves roughly $1,100 in interest in year one, even after a 5% transfer fee.",
  },
  {
    question: "What is the typical balance transfer fee?",
    answer: "Most cards charge 3% to 5% of the transferred amount, with a $5 to $10 minimum. The Citi Double Cash and Discover it Balance Transfer offer a lower 3% rate if you transfer within the first 4 months. BankAmericard charges a flat 3%. The fee is added to your new balance, so a $5,000 transfer with a 5% fee starts you off at $5,250.",
  },
  {
    question: "What happens if I do not pay off the transfer in time?",
    answer: "After the intro period, the standard variable APR applies to the remaining balance. This is regular APR, not deferred interest, so you only pay interest going forward, not retroactively. Still, you should plan to pay it off in full. The CFPB offers a payoff planner that takes the intro period into account.",
  },
  {
    question: "Can I transfer balances between cards from the same issuer?",
    answer: "No. You cannot transfer a Chase balance to another Chase card or a Citi balance to another Citi card. The receiving issuer must be different from the issuer of the debt you are moving. Plan the application: open the transfer card while you still have the high-rate balance on a card from a different issuer.",
  },
  {
    question: "Will a balance transfer hurt my credit score?",
    answer: "Short-term yes, long-term often yes. The new card application triggers a hard inquiry that drops your score 2 to 5 points. Closing the old card afterwards can hurt your average account age. But moving high-utilization debt onto a card with a fresh limit usually lowers your overall utilization ratio, which helps. Net effect: a small dip for a few months, then improvement.",
  },
  {
    question: "Should I close the old card after transferring?",
    answer: "Usually not. Keeping the old card open (with a $0 balance) preserves your average account age and total available credit, both positive factors for your score. Cut up the physical card if you are tempted to spend on it. The only reason to close: high annual fee on the old card with no fee waiver.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Balance Transfer", href: "/credit-cards/balance-transfer" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> Up to 21 months 0% intro APR
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Move your debt to 0% and pay it down in peace.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            On a $5,000 card balance at 22% APR, you are paying about $92 every month in pure interest. A balance transfer card stops that meter cold for up to 21 months. Every dollar you pay during the intro period attacks the balance directly. The five cards below give you the longest runways at the lowest fees.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Calculate my savings
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/zero-apr" className="pill pill-ghost">
              0% APR purchase cards
            </Link>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Balance transfer snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Longest 0% offer", value: "21 mo", caption: "Citi Diamond Preferred and Wells Fargo Reflect" },
              { label: "Lowest transfer fee", value: "3%", caption: "BankAmericard (or 4-month intro on Citi/Discover)" },
              { label: "Avg savings on $5K", value: "$1,100", caption: "Year one, after 5% transfer fee" },
              { label: "Cards with no annual fee", value: "5 / 5", caption: "Every pick is $0 annual fee" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top picks · No sponsored placements
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Five balance transfer cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked on intro length, transfer fee, post-promo APR, and how useful the card stays once the debt is gone.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {picks.map((p) => (
            <div key={p.name} className="card p-6 md:p-7">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                  <BrandLogo brand={p.brand} size={48} />
                  <div className="md:hidden font-mono text-xs text-mute">#{p.rank}</div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="hidden md:inline font-mono text-xs text-mute">#{p.rank}</span>
                    <h3 className="font-display font-bold text-xl tracking-tight">{p.name}</h3>
                    <span className="chip chip-lime">{p.tag}</span>
                  </div>
                  <p className="text-mute leading-relaxed mb-3">{p.detail}</p>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    <span className="font-semibold">Best for: </span>
                    {p.bestFor}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Top perk</div>
                    <div className="font-semibold">{p.perk}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Intro period</div>
                    <div className="font-mono tabular">{p.introPeriod}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Transfer fee</div>
                    <div className="text-mute text-sm">{p.transferFee}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE MATH */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">The math</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                When the fee is worth it. When it is not.
              </h2>
              <p className="text-mute leading-relaxed">
                Three calculations that determine whether a balance transfer actually saves you money.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Break-even on the transfer fee</h3>
                <p className="text-mute">
                  A 5% transfer fee on a $5,000 balance is $250. Your current 22% card charges roughly $92 in interest per month. You break even on the fee in 2.7 months. After that, every additional month at 0% is pure savings. The longer the intro window, the better the math, which is why we ranked Citi Diamond Preferred and Wells Fargo Reflect at the top.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Required monthly payment</h3>
                <p className="text-mute">
                  Divide the new balance (including the transfer fee) by the number of intro months. A $5,250 balance over 21 months means $250 per month to clear it interest-free. If you can comfortably afford that, the transfer is the right move. If you cannot, you will start accruing interest on the remainder at 18% to 29%, and the savings shrink fast.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">No new spending on the old card</h3>
                <p className="text-mute">
                  The biggest mistake is keeping the old card open and continuing to use it. New spending at 22% APR offsets the savings from the transfer. Pull the card out of your wallet, freeze it in a drink coaster if needed. The Federal Reserve consumer credit data shows that transfer-card users who keep spending on the old card pay more in year-two interest than they saved in year one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PITFALLS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Watch out</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three traps that turn a good move into a bad one.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Balance transfers work when used as a tool. They backfire when used as a delay tactic. The Federal Reserve flags credit card debt as one of the fastest-growing categories of consumer borrowing. A transfer card alone does not solve the underlying spending. It just buys time to fix it.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Missing the transfer window</h3>
            <p className="text-sm text-mute leading-relaxed">
              Most cards require the transfer to happen within 60 to 120 days of account opening for the intro APR to apply. Late transfers default to the regular APR. Initiate the transfer the same week the new card arrives.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Making just the minimum payment</h3>
            <p className="text-sm text-mute leading-relaxed">
              The minimum payment will not pay off the balance before the intro ends. You must pay roughly 1 / N each month, where N is the number of intro months, to clear it on time.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Confusing 0% with deferred interest</h3>
            <p className="text-sm text-mute leading-relaxed">
              These cards are true 0%, not deferred. Store cards with deferred interest charge all back-interest if you are not paid off by the deadline. The cards above do not. Read the disclosures to confirm.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "See exactly when the balance hits zero." },
              { label: "Personal loan calculator", href: "/calculators/personal-loan-payoff", detail: "Compare a transfer to a loan consolidation." },
              { label: "0% APR purchase cards", href: "/credit-cards/zero-apr", detail: "Float a new big purchase, not just old debt." },
              { label: "Debt consolidation loans", href: "/loans/debt-consolidation", detail: "When a transfer card is not enough runway." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about balance transfers.</h2>
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
              See how much a transfer would save you.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your balance and APR. We will run the numbers in seconds.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/debt-consolidation" className="pill pill-ghost">
              Consolidation loans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
