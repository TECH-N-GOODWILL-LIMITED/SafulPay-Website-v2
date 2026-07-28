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
      className="w-full bg-background"
      aria-labelledby={`${audienceId}-capabilities-heading`}
      data-section
    >
      <div className="shell flex flex-col px-6 sm:px-10 lg:px-14 py-24 max-md:py-16 gap-12 text-left items-start">
        <div ref={headRef} className="flex flex-col gap-4 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-color/60">
            Available today
          </span>
          <h2
            id={`${audienceId}-capabilities-heading`}
            className="text-[clamp(28px,4.6vw,54px)] font-bold tracking-[-0.035em] leading-[1.03] text-left text-primary-color"
          >
            What you can{" "}
            <span className="text-gradient-green">do today</span>
          </h2>
          <p className="text-text-color/60 font-extralight text-[clamp(15px,1.8vw,19px)]">
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
              className="capability-card group relative scroll-mt-32 flex flex-col gap-3 p-7 rounded-[22px] card-light card-light-hover overflow-hidden"
            >
              <span
                className="absolute top-6 right-7 text-[13px] font-semibold tabular-nums text-primary-color/20 group-hover:text-primary-color/45 transition-colors duration-300"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="w-10 h-10 rounded-xl flex-center bg-linear-to-br from-secondary-color to-[#a8d820] shadow-[0_6px_16px_-6px_rgba(195,240,44,0.9)]"
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-primary-color" />
              </span>

              <h3 className="text-[clamp(16px,1.9vw,20px)] font-semibold tracking-[-0.01em] text-primary-color">
                {capability.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-text-color/65">
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
