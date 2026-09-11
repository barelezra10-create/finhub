// Savings facts have one source; legacy JSON files retain route slugs only.
import { savingsOffers, rateLabel } from './savings-rates';
export type SavingsAccount = (typeof savingsOffers)[number];
export function loadSavingsAccounts(): SavingsAccount[] {
  return [...savingsOffers].sort((a,b) => (b.apy ?? -1) - (a.apy ?? -1));
}
export function loadSavingsAccount(key: string) {
  return savingsOffers.find(o => o.key === key || o.review.endsWith('/'+key)) ?? null;
}
export const formatApy = rateLabel;
export const formatMoney = (n:number) => '$'+n.toLocaleString('en-US');
export const savingsAccountHref = (slug:string) => `/savings/accounts/${slug}`;
