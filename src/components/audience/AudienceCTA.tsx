"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AudienceCta } from "@/data/audiences";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import Aurora from "@/components/ui/Aurora";

/**
 * Block 6 of the shared template: a single primary call to action (guide §4).
 * One action only — competing CTAs are what the focus principle rules out.
 *
 * This is the page's second and last dark panel, closing the surface the same
 * way the hero opened it.
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
  useScaleFadeIn({ containerRef: ref, fromScale: 0.97 });

  const accentAt = promise.indexOf(accentPhrase);
  const before = accentAt >= 0 ? promise.slice(0, accentAt) : promise;
  const after =
    accentAt >= 0 ? promise.slice(accentAt + accentPhrase.length) : "";

  return (
    <section
      id="get-started"
      className="w-full bg-background px-5 pt-6 pb-24 max-md:pb-16"
      aria-labelledby={`${audienceId}-cta-heading`}
      data-section
    >
      <div className="relative max-w-360 mx-auto rounded-[36px] max-md:rounded-[26px] overflow-hidden bg-[#0d1613] text-white isolate">
        <Aurora variant="lime" />

        <div
          ref={ref}
          className="relative z-10 px-14 py-24 max-lg:px-9 max-md:px-6 max-md:py-16 flex flex-col items-center gap-8 text-center"
        >
          <h2
            id={`${audienceId}-cta-heading`}
            className="text-[clamp(28px,4.4vw,52px)] font-bold tracking-[-0.035em] leading-[1.05] max-w-3xl"
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
              className="glow-lime px-9 py-4 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              {cta.label}
            </a>
          ) : (
            <Link
              href={cta.href}
              className="glow-lime px-9 py-4 rounded-2xl bg-secondary-color text-primary-color font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
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
