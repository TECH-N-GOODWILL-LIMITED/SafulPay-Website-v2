import type { UseCaseFeature } from "@/data/platformContent";

interface FeatureRowProps {
  feature: UseCaseFeature;
  dark?: boolean;
}

export function FeatureRow({ feature, dark = false }: FeatureRowProps) {
  return (
    <div
      className={`feature-item flex items-start gap-4 py-4 border-b last:border-0 group transition-colors duration-200 ${
        dark ? "border-white/10" : "border-zinc-100"
      }`}
    >
      <div
        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 transition-colors duration-200 ${
          dark
            ? "bg-secondary-color/15 group-hover:bg-secondary-color/25"
            : "bg-primary-shade-5 group-hover:bg-primary-shade-10"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2.5 7L5.5 10L11.5 4"
            stroke={dark ? "#c3f02c" : "#3a5646"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-0.5 text-left">
        <span
          className={`text-sm font-semibold tracking-tight ${
            dark ? "text-white" : "text-text-color"
          }`}
        >
          {feature.title}
        </span>
        <span
          className={`text-sm leading-relaxed ${
            dark ? "text-white/55" : "text-zinc-500"
          }`}
        >
          {feature.description}
        </span>
      </div>
    </div>
  );
}
