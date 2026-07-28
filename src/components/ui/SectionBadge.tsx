interface SectionBadgeProps {
  label: string;
  dark?: boolean;
}

export function SectionBadge({ label, dark = false }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${
        dark
          ? "bg-secondary-color/20 text-secondary-color border border-secondary-color/20"
          : "bg-primary-shade-5 text-primary-color border border-primary-shade-10"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          dark ? "bg-secondary-color" : "bg-primary-color"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export default SectionBadge;
