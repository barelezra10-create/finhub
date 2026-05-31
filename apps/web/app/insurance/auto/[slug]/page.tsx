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
  return loadCarriers("auto").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const carrier = loadCarrier("auto", slug);
  if (!carrier) return { title: "Auto Insurance Review | Fintiex" };
  const desc = `${carrier.carrier} auto insurance review for 2026. Premium range, AM Best rating, JD Power score, pros and cons. ${carrier.best_for}.`;
  return {
    title: `${carrier.carrier} Auto Insurance Review (2026) | Fintiex`,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/insurance/auto/${carrier.slug}` },
  };
}

function buildFaqs(carrier: ReturnType<typeof loadCarrier> & object): FAQItem[] {
  const name = carrier.carrier;
  return [
    {
      question: `Is ${name} a good auto insurance company?`,
      answer: `${name} earned ${carrier.rating.toFixed(1)} out of 5 in our 2026 review. It carries an AM Best rating of ${carrier.am_best_rating ?? "N/R"}${
        carrier.jd_power_satisfaction ? ` and a JD Power satisfaction score of ${carrier.jd_power_satisfaction} out of 1,000` : ""
      }. Best for: ${carrier.best_for.toLowerCase()}.`,
    },
    {
      question: `How much does ${name} auto insurance cost?`,
      answer: carrier.avg_annual_premium
        ? `Average premiums range from ${formatCurrency(carrier.avg_annual_premium.min)} to ${formatCurrency(carrier.avg_annual_premium.max)} per year for full coverage. Your actual rate depends on driving record, vehicle, location, credit score, and coverage limits. Get a quote at ${name} to see your exact rate.`
        : `${name} pricing varies based on driving record, vehicle, and location. Get a free quote to see your exact rate.`,
    },
    {
      question: `What discounts does ${name} offer?`,
      answer: `${name} offers a bundling discount of about ${carrier.bundling_discount_pct ?? 0} percent for combining auto with home or renters insurance${
        carrier.good_driver_discount_pct ? `, plus up to ${carrier.good_driver_discount_pct} percent off for clean driving records` : ""
      }. Additional discounts may apply for paperless billing, multi-vehicle, and safety features.`,
    },
    {
      question: `Is ${name} available in my state?`,
      answer: Array.isArray(carrier.states_available)
        ? `${name} writes auto policies in ${carrier.states_available.length} states. Check the quote tool for state availability.`
        : `${name} writes auto policies in all 50 states.`,
    },
    {
      question: `How fast is the ${name} claims process?`,
      answer: `${name} accepts claims via ${carrier.claims_process === "all" ? "app, phone, online, and agent" : carrier.claims_process ?? "multiple channels"}. Most simple claims are settled within 7 to 14 days. Complex claims (totaled vehicles, injuries) can take 30 to 60 days.`,
    },
    {
      question: `Should I bundle ${name} auto with home insurance?`,
      answer: carrier.bundling_discount_pct
        ? `Bundling can save you about ${carrier.bundling_discount_pct} percent on both policies with ${name}. Always run the numbers against two standalone quotes to make sure bundling beats buying separately.`
        : `${name} offers limited or no bundling discount in some states. Compare bundled price against two standalone quotes to be sure.`,
    },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const carrier = loadCarrier("auto", slug);
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
          { name: "Auto", href: "/insurance/auto" },
          { name: carrier.carrier, href: `/insurance/auto/${carrier.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/insurance" className="u-link">Insurance</Link>{" / "}
            <Link href="/insurance/auto" className="u-link">Auto</Link>
          </div>
          <span className="chip chip-lime mb-5">
            <span className="pulse-dot" /> Auto insurance review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {carrier.carrier} Auto Insurance Review (2026)
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
            <Link href="/insurance/auto" className="pill pill-ghost">
              Compare all 8 auto carriers
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
            <KV label="Good driver discount" value={carrier.good_driver_discount_pct ? `Up to ${carrier.good_driver_discount_pct}%` : "N/A"} />
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

      {/* COVERAGE TYPES */}
      {carrier.coverage_types_offered && carrier.coverage_types_offered.length > 0 && (
        <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Coverage available</h2>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {carrier.coverage_types_offered.map((type) => (
              <span key={type} className="chip chip-mute">
                {coverageLabel(type)}
              </span>
            ))}
          </div>
          <p className="text-mute text-base mt-5 max-w-3xl leading-relaxed">
            {carrier.carrier} writes the standard mix of auto policies. Most drivers will want full coverage (liability plus collision and comprehensive). Drivers with older paid-off cars may consider liability-only to save money, but only if you can afford to replace the vehicle out of pocket.
          </p>
        </section>
      )}

      {/* BEST FOR CALLOUT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Best for</div>
          <p className="text-[1.0625rem] leading-relaxed">
            {carrier.carrier} is the right pick if you prioritize {carrier.best_for.toLowerCase()}. The carrier scores especially well on{" "}
            {carrier.am_best_rating === "A++" ? "financial strength " : ""}
            {carrier.digital_experience === "excellent" ? "digital experience" : "claims service"}
            {carrier.jd_power_satisfaction && carrier.jd_power_satisfaction >= 870
              ? ", and customer satisfaction"
              : ""}
            . If you do not match this profile, compare against the other top picks on our{" "}
            <Link href="/insurance/auto" className="u-link">
              auto insurance hub
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
            {carrier.carrier} is one of the {carrier.am_best_rating === "A++" ? "highest-rated" : "well-known"} auto insurance carriers in the United States, with an AM Best financial strength rating of {carrier.am_best_rating ?? "not rated"}. The carrier is best known for {carrier.best_for.toLowerCase()}, with average annual premiums in the {premium} range for full coverage on a typical 35-year-old driver with a clean record.
          </p>
          <p>
            On the customer-experience side, {carrier.carrier} scored {carrier.jd_power_satisfaction ?? "not rated"} on the latest JD Power US Auto Insurance Study (1,000-point scale). That puts it{" "}
            {(carrier.jd_power_satisfaction ?? 0) >= 870
              ? "well above the industry average"
              : (carrier.jd_power_satisfaction ?? 0) >= 830
              ? "right around the industry average"
              : "below the industry average"}
            . The digital experience is rated {carrier.digital_experience ?? "varies"}, with a {carrier.digital_experience === "excellent" ? "best-in-class" : "functional"} app and online portal for policy management, claims, and ID cards.
          </p>
          <p>
            Bundling is a major lever: combining your auto policy with home or renters insurance can save about{" "}
            {carrier.bundling_discount_pct ?? 0} percent on both policies. {carrier.carrier} also offers a good driver discount of up to {carrier.good_driver_discount_pct ?? 0} percent for accident-free histories. Add in paperless billing, multi-vehicle, and safety feature discounts and the all-in savings can reach 30 to 40 percent off rack rate.
          </p>
        </div>
      </section>

      {/* HOW TO GET A QUOTE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to get a {carrier.carrier} quote</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Getting a quote from {carrier.carrier} takes about 10 minutes online. You will need your driver license number, vehicle VIN, current insurance declarations page (if any), and an idea of the coverage limits you want. The carrier may also run a soft credit check in states where credit-based insurance scoring is allowed.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4 text-ink-soft">
          <li className="list-disc ml-4">Visit the {carrier.carrier} quote page and start the auto application</li>
          <li className="list-disc ml-4">Enter ZIP code, driver and vehicle info, and prior insurance details</li>
          <li className="list-disc ml-4">Select your coverage limits (we recommend at least 100/300/100 liability)</li>
          <li className="list-disc ml-4">Review the quote, apply any discounts (good driver, bundling, paperless)</li>
          <li className="list-disc ml-4">Bind the policy online or call to finalize with an agent</li>
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
              Ready to get a {carrier.carrier} quote?
            </h2>
            <p className="text-ink/70 mt-2">
              Takes about 10 minutes. No commitment to bind.
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
            <Link href="/insurance/auto" className="pill pill-ghost">
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

function coverageLabel(slug: string): string {
  const map: Record<string, string> = {
    "liability-only": "Liability only",
    "full-coverage": "Full coverage",
    "minimum-state": "Minimum state",
    "high-value": "High-value vehicles",
  };
  return map[slug] ?? slug;
}
