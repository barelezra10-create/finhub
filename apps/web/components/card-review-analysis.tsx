import Link from "next/link";
const analysis: Record<string, { title: string; sections: { heading: string; text: string }[]; source: string }> = {
  "chase-sapphire-reserve": {
    title: "Sapphire Reserve: weigh the fee against your actual trips",
    sections: [
      { heading: "What does the $795 annual fee buy you?", text: "Start with benefits that replace planned expenses. If you fully use the $300 annual travel credit, the fee less that credit is $495. That is a planning subtotal, not a reduced billed fee. Other benefits may close the gap, but enrollment, booking restrictions and expiration can limit their value. Add authorized-user costs separately." },
      { heading: "How to read the purchase APR", text: "The current recorded range is variable and does not predict which rate you will receive. Older APR ranges in search results may describe an earlier offer. Check Chase’s pricing disclosure and your own account terms. When borrowing costs enter the calculation, rewards alone are not a reliable reason to choose this card." },
      { heading: "Avoid counting travel value twice", text: "Purchases covered by the annual travel credit do not earn points. If you count a credit toward your annual-cost calculation, do not also assign full purchase rewards to the same credited amount. Calculate the first-year bonus separately from recurring benefits." },
    ], source: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
  },
  "citi-double-cash": {
    title: "Double Cash: understand the two parts of the reward",
    sections: [
      { heading: "How much is 2% on your spending?", text: "A $1,000 eligible purchase generates $10 from the purchase component and another $10 as the matching purchase balance is paid, under Citi’s rules. That totals $20 before interest or fees. It is not a reason to carry debt: interest expense can exceed the cash back." },
      { heading: "Purchase rewards and balance transfers work differently", text: "A balance transfer does not earn purchase rewards. Citi’s product page says its introductory balance-transfer APR does not apply to purchases. Read how a transferred balance affects the purchase grace period before using the same card for new spending." },
      { heading: "Compare a flat rate with category spending", text: "A higher dining or travel rate can beat a flat rate for those purchases, while earning less on the rest of your budget. Use three months of statements to build a representative spending mix, then compare total rewards after costs. Do not turn an unverified fee into a zero in your calculation." },
    ], source: "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
  },
  "chime-credit-builder": {
    title: "Chime Credit Builder is now a legacy product",
    sections: [
      { heading: "Can new members still open Credit Builder?", text: "Chime says Credit Builder is no longer available to new members. Existing members can continue using their account. We retain this page to answer questions about the older product; it is not a current application recommendation." },
      { heading: "Credit Builder and Chime Card are different products", text: "The legacy account uses separate checking and Credit Builder balances, with funds moved into the secured account before spending. Chime Card has a different balance experience. Do not assume a newer Chime Card benefit also applies to the legacy Credit Builder account." },
      { heading: "Who issues it, and what can it do for credit?", text: "Chime identifies The Bancorp Bank, N.A. or Stride Bank, N.A. as the issuing bank; check the back of your card. It reports payment activity to the three major credit bureaus. On-time payments can help, but a particular score increase is not guaranteed. Late payments can hurt." },
    ], source: "https://help.chime.com/what-is-credit-builder-603a5ae8",
  },
};
export function CardReviewAnalysis({ slug }: { slug: string }) {
  const guide = analysis[slug];
  if (!guide) return null;
  return <section className="max-w-(--max-w-page) mx-auto px-6 py-10"><div className="max-w-3xl"><h2 className="font-display text-3xl font-bold mb-6">{guide.title}</h2>{guide.sections.map(s => <div className="mb-7" key={s.heading}><h3 className="font-bold text-xl mb-3">{s.heading}</h3><p className="text-mute leading-relaxed">{s.text}</p></div>)}<p className="text-sm text-mute">Analysis updated September 23, 2026. <a className="u-link" href={guide.source} target="_blank" rel="noopener noreferrer">Issuer source</a> · <Link className="u-link" href="/editorial-policy">Our editorial process</Link></p>{slug === "chime-credit-builder" && <p className="mt-5"><Link className="pill pill-ghost" href="/credit-cards/secured">Compare current secured-card listings</Link></p>}</div></section>;
}
