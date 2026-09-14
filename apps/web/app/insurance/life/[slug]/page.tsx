import { EditorialNote } from '@/components/editorial-note';
import { ProductStatus } from '@/components/product-status';
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
  if (!carrier) return { title: "Life Insurance Review" };
  if (carrier.availability === "unavailable" && carrier.status_page) return { title: carrier.status_page.title, description: carrier.status_page.description, alternates: { canonical: `/insurance/life/${carrier.slug}` } };
  const desc = `${carrier.carrier} life insurance profile: legacy product details, verification status, provider links and questions to ask about a current policy offer.`;
  return {
    title: `${carrier.carrier} Life Insurance Review (2026)`,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/insurance/life/${carrier.slug}` },
  };
}

function buildFaqs(carrier: ReturnType<typeof loadCarrier> & object): FAQItem[] {
  return [
    { question: `Are these ${carrier.carrier} terms verified?`, answer: 'The legacy product details below have not received a fresh provider check. Confirm the issuing insurer, current policy documents and eligibility directly before relying on any listed terms.' },
    { question: 'Does a no-exam quote guarantee approval?', answer: 'An initial quote does not establish an approved policy. Ask the provider what information it needs, whether medical evidence may be required, and when coverage takes effect.' },
    { question: 'How should I compare quotes?', answer: 'Compare the same coverage amount, term, premium guarantees and riders. Ask for the actual policy offer and separate guaranteed benefits from projections.' },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const carrier = loadCarrier("life", slug);
  if (!carrier) notFound();
  if (carrier.availability === "unavailable" && carrier.status_page) return <ProductStatus info={carrier.status_page} href={`/insurance/life/${carrier.slug}`} parentHref="/insurance/life" parentLabel="Life insurance" />;

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
            Explore this provider’s legacy product summary and the questions to confirm in a current policy offer. Detailed terms are awaiting verification.
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            Published by Fintiex · Legacy record dated {carrier.last_updated}
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
              Explore life insurance profiles
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-(--max-w-page) mx-auto px-6"><EditorialNote /><p className="text-sm text-mute mb-6">The figures, ratings from external agencies, policy options and provider claims below are legacy data awaiting verification. They are not a current quote or an independent recommendation. Page wording revised September 14, 2026.</p></div>
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
            <KV label="Verification" value="Pending provider check" />
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

      {/* HOW TO APPLY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to apply with {carrier.carrier}</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Ask {carrier.carrier} which application steps and documents apply to the specific policy. Confirm any medical-evidence requirements, costs and timing directly.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4 text-ink-soft">
          <li className="list-disc ml-4">Get an online quote based on age, health class, and coverage amount</li>
          <li className="list-disc ml-4">Complete the application (health questions, beneficiary, payment info)</li>
          <li className="list-disc ml-4">Submit for underwriting and wait for the actual offer</li>
          <li className="list-disc ml-4">Provide additional medical evidence if the provider requires it</li>
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
              Confirm current eligibility, pricing and application requirements with the provider.
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
