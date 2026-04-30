const verticals = [
  { slug: "mortgages", title: "Mortgages", blurb: "Compare 30y, 15y, refi, HELOC, and jumbo rates." },
  { slug: "savings", title: "Savings & CDs", blurb: "Find the highest-yielding HYSAs and CDs." },
  { slug: "loans", title: "Personal & Auto Loans", blurb: "Compare rates by credit tier and purpose." },
  { slug: "credit-cards", title: "Credit Cards", blurb: "Cash back, travel, balance transfer, and more." },
  { slug: "calculators", title: "Calculators", blurb: "Mortgage, refi, savings, and debt payoff tools." },
];

export default function Home() {
  return (
    <div>
      <h1 className="font-display text-5xl text-primary mb-4">Fintiex</h1>
      <p className="text-lg text-ink-muted max-w-2xl mb-12">
        Rates, tools, and plain-English guides for your money. Updated continuously.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verticals.map((v) => (
          <a
            key={v.slug}
            href={`/${v.slug}`}
            className="block border border-line rounded-lg p-6 bg-white hover:border-primary transition"
          >
            <h2 className="font-display text-2xl text-primary mb-2">{v.title}</h2>
            <p className="text-ink-muted text-sm">{v.blurb}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
