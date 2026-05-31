import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";
import { loadCarrier, loadCarriers, formatCurrency } from "@/lib/insurance";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadCarriers("life").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const carrier = loadCarrier("life", slug);
  if (!carrier) return { title: "Life Insurance Review | Fintiex" };
  const desc = `${carrier.carrier} life insurance review for 2026. Coverage limits, AM Best rating, underwriting speed, pros and cons. ${carrier.best_for}.`;
  return {
    title: `${carrier.carrier} Life Insurance Review (2026) | Fintiex`,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/insurance/life/${carrier.slug}` },
  };
}

function buildFaqs(carrier: ReturnType<typeof loadCarrier> & object): FAQItem[] {
  const name = carrier.carrier;
  return [
    {
      question: `Is ${name} a good life insurance company?`,
      answer: `${name} earned ${carrier.rating.toFixed(1)} out of 5 in our 2026 review. It carries an AM Best financial strength rating of ${carrier.am_best_rating ?? "N/R"}. Best for: ${carrier.best_for.toLowerCase()}.`,
    },
    {
      question: `Does ${name} offer no-medical-exam life insurance?`,
      answer: carrier.no_medical_exam_available
        ? `Yes. ${name} offers no-exam life insurance for qualifying healthy applicants. Coverage limits and approval depend on age and health profile. Decisions are typically delivered instantly to within a few days.`
        : `No. ${name} requires a full medical exam for all life insurance policies. The trade-off is access to lower rates and higher coverage limits for healthy applicants.`,
    },
    {
      question: `What policy types does ${name} offer?`,
      answer: carrier.policy_types
        ? `${name} offers the following policy types: ${carrier.policy_types.join(", ")}. ${
            carrier.term_lengths_years
              ? `Term lengths available are ${carrier.term_lengths_years.join(", ")} years.`
              : ""
          }`
        : `${name} offers a range of life insurance products. Visit their site for current options.`,
    },
    {
      question: `What is the coverage range for ${name}?`,
      answer: carrier.coverage_amount_min && carrier.coverage_amount_max
        ? `Coverage ranges from ${formatCurrency(carrier.coverage_amount_min)} to ${formatCurrency(carrier.coverage_amount_max)}. Eligibility for high coverage amounts depends on age, income, and health history.`
        : `${name} coverage limits vary by policy type. Get a quote to see your specific options.`,
    },
    {
      question: `How fast is ${name} underwriting?`,
      answer: `${name} underwriting speed is rated as: ${carrier.underwriting_speed ?? "varies by policy type"}. Fully digital carriers like Haven Life and Ladder offer instant decisions for qualifying applicants. Traditional carriers like Northwestern Mutual and Prudential can take 2 to 6 weeks for full underwriting.`,
    },
    {
      question: `What riders does ${name} offer?`,
      answer: carrier.riders_available
        ? `${name} offers these optional riders: ${carrier.riders_available.join(", ")}. Common riders like accelerated death benefit are often included at no extra cost; others (waiver of premium, long-term care) cost extra but can add real value.`
        : `${name} offers a standard set of riders. Check with an agent for specifics.`,
    },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const carrier = loadCarrier("life", slug);
  if (!carrier) notFound();

  const faqs = buildFaqs(carrier);
  const coverageRange =
    carrier.coverage_amount_min && carrier.coverage_amount_max
      ? `${formatCurrency(carrier.coverage_amount_min)} to ${formatCurrency(carrier.coverage_amount_max)}`
      : "Varies";

  return (
    <article className="bg-bg">
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
          { name: "Life", href: "/insurance/life" },
          { name: carrier.carrier, href: `/insurance/life/${carrier.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/insurance" className="u-link">Insurance</Link>{" / "}
            <Link href="/insurance/life" className="u-link">Life</Link>
          </div>
          <span className="chip chip-lime mb-5">
            <span className="pulse-dot" /> Life insurance review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {carrier.carrier} Life Insurance Review (2026)
          </h1>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {carrier.carrier} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {carrier.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. Best for: {carrier.best_for.toLowerCase()}. Full breakdown below.
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            By the Fintiex Insurance Desk · Updated {carrier.last_updated}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={carrier.quote_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Get a {carrier.carrier} quote <span aria-hidden>↗</span>
            </a>
            <Link href="/insurance/life" className="pill pill-ghost">
              Compare all 7 life providers
            </Link>
          </div>
        </div>
      </section>

      {/* KEY STATS CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">Key stats</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Coverage range" value={coverageRange} mono />
            <Stat label="AM Best" value={carrier.am_best_rating ?? "N/R"} mono />
            <Stat
              label="No-exam available"
              value={carrier.no_medical_exam_available ? "Yes" : "No"}
              mono
            />
            <Stat
              label="Issue ages"
              value={carrier.age_range ? `${carrier.age_range.min} to ${carrier.age_range.max}` : "Varies"}
              mono
            />
          </div>
          <div className="mt-6 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <KV
              label="Policy types"
              value={carrier.policy_types ? carrier.policy_types.length + " offered" : "Varies"}
            />
            <KV
              label="Term lengths"
              value={
                carrier.term_lengths_years
                  ? `${carrier.term_lengths_years[0]} to ${carrier.term_lengths_years[carrier.term_lengths_years.length - 1]} years`
                  : "Varies"
              }
            />
            <KV label="Underwriting" value={carrier.underwriting_speed ?? "Varies"} />
            <KV label="Fintiex rating" value={`${carrier.rating.toFixed(1)} / 5`} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {carrier.perks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <span className="text-mint font-bold">+</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {carrier.drawbacks.map((drawback) => (
                <li key={drawback} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POLICY TYPES + RIDERS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carrier.policy_types && carrier.policy_types.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight mb-4">Policy types offered</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {carrier.policy_types.map((p) => (
                  <span key={p} className="chip chip-mute">
                    {policyLabel(p)}
                  </span>
                ))}
              </div>
              {carrier.term_lengths_years && (
                <p className="text-mute text-sm leading-relaxed">
                  Term lengths available: {carrier.term_lengths_years.join(", ")} years.
                </p>
              )}
            </div>
          )}
          {carrier.riders_available && carrier.riders_available.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight mb-4">Riders available</h2>
              <ul className="space-y-2 text-sm">
                {carrier.riders_available.map((rider) => (
                  <li key={rider} className="flex gap-2">
                    <span className="text-mint font-bold">·</span>
                    <span>{rider}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* BEST FOR CALLOUT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Best for</div>
          <p className="text-[1.0625rem] leading-relaxed">
            {carrier.carrier} is the right pick if you prioritize {carrier.best_for.toLowerCase()}. The provider earns top marks for{" "}
            {carrier.am_best_rating === "A++" ? "financial strength" : "underwriting flexibility"}
            {carrier.no_medical_exam_available ? " and no-exam options" : ""}. If you do not match this profile, compare against the other top picks on our{" "}
            <Link href="/insurance/life" className="u-link">
              life insurance hub
            </Link>
            .
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            {carrier.carrier} writes life insurance policies for applicants{" "}
            {carrier.age_range
              ? `between ages ${carrier.age_range.min} and ${carrier.age_range.max}`
              : "across a broad age range"}
            , with coverage from {coverageRange}. Financial strength is rated {carrier.am_best_rating ?? "not rated"} by AM Best, which is the most important rating for any life insurer. A life insurance policy is a promise that may not be cashed in for 30 to 50 years, so the strength of the company writing the contract matters a lot.
          </p>
          <p>
            Underwriting speed is rated as {carrier.underwriting_speed ?? "varies"}. {carrier.no_medical_exam_available
              ? `${carrier.carrier} offers a no-medical-exam path for qualifying healthy applicants, which can deliver a decision in minutes to a few days.`
              : `${carrier.carrier} requires a full medical exam for all policies. The trade-off is that fully underwritten applicants typically get lower rates and access to higher coverage amounts.`}
          </p>
          <p>
            {carrier.policy_types && carrier.policy_types.length > 1
              ? `${carrier.carrier} offers ${carrier.policy_types.length} policy types: ${carrier.policy_types.join(", ")}. This range of options makes the provider suitable for a wide set of needs, from simple income replacement (term) to estate planning and cash value strategies (whole, universal).`
              : `${carrier.carrier} focuses on term life insurance, the simplest and cheapest type per dollar of coverage. For most families, term is exactly the right product.`}
          </p>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to apply with {carrier.carrier}</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Applying with {carrier.carrier} takes 15 to 30 minutes online if you have your basic info ready: date of birth, height, weight, lifestyle questions (tobacco use, alcohol consumption), and basic medical history. Fully underwritten policies may require a paramedical exam at your home or office, paid for by the carrier.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4 text-ink-soft">
          <li className="list-disc ml-4">Get an online quote based on age, health class, and coverage amount</li>
          <li className="list-disc ml-4">Complete the application (health questions, beneficiary, payment info)</li>
          <li className="list-disc ml-4">Submit for underwriting (instant decision or full review)</li>
          <li className="list-disc ml-4">Take a paramedical exam if required (typically free, 30 minutes at home)</li>
          <li className="list-disc ml-4">Review and sign the offer once approved</li>
        </ul>
        <div className="mt-6">
          <a
            href={carrier.quote_url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pill pill-ink"
          >
            Start a {carrier.carrier} quote <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-line pb-6">
              <div className="font-display font-semibold text-lg mb-2">{faq.question}</div>
              <div className="text-mute text-[0.9375rem] leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Ready to get a {carrier.carrier} life quote?
            </h2>
            <p className="text-ink/70 mt-2">
              {carrier.no_medical_exam_available
                ? "No exam required for qualifying applicants. Decision in minutes."
                : "Initial quote in minutes. Full underwriting takes 2 to 6 weeks."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={carrier.quote_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Get my quote <span aria-hidden>↗</span>
            </a>
            <Link href="/insurance/life" className="pill pill-ghost">
              Compare other providers
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className={`font-display font-extrabold text-2xl ${mono ? "tabular" : ""}`}>{value}</div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute mb-1">{label}</div>
      <div className="font-mono tabular font-semibold text-sm">{value}</div>
    </div>
  );
}

function policyLabel(slug: string): string {
  const map: Record<string, string> = {
    term: "Term life",
    whole: "Whole life",
    universal: "Universal life",
    variable: "Variable universal",
    "final-expense": "Final expense",
  };
  return map[slug] ?? slug;
}
