'use client';

import { useState } from 'react';
import Link from 'next/link';
import { rateLabel, type SavingsOffer } from '@/lib/savings-rates';

const statusLabels = { confirmed: 'APY confirmed', unconfirmed: 'APY unconfirmed', closed: 'Closed to new applicants' };

export function SavingsRateTracker({ observations, dates }: { observations: SavingsOffer[]; dates: string[] }) {
  const [date, setDate] = useState(dates[0]!);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [sort, setSort] = useState('apy');
  const rows = observations.filter(o => o.checked === date && (status === 'all' || o.status === status)
    && o.name.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) =>
    sort === 'name' ? a.name.localeCompare(b.name) : (b.apy ?? -1) - (a.apy ?? -1) || a.name.localeCompare(b.name));

  return (
    <section id="observations" className="max-w-(--max-w-page) mx-auto px-6 py-12">
      <h2 className="font-display font-bold text-3xl mb-3">Compare recorded rates</h2>
      <p className="text-mute max-w-3xl mb-7">Choose a check date to see what we recorded then. Missing rates are shown explicitly. A failed check does not mean an account pays no interest.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <label className="text-sm font-medium">Search accounts<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Bank or account name" className="block w-full border border-line bg-white rounded-xl p-3 mt-2" /></label>
        <label className="text-sm font-medium">Check date<select value={date} onChange={e => setDate(e.target.value)} className="block w-full border border-line bg-white rounded-xl p-3 mt-2">{dates.map(d => <option key={d} value={d}>{d}{d === dates[0] ? ' (latest check)' : ''}</option>)}</select></label>
        <label className="text-sm font-medium">Rate status<select value={status} onChange={e => setStatus(e.target.value)} className="block w-full border border-line bg-white rounded-xl p-3 mt-2"><option value="all">All accounts</option><option value="confirmed">APY confirmed</option><option value="unconfirmed">APY unconfirmed</option><option value="closed">Closed to new applicants</option></select></label>
        <label className="text-sm font-medium">Sort by<select value={sort} onChange={e => setSort(e.target.value)} className="block w-full border border-line bg-white rounded-xl p-3 mt-2"><option value="apy">Observed APY, high to low</option><option value="name">Account name</option></select></label>
      </div>
      <p role="status" className="text-sm text-mute mb-5">{rows.length} {rows.length === 1 ? 'account' : 'accounts'} · Checks dated {date}{date !== dates[0] ? ' · Historical snapshot' : ''}</p>
      <div className="space-y-4">
        {rows.map(o => {
          const history = observations.filter(h => h.key === o.key && h.checked <= date).sort((a, b) => b.checked.localeCompare(a.checked));
          return <article key={o.key} className="card p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr_180px] gap-5">
              <div>
                <span className={`chip ${o.status === 'confirmed' ? 'chip-lime' : 'chip-mute'} mb-3`}>{statusLabels[o.status]}</span>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3"><Link className="hover:underline" href={o.review}>{o.name}</Link></h3>
                <p className="text-ink-soft leading-relaxed max-w-3xl">{o.condition}</p>
                <p className="text-xs text-mute mt-3">Checked <time dateTime={o.checked}>{o.checked}</time>{o.source_date && <> · Provider disclosure dated <time dateTime={o.source_date}>{o.source_date}</time></>}</p>
              </div>
              <div className="md:text-right">
                <p className="text-xs text-mute uppercase tracking-wider mb-1">Observed APY</p>
                <p className={`font-display font-bold ${o.apy === null ? 'text-xl' : 'text-4xl'} tabular`}>{o.closed ? 'Not applicable' : rateLabel(o.apy)}</p>
                <p className="text-sm text-mute mt-3">Minimum to open: {o.minimum === null ? 'Check provider' : `$${o.minimum.toLocaleString('en-US')}`}</p>
                <a href={o.source} target="_blank" rel="noopener noreferrer" className="u-link inline-block py-3 text-sm mt-2">Provider source ↗</a>
              </div>
            </div>
            <details className="mt-5 pt-4 border-t border-line">
              <summary className="cursor-pointer font-medium text-sm py-2">View {history.length} recorded {history.length === 1 ? 'check' : 'checks'}</summary>
              <ol className="space-y-4 mt-4">
                {history.map(h => <li key={h.checked} className="text-sm leading-relaxed border-l-2 border-line pl-4">
                  <p className="font-semibold"><time dateTime={h.checked}>{h.checked}</time> · {h.closed ? 'Closed to new applicants' : h.apy === null ? 'APY unconfirmed' : `${rateLabel(h.apy)} APY`}</p>
                  <p className="text-mute mt-1">{h.condition}</p><p className="text-mute mt-1">{h.note}</p>
                  <a href={h.source} className="u-link inline-block py-2" target="_blank" rel="noopener noreferrer">Source for this check ↗</a>
                </li>)}
              </ol>
            </details>
          </article>;
        })}
        {!rows.length && <div className="card p-8"><h3 className="font-bold text-lg mb-2">No accounts match these filters</h3><button type="button" className="pill pill-ghost" onClick={() => { setQuery(''); setStatus('all'); }}>Clear search and status filters</button></div>}
      </div>
    </section>
  );
}
