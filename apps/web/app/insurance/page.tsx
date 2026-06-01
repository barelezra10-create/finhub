import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCarriers } from "@/lib/insurance";

export const metadata: Metadata = {
  title: "Best Auto, Home & Life Insurance Carriers Compared (2026) | Fintiex",
  description:
    "Compare top auto, home, and life insurance carriers in one place. Real premium ranges, AM Best ratings, JD Power scores, and editor takes. Updated for 2026.",
  alternates: { canonical: "/insurance" },
};

const faqItems: FAQItem[] = [
  {
    question: "How does Fintiex pick insurance carriers?",
    answer:
      "We weigh four things: average annual premium for a typical buyer, AM Best financial strength rating, JD Power customer satisfaction, and digital experience. We do not take payment to rank carriers higher, and the lists are re-scored every quarter.",
  },
  {
    question: "Should I bundle auto and home insurance?",
    answer:
      "In most cases yes. Bundling usually saves 10 to 25 percent on both policies. The savings is largest with carriers like Allstate and Liberty Mutual that lean on bundling discounts. Always compare the bundled price against two standalone quotes before signing.",
  },
  {
    question: "Do I need life insurance if I am young and healthy?",
    answer:
      "If you have anyone who depends on your income, the answer is usually yes. Term life is cheap in your twenties and thirties (often under $30 per month for $500,000 of 20-year term) and locks in low rates before your health changes.",
  },
  {
    question: "Are online insurance quotes accurate?",
    answer:
      "Online quotes from major carriers are usually within 5 percent of the final bind price, assuming you enter accurate info. The bigger surprises happen when the carrier runs your driving record, credit, or home inspection and finds something not disclosed in the quote.",
  },
  {
    question: "Why are insurance rates rising so fast?",
    answer:
      "Three forces are pushing rates up: severe weather claims (especially in coastal and wildfire states), higher repair costs from advanced vehicle tech, and medical inflation that drives up bodily injury payouts. Shopping every 2 to 3 years is the simplest way to fight back.",
  },
  {
    question: "Can I trust digital-only carriers like Lemonade?",
    answer:
      "Digital-first carriers are real insurers with the same state regulators as traditional carriers. Lemonade is rated A by AM Best and pays many claims in minutes via app. The trade-off is less help with complex situations and no local agent for one-on-one advice.",
  },
];

type Accent = "lime" | "violet" | "coral";

const verticals: {
  href: string;
  chip: string;
  title: string;
  detail: string;
  stats: string[];
  accent: Accent;
  icon: "auto" | "home" | "life";
}[] = [
  {
    href: "/insurance/auto",
    chip: "Auto",
    title: "Auto insurance",
    detail:
      "Compare GEICO, Progressive, State Farm, USAA, and 4 more for cheapest premiums, best coverage, and top customer service.",
    stats: ["8 carriers", "From $1,000/yr", "Updated 2026"],
    accent: "lime",
    icon: "auto",
  },
  {
    href: "/insurance/home",
    chip: "Home",
    title: "Home insurance",
    detail:
      "8 home carriers ranked by premium, AM Best, and JD Power. Includes traditional (State Farm, Allstate) and digital-first (Lemonade).",
    stats: ["8 carriers", "From $750/yr", "Updated 2026"],
    accent: "violet",
    icon: "home",
  },
  {
    href: "/insurance/life",
    chip: "Life",
    title: "Life insurance",
    detail:
      "Term, whole, and no-exam life from 7 top providers. From digital-first (Haven, Ladder) to traditional (Northwestern Mutual, Prudential).",
    stats: ["7 providers", "Term + whole", "Updated 2026"],
    accent: "coral",
    icon: "life",
  },
];

function VerticalIcon({ kind }: { kind: "auto" | "home" | "life" }) {
  const common = {
    width: 64,
    height: 64,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "auto") {
    return (
      <svg {...common} aria-hidden>
        <path d="M3 14h18M5 14V9.5L7 5h10l2 4.5V14M5 14v3M19 14v3M7.5 11.5h9" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
      </svg>
    );
  }
  if (kind === "home") {
    return (
      <svg {...common} aria-hidden>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v9h14v-9" />
        <path d="M10 19v-6h4v6" />
      </svg>
    );
  }
  // life
  return (
    <svg {...common} aria-hidden>
      <path d="M20.84 5.61a5.5 5.5 0 0 0-7.78 0L12 6.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 22.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M3 12h4.5l1.5-3 3 6 1.5-3H21" />
    </svg>
  );
}

