export interface CdRateRow {
  term: string;
  apy: string;
}

export interface CdBankFaq {
  question: string;
  answer: string;
}

export interface CdBank {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  chip: string;
  h1: string;
  kind: "brokered" | "bank";
  minDeposit: string;
  intro: string[];
  rateRows: CdRateRow[];
  ratesAsOf: string;
  ratesNote: string;
  compare: string[];
  watchOut: string;
  faqs: CdBankFaq[];
}

export const cdBanks: CdBank[] = [
  {
    slug: "edward-jones",
    name: "Edward Jones",
    metaTitle: "Edward Jones CD Rates: Current APYs and How They Compare (2026)",
    metaDesc:
      "Edward Jones sells brokered CDs paying roughly 3.70 to 3.90% APY across terms. See current rates, the $1,000 minimum, and how they stack up against top online banks.",
    chip: "CD Rates",
    h1: "Edward Jones CD Rates",
    kind: "brokered",
    minDeposit: "$1,000",
    intro: [
      "Edward Jones does not issue its own CDs. It sells brokered CDs, which are certificates issued by other FDIC-insured banks and offered through your Edward Jones brokerage account. The rate you see is set by the issuing bank, and Edward Jones passes it along, sometimes with a concession built into the price.",
      "Rates on new-issue CDs at Edward Jones have recently sat in the range of roughly 3.70 to 3.90% APY across terms from 3 months to 5 years. That puts them below the best online banks on short terms, and roughly in line with the market on longer terms. The minimum investment is typically $1,000.",
      "The main reason to buy a CD here is convenience: if your retirement and brokerage money already lives at Edward Jones, holding CDs in the same account keeps everything in one statement. The main reason not to is rate. If you are chasing yield alone, an online bank or a brokerage with a bigger CD marketplace will usually pay more.",
    ],
    rateRows: [
      { term: "3 months", apy: "~3.85%" },
      { term: "6 months", apy: "~3.80%" },
      { term: "12 months", apy: "~3.80%" },
      { term: "2 years", apy: "~3.70%" },
      { term: "3 years", apy: "~3.75%" },
      { term: "5 years", apy: "~3.90%" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "Brokered CD rates change daily with the bond market. The figures above are approximate ranges observed in mid-2026. Confirm live rates with your Edward Jones advisor or in your online account before buying.",
    compare: [
      "The best nationally available 12-month CDs from online banks were paying around 4.10% APY in mid-2026, and the FDIC's national average for a 1-year CD was about 1.99%. Edward Jones lands in between: far better than a typical branch bank, noticeably behind the online leaders.",
      "Because these are brokered CDs, you can sell before maturity on the secondary market instead of paying an early withdrawal penalty. That flexibility can matter for larger ladders, but the sale price depends on rates at the time, so you can lose principal if rates have risen.",
    ],
    watchOut:
      "Interest on most brokered CDs does not compound. A 3.80% brokered CD pays simple interest to your settlement account, so the effective yield on reinvested cash depends on what that account pays. Also confirm whether a concession or markup is built into the offered rate.",
    faqs: [
      {
        question: "Are Edward Jones CDs FDIC-insured?",
        answer:
          "Yes. The CDs are issued by FDIC-member banks, so the standard $250,000 per depositor, per issuing bank coverage applies. A useful side effect: by buying CDs from several different issuing banks inside one Edward Jones account, you can insure well over $250,000 in total.",
      },
      {
        question: "Can I withdraw early from an Edward Jones CD?",
        answer:
          "Not in the traditional sense. Brokered CDs have no early withdrawal option; instead you sell the CD on the secondary market at the current price. If rates have risen since you bought, the sale price will likely be below what you paid.",
      },
      {
        question: "Why are Edward Jones CD rates lower than online banks?",
        answer:
          "Edward Jones offers rates from the banks it partners with, and a distribution cost is effectively built in. Online banks pay more because they use CDs to gather deposits directly and have no branch or advisor overhead to cover.",
      },
      {
        question: "Do Edward Jones CDs automatically renew?",
        answer:
          "No. At maturity the principal and final interest land in your brokerage settlement account as cash. If you want to stay in CDs, you or your advisor buy a new one. That is different from bank CDs, which typically auto-renew unless you act during a grace period.",
      },
    ],
  },
  {
    slug: "fidelity",
    name: "Fidelity",
    metaTitle: "Fidelity CD Rates: Current APYs and How They Compare (2026)",
    metaDesc:
      "Fidelity's brokered CD marketplace pays roughly 4.10 to 4.45% APY depending on term. See current rates by term, the $1,000 minimum, and how they compare.",
    chip: "CD Rates",
    h1: "Fidelity CD Rates",
    kind: "brokered",
    minDeposit: "$1,000 ($100 for fractional CDs)",
    intro: [
      "Fidelity runs one of the largest brokered CD marketplaces in the country. Instead of issuing its own CDs, it lists new-issue certificates from dozens of FDIC-insured banks, and you buy them inside your Fidelity brokerage account. Because many banks compete on the same shelf, Fidelity's top rates are usually close to the best in the market.",
      "In mid-2026 the top new-issue rates at Fidelity ran from roughly 4.10% APY on a 1-year CD up to about 4.45% on a 5-year, with short 3-month paper around 4.30%. The standard minimum is $1,000, and Fidelity also offers fractional CDs with a $100 minimum.",
      "For savers who already keep a Fidelity account, this is one of the strongest CD options anywhere: competitive rates, wide term selection, and the ability to spread money across multiple issuing banks for extra FDIC coverage without opening new accounts.",
    ],
    rateRows: [
      { term: "3 months", apy: "~4.30%" },
      { term: "6 months", apy: "~4.20%" },
      { term: "9 months", apy: "~4.10%" },
      { term: "1 year", apy: "~4.10%" },
      { term: "18 months", apy: "~4.15%" },
      { term: "2 years", apy: "~4.20%" },
      { term: "3 years", apy: "~4.25%" },
      { term: "5 years", apy: "~4.45%" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "Brokered CD inventory and rates change daily. The figures above are the top new-issue rates observed in mid-2026; the exact banks and yields on the shelf will differ on any given day. Check the live marketplace at fidelity.com before buying.",
    compare: [
      "Fidelity's top rates generally match or beat the best online bank CDs. The strongest nationally available 12-month bank CDs were paying around 4.10% APY in mid-2026, right where Fidelity's 1-year new issues sat, and Fidelity's longer terms often beat what online banks offer at 4 and 5 years.",
      "Against the FDIC national average of roughly 1.99% for a 1-year CD, everything on Fidelity's shelf is a dramatic improvement. The real comparison is against other brokerages: Fidelity, Schwab, and Vanguard shelves usually carry similar inventory, so convenience should drive the choice.",
    ],
    watchOut:
      "Brokered CDs pay simple interest to your core position rather than compounding, and there is no early withdrawal option, only a secondary-market sale at whatever the current price is. Callable CDs also appear on the shelf at higher headline rates; check the call schedule before assuming you will earn that rate for the full term.",
    faqs: [
      {
        question: "Are Fidelity CDs FDIC-insured?",
        answer:
          "Yes. Each CD is issued by an FDIC-member bank and carries the standard $250,000 per depositor, per bank coverage. Buying CDs from several issuers inside one Fidelity account is a common way to insure more than $250,000 in total.",
      },
      {
        question: "What is a fractional CD at Fidelity?",
        answer:
          "The same new-issue brokered CD sold in $100 increments instead of $1,000. Rates are identical to the full-size version; it simply lowers the entry point for small ladders.",
      },
      {
        question: "Can I lose money in a Fidelity CD?",
        answer:
          "If you hold to maturity, no; you receive full principal plus interest, and FDIC insurance covers bank failure. You can only lose money by selling early on the secondary market after rates have risen, which pushes resale prices down.",
      },
      {
        question: "Fidelity CDs vs Fidelity money market: which is better?",
        answer:
          "The money market keeps cash liquid and its yield floats with the market. A CD locks today's rate for the full term. If the Fed is cutting rates, locking a CD protects your yield; if you may need the cash, the money market avoids any resale risk. Many savers hold both.",
      },
    ],
  },
  {
    slug: "synchrony",
    name: "Synchrony Bank",
    metaTitle: "Synchrony Bank CD Rates: Current APYs and How They Compare (2026)",
    metaDesc:
      "Synchrony Bank CDs pay around 3.60 to 3.75% APY on common terms with no minimum deposit. See current rates, the no-penalty CD, and better-paying alternatives.",
    chip: "CD Rates",
    h1: "Synchrony Bank CD Rates",
    kind: "bank",
    minDeposit: "None",
    intro: [
      "Synchrony is an online-only bank best known for its high-yield savings account and store credit cards. Its CDs are traditional bank certificates: you open the account directly with Synchrony, interest compounds daily, and the CD auto-renews at maturity unless you act during the grace period.",
      "In mid-2026 Synchrony's headline CD rates sat around 3.70% APY on a 12-month term, 3.60% on 3 years, and 3.75% on 5 years. There is no minimum deposit, which is rare for CDs and makes Synchrony practical for small ladders or first-time CD savers.",
      "Synchrony also offers a no-penalty CD and a bump-up CD. The no-penalty version pays slightly less in exchange for letting you withdraw the full balance after the first 6 days without any fee, a useful middle ground between a savings account and a locked CD.",
    ],
    rateRows: [
      { term: "6 months", apy: "~3.40%" },
      { term: "12 months", apy: "~3.70%" },
      { term: "18 months", apy: "~3.60%" },
      { term: "3 years", apy: "~3.60%" },
      { term: "5 years", apy: "~3.75%" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "Rates are approximate mid-2026 figures and change with the market. Synchrony publishes live APYs for every term at synchrony.com; confirm there before opening.",
    compare: [
      "Synchrony's CD rates are solid but not market-leading. The best nationally available 12-month CDs paid around 4.10% APY in mid-2026, roughly 40 basis points above Synchrony. On $25,000 over one year, that gap is about $100 of interest.",
      "Where Synchrony wins is flexibility: no minimum deposit, daily compounding, a genuine no-penalty option, and one login for CDs plus one of the better high-yield savings accounts. Against the FDIC 1-year national average of about 1.99%, it remains a strong mainstream choice.",
    ],
    watchOut:
      "Standard Synchrony CDs auto-renew at maturity into the same term at whatever rate is current. Mark the maturity date; the grace period is short, and early withdrawal after auto-renewal costs several months of interest depending on term length.",
    faqs: [
      {
        question: "Is Synchrony Bank FDIC-insured?",
        answer:
          "Yes. Synchrony Bank is an FDIC member, and deposits are insured up to $250,000 per depositor, per ownership category, the same coverage as any branch bank.",
      },
      {
        question: "What is the early withdrawal penalty on Synchrony CDs?",
        answer:
          "It scales with term: terms of 12 months or less forfeit 90 days of simple interest, terms of 12 to 48 months forfeit 180 days, and terms over 48 months forfeit 365 days. The no-penalty CD avoids this entirely after the first 6 days.",
      },
      {
        question: "Does Synchrony have a minimum deposit for CDs?",
        answer:
          "No. You can open any Synchrony CD with any amount, which is unusual; most banks require $500 to $2,500. This makes Synchrony convenient for building a CD ladder in small steps.",
      },
      {
        question: "Synchrony CD vs Synchrony high-yield savings: which should I use?",
        answer:
          "The savings account keeps money liquid with a variable rate; the CD locks a rate for the term. If rates are falling, the CD protects your yield. For an emergency fund, stay with savings or use the no-penalty CD so you keep access.",
      },
    ],
  },
  {
    slug: "truist",
    name: "Truist",
    metaTitle: "Truist CD Rates: Current APYs and the Promo Catch (2026)",
    metaDesc:
      "Truist's standard CD rate is just 0.05% APY. Decent yields exist only on short promotional terms. See current rates and what the same money earns elsewhere.",
    chip: "CD Rates",
    h1: "Truist CD Rates",
    kind: "bank",
    minDeposit: "$1,000 (promotional terms typically $2,500)",
    intro: [
      "Truist, the bank formed from the BB&T and SunTrust merger, offers CDs in terms from 7 days to 60 months. The critical thing to understand before walking into a branch: the standard rate on almost every term is 0.05% APY. That is not a typo. Outside of promotions, Truist CDs pay effectively nothing.",
      "The exceptions are promotional CDs on select short terms, which have recently paid in the neighborhood of 3.50% APY on roughly a 12-month term. Promos change frequently, vary by region, and typically require new money and a higher minimum, often $2,500.",
      "If you already bank at Truist and a current promo term happens to match your timeline, it can be acceptable. For everyone else, the same money earns dramatically more at an online bank with no promo games and no branch visit.",
    ],
    rateRows: [
      { term: "7 days to 60 months (standard)", apy: "0.05%" },
      { term: "Promotional term (varies, ~12 months)", apy: "~3.50%" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "Truist promotional CD offers change often and can differ by state and branch. The standard 0.05% APY applies to non-promotional terms. Confirm the current promo terms at truist.com or a branch before opening.",
    compare: [
      "The gap here is enormous. The best nationally available 12-month CDs paid around 4.10% APY in mid-2026. On a $25,000 deposit over one year, Truist's standard 0.05% earns about $13; a 4.10% online CD earns about $1,025.",
      "Even Truist's best promotional rate has trailed the online leaders. Big branch banks price CDs this way because a large share of customers value the branch relationship and never comparison shop. There is no rule that your CD must live where your checking account does.",
    ],
    watchOut:
      "When a Truist promotional CD matures, it typically auto-renews into the closest standard term at the standard rate, which means 0.05% APY. If you take a promo CD, set a calendar reminder for the maturity date; forgetting it can turn a decent yield into nothing for the next term.",
    faqs: [
      {
        question: "Why are Truist CD rates so low?",
        answer:
          "Large branch banks like Truist fund themselves cheaply through massive checking deposits, so they have little need to pay up for CD money. They post token standard rates and use short-lived promos to retain customers who ask. It is a pricing strategy, not an accident.",
      },
      {
        question: "Are Truist CDs FDIC-insured?",
        answer:
          "Yes, up to $250,000 per depositor, per ownership category. Insurance is identical at every FDIC member, which is exactly why rate should drive the decision; a 4.10% online CD is insured the same way as a 0.05% branch CD.",
      },
      {
        question: "What is the minimum deposit for a Truist CD?",
        answer:
          "$1,000 for terms of 32 days or longer, $2,500 for terms of 7 to 31 days, and promotional CDs typically require $2,500. Check the specific offer since promo requirements change.",
      },
      {
        question: "What should I do instead of a Truist CD?",
        answer:
          "If you want a fixed rate, a 12-month CD from a top online bank paid around 4.10% APY in mid-2026 with FDIC insurance and a 10-minute online application. If you want liquidity, top high-yield savings accounts paid around 4.10 to 4.50%. Keep Truist for checking if you like it and let your savings earn elsewhere.",
      },
    ],
  },
  {
    slug: "usaa",
    name: "USAA",
    metaTitle: "USAA CD Rates: Current APYs and How They Compare (2026)",
    metaDesc:
      "USAA CDs pay roughly 3.75 to 4.25% APY on featured terms with a $1,000 minimum. See current rates, membership rules, and how they compare to online banks.",
    chip: "CD Rates",
    h1: "USAA CD Rates",
    kind: "bank",
    minDeposit: "$1,000",
    intro: [
      "USAA Federal Savings Bank serves military members, veterans, and their families. Its CDs come in terms from about 1 month to 7 years with a $1,000 minimum, and rates are tiered: featured terms carry competitive yields while off-peak terms pay much less.",
      "In mid-2026, USAA's better CD rates ran roughly 3.75 to 4.25% APY on featured terms, while some short odd terms paid in the 2.50% range. That makes term selection matter more at USAA than at most banks; the difference between a featured term and the term next to it can be substantial.",
      "For USAA members who value keeping banking, insurance, and investments under one roof, the featured terms are genuinely competitive. Just verify which terms carry the headline rate before you lock in.",
    ],
    rateRows: [
      { term: "Featured short terms", apy: "~3.75-4.25%" },
      { term: "Odd terms (e.g. 7 months)", apy: "~2.50%" },
      { term: "Long terms (5-7 years)", apy: "varies, typically lower" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "USAA rates vary sharply by term and change with the market. The live table at usaa.com shows the current APY for every term; check which terms are featured before opening.",
    compare: [
      "At the top of its featured range, USAA is competitive with the best online banks, which paid around 4.10% APY on 12-month CDs in mid-2026. Off the featured terms, USAA can pay half that, so the comparison depends entirely on picking the right term.",
      "Against the FDIC 1-year national average of roughly 1.99%, USAA's featured terms are a clear win. Members should still compare against Navy Federal and PenFed, which frequently trade the top spot for military-affiliated savers.",
    ],
    watchOut:
      "USAA CDs auto-renew at maturity and the early withdrawal penalty scales with term, from 30 days of interest on the shortest CDs up to 365 days on terms over 5 years. Membership eligibility (military affiliation) is required to open accounts.",
    faqs: [
      {
        question: "Who can open a USAA CD?",
        answer:
          "USAA membership is limited to active, retired, and honorably separated military members, pre-commissioning officer candidates, and eligible family members (spouses and children of members). If you qualify once, you keep eligibility for life.",
      },
      {
        question: "Are USAA CDs FDIC-insured?",
        answer:
          "Yes. USAA Federal Savings Bank is an FDIC member and deposits are insured up to $250,000 per depositor, per ownership category.",
      },
      {
        question: "Does USAA offer special CD types?",
        answer:
          "USAA has offered adjustable-rate and variable-rate CDs alongside standard fixed CDs. The adjustable version lets you bump your rate once if rates rise. Availability changes, so check the current lineup before opening.",
      },
      {
        question: "USAA vs Navy Federal CDs: which pays more?",
        answer:
          "It trades back and forth, and Navy Federal's special certificates have frequently topped USAA's featured terms. If you are eligible for both, compare the specific term you want on the day you buy; the winner changes with each rate cycle.",
      },
    ],
  },
  {
    slug: "schwab",
    name: "Charles Schwab",
    metaTitle: "Charles Schwab CD Rates: Current APYs and How They Compare (2026)",
    metaDesc:
      "Schwab's brokered CD marketplace pays roughly 4.00 to 4.50% APY depending on term. See current rates, the $1,000 minimum, and how they compare to bank CDs.",
    chip: "CD Rates",
    h1: "Charles Schwab CD Rates",
    kind: "brokered",
    minDeposit: "$1,000",
    intro: [
      "Charles Schwab sells brokered CDs through its CD OneSource marketplace: new-issue certificates from many FDIC-insured banks, purchased inside your Schwab brokerage account in $1,000 increments. Schwab itself does not set the rates; issuing banks compete on the shelf, which keeps yields near the top of the market.",
      "In mid-2026, rates on Schwab's shelf ran roughly 4.00 to 4.50% APY depending on term, with the advertised new-issue terms concentrated between 3 months and 2 years. Inventory changes daily as banks add and pull offerings.",
      "Like all brokered CDs, these fit naturally if your money already lives at Schwab: one account, many issuing banks, easy laddering, and extra FDIC coverage by spreading across issuers.",
    ],
    rateRows: [
      { term: "3 months", apy: "~4.40%" },
      { term: "6 months", apy: "~4.30%" },
      { term: "1 year", apy: "~4.10%" },
      { term: "18 months", apy: "~4.05%" },
      { term: "2 years", apy: "~4.00-4.20%" },
    ],
    ratesAsOf: "mid-2026",
    ratesNote:
      "Brokered CD rates and available terms change daily with the bond market. The figures above are approximate mid-2026 observations; check CD OneSource at schwab.com for live inventory before buying.",
    compare: [
      "Schwab's shelf generally matches the best online bank CDs and beats them on short terms; 3-month paper around 4.40% APY was better than nearly any 3-month bank CD in mid-2026. Against the FDIC 1-year national average of about 1.99%, there is no contest.",
      "Schwab, Fidelity, and Vanguard marketplaces usually carry similar inventory at similar yields, so if you already have a brokerage account at one of them, that is the one to use. The convenience of your existing account outweighs a few basis points.",
    ],
    watchOut:
      "Brokered CDs pay simple interest into your Schwab cash sweep, which historically pays very little; sweep drag can quietly cost more than the CD rate advantage earns unless you reinvest. There is no early withdrawal, only secondary-market sale, and callable CDs on the shelf can be redeemed early by the issuer.",
    faqs: [
      {
        question: "Are Schwab CDs FDIC-insured?",
        answer:
          "Yes. Each CD on the OneSource shelf is issued by an FDIC-member bank with standard $250,000 per depositor, per bank coverage. Splitting across multiple issuing banks inside one Schwab account multiplies your total coverage.",
      },
      {
        question: "What is the difference between a Schwab CD and a bank CD?",
        answer:
          "A bank CD is opened directly with one bank, compounds interest, and auto-renews. A Schwab brokered CD is bought in a brokerage account, pays simple interest to your sweep, does not auto-renew, and is exited early by selling rather than paying a penalty.",
      },
      {
        question: "Can Schwab CDs lose money?",
        answer:
          "Held to maturity, no; you get full principal plus interest, and FDIC insurance covers issuer failure. Selling early after rates rise can return less than you paid, and callable CDs can end early, forcing you to reinvest at lower rates.",
      },
      {
        question: "Why is the cash sweep rate important when buying Schwab CDs?",
        answer:
          "CD interest lands in your sweep account rather than compounding inside the CD. Schwab's default sweep has paid well under 1%, so interest sitting there earns almost nothing. Reinvest payments into new CDs, a money market fund, or Treasuries to keep the full yield working.",
      },
    ],
  },
];

export function getCdBank(slug: string): CdBank | undefined {
  return cdBanks.find((b) => b.slug === slug);
}

export const cdBankSlugs = cdBanks.map((b) => b.slug);
