"use client";

import { useRef } from "react";
import type { Capability } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

/**
 * Block 2 of the shared template: what you can do today. Concrete, live
 * features only (guide §4).
 *
 * Each card carries the `id` its nav dropdown entry points at, so choosing
 * "Virtual cards" from the Personal menu lands on that card.
 */
function CapabilityGrid({
  capabilities,
  audienceId,
}: {
  capabilities: Capability[];
  audienceId: string;
}) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);

  useSlideFadeIn({
    containerRef: headRef,
    fromX: 0,
    fromY: 40,
    stagger: 0.1,
  });

  // Fade only — deliberately no X/Y translate. These cards are the deep-link
  // targets for the nav dropdowns, and `scrollToSection` measures the target
  // with getBoundingClientRect, which includes the transform. A card animating
  // in from an offset therefore lands that many pixels off once it settles.
  useSlideFadeIn({
    containerRef: gridRef,
    targetSelector: ".capability-card",
    fromX: 0,
    fromY: 0,
    stagger: 0.07,
  });

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#0b1310] text-white overflow-hidden"
      aria-labelledby={`${audienceId}-capabilities-heading`}
      data-section
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 78% 0%, rgba(195,240,44,0.10), transparent 70%)",
        }}
      />

      <div className="section relative z-10 px-5 py-28 max-md:py-20 gap-14 text-left items-start">
        <div ref={headRef} className="flex flex-col gap-5 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-secondary-color/80">
            Available today
          </span>
          <h2
            id={`${audienceId}-capabilities-heading`}
            className="text-[clamp(30px,5vw,58px)] font-bold tracking-[-0.035em] leading-[1.02] text-left"
          >
            What you can <span className="text-gradient-lime">do today</span>
          </h2>
          <p className="text-white/55 font-extralight text-[clamp(15px,1.8vw,19px)]">
            Everything listed here is live right now — no waitlists, no
            &ldquo;coming soon&rdquo;.
          </p>
        </div>

        <div
          ref={gridRef}
          className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4"
        >
          {capabilities.map((capability, index) => (
            <article
              key={capability.id}
              id={capability.id}
              className="capability-card group relative scroll-mt-32 flex flex-col gap-3 p-7 rounded-[22px] glass glass-hover overflow-hidden"
            >
              <span
                className="absolute top-6 right-7 text-[13px] font-semibold tabular-nums text-white/20 group-hover:text-secondary-color/70 transition-colors duration-300"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="w-9 h-9 rounded-xl flex-center bg-secondary-color/15 border border-secondary-color/25 group-hover:bg-secondary-color/25 transition-colors duration-300"
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-color" />
              </span>

              <h3 className="text-[clamp(16px,1.9vw,20px)] font-semibold tracking-[-0.01em] text-white">
                {capability.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapabilityGrid;
