import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  loadCarrier,
  loadCarriers,
  formatCurrency,
  formatStatesAvailable,
} from "@/lib/insurance";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadCarriers("home").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const carrier = loadCarrier("home", slug);
  if (!carrier) return { title: "Home Insurance Review | Fintiex" };
  const desc = `${carrier.carrier} home insurance review for 2026. Premium range, AM Best rating, JD Power score, pros and cons. ${carrier.best_for}.`;
  return {
    title: `${carrier.carrier} Home Insurance Review (2026) | Fintiex`,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/insurance/home/${carrier.slug}` },
  };
}

function buildFaqs(carrier: ReturnType<typeof loadCarrier> & object): FAQItem[] {
  const name = carrier.carrier;
  return [
    {
      question: `Is ${name} home insurance worth it?`,
      answer: `${name} earned ${carrier.rating.toFixed(1)} out of 5 in our 2026 review. It carries an AM Best rating of ${carrier.am_best_rating ?? "N/R"}${
        carrier.jd_power_satisfaction ? ` and a JD Power home insurance satisfaction score of ${carrier.jd_power_satisfaction} out of 1,000` : ""
      }. Best for: ${carrier.best_for.toLowerCase()}.`,
    },
    {
      question: `How much does ${name} home insurance cost?`,
      answer: carrier.avg_annual_premium
        ? `Average premiums range from ${formatCurrency(carrier.avg_annual_premium.min)} to ${formatCurrency(carrier.avg_annual_premium.max)} per year for a typical $300K single-family home with $250K dwelling coverage and a $1,000 deductible. Your rate depends on home age, construction, claims history, ZIP code, and credit.`
        : `${name} pricing varies based on home value, age, location, and coverage limits. Get a free quote to see your exact rate.`,
    },
    {
      question: `Does ${name} cover floods and earthquakes?`,
      answer: `Standard ${name} policies exclude flood and earthquake damage, which matches industry standard. ${
        carrier.flood_coverage_separate ? "You will need a separate flood policy through NFIP or a private insurer." : ""
      } ${carrier.earthquake_coverage_separate ? "Earthquake coverage is available as a separate endorsement in most states." : ""}`,
    },
    {
      question: `What does a standard ${name} home policy cover?`,
      answer: carrier.coverage_includes
        ? `Standard coverage includes: ${carrier.coverage_includes.join(", ")}. Most policies include personal property at 50 to 70 percent of dwelling coverage and liability at $100K to $500K.`
        : "Standard coverage includes dwelling, other structures, personal property, loss of use, liability, and medical payments to others.",
    },
    {
      question: `Will I save by bundling ${name} home with auto?`,
      answer: carrier.bundling_discount_pct
        ? `Yes. Bundling can save you about ${carrier.bundling_discount_pct} percent on both policies with ${name}. Always run the numbers against two standalone quotes to confirm the bundle wins.`
        : `${name} offers limited bundling savings. Compare bundled price against two standalone quotes before deciding.`,
    },
    {
      question: `Is ${name} available in my state?`,
      answer: Array.isArray(carrier.states_available)
        ? `${name} writes home policies in ${carrier.states_available.length} states. Check the quote tool for state availability.`
        : `${name} writes home policies in all 50 states.`,
    },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const carrier = loadCarrier("home", slug);
  if (!carrier) notFound();

  const faqs = buildFaqs(carrier);
  const premium = carrier.avg_annual_premium
    ? `${formatCurrency(carrier.avg_annual_premium.min)} to ${formatCurrency(carrier.avg_annual_premium.max)}`
    : "Varies";

  return (
    <article className="bg-bg">
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
          { name: "Home", href: "/insurance/home" },
          { name: carrier.carrier, href: `/insurance/home/${carrier.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/insurance" className="u-link">Insurance</Link>{" / "}
            <Link href="/insurance/home" className="u-link">Home</Link>
          </div>
          <span className="chip chip-lime mb-5">
            <span className="pulse-dot" /> Home insurance review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {carrier.carrier} Home Insurance Review (2026)
          </h1>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {carrier.carrier} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {carrier.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. Best for: {carrier.best_for.toLowerCase()}. Here is the full breakdown.
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
            <Link href="/insurance/home" className="pill pill-ghost">
              Compare all 8 home carriers
            </Link>
          </div>
        </div>
      </section>

      {/* KEY STATS CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">Key stats</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Annual premium" value={premium} mono />
            <Stat label="AM Best" value={carrier.am_best_rating ?? "N/R"} mono />
            <Stat
              label="JD Power"
              value={carrier.jd_power_satisfaction ? `${carrier.jd_power_satisfaction} / 1000` : "Not rated"}
              mono
            />
            <Stat
              label="Bundling discount"
              value={carrier.bundling_discount_pct ? `Up to ${carrier.bundling_discount_pct}%` : "N/A"}
              mono
            />
          </div>
          <div className="mt-6 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <KV label="States available" value={formatStatesAvailable(carrier.states_available)} />
            <KV label="Flood coverage" value={carrier.flood_coverage_separate ? "Separate policy" : "Included"} />
            <KV label="Digital experience" value={titleCase(carrier.digital_experience ?? "Varies")} />
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

      {/* COVERAGE INCLUDES */}
      {carrier.coverage_includes && carrier.coverage_includes.length > 0 && (
        <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Coverage available</h2>
          <div className="flex flex-wrap gap-2 max-w-3xl mb-5">
            {carrier.coverage_includes.map((c) => (
              <span key={c} className="chip chip-mute">
                {c}
              </span>
            ))}
          </div>
          <p className="text-mute text-base max-w-3xl leading-relaxed">
            {carrier.carrier} includes the six standard parts of a home policy. Flood and earthquake coverage are excluded by default, which is industry standard. Add them as separate policies if you are in a high-risk zone.
          </p>
        </section>
      )}

      {/* BEST FOR CALLOUT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Best for</div>
          <p className="text-[1.0625rem] leading-relaxed">
            {carrier.carrier} is the right pick if you prioritize {carrier.best_for.toLowerCase()}. It earns top marks for{" "}
            {carrier.am_best_rating === "A++" ? "financial strength" : "claims process"}
            {carrier.digital_experience === "excellent" ? " and digital experience" : ""}
            . If you do not match this profile, compare against the other top picks on our{" "}
            <Link href="/insurance/home" className="u-link">
              home insurance hub
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
            {carrier.carrier} carries an AM Best financial strength rating of {carrier.am_best_rating ?? "not rated"}, which matters more in home insurance than almost any other line. When a hurricane, wildfire, or hail storm hits a region, claims can spike fast. A well-capitalized carrier pays them. A weak one can struggle. The carrier writes policies in {formatStatesAvailable(carrier.states_available)} and is best known for {carrier.best_for.toLowerCase()}.
          </p>
          <p>
            Premiums for a typical $300K single-family home, $250K dwelling, and a $1,000 deductible run {premium} per year with {carrier.carrier}. That puts the carrier{" "}
            {carrier.avg_annual_premium && carrier.avg_annual_premium.max < 1500
              ? "on the low end"
              : carrier.avg_annual_premium && carrier.avg_annual_premium.min > 1500
              ? "on the higher end"
              : "around the middle"}{" "}
            of the home insurance market. Of course, premium varies sharply by ZIP code, home age, roof condition, claims history, and credit.
          </p>
          <p>
            On customer satisfaction, {carrier.carrier} {carrier.jd_power_satisfaction
              ? `scored ${carrier.jd_power_satisfaction} on the latest JD Power US Home Insurance Study. That puts it ${
                  carrier.jd_power_satisfaction >= 850
                    ? "well above the industry average"
                    : carrier.jd_power_satisfaction >= 810
                    ? "right around average"
                    : "below the industry average"
                }`
              : "is not yet rated by JD Power, often because the carrier is too new or too small to qualify for the study"}
            . The digital experience is rated {carrier.digital_experience ?? "varies"}.
          </p>
        </div>
      </section>

      {/* HOW TO GET A QUOTE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to get a {carrier.carrier} quote</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Getting a quote from {carrier.carrier} takes about 10 to 15 minutes online. You will need your home address, year built, square footage, roof type and age, and an estimate of the dwelling replacement cost. Most carriers also ask about prior claims in the last 5 years and your current insurance status.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4 text-ink-soft">
          <li className="list-disc ml-4">Visit the {carrier.carrier} home insurance page</li>
          <li className="list-disc ml-4">Enter your address, home details, and coverage info</li>
          <li className="list-disc ml-4">Pick coverage limits (set dwelling to replacement cost, not market value)</li>
          <li className="list-disc ml-4">Review the quote and apply bundling and other discounts</li>
          <li className="list-disc ml-4">Bind the policy online or speak to an agent</li>
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
              Ready to get a {carrier.carrier} home quote?
            </h2>
            <p className="text-ink/70 mt-2">Takes about 10 minutes. No commitment to bind.</p>
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
            <Link href="/insurance/home" className="pill pill-ghost">
              Compare other carriers
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

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
