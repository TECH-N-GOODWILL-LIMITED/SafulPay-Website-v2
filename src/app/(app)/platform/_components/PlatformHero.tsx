"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import mockupImage from "@/assets/images/mockups/mockup-home-page.png";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import {
  platformHeroData,
  type PlatformPersonaId,
} from "@/data/platformContent";

function renderHeadline(headline: string, accentPhrase: string) {
  const idx = headline.indexOf(accentPhrase);
  if (idx === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="text-secondary-color">{accentPhrase}</span>
      {headline.slice(idx + accentPhrase.length)}
    </>
  );
}

function PlatformHero() {
  const { personas, defaultPersona, stats } = platformHeroData;

  // O(1) lookup map from persona id to persona record
  const personaMap = useMemo(
    () => Object.fromEntries(personas.map((p) => [p.id, p])),
    [personas],
  ) as Record<PlatformPersonaId, (typeof personas)[number]>;

  const [activePersona, setActivePersona] =
    useState<PlatformPersonaId>(defaultPersona);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const heroLeftRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const currentTweenRef = useRef<gsap.core.Tween | null>(null);
  const isAnimatingRef = useRef(false);

  useSlideFadeIn({
    containerRef: heroLeftRef,
    fromX: 0,
    fromY: 40,
    start: "top 90%",
  });

  useSlideFadeIn({
    containerRef: mockupRef,
    fromX: 60,
    fromY: 0,
    start: "top 90%",
  });

  useEffect(() => {
    return () => {
      currentTweenRef.current?.kill();
    };
  }, []);

  const handlePersonaChange = useCallback(
    (id: PlatformPersonaId) => {
      if (
        id === activePersona ||
        !contentInnerRef.current ||
        isAnimatingRef.current
      )
        return;

      isAnimatingRef.current = true;

      currentTweenRef.current = gsap.to(contentInnerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.14,
        ease: "power2.in",
        onComplete: () => {
          setActivePersona(id);

          if (!contentInnerRef.current) {
            isAnimatingRef.current = false;
            return;
          }

          currentTweenRef.current = gsap.fromTo(
            contentInnerRef.current,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.24,
              ease: "power2.out",
              onComplete: () => {
                isAnimatingRef.current = false;
              },
            },
          );
        },
      });
    },
    [activePersona],
  );

  const persona = personaMap[activePersona];

  return (
    <section
      id="platform-hero"
      role="region"
      aria-labelledby="platform-heading"
      className="relative section pb-16 pt-40 text-left px-6 m:px-10 flex-center min-h-screen"
      data-section
    >
      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-primary-color/60 to-transparent pointer-events-none"
      />
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 lg:gap-15 items-center">
        {/* Left: content */}
        <div ref={heroLeftRef} className="flex flex-col gap-7">
          {/* Persona tabs */}
          <div className="relative w-fit">
            {/* Hand-sketch annotation */}
            <div
              className="absolute -top-8 right-3 flex items-end gap-1 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                className="text-white/30 shrink-0"
              >
                <path
                  d="M 14 2 C 11 9, 7 15, 5 23"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 5 23 L 11 20 M 5 23 L 3 16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[10px] italic text-white/70 font-light mb-2.5 tracking-wide rotate-2 whitespace-nowrap">
                change persona
              </span>
            </div>

            <div
              className="inline-flex rounded-2xl border border-white/15 bg-white/5 p-1"
              role="tablist"
              aria-label="Select your audience"
            >
              {personas.map((p) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={activePersona === p.id}
                  onClick={() => handlePersonaChange(p.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activePersona === p.id
                      ? "bg-secondary-color text-primary-color shadow-[0_2px_14px_-2px_rgba(195,240,44,0.45)]"
                      : "text-offwhite hover:text-white bg-transparent"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Animated content */}
          <div ref={contentInnerRef} className="flex flex-col gap-5">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-secondary-color">
              <span
                className="relative flex h-1.5 w-1.5 shrink-0"
                aria-hidden="true"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-color opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary-color" />
              </span>
              {persona.eyebrow}
            </p>

            <h1
              id="platform-heading"
              className="text-white text-left leading-[1.05] tracking-tight"
            >
              {renderHeadline(persona.headline, persona.accentPhrase)}
            </h1>

            <p className="text-offwhite/80 text-base md:text-lg leading-relaxed max-w-[520px]">
              {persona.lede}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={persona.cta.href}
                {...(persona.cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary-color text-primary-color text-sm font-bold hover:bg-secondary-color/90 active:scale-[0.98] transition-all duration-200"
              >
                {persona.cta.label}
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
              <a
                href={persona.cta2.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white/75 text-sm font-medium hover:bg-white/8 hover:border-white/30 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                {persona.cta2.label}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-secondary-color tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div
          ref={mockupRef}
          className="flex justify-center lg:justify-end relative max-lg:hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-secondary-color/15 blur-3xl" />
          </div>
          <Image
            src={mockupImage}
            alt="SafulPay app preview"
            className="relative max-w-[340px] h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default PlatformHero;
