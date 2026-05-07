"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface LineItems {
  cash: number;
  retirement: number;
  investments: number;
  realEstate: number;
  vehicles: number;
  other: number;
}

interface LiabilityItems {
  mortgage: number;
  studentLoans: number;
  creditCards: number;
  autoLoans: number;
  medicalDebt: number;
  other: number;
}

const ASSET_LABELS: { key: keyof LineItems; label: string; hint: string }[] = [
  { key: "cash", label: "Cash & checking", hint: "Checking, savings, HYSA, money market" },
  { key: "retirement", label: "Retirement accounts", hint: "401(k), IRA, Roth, 403(b), pension" },
  { key: "investments", label: "Investments", hint: "Brokerage, taxable, crypto, bonds" },
  { key: "realEstate", label: "Real estate", hint: "Primary residence, rentals, land (market value)" },
  { key: "vehicles", label: "Vehicles", hint: "Cars, motorcycles, boats (Kelley Blue Book)" },
  { key: "other", label: "Other assets", hint: "Business equity, collectibles, jewelry" },
];

const LIABILITY_LABELS: { key: keyof LiabilityItems; label: string; hint: string }[] = [
  { key: "mortgage", label: "Mortgage", hint: "Principal balance owed on home loans" },
  { key: "studentLoans", label: "Student loans", hint: "Federal and private student loan balance" },
  { key: "creditCards", label: "Credit cards", hint: "Total balances across all cards" },
  { key: "autoLoans", label: "Auto loans", hint: "Outstanding auto loan principal" },
  { key: "medicalDebt", label: "Medical debt", hint: "Outstanding medical or dental bills" },
  { key: "other", label: "Other debts", hint: "Personal loans, BNPL, family loans" },
];

export function Calculator() {
  const [assets, setAssets] = useState<LineItems>({
    cash: 5000,
    retirement: 40000,
    investments: 10000,
    realEstate: 0,
    vehicles: 15000,
    other: 0,
  });
  const [liabilities, setLiabilities] = useState<LiabilityItems>({
    mortgage: 0,
    studentLoans: 20000,
    creditCards: 5000,
    autoLoans: 10000,
    medicalDebt: 0,
    other: 0,
  });

  const result = useMemo(() => {
    const totalAssets = Object.values(assets).reduce((s, v) => s + (Number(v) || 0), 0);
    const totalLiabilities = Object.values(liabilities).reduce(
      (s, v) => s + (Number(v) || 0),
      0,
    );
    const netWorth = totalAssets - totalLiabilities;
    const debtToAsset = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;
    return { totalAssets, totalLiabilities, netWorth, debtToAsset };
  }, [assets, liabilities]);

  const positive = result.netWorth >= 0;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ASSETS */}
        <div className="card p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="font-mono uppercase text-xs tracking-wider text-mute">Assets</div>
            <div className="font-display font-bold text-lg tabular text-emerald-700">
              {usd.format(result.totalAssets)}
            </div>
          </div>
          <div className="space-y-4">
            {ASSET_LABELS.map((row) => (
              <label key={row.key} className="block">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium">{row.label}</span>
                  <span className="text-xs text-mute">{row.hint}</span>
                </div>
                <input
                  type="number"
                  min={0}
                  value={assets[row.key]}
                  onChange={(e) =>
                    setAssets({ ...assets, [row.key]: Number(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
                />
              </label>
            ))}
          </div>
        </div>

        {/* LIABILITIES */}
        <div className="card p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="font-mono uppercase text-xs tracking-wider text-mute">Liabilities</div>
            <div className="font-display font-bold text-lg tabular text-rose-700">
              {usd.format(result.totalLiabilities)}
            </div>
          </div>
          <div className="space-y-4">
            {LIABILITY_LABELS.map((row) => (
              <label key={row.key} className="block">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium">{row.label}</span>
                  <span className="text-xs text-mute">{row.hint}</span>
                </div>
                <input
                  type="number"
                  min={0}
                  value={liabilities[row.key]}
                  onChange={(e) =>
                    setLiabilities({
                      ...liabilities,
                      [row.key]: Number(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
              Your net worth
            </div>
            <div
              className={`font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2 ${
                positive ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {usd.format(result.netWorth)}
            </div>
            <div className="text-bg/60 text-sm max-w-md">
              Inputs not saved. Numbers reset every time you refresh the page.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 md:min-w-[420px]">
            <Metric label="Total assets" value={usd.format(result.totalAssets)} />
            <Metric label="Total liabilities" value={usd.format(result.totalLiabilities)} />
            <Metric
              label="Debt-to-asset"
              value={result.totalAssets > 0 ? `${result.debtToAsset.toFixed(0)}%` : "--"}
            />
          </div>
        </div>
      </div>

      {/* BREAKDOWN TABLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-flush overflow-hidden">
          <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
            <div className="font-display font-bold text-base">Asset breakdown</div>
            <div className="text-mute text-xs">Share of total assets</div>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {ASSET_LABELS.map((row, i) => {
                const value = assets[row.key];
                const pct = result.totalAssets > 0 ? (value / result.totalAssets) * 100 : 0;
                return (
                  <tr
                    key={row.key}
                    className={i === ASSET_LABELS.length - 1 ? "" : "border-b border-line-soft"}
                  >
                    <td className="px-6 py-3 font-medium">{row.label}</td>
                    <td className="px-6 py-3 font-mono tabular text-right text-mute">
                      {pct.toFixed(0)}%
                    </td>
                    <td className="px-6 py-3 font-mono tabular text-right font-semibold">
                      {usd.format(value)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
            <div className="font-display font-bold text-base">Liability breakdown</div>
            <div className="text-mute text-xs">Share of total debt</div>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {LIABILITY_LABELS.map((row, i) => {
                const value = liabilities[row.key];
                const pct =
                  result.totalLiabilities > 0 ? (value / result.totalLiabilities) * 100 : 0;
                return (
                  <tr
                    key={row.key}
                    className={
                      i === LIABILITY_LABELS.length - 1 ? "" : "border-b border-line-soft"
                    }
                  >
                    <td className="px-6 py-3 font-medium">{row.label}</td>
                    <td className="px-6 py-3 font-mono tabular text-right text-mute">
                      {pct.toFixed(0)}%
                    </td>
                    <td className="px-6 py-3 font-mono tabular text-right font-semibold">
                      {usd.format(value)}
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-bg/60 uppercase tracking-wider font-mono mb-1.5">{label}</div>
      <div className="font-display font-bold text-xl tabular">{value}</div>
    </div>
  );
}
