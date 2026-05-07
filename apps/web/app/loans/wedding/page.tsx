import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Wedding Loans 2026: Honest Guide to Financing a Wedding | Fintiex",
  description:
    "Wedding loan options compared honestly. Picks: SoFi, LightStream, Upstart. We do not recommend debt for a wedding. Here is the math if you decide to anyway.",
  alternates: { canonical: "/loans/wedding" },
};

interface Pick {
  rank: number;
  lender: string;
  brand: string;
  apr: string;
  loanAmount: string;
  term: string;
  highlight: string;
  caveat: string;
  bestFor: string;
}

const picks: Pick[] = [
  {
    rank: 1,
    lender: "SoFi",
    brand: "sofi-loan",
    apr: "8.99% to 25.81%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 7 years",
    highlight: "No fees of any kind. Unemployment protection. Joint applications allowed (your future spouse can co-apply if their credit is stronger).",
    caveat: "Direct deposit setup required to unlock the lowest rate tier.",
    bestFor: "Excellent credit, large weddings ($25K+), couples applying jointly.",
  },
  {
    rank: 2,
    lender: "LightStream",
    brand: "lightstream",
    apr: "8.49% to 25.49%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 12 years",
    highlight: "Lowest advertised wedding loan APR. Same-day funding available. Long terms (up to 12 years) for borrowers who need to spread payments thin.",
    caveat: "No prequalification (rate quote requires a hard pull). Excellent credit and stable income required for the floor rate. 12-year terms cost much more in lifetime interest.",
    bestFor: "Excellent credit, lowest possible rate, fast funding.",
  },
  {
    rank: 3,
    lender: "Upstart",
    brand: "upstart",
    apr: "7.80% to 35.99%",
    loanAmount: "$1,000 to $50,000",
    term: "3 or 5 years",
    highlight: "AI-driven underwriting weighs education and employment. Approves applicants traditional lenders reject. Soft-pull prequalification.",
    caveat: "Origination fee 0% to 12% deducted at funding. Higher fees concentrate in lower credit tiers.",
    bestFor: "Fair credit, smaller loan amounts, recent grads with thin credit files.",
  },
];

const honestTake = [
  {
    title: "Average wedding cost is now over $35,000",
    detail: "The Knot's most recent survey puts the average US wedding at $35,000 to $40,000. Half of that is venue and catering. Couples increasingly start their marriage with debt for a single day, then carry it for 5+ years.",
  },
  {
    title: "Most couples regret going into debt for the wedding",
    detail: "Survey data from financial services firms consistently shows that couples who borrowed for their wedding report higher relationship stress in years 1 and 2. Debt is the leading source of marital conflict according to multiple studies. The day was great; the math was not.",
  },
  {
    title: "Smaller weddings correlate with longer marriages",
    detail: "Research from Emory University (Francis-Tan and Mialon, 2014) found that wedding spending and marriage duration are inversely correlated. Couples who spent $1,000 or less were less likely to divorce than couples who spent $20,000+. Causation is debatable, but the correlation is real.",
  },
  {
    title: "Cheaper alternatives exist and look great in photos",
    detail: "Off-peak dates (Friday, Sunday, off-season) cut venue costs 20% to 40%. Restaurant buyouts cost less than dedicated venues. House weddings and elopements followed by a casual reception can drop the budget below $5,000 with no loss of meaning. The internet is full of beautiful $5K weddings.",
  },
];

const ifYouMustBorrow = [
  {
    title: "Borrow only the gap, not the whole wedding",
    detail: "If your savings cover $20K of a $30K wedding, borrow $10K, not $30K. Most couples borrow more than they need because lenders pre-approve them for higher amounts. Discipline saves thousands.",
  },
  {
    title: "Pick a 3-year term, not 5 or 7",
    detail: "A $15K loan at 12% APR costs $2,950 over 3 years and $5,070 over 5 years. The longer term lowers the monthly payment by $166 but costs $2,120 extra. If you cannot afford the 3-year payment, the wedding is too expensive for your situation.",
  },
  {
    title: "Apply jointly if it improves the rate",
    detail: "If your future spouse has stronger credit, applying jointly with SoFi or LendingClub typically lowers the rate by 1 to 3 percentage points. The legal trade-off: both of you are equally responsible for the debt, and a divorce does not split it cleanly.",
  },
  {
    title: "Avoid 0% APR cards unless you can pay off in full inside the promo",
    detail: "Wedding-purpose 0% APR cards exist (Wells Fargo Reflect, Chase Slate Edge) and the math works if you can repay the full balance inside the 18 to 21 month promo. If you cannot, the back-rate APR (often 22% to 28%) is much worse than a personal loan. Be honest with yourself about your repayment timeline.",
  },
  {
    title: "Build a $5K emergency fund before the wedding",
    detail: "Going into a marriage with debt and no savings is the worst possible setup. Even if you have to scale back the wedding, build the emergency fund first. The CFPB recommends 3 to 6 months of expenses; for newlyweds, $5K is the minimum buffer to handle car repairs, medical surprises, and job changes.",
  },
];

