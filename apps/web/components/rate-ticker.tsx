import Link from 'next/link';
import { savingsOffer, rateLabel, SAVINGS_CHECKED } from '@/lib/savings-rates';

export function RateTicker() {
  return <div className="bg-ink text-white px-4 text-xs">
    <Link href="/savings" className="md:hidden flex items-center justify-center min-h-11 underline underline-offset-4">
      Savings rates · {SAVINGS_CHECKED} · Conditions & sources →
    </Link>
    <div className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-1">
      <span className="font-semibold">Savings snapshot · {SAVINGS_CHECKED}</span>
      {['bread', 'bask', 'marcus'].map(key => {
        const offer = savingsOffer(key);
        return <Link className="inline-flex items-center min-h-6 underline underline-offset-4" key={key} href={offer.review}>
          {offer.name} · {rateLabel(offer.apy)} APY
        </Link>;
      })}
      <Link className="inline-flex items-center min-h-6 underline" href="/savings">Conditions & sources →</Link>
    </div>
  </div>;
}
