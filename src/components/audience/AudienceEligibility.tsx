"use client";

import { useRef } from "react";
import type { AudienceSurface } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

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
  const headRef = useRef<HTMLDivElement | null>(null);

  useSlideFadeIn({ containerRef: headRef, fromX: 0, fromY: 40, stagger: 0.1 });
  useSlideFadeIn({
    containerRef: ref,
    targetSelector: ".eligibility-point",
    fromX: 0,
    fromY: 30,
    stagger: 0.09,
  });

  return (
    <section
      id={eligibility.anchor ?? "eligibility"}
      className="w-full bg-background scroll-mt-32"
      aria-labelledby={`${audienceId}-eligibility-heading`}
      data-section
    >
      <div className="section px-5 py-24 max-md:py-16 items-start">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-12 items-start">
          <div ref={headRef} className="flex flex-col gap-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-color/60">
              Eligibility
            </span>
            <h2
              id={`${audienceId}-eligibility-heading`}
              className="text-[clamp(28px,4.4vw,50px)] font-bold tracking-[-0.035em] leading-[1.04] text-left text-primary-color"
            >
              {eligibility.title}
            </h2>
            <p className="text-[clamp(15px,1.9vw,19px)] font-extralight leading-relaxed text-text-color/65">
              {eligibility.description}
            </p>
          </div>

          {eligibility.points && (
            <ul ref={ref} className="flex flex-col gap-3 w-full">
              {eligibility.points.map((point) => (
                <li
                  key={point}
                  className="eligibility-point flex items-start gap-4 p-5 rounded-2xl card-light card-light-hover text-sm font-light leading-relaxed text-text-color/75"
                >
                  <span
                    className="mt-0.5 flex-center w-6 h-6 rounded-full bg-linear-to-br from-secondary-color to-[#a8d820] shrink-0"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3">
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.8"
                        fill="none"
                        stroke="#3a5646"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default AudienceEligibility;
