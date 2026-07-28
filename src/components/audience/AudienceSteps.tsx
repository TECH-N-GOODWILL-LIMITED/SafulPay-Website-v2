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
      className="relative w-full bg-[#0b1310] text-white overflow-hidden"
      aria-labelledby={`${audienceId}-steps-heading`}
      data-section
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 12% 100%, rgba(103,150,123,0.28), transparent 70%)",
        }}
      />

      <div className="section relative z-10 px-5 py-28 max-md:py-20 gap-14 text-left items-start">
        <div ref={headRef} className="flex flex-col gap-5 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-secondary-color/80">
            How it works
          </span>
          <h2
            id={`${audienceId}-steps-heading`}
            className="text-[clamp(30px,5vw,58px)] font-bold tracking-[-0.035em] leading-[1.02] text-left"
          >
            Three steps to{" "}
            <span className="text-gradient-lime">get going</span>
          </h2>
        </div>

        <ol
          ref={stepsRef}
          className="relative w-full grid grid-cols-3 max-md:grid-cols-1 gap-5"
        >
          {/* Connector rail behind the cards on wide screens. */}
          <div
            className="absolute left-0 right-0 top-[54px] h-px bg-linear-to-r from-transparent via-secondary-color/25 to-transparent max-md:hidden"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <li
              key={step.title}
              className="audience-step group relative flex flex-col gap-4 p-8 rounded-[22px] glass glass-hover"
            >
              <span
                className="relative flex-center w-14 h-14 rounded-2xl bg-secondary-color text-primary-color text-lg font-bold shrink-0 glow-lime"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
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
