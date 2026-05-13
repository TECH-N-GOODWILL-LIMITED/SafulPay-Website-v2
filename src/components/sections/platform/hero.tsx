"use client";

import { useRef } from "react";
import Link from "next/link";
import { platformHeroData } from "@/data/platformContent";
import { StatBadge } from "@/components/platform/StatBadge";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";

function PlatformHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { eyebrow, headline, body, anchors, stats } = platformHeroData;

  useSlideFadeIn({
    containerRef: contentRef,
    fromX: -60,
    fromY: 0,
    stagger: 0.12,
    start: "top 80%",
  });

  useScaleFadeIn({
    containerRef: statsRef,
    targetSelector: ".stat-badge",
    fromScale: 0.9,
    stagger: 0.1,
    start: "top 80%",
  });

  return (
    <section
      id="platform-hero"
      role="region"
      aria-labelledby="platform-heading"
      className="section py-20 md:py-28 text-left"
      data-section
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">
        {/* Left: content */}
        <div
          ref={contentRef}
          className="flex flex-col gap-6 max-lg:items-start"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary-color/20 text-secondary-color border border-secondary-color/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-secondary-color"
              aria-hidden="true"
            />
            {eyebrow}
          </span>

          <h1
            id="platform-heading"
            className="text-white text-left tracking-tight leading-[1.05] max-w-xl"
          >
            {headline}
          </h1>

          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-lg text-left">
            {body}
          </p>

          {/* Anchor nav */}
          <div className="flex flex-wrap gap-3 pt-2">
            {anchors.map((anchor) => (
              <Link
                key={anchor.href}
                href={anchor.href}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-secondary-color/40 transition-all duration-200 text-sm font-medium text-white/80 hover:text-white"
              >
                {anchor.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-150"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: stats bento */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-4 max-lg:grid-cols-4 max-sm:grid-cols-2"
          aria-label="Platform metrics"
        >
          {stats.map((stat, i) => (
            <StatBadge key={i} stat={stat} dark large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformHero;
