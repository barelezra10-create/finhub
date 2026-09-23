import { ArticleArt } from "@/components/article-art";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Landmark, CreditCard, House, HandCoins, ShieldCheck, TrendingUp, Calculator, BadgeCheck } from "lucide-react";
import { savingsOffers, SAVINGS_CHECKED, rateLabel } from "@/lib/savings-rates";
import { BrandLogo } from "@/components/brand-logo";
import { FAQPageSchema, type FAQItem } from "@/components/schemas";
export const metadata: Metadata = { title: "Fintiex | Compare Credit Cards, Savings & Financial Calculators", alternates: { canonical: "/" } };
const homepageFaqs: FAQItem[] = [
  {
    question: "How does Fintiex make money?",
    answer: "See our editorial policy for how comparisons are prepared and how commercial disclosures are handled. Do not infer independence or a financial relationship from a product appearing on the site.",
  },
  {
    question: "How often are rates updated?",
    answer: "Savings observations show the date the provider information was checked. They are not a live feed. Check the provider before applying; rates and eligibility can change.",
  },
  {
    question: "Is the data sourced directly from lenders?",
    answer: "The refreshed savings comparisons link to the provider pages used. When a current numeric APY cannot be confirmed, we show Check provider instead of estimating it. Other sections may contain older information.",
  },
  {
    question: "How are savings offers ordered?",
    answer: "Confirmed numeric APYs are ordered from highest to lowest, with qualification conditions displayed. This is a selection of products rather than a complete market ranking. Our editorial policy explains the limitations.",
  },
  {
    question: "Is signup required to use the calculators?",
    answer: "No account, no email address, and no signup of any kind is required. Every calculator on Fintiex is free and fully accessible. We will never put a calculator behind a registration wall.",
  },
];


