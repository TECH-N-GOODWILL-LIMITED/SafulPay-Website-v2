"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AudienceCta } from "@/data/audiences";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import Aurora from "@/components/ui/Aurora";

/**
 * Block 6 of the shared template: a single primary call to action (guide §4).
 * One action only — competing CTAs are what the focus principle rules out.
 */
function AudienceCTA({
  cta,
  promise,
  accentPhrase,
  audienceId,
}: {
  cta: AudienceCta;
  promise: string;
  accentPhrase: string;
  audienceId: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useScaleFadeIn({ containerRef: ref, fromScale: 0.96 });

  const accentAt = promise.indexOf(accentPhrase);
  const before = accentAt >= 0 ? promise.slice(0, accentAt) : promise;
  const after =
    accentAt >= 0 ? promise.slice(accentAt + accentPhrase.length) : "";

  return (
    <section
      id="get-started"
      className="relative w-full bg-[#0b1310] text-white overflow-hidden isolate"
      aria-labelledby={`${audienceId}-cta-heading`}
      data-section
    >
      <Aurora variant="lime" />

      <div className="section relative z-10 px-5 py-32 max-md:py-24">
        <div
          ref={ref}
          className="w-full max-w-4xl mx-auto rounded-[32px] glass px-12 py-16 max-md:px-7 max-md:py-12 flex flex-col items-center gap-8 text-center"
        >
          <h2
            id={`${audienceId}-cta-heading`}
            className="text-[clamp(28px,4.6vw,52px)] font-bold tracking-[-0.035em] leading-[1.05] max-w-3xl"
          >
            {before}
            {accentAt >= 0 && (
              <span className="text-gradient-lime">{accentPhrase}</span>
            )}
            {after}
          </h2>

          {cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-lime px-9 py-4.5 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              {cta.label}
            </a>
          ) : (
            <Link
              href={cta.href}
              className="glow-lime px-9 py-4.5 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default AudienceCTA;
