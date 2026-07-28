"use client";

import { useRef } from "react";
import type { HowItWorksStep } from "@/data/audiences";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import SectionBadge from "@/components/ui/SectionBadge";

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
  useSlideFadeIn({
    containerRef: stepsRef,
    targetSelector: ".audience-step",
    fromX: 0,
    fromY: 60,
    stagger: 0.12,
  });

  return (
    <section
      id="how-it-works"
      className="w-full bg-linear-to-br from-primary-shade-5 via-background to-secondary-color/10"
      aria-labelledby={`${audienceId}-steps-heading`}
      data-section
    >
      <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
        <div className="flex flex-col gap-4">
          <SectionBadge label="How it works" />
          <h2
            id={`${audienceId}-steps-heading`}
            className="primary-heading text-primary-color text-left"
          >
            Three steps to get going
          </h2>
        </div>

        <ol
          ref={stepsRef}
          className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-5"
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="audience-step flex flex-col gap-3 p-7 rounded-[20px] bg-white border border-primary-shade-10"
            >
              <span
                className="flex-center w-10 h-10 rounded-full bg-primary-color text-white font-bold shrink-0"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="title-text text-primary-color">{step.title}</h3>
              <p className="small-text text-text-color/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AudienceSteps;