const categories = [
  { title: "Banking & savings", sub: "Give your savings more potential", href: "/savings", icon: Landmark },
  { title: "Credit cards", sub: "Find the benefits that fit your life", href: "/credit-cards", icon: CreditCard },
  { title: "Mortgages", sub: "Make your next move with clarity", href: "/mortgages", icon: House },
  { title: "Personal loans", sub: "Understand your borrowing options", href: "/loans", icon: HandCoins },
  { title: "Insurance", sub: "Explore coverage for what matters", href: "/insurance", icon: ShieldCheck },
  { title: "Investing", sub: "Plan for your longer-term goals", href: "/investing", icon: TrendingUp },
];
const calculators = [
  ["Mortgage payment", "Estimate your monthly housing costs", "mortgage-payment"],
  ["Compound interest", "See how your money could grow", "compound-interest"],
  ["Debt payoff", "Map a path toward your last payment", "debt-payoff"],
  ["Savings goal", "Turn a target into a monthly plan", "savings-goal"],
  ["Refinance break-even", "Weigh savings against upfront costs", "refinance-break-even"],
  ["CD ladder", "Plan deposits with staggered maturities", "cd-ladder"],
  ["HELOC payment", "Explore draw and repayment scenarios", "heloc"],
  ["Net worth", "Put your assets and debts in perspective", "net-worth"],
];
const guides = [
  { tag: "HOMEOWNERSHIP", title: "A clearer picture of how mortgages work", desc: "Get familiar with the terms, costs, and decisions behind a home loan.", href: "/learn/how-mortgages-work", icon: House },
  { tag: "CREDIT CARDS", title: "Your first credit card starts with the right questions", desc: "Understand fees, interest, and the features to compare before applying.", href: "/learn/choosing-first-credit-card", icon: CreditCard },
  { tag: "MANAGING DEBT", title: "Does debt consolidation make sense for you?", desc: "Explore the trade-offs before combining your balances into one loan.", href: "/learn/is-debt-consolidation-a-good-idea", icon: HandCoins },
];
export default function Home() {
  const offers = savingsOffers.filter(o => o.apy !== null && !o.closed).sort((a,b) => b.apy! - a.apy!).slice(0,4);
  return <div className="finance-home">
    <FAQPageSchema items={homepageFaqs} />
    <section className="hub-intro">
      <div className="hub-wrap intro-layout">
        <div>
          <p className="hub-eyebrow">YOUR PERSONAL FINANCE HUB</p>
          <h1>Make your next<br />money move <em>count.</em></h1>
          <p className="intro-copy">Compare your options. Understand the trade-offs. Find the tools and guidance to move forward.</p>
        </div>
        <aside className="start-panel">
          <span className="hub-eyebrow">A GOOD PLACE TO START</span>
          <h2>What’s on your mind?</h2>
          <Link href="/savings/hysa">Earn more on my savings <ArrowUpRight size={19}/></Link>
          <Link href="/credit-cards/compare">Compare credit cards <ArrowUpRight size={19}/></Link>
          <Link href="/calculators/mortgage-payment">Plan a home purchase <ArrowUpRight size={19}/></Link>
        </aside>
      </div>
      <div className="hub-wrap category-grid">
        {categories.map(({title,sub,href,icon:Icon}) => <Link href={href} key={href} className="category-tile"><Icon size={27} strokeWidth={1.6}/><h2>{title}</h2><p>{sub}</p><ArrowRight size={18} className="category-arrow"/></Link>)}
      </div>
    </section>
    <div className="hub-wrap standards-row"><span><BadgeCheck size={18}/> Provider sources linked</span><span><Calculator size={18}/> Free financial calculators</span><Link href="/editorial-policy">Our editorial standards <ArrowUpRight size={16}/></Link></div>
    <section className="hub-wrap hub-section savings-layout">
      <div className="section-intro"><p className="hub-eyebrow">MAKE MORE OF YOUR SAVINGS</p><h2>Small rate differences.<br/>Real possibilities.</h2><p>Compare savings accounts side by side, including the conditions behind each rate.</p><Link className="hub-button" href="/savings/hysa">Compare savings accounts <ArrowRight size={17}/></Link><Link href="/savings/rate-tracker" className="hub-text-link">Explore rate history & sources</Link></div>
      <div className="savings-board"><div className="board-heading"><h3>Savings account snapshot</h3><span>Latest check {SAVINGS_CHECKED}</span></div><div className="rate-labels"><span>Account & conditions</span><span>APY</span></div>{offers.map(o => <Link href={o.review} className="savings-row" key={o.key}><BrandLogo brand={o.key === "cit-savings-connect" ? "cit" : o.key} size={36}/><div><h4>{o.name}</h4><p>{o.condition} Checked {o.checked}.</p></div><strong>{rateLabel(o.apy)}</strong><ArrowUpRight size={17}/></Link>)}<p className="board-note">Dated observations, not live quotes. Variable rates and eligibility apply. This selection does not cover the whole market.</p></div>
    </section>
    <section className="tool-band"><div className="hub-wrap hub-section"><div className="section-heading"><div><p className="hub-eyebrow">LESS GUESSWORK. MORE CLARITY.</p><h2>Put your plans into numbers.</h2></div><Link href="/calculators" className="hub-text-link">All calculators <ArrowRight size={18}/></Link></div><div className="tools-grid">{calculators.map(([title,desc,slug],i) => <Link key={slug} href={'/calculators/'+slug} className="tool-link"><span className="tool-number">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={19}/></Link>)}</div></div></section>
    <section id="guides" className="hub-wrap hub-section"><div className="section-heading"><div><p className="hub-eyebrow">BUILD YOUR MONEY KNOW-HOW</p><h2>Big money questions. Zero jargon.</h2></div><Link href="/learn" className="hub-text-link">All guides <ArrowRight size={18}/></Link></div><div className="guides-grid">{guides.map(({tag,title,desc,href}) => <Link href={href} className="guide-card" key={href}><ArticleArt topic={href} /><div className="guide-copy"><p className="hub-eyebrow">{tag}</p><h3>{title}</h3><p>{desc}</p><span className="hub-text-link">Read the guide <ArrowRight size={16}/></span></div></Link>)}</div></section>
    <section className="hub-wrap card-directory"><div><CreditCard size={30}/><h2>A card for the way you spend.</h2><p>Explore categories, then compare fees and benefits.</p></div><nav aria-label="Credit card categories">{[["Cash back","cash-back"],["Travel","travel"],["Balance transfer","balance-transfer"],["0% APR","zero-apr"],["No annual fee","no-fee"],["Business","business"]].map(([title,slug]) => <Link href={'/credit-cards/'+slug} key={slug}>{title}<ArrowUpRight size={17}/></Link>)}</nav></section>
    <section className="hub-wrap hub-section faq-section"><div><p className="hub-eyebrow">ABOUT FINTIEX</p><h2>A little more<br/>transparency.</h2><Link href="/editorial-policy" className="hub-text-link">How we prepare comparisons <ArrowRight size={16}/></Link></div><div>{homepageFaqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>
  </div>;
}
