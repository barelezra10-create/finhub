export const CARD_COMPARISON_DATE = "2026-09-23";
export const cardComparisons = [
  {
    slug: "sapphire-preferred-vs-reserve",
    title: "Chase Sapphire Preferred vs. Reserve: Fees & Travel Value",
    description: "Compare Sapphire Preferred and Reserve fees, rewards and travel credits, with a practical annual-cost example and dated issuer sources.",
    cards: ["chase-sapphire-preferred", "chase-sapphire-reserve"],
    category: "travel",
    answer: "Start with the annual cost you can justify every year. Preferred has a lower fee; Reserve needs enough additional travel value to cover the difference. A first-year bonus should not decide whether you keep a card for several years.",
    sections: [
      { heading: "Which Sapphire fits your travel habits?", text: "Preferred is the simpler starting point if you want to limit fixed costs. Reserve deserves a closer look if you travel frequently and can use its benefits without changing your spending. Write down the trips you already plan to take, then identify which benefits would replace an expense on those trips." },
      { heading: "Compare booking channels before comparing multipliers", text: "Both cards reward eligible Chase Travel bookings, but Reserve also has higher earning rates for eligible direct flights and hotels. A portal multiplier is useful only when the booking price, cancellation rules and service arrangements work for you. Compare the same itinerary directly with the provider before assigning a value to extra points." },
      { heading: "Keep welcome offers separate", text: "The table shows the dated offers in our card records. Check eligibility and the spending deadline at Chase before applying. Divide your decision into the first year and a normal renewal year; an introductory bonus can make those two calculations look very different." },
    ],
    example: { heading: "Annual-fee example: what has to cover the gap?", text: "The displayed annual fees differ by $700. If you would fully use Reserve’s $300 annual travel credit on purchases you already planned, $400 of that difference remains before considering either card’s other benefits. This deliberately gives Preferred no credit offset; any Preferred benefit you actually use increases the value Reserve must provide. This is an illustrative cost comparison, not a cash valuation of points or a universal winner." },
    faqs: [{ question: "Is Sapphire Reserve automatically better than Preferred?", answer: "No. More benefits and a higher fee can be a poor match when you would not use those benefits. Compare recurring value after fees, not the number of features." }, { question: "Should I compare the points bonuses as cash?", answer: "Only with an explicit redemption assumption. The same number of points can produce different value depending on the redemption. Check the actual booking or cash option you intend to use." }],
  },
  {
    slug: "venture-vs-venture-x",
    title: "Capital One Venture vs. Venture X: Annual Cost & Rewards",
    description: "Compare Venture and Venture X annual fees, everyday miles and portal rewards. Work through the extra cost using your own travel habits.",
    cards: ["capital-one-venture", "capital-one-venture-x"],
    category: "travel",
    answer: "Both cards offer a 2-mile base earning rate on eligible purchases. The decision turns on whether Venture X’s extra travel benefits and booking rewards justify its higher annual fee for your actual trips.",
    sections: [
      { heading: "Everyday spending alone does not settle the choice", text: "At the shared base rate, moving the same ordinary purchases from Venture to Venture X does not increase your miles. Start by comparing the fixed annual cost, then add only the incremental benefits you expect to use. Do not count rewards you would earn with either card as an upgrade benefit." },
      { heading: "Where the travel booking rates differ", text: "Venture earns 5 miles per dollar on eligible hotels, vacation rentals and rental cars booked through Capital One Travel. Venture X earns 10 on portal hotels and rental cars, with separate 5-mile categories. Check the exact booking category; a vacation rental should not be treated as a hotel in a rewards estimate." },
      { heading: "Price the trip before valuing the perks", text: "Compare the portal price with a direct booking and read the cancellation conditions. For lounge access, check your usual airports, enrollment and guest policies. Count avoided expenses rather than the advertised retail price of a benefit you would never buy." },
    ],
    example: { heading: "A $300 annual-fee gap", text: "The listed $395 and $95 fees differ by $300. On $20,000 of purchases earning only the base rate, either card earns 40,000 miles before exclusions. For an eligible $2,000 hotel booking through Capital One Travel, a 10-mile rate instead of 5 produces 10,000 extra miles. At an assumed 1 cent per mile, that difference would be $100. The assumed value is not guaranteed; benefits, credits, price differences and interest are excluded from this example." },
    faqs: [{ question: "Does Venture X earn more on every purchase?", answer: "No. Both cards list 2 miles per dollar on ordinary eligible purchases. The higher Venture X multipliers depend on the booking category and channel." }, { question: "Can a travel credit be treated as cash?", answer: "Value a restricted credit only to the extent that it offsets spending you would otherwise make. Check booking requirements, expiration and whether the price is competitive." }],
  },
  {
    slug: "double-cash-vs-freedom-unlimited",
    title: "Citi Double Cash vs. Chase Freedom Unlimited: Cash Back Compared",
    description: "Compare Double Cash and Freedom Unlimited with a worked spending example, category rewards, purchase-interest cautions and issuer sources.",
    cards: ["citi-double-cash", "chase-freedom-unlimited"],
    category: "cash-back",
    answer: "Double Cash’s 2% total on eligible purchases rewards broad spending when you buy and repay. Freedom Unlimited combines a lower base rate with higher dining, drugstore and Chase Travel rates. Your spending mix determines which earns more.",
    sections: [
      { heading: "Flat rewards or higher category rates?", text: "Double Cash combines 1% when buying with 1% as you pay. Freedom Unlimited earns 1.5% on other purchases, 3% on dining and drugstores, and 5% through Chase Travel. Citi also has a higher rate on specified Citi Travel bookings. Compare booking prices and eligible categories before treating either portal as the better option." },
      { heading: "A balance transfer is a separate decision", text: "Citi states that its balance-transfer introductory APR does not cover purchases. Carrying a transferred balance can affect purchase-interest treatment. Compare the transfer fee, promotional period and repayment plan independently from rewards; balance transfers do not earn purchase cash back." },
      { heading: "Build a comparison from your last three statements", text: "Separate dining and drugstore spending from ordinary purchases, then identify travel you would actually book through a portal. Exclude fees, cash advances and transfers. Calculate ongoing rewards first, and evaluate any welcome offer separately so a one-time payment does not hide a weaker long-term fit." },
    ],
    example: { heading: "Worked example: $1,500 of spending per month", text: "Suppose $1,200 is ordinary eligible spending and $300 is dining, with no portal travel. Double Cash produces $30 once the matching purchases are paid; Freedom Unlimited produces $18 on ordinary spending plus $9 on dining, or $27. The difference is $36 over 12 identical months. At $1,000 ordinary spending and $500 dining, both produce $30 monthly. These examples exclude bonuses, interest, fees and special offers, and assume category eligibility." },
    faqs: [{ question: "Does Double Cash pay the full 2% at purchase?", answer: "No. Its headline rate combines 1% when you buy with another 1% as you pay the corresponding purchase balance, under Citi’s rewards rules." }, { question: "Which card wins for dining?", answer: "Freedom Unlimited’s listed dining rate is higher than Double Cash’s ordinary purchase rate. That does not determine which card earns more across your entire budget." }],
  },
] as const;
export function comparisonsForCard(slug: string) {
  return cardComparisons.filter(c => (c.cards as readonly string[]).includes(slug));
}
