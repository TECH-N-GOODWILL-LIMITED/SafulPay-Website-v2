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
      className="relative w-full bg-[#0b1310] text-white scroll-mt-32 overflow-hidden"
      aria-labelledby={`${audienceId}-eligibility-heading`}
      data-section
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 88% 20%, rgba(195,240,44,0.09), transparent 70%)",
        }}
      />

      <div className="section relative z-10 px-5 py-28 max-md:py-20 gap-12 items-start">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-12 items-start">
          <div ref={headRef} className="flex flex-col gap-5 text-left">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-secondary-color/80">
              Eligibility
            </span>
            <h2
              id={`${audienceId}-eligibility-heading`}
              className="text-[clamp(30px,5vw,54px)] font-bold tracking-[-0.035em] leading-[1.03] text-left"
            >
              {eligibility.title}
            </h2>
            <p className="text-[clamp(15px,1.9vw,19px)] font-extralight leading-relaxed text-white/60">
              {eligibility.description}
            </p>
          </div>

          {eligibility.points && (
            <ul ref={ref} className="flex flex-col gap-3 w-full">
              {eligibility.points.map((point) => (
                <li
                  key={point}
                  className="eligibility-point flex items-start gap-4 p-5 rounded-2xl glass glass-hover text-sm font-light leading-relaxed text-white/75"
                >
                  <span
                    className="mt-1 flex-center w-5 h-5 rounded-full bg-secondary-color/20 border border-secondary-color/35 shrink-0"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.8"
                        fill="none"
                        stroke="#c3f02c"
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
