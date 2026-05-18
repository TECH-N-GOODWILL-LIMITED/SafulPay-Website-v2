import type { UseCaseFeature } from "@/data/platformContent";

interface FeatureRowProps {
  feature: UseCaseFeature;
  dark?: boolean;
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  cash: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.5" strokeWidth="1.6" />
      <path d="M5.5 9.5v5M18.5 9.5v5" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  bill: (
    <>
      <path
        d="M6 3h12v18l-2.5-1.6L13 21l-2.5-1.6L8 21 5.5 19.4 6 21V3Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 12h6M9 16h4" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.25" strokeWidth="1.6" />
      <path d="M2.75 12h18.5" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 2.75c2.6 3 3.9 6 3.9 9.25S14.6 18.25 12 21.25M12 2.75c-2.6 3-3.9 6-3.9 9.25s1.3 6.25 3.9 9.25"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" strokeWidth="1.6" />
      <path d="M10.5 18.5h3" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M2.5 9.5c.8.8.8 2 0 2.8M21.5 9.5c-.8.8-.8 2 0 2.8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
};

export function FeatureRow({ feature, dark = false }: FeatureRowProps) {
  const stroke = dark ? "#c3f02c" : "#3a5646";
  const iconNode = feature.icon ? ICON_PATHS[feature.icon] : undefined;

  return (
    <div
      className={`feature-item flex items-start gap-4 py-4 border-b last:border-0 group transition-colors duration-200 ${
        dark ? "border-white/10" : "border-primary-color/10"
      }`}
    >
      <div
        className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-colors duration-200 ${
          dark
            ? "bg-secondary-color/15 group-hover:bg-secondary-color/25"
            : "bg-primary-shade-5 group-hover:bg-primary-shade-10"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          aria-hidden="true"
        >
          {iconNode ?? (
            <path
              d="M5 12.5L9.5 17L19 7"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
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
          className={`text-sm leading-relaxed text-shadow-xs ${
            dark ? "text-white/55" : "text-zinc-500"
          }`}
        >
          {feature.description}
        </span>
      </div>
    </div>
  );
}
