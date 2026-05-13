import type { UseCaseStat } from "@/data/platformContent";

interface StatBadgeProps {
  stat: UseCaseStat;
  dark?: boolean;
  large?: boolean;
}

export function StatBadge({ stat, dark = false, large = false }: StatBadgeProps) {
  return (
    <div
      className={`stat-badge flex flex-col gap-1 rounded-2xl border transition-colors duration-200 ${
        large ? "px-6 py-5" : "px-4 py-4"
      } ${
        dark
          ? "border-white/10 bg-white/5 hover:bg-white/8"
          : "border-zinc-100 bg-white hover:bg-zinc-50 shadow-[0_2px_12px_-4px_rgba(58,86,70,0.08)]"
      }`}
    >
      <span
        className={`font-bold tracking-tight leading-none font-mono ${
          large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        } ${dark ? "text-secondary-color" : "text-primary-color"}`}
      >
        {stat.value}
      </span>
      <span
        className={`text-xs tracking-wider uppercase font-medium ${
          dark ? "text-white/50" : "text-zinc-400"
        }`}
      >
        {stat.label}
      </span>
    </div>
  );
}