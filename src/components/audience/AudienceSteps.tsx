"use client";

import { useRef } from "react";
import type { HowItWorksStep } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

/**
 * Block 3 of the shared template: how it works, in three steps (guide §4).
 *
 * Surfaces whose onboarding path is still an open question omit `steps`
 * entirely rather than publish a guess, so this renders nothing for them.
 */
function AudienceSteps({
  steps,
  audienceId,
}: {
  steps: HowItWorksStep[];
  audienceId: string;
}) {
  const stepsRef = useRef<HTMLOListElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);

  useSlideFadeIn({ containerRef: headRef, fromX: 0, fromY: 40, stagger: 0.1 });
  useSlideFadeIn({
    containerRef: stepsRef,
    targetSelector: ".audience-step",
    fromX: 0,
    fromY: 50,
    stagger: 0.14,
  });

  return (
    <section
      className="w-full bg-background px-6 sm:px-10 lg:px-14 py-6"
      aria-labelledby={`${audienceId}-steps-heading`}
      data-section
    >
      <div className="shell rounded-[36px] max-md:rounded-[26px] wash-mint border border-primary-shade-10 overflow-hidden">
        <div className="px-14 py-20 max-lg:px-9 max-md:px-6 max-md:py-14 flex flex-col gap-12 text-left items-start">
          <div ref={headRef} className="flex flex-col gap-4 max-w-3xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-color/60">
              How it works
            </span>
            <h2
              id={`${audienceId}-steps-heading`}
              className="text-[clamp(28px,4.6vw,54px)] font-bold tracking-[-0.035em] leading-[1.03] text-left text-primary-color"
            >
              Three steps to{" "}
              <span className="text-gradient-green">get going</span>
            </h2>
          </div>

          <ol
            ref={stepsRef}
            className="relative w-full grid grid-cols-3 max-md:grid-cols-1 gap-5"
          >
            {/* Connector rail behind the cards on wide screens. */}
            <div
              className="absolute left-0 right-0 top-[58px] h-px bg-linear-to-r from-transparent via-primary-shade-30 to-transparent max-md:hidden"
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <li
                key={step.title}
                className="audience-step relative flex flex-col gap-4 p-8 rounded-[22px] card-light card-light-hover"
              >
                <span
                  className="relative flex-center w-14 h-14 rounded-2xl bg-linear-to-br from-primary-color to-[#67967b] text-secondary-color text-lg font-bold shrink-0 shadow-[0_10px_26px_-10px_rgba(58,86,70,0.7)]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.01em] text-primary-color">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-text-color/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AudienceSteps;
