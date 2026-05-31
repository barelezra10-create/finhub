import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCards } from "@/lib/cards-server";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Which Credit Card Should I Get? | Free Quiz | Fintiex",
  description:
    "Answer three questions and get your top three credit card picks from a 50-card dataset. Free, no email, no signup. Filtered by goal, credit score, and annual fee preference.",
  alternates: { canonical: "/calculators/which-card" },
};

const faqs: FAQItem[] = [
  {
    question: "How does this quiz work?",
    answer:
      "Three questions. First, your main goal (cash back, travel, build credit, balance transfer, or business). Second, your approximate credit score (or band). Third, whether you are open to paying an annual fee. We match those answers against our 50-card dataset, filter by goal category and credit-score eligibility, and rank by signup-bonus value. The top three appear on the results card.",
  },
  {
    question: "What if I do not match any card?",
    answer:
      "It usually means your credit score band is below what every card in the matching category requires, or you chose No on the annual-fee question and the only matches in your goal carry a fee. Pick a wider band, accept an annual fee for one round, or switch the goal to see other options.",
  },
  {
    question: "Are the recommendations sponsored?",
    answer:
      "No. Fintiex does not take payment to alter card rankings. The quiz ranks by signup-bonus value (real-world cash value in USD) after the goal and credit filters apply. We earn a small commission when you click an apply button, but the placement and ranking are editorial.",
  },
  {
    question: "Should I really apply based on a quiz?",
    answer:
      "Use the quiz as a starting list, not a final answer. Click through to the full review on each pick, confirm the current APR and fee schedule on the issuer site, and check that your specific situation (income, debt-to-income, recent inquiries) matches the typical approval profile. The Consumer Financial Protection Bureau also has a free credit-report walkthrough at consumerfinance.gov before any hard pull.",
  },
  {
    question: "Why does my credit score band matter so much?",
    answer:
      "Card issuers rarely approve applications more than 30 to 50 points below their recommended FICO. Applying for a card aimed at 740+ when you sit at 650 wastes a hard inquiry (which drops your score by 5 to 10 points for several months) and produces almost certain denial. The quiz adds a 30-point cushion to the recommended score, which roughly matches typical real-world approval rates.",
  },
];

export default function Page() {
  const cards = loadCards();
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Which Card", href: "/calculators/which-card" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Credit card quiz
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Which credit card should I get?
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Three questions. Your top three picks. We score every card in our 50-card dataset against your goal, your credit, and your appetite for an annual fee. Free, no signup.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{cards.length}</span> cards scored
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">3</span> questions
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator cards={cards} />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Filter, then rank.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                The quiz applies three filters in order. First, the goal filter matches your answer to the card category (cash back, travel, balance transfer, business, or secured for credit-building). Cards outside the matching category drop out.
              </p>
              <p>
                Second, the credit-score filter compares your band to each card&apos;s recommended FICO. We add a 30-point cushion to match real-world approval odds. A 700 score with a 30-point cushion qualifies for any card with a recommended FICO of 730 or below.
              </p>
              <p>
                Third, if you said no to an annual fee, every card with a non-zero annual fee drops out. The remaining set is sorted by signup-bonus value in USD (the bonus converted to dollars at the card&apos;s point value), and the top three appear in your results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
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
            See how much rewards your everyday spending could earn.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/rewards-optimizer" className="pill pill-ink">
              Rewards optimizer
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/balance-transfer" className="pill pill-ghost">
              Balance transfer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
