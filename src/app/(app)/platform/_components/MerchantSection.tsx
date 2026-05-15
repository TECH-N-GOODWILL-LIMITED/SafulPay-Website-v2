"use client";

import { useRef } from "react";
import { merchantData } from "@/data/platformContent";
import { SectionBadge } from "@/app/(app)/platform/_components/SectionBadge";
import { FeatureRow } from "@/app/(app)/platform/_components/FeatureRow";
import { StatBadge } from "@/app/(app)/platform/_components/StatBadge";
import { MerchantTerminal } from "@/app/(app)/platform/_components/MerchantTerminal";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";

function MerchantSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { badge, headline, subheadline, description, features, stats, cta } = merchantData;

  useSlideFadeIn({
    containerRef: contentRef,
    fromX: 50,
    fromY: 0,
    stagger: 0.08,
    start: "top 75%",
  });

  useSlideFadeIn({
    containerRef: visualRef,
    fromX: -60,
    fromY: 0,
    start: "top 75%",
  });

  useScaleFadeIn({
    containerRef: statsRef,
    targetSelector: ".stat-badge",
    fromScale: 0.92,
    stagger: 0.08,
    start: "top 85%",
  });

  return (
    <section
      id="merchant"
      role="region"
      aria-labelledby="merchant-heading"
      className="section py-20 md:py-28 text-left"
      data-section
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-14 lg:gap-20 items-start">
        {/* Left: terminal mockup (reversed on mobile) */}
        <div
          ref={visualRef}
          className="flex justify-center lg:justify-start pt-4 lg:pt-10 order-last lg:order-first"
        >
          <MerchantTerminal />
        </div>

        {/* Right: content */}
        <div ref={contentRef} className="flex flex-col gap-5">
          <SectionBadge label={badge} />

          <div className="flex flex-col gap-2">
            <h2 id="merchant-heading" className="primary-heading text-left">
              {headline}
            </h2>
            <p className="text-base font-semibold text-primary-color tracking-tight">
              {subheadline}
            </p>
          </div>

          <p className="text-zinc-500 text-base leading-relaxed max-w-lg">
            {description}
          </p>

          {/* Feature list */}
          <div className="mt-2">
            {features.map((feature, i) => (
              <FeatureRow key={i} feature={feature} />
            ))}
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {stats.map((stat, i) => (
              <StatBadge key={i} stat={stat} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-2">
            <a
              href={cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-color text-white text-sm font-semibold hover:bg-primary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(58,86,70,0.35)]"
            >
              {cta.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantSection;