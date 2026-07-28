"use client";

import { useRef } from "react";
import type { Capability } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import SectionBadge from "@/components/ui/SectionBadge";

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
  // Fade only — deliberately no X/Y translate. These cards are the deep-link
  // targets for the nav dropdowns, and `scrollToSection` measures the target
  // with getBoundingClientRect, which includes the transform. A card animating
  // in from an offset therefore lands that many pixels off once it settles.
  useSlideFadeIn({
    containerRef: gridRef,
    targetSelector: ".capability-card",
    fromX: 0,
    fromY: 0,
    stagger: 0.08,
  });

  return (
    <section
      id="capabilities"
      className="w-full bg-background"
      aria-labelledby={`${audienceId}-capabilities-heading`}
      data-section
    >
      <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
        <div className="flex flex-col gap-4">
          <SectionBadge label="Available today" />
          <h2
            id={`${audienceId}-capabilities-heading`}
            className="primary-heading text-primary-color text-left"
          >
            What you can do today
          </h2>
        </div>

        <div
          ref={gridRef}
          className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5"
        >
          {capabilities.map((capability) => (
            <article
              key={capability.id}
              id={capability.id}
              className="capability-card scroll-mt-32 flex flex-col gap-2.5 p-6 rounded-[20px] bg-primary-shade-5 border border-primary-shade-10 hover:border-primary-shade-30 transition-colors"
            >
              <h3 className="title-text text-primary-color">
                {capability.title}
              </h3>
              <p className="small-text text-text-color/80">
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
