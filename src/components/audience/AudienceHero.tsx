"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AudienceSurface } from "@/data/audiences";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import Aurora from "@/components/ui/Aurora";

/**
 * Block 1 of the shared template: the one-line promise for this audience —
 * the job it does, not the mission (guide §4).
 *
 * The promise is split on `accentPhrase` so the phrase that carries the pitch
 * gets the gradient treatment while the rest stays plain white.
 */
function AudienceHero({ surface }: { surface: AudienceSurface }) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  useHeaderAnimation({ containerRef: heroRef, start: "top 95%" });

  const { eyebrow, promise, accentPhrase, lede, definition, proof, cta, secondaryCta } =
    surface;

  const accentAt = promise.indexOf(accentPhrase);
  const before = accentAt >= 0 ? promise.slice(0, accentAt) : promise;
  const after =
    accentAt >= 0 ? promise.slice(accentAt + accentPhrase.length) : "";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0b1310] text-white isolate"
      aria-labelledby={`${surface.id}-promise`}
    >
      <Aurora />

      <div
        ref={heroRef}
        className="section relative z-10 px-5 pt-44 pb-28 max-md:pt-36 max-md:pb-20 gap-7 text-left items-start"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase glass text-secondary-color">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-color shadow-[0_0_10px_2px_rgba(195,240,44,0.7)]" />
          {eyebrow}
        </span>

        <h1
          id={`${surface.id}-promise`}
          className="animateheader text-[clamp(38px,7.2vw,86px)] font-bold tracking-[-0.04em] leading-[0.98] max-w-5xl"
        >
          {before}
          {accentAt >= 0 && (
            <span className="text-gradient-lime">{accentPhrase}</span>
          )}
          {after}
        </h1>

        <p className="text-[clamp(16px,2.1vw,22px)] font-extralight leading-relaxed max-w-2xl text-white/70">
          {lede}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {proof.map((item) => (
            <span
              key={item}
              className="glass glass-hover px-4 py-2 rounded-full text-xs font-medium text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-3">
          {cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-lime px-8 py-4 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              {cta.label}
            </a>
          ) : (
            <Link
              href={cta.href}
              className="glow-lime px-8 py-4 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
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
                className="glass glass-hover px-8 py-4 rounded-2xl font-semibold text-white"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                href={secondaryCta.href}
                className="glass glass-hover px-8 py-4 rounded-2xl font-semibold text-white"
              >
                {secondaryCta.label}
              </Link>
            ))}
        </div>

        <p className="mt-6 text-sm font-light max-w-2xl text-white/45 border-l border-secondary-color/40 pl-4">
          {definition}
        </p>
      </div>

      <div className="rule-fade relative z-10" />
    </section>
  );
}

export default AudienceHero;
