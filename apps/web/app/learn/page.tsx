import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Plain-English Money Guides | Fintiex Learn",
  description:
    "Practical guides to mortgages, savings accounts, credit cards, and personal finance strategy. Written for real people, not finance majors.",
  alternates: { canonical: "/learn" },
};

interface Guide {
  slug: string;
  title: string;
  description: string;
  category: "Mortgages" | "Savings" | "Credit" | "Strategy";
  readMin: number;
  chipVariant: "lime" | "violet" | "mute" | "ink";
}

const guides: Guide[] = [
  {
    slug: "how-mortgages-work",
    title: "How mortgages work in 2026",
    description:
      "From 10-year Treasuries to closing cost line items: a full map of how home loans are priced, structured, and funded.",
    category: "Mortgages",
    readMin: 9,
    chipVariant: "lime",
  },
  {
    slug: "what-is-apr",
    title: "APR vs interest rate (and why the difference matters)",
    description:
      "The interest rate tells you the cost of the loan. APR tells you the cost of borrowing. Here is why that gap exists.",
    category: "Credit",
    readMin: 7,
    chipVariant: "violet",
  },
  {
    slug: "hysa-vs-cd",
    title: "HYSA vs CD: which one is right for you?",
    description:
      "Both pay more than a traditional savings account. The trade-off is liquidity. Here is how to pick the right one.",
    category: "Savings",
    readMin: 8,
    chipVariant: "mute",
  },
  {
    slug: "choosing-first-credit-card",
    title: "Choosing your first credit card",
    description:
      "Your first card sets the foundation for your credit history. Here is what actually matters and what to ignore.",
    category: "Credit",
    readMin: 7,
    chipVariant: "violet",
  },
  {
    slug: "refinance-break-even",
    title: "When does refinancing actually pay off?",
    description:
      "Lower rates look great in ads. The real question is how long until the closing costs pay back. Here is the math.",
    category: "Mortgages",
    readMin: 8,
    chipVariant: "lime",
  },
  {
    slug: "compound-interest-explained",
    title: "Compound interest, the only math that actually matters",
    description:
      "Time and reinvestment turn small amounts into large ones. Here is how the formula works and why starting early beats earning more.",
    category: "Strategy",
    readMin: 7,
    chipVariant: "ink",
  },
  {
    slug: "emergency-fund-playbook",
    title: "The emergency fund playbook",
    description:
      "Three to six months of expenses in cash, parked somewhere it earns money. Here is how to build it and when to use it.",
    category: "Strategy",
    readMin: 7,
    chipVariant: "ink",
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt avalanche vs snowball: a math-first answer",
    description:
      "Avalanche saves the most money. Snowball builds the most momentum. Here is a worked example with four real cards.",
    category: "Credit",
    readMin: 7,
    chipVariant: "violet",
  },
];

const categories: Array<{ label: string; slugs: string[] }> = [
  {
    label: "Mortgages",
    slugs: ["how-mortgages-work", "refinance-break-even"],
  },
  {
    label: "Savings",
    slugs: ["hysa-vs-cd"],
  },
  {
    label: "Credit",
    slugs: ["what-is-apr", "choosing-first-credit-card", "debt-avalanche-vs-snowball"],
  },
  {
    label: "Strategy",
    slugs: ["compound-interest-explained", "emergency-fund-playbook"],
  },
];

export default function LearnPage() {
  const guidesBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));

  return (
    <>
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Learn", href: "/learn" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">Guides</span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] tracking-[-0.03em] mb-6 max-w-3xl">
            Plain-English money guides.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            Mortgages, savings accounts, credit cards, and debt payoff strategies explained without
            jargon. Every guide uses real numbers, cites its sources, and ends with a calculator so
            you can run your own scenario. No wall of text, no affiliate angle.
          </p>
        </div>
      </section>

      {/* GUIDE CARD GRID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/learn/${guide.slug}`}
              className="card p-6 block group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`chip chip-${guide.chipVariant}`}>{guide.category}</span>
                <span className="font-mono text-xs text-mute tabular">{guide.readMin} min read</span>
              </div>
              <h3 className="font-display font-bold text-lg leading-snug tracking-tight mb-3">
                {guide.title}
              </h3>
              <p className="text-mute text-sm leading-relaxed flex-1">{guide.description}</p>
              <div className="mt-5 flex items-center justify-end">
                <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BROWSE BY TOPIC */}
      <section className="border-t border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-2xl tracking-tight mb-10">
            Browse by topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="card p-6">
                <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
                  {cat.label}
                </div>
                <ul className="space-y-3">
                  {cat.slugs.map((slug) => {
                    const g = guidesBySlug[slug];
                    if (!g) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/learn/${slug}`}
                          className="text-sm font-medium leading-snug u-link hover:text-violet"
                        >
                          {g.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
