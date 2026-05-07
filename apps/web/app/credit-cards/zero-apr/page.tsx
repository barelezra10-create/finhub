import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best 0% Intro APR Credit Cards 2026: Up to 21 Months Interest-Free | Fintiex",
  description:
    "Float a major purchase interest-free for up to 21 months. We compare the strongest 0% APR cards on intro length, post-promo APR, and ongoing rewards.",
  alternates: { canonical: "/credit-cards/zero-apr" },
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
  postIntroAPR: string;
  href: string;
}

const picks: CardPick[] = [
  {
    rank: 1,
    name: "Wells Fargo Reflect",
    brand: "wells-reflect",
    tag: "Longest 0% offer",
    perk: "21 months 0% intro APR on purchases",
    detail: "21 months of 0% intro APR on both purchases and qualifying balance transfers, the longest combined intro window on the market.",
    bestFor: "Anyone planning a large purchase they need 18+ months to pay off without interest.",
    introPeriod: "21 months",
    postIntroAPR: "17.24% to 28.99% variable",
    href: "/credit-cards/wells-fargo-reflect",
  },
  {
    rank: 2,
    name: "Wells Fargo Active Cash",
    brand: "wells-active-cash",
    tag: "Best 0% with rewards",
    perk: "12 months 0% APR plus 2% cash back",
    detail: "12 months 0% intro APR on purchases and balance transfers, then earn an unlimited flat 2% cash back forever. The best dual-purpose card on this list.",
    bestFor: "Cardholders who want a 12-month interest-free runway and a strong rewards card afterwards.",
    introPeriod: "12 months",
    postIntroAPR: "20.24% to 29.99% variable",
    href: "/credit-cards/wells-fargo-active-cash",
  },
  {
    rank: 3,
    name: "Chase Freedom Unlimited",
    brand: "Chase Freedom Unlimited",
    tag: "Best for everyday spend",
    perk: "15 months 0% APR plus tiered cash back",
    detail: "15 months 0% intro APR on purchases. Earn 5% on travel through Chase, 3% on dining and drugstores, and 1.5% everywhere else.",
    bestFor: "Households who want strong everyday rewards and a moderate intro window.",
    introPeriod: "15 months",
    postIntroAPR: "20.49% to 29.24% variable",
    href: "/credit-cards/chase-freedom-unlimited",
  },
  {
    rank: 4,
    name: "Discover it Cash Back",
    brand: "discover-it-cash-back",
    tag: "Best with bonus match",
    perk: "15 months 0% plus first-year cashback match",
    detail: "15 months 0% intro APR on purchases. Discover doubles all cash back you earn in your first year, including the 5% rotating categories.",
    bestFor: "First-year cardholders willing to track quarterly categories for outsized rewards.",
    introPeriod: "15 months",
    postIntroAPR: "18.24% to 27.24% variable",
    href: "/credit-cards/discover-it",
  },
  {
    rank: 5,
    name: "Citi Diamond Preferred",
    brand: "citi-diamond-preferred",
    tag: "Best dual intro card",
    perk: "12 months 0% on purchases, 21 on transfers",
    detail: "12 months 0% intro APR on purchases plus a separate 21 months 0% on balance transfers. No rewards program, so it works best as a debt-management tool.",
    bestFor: "Borrowers who need both a long transfer window and a year of interest-free new purchases.",
    introPeriod: "12 months on purchases",
    postIntroAPR: "18.24% to 28.99% variable",
    href: "/credit-cards/citi-diamond-preferred",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Is 0% APR really 0% interest?",
    answer: "Yes, on these cards. The 0% intro APR means no interest accrues during the promotional window, period. You only pay interest on any balance remaining after the intro period ends, calculated going forward at the standard variable APR. This is different from deferred interest store cards, which charge all back-interest if you are not paid in full by the deadline.",
  },
  {
    question: "Can I still earn rewards on a 0% APR card?",
    answer: "Yes, on cards that offer rewards. The Wells Fargo Active Cash earns 2% cash back during the 0% intro period. The Chase Freedom Unlimited earns its full tiered rewards. The Citi Diamond Preferred has no rewards program, which is its only weakness. Earning rewards while paying 0% interest is one of the strongest scenarios in credit cards.",
  },
  {
    question: "What credit score do I need for a 0% APR card?",
    answer: "Most top 0% APR cards require a FICO score of 700 or higher. Wells Fargo and Citi tend to be more forgiving in the upper 600s if your income and credit history are strong. Discover it is sometimes approved for scores around 670. Use prequalification (a soft pull) before applying to avoid wasted hard inquiries.",
  },
  {
    question: "How do I make sure I pay off the balance before the 0% expires?",
    answer: "Calculate the required monthly payment: divide the total purchase by the number of intro months. A $4,200 purchase on a 21-month card needs $200 per month to clear it interest-free. Set up an autopay for that amount or higher, and do not add new charges that you cannot also pay off in the same window.",
  },
  {
    question: "What happens to my remaining balance after the intro period?",
    answer: "Whatever balance you carry past the intro window starts accruing interest at the standard variable APR (typically 17% to 30% depending on the card and your credit). Critically, this is regular interest, not retroactive deferred interest. The Consumer Financial Protection Bureau warns consumers to confirm this distinction before signing up, since it makes a major difference if you are not fully paid off.",
  },
  {
    question: "Should I open a 0% APR card if I do not have a big purchase planned?",
    answer: "Probably not. Opening a card adds a hard inquiry and lowers your average account age. The benefit is the 0% window, which only matters if you actually use it. Consider it when you have a planned expense between $1,000 and $20,000 you cannot pay in cash but can pay off in 12 to 21 months.",
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
          { name: "0% APR", href: "/credit-cards/zero-apr" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Up to 21 months interest-free
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Float the purchase. Pay zero interest.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A 0% intro APR card is the cheapest way to spread a $1,000 to $20,000 purchase over 12 to 21 months. The five cards below give you the longest interest-free runways, with several still earning rewards on the same purchases. The math only works if you pay off the balance before the intro ends, so treat the window like a deadline.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Plan my payoff
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/balance-transfer" className="pill pill-ghost">
              Balance transfer picks
            </Link>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">0% APR snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Longest 0% offer", value: "21 mo", caption: "Wells Fargo Reflect" },
              { label: "Best 0% with rewards", value: "12 mo", caption: "Wells Fargo Active Cash + 2% back" },
              { label: "Cards with no fee", value: "5 / 5", caption: "Every pick is $0 annual fee" },
              { label: "Avg post-intro APR", value: "21%", caption: "Plan to be paid off by then" },
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
              Five 0% APR cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked on intro length, ongoing rewards, post-promo APR, and quality of approval odds for typical applicants.
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
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Post-intro APR</div>
                    <div className="text-mute text-sm">{p.postIntroAPR}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How it works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                A 0% APR card is a free loan. Here is the small print.
              </h2>
              <p className="text-mute leading-relaxed">
                Three things that determine whether you actually save money or just delay paying interest.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Calculate the required payment first</h3>
                <p className="text-mute">
                  Divide your purchase by the number of intro months. A $5,000 home appliance on a 15-month card requires $334 per month to clear interest-free. A 21-month card drops that to $239. Pick the card whose required payment fits comfortably in your budget. The Federal Reserve consumer credit data shows that most 0% promo defaulters made only the minimum payment, which is usually 1 to 2% of the balance.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">0% APR is true 0%, not deferred</h3>
                <p className="text-mute">
                  Every card on this list charges 0% interest during the intro period and only standard interest after. None use deferred interest, which would charge all back-interest if you are not fully paid off. Most store-branded cards (Best Buy, Home Depot, Synchrony-issued retail cards) do use deferred interest. Read the disclosures before assuming any retail card matches the cards above.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Avoid late payments at all costs</h3>
                <p className="text-mute">
                  A single late payment can void your 0% intro APR on most cards, dropping you immediately to the standard rate of 17% to 30%. Set up autopay for at least the minimum on the day the statement closes. Schedule a higher recurring payment on the same day to actually pay down the balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Who benefits</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three perfect-fit scenarios for a 0% APR card.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            A 0% APR card is a tool for known, planned expenses. It is not a way to extend a lifestyle you cannot afford. The CFPB recommends only using promotional financing when you have a clear repayment plan that fits within the intro window.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Major appliance or repair</h3>
            <p className="text-sm text-mute leading-relaxed">
              A $4,000 HVAC replacement on a 21-month 0% card costs $191 per month, the same as a 0% manufacturer financing offer with no risk of deferred interest.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Wedding or one-time event</h3>
            <p className="text-sm text-mute leading-relaxed">
              Spreading a $10,000 expense over 21 months turns a daunting bill into a $476 monthly payment. Just confirm income stability for the full 21 months before committing.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Tax bill smoothing</h3>
            <p className="text-sm text-mute leading-relaxed">
              The IRS charges convenience fees of 1.85% to 1.99% on credit card tax payments. A 0% APR card can be cheaper than IRS installment plans (which charge interest plus fees) if paid off quickly.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Plan it out, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Map a path to zero by the deadline." },
              { label: "Personal loan calculator", href: "/calculators/personal-loan-payoff", detail: "Compare a 0% card to a fixed-term loan." },
              { label: "Balance transfer cards", href: "/credit-cards/balance-transfer", detail: "Move existing high-rate balances to 0%." },
              { label: "No-fee cash back", href: "/credit-cards/no-fee", detail: "Strong rewards with $0 yearly cost." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about 0% APR cards.</h2>
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
              See the exact monthly payment to clear the 0% by the deadline.
            </h2>
            <p className="text-ink/70 mt-2">Plug in the purchase amount and intro period. Get your number.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/balance-transfer" className="pill pill-ghost">
              Transfer existing debt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
