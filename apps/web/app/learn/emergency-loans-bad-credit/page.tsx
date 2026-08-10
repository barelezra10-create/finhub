import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Emergency Loans for Bad Credit: Real Options, Ranked by Cost",
  description:
    "Need emergency cash with bad credit? Every real option ranked from cheapest to most expensive: credit union PALs, local assistance, employer advances, secured loans, subprime lenders, and why payday loans come last.",
  alternates: { canonical: "/learn/emergency-loans-bad-credit" },
};

const faqs = [
  {
    question: "Can I get an emergency loan with a credit score under 580?",
    answer:
      "Often yes, but not from every lender and not cheaply. Credit union payday alternative loans (PALs) and share-secured loans are based mostly on income and membership, not score. Some online installment lenders approve scores in the 500s at APRs of roughly 30 to 36%, and a few charge more. Adding a co-signer or collateral improves both approval odds and rate. What you should not expect with a sub-580 score is a mainstream personal loan at a single-digit rate.",
  },
  {
    question: "What is the fastest way to get emergency money with bad credit?",
    answer:
      "Online subprime installment lenders and cash advance apps are usually fastest, with same-day or next-day funding, but they are also among the most expensive legitimate options. Credit union PALs can fund within a day or two once you are a member. Before paying for speed, spend one hour on the free routes: calling 211 for local assistance programs, asking your employer about a paycheck advance, and asking the biller (hospital, landlord, utility) for a payment plan, which is often the real solution.",
  },
  {
    question: "What is a payday alternative loan (PAL)?",
    answer:
      "A small loan offered by federal credit unions under NCUA rules: $200 to $1,000 for PAL I or up to $2,000 for PAL II, terms up to 6 or 12 months respectively, interest capped at 28% plus an application fee of at most $20. Approval is based mainly on income and ability to repay rather than credit score, rollovers are banned, and many credit unions report payments to the credit bureaus, so on-time payments can rebuild your score while you borrow.",
  },
  {
    question: "Why are payday loans so bad if they approve everyone?",
    answer:
      "Because of the price and the structure. A typical payday loan charges about $15 per $100 for two weeks, which the CFPB calculates as an APR near 400%. The full balance is due on your next payday, and most borrowers cannot pay it, so they roll the loan over and pay the fee again. CFPB research found the majority of payday loans go to borrowers stuck in sequences of ten or more loans. Title loans add the risk of losing your car, and tribal or offshore lenders may charge 400 to 700% while claiming state caps do not apply to them.",
  },
  {
    question: "How can I spot an emergency loan scam?",
    answer:
      "The FTC's rule of thumb: legitimate lenders never guarantee approval before seeing your information, and it is illegal for companies to charge an upfront fee before you get a loan. Walk away from anyone demanding gift cards, wire transfers, or crypto, anyone without a physical address and state license, and any offer that arrived by unsolicited text or social media message. Bad-credit borrowers are the number one target for advance-fee loan scams precisely because they expect to be turned down elsewhere.",
  },
  {
    question: "Should I borrow from my 401(k) in an emergency?",
    answer:
      "It can beat every subprime option on price: no credit check, and interest around 8 to 9% as of mid-2026 paid back to your own account. The risks are losing market growth and, bigger, the tax bill if you leave your job before repaying. Some plans also offer a once-per-year $1,000 emergency withdrawal without the usual 10% penalty. See our full 401(k) loan guide for the rules before touching retirement money.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Emergency loans for bad credit: real options, ranked by cost"
        description="Every real option for emergency cash with bad credit, ranked from cheapest to most expensive: credit union PALs, local assistance, employer advances, secured loans, subprime lenders, and why payday loans come last."
        slug="/learn/emergency-loans-bad-credit"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Emergency Loans for Bad Credit", href: "/learn/emergency-loans-bad-credit" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Loans</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Emergency loans when your credit is bad
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated August 2026</span>
          <span className="chip chip-mute">10 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#before-you-borrow" className="u-link text-ink font-medium">
              1. Before you borrow: the free options
            </a>
          </li>
          <li>
            <a href="#best-options" className="u-link text-ink font-medium">
              2. The best borrowing options, ranked by cost
            </a>
          </li>
          <li>
            <a href="#subprime-lenders" className="u-link text-ink font-medium">
              3. Online bad-credit lenders: what to expect
            </a>
          </li>
          <li>
            <a href="#avoid" className="u-link text-ink font-medium">
              4. What to avoid: payday, title, and tribal loans
            </a>
          </li>
          <li>
            <a href="#scams" className="u-link text-ink font-medium">
              5. Spotting loan scams
            </a>
          </li>
          <li>
            <a href="#after" className="u-link text-ink font-medium">
              6. After the emergency: breaking the cycle
            </a>
          </li>
          <li>
            <a href="#faq" className="u-link text-ink font-medium">
              7. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        A car that will not start, a tooth that cannot wait, a rent shortfall. When the
        emergency is real and your credit score is not helping, the loans that advertise
        hardest are usually the ones that hurt most. Payday storefronts and guaranteed
        approval websites exist precisely because desperate borrowers stop comparing. So here
        is the comparison, done for you. This guide ranks every realistic source of emergency
        cash for bad-credit borrowers from cheapest to most expensive, with honest approval
        expectations for each, and a short list of products to refuse no matter how easy they
        make it.
      </p>

      {/* SECTION 1 */}
      <section id="before-you-borrow" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Before you borrow: the free options
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          An hour of phone calls can shrink or eliminate the amount you need to borrow, which
          matters more than any interest rate.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "Ask the biller for a plan.",
              body: "Hospitals routinely offer zero-interest payment plans and financial assistance (nonprofit hospitals are required to have assistance policies). Utilities have hardship programs and shutoff protections. Landlords often prefer a documented payment plan to an eviction. The bill you can restructure is a loan you do not need.",
            },
            {
              title: "Call 211.",
              body: "The United Way's 211 line (or 211.org) connects you to local emergency rent, utility, food, and medical assistance programs. Community action agencies, the Salvation Army, and religious charities distribute real money for exactly these situations.",
            },
            {
              title: "Ask your employer.",
              body: "Many employers offer paycheck advances, hardship funds, or earned wage access that lets you draw pay you have already worked for at little or no cost. HR conversations are free; 400% APR is not.",
            },
            {
              title: "Family or friends, formalized.",
              body: "If someone can float you, write down the amount and repayment schedule and treat it like a real loan. It is the cheapest credit on earth and the fastest way to ruin a relationship when handled loosely.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink">{item.title} </span>
                <span className="text-mute">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 2 */}
      <section id="best-options" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The best borrowing options, ranked by cost
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          1. Credit union payday alternative loans (PALs)
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          The best-kept secret in small-dollar lending. Federal credit unions can offer PALs
          under NCUA rules: $200 to $1,000 (PAL I, 1-to-6-month terms) or up to $2,000 (PAL
          II, up to 12 months), with interest capped at 28% and an application fee of no more
          than $20. Approval leans on income and ability to repay rather than your score,
          rollovers are prohibited, and payments are often reported to the credit bureaus, so
          the loan can rebuild your credit while it helps you. PAL I requires one month of
          membership first; PAL II does not. Even without a formal PAL program, many credit
          unions make small personal loans to members with rough credit, and federal credit
          union loan rates are capped at 18% for standard loans.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          2. Secured and co-signed loans
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          If you have savings, a paid-off car, or a willing co-signer, you can borrow near
          prime rates despite bad credit. Share-secured loans borrow against your own savings
          balance at very low rates. Secured personal loans use a vehicle title as collateral
          at mainstream (not title-loan) pricing from banks and credit unions. A co-signer
          with good credit can cut an offered APR dramatically, with the serious caveat that
          they are fully on the hook if you miss payments.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          3. A 401(k) loan, if you have a balance and a stable job
        </h3>
        <p className="text-mute leading-relaxed">
          No credit check, rates around 8 to 9% as of mid-2026 paid back to yourself, and
          funding within days. The catch is what happens if you leave your job with a balance
          outstanding. Read our{" "}
          <Link href="/learn/401k-loan" className="u-link font-medium">
            401(k) loan guide
          </Link>{" "}
          for the rules before going this route.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="subprime-lenders" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Online bad-credit lenders: what to expect
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A tier of legitimate online lenders specializes in fair-to-bad credit, approving
          scores in the 560 to 640 range and sometimes lower with sufficient income. Expect
          APRs of roughly 18 to 36%, origination fees of 1 to 10% taken out of your proceeds,
          loan amounts from about $1,000 up, and funding as fast as the same or next business
          day. That 36% number is not random: it is the ceiling most mainstream lenders and
          consumer advocates treat as the line between expensive credit and predatory credit,
          echoing the 36% federal cap that the Military Lending Act applies to
          servicemembers.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Prequalify with a soft pull at several lenders before any hard application. Prequalification shows your realistic rate without touching your score.",
            "Compare APR including fees, never the monthly payment or the headline rate.",
            "Realistic expectations: at a 580 score, an approval near 30 to 36% APR is normal, not a ripoff by subprime standards. A $2,000 loan at 32% over 18 months costs about $550 in interest, painful but survivable, and two orders of magnitude cheaper than rolling payday loans.",
            "Check that the lender reports to all three credit bureaus so on-time payments rebuild your score, and confirm there is no prepayment penalty so you can clear it early.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          To see which lenders fit your range before applying anywhere, start with our
          breakdown of{" "}
          <Link href="/loans/by-credit-tier" className="u-link font-medium">
            personal loans by credit tier
          </Link>{" "}
          and the wider{" "}
          <Link href="/loans/personal" className="u-link font-medium">
            personal loans hub
          </Link>
          .
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="avoid" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What to avoid: payday, title, and tribal loans
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "Payday loans (about 400% APR).",
              body: "A typical $15 fee per $100 for two weeks works out to nearly 400% APR by the CFPB's math. The whole balance hits on your next payday, most borrowers cannot clear it, and the fee repeats. CFPB research found most payday loans go to people trapped in long chains of consecutive loans. If you have already taken one, prioritize a PAL or installment loan to break the rollover cycle.",
            },
            {
              title: "Auto title loans (about 300% APR, plus your car).",
              body: "You hand over your car title for a fraction of the vehicle's value at triple-digit APRs, and roughly one in five borrowers loses the car, per CFPB findings. Losing your transportation in an emergency creates the next emergency.",
            },
            {
              title: "Tribal and offshore online loans.",
              body: "Sites claiming exemption from state rate caps, often charging 400 to 700% APR on installment loans. The structure is designed to dodge the laws that would protect you. Treat any lender that will not state its license and your state's protections as a no.",
            },
            {
              title: "Repeated cash advance app use.",
              body: "A single advance with a small tip or fee is mild. A monthly cycle of advances plus subscription fees quietly becomes triple-digit APR borrowing against every future paycheck.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink">{item.title} </span>
                <span className="text-mute">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5 */}
      <section id="scams" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Spotting loan scams
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Bad-credit borrowers are the prime target for loan fraud, because scammers know you
          expect rejection elsewhere. The FTC&rsquo;s red flags:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Any fee charged before you receive the loan. Advance-fee loans are illegal. Legitimate lenders deduct fees from proceeds or build them into the APR.",
            "Guaranteed approval or no credit check for an unsecured loan of real size. Real lenders always assess ability to repay.",
            "Payment demanded by gift card, wire, or crypto. No legitimate lender is paid in Apple gift cards.",
            "No state license, no physical address, or an unsolicited offer by text or DM. Verify licensing with your state regulator, and check complaints in the CFPB database.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6 */}
      <section id="after" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          After the emergency: breaking the cycle
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The most expensive part of bad-credit borrowing is doing it twice. Once the crisis
          passes, two moves change the next one: build a starter emergency fund, even $500,
          in a{" "}
          <Link href="/savings/hysa" className="u-link font-medium">
            high-yield savings account
          </Link>
          , and let your emergency loan rebuild your credit by paying it on time and early
          where possible. A few hundred dollars of cash buffer is the difference between a
          flat tire being an errand and being a loan application.
        </p>
        <p className="text-mute leading-relaxed">
          If your score is the reason this article was necessary, the fix is mechanical, not
          magical: on-time payments on everything, card balances below 30% of limits and
          falling, and no new applications you do not need. Most people who do only that see
          meaningful score improvement within 6 to 12 months, which moves you a full pricing
          tier down on your next loan.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                {faq.question}
              </h3>
              <p className="text-mute leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "Spend one hour on free options first: biller payment plans, 211 local assistance, employer advances, and family loans in writing.",
            "Credit union PALs are the best small emergency loan for bad credit: $200 to $2,000, NCUA-capped at 28% plus a $20 maximum fee, no rollovers, income-based approval.",
            "Secured loans, co-signers, and 401(k) loans get near-prime pricing despite a bad score, each with its own catch.",
            "Legitimate online bad-credit lenders run roughly 18 to 36% APR. At a 580 score, an offer near the top of that range is normal; prequalify with soft pulls and compare APR, not payments.",
            "Refuse payday (about 400% APR), title (about 300%, car at risk), and tribal loans regardless of how fast or easy they are.",
            "Advance fees are illegal and guaranteed approval is a scam signal, per the FTC. After the crisis, a $500 starter fund in a HYSA is what prevents the sequel.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-lime mt-0.5 flex-shrink-0">{i + 1}</span>
              <span className="text-mute">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RELATED */}
      <section className="border-t border-line pt-10 mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Related guides
        </div>
        <div className="space-y-3">
          <Link href="/learn/how-to-apply-for-a-personal-loan" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Loans</span> How to apply for a personal loan →
          </Link>
          <Link href="/learn/401k-loan" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Loans</span> 401(k) loans, explained →
          </Link>
          <Link href="/learn/emergency-fund-playbook" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> The emergency fund playbook →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            See what your credit tier really gets you
          </div>
          <p className="text-mute text-sm">
            Realistic APR ranges and lender types for every credit score band, so you know a
            fair offer when you see one.
          </p>
        </div>
        <Link href="/loans/by-credit-tier" className="pill pill-ink flex-shrink-0">
          Loans by credit tier →
        </Link>
      </div>
    </article>
  );
}
