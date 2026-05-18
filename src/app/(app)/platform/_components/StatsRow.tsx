import type { UseCaseStat } from "@/data/platformContent";

interface StatsRowProps {
  stats: UseCaseStat[];
  dark?: boolean;
  className?: string;
}

export function StatsRow({
  stats,
  dark = false,
  className = "",
}: StatsRowProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 gap-y-6 divide-x max-md:*:not-odd:border-0 max-sm:*:odd:items-end py-8 md:py-10 text-left ${
        dark ? "divide-white/10" : "divide-primary-color/20"
      } ${className}`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="stat-badge flex flex-col items-start gap-2 px-5 md:px-8 first:pl-0 sm:first:pl-5 md:sm:first:pl-8"
        >
          <span
            className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight leading-none font-mono ${
              dark ? "text-secondary-color" : "text-primary-color"
            }`}
          >
            {stat.value}
          </span>
          <span
            className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold ${
              dark ? "text-white/40" : "text-zinc-500"
            }`}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
