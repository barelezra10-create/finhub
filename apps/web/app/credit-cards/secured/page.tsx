import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Secured Credit Cards 2026: Build Credit Fast, Get Refunded | Fintiex",
  description:
    "The secured credit cards that actually help you graduate to unsecured. Refundable deposits, real rewards, and clear paths to score 700+. No setup fees on top picks.",
  alternates: { canonical: "/credit-cards/secured" },
};

interface CardPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  perk: string;
  detail: string;
  bestFor: string;
  annualFee: string;
  signupBonus: string;
  href: string;
}

const picks: CardPick[] = [
  {
    rank: 1,
    name: "Discover it Secured",
    brand: "Discover it Secured",
    tag: "Best overall",
    perk: "2% on gas and dining, 1% on everything else",
    detail:
      "The only secured card that pays real rewards on a tiered structure. 2% cash back at gas stations and restaurants on the first $1,000 in combined quarterly purchases. First-year Cashback Match doubles every dollar you earn. Discover reviews accounts at 7 months for graduation to an unsecured card.",
    bestFor: "First-time builders or rebuilders who want rewards while they fix their score.",
    annualFee: "$0",
    signupBonus: "Cashback Match: Discover doubles all cash back earned in your first year",
    href: "#",
  },
  {
    rank: 2,
    name: "Capital One Platinum Secured",
    brand: "Capital One Platinum Secured",
    tag: "Lowest deposit",
    perk: "Deposits as low as $49 for a $200 line",
    detail:
      "Tiered deposits of $49, $99, or $200 unlock a $200 starting credit line. Capital One reviews accounts in as little as 6 months and may upgrade you to an unsecured Quicksilver. No annual fee and no foreign transaction fees.",
    bestFor: "Applicants with very tight cash who still want to start building right now.",
    annualFee: "$0",
    signupBonus: "None, but possible credit line increase after the first 6 months of on-time payments",
    href: "#",
  },
  {
    rank: 3,
    name: "Citi Secured Mastercard",
    brand: "Citi Secured Mastercard",
    tag: "Best for thin file",
    perk: "Reports to all 3 bureaus, no foreign transaction fee",
    detail:
      "$200 minimum deposit with a credit line up to $2,500 depending on what you fund. Reports to Equifax, Experian, and TransUnion every month. No rewards, but no fees beyond a standard APR. Citi Quick Lock and free FICO score access included.",
    bestFor: "People with no credit history who want a simple, no-frills builder.",
    annualFee: "$0",
    signupBonus: "None",
    href: "#",
  },
  {
    rank: 4,
    name: "U.S. Bank Cash+ Secured",
    brand: "U.S. Bank Cash+ Secured",
    tag: "Best rewards",
    perk: "5% on two chosen categories, 2% on one everyday category",
    detail:
      "Same rewards structure as the unsecured Cash+ card: 5% cash back on the first $2,000 in combined quarterly purchases in two categories you pick, and 2% on one everyday category. Deposits start at $300. Account graduation review begins after 12 months.",
    bestFor: "Cash-back lovers who can put up at least $300 and want the most aggressive rewards.",
    annualFee: "$0",
    signupBonus: "None, but rewards stack quickly if you choose categories that match your spend",
    href: "#",
  },
  {
    rank: 5,
    name: "Self Visa Secured Card",
    brand: "Self Visa",
    tag: "Build savings + credit",
    perk: "Card backed by a credit-builder loan, deposit grows your savings",
    detail:
      "Pair the Self credit-builder loan with the Self Visa. Your loan payments are reported as on-time installment credit. Once you have built $100 of equity, you can move that into a secured card deposit. At the end of the loan term, you keep the full balance.",
    bestFor: "Builders who want both a revolving and an installment tradeline reporting at once.",
    annualFee: "$25",
    signupBonus: "None, but the underlying credit-builder loan returns the full deposit at maturity",
    href: "#",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How does a secured credit card actually build credit?",
    answer:
      "A secured card reports your monthly payment activity to the three credit bureaus exactly like an unsecured card. Payment history is 35% of your FICO score, and credit utilization is 30%. Make on-time payments and keep your balance below 30% of the limit, and your score typically rises within 3 to 6 months. The deposit you put down is collateral, not a fee. You get it back when the account closes in good standing or when you graduate to an unsecured card.",
  },
  {
    question: "How much should I put down as a deposit?",
    answer:
      "The minimum is usually $200 to $300, which becomes your credit limit. Deposit more if you can: a $1,000 limit gives you more room to keep utilization low. Capital One Platinum Secured is the exception, allowing a $49 deposit for a $200 line. Whatever you put down is held in a locked savings account until graduation.",
  },
  {
    question: "When can I graduate to an unsecured card?",
    answer:
      "Most issuers review accounts at 6 to 12 months. Discover and Capital One are the most consistent graduators. Make every payment on time, keep your reported balance under 30% of the limit each month, and avoid applying for new credit during this window. When you graduate, the deposit is refunded as a check or statement credit.",
  },
  {
    question: "Will a secured card hurt my credit score?",
    answer:
      "No, it should help. The hard inquiry from the application typically drops your score 2 to 5 points for a few months, but the new tradeline starts adding positive payment history almost immediately. The Consumer Financial Protection Bureau highlights secured cards as one of the most reliable on-ramps for thin-file or recovering borrowers.",
  },
  {
    question: "Can I be denied for a secured card?",
    answer:
      "Yes, but it is rare. Issuers will deny applicants for active bankruptcy, recent charge-offs to that issuer, identity verification problems, or insufficient income. If you are denied, the Self Visa or a credit-builder loan are your next-best options because they do not require traditional underwriting in the same way.",
  },
  {
    question: "Should I close the secured card after I graduate to unsecured?",
    answer:
      "If your account converts in place, your existing tradeline keeps its full age and you do nothing. If you receive a new card number and account, the secured account closes and that history starts aging out of your credit report after 10 years. Either way, do not close it manually before graduation. Closing the account too early loses both your deposit refund timing and the on-time payment history.",
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
          { name: "Secured", href: "/credit-cards/secured" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> 5 picks reviewed weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Secured cards that get you to unsecured fast.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A secured card is the cleanest way to build or rebuild credit. You put down a refundable deposit, the card reports to all three bureaus, and your score climbs with every on-time payment. The picks below all graduate users to unsecured cards, refund deposits, and a few even pay rewards while you build.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Run my numbers
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards" className="pill pill-ghost">
              All categories
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Secured card snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Lowest deposit", value: "$49", caption: "Capital One Platinum Secured" },
              { label: "Top rewards", value: "5%", caption: "U.S. Bank Cash+ Secured (capped)" },
              { label: "Fastest graduation", value: "6 mo", caption: "Discover and Capital One review" },
              { label: "No annual fee", value: "4 / 5", caption: "Only Self Visa charges $25" },
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
              Five secured cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by graduation speed, deposit flexibility, fees, and the rare bonus of real rewards while you build.
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
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Annual fee</div>
                    <div className="font-mono tabular">{p.annualFee}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Signup bonus</div>
                    <div className="text-mute text-sm">{p.signupBonus}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE PICKED */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How we picked</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Graduation speed beats marketing.
              </h2>
              <p className="text-mute leading-relaxed">
                A secured card you keep forever is a failure. The whole point is to move on.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight time-to-graduation above everything else</h3>
                <p className="text-mute">
                  A great secured card is one you do not need a year from now. Discover and Capital One both publish clear paths to unsecured graduation. We rank cards higher when the issuer offers automatic review, refunds the deposit cleanly, and converts the account in place so you keep your tradeline age.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight fees as harshly as on premium cards</h3>
                <p className="text-mute">
                  Annual fees, monthly maintenance fees, and processing fees are common scams aimed at credit builders. Four of our five picks have a $0 annual fee. We exclude any secured card that charges a setup fee or a monthly service fee, no matter how aggressive the marketing.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We test reporting practices, not promises</h3>
                <p className="text-mute">
                  Some secured cards report to only one or two bureaus, which limits how much your score can rise. Every pick above reports to all three (Equifax, Experian, and TransUnion) on a monthly cycle. The Consumer Financial Protection Bureau publishes guidance on credit reporting practices that we cross-check against issuer disclosures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How it works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Deposit, charge, pay, repeat. Then graduate.
            </h2>
            <p className="text-mute leading-relaxed">
              Five steps that turn a secured card into a 700+ score in under a year.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Step 1: Pick a small recurring charge</h3>
              <p className="text-mute">
                Set the secured card to auto-pay one or two recurring bills (a streaming subscription, a phone bill) and nothing else. This keeps utilization low and ensures the card has activity every month, which is what builds payment history.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Step 2: Pay the full statement balance every month</h3>
              <p className="text-mute">
                Set up auto-pay for the full statement balance. This avoids interest entirely and never causes a missed payment. Carrying a balance does not help your score; it just costs you 23% APR.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Step 3: Keep reported utilization under 30%</h3>
              <p className="text-mute">
                Issuers report your balance to the bureaus on the statement closing date, not after you pay. If your limit is $300, keep the reported balance under $90. You can pay before the statement cuts to keep the reported number tiny.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Step 4: Wait. Do nothing else.</h3>
              <p className="text-mute">
                Do not apply for other cards in the first 6 months. Each new application is a hard inquiry that drags your score down temporarily and resets the average age of accounts. Patience here pays.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Step 5: Request graduation at month 7</h3>
              <p className="text-mute">
                After 7 to 12 months of perfect payments, call your issuer or check the app for graduation review. Discover and Capital One often automate this. When approved, your deposit is refunded and you keep your tradeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PITFALLS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Watch out</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Three pitfalls that quietly stall your build.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              Secured cards work, but only when used the way they were designed. Most builders who plateau at the 12-month mark made one of the three mistakes below. The Federal Reserve and Consumer Financial Protection Bureau both publish data showing on-time payments are the largest single driver of score growth.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Carrying a balance to seem active</h3>
              <p className="text-sm text-mute leading-relaxed">
                You do not need to carry a balance to build credit. The issuer reports your statement balance to the bureaus, and a $5 balance reports identically to a $300 balance for the purposes of payment history. Pay in full every month.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Maxing the limit even briefly</h3>
              <p className="text-sm text-mute leading-relaxed">
                A $200 limit hits 100% utilization with one Costco run. High utilization in any single month tanks your score by 30 to 50 points. Pay down mid-cycle if needed, or move the spending to another card.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Closing the card after graduation</h3>
              <p className="text-sm text-mute leading-relaxed">
                Closing your oldest credit account drops your average account age and removes a tradeline. Even after graduation, keep the card open with a small recurring charge. The longer the history, the better the score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-8">
          <span className="chip chip-mute mb-4">Tools and related</span>
          <h2 className="font-display font-extrabold text-3xl tracking-tight">Once you graduate, here is what comes next.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Cash-back cards", href: "/credit-cards/cash-back", detail: "Strong rewards once you cross 700." },
            { label: "Student cards", href: "/credit-cards/student", detail: "Lower-bar rewards for college builders." },
            { label: "No annual fee", href: "/credit-cards/no-fee", detail: "Strong rewards with $0 yearly cost." },
            { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Knock out balances faster." },
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
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about secured cards.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
                <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See how fast a clean secured card lifts your score.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your starting score. We will model the climb.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/student" className="pill pill-ghost">
              Student picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
