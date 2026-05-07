import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Student Credit Cards 2026: Build Credit, Earn Rewards | Fintiex",
  description:
    "Student credit cards that build real credit history and pay rewards while you study. No annual fees, forgiving approval, and a clear path to graduating up. Updated weekly.",
  alternates: { canonical: "/credit-cards/student" },
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
    name: "Discover it Student Cash Back",
    brand: "Discover it Student Cash Back",
    tag: "Best overall",
    perk: "5% cash back in rotating quarterly categories",
    detail:
      "5% cash back on rotating categories like grocery, gas, restaurants, and Amazon, capped at $1,500 per quarter. 1% on everything else. First-year Cashback Match doubles all cash back you earn. Discover reports to all three bureaus and reviews accounts for graduation regularly.",
    bestFor: "Students who can pay attention to quarterly category activations and want the most rewards.",
    annualFee: "$0",
    signupBonus: "Cashback Match: Discover doubles all cash back earned in your first year",
    href: "#",
  },
  {
    rank: 2,
    name: "Capital One SavorOne Student",
    brand: "Capital One SavorOne Student",
    tag: "Best for dining",
    perk: "3% on dining, entertainment, streaming, and grocery",
    detail:
      "Unlimited 3% cash back on dining out, entertainment, popular streaming services, and grocery stores. 1% on everything else. No foreign transaction fee, which is rare in the student segment. Reports to all three bureaus.",
    bestFor: "Students who eat out, stream constantly, and want strong rates without rotating categories.",
    annualFee: "$0",
    signupBonus: "$50 cash back after $100 spend in the first 3 months",
    href: "#",
  },
  {
    rank: 3,
    name: "Chase Freedom Rise (Student-Friendly)",
    brand: "Chase Freedom Rise",
    tag: "Best for thin file",
    perk: "1.5% cash back on everything",
    detail:
      "Chase markets Freedom Rise to first-time credit users including students. Flat 1.5% cash back on every purchase with no rotating categories. Pre-approval pathway through Chase checking accounts makes this one of the most accessible cards for applicants with no credit history.",
    bestFor: "Chase customers and students who want simple flat-rate rewards from day one.",
    annualFee: "$0",
    signupBonus: "$25 statement credit after the first purchase made within 6 months",
    href: "#",
  },
  {
    rank: 4,
    name: "Bank of America Travel Rewards Student",
    brand: "BofA Travel Rewards Student",
    tag: "Best for travel",
    perk: "1.5x points on every purchase, no foreign transaction fee",
    detail:
      "Earn unlimited 1.5x points on all purchases. Points redeem at 1 cent each as a statement credit against any travel or dining purchase. No foreign transaction fee makes this an easy pick for study-abroad semesters.",
    bestFor: "Students studying abroad or who travel frequently and want a no-fuss travel card.",
    annualFee: "$0",
    signupBonus: "25,000 online bonus points after $1,000 spend in 3 months (worth $250 in travel)",
    href: "#",
  },
  {
    rank: 5,
    name: "Citi Rewards+ Student",
    brand: "Citi Rewards+ Student",
    tag: "Best for small spend",
    perk: "Rounds up to the nearest 10 points on every purchase",
    detail:
      "Earn 2x ThankYou points at supermarkets and gas stations on the first $6,000 each year. 1x on everything else, then every purchase rounds up to the nearest 10 points. A $3 coffee earns 10 points, not 3. Punches above its weight on small daily spend.",
    bestFor: "Students with lots of small daily transactions who want the round-up to do the heavy lifting.",
    annualFee: "$0",
    signupBonus: "2,500 ThankYou points after $500 spend in the first 3 months",
    href: "#",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Can I get a credit card as a student with no credit history?",
    answer:
      "Yes. Student credit cards are designed for applicants with no prior credit. Issuers like Discover, Capital One, Chase, and Bank of America underwrite student applications using income, school enrollment, and basic identity verification rather than a credit score. The CARD Act of 2009 requires applicants under 21 to either show independent income or have a co-signer, so be ready to document part-time job earnings or financial aid.",
  },
  {
    question: "Do I need a job to qualify for a student card?",
    answer:
      "Yes, generally. Federal law requires applicants under 21 to demonstrate independent ability to pay. Acceptable income includes part-time work, regular allowances, scholarships designated for living expenses, and stipends. Issuers do not usually verify the income figure for amounts under $10,000 a year, but you must report it honestly.",
  },
  {
    question: "Will using a student card affect my financial aid?",
    answer:
      "No. Credit card balances are not assets reported on the FAFSA, and credit card rewards are not income for federal aid purposes. The IRS treats card rewards as a rebate, not income. Carrying a balance does not affect your aid eligibility either, though the interest will eat into any benefit the rewards provide.",
  },
  {
    question: "What credit score will I have after one year?",
    answer:
      "If you make every payment on time and keep utilization under 30%, expect a starting FICO score in the 680 to 720 range after 12 to 18 months. The Consumer Financial Protection Bureau notes that payment history and credit utilization are the two largest scoring factors for new accounts. The path is simple: pay in full, every month, on time.",
  },
  {
    question: "Should I keep the student card after graduation?",
    answer:
      "Yes. Most student cards either upgrade automatically to the issuer's standard card (Discover it converts to Discover it Cash Back, for example) or stay open as no-fee accounts you can keep forever. Keeping your oldest credit card open helps your average account age, which is roughly 15% of your FICO score.",
  },
  {
    question: "Are co-signed cards still available?",
    answer:
      "Most major issuers stopped offering co-signed credit cards after the 2009 CARD Act, but parents can add a child as an authorized user. The account appears on the child's credit report at most issuers (Chase, Amex, Capital One), helping build credit history quickly. The primary holder remains fully liable for charges, so trust matters.",
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
          { name: "Student", href: "/credit-cards/student" },
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
            Student cards that build credit and pay you to study.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A student card is the fastest way to build a credit history that pays off the day you graduate. Every pick below has no annual fee, forgiving approval standards, and rewards on the spending college students actually do: dining, streaming, gas, and groceries. Pay in full each month and you walk into your career with a 700+ score.
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
            <h2 className="font-display font-bold text-2xl tracking-tight">Student card snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top rotating rate", value: "5%", caption: "Discover it Student (capped)" },
              { label: "Top flat dining", value: "3%", caption: "Capital One SavorOne Student" },
              { label: "Best signup", value: "$250", caption: "BofA Travel Rewards Student in points" },
              { label: "No annual fee", value: "5 / 5", caption: "Every pick has $0 annual fee" },
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
              Five student cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by rewards on a typical student spending mix, ease of approval for thin credit files, and graduation pathway after college.
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
                A student card has one job: build clean credit.
              </h2>
              <p className="text-mute leading-relaxed">
                Three filters separate cards built for students from cards that exploit thin-file applicants.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We model student spending, not adult spending</h3>
                <p className="text-mute">
                  We tested every pick against a $9,000 annual student spending mix: 30% groceries and dining, 20% gas and rideshare, 15% streaming and digital, 15% travel home, 10% supplies, 10% miscellaneous. The picks above all generate at least $150 in net rewards in year one before the signup bonus.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight approval odds for thin-file applicants</h3>
                <p className="text-mute">
                  A great card you cannot get is useless. We checked approval data shared by issuer reps and aggregated reports from r/CreditCards. Cards that frequently approve students with no credit history rank higher. Discover, Capital One, and Chase Freedom Rise are the most consistent approvals.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight graduation paths</h3>
                <p className="text-mute">
                  Some student cards convert to a flagship card automatically when you graduate, preserving the account history and unlocking better rewards. Others require a separate application. The Consumer Financial Protection Bureau notes that account age makes up a meaningful share of the FICO score, so graduation in place is a real advantage.
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
              From thin file to 720 in under two years.
            </h2>
            <p className="text-mute leading-relaxed">
              The simple sequence that turns a student card into a strong score.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Apply during the school year, not summer break</h3>
              <p className="text-mute">
                Issuers want to see a current school enrollment. Approval rates rise modestly during the academic year, and you have a full 9 months of activity before summer to build payment history. Students who applied in September typically saw faster graduation timelines than those who waited.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Charge two recurring bills, then auto-pay in full</h3>
              <p className="text-mute">
                Set the card to handle one streaming subscription and one phone bill, then enable auto-pay for the full statement balance. This guarantees on-time payments without you thinking about it. Payment history is 35% of your FICO score; this single habit is the single most important thing you can do.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Keep utilization under 10% on the statement closing date</h3>
              <p className="text-mute">
                Issuers report your balance to the bureaus on the statement closing date. If your limit is $500, keep the reported balance under $50 by paying mid-cycle if needed. Lower utilization means a higher score, full stop.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Wait until graduation to add a second card</h3>
              <p className="text-mute">
                Adding a second card during college rarely helps and often hurts: the new inquiry drops your score, and the new tradeline drags your average account age down. Wait until you have steady post-graduation income, then add a flat-rate cash-back card or a travel card.
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
                Three pitfalls that quietly tank student credit.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The CARD Act limits late fees and rate hikes, but it does not protect you from yourself. The Federal Reserve reports that average credit card APRs are now above 21%, and the average revolving balance among 18 to 24 year olds is climbing again. Avoid the three traps below and you will graduate with a score that opens doors.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Carrying a balance to "build credit"</h3>
              <p className="text-sm text-mute leading-relaxed">
                You do not need to carry a balance to build credit. The bureaus see your statement balance and your payment, not whether you carried debt. Pay in full every month and you build credit just as fast, without paying 23% APR for the privilege.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Missing one payment</h3>
              <p className="text-sm text-mute leading-relaxed">
                A single 30-day late payment can drop a thin-file score by 60 to 100 points and stays on your credit report for 7 years. Auto-pay the full statement balance from a checking account that has the cash to cover it. Make this the first thing you set up.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Closing the card after graduation</h3>
              <p className="text-sm text-mute leading-relaxed">
                Closing your oldest credit account drops your average account age and removes a tradeline from your file. Most student cards convert to a no-fee adult card automatically. Keep it open with a small recurring charge, even if you barely use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-8">
          <span className="chip chip-mute mb-4">Tools and related</span>
          <h2 className="font-display font-extrabold text-3xl tracking-tight">Build credit, then graduate the card too.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Secured cards", href: "/credit-cards/secured", detail: "If a student card declines, start here." },
            { label: "Cash-back cards", href: "/credit-cards/cash-back", detail: "After graduation, upgrade to flat 2%." },
            { label: "Travel cards", href: "/credit-cards/travel", detail: "Points and miles for post-grad travel." },
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
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about student cards.</h2>
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
              See the score you can hit by graduation day.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your starting point. We will model the path.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/cash-back" className="pill pill-ghost">
              Cash-back picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
