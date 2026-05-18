"use client";

import { useRef } from "react";
import { developerData } from "@/data/platformContent";
import { SectionBadge } from "@/app/(app)/platform/_components/SectionBadge";
import { FeatureRow } from "@/app/(app)/platform/_components/FeatureRow";
import { CodeBlock } from "@/app/(app)/platform/_components/CodeBlock";
import { StatsRow } from "@/app/(app)/platform/_components/StatsRow";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";

// Decorative endpoint chips — view-layer only, intentionally co-located
const ENDPOINTS = [
  { method: "POST", path: "/v1/transfers" },
  { method: "GET", path: "/v1/wallets" },
  { method: "POST", path: "/v1/payouts/batch" },
  { method: "EVT", path: "transfer.completed" },
];

function DeveloperSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const codeColRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { badge, headline, subheadline, description, features, stats, cta } =
    developerData;

  useSlideFadeIn({
    containerRef: headerRef,
    targetSelector: "*",
    fromX: 0,
    fromY: 30,
    stagger: 0.08,
    start: "top 85%",
    each: true,
  });

  useSlideFadeIn({
    containerRef: codeColRef,
    fromX: -60,
    fromY: 0,
    start: "top 80%",
  });

  useScaleFadeIn({
    containerRef: codeRef,
    fromScale: 0.97,
    start: "top 80%",
  });

  useSlideFadeIn({
    containerRef: contentRef,
    targetSelector: "*",
    fromX: 0,
    fromY: 28,
    stagger: 0.07,
    start: "top 80%",
    each: true,
  });

  useScaleFadeIn({
    containerRef: statsRef,
    targetSelector: ".stat-badge",
    fromScale: 0.94,
    stagger: 0.08,
    start: "top 85%",
  });

  return (
    <section
      id="developer"
      role="region"
      aria-labelledby="developer-heading"
      className="relative section py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      data-section
    >
      {/* Subtle dot grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Centered header */}
      <div
        ref={headerRef}
        className="relative flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"
      >
        <SectionBadge label={badge} dark />
        <h2
          id="developer-heading"
          className="text-[clamp(40px,7.5vw,84px)] font-black leading-[0.95] tracking-tight text-background"
        >
          {headline}
        </h2>
      </div>

      {/* Two-column: code + chips left, features + CTA right */}
      <div className="relative mt-14 md:mt-20 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <div
          ref={codeColRef}
          className="flex flex-col gap-5 lg:sticky lg:top-24"
        >
          <div ref={codeRef} className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[80%] h-[70%] rounded-full bg-secondary-color/15 blur-[120px]" />
            </div>
            <div className="relative">
              <CodeBlock />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {ENDPOINTS.map((e, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70"
              >
                <span className="text-secondary-color font-bold">
                  {e.method}
                </span>
                <span>{e.path}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div ref={contentRef} className="flex flex-col gap-2 text-left">
          <p className="text-base md:text-lg font-semibold text-secondary-color tracking-tight">
            {subheadline}
          </p>
          <p className="text-white/55 text-base leading-relaxed max-w-2xl mt-2">
            {description}
          </p>
          <div>
            {features.map((feature, i) => (
              <FeatureRow key={i} feature={feature} dark />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-secondary-color text-primary-color text-sm font-bold hover:bg-secondary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_-4px_rgba(195,240,44,0.35)]"
            >
              {cta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-white/70 select-all">
              <span className="text-secondary-color">$</span>
              <span>npm install @safulpay/node</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip — spans full width */}
      <div
        ref={statsRef}
        className="relative mt-16 md:mt-24 max-w-6xl mx-auto w-full"
      >
        <StatsRow stats={stats} dark />
      </div>
    </section>
  );
}

export default DeveloperSection;
