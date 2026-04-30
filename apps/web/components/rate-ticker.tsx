const tickerItems: Array<{ label: string; value: string; delta: number }> = [
  { label: "30Y FIXED", value: "6.85%", delta: 0.02 },
  { label: "15Y FIXED", value: "6.12%", delta: -0.01 },
  { label: "REFI 30Y", value: "6.78%", delta: 0.01 },
  { label: "HELOC", value: "9.20%", delta: 0.0 },
  { label: "JUMBO 30Y", value: "7.05%", delta: 0.03 },
  { label: "HYSA TOP", value: "4.85%", delta: -0.05 },
  { label: "12M CD", value: "5.10%", delta: 0.0 },
  { label: "24M CD", value: "4.85%", delta: -0.02 },
  { label: "5Y CD", value: "4.40%", delta: 0.01 },
  { label: "MMA TOP", value: "4.65%", delta: 0.0 },
  { label: "AUTO 60M NEW", value: "7.10%", delta: -0.02 },
  { label: "AUTO 60M USED", value: "8.45%", delta: 0.04 },
  { label: "PERSONAL EXC.", value: "8.20%", delta: 0.0 },
  { label: "10Y TREASURY", value: "4.32%", delta: 0.01 },
];

function deltaPart(d: number) {
  if (d === 0) return <span className="text-mute tabular">0.00</span>;
  const arrow = d > 0 ? "↑" : "↓";
  const cls = d > 0 ? "text-rose" : "text-mint";
  return (
    <span className={`tabular ${cls}`}>
      {arrow} {Math.abs(d).toFixed(2)}
    </span>
  );
}

export function RateTicker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-ink text-bg border-b border-ink overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 z-10 px-3 flex items-center gap-2 bg-lime text-ink font-mono font-bold tracking-[0.18em] text-[10px]">
        <span className="pulse-dot" /> LIVE
      </div>
      <div className="ticker-track py-2.5 pl-24 font-mono text-[11px] tracking-wide">
        {doubled.map((it, i) => (
          <span key={i} className="px-5 inline-flex items-center gap-3">
            <span className="opacity-50">{it.label}</span>
            <span className="font-semibold tabular">{it.value}</span>
            {deltaPart(it.delta)}
            <span className="opacity-20 px-1">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
