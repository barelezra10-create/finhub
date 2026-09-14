import Link from 'next/link';
import { SavingsRateTracker } from '@/components/savings-rate-tracker';
import { BreadcrumbListSchema } from '@/components/schemas';
import { savingsObservations, savingsOffers, savingsCheckDates, SAVINGS_CHECKED } from '@/lib/savings-rates';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Savings Rate Tracker: Dated APYs, Sources & History',
  description: 'Track observed savings APYs with provider sources, balance requirements and check history. Compare dated snapshots and download the underlying dataset.',
  alternates: { canonical: '/savings/rate-tracker' },
};

export default function Page() {
  const confirmed = savingsOffers.filter(o => o.status === 'confirmed').length;
  const missing = savingsOffers.filter(o => o.status === 'unconfirmed').length;
  const firstDate = savingsCheckDates.at(-1)!;
  const dataset = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'Fintiex savings APY observations',
    description: 'Dated observations of selected US savings accounts, including APYs when confirmed, qualification conditions, source URLs and unsuccessful rate checks. Not a market-wide average or continuous rate history.',
    url: `${SITE_URL}/savings/rate-tracker`,
    creator: { '@type': 'Organization', name: 'Fintiex', url: `${SITE_URL}/about` },
    dateModified: SAVINGS_CHECKED,
    temporalCoverage: `${firstDate}/${SAVINGS_CHECKED}`,
    variableMeasured: ['APY (percent)', 'Minimum opening deposit (USD)', 'Check date', 'Confirmation status', 'Qualification conditions'],
    distribution: ['csv', 'json'].map(format => ({ '@type': 'DataDownload', encodingFormat: format === 'csv' ? 'text/csv' : 'application/json', contentUrl: `${SITE_URL}/savings/rate-tracker/data.${format}` })),
  };
  return <>
    <BreadcrumbListSchema items={[{ name: 'Home', href: '/' }, { name: 'Savings', href: '/savings' }, { name: 'Rate tracker', href: '/savings/rate-tracker' }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset).replace(/</g, '\\u003c') }} />
    <header className="border-b border-line bg-bg-soft">
      <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href="/savings" className="u-link">Savings</Link> / Rate tracker</nav>
        <span className="chip chip-lime mb-5">The numbers, with their sources</span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-3xl mb-6">Savings rate tracker</h1>
        <p className="text-lg text-mute max-w-3xl leading-relaxed">See the APYs we could confirm, the conditions attached, and when each account was checked. Compare recorded snapshots without treating an old rate as a current promise.</p>
        <p className="text-sm text-mute mt-5">Latest check: <time dateTime={SAVINGS_CHECKED}>{SAVINGS_CHECKED}</time> · Observations begin {firstDate} · Published by <Link href="/about" className="u-link">Fintiex</Link></p>
        <div className="flex flex-wrap gap-3 mt-7"><a href="#observations" className="pill pill-ink">Explore the observations ↓</a><a href="/savings/rate-tracker/data.csv" className="pill pill-ghost" download>Download full CSV</a><a href="#methodology" className="pill pill-ghost">Read the methodology</a></div>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[[savingsOffers.length, 'Accounts tracked'], [confirmed, 'APYs confirmed at latest check'], [missing, 'APYs awaiting confirmation'], [savingsCheckDates.length, 'Recorded check dates']].map(([value, label]) => <div key={label} className="card p-5"><dt className="text-sm text-mute">{label}</dt><dd className="font-display font-bold text-3xl mt-2 tabular">{value}</dd></div>)}
        </dl>
      </div>
    </header>
    <SavingsRateTracker observations={savingsObservations} dates={savingsCheckDates} />
    <section id="methodology" className="max-w-(--max-w-page) mx-auto px-6 pb-16">
      <div className="border-t border-line pt-10 grid md:grid-cols-2 gap-10">
        <div><h2 className="font-display font-bold text-3xl mb-5">How we record the rates</h2><div className="space-y-4 text-ink-soft leading-relaxed">
          <p>We check the linked provider page for the named account and record a numeric APY only when we can identify it. The check date is when Fintiex reviewed the source. A provider disclosure date, when shown, is separate and may be earlier.</p>
          <p>These are selected accounts already covered by Fintiex, not the whole market or a representative sample. CIT Platinum Savings and Savings Connect are separate products. Conditional rates retain their balance or deposit requirements. Temporary bonuses and paid membership tiers are excluded from the tracked rate.</p>
          <p>September 11 observations were preserved from our existing source-check snapshot. Later checks are appended. We do not infer what happened between checks, backfill earlier history, or treat a missing APY as zero. Identical observations do not prove a rate stayed unchanged between those dates.</p>
          <p>Checks are currently manual, with AI assistance. This page is not a live bank feed and has no guaranteed refresh interval. No named independent reviewer is assigned. Read our <Link href="/editorial-policy" className="u-link">editorial policy</Link>.</p>
        </div></div>
        <div><h2 className="font-display font-bold text-3xl mb-5">Use and cite the data</h2><div className="space-y-4 text-ink-soft leading-relaxed">
          <p>Downloads contain all {savingsObservations.length} records, including unconfirmed checks and the closed Discover savings listing. On-screen filters do not change the download. CSV APYs use percentage units: 3.75 means 3.75%. Blank APY or minimum-deposit cells mean unconfirmed or not applicable; the status column explains which.</p>
          <p>Suggested citation: Fintiex, “Savings rate tracker,” observations {firstDate}–{SAVINGS_CHECKED}, with this page’s URL and your access date. Cite the linked provider disclosure for an individual offer.</p>
          <p>Variable rates may change after a check. Confirm the rate you qualify for, fees and account eligibility before acting. This dataset does not measure customer service, investment returns, or deposit-insurance eligibility.</p>
          <div className="flex flex-wrap gap-3"><a href="/savings/rate-tracker/data.csv" className="pill pill-ink" download>Download CSV</a><a href="/savings/rate-tracker/data.json" className="pill pill-ghost" download>Download JSON</a></div>
          <p><Link href="/savings" className="u-link">Compare savings conditions</Link> · <Link href="/calculators/savings-goal" className="u-link">Plan a savings goal</Link></p>
        </div></div>
      </div>
    </section>
  </>;
}
