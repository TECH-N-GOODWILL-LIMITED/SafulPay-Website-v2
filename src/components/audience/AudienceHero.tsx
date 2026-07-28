"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AudienceSurface } from "@/data/audiences";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import SectionBadge from "@/components/ui/SectionBadge";

/**
 * Block 1 of the shared template: the one-line promise for this audience —
 * the job it does, not the mission (guide §4).
 */
function AudienceHero({ surface }: { surface: AudienceSurface }) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  useHeaderAnimation({ containerRef: heroRef });

  const { eyebrow, promise, lede, definition, cta, secondaryCta } = surface;

  return (
    <section
      className="w-full bg-primary-color text-white"
      aria-labelledby={`${surface.id}-promise`}
    >
      <div
        ref={heroRef}
        className="section px-5 pt-40 pb-20 max-md:pt-32 gap-6 text-left items-start"
      >
        <SectionBadge label={eyebrow} dark />

        <h1
          id={`${surface.id}-promise`}
          className="animateheader text-[clamp(32px,6vw,68px)] font-bold tracking-[-2px] leading-[1.05] max-w-4xl"
        >
          {promise}
        </h1>

        <p className="text-[clamp(16px,2.2vw,22px)] font-extralight max-w-2xl text-white/85">
          {lede}
        </p>

        <p className="text-sm font-light max-w-2xl text-white/60 border-l-2 border-secondary-color pl-4">
          {definition}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          {cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-[10px] bg-secondary-color text-primary-color font-semibold hover:brightness-95 transition-all"
            >
              {cta.label}
            </a>
          ) : (
            <Link
              href={cta.href}
              className="px-7 py-3.5 rounded-[10px] bg-secondary-color text-primary-color font-semibold hover:brightness-95 transition-all"
            >
              {cta.label}
            </Link>
          )}

          {secondaryCta &&
            (secondaryCta.external ? (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-[10px] border border-white/40 font-semibold hover:border-secondary-color hover:text-secondary-color transition-all"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                href={secondaryCta.href}
                className="px-7 py-3.5 rounded-[10px] border border-white/40 font-semibold hover:border-secondary-color hover:text-secondary-color transition-all"
              >
                {secondaryCta.label}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceHero;
