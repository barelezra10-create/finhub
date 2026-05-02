import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";

/* ─────────────────────────────────────────────────────────────────────────────
   PERSONAL LOAN REVIEW PAGES
   Dynamic route: /reviews/[slug]
   Slugs: sofi-loan | lightstream | marcus-loan | discover-loan |
          upstart | lendingclub | bestegg | prosper
───────────────────────────────────────────────────────────────────────────── */

type CreditTierRow = { tier: string; fico: string; aprRange: string };
type CompRow = { feature: string; a: string; b: string; c: string };
type FaqItem = { q: string; a: string };

interface LenderReview {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  chipLabel: string;
  h1: string;
  byline: string;
  stats: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  overview: string[];
  ratesIntro: string;
  creditTiers: CreditTierRow[];
  ratesNote: string;
  fees: { label: string; value: string; highlight?: boolean }[];
  feesNote: string;
  eligibility: string[];
  applicationParagraphs: string[];
  bestFor: string[];
  lookElsewhere: string[];
  compTitle: string;
  compHeaders: [string, string, string];
  compRows: CompRow[];
  faq: FaqItem[];
  ctaText: string;
  ctaHref: string;
  ctaLinkLabel: string;
}

const reviews: Record<string, LenderReview> = {
  "sofi-loan": {
    slug: "sofi-loan",
    metaTitle: "SoFi Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "SoFi personal loans offer 8.99-29.99% APR, $5K-$100K, zero fees of any kind, and member perks like career coaching. Full 2026 review with rates by credit tier.",
    chipLabel: "Personal Loan Review",
    h1: "SoFi Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.99-29.99%" },
      { label: "Loan Amount", value: "$5K-$100K" },
      { label: "Term Range", value: "24-84 months" },
      { label: "Fintiex Score", value: "9.1/10" },
    ],
    pros: [
      "Zero fees: no origination, no late fee, no prepayment penalty",
      "Loan amounts up to $100,000, the highest ceiling among major online lenders",
      "Unemployment protection pauses payments if you lose your job",
      "Member benefits include career coaching and financial planning sessions",
      "Rate discount of 0.25% for enrolling in autopay",
      "Same-day prequalification with a soft credit pull only",
    ],
    cons: [
      "Minimum FICO of 680 shuts out fair-credit borrowers",
      "Funding can take up to 7 business days, slower than same-day competitors",
      "Income requirements are strict: inconsistent freelance income can cause denial",
    ],
    overview: [
      "SoFi launched its personal loan product in 2012 originally targeting student loan refinancing, then expanded into personal lending. Today it is one of the largest fintech lenders by volume, and its no-fee structure remains its clearest competitive advantage. Every other major lender charges at least one fee; SoFi charges none. That is not marketing language. Origination is $0, late fees are $0, and prepayment penalties are $0. On a $30,000 loan at 10% APR over 60 months, that zero-origination policy saves $900 to $1,800 compared with lenders that charge 3 to 6%.",
      "SoFi prices its loans in a range of 8.99% to 29.99% APR. Qualified borrowers with FICO scores above 720 and stable income typically land in the 9 to 13% range. That is competitive with any lender at the prime tier. The upper end of 29.99% is reserved for the weakest approvals, and given the 680 minimum, you will not see the worst subprime rates here. The product sits squarely in the prime and near-prime segment.",
      "Beyond the loan mechanics, SoFi markets itself as a financial membership. Borrowers get access to career coaching, financial advisors, and community events. Whether those extras matter to you depends on your situation, but they do differentiate SoFi from a commodity lender. The unemployment protection feature is more material: if you lose your job through no fault of your own, SoFi can pause your payments in three-month increments, up to 12 months total, while you search for work. That is a real safety net.",
    ],
    ratesIntro: "SoFi APR by credit tier (autopay discount included)",
    creditTiers: [
      { tier: "Excellent", fico: "760+", aprRange: "8.99%-12.99%" },
      { tier: "Good", fico: "720-759", aprRange: "12.99%-17.99%" },
      { tier: "Fair-Good", fico: "680-719", aprRange: "17.99%-24.99%" },
      { tier: "Minimum", fico: "680", aprRange: "Up to 29.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Autopay discount of 0.25% included in ranges above. Actual rate depends on income, debt-to-income ratio, and loan amount.",
    fees: [
      { label: "Origination fee", value: "$0", highlight: true },
      { label: "Late fee", value: "$0", highlight: true },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "NSF / returned payment", value: "$0" },
      { label: "Autopay discount", value: "-0.25% APR" },
    ],
    feesNote:
      "SoFi is one of the only major lenders with a true zero-fee structure across all fee types. No hidden charges at any stage.",
    eligibility: [
      "Minimum FICO score of 680 (hard floor, no exceptions)",
      "Must be a U.S. citizen, permanent resident, or visa holder with valid employment",
      "Stable verifiable income required: employment, self-employment, or other documented sources",
      "Debt-to-income ratio considered: below 43% strongly preferred",
      "Available in all 50 states and Washington D.C.",
      "Minimum loan amount $5,000, maximum $100,000",
    ],
    applicationParagraphs: [
      "The SoFi application is fully online. You start by prequalifying with a soft pull that does not affect your credit score. You enter your loan amount, purpose, and basic income and employment details, and SoFi returns a rate range within minutes. If you proceed, a full application triggers a hard credit inquiry.",
      "Funding typically takes 1 to 7 business days after approval and loan agreement signing. SoFi transfers funds directly to your bank account. For debt consolidation, you can request direct payment to up to 10 creditors, which removes the temptation to spend the money elsewhere. The mobile app lets you manage payments, view statements, and access member benefits all in one place.",
    ],
    bestFor: [
      "Prime borrowers (680+ FICO) wanting the lowest possible fee total",
      "Large loan needs: $50,000 to $100,000 range where SoFi has few competitors",
      "Debt consolidation where zero origination means more principal paid down",
      "Borrowers who value career coaching and financial planning access",
      "Anyone with job-loss risk who wants unemployment payment protection",
    ],
    lookElsewhere: [
      "FICO below 680: SoFi will decline. Look at Upstart or LendingClub.",
      "Need same-day funding: SoFi can take up to 7 days. Discover or Best Egg fund faster.",
      "Very small loan needs: SoFi minimum is $5,000. For $1,000 to $4,999, try Upstart.",
    ],
    compTitle: "SoFi vs. LightStream vs. Marcus",
    compHeaders: ["SoFi", "LightStream", "Marcus"],
    compRows: [
      { feature: "APR Range", a: "8.99-29.99%", b: "7.99-25.49%", c: "8.50-22.99%" },
      { feature: "Loan Max", a: "$100,000", b: "$100,000", c: "$40,000" },
      { feature: "Origination Fee", a: "$0", b: "$0", c: "$0" },
      { feature: "Min FICO", a: "680", b: "660", c: "660" },
      { feature: "Funding Speed", a: "1-7 days", b: "Same day", c: "1-4 days" },
      { feature: "Unemployment Protection", a: "Yes", b: "No", c: "No" },
    ],
    faq: [
      {
        q: "Does SoFi charge an origination fee on personal loans?",
        a: "No. SoFi charges zero origination fee, zero late fee, and zero prepayment penalty. This is not a promotional offer; it is permanent policy. The cost of the loan is entirely captured in the APR.",
      },
      {
        q: "What is the minimum credit score for a SoFi personal loan?",
        a: "SoFi requires a minimum FICO score of 680. This is a firm floor. Borrowers below 680 will not qualify regardless of income. If your score is below 680, consider Upstart, which uses AI underwriting that accounts for education and employment beyond the FICO score.",
      },
      {
        q: "How fast does SoFi fund personal loans?",
        a: "SoFi typically funds within 1 to 7 business days after you sign the loan agreement. Same-day or next-day funding is possible but not guaranteed. If speed is critical, Discover Personal Loans and Best Egg both offer next-day funding more consistently.",
      },
      {
        q: "Can I get a SoFi personal loan if I am self-employed?",
        a: "Yes, but SoFi will require documentation: typically two years of tax returns (Schedule C), recent bank statements, and possibly a profit and loss statement. Inconsistent or seasonal income makes approval harder. A W-2 employee with the same income amount will typically have a smoother process.",
      },
      {
        q: "What is SoFi unemployment protection?",
        a: "If you lose your job through no fault of your own (layoff, company closure), SoFi can pause your monthly payments in three-month increments for up to 12 months total. Interest continues to accrue during the pause but no late fees apply. You must apply for this protection through SoFi and meet their criteria.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  lightstream: {
    slug: "lightstream",
    metaTitle: "LightStream Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "LightStream offers 7.99-25.49% APR, terms up to 144 months, zero fees, and a rate-beat guarantee. Full 2026 review for excellent-credit borrowers.",
    chipLabel: "Personal Loan Review",
    h1: "LightStream Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "7.99-25.49%" },
      { label: "Loan Amount", value: "$5K-$100K" },
      { label: "Term Range", value: "24-144 months" },
      { label: "Fintiex Score", value: "9.0/10" },
    ],
    pros: [
      "Lowest starting APR on our comparison at 7.99%, beating most competitors by 100+ basis points",
      "Rate Beat program: LightStream will beat a competitor's approved rate by 0.10 percentage points",
      "No fees of any kind: no origination, late, or prepayment fee",
      "Terms up to 144 months (12 years), useful for large home improvement or boat loans",
      "Same-day funding possible if approved and docs signed before 2:30 PM ET on a banking day",
      "Backed by Truist Bank, a top-10 U.S. bank by assets",
    ],
    cons: [
      "Requires excellent credit: approval is realistic only at 700+ FICO, and the best rates need 760+",
      "No prequalification with soft pull: checking your rate triggers a hard inquiry",
      "No direct-to-creditor payment option for debt consolidation",
    ],
    overview: [
      "LightStream is the online lending division of Truist Bank, formed from the merger of SunTrust and BB&T. It targets borrowers with strong credit profiles and competes on rate, not flexibility. The 7.99% starting APR is the lowest among major online personal lenders as of April 2026. That number assumes excellent credit, a short to mid-length term, and the 0.50% autopay discount included. But even at the upper end of 25.49%, LightStream's ceiling is materially lower than lenders like Upstart or LendingClub.",
      "The Rate Beat program is a genuine differentiator. If you have a competing offer from another lender at a lower APR, LightStream will verify it and beat it by 0.10 percentage points. There are conditions: the competing loan must be for the same purpose, amount, term, and credit profile. But it provides a functional floor and removes the worry that you are leaving a better rate on the table.",
      "LightStream's biggest limitation is the hard-pull-only application. Unlike SoFi, Upstart, or LendingClub, you cannot prequalify with a soft inquiry. If you apply and get denied, or if the offered rate is worse than expected, you absorb the credit score impact with nothing to show for it. For borrowers with excellent credit who are confident in their approval, this is a minor inconvenience. For anyone uncertain about their eligibility, it is a real cost.",
    ],
    ratesIntro: "LightStream APR by credit tier and term (autopay rate)",
    creditTiers: [
      { tier: "Excellent", fico: "760+", aprRange: "7.99%-12.49%" },
      { tier: "Good", fico: "720-759", aprRange: "12.49%-17.99%" },
      { tier: "Fair-Good", fico: "660-719", aprRange: "17.99%-22.99%" },
      { tier: "Minimum", fico: "660", aprRange: "Up to 25.49%" },
    ],
    ratesNote:
      "Rates as of April 2026 including 0.50% autopay discount. Longer terms (84-144 months) are available for home improvement and auto loans only, at slightly higher rates.",
    fees: [
      { label: "Origination fee", value: "$0", highlight: true },
      { label: "Late fee", value: "$0", highlight: true },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Autopay discount", value: "-0.50% APR" },
      { label: "Rate Beat guarantee", value: "Beat competitor -0.10%" },
    ],
    feesNote:
      "LightStream includes a 0.50% autopay discount (larger than most lenders) and requires enrollment in autopay at funding to receive that rate.",
    eligibility: [
      "Minimum FICO score of 660, but most approved borrowers are 700 or above",
      "Several years of established credit history: thin files are routinely declined",
      "Strong income and employment history: stable salary or documented self-employment",
      "Responsible credit history: few or no derogatory marks, low revolving utilization",
      "U.S. citizen or permanent resident",
      "Loans are purpose-specific: rate and max term vary by intended use (home improvement, auto, debt consolidation, etc.)",
    ],
    applicationParagraphs: [
      "The LightStream application is online only and requires a hard credit pull from the start. There is no soft-pull prequalification step. You choose your loan purpose (this matters: rates and max terms differ by purpose), enter the amount and preferred term, and provide income and employment details. LightStream's system is largely automated, and most decisions arrive within a few hours on business days.",
      "Same-day funding is available if you complete and sign all loan documents by 2:30 PM ET on a banking day and your bank accepts same-day ACH transfers. This makes LightStream one of the fastest funders in the market for borrowers who qualify. The funds are deposited directly to your bank account, with no option to pay creditors directly.",
    ],
    bestFor: [
      "Excellent-credit borrowers (720+ FICO) hunting the lowest possible rate",
      "Large loans for home improvement, boats, or recreational vehicles up to $100,000",
      "Long repayment needs: 7 to 12-year terms unavailable at most lenders",
      "Borrowers with a competing offer who want the Rate Beat guarantee to do the comparison work",
      "Anyone who needs same-day funding and has strong credit",
    ],
    lookElsewhere: [
      "FICO below 700: LightStream approvals become unlikely and rates lose their edge. Try LendingClub or Upstart.",
      "Prefer to rate-shop without a hard inquiry: LightStream has no soft-pull option. SoFi and Marcus offer soft-pull prequalification.",
      "Want debt consolidation with direct creditor payoff: LightStream only deposits to your bank. Discover sends funds directly to creditors.",
    ],
    compTitle: "LightStream vs. SoFi vs. Marcus",
    compHeaders: ["LightStream", "SoFi", "Marcus"],
    compRows: [
      { feature: "Starting APR", a: "7.99%", b: "8.99%", c: "8.50%" },
      { feature: "Loan Max", a: "$100,000", b: "$100,000", c: "$40,000" },
      { feature: "Max Term", a: "144 months", b: "84 months", c: "72 months" },
      { feature: "Origination Fee", a: "$0", b: "$0", c: "$0" },
      { feature: "Soft Prequalify", a: "No", b: "Yes", c: "Yes" },
      { feature: "Same-Day Funding", a: "Yes", b: "Possible", c: "No" },
    ],
    faq: [
      {
        q: "What is the LightStream Rate Beat program?",
        a: "LightStream will beat a competing lender's approved APR by 0.10 percentage points. The competing offer must be for the same loan purpose, amount, repayment term, and credit profile. You submit the competitor's approval documentation, and LightStream matches the loan with a lower rate. The program excludes certain lender types.",
      },
      {
        q: "Does LightStream charge any fees?",
        a: "No. LightStream charges no origination fee, no late fee, and no prepayment penalty. The 0.50% autopay discount is built into the quoted rate when you enroll in autopay at funding. If you opt out of autopay, your rate increases by 0.50 percentage points.",
      },
      {
        q: "Can I prequalify at LightStream without a hard pull?",
        a: "No. Unlike SoFi, Marcus, and most other lenders, LightStream does not offer a soft-pull prequalification step. Any rate check involves a hard inquiry. If you are uncertain about your approval odds, check your free credit report and score first and compare against their typical credit profile before applying.",
      },
      {
        q: "What is the maximum loan term at LightStream?",
        a: "LightStream offers terms up to 144 months (12 years) but only for specific loan purposes such as home improvement, boats, and recreational vehicles. Standard personal loans and debt consolidation top out at 84 months. Check the purpose-specific rate tables on LightStream's site when you apply.",
      },
      {
        q: "Is LightStream a real bank?",
        a: "LightStream is the online lending division of Truist Bank, a top-10 U.S. bank formed from the 2019 merger of SunTrust Banks and BB&T. Your loan is originated and funded by Truist Bank, which is FDIC-insured. LightStream itself is not a separate chartered bank.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  "marcus-loan": {
    slug: "marcus-loan",
    metaTitle: "Marcus Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "Marcus by Goldman Sachs personal loans offer 8.50-22.99% APR, $3.5K-$40K, no fees, and a payment deferral perk after 12 on-time payments. Full 2026 review.",
    chipLabel: "Personal Loan Review",
    h1: "Marcus Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.50-22.99%" },
      { label: "Loan Amount", value: "$3.5K-$40K" },
      { label: "Term Range", value: "36-72 months" },
      { label: "Fintiex Score", value: "8.8/10" },
    ],
    pros: [
      "No fees: zero origination, zero late fee, zero prepayment penalty",
      "On-time payment reward: defer one monthly payment after 12 consecutive on-time payments",
      "Soft-pull prequalification: check your rate without a hard credit inquiry",
      "Backed by Goldman Sachs, a top-tier balance sheet with no funding risk",
      "Straightforward, clean application process with no upsells",
      "APR ceiling of 22.99% is well below the subprime lender range",
    ],
    cons: [
      "Maximum loan of $40,000 is half what SoFi and LightStream offer",
      "No joint applications or cosigner option",
      "Funding takes 1 to 4 days, not same-day",
    ],
    overview: [
      "Marcus by Goldman Sachs entered the personal loan market in 2016 with a clear thesis: strip out fees, offer competitive rates, and let Goldman's brand credibility do the rest. Eight years later that strategy has held up. Marcus personal loans remain one of the cleanest products in the market. The APR range of 8.50% to 22.99% has a meaningfully lower ceiling than most competitors. If you qualify at the midpoint or better, you are getting institutional-grade pricing with no fee friction.",
      "The on-time payment reward is a genuine differentiator. After 12 consecutive on-time payments, Marcus allows you to defer one monthly payment to the end of your loan term with no fees and no interest penalty on the deferred amount. Most lenders charge a fee for any payment modification. Marcus treats it as a loyalty perk. It is not a reason to choose Marcus over a lender with a lower rate, but it is a meaningful benefit if life gets complicated mid-loan.",
      "Marcus's principal limitation is the $40,000 loan cap. For borrowers who need $50,000 or more, the product simply does not fit. And there is no joint application option, which means you cannot use a co-borrower to improve your qualifying rate. If your credit score is borderline or your income is modest, you cannot supplement it with a partner's profile the way you can at LendingClub or Prosper.",
    ],
    ratesIntro: "Marcus APR by credit tier",
    creditTiers: [
      { tier: "Excellent", fico: "760+", aprRange: "8.50%-12.99%" },
      { tier: "Good", fico: "720-759", aprRange: "12.99%-16.99%" },
      { tier: "Fair-Good", fico: "660-719", aprRange: "16.99%-20.99%" },
      { tier: "Minimum", fico: "660", aprRange: "Up to 22.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Marcus does not publish a stated autopay discount; rate includes standard pricing. Final rate depends on income, credit history, and loan amount.",
    fees: [
      { label: "Origination fee", value: "$0", highlight: true },
      { label: "Late fee", value: "$0", highlight: true },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Payment deferral (after 12 on-time payments)", value: "$0 fee" },
    ],
    feesNote:
      "Marcus is one of the true zero-fee lenders. The on-time payment deferral benefit costs nothing and accrues interest-free on the deferred month.",
    eligibility: [
      "Minimum FICO score of 660",
      "Must be a U.S. citizen or permanent resident, 18 years or older",
      "Valid bank account for loan disbursement and payment",
      "Verifiable income: employment, retirement, self-employment, or other consistent sources",
      "Debt-to-income ratio is evaluated; lower ratios improve rate and approval odds",
      "Loan amounts from $3,500 to $40,000 in all 50 states",
    ],
    applicationParagraphs: [
      "Marcus offers soft-pull prequalification, so you can check your rate range without affecting your credit score. The application itself is online only, takes 10 to 15 minutes, and requires standard documentation: income verification (pay stubs, tax returns, bank statements), employment details, and bank account information. A hard pull occurs only when you formally submit a full application.",
      "Approval decisions typically arrive within one business day, and funding follows within 1 to 4 business days after signing your loan agreement. Marcus does not offer same-day or next-day guaranteed funding. For debt consolidation, funds are deposited to your bank account and you handle the payoffs yourself. There is no direct-to-creditor disbursement option, unlike Discover Personal Loans.",
    ],
    bestFor: [
      "Prime borrowers (660+ FICO) who want a no-fee loan from a name-brand institution",
      "Anyone who values the Goldman Sachs balance sheet and long-term stability",
      "Borrowers who want payment flexibility and value the 12-payment deferral perk",
      "Debt consolidation for amounts under $40,000 where rate and fees matter most",
    ],
    lookElsewhere: [
      "Need more than $40,000: Marcus stops at $40K. SoFi and LightStream both go to $100K.",
      "Want a joint application: Marcus does not allow co-borrowers. Try LendingClub or Prosper.",
      "Need same-day funding: Marcus takes 1 to 4 days. LightStream can fund same-day.",
    ],
    compTitle: "Marcus vs. SoFi vs. Discover",
    compHeaders: ["Marcus", "SoFi", "Discover"],
    compRows: [
      { feature: "APR Range", a: "8.50-22.99%", b: "8.99-29.99%", c: "8.99-24.99%" },
      { feature: "Loan Max", a: "$40,000", b: "$100,000", c: "$40,000" },
      { feature: "Origination Fee", a: "$0", b: "$0", c: "$0" },
      { feature: "Min FICO", a: "660", b: "680", c: "660" },
      { feature: "Joint App", a: "No", b: "No", c: "No" },
      { feature: "Direct Payoff to Creditors", a: "No", b: "Yes", c: "Yes" },
    ],
    faq: [
      {
        q: "What is the Marcus on-time payment reward?",
        a: "After making 12 consecutive on-time monthly payments, Marcus allows you to defer one payment to the end of your loan term at no cost and with no additional interest charged on the deferred month. The loan term extends by one month. You must request this through your Marcus account.",
      },
      {
        q: "Can I add a cosigner to a Marcus personal loan?",
        a: "No. Marcus does not offer joint applications or cosigner options. The loan is evaluated solely on your individual credit and income profile. If you need a co-borrower to qualify, LendingClub and Prosper both support joint applications.",
      },
      {
        q: "Does Marcus offer soft-pull prequalification?",
        a: "Yes. You can check your rate on the Marcus website with a soft credit pull that does not affect your score. Only when you formally apply and submit your full application does a hard inquiry occur.",
      },
      {
        q: "How is Marcus different from Goldman Sachs private banking?",
        a: "Marcus is Goldman Sachs's consumer-facing digital bank, separate from its private wealth and investment banking operations. Marcus personal loans are standard consumer products available to anyone who qualifies. There is no minimum net worth or relationship requirement.",
      },
      {
        q: "What is the minimum loan amount for Marcus?",
        a: "The minimum loan amount is $3,500. If you need less than $3,500, Marcus is not the right fit. Upstart and LendingClub both offer loans starting at $1,000.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  "discover-loan": {
    slug: "discover-loan",
    metaTitle: "Discover Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "Discover personal loans offer 8.99-24.99% APR, $2.5K-$40K, no origination fee, next-day funding, and direct-to-creditor payoff. Full 2026 review.",
    chipLabel: "Personal Loan Review",
    h1: "Discover Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.99-24.99%" },
      { label: "Loan Amount", value: "$2.5K-$40K" },
      { label: "Term Range", value: "36-84 months" },
      { label: "Fintiex Score", value: "8.7/10" },
    ],
    pros: [
      "No origination fee and no prepayment penalty",
      "Late fee waived on your first late payment automatically",
      "Direct payment to up to 10 creditors for debt consolidation simplifies the process",
      "Next-day funding after approval for most borrowers",
      "Soft-pull prequalification available before a hard inquiry",
      "Backed by Discover Bank, a well-established FDIC-insured institution",
    ],
    cons: [
      "Maximum loan of $40,000 limits large consolidations or home projects",
      "APR ceiling of 24.99% is higher than Marcus and LightStream at the low end",
      "No joint application option",
    ],
    overview: [
      "Discover entered the personal loan market to complement its credit card and banking businesses, and the product reflects that DNA: it is optimized for debt consolidation. The direct-to-creditor payoff feature is the clearest example. Instead of depositing the loan proceeds into your bank account and hoping you pay off the right cards, Discover sends the money directly to up to 10 creditors. That eliminates a friction point and a temptation simultaneously.",
      "The APR range of 8.99% to 24.99% is competitive at the top and reasonable at the ceiling. The late fee waiver on the first incident is a small but real consumer-friendly policy. Most lenders charge $25 to $40 on the first late payment. Discover waives it. Combined with no origination fee and no prepayment penalty, the fee structure is cleaner than average.",
      "Discover's main limitation is the $40,000 maximum, which is adequate for most debt consolidation scenarios but comes up short for larger home improvement projects or combined debt situations. Funding speed is a relative strength: most approved borrowers see money the next business day after signing, which puts Discover ahead of SoFi and Marcus but behind LightStream's potential same-day capability.",
    ],
    ratesIntro: "Discover Personal Loan APR by credit tier",
    creditTiers: [
      { tier: "Excellent", fico: "760+", aprRange: "8.99%-13.99%" },
      { tier: "Good", fico: "720-759", aprRange: "13.99%-18.99%" },
      { tier: "Fair-Good", fico: "660-719", aprRange: "18.99%-22.99%" },
      { tier: "Minimum", fico: "660", aprRange: "Up to 24.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Actual APR depends on credit history, income, and loan term selected. 36 to 84 month terms available.",
    fees: [
      { label: "Origination fee", value: "$0", highlight: true },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Late fee (first occurrence)", value: "Waived", highlight: true },
      { label: "Late fee (subsequent)", value: "Up to $39" },
      { label: "NSF / returned payment", value: "Up to $39" },
    ],
    feesNote:
      "Discover's first-late-fee waiver is automatic: no need to call and ask. Subsequent late fees apply at up to $39 per occurrence.",
    eligibility: [
      "Minimum FICO score of 660",
      "Must be a U.S. citizen or permanent resident, 18 years or older",
      "Household income of at least $25,000 per year (stated minimum)",
      "Valid Social Security number and bank account",
      "No bankruptcy filings within the past 7 years",
      "Available in all 50 states",
    ],
    applicationParagraphs: [
      "Discover's application process starts with soft-pull prequalification. You enter your loan details and basic financial information and get a rate estimate in minutes without a credit score impact. A full application triggers a hard inquiry. Discover's underwriting team may request additional documentation such as bank statements or pay stubs for income verification.",
      "Once approved, Discover funds next-business-day for most borrowers after the loan agreement is signed. For debt consolidation, you specify which creditors you want paid and Discover sends funds directly to those accounts, typically within 5 to 7 business days for creditor processing. Any residual amount after creditor payoffs is deposited to your bank account.",
    ],
    bestFor: [
      "Debt consolidation borrowers who want the simplicity of direct creditor payoff",
      "Prime borrowers (660+ FICO) wanting next-day funding from an established bank",
      "Anyone who values the first-late-fee waiver as a safety net",
      "Borrowers consolidating 3 to 10 credit cards who want a single automated payoff step",
    ],
    lookElsewhere: [
      "Need more than $40,000: Discover stops at $40K. SoFi and LightStream go to $100K.",
      "Have FICO below 660: Discover requires a minimum of 660. Try Upstart or LendingClub.",
      "Want the absolute lowest rate: Discover's floor of 8.99% trails LightStream's 7.99%.",
    ],
    compTitle: "Discover vs. Marcus vs. SoFi",
    compHeaders: ["Discover", "Marcus", "SoFi"],
    compRows: [
      { feature: "APR Range", a: "8.99-24.99%", b: "8.50-22.99%", c: "8.99-29.99%" },
      { feature: "Loan Max", a: "$40,000", b: "$40,000", c: "$100,000" },
      { feature: "Origination Fee", a: "$0", b: "$0", c: "$0" },
      { feature: "Direct Creditor Payoff", a: "Yes (10 max)", b: "No", c: "Yes" },
      { feature: "Next-Day Funding", a: "Yes", b: "No (1-4 days)", c: "Possible" },
      { feature: "Min FICO", a: "660", b: "660", c: "680" },
    ],
    faq: [
      {
        q: "How does Discover direct-to-creditor payoff work?",
        a: "When you apply for a Discover personal loan for debt consolidation, you provide your creditor account numbers and balances. Discover sends payment checks or electronic transfers directly to those accounts after your loan is funded. You can designate up to 10 creditors. Any loan amount above the total creditor payoffs is deposited to your bank account.",
      },
      {
        q: "Does Discover waive late fees on personal loans?",
        a: "Yes, Discover automatically waives the late fee on your first late payment. No call or request is needed. For any subsequent late payments, a fee of up to $39 applies.",
      },
      {
        q: "What is the minimum income for a Discover personal loan?",
        a: "Discover requires a stated household income of at least $25,000 per year. This is a relatively low bar. However, your debt-to-income ratio and credit history both factor into the final rate and approval decision.",
      },
      {
        q: "How fast does Discover fund personal loans?",
        a: "Most approved borrowers receive funds the next business day after signing the loan agreement. For direct creditor payoffs, allow 5 to 7 business days for Discover's payments to process and post to each creditor's account.",
      },
      {
        q: "Can I prequalify for a Discover loan without affecting my credit score?",
        a: "Yes. Discover offers soft-pull prequalification on its website. You can check your estimated rate and loan terms without a hard inquiry. A hard pull only occurs when you formally complete and submit a full application.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  upstart: {
    slug: "upstart",
    metaTitle: "Upstart Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "Upstart uses AI underwriting with education and employment factors, accepting FICO as low as 300. APR 7.80-35.99%, $1K-$50K, next-day funding. Full 2026 review.",
    chipLabel: "Personal Loan Review",
    h1: "Upstart Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "7.80-35.99%" },
      { label: "Loan Amount", value: "$1K-$50K" },
      { label: "Term Range", value: "36-60 months" },
      { label: "Fintiex Score", value: "8.3/10" },
    ],
    pros: [
      "Accepts FICO scores as low as 300, including borrowers with thin or short credit files",
      "AI underwriting considers education, field of study, and employment in addition to FICO",
      "Low minimum loan of $1,000, useful for smaller expenses",
      "Starting APR of 7.80% is competitive with the best prime lenders",
      "Next-day funding after approval in most cases",
      "Soft-pull prequalification available",
    ],
    cons: [
      "Origination fee of 0 to 12%: top-end origination is the highest of any major online lender",
      "Term options limited to 36 or 60 months only: no mid-term flexibility",
      "Highest APR ceiling at 35.99%, reflecting the subprime approval volume",
    ],
    overview: [
      "Upstart was founded in 2012 by ex-Google engineers and launched with a specific thesis: FICO scores are incomplete proxies for creditworthiness. A recent college graduate with a strong degree, no credit card history, and a job offer at a Fortune 500 company looks like a bad credit risk on a traditional score. Upstart's model incorporates over 1,600 variables including education level, field of study, and employment history alongside traditional credit data. The result is a broader approval funnel than any other major online lender.",
      "The practical implication is that borrowers who get rejected everywhere else often get approved at Upstart. The company accepts FICO scores as low as 300, which is effectively no minimum in practice. However, the pricing reflects that broader risk tolerance. The origination fee can reach 12%, meaning a $10,000 loan could carry $1,200 taken off the top before you receive the funds. At that origination level, even a competitive headline APR becomes expensive on a total cost basis.",
      "For borrowers with thin credit but strong income and education credentials, Upstart represents a genuine alternative to credit cards and payday lending. The starting APR of 7.80% is real and available to qualified borrowers, though only a small fraction of Upstart's approval base qualifies for that rate. Most borrowers in the 600 to 650 FICO range should expect rates in the 20 to 30% APR range with meaningful origination fees. The calculus is still better than revolving credit card debt at 28 to 30% APR for most use cases.",
    ],
    ratesIntro: "Upstart APR by credit profile (origination fee not included in APR display)",
    creditTiers: [
      { tier: "Prime (education/income boost)", fico: "700+", aprRange: "7.80%-14.99%" },
      { tier: "Near-Prime", fico: "620-699", aprRange: "15.99%-24.99%" },
      { tier: "Subprime", fico: "580-619", aprRange: "24.99%-32.99%" },
      { tier: "Thin/New Credit", fico: "300+", aprRange: "Up to 35.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Upstart's AI model means two borrowers with the same FICO can receive materially different rates based on employment and education profile. Origination fee (0-12%) is additional.",
    fees: [
      { label: "Origination fee", value: "0%-12%" },
      { label: "Late fee", value: "5% of past due or $15 (whichever is greater)" },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Returned check fee", value: "$15" },
      { label: "Autopay discount", value: "None stated" },
    ],
    feesNote:
      "Upstart's origination fee is the key cost variable. At 12% on a $25,000 loan, that is $3,000 deducted before you receive funds. Always factor origination into the total cost comparison.",
    eligibility: [
      "Minimum FICO score of 300 (effectively no minimum for FICO)",
      "Minimum age of 18 years (19 in Alabama and Nebraska)",
      "Valid U.S. bank account and Social Security number",
      "No active bankruptcies (discharged bankruptcies over 1 year may qualify)",
      "Employment or offer letter with start date within 6 months",
      "Loan amounts $1,000 to $50,000 depending on state and credit profile",
    ],
    applicationParagraphs: [
      "Upstart's online application is straightforward and starts with a soft-pull rate check. You enter your loan purpose, amount, education level, employment status, income, and a few other details. Upstart's AI model returns a rate estimate within minutes. Unlike traditional lenders, the questions about your degree and employer carry real weight in the algorithm.",
      "Upon full application and hard pull, approval decisions arrive quickly, often within minutes during business hours. Funding typically occurs the next business day after accepting the loan terms. For education-related loans, there is an additional 3-day wait period required by law. Upstart sends funds to your bank account; there is no direct creditor payoff feature.",
    ],
    bestFor: [
      "Thin-file borrowers: recent graduates, new-to-credit individuals with strong income",
      "Borrowers with FICO below 660 who are rejected by SoFi, Marcus, and Discover",
      "Small loan needs: $1,000 to $5,000 range where most prime lenders do not go",
      "Borrowers whose income and employment strength is not reflected in their FICO score",
    ],
    lookElsewhere: [
      "Want zero origination fee: Upstart can charge up to 12%. SoFi, Marcus, and Discover charge nothing.",
      "Need more than 60 months: Upstart only offers 36 or 60 month terms. LightStream goes to 144 months.",
      "Want to consolidate with direct creditor payoff: Upstart deposits to your bank only.",
    ],
    compTitle: "Upstart vs. LendingClub vs. Best Egg",
    compHeaders: ["Upstart", "LendingClub", "Best Egg"],
    compRows: [
      { feature: "Starting APR", a: "7.80%", b: "8.98%", c: "8.99%" },
      { feature: "Min FICO", a: "300", b: "600", c: "600" },
      { feature: "Origination Fee", a: "0-12%", b: "3-8%", c: "0.99-9.99%" },
      { feature: "Loan Max", a: "$50,000", b: "$40,000", c: "$50,000" },
      { feature: "Max Term", a: "60 months", b: "60 months", c: "84 months" },
      { feature: "AI Underwriting", a: "Yes", b: "No", c: "No" },
    ],
    faq: [
      {
        q: "How does Upstart's AI underwriting work?",
        a: "Upstart's model uses over 1,600 data variables beyond the traditional FICO score. Education level, field of study, employment history, and income trajectory all factor in. A borrower with a low FICO due to thin credit history but a strong employment profile can receive a better rate at Upstart than a traditional lender would offer.",
      },
      {
        q: "What is the origination fee at Upstart?",
        a: "Upstart charges 0 to 12% of the loan amount as an origination fee, deducted from your loan proceeds before disbursement. This means a $20,000 loan with a 10% origination fee results in $18,000 deposited to your account while you owe the full $20,000 plus interest. Always factor the origination fee into your total cost of borrowing comparison.",
      },
      {
        q: "What credit score do I need for Upstart?",
        a: "Upstart accepts FICO scores as low as 300 and even considers borrowers with insufficient credit history to generate a FICO score. However, a low score combined with low income and weak employment history will still result in denial or very high rates. The score minimum is low; the income and employment requirements are not.",
      },
      {
        q: "How fast does Upstart fund loans?",
        a: "Upstart funds most personal loans the next business day after you accept the loan terms. Education loans have a mandatory 3-business-day waiting period required by federal regulation. Funds are sent via ACH to your verified bank account.",
      },
      {
        q: "Are Upstart loans available in all states?",
        a: "Upstart is available in most U.S. states. Iowa and West Virginia residents are not eligible as of April 2026. Some states have lower APR caps that restrict loan availability for higher-risk borrowers. Check Upstart's eligibility page for your specific state.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  lendingclub: {
    slug: "lendingclub",
    metaTitle: "LendingClub Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "LendingClub personal loans: 8.98-35.99% APR, $1K-$40K, joint applications allowed, 600 FICO minimum. Full 2026 review for fair-credit borrowers.",
    chipLabel: "Personal Loan Review",
    h1: "LendingClub Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.98-35.99%" },
      { label: "Loan Amount", value: "$1K-$40K" },
      { label: "Term Range", value: "24-60 months" },
      { label: "Fintiex Score", value: "7.9/10" },
    ],
    pros: [
      "Joint applications allowed, which can unlock better rates by combining two income and credit profiles",
      "600 FICO minimum opens the door to fair-credit borrowers",
      "Low minimum loan amount of $1,000",
      "Soft-pull prequalification available before a hard inquiry",
      "Direct-to-creditor payoff for debt consolidation",
      "Established platform with over 15 years of lending history",
    ],
    cons: [
      "Origination fee of 3 to 8% is charged on every loan, no exception",
      "APR ceiling of 35.99% reflects significant subprime risk pricing",
      "Funding typically takes 4 business days, slower than most competitors",
    ],
    overview: [
      "LendingClub began as a peer-to-peer marketplace connecting individual investors to borrowers and was one of the pioneers of online consumer lending. It obtained a national bank charter in 2021 and now funds loans from its own balance sheet alongside institutional partners. The product today is a conventional online personal loan with one clear differentiator: joint applications. Few major online lenders allow a co-borrower on a personal loan, and LendingClub does.",
      "The joint application feature is most valuable when one borrower has strong income and the other has strong credit. Combined, you may qualify for a materially better rate than either borrower could achieve alone. This makes LendingClub particularly useful for couples managing shared debt or a primary borrower who wants to include a creditworthy co-applicant to lower the rate.",
      "The unavoidable cost is the origination fee. LendingClub charges 3 to 8% on every loan, with no zero-fee option. On a $20,000 loan with a 5% origination, you receive $19,000 but owe $20,000 plus interest. That cost needs to factor into any rate comparison against zero-fee lenders. The 4-day funding timeline is also slower than the market norm of 1 to 2 days for most competitors.",
    ],
    ratesIntro: "LendingClub APR by credit tier",
    creditTiers: [
      { tier: "Good-Excellent", fico: "720+", aprRange: "8.98%-14.99%" },
      { tier: "Fair-Good", fico: "660-719", aprRange: "14.99%-23.99%" },
      { tier: "Fair", fico: "620-659", aprRange: "23.99%-29.99%" },
      { tier: "Minimum", fico: "600", aprRange: "Up to 35.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Origination fee of 3-8% deducted from loan proceeds at funding. Final APR depends on credit profile, income, and loan term.",
    fees: [
      { label: "Origination fee", value: "3%-8% (always charged)" },
      { label: "Late fee", value: "$15 or 5% of payment (whichever is greater)" },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Check processing fee", value: "$7 per check payment" },
    ],
    feesNote:
      "LendingClub's origination fee is unavoidable. There is no zero-fee tier. The 3-8% range means most borrowers pay 4-6%. On a $15,000 loan at 5% that is $750 deducted before disbursement.",
    eligibility: [
      "Minimum FICO score of 600",
      "Must be a U.S. citizen or permanent resident, 18 years or older",
      "Valid bank account and Social Security number",
      "Verifiable income from employment, self-employment, retirement, or other sources",
      "Debt-to-income ratio considered (lower is better for rate)",
      "Joint applications allowed: both applicants must provide income and credit information",
    ],
    applicationParagraphs: [
      "LendingClub's prequalification uses a soft credit pull, allowing you to see rate estimates without affecting your score. For joint applications, both applicants complete the prequalification steps. The full application triggers a hard inquiry for the primary applicant. A joint applicant also generates a hard pull on their credit file.",
      "Funding at LendingClub takes approximately 4 business days from loan agreement signing, which is slower than most competitors. For debt consolidation, LendingClub offers direct payoff to creditors, which removes the disbursement step and makes the consolidation more structured. Check processing carries a $7 fee; ACH payment is free and recommended.",
    ],
    bestFor: [
      "Fair-credit borrowers (600-659 FICO) who want a competitive alternative to credit cards",
      "Joint applicants where combining two profiles produces a materially better rate",
      "Debt consolidation where direct creditor payoff simplifies the process",
      "Small loan needs ($1,000 to $5,000) that prime lenders do not serve",
    ],
    lookElsewhere: [
      "Want zero origination fee: LendingClub always charges 3-8%. SoFi, Marcus, and Discover charge nothing.",
      "Need funding fast: LendingClub takes 4 days. Discover and Best Egg typically fund next day.",
      "Have excellent credit (720+): You qualify for better rates with zero fees at SoFi, Marcus, or LightStream.",
    ],
    compTitle: "LendingClub vs. Upstart vs. Best Egg",
    compHeaders: ["LendingClub", "Upstart", "Best Egg"],
    compRows: [
      { feature: "Starting APR", a: "8.98%", b: "7.80%", c: "8.99%" },
      { feature: "Min FICO", a: "600", b: "300", c: "600" },
      { feature: "Origination Fee", a: "3-8%", b: "0-12%", c: "0.99-9.99%" },
      { feature: "Joint App", a: "Yes", b: "No", c: "No" },
      { feature: "Max Term", a: "60 months", b: "60 months", c: "84 months" },
      { feature: "Direct Creditor Payoff", a: "Yes", b: "No", c: "No" },
    ],
    faq: [
      {
        q: "Does LendingClub allow joint personal loan applications?",
        a: "Yes. LendingClub supports joint applications where two people apply together. Both applicants' credit and income are evaluated. A hard inquiry is placed on both credit files. The combined profile can result in a better rate than either person could qualify for individually.",
      },
      {
        q: "What origination fee does LendingClub charge?",
        a: "LendingClub charges an origination fee of 3 to 8% on every personal loan. There is no zero-fee option. The fee is deducted from your loan proceeds before disbursement, so a $15,000 loan with a 5% fee results in $14,250 deposited to your account while your balance is $15,000.",
      },
      {
        q: "How long does LendingClub take to fund?",
        a: "LendingClub typically funds within 4 business days after loan agreement signing. This is slower than Discover (next day), Best Egg (next day), and most other major lenders. If speed is important, factor this into your decision.",
      },
      {
        q: "Is LendingClub still a peer-to-peer lender?",
        a: "No, not in the original sense. LendingClub obtained a national bank charter in 2021 and now primarily funds loans from its own balance sheet and institutional partners. Individual retail investors can still participate through LendingClub's investment platform, but your loan as a borrower is originated by LendingClub Bank.",
      },
      {
        q: "Can I refinance a LendingClub loan if rates improve?",
        a: "Yes. LendingClub has no prepayment penalty, so you can pay off the loan early at any time with no cost. If your credit improves or market rates fall, refinancing the balance with a lower-rate lender is straightforward. The origination fee on the original loan is a sunk cost and should not factor into the refinancing decision.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  bestegg: {
    slug: "bestegg",
    metaTitle: "Best Egg Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "Best Egg personal loans: 8.99-35.99% APR, $2K-$50K, secured loan option using car as collateral, next-day funding. Full 2026 review for fair-credit borrowers.",
    chipLabel: "Personal Loan Review",
    h1: "Best Egg Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.99-35.99%" },
      { label: "Loan Amount", value: "$2K-$50K" },
      { label: "Term Range", value: "36-84 months" },
      { label: "Fintiex Score", value: "7.8/10" },
    ],
    pros: [
      "Secured loan option: use your car as collateral to access lower rates than your FICO alone would produce",
      "Terms up to 84 months (7 years), longer than most online lenders",
      "Next-day funding for most approved borrowers",
      "600 FICO minimum opens access to fair-credit borrowers",
      "Soft-pull prequalification before hard inquiry",
      "Loan amounts up to $50,000 at the unsecured tier",
    ],
    cons: [
      "Origination fee of 0.99 to 9.99% applies on all loans",
      "APR ceiling of 35.99% is high and applies to lower credit profiles",
      "Secured loans require a lien on your vehicle, which is a real risk if you default",
    ],
    overview: [
      "Best Egg is a fintech lender backed by Marlette Funding, launched in 2014. Its core proposition for the personal loan market is the secured loan option. Most personal lenders offer only unsecured loans. Best Egg lets you pledge your car title as collateral to access better rates than your credit score would otherwise unlock. This is a genuine product differentiation. For borrowers with a 600 to 640 FICO score and a paid-off or nearly paid-off car, the secured option can reduce the APR by 5 to 10 percentage points compared to the unsecured rate.",
      "The unsecured product competes in the fair-credit segment. A 600 FICO minimum with APRs up to 35.99% puts Best Egg in direct competition with LendingClub, Prosper, and the upper end of Upstart. The origination fee of 0.99 to 9.99% is always charged, though the lower end of that range (under 2%) applies to stronger credit profiles. For prime borrowers, that low origination plus a starting APR of 8.99% makes Best Egg worth checking, especially if you need a term longer than 60 months.",
      "The 84-month term option is a real differentiator in this credit segment. LendingClub and Upstart cap at 60 months. Best Egg at 84 months means lower required monthly payments on the same balance, which matters for cash-flow-constrained borrowers. The total interest paid is higher at 84 months, of course, so the math only favors the longer term if the payment reduction is the binding constraint.",
    ],
    ratesIntro: "Best Egg APR by credit tier (unsecured and secured)",
    creditTiers: [
      { tier: "Good-Excellent (unsecured)", fico: "720+", aprRange: "8.99%-15.99%" },
      { tier: "Fair-Good (unsecured)", fico: "660-719", aprRange: "15.99%-24.99%" },
      { tier: "Fair (unsecured)", fico: "600-659", aprRange: "24.99%-32.99%" },
      { tier: "Secured (any eligible tier)", fico: "600+", aprRange: "~5-10% lower than unsecured" },
    ],
    ratesNote:
      "Rates as of April 2026. Secured loan rates depend on vehicle value, credit profile, and loan amount. Origination fee (0.99-9.99%) deducted from proceeds at funding.",
    fees: [
      { label: "Origination fee", value: "0.99%-9.99%" },
      { label: "Late fee", value: "$15 (after 15-day grace period)" },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "Returned payment fee", value: "$15" },
      { label: "Secured loan lien filing", value: "State-dependent, typically $0-$50" },
    ],
    feesNote:
      "Best Egg's origination fee applies on all loans. Strong-credit borrowers may qualify for the 0.99% rate, which is the most competitive origination in this tier. Secured loan lien fees vary by state.",
    eligibility: [
      "Minimum FICO score of 600",
      "Must be a U.S. citizen or permanent resident, 18 years or older",
      "Valid Social Security number and bank account",
      "Verifiable income from employment, self-employment, or other sources",
      "For secured loans: vehicle must be fully or substantially paid off with clean title",
      "Available in most states (not all products available everywhere)",
    ],
    applicationParagraphs: [
      "Best Egg's application begins with soft-pull prequalification. You enter your loan details, whether you want secured or unsecured, and income and employment information. For secured loans, you also provide vehicle information. The system returns rate estimates within minutes. A full application and hard pull follow if you proceed.",
      "Next-day funding is the norm for most approved borrowers after loan agreement signing. For secured loans, there may be an additional step to file the vehicle lien with your state's DMV, which can add 1 to 2 business days. Funds are deposited via ACH to your bank account. Best Egg does not offer direct creditor payoff for debt consolidation.",
    ],
    bestFor: [
      "Fair-credit borrowers (600-659 FICO) who can use a vehicle to secure a better rate",
      "Anyone who needs a term beyond 60 months to keep monthly payments manageable",
      "Borrowers who want next-day funding and have fair to good credit",
      "Debt consolidation where a secured option at lower APR makes the math work",
    ],
    lookElsewhere: [
      "Want zero origination fee: Best Egg always charges origination. SoFi, Marcus, and Discover do not.",
      "Have excellent credit (720+): You can get zero-fee loans at LightStream or SoFi with better rates.",
      "Do not own a car or have significant equity in one: the secured option requires clean title.",
    ],
    compTitle: "Best Egg vs. LendingClub vs. Prosper",
    compHeaders: ["Best Egg", "LendingClub", "Prosper"],
    compRows: [
      { feature: "Starting APR", a: "8.99%", b: "8.98%", c: "8.99%" },
      { feature: "Min FICO", a: "600", b: "600", c: "600" },
      { feature: "Origination Fee", a: "0.99-9.99%", b: "3-8%", c: "1-9.99%" },
      { feature: "Secured Option", a: "Yes (car)", b: "No", c: "No" },
      { feature: "Max Term", a: "84 months", b: "60 months", c: "60 months" },
      { feature: "Joint App", a: "No", b: "Yes", c: "Yes" },
    ],
    faq: [
      {
        q: "How does Best Egg's secured personal loan work?",
        a: "Best Egg's secured loan uses your vehicle as collateral. You provide the vehicle's make, model, year, and VIN. Best Egg files a lien against the title. In exchange, you typically qualify for a materially lower interest rate than the unsecured product would offer for your credit profile. If you default, Best Egg has the right to repossess the vehicle. Once the loan is paid off, the lien is released.",
      },
      {
        q: "What is Best Egg's origination fee?",
        a: "Best Egg charges an origination fee of 0.99% to 9.99% on all personal loans. The fee is deducted from your loan proceeds before disbursement. A borrower with excellent credit may qualify for a 0.99% fee; borrowers with fair credit typically see 4 to 8%. Always factor the origination into the total cost of borrowing, not just the headline APR.",
      },
      {
        q: "Can I pay off a Best Egg loan early?",
        a: "Yes. Best Egg charges no prepayment penalty. You can make extra payments or pay off the full balance at any time at no cost. Early payoff reduces total interest paid and, for secured loans, releases the vehicle lien faster.",
      },
      {
        q: "How fast does Best Egg fund loans?",
        a: "Best Egg funds most unsecured loans the next business day after loan agreement signing. Secured loans may take 1 to 2 additional days for lien filing, depending on your state's DMV processing time.",
      },
      {
        q: "What is the maximum term for a Best Egg loan?",
        a: "Best Egg offers terms up to 84 months (7 years), which is longer than LendingClub and Upstart (both 60 months) and comparable to Discover Personal Loans (84 months). Longer terms reduce monthly payments but increase total interest paid. Use the longer term only if the payment reduction is necessary for your budget.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },

  prosper: {
    slug: "prosper",
    metaTitle: "Prosper Personal Loan Review: Rates, Fees, Verdict (2026)",
    metaDesc:
      "Prosper personal loans: 8.99-35.99% APR, $2K-$50K, joint applications allowed, 600 FICO minimum, P2P origin now institutional. Full 2026 review.",
    chipLabel: "Personal Loan Review",
    h1: "Prosper Personal Loan Review (2026)",
    byline: "Updated April 2026 · By the Fintiex Rate Desk",
    stats: [
      { label: "APR Range", value: "8.99-35.99%" },
      { label: "Loan Amount", value: "$2K-$50K" },
      { label: "Term Range", value: "24-60 months" },
      { label: "Fintiex Score", value: "7.7/10" },
    ],
    pros: [
      "Joint applications allowed, enabling two borrowers to combine income and credit",
      "600 FICO minimum, accessible to fair-credit borrowers",
      "Loan amounts up to $50,000, competitive with the best online lenders",
      "Soft-pull prequalification before a hard inquiry",
      "No prepayment penalty",
      "One of the oldest and most established online lending platforms since 2005",
    ],
    cons: [
      "Origination fee of 1 to 9.99% charged on all loans",
      "Funding typically takes 1 to 3 business days, not same-day",
      "APR ceiling of 35.99% applies to lower credit profiles",
    ],
    overview: [
      "Prosper launched in 2005 as the first peer-to-peer lending marketplace in the United States, predating LendingClub by a year. The platform originally matched retail investors directly to individual borrowers. Over the years, institutional investors came to dominate the funding side, and today Prosper operates much like a conventional online lender: you apply, get approved, and receive funds. The peer-to-peer branding is historical context, not a material difference from the borrower's perspective.",
      "Prosper's product set is similar to LendingClub's in most dimensions: 600 FICO minimum, joint applications, origination fees on every loan, and APRs up to 35.99%. The key distinctions are the higher maximum loan amount ($50,000 vs. LendingClub's $40,000) and slightly different pricing at equivalent credit tiers. Borrowers should prequalify at both and compare actual rate offers, since the models differ enough to produce different results for the same profile.",
      "The joint application feature remains Prosper's most differentiated offering. Adding a creditworthy co-borrower can meaningfully improve the offered rate. For couples or business partners who share financial responsibility for the debt, this is a practical and well-structured option. Both borrowers are equally liable for repayment, which aligns incentives and can strengthen the combined application.",
    ],
    ratesIntro: "Prosper APR by credit tier",
    creditTiers: [
      { tier: "Excellent", fico: "720+", aprRange: "8.99%-14.99%" },
      { tier: "Good", fico: "680-719", aprRange: "14.99%-21.99%" },
      { tier: "Fair-Good", fico: "640-679", aprRange: "21.99%-28.99%" },
      { tier: "Minimum", fico: "600", aprRange: "Up to 35.99%" },
    ],
    ratesNote:
      "Rates as of April 2026. Origination fee (1-9.99%) deducted from proceeds at funding. Actual APR depends on credit history, income, debt-to-income ratio, and loan term.",
    fees: [
      { label: "Origination fee", value: "1%-9.99% (always charged)" },
      { label: "Late fee", value: "$15 or 5% of payment (whichever is greater)" },
      { label: "Prepayment penalty", value: "$0", highlight: true },
      { label: "NSF / returned payment", value: "$15" },
      { label: "Check processing", value: "$5 per check payment" },
    ],
    feesNote:
      "Prosper's origination fee is unavoidable. The 1% floor applies only to the strongest credit profiles. Most borrowers in the fair-to-good range see 4 to 7%. Factor this into total cost calculations.",
    eligibility: [
      "Minimum FICO score of 600",
      "Must be a U.S. citizen or permanent resident, 18 years or older",
      "Valid Social Security number and bank account",
      "Minimum stated income of $0 (no hard income floor, but debt-to-income is evaluated)",
      "No bankruptcies within the past 12 months",
      "Joint applications: both borrowers must be eligible and provide documentation",
    ],
    applicationParagraphs: [
      "Prosper's online application begins with soft-pull prequalification, returning a rate estimate within minutes without a credit score impact. For joint applications, both applicants provide their information at this stage. If you choose to proceed, a hard inquiry is placed on the primary applicant's credit file, and a separate inquiry on the co-applicant's file if applicable.",
      "Funding typically takes 1 to 3 business days from loan agreement signing. Prosper deposits funds via ACH to your verified bank account. There is no direct-to-creditor payoff option, so for debt consolidation you receive the proceeds and handle the creditor payments yourself. Loan management, payment scheduling, and statements are accessible through Prosper's online dashboard and mobile app.",
    ],
    bestFor: [
      "Joint applicants where combining two profiles produces a meaningfully better rate",
      "Fair-credit borrowers (600-659 FICO) needing up to $50,000",
      "Borrowers who want a well-established platform with a 19-year lending track record",
      "Debt consolidation where a joint application makes the loan approachable",
    ],
    lookElsewhere: [
      "Want zero origination fee: Prosper always charges at least 1%. SoFi, Marcus, and Discover charge nothing.",
      "Need funding same-day or next-day reliably: Prosper takes 1 to 3 days. Discover funds faster.",
      "Have excellent credit (720+): You can do better at LightStream (7.99% starting, zero fees) or SoFi.",
    ],
    compTitle: "Prosper vs. LendingClub vs. Upstart",
    compHeaders: ["Prosper", "LendingClub", "Upstart"],
    compRows: [
      { feature: "Starting APR", a: "8.99%", b: "8.98%", c: "7.80%" },
      { feature: "Min FICO", a: "600", b: "600", c: "300" },
      { feature: "Origination Fee", a: "1-9.99%", b: "3-8%", c: "0-12%" },
      { feature: "Loan Max", a: "$50,000", b: "$40,000", c: "$50,000" },
      { feature: "Joint App", a: "Yes", b: "Yes", c: "No" },
      { feature: "Max Term", a: "60 months", b: "60 months", c: "60 months" },
    ],
    faq: [
      {
        q: "Is Prosper still peer-to-peer?",
        a: "Prosper started as a peer-to-peer marketplace in 2005, but the majority of loan funding now comes from institutional investors, not individual retail lenders. From a borrower's perspective, the experience is identical to any other online lender: you apply, get approved, and receive funds directly. The P2P history is background context.",
      },
      {
        q: "Does Prosper allow joint personal loan applications?",
        a: "Yes. Prosper supports joint applications where two borrowers apply together. Both parties are equally liable for repayment. A hard inquiry is placed on both credit files. The combined credit and income profile can result in a lower rate than either borrower could qualify for individually.",
      },
      {
        q: "What is Prosper's origination fee?",
        a: "Prosper charges 1 to 9.99% origination on all personal loans, deducted from proceeds before disbursement. There is no zero-origination option. A $20,000 loan with a 5% fee results in $19,000 received while owing the full $20,000 plus interest. Compare total cost of borrowing, not just APR, when evaluating Prosper against zero-fee lenders.",
      },
      {
        q: "How long does Prosper take to fund a loan?",
        a: "Prosper typically funds within 1 to 3 business days after the loan agreement is signed. This is slower than Discover and Best Egg (both next-day), but faster than LendingClub (4 days). Prosper does not offer same-day funding.",
      },
      {
        q: "What is the maximum Prosper loan amount?",
        a: "Prosper offers personal loans up to $50,000. This is higher than LendingClub ($40,000) and Discover ($40,000) but equal to Upstart and Best Egg. For amounts above $50,000, SoFi and LightStream both offer up to $100,000.",
      },
    ],
    ctaText: "Ready to compare all personal loan rates?",
    ctaHref: "/loans",
    ctaLinkLabel: "Compare all personal loan lenders",
  },
};

// ─── Static params + metadata ─────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(reviews).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = reviews[slug];
  if (!r) return { title: "Review not found" };
  return {
    title: r.metaTitle,
    description: r.metaDesc,
    alternates: { canonical: `/reviews/${slug}` },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = reviews[slug];
  if (!r) return <div className="p-12 text-mute">Review not found.</div>;

  const brand = getBrand(slug);

  const faqItems: FAQItem[] = r.faq.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  const brandName = getBrand(slug)?.name ?? r.h1;

  // Extract starting APR string from the first credit tier
  const aprStr = r.creditTiers[0]?.aprRange.split("-")[0] ?? undefined;

  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name={r.h1}
        description={r.metaDesc}
        slug={`/reviews/${slug}`}
        brandName={brandName}
        category="Personal Loan"
        apr={aprStr}
        ratingValue={parseFloat((r.stats.find((s) => s.label === "Fintiex Score")?.value ?? "8.4").replace("/10", ""))}
        reviewCount={1}
      />
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: brandName, href: `/reviews/${slug}` },
        ]}
      />
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            {brand && <BrandLogo brand={brand} size={72} rounded="lg" />}
            <div>
              <span className="chip chip-violet mb-3">{r.chipLabel}</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                {r.h1}
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                {r.byline}
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {r.stats.map((s) => (
              <Stat key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROS / CONS ───────────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              {r.pros.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="chip chip-lime shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              {r.cons.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="chip chip-mute shrink-0">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          About this lender
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          {r.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── RATES BY CREDIT TIER ─────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Rates by Credit Tier</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          {r.ratesIntro}
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Credit Tier</div>
            <div className="text-center">FICO Range</div>
            <div className="text-right">APR Range</div>
          </div>
          {r.creditTiers.map((row, i) => (
            <div
              key={row.tier}
              className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${
                i < r.creditTiers.length - 1 ? "border-b border-line-soft" : ""
              }`}
            >
              <div className="font-medium">{row.tier}</div>
              <div className="text-center font-mono tabular text-mute">{row.fico}</div>
              <div className="text-right font-mono tabular font-semibold">{row.aprRange}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">{r.ratesNote}</p>
      </section>

      {/* ── FEES ──────────────────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Fees</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What you will pay
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-4 text-[1.0rem]">
            {r.fees.map((fee, i) => (
              <li
                key={fee.label}
                className={`flex justify-between ${
                  i < r.fees.length - 1 ? "border-b border-line-soft pb-4" : ""
                }`}
              >
                <span className="text-ink-soft">{fee.label}</span>
                <span
                  className={
                    fee.highlight
                      ? "font-mono font-semibold chip chip-lime"
                      : "font-mono font-semibold"
                  }
                >
                  {fee.value}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">{r.feesNote}</p>
        </div>
      </section>

      {/* ── ELIGIBILITY ───────────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            {r.eligibility.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-violet shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── APPLICATION AND FUNDING ───────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Application and Funding</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          How the process works
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          {r.applicationParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── WHO FOR / WHO PASS ────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              {r.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">
              May not be the right fit if
            </h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              {r.lookElsewhere.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          {r.compTitle}
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">{r.compHeaders[0]}</div>
            <div className="text-center">{r.compHeaders[1]}</div>
            <div className="text-center">{r.compHeaders[2]}</div>
          </div>
          {r.compRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${
                i < r.compRows.length - 1 ? "border-b border-line-soft" : ""
              }`}
            >
              <div className="font-medium text-mute">{row.feature}</div>
              <div className="text-center font-mono">{row.a}</div>
              <div className="text-center font-mono">{row.b}</div>
              <div className="text-center font-mono">{row.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">FAQ</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8 leading-tight">
          Common questions
        </h2>
        <div className="space-y-5 max-w-3xl">
          {r.faq.map((item) => (
            <div key={item.q} className="card p-6">
              <div className="font-display font-semibold text-lg mb-2 tracking-tight">
                {item.q}
              </div>
              <div className="text-ink-soft leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl tracking-tight mb-2">
              {r.ctaText}
            </h2>
            <p className="text-mute">
              See our full lender table, updated daily, with no paid placements.
            </p>
          </div>
          <Link href={r.ctaHref} className="pill pill-ink shrink-0">
            {r.ctaLinkLabel} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className="font-display font-extrabold text-2xl tabular">{value}</div>
    </div>
  );
}
