"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { type CardData, yearlyRewardsValue } from "@/lib/cards";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function Calculator({ cards }: { cards: CardData[] }) {
  const [groceries, setGroceries] = useState(500);
  const [dining, setDining] = useState(200);
  const [travel, setTravel] = useState(150);
  const [gas, setGas] = useState(150);
  const [other, setOther] = useState(1000);

  const result = useMemo(() => {
    const spend: Record<string, number> = {
      groceries,
      "us-supermarkets": groceries,
      "online-groceries": groceries,
      dining,
      "us-restaurants": dining,
      travel,
      flights: travel,
      hotels: travel,
      gas,
      other,
    };
    const ranked = cards
      .map((c) => ({ card: c, value: yearlyRewardsValue(c, spend) }))
      .sort((a, b) => b.value - a.value);
    const totalSpend = (groceries + dining + travel + gas + other) * 12;
    return { ranked, top5: ranked.slice(0, 5), totalSpend };
  }, [cards, groceries, dining, travel, gas, other]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">
            Monthly spend
          </div>
          <SpendInput label="Groceries / mo ($)" value={groceries} onChange={setGroceries} />
          <SpendInput label="Dining / mo ($)" value={dining} onChange={setDining} />
          <SpendInput label="Travel / mo ($)" value={travel} onChange={setTravel} />
          <SpendInput label="Gas / mo ($)" value={gas} onChange={setGas} />
          <SpendInput label="Everything else / mo ($)" value={other} onChange={setOther} />
        </div>
        {/* RESULT */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Top card earns
          </div>
          <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
            {usd.format(result.top5[0]?.value ?? 0)}
          </div>
          <div className="text-bg/60 text-sm mb-8">
            Per year, based on {usd.format(result.totalSpend)} of total annual spend. Points cards valued at their typical redemption rate.
          </div>
          <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
            <Metric label="Top card" value={result.top5[0]?.card.name ?? "--"} />
            <Metric label="Annual spend" value={usd.format(result.totalSpend)} />
            <Metric label="Cards ranked" value={String(cards.length)} />
            <Metric
              label="Earn rate"
              value={
                result.totalSpend > 0 && result.top5[0]
                  ? `${((result.top5[0].value / result.totalSpend) * 100).toFixed(2)}%`
                  : "--"
              }
            />
          </div>
        </div>
      </div>

      {/* RANKING TABLE */}
      <div className="card-flush overflow-hidden">
        <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
          <div className="font-display font-bold text-lg">Top 5 cards for your spending</div>
          <div className="text-mute text-sm">
            Ranked by annual rewards value at your monthly spend profile.
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs font-mono uppercase tracking-wider text-mute">
                <th className="text-left px-6 py-3">Rank</th>
                <th className="text-left px-6 py-3">Card</th>
                <th className="text-right px-6 py-3">Annual fee</th>
                <th className="text-right px-6 py-3">Gross rewards</th>
                <th className="text-right px-6 py-3">Net rewards</th>
              </tr>
            </thead>
            <tbody>
              {result.top5.map((row, i) => {
                const net = row.value - row.card.annual_fee;
                return (
                  <tr
                    key={row.card.slug}
                    className={i === result.top5.length - 1 ? "" : "border-b border-line-soft"}
                  >
                    <td className="px-6 py-3 font-mono tabular">{i + 1}</td>
                    <td className="px-6 py-3 font-medium">
                      <Link
                        href={`/credit-cards/${row.card.slug}`}
                        className="hover:text-violet transition-colors"
                      >
                        {row.card.issuer} {row.card.name}
                      </Link>
                    </td>
                    <td className="px-6 py-3 font-mono tabular text-right text-mute">
                      {row.card.annual_fee === 0 ? "$0" : usd.format(row.card.annual_fee)}
                    </td>
                    <td className="px-6 py-3 font-mono tabular text-right">
                      {usd.format(row.value)}
                    </td>
                    <td
                      className={`px-6 py-3 font-mono tabular text-right font-semibold ${
                        net > 0 ? "text-mint" : "text-rose"
                      }`}
                    >
                      {usd.format(net)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SpendInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-bg/60 uppercase tracking-wider font-mono mb-1.5">{label}</div>
      <div className="font-display font-bold text-base tabular leading-snug">{value}</div>
    </div>
  );
}
