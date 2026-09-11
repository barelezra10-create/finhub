import Link from 'next/link';
import {savingsOffer,rateLabel,SAVINGS_CHECKED} from '@/lib/savings-rates';
export function RateTicker(){return <div className="bg-ink text-white px-4 py-2 text-xs flex flex-wrap justify-center gap-x-6 gap-y-1"><span className="font-semibold">Savings snapshot · {SAVINGS_CHECKED}</span>{['bread','bask','marcus'].map(key=>{const o=savingsOffer(key);return <Link className="underline underline-offset-4" key={key} href={o.review}>{o.name} · {rateLabel(o.apy)} APY</Link>})}<Link className="underline" href="/savings">Conditions & sources →</Link></div>}
