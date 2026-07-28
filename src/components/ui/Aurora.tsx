/**
 * Drifting mesh-gradient backdrop.
 *
 * Three blurred colour fields over a near-black base, plus a faint grid and a
 * film-grain pass. Purely decorative and `aria-hidden`; the drift animation is
 * disabled under `prefers-reduced-motion` by the rules in index.css.
 */
function Aurora({ variant = "green" }: { variant?: "green" | "lime" }) {
  const lead =
    variant === "lime"
      ? "rgba(195,240,44,0.30)"
      : "rgba(103,150,123,0.42)";

  return (
    <div className="aurora grain grid-overlay" aria-hidden="true">
      <div
        className="aurora-blob aurora-a"
        style={{
          width: "58%",
          height: "78%",
          left: "-12%",
          top: "-28%",
          background: lead,
        }}
      />
      <div
        className="aurora-blob aurora-b"
        style={{
          width: "46%",
          height: "66%",
          right: "-8%",
          top: "-18%",
          background: "rgba(195,240,44,0.22)",
        }}
      />
      <div
        className="aurora-blob aurora-a"
        style={{
          width: "52%",
          height: "58%",
          left: "28%",
          bottom: "-34%",
          background: "rgba(58,86,70,0.55)",
          animationDelay: "-7s",
        }}
      />
    </div>
  );
}

export default Aurora;
