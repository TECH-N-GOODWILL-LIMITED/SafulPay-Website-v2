"use client";

import Image from "next/image";
import { useRef } from "react";
import { agencyData } from "@/data/platformContent";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import { SectionBadge } from "@/components/platform/SectionBadge";
import { FeatureRow } from "@/components/platform/FeatureRow";
import mockupImage from "@/assets/images/mockups/mockup_agency_app.png";

// Asymmetric watermark positions and sizing for the 4 stat values
const WATERMARKS = [
  {
    wrapper: "top-[2%] left-[4%] rotate-[-4deg] text-right",
    value: "text-[clamp(60px,9vw,140px)]",
  },
  {
    wrapper: "bottom-[8%] left-[14%] rotate-[3deg]",
    value: "text-[clamp(48px,7vw,110px)]",
  },
  {
    wrapper: "bottom-[8%] right-[2%] rotate-[-2deg] text-right",
    value: "text-[clamp(54px,8vw,120px)]",
  },
  {
    wrapper: "top-[26%] left-[38%] rotate-[5deg]",
    value: "text-[clamp(80px,10vw,160px)]",
  },
];

function AgencySection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const { badge, headline, subheadline, description, features, stats, cta } =
    agencyData;

  useSlideFadeIn({
    containerRef: contentRef,
    fromX: -40,
    fromY: 0,
    stagger: 0.06,
    start: "top 75%",
  });

  useScaleFadeIn({
    containerRef: visualRef,
    fromScale: 0.94,
    start: "top 80%",
  });

  return (
    <section
      id="agency"
      role="region"
      aria-labelledby="agency-heading"
      className="relative w-full overflow-hidden bg-linear-to-br from-secondary-color/10 via-white to-primary-shade-30"
      data-section
    >
      {/* ── Scattered watermark stats (z-10, above mask) ────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        {stats.map((stat, i) => (
          <div key={i} className={`absolute ${WATERMARKS[i].wrapper}`}>
            <span
              className={`block font-black tracking-tighter text-primary-color/8 leading-none ${WATERMARKS[i].value}`}
            >
              {stat.value}
            </span>
            <span className="block mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary-color/40">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Image bleeding from the right (z-1, lowest) ─────────── */}
      <div
        ref={visualRef}
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[65%] max-w-[840px] pointer-events-none hidden lg:block z-1"
      >
        <Image
          src={mockupImage}
          alt="SafulPay agency app — analytics, commission tracking and wallet management screens"
          priority
          sizes="55vw"
          className="w-full h-auto drop-shadow-2xl opacity-20"
        />
      </div>

      {/* ── Foreground content (z-20, top) ──────────────────────── */}
      <div className="section relative items-start py-24 md:py-32 px-6 md:px-10 z-20">
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col gap-7 w-full lg:w-[68%] lg:max-w-3xl text-left"
        >
          <SectionBadge label={badge} />

          {/* Massive headline */}
          <h2
            id="agency-heading"
            className="text-[clamp(40px,7.5vw,84px)] font-black leading-[0.95] tracking-[-0.03em] text-text-color"
          >
            {headline}
          </h2>

          <p className="text-lg md:text-xl font-semibold text-primary-color tracking-tight">
            {subheadline}
          </p>

          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            {description}
          </p>

          {/* 2x2 compact feature grid — spans full content width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-2">
            {features.map((feature, i) => (
              <FeatureRow key={i} feature={feature} />
            ))}
          </div>

          {/* CTA + inline stats strip */}
          <div className="flex flex-wrap items-center gap-6 mt-2">
            <a
              href={cta.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-color text-white text-sm font-semibold hover:bg-primary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(58,86,70,0.45)]"
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

            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-primary-color">
                {stats[0].value}
              </span>
              <span className="text-zinc-500">
                {stats[0].label.toLowerCase()} already
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgencySection;
