"use client";

import { useRef } from "react";
import type { AudienceSurface } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import SectionBadge from "@/components/ui/SectionBadge";

/**
 * Block 4 of the shared template: who it's for, requirements, eligibility
 * (guide §4).
 */
function AudienceEligibility({
  eligibility,
  audienceId,
}: {
  eligibility: NonNullable<AudienceSurface["eligibility"]>;
  audienceId: string;
}) {
  const ref = useRef<HTMLUListElement | null>(null);
  useSlideFadeIn({
    containerRef: ref,
    targetSelector: ".eligibility-point",
    fromX: 0,
    fromY: 40,
    stagger: 0.08,
  });

  return (
    <section
      id={eligibility.anchor ?? "eligibility"}
      className="w-full bg-background scroll-mt-32"
      aria-labelledby={`${audienceId}-eligibility-heading`}
      data-section
    >
      <div className="section px-5 py-24 max-md:py-16 gap-8 text-left items-start">
        <div className="flex flex-col gap-4">
          <SectionBadge label="Eligibility" />
          <h2
            id={`${audienceId}-eligibility-heading`}
            className="primary-heading text-primary-color text-left"
          >
            {eligibility.title}
          </h2>
        </div>

        <p className="text-[clamp(16px,2.2vw,20px)] font-extralight text-text-color/85 max-w-3xl">
          {eligibility.description}
        </p>

        {eligibility.points && (
          <ul ref={ref} className="flex flex-col gap-3 w-full max-w-3xl">
            {eligibility.points.map((point) => (
              <li
                key={point}
                className="eligibility-point flex items-start gap-3 small-text text-text-color/85"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary-color shrink-0"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default AudienceEligibility;