export default function Page() {
  const auto = loadCarriers("auto");
  const home = loadCarriers("home");
  const life = loadCarriers("life");
  const total = auto.length + home.length + life.length;

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> {total} carriers compared
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Insurance, picked apart.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Auto, home, and life insurance from the carriers worth comparing in 2026. Real premium ranges, AM Best ratings, JD Power scores, and honest editor takes. No paid placements, no fake rankings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/insurance/auto" className="pill pill-ink">
              Compare auto insurance
              <span aria-hidden>→</span>
            </Link>
            <Link href="/insurance/life" className="pill pill-ghost">
              See life insurance picks
            </Link>
          </div>
        </div>
      </section>

      {/* THREE VERTICAL CARDS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Insurance hubs
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Pick a coverage type to start.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Each hub shows our top picks, premium ranges, and full carrier reviews. Click through to compare side by side.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {verticals.map((v) => {
            const accentChip =
              v.accent === "lime"
                ? "chip chip-lime"
                : v.accent === "violet"
                ? "chip chip-violet"
                : "chip chip-mute";
            const iconColor =
              v.accent === "lime"
                ? "text-ink"
                : v.accent === "violet"
                ? "text-violet"
                : "text-coral";
            return (
              <Link key={v.href} href={v.href} className="card p-7 block group">
                <div className="flex items-start justify-between mb-5">
                  <div className={`${iconColor}`}>
                    <VerticalIcon kind={v.icon} />
                  </div>
                  <span className="text-mute text-xl group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <span className={`${accentChip} mb-3 inline-block`}>{v.chip}</span>
                <h3 className="font-display font-extrabold text-2xl mb-3 tracking-tight">{v.title}</h3>
                <p className="text-mute text-sm leading-relaxed mb-6">{v.detail}</p>
                <div className="flex flex-wrap gap-2 pt-5 border-t border-line">
                  {v.stats.map((s) => (
                    <span key={s} className="text-xs font-mono text-mute">
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY FINTIEX */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Why Fintiex</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Real data, not a paid leaderboard.
              </h2>
              <p className="text-mute leading-relaxed">
                Most insurance comparison sites rank carriers by who pays them most per click. We do not. Here is how we work.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">No paid rankings</h3>
                <p className="text-mute">
                  No carrier can buy a higher slot. Our top pick stays at the top because of premium range, financial strength, and customer satisfaction data. Period.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Premium ranges, not teaser quotes</h3>
                <p className="text-mute">
                  We show the realistic premium range for a typical buyer, not the lowest possible quote for a perfect driver in the cheapest state. The number you see is what most people actually pay.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Quarterly re-scoring</h3>
                <p className="text-mute">
                  Insurance rates and rankings shift fast. We re-score every carrier each quarter using updated AM Best ratings, JD Power scores, and average premium data. Last full update: May 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CARRIERS PREVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Top picks</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            A quick look at the top of each list.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { v: "auto" as const, c: auto[0], label: "Top auto pick" },
            { v: "home" as const, c: home[0], label: "Top home pick" },
            { v: "life" as const, c: life[0], label: "Top life pick" },
          ].map(({ v, c, label }) =>
            c ? (
              <Link key={v} href={`/insurance/${v}/${c.slug}`} className="card p-6 block group">
                <div className="text-xs font-mono text-mute uppercase tracking-wider mb-3">{label}</div>
                <div className="font-display font-extrabold text-2xl mb-2 tracking-tight">{c.carrier}</div>
                <div className="text-sm text-mute mb-4 leading-relaxed">{c.best_for}</div>
                <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-line">
                  <span className="text-mute">Fintiex rating</span>
                  <span className="tabular font-semibold text-ink">{c.rating.toFixed(1)} / 5</span>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions.</h2>
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

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Stop overpaying. Start comparing.
            </h2>
            <p className="text-ink/70 mt-2">No email needed. No signup. Just real carriers, real numbers.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/insurance/auto" className="pill pill-ink">
              Auto insurance
              <span aria-hidden>→</span>
            </Link>
            <Link href="/insurance/home" className="pill pill-ghost">
              Home insurance
            </Link>
            <Link href="/insurance/life" className="pill pill-ghost">
              Life insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
