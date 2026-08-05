import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "What Is This Charge on My Credit Card? How to Identify and Dispute It",
  description:
    "A step-by-step guide to identifying mystery credit card charges: decoding merchant names, spotting trial subscriptions and holds, and using your FCBA dispute rights.",
  alternates: { canonical: "/learn/what-is-this-charge-on-my-credit-card" },
};

const faqs = [
  {
    question: "How long do I have to dispute a credit card charge?",
    answer:
      "Under the Fair Credit Billing Act, you have 60 days from the date the statement containing the error was sent to you to dispute a billing error in writing. For outright fraud (a charge you never authorized), report it as soon as you spot it; there is no benefit to waiting, and prompt reporting keeps your liability at zero under card network policies.",
  },
  {
    question: "Will disputing a charge hurt my credit score?",
    answer:
      "No. Filing a dispute is not reported to credit bureaus and does not affect your score. While the dispute is investigated you can withhold payment on the disputed amount only, and the issuer cannot charge interest or late fees on it or report it as delinquent if the dispute resolves in your favor. Keep paying the rest of your bill as usual.",
  },
  {
    question: "Am I on the hook for fraudulent charges?",
    answer:
      "Almost never. Federal law caps your liability for unauthorized credit card charges at $50, and Visa, Mastercard, American Express, and Discover all offer zero-liability policies that take even that to $0 in practice. Report the charge, get the card reissued, and the issuer absorbs the loss.",
  },
  {
    question: "What if I recognize the merchant but the amount is wrong?",
    answer:
      "That is a billing error, and the FCBA covers it too: wrong amounts, duplicate charges, charges for goods never delivered, and payments not credited. Contact the merchant first, since they can often refund fastest. If that fails, dispute with your card issuer within the 60-day window.",
  },
  {
    question: "Why is the charge amount different from what I paid?",
    answer:
      "Pending transactions often post as temporary authorization holds. Gas stations may hold $1 or $100 before the real amount posts, restaurants authorize the pre-tip amount, and hotels and rental car companies hold estimated totals plus a deposit. Holds usually resolve to the correct amount within a few business days. If a hold never converts and does not drop off after about a week, call your issuer.",
  },
  {
    question: "Should I cancel my card over one mystery charge?",
    answer:
      "If you confirm the charge is fraudulent, yes: lock the card in your app and ask for a replacement with a new number. If it turns out to be a legitimate charge under a confusing merchant name, no action is needed. Most issuer apps let you lock and unlock a card instantly, which is a safe move while you investigate.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="What is this charge on my credit card? How to identify and dispute it"
        description="A step-by-step guide to identifying mystery credit card charges: decoding merchant names, spotting trial subscriptions and holds, and using your FCBA dispute rights."
        slug="/learn/what-is-this-charge-on-my-credit-card"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          {
            name: "What Is This Charge on My Credit Card?",
            href: "/learn/what-is-this-charge-on-my-credit-card",
          },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-violet mb-4">Credit</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          What is this charge on my credit card?
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated August 2026</span>
          <span className="chip chip-mute">8 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#why-charges-look-strange" className="u-link text-ink font-medium">
              1. Why legitimate charges look strange
            </a>
          </li>
          <li>
            <a href="#identify" className="u-link text-ink font-medium">
              2. How to identify a mystery charge in 10 minutes
            </a>
          </li>
          <li>
            <a href="#usual-suspects" className="u-link text-ink font-medium">
              3. The usual suspects: trials, holds, and gray charges
            </a>
          </li>
          <li>
            <a href="#when-its-fraud" className="u-link text-ink font-medium">
              4. When it is actually fraud
            </a>
          </li>
          <li>
            <a href="#dispute-rights" className="u-link text-ink font-medium">
              5. Your dispute rights under the FCBA
            </a>
          </li>
          <li>
            <a href="#faq" className="u-link text-ink font-medium">
              6. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        You are scanning your statement and there it is: a charge you do not remember, from a
        merchant name that looks like a cat walked across a keyboard. Before you panic, know
        the base rate: most mystery charges turn out to be legitimate purchases hiding behind a
        confusing billing name, a forgotten subscription, or a temporary hold. A minority are
        real fraud, and for those, federal law puts almost all of the risk on the card issuer,
        not you. This guide gives you a 10-minute process to identify any charge, explains the
        patterns behind the confusing ones, and walks through your dispute rights under the
        Fair Credit Billing Act step by step.
      </p>

      {/* SECTION 1 */}
      <section id="why-charges-look-strange" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Why legitimate charges look strange
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The name on your statement is a billing descriptor, a short text field the merchant
          sets with its payment processor. It is often not the brand name you saw at checkout.
          A restaurant may bill under its parent company. An online store may bill under its
          legal entity, which can be a random-sounding LLC. A local shop using a payment app
          bills under the processor&rsquo;s prefix plus an abbreviated name.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Common descriptor patterns worth recognizing:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "SQ* or SQU*:",
              body: "A merchant using Square, usually a small business, food truck, salon, or market vendor.",
            },
            {
              title: "PAYPAL* or PP*:",
              body: "A purchase processed through PayPal. The name after the asterisk is the seller, often abbreviated.",
            },
            {
              title: "AMZN Mktp:",
              body: "An Amazon Marketplace purchase. Check your Amazon order history for the matching amount.",
            },
            {
              title: "APPLE.COM/BILL or GOOGLE*:",
              body: "App store purchases, in-app subscriptions, and cloud storage. Anyone in the family sharing your payment method can trigger these.",
            },
            {
              title: "SP or SP*:",
              body: "A Shopify-powered store. The brand you bought from may look nothing like the descriptor.",
            },
            {
              title: "TST*:",
              body: "A restaurant using Toast for payments.",
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
        <p className="text-mute leading-relaxed">
          Two more quirks make matching harder. Charges can post days after the purchase, so
          the date on your statement may not match the day you bought anything. And the posted
          amount can differ from what you signed for, because tips, currency conversion, and
          authorization holds all settle later.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="identify" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How to identify a mystery charge in 10 minutes
        </h2>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Tap the transaction in your card issuer's app. Most major issuers now show enriched merchant details: the cleaned-up brand name, a logo, a map of where the charge happened, and sometimes a phone number. This alone solves a large share of mysteries.",
            },
            {
              step: "Search the exact descriptor text online. Copy the merchant string verbatim into a search engine. Confusing descriptors are widely discussed, and the first results usually reveal the real brand behind the name.",
            },
            {
              step: "Match the amount against your email. Search your inbox for the dollar amount (for example, 47.93). Receipts, order confirmations, and subscription renewal notices usually surface immediately.",
            },
            {
              step: "Ask authorized users and family. A spouse's purchase, a teenager's in-app upgrade, or a family subscription renewal on a shared card explains many surprises. Check shared accounts like Amazon, Apple, and streaming services.",
            },
            {
              step: "Check your subscription trail. Look at your app store subscription list and scan old emails for free trials you started. A trial that quietly converted to paid is one of the most common culprits.",
            },
            {
              step: "Call the merchant if you found contact info. Billing departments can look up the transaction with your card's last four digits and tell you exactly what was purchased, and will often refund an honest mistake on the spot.",
            },
            {
              step: "Still unidentified? Treat it as potentially fraudulent. Lock the card in your app and call the number on the back of your card. From here, follow the fraud steps below.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* SECTION 3 */}
      <section id="usual-suspects" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The usual suspects: trials, holds, and gray charges
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Trial subscriptions that converted
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          The free trial that starts billing after 7 or 30 days is a business model, not an
          accident. The FTC has repeatedly taken action against companies that make trials easy
          to start and cancellation hard to find. If the mystery charge is a subscription you
          forgot, cancel it first, then ask the merchant for a refund of the most recent
          charge. Many will grant one refund to avoid a card dispute, because disputes cost
          merchants fees.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Authorization holds
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A hold is not a final charge. It is the merchant reserving part of your credit line
          before the real amount is known. Gas pumps hold $1 or a preset amount like $100 until
          the fill-up settles. Hotels hold the room total plus an incidentals deposit. Rental
          car companies hold the estimated rental plus a buffer. Holds disappear or convert to
          the true amount within a few business days. A pending charge that looks wrong is
          usually just a hold mid-flight; give it two or three days before worrying.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Gray charges
        </h3>
        <p className="text-mute leading-relaxed">
          Gray charges are technically authorized but easy to miss: a subscription price that
          crept up, a membership that renews annually so you see it once a year, an add-on you
          did not notice at checkout, or a small recurring donation. They are legal, which
          means the fix is cancellation and a polite refund request, not a fraud claim. An
          annual audit of your recurring charges, listing every subscription hitting each
          card, is the cheapest financial cleanup most people never do.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="when-its-fraud" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When it is actually fraud
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Red flags that push a charge from confusing to fraudulent:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "You have worked the identification steps and nothing connects the charge to your household.",
            "Small test charges, often under $5 or exactly $1, sometimes followed within days by larger ones. Fraudsters test stolen numbers before using them.",
            "Charges from a distant city or another country where nobody on the account has been or shopped online.",
            "Multiple rapid-fire charges at the same merchant, or charges at odd hours from merchant categories you never use.",
            "A charge appearing right after you used your card on an unfamiliar website or received a phishing text or email.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          If you conclude it is fraud, act in this order: lock the card in your issuer&rsquo;s
          app, call the issuer to report the charge as unauthorized, and request a replacement
          card with a new number. The issuer will typically credit the amount while it
          investigates. Your legal exposure is capped at $50 under federal law, and the major
          card networks&rsquo; zero-liability policies mean you will almost certainly pay
          nothing.
        </p>
        <p className="text-mute leading-relaxed">
          Then close the loop on the bigger risk: update the card number on legitimate
          subscriptions, change the password on any shopping account that may have leaked the
          number, and consider a free credit freeze with Equifax, Experian, and TransUnion if
          you suspect your identity, not just your card number, was compromised. The FTC runs
          IdentityTheft.gov for exactly that scenario, and you can report card fraud at
          ReportFraud.ftc.gov.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="dispute-rights" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Your dispute rights under the FCBA
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The Fair Credit Billing Act is the federal law behind every credit card dispute. It
          covers billing errors: unauthorized charges, wrong amounts, duplicate charges,
          charges for goods or services never delivered or not as agreed, math errors, and
          payments not credited. Here is how the process works, per the CFPB and FTC:
        </p>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Dispute within 60 days of the statement date. The clock starts when the issuer sent the statement containing the error, not when you noticed it. Most issuers accept disputes through their app or website; to fully preserve your FCBA rights, you can also send a written dispute to the issuer's billing inquiries address (not the payment address).",
            },
            {
              step: "The issuer must acknowledge your dispute within 30 days of receiving it.",
            },
            {
              step: "The issuer must resolve the dispute within two billing cycles, and no later than 90 days.",
            },
            {
              step: "While the investigation runs, you may withhold payment on the disputed amount. The issuer cannot charge interest or fees on it, close your account over it, or report it as delinquent because you disputed it.",
            },
            {
              step: "If you win, the charge and any related interest are removed. If the issuer decides the charge is valid, it must explain why in writing, and you then owe the amount plus any accrued interest. You can request the documentation it relied on.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
        <p className="text-mute leading-relaxed">
          Two practical notes. First, try the merchant before the bank when the issue is a
          billing mistake rather than fraud; refunds are faster than disputes and preserve the
          dispute as a backup. Second, if an issuer mishandles your dispute, you can file a
          complaint with the CFPB at consumerfinance.gov, which forwards it to the company and
          requires a response.
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
            "Most mystery charges are legitimate purchases behind a confusing billing descriptor, a forgotten subscription, or a temporary authorization hold.",
            "Identify charges fast: tap the transaction in your issuer's app, search the exact descriptor text, and search your email for the dollar amount.",
            "Prefixes like SQ*, PAYPAL*, AMZN Mktp, APPLE.COM/BILL, SP, and TST* point to the payment platform, not the brand you bought from.",
            "If nothing checks out, lock the card, report the charge as unauthorized, and get a new card number. Federal law caps your liability at $50, and network policies usually make it $0.",
            "The FCBA gives you 60 days from the statement date to dispute billing errors; the issuer must acknowledge within 30 days and resolve within 90.",
            "You can withhold payment on the disputed amount during the investigation without interest, fees, or credit damage.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-violet mt-0.5 flex-shrink-0">{i + 1}</span>
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
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> APR vs interest rate →
          </Link>
          <Link href="/learn/choosing-first-credit-card" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Choosing your first credit card →
          </Link>
          <Link href="/learn/debt-avalanche-vs-snowball" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Debt avalanche vs snowball →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Is your card still the right one?
          </div>
          <p className="text-mute text-sm">
            While you are auditing your statement, compare current cards for rewards, APR, and
            fraud protections.
          </p>
        </div>
        <Link href="/credit-cards" className="pill pill-ink flex-shrink-0">
          Compare credit cards →
        </Link>
      </div>
    </article>
  );
}
