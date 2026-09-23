import records from '@/data/savings/observations.json';

/** Observations are append-only; a failed check never becomes a zero rate. */
export type SavingsOffer = {
  key: string;
  name: string;
  apy: number | null;
  minimum: number | null;
  condition: string;
  source: string;
  checked: string;
  review: string;
  closed?: boolean;
  status: 'confirmed' | 'unconfirmed' | 'closed';
  note: string;
  source_date?: string;
};
export const savingsObservations = records as SavingsOffer[];
export const savingsCheckDates = [...new Set(savingsObservations.map(o => o.checked))].sort().reverse();
export const SAVINGS_CHECKED = savingsCheckDates[0]!;
export function savingsSnapshot(date: string): SavingsOffer[] {
  // Return actual observations for the chosen check date, never interpolated rates.
  return savingsObservations.filter(o => o.checked === date);
}
// A partial check updates only those accounts; each retains its real check date.
export const savingsOffers = [...new Map(
  [...savingsObservations].sort((a,b) => a.checked.localeCompare(b.checked)).map(o => [o.key, o]),
).values()];
export function savingsOffer(key: string) {
  const offer = savingsOffers.find(o => o.key === key);
  if (!offer) throw new Error('Unknown savings offer');
  return offer;
}
export function savingsHistory(key: string) {
  return savingsObservations.filter(o => o.key === key).sort((a, b) => b.checked.localeCompare(a.checked));
}
export function rateLabel(rate: number | null) {
  return rate === null ? 'Check provider' : rate.toFixed(2) + '%';
}
export const hysaOptions = savingsOffers.filter(o => o.apy !== null && !o.closed)
  .sort((a, b) => b.apy! - a.apy!)
  .map(o => ({ lender: o.name, apy: o.apy!, detail: `${o.condition} Checked ${o.checked}.`, href: o.review, tag: undefined as string | undefined }));