const cheapWedding = [
  { tactic: "Friday or Sunday wedding", saves: "20% to 30% off venue and vendor costs" },
  { tactic: "Off-season (January-March, July-August)", saves: "15% to 25% off venue and vendor costs" },
  { tactic: "Restaurant buyout instead of dedicated venue", saves: "$5,000 to $15,000" },
  { tactic: "Buffet or food trucks instead of plated dinner", saves: "$30 to $80 per guest" },
  { tactic: "Smaller guest list (50 vs 150)", saves: "$10,000 to $25,000" },
  { tactic: "Skip the open bar (beer/wine only)", saves: "$2,000 to $8,000" },
  { tactic: "DJ instead of live band", saves: "$2,000 to $5,000" },
  { tactic: "Digital invitations and signage", saves: "$500 to $2,000" },
];

const faqItems: FAQItem[] = [
  {
    question: "Should I take a loan to pay for my wedding?",
    answer: "Honestly, almost never. Wedding debt is one of the most common regrets in young marriages, and it is the form of debt most strongly correlated with marital conflict. If you absolutely must borrow, borrow the smallest amount possible, take the shortest term you can afford, and have a written payoff plan before you book any vendors. Better path: scale the wedding to fit your savings.",
  },
  {
    question: "Personal loan vs credit card for wedding expenses?",
    answer: "A personal loan offers a fixed rate, fixed term, and definite payoff date. A credit card with 0% APR promotion can be cheaper if you repay inside 18 to 21 months. For balances under $10K and a clear payoff plan, the 0% card wins. For balances over $15K or repayment over 2 years, the personal loan wins because the rate is locked. Run both in our debt payoff calculator before deciding.",
  },
  {
    question: "Can I get a wedding loan with fair credit?",
    answer: "Yes, but expect a higher APR. Upstart, Best Egg, and LendingClub approve fair-credit borrowers (FICO 580 to 669) at APRs between 15% and 30%. At those rates, the math gets ugly fast: a $20K loan at 22% APR over 5 years costs $33,000 in total payments. Honest advice: if your credit is fair and your savings are thin, a smaller wedding is the right answer.",
  },
  {
    question: "Should I apply jointly with my future spouse?",
    answer: "Yes, if their credit and income are stronger than yours. Joint applications can lower the rate by 1 to 3 percentage points and increase the approved loan amount. The trade-off: both of you are equally responsible for the debt. If you separate before the loan is paid off, the legal split is messy. SoFi, LendingClub, and Best Egg accept joint applications.",
  },
  {
    question: "What is a reasonable wedding budget?",
    answer: "Personal finance experts (the CFPB does not weigh in directly here, but most fee-only planners agree) recommend keeping the wedding under 5% to 10% of your combined annual income, paid for in cash. For a couple making $80K combined, that is $4,000 to $8,000. The Knot's average of $35K reflects what couples spend, not what is financially wise. Plenty of beautiful, meaningful weddings happen for under $5K.",
  },
  {
    question: "Will applying for a wedding loan hurt my credit before the wedding?",
    answer: "Slightly and temporarily. Prequalification uses a soft pull (no impact). A formal application triggers a hard inquiry, which drops your FICO 2 to 5 points. The drop recovers within 3 to 6 months. If you plan to buy a house together within a year of the wedding, time the loan application carefully; mortgage lenders look closely at recent credit activity.",
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
          { name: "Wedding Loans", href: "/loans/wedding" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> An honest take, not a sales pitch
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Wedding loans: probably skip them.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We are not going to talk you into a wedding loan. Most personal finance research connects wedding debt to higher marital stress and more conflict in the first two years. If you can scale the wedding to fit your savings, do that. If you cannot, here is the honest math, the lenders we trust most, and the cheaper alternatives that look just as good in photos.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run loan math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>

      {/* HONEST TAKE */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="chip chip-violet mb-4">
              <span className="pulse-dot" /> The honest take
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Why most financial planners say skip the wedding loan.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honestTake.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEAPER ALTERNATIVES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">Cheaper alternatives</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Eight ways to cut a wedding budget in half.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Combine 3 or 4 of these and a $35K wedding becomes a $15K wedding without sacrificing meaning.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-7">Tactic</div>
            <div className="col-span-5 text-right">Typical savings</div>
          </div>
          {cheapWedding.map((row, i) => (
            <div
              key={row.tactic}
              className={`grid grid-cols-12 px-6 py-4 items-center text-sm ${
                i === cheapWedding.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-7 font-display font-semibold">{row.tactic}</div>
              <div className="col-span-5 text-right text-mute">{row.saves}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IF YOU MUST BORROW */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">If you decide to borrow</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Five rules to keep wedding debt manageable.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                The goal is to start your marriage with the smallest possible debt and a clear plan to pay it off fast.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ifYouMustBorrow.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">Top 3 picks</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three lenders if you decide to borrow.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              All three offer no fees or low fees, soft-pull prequalification on at least one product, and joint applications.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {picks.map((p) => (
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
                    <span className="chip chip-mute">{p.bestFor}</span>
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
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "Monthly payment by APR and term." },
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare loan options side-by-side." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Personal loans", href: "/loans/personal", detail: "Top general-purpose lenders." },
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
            Common questions about wedding financing.
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
              See the real cost of borrowing for a wedding.
            </h2>
            <p className="text-ink/70 mt-2">Plug in the loan amount and APR. Most couples are surprised by the total.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/personal" className="pill pill-ghost">
              Personal loans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
