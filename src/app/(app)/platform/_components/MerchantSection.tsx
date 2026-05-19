"use client";

import Image from "next/image";
import { useRef } from "react";
import { merchantData } from "@/data/platformContent";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import { FeatureRow } from "@/app/(app)/platform/_components/FeatureRow";
import { StatsRow } from "@/app/(app)/platform/_components/StatsRow";
import mockupImage from "@/assets/images/mockups/mockup_merchant_app.webp";

function MerchantSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { badge, headline, subheadline, description, features, stats, cta } =
    merchantData;

  useSlideFadeIn({
    containerRef: headerRef,
    targetSelector: "*",
    fromX: 0,
    fromY: 30,
    stagger: 0.1,
    start: "top 85%",
    each: true,
  });

  useScaleFadeIn({
    containerRef: visualRef,
    fromScale: 0.96,
    start: "top 80%",
  });

  useSlideFadeIn({
    containerRef: bodyRef,
    targetSelector: "*",
    fromX: 0,
    fromY: 30,
    stagger: 0.08,
    start: "top 80%",
    each: true,
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
      className="section py-24 md:py-36 px-6 md:px-10"
      data-section
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-color/70">
          {badge}
        </span>
        <h2
          id="merchant-heading"
          className="text-[clamp(40px,7.5vw,84px)] font-black leading-[0.95] tracking-tight text-text-color"
        >
          {headline}
        </h2>
        <p className="text-base md:text-lg font-semibold text-primary-color tracking-tight">
          {subheadline}
        </p>
      </div>

      {/* Hero mockup */}
      <div ref={visualRef} className="relative w-full mt-14 md:mt-20">
        {/* Soft secondary-color glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[75%] h-[60%] rounded-full bg-secondary-color/25 blur-[120px]" />
        </div>

        {/* Mockup card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          <Image
            src={mockupImage}
            alt="SafulPay merchant app — payment dashboard and transaction views"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Body: description + features */}
      <div
        ref={bodyRef}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 mt-16 md:mt-24 max-w-6xl mx-auto w-full text-left"
      >
        <div className="flex flex-col items-start justify-between gap-20">
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <a
            href={cta.href}
            className="self-start lg:self-auto inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-color text-white text-sm font-semibold hover:bg-primary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(58,86,70,0.45)] whitespace-nowrap"
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
          {features.map((feature, i) => (
            <FeatureRow key={i} feature={feature} />
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div ref={statsRef} className="mt-16 md:mt-24 max-w-6xl mx-auto w-full">
        <StatsRow stats={stats} />
      </div>
    </section>
  );
}

export default MerchantSection;
