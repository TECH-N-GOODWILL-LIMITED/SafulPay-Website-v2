"use client";

import { useRef } from "react";
import { developerData } from "@/data/platformContent";
import { SectionBadge } from "@/app/(app)/platform/_components/SectionBadge";
import { FeatureRow } from "@/app/(app)/platform/_components/FeatureRow";
import { StatBadge } from "@/app/(app)/platform/_components/StatBadge";
import { CodeBlock } from "@/app/(app)/platform/_components/CodeBlock";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";

function DeveloperSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { badge, headline, subheadline, description, features, stats, cta } = developerData;

  useHeaderAnimation({
    containerRef: headerRef,
    headingSelector: ".animateheader",
    start: "top 75%",
  });

  useSlideFadeIn({
    containerRef: codeRef,
    fromX: -60,
    fromY: 0,
    start: "top 75%",
  });

  useSlideFadeIn({
    containerRef: contentRef,
    fromX: 60,
    fromY: 0,
    stagger: 0.07,
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
      id="developer"
      role="region"
      aria-labelledby="developer-heading"
      className="section py-20 md:py-28 text-left"
      data-section
    >
      {/* Section header — centered */}
      <div ref={headerRef} className="w-full flex flex-col items-center text-center gap-4 mb-14 md:mb-20">
        <SectionBadge label={badge} dark />

        <h2
          id="developer-heading"
          className="animateheader primary-heading text-white max-w-2xl"
        >
          {headline}
        </h2>
        <p className="text-base font-semibold text-secondary-color tracking-tight">
          {subheadline}
        </p>
        <p className="text-white/55 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* Two-column: code left, features right */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">
        {/* Left: code block */}
        <div ref={codeRef}>
          <CodeBlock />
        </div>

        {/* Right: features + stats */}
        <div ref={contentRef} className="flex flex-col gap-6">
          {/* Feature list */}
          <div>
            {features.map((feature, i) => (
              <FeatureRow key={i} feature={feature} dark />
            ))}
          </div>

          {/* Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-3 mt-2">
            {stats.map((stat, i) => (
              <StatBadge key={i} stat={stat} dark />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-2">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary-color text-primary-color text-sm font-bold hover:bg-secondary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(195,240,44,0.35)]"
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

export default DeveloperSection;