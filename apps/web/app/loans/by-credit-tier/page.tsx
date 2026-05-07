import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Personal Loans by Credit Score 2026: Rates by FICO Tier | Fintiex",
  description:
    "Realistic personal loan rates and lenders for every FICO band: excellent (740+), good (670-739), fair (580-669), and poor (below 580). Soft-pull prequalify.",
  alternates: { canonical: "/loans/by-credit-tier" },
};

interface Tier {
  name: string;
  range: string;
  band: "excellent" | "good" | "fair" | "poor";
  intro: string;
  aprRange: string;
  notes: string;
  picks: TierPick[];
}

interface TierPick {
  rank: number;
  lender: string;
  brand: string;
  apr: string;
  loanAmount: string;
  term: string;
  highlight: string;
  caveat: string;
  href: string;
}

const tiers: Tier[] = [
  {
    name: "Excellent credit",
    range: "FICO 740+",
    band: "excellent",
    intro:
      "If your FICO is 740 or higher, you have access to the lowest advertised rates from prime lenders. Expect APRs in the high single digits and zero origination fees on the strongest offers. The decision becomes about features (autopay discounts, joint applications, same-day funding), not rate alone.",
    aprRange: "7.99% to 12%",
    notes: "Soft-pull prequalification is universal at this tier. You can shop 4 to 6 lenders without affecting your score.",
    picks: [
      {
        rank: 1,
        lender: "SoFi",
        brand: "sofi-loan",
        apr: "8.99% to 25.81%",
        loanAmount: "$5,000 to $100,000",
        term: "2 to 7 years",
        highlight: "No fees of any kind, unemployment protection, member benefits including career coaching.",
        caveat: "Direct deposit setup required to unlock the lowest rate tier.",
        href: "/loans/sofi",
      },
      {
        rank: 2,
        lender: "LightStream",
        brand: "lightstream",
        apr: "7.99% to 25.49%",
        loanAmount: "$5,000 to $100,000",
        term: "2 to 12 years",
        highlight: "Lowest advertised APR among major lenders. Rate Beat program matches competitors minus 0.10%.",
        caveat: "Stricter approval. Excellent credit and high income required for the floor rate.",
        href: "/loans/lightstream",
      },
    ],
  },
  {
    name: "Good credit",
    range: "FICO 670 to 739",
    band: "good",
    intro:
      "With a good FICO score, you still qualify for prime lenders, but the rate range widens. Expect APRs in the low to mid teens. Origination fees become more common in this tier (typically 1% to 6% of the loan amount). The CFPB recommends comparing the full APR (not just the interest rate) to capture origination fees in your comparison.",
    aprRange: "10% to 20%",
    notes: "Soft-pull prequalify with 3 to 5 lenders to confirm your real rate before committing.",
    picks: [
      {
        rank: 1,
        lender: "Marcus by Goldman Sachs",
        brand: "marcus-loan",
        apr: "9.99% to 24.99%",
        loanAmount: "$3,500 to $40,000",
        term: "3 to 6 years",
        highlight: "No fees of any kind, including no origination fee. On-time payment reward (defer one payment after 12 on-time).",
        caveat: "No co-applicant option. Single-applicant only.",
        href: "/loans/marcus",
      },
      {
        rank: 2,
        lender: "Discover Personal Loans",
        brand: "discover-loan",
        apr: "7.99% to 24.99%",
        loanAmount: "$2,500 to $40,000",
        term: "3 to 7 years",
        highlight: "No origination fee, no prepayment penalty, 30-day money-back guarantee, same-day decisions.",
        caveat: "Slightly stricter approval than Upstart in this tier.",
        href: "/loans/discover",
      },
      {
        rank: 3,
        lender: "Upstart",
        brand: "upstart",
        apr: "7.80% to 35.99%",
        loanAmount: "$1,000 to $50,000",
        term: "3 or 5 years",
        highlight: "AI-driven model considers education and employment. Approves applicants traditional models reject.",
        caveat: "Origination fee from 0% to 12% deducted at funding.",
        href: "/loans/upstart",
      },
    ],
  },
  {
    name: "Fair credit",
    range: "FICO 580 to 669",
    band: "fair",
    intro:
      "Fair-credit borrowers face the trickiest market. Rates jump significantly compared to good credit, and origination fees become standard. Even so, several specialty lenders price competitively in this band. The Federal Reserve consumer credit data shows that subprime personal loans now average above 22% APR, so a 16% to 20% offer is genuinely competitive at this tier.",
    aprRange: "15% to 30%",
    notes: "Always prequalify. Hard inquiries hurt more in this tier, and offers vary widely between lenders.",
    picks: [
      {
        rank: 1,
        lender: "Best Egg",
        brand: "bestegg",
        apr: "8.99% to 35.99%",
        loanAmount: "$2,000 to $50,000",
        term: "3 to 5 years",
        highlight: "Fast funding (often same business day), strong approval rates for fair credit, secured option to lower rate.",
        caveat: "Origination fee 0.99% to 8.99% depending on your profile.",
        href: "/loans/best-egg",
      },
      {
        rank: 2,
        lender: "LendingClub",
        brand: "lendingclub",
        apr: "9.57% to 35.99%",
        loanAmount: "$1,000 to $40,000",
        term: "2 to 6 years",
        highlight: "Joint applications allowed (boosts approval odds), debt consolidation focus with direct payment to creditors.",
        caveat: "Origination fee 3% to 8% deducted at funding.",
        href: "/loans/lendingclub",
      },
      {
        rank: 3,
        lender: "Upstart",
        brand: "upstart",
        apr: "7.80% to 35.99%",
        loanAmount: "$1,000 to $50,000",
        term: "3 or 5 years",
        highlight: "Approves more fair-credit applicants than traditional lenders thanks to non-FICO factors.",
        caveat: "Higher origination fees common at this credit tier (up to 12%).",
        href: "/loans/upstart",
      },
    ],
  },
  {
    name: "Poor credit",
    range: "FICO below 580",
    band: "poor",
    intro:
      "Poor-credit borrowers should treat any unsecured personal loan with caution. The CFPB warns that APRs in this segment frequently approach the 35.99% legal cap many states impose. Before borrowing, exhaust nonprofit credit counseling (search HUD-approved counselors) and consider secured options. If a personal loan is still the right tool, the lenders below are the most legitimate, lowest-cost options in the segment.",
    aprRange: "20% to 35.99%",
    notes: "Avoid lenders not listed here. Many sub-580 offers come from predatory operators charging triple-digit APRs.",
    picks: [
      {
        rank: 1,
        lender: "Upstart",
        brand: "upstart",
        apr: "7.80% to 35.99%",
        loanAmount: "$1,000 to $50,000",
        term: "3 or 5 years",
        highlight: "One of the few legitimate lenders that approves applicants with FICO scores in the 500s.",
        caveat: "Origination fees can reach 12%. Compare to a credit-builder loan first.",
        href: "/loans/upstart",
      },
      {
        rank: 2,
        lender: "Prosper",
        brand: "prosper",
        apr: "8.99% to 35.99%",
        loanAmount: "$2,000 to $50,000",
        term: "3 or 5 years",
        highlight: "Peer-to-peer model with broader approval criteria. Joint applications allowed.",
        caveat: "Origination fee 1% to 7.99%. Funding typically 1 to 5 business days.",
        href: "/loans/prosper",
      },
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How is my FICO score calculated?",
    answer: "FICO uses five factors: payment history (35%), amounts owed and credit utilization (30%), length of credit history (15%), credit mix (10%), and new credit applications (10%). Paying on time and keeping card balances under 30% of your limit are the two highest-impact actions. The Federal Reserve and CFPB both publish free educational resources at consumerfinance.gov.",
  },
  {
    question: "Will checking my rate affect my credit score?",
    answer: "Prequalification (a soft pull) does not affect your score. Every lender on this page offers soft-pull prequalification. A formal loan application triggers a hard inquiry, which typically drops your score 2 to 5 points. Multiple hard inquiries within 14 to 45 days are usually counted as one by FICO scoring models, so cluster your applications.",
  },
  {
    question: "Why do APRs vary so much within the same FICO tier?",
    answer: "Lenders consider income, debt-to-income ratio, employment, and even education in addition to FICO. Two applicants with the same 720 FICO can receive offers 5 percentage points apart based on these factors. The only way to know your real rate is to prequalify. Never assume the headline rate applies to you.",
  },
  {
    question: "What is an origination fee and how does it work?",
    answer: "An origination fee is a one-time charge deducted from your loan proceeds at funding. A $10,000 loan with a 5% origination fee deposits $9,500 in your bank account, but you still owe $10,000. The fee is included in the APR calculation, which is why APR is the right comparison metric. SoFi, Marcus, Discover, and LightStream charge no origination fees.",
  },
  {
    question: "Can I improve my FICO score before applying?",
    answer: "Yes. The two fastest moves: pay down credit card balances to under 30% utilization (most issuers report monthly), and dispute any errors on your credit report at annualcreditreport.com. Both can lift your score within 30 to 60 days. Avoid opening new accounts in the 60 days before applying for a loan, since hard inquiries and average account age both pull scores down temporarily.",
  },
  {
    question: "Is a personal loan better than a balance transfer for credit card debt?",
    answer: "It depends on the size and repayment timeline. A 0% balance transfer card wins for $5,000 to $10,000 of debt you can pay off in 18 to 21 months. A personal loan wins for larger balances or repayment periods over 2 years, since it provides a fixed rate, fixed payment, and a definite payoff date. The CFPB has a debt-payoff comparison tool that runs both scenarios.",
  },
];

const bandStyles: Record<Tier["band"], string> = {
  excellent: "chip-lime",
  good: "chip-violet",
  fair: "chip-mute",
  poor: "chip-mute",
};

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Personal Loans", href: "/loans" },
          { name: "By Credit Tier", href: "/loans/by-credit-tier" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Realistic rates by FICO band
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Personal loan rates that match your actual credit.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Lender ads love to quote the floor rate (the one almost nobody gets). We split the market by FICO band so you see real APR ranges, real lenders, and real approval odds for your actual score. Use soft-pull prequalification before formal applications. The CFPB confirms rate-shopping does not hurt your credit if done within a 14- to 45-day window.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run loan payoff math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans" className="pill pill-ghost">
              All loan types
            </Link>
          </div>
        </div>
      </section>

      {/* TIER SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Rate ranges by tier</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((t) => (
              <div key={t.name} className="card p-5">
                <div className="text-xs text-mute mb-2">{t.name} ({t.range})</div>
                <div className="font-display font-extrabold text-2xl md:text-3xl tabular tracking-tight mb-2">
                  {t.aprRange}
                </div>
                <div className="text-xs text-mute mt-2">Typical APR</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER SECTIONS */}
      {tiers.map((tier, idx) => (
        <section
          key={tier.name}
          className={idx % 2 === 0 ? "max-w-(--max-w-page) mx-auto px-6 py-20" : "bg-bg-soft/60 border-y border-line"}
        >
          <div className={idx % 2 === 0 ? "" : "max-w-(--max-w-page) mx-auto px-6 py-20"}>
            <div className="grid grid-cols-12 gap-8 mb-10">
              <div className="col-span-12 md:col-span-7">
                <span className={`chip ${bandStyles[tier.band]} mb-4`}>
                  <span className="pulse-dot" /> {tier.range}
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
                  {tier.name}
                </h2>
                <p className="text-mute leading-relaxed mb-3">{tier.intro}</p>
                <p className="text-sm text-ink/80 leading-relaxed">
                  <span className="font-semibold">Tip: </span>
                  {tier.notes}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
                <div className="card p-6 w-full md:max-w-sm">
                  <div className="text-xs font-mono text-mute uppercase tracking-wider mb-2">Typical APR range</div>
                  <div className="font-display font-extrabold text-3xl tabular tracking-tight mb-3">{tier.aprRange}</div>
                  <div className="text-xs text-mute leading-relaxed">
                    Actual rates depend on income, debt-to-income ratio, and employment in addition to FICO.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {tier.picks.map((p) => (
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
      ))}

      {/* HOW WE PICKED */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How we picked</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Real APRs, real approval odds, real fees.
            </h2>
            <p className="text-mute leading-relaxed">
              Three filters separate legitimate lenders from operators that prey on lower credit tiers.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">CFPB-licensed and FDIC-affiliated only</h3>
              <p className="text-mute">
                Every lender on this page is registered with the CFPB or originates loans through a chartered bank. We exclude tribal lenders, payday lenders, and any operator with active CFPB enforcement actions. The CFPB consumer complaint database is a free tool for verifying any lender before you sign.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">APR caps and origination fee disclosure</h3>
              <p className="text-mute">
                Personal loan APRs are legally capped at 35.99% in most states. We exclude lenders whose APRs cluster near that ceiling for typical applicants. We also weight origination fees, which are deducted from loan proceeds and effectively raise your APR. Marcus, Discover, SoFi, and LightStream charge no origination fees, which is why they top the higher tiers.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Soft-pull prequalification</h3>
              <p className="text-mute">
                Every lender we recommend offers soft-pull prequalification, which means you can see your actual rate without affecting your credit. The Federal Reserve and CFPB both endorse rate-shopping. Skip any lender that requires a hard inquiry just to give you a quote.
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
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Personal loan calculator", href: "/calculators/personal-loan-payoff", detail: "See your monthly payment by APR and term." },
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare a loan to a balance transfer." },
              { label: "Debt consolidation", href: "/loans/debt-consolidation", detail: "Roll high-rate cards into one loan." },
              { label: "Balance transfer cards", href: "/credit-cards/balance-transfer", detail: "Sometimes a 0% card beats a loan." },
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
            Common questions about credit tiers and personal loans.
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
              See your real monthly payment by tier.
            </h2>
            <p className="text-ink/70 mt-2">Plug in the loan size and APR. We calculate the rest.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
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
