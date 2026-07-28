"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AudienceCta } from "@/data/audiences";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";

/**
 * Block 6 of the shared template: a single primary call to action (guide §4).
 * One action only — competing CTAs are what the focus principle rules out.
 */
function AudienceCTA({
  cta,
  promise,
  audienceId,
}: {
  cta: AudienceCta;
  promise: string;
  audienceId: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useScaleFadeIn({ containerRef: ref });

  return (
    <section
      id="get-started"
      className="w-full bg-background"
      aria-labelledby={`${audienceId}-cta-heading`}
      data-section
    >
      <div
        ref={ref}
        className="section px-5 py-24 max-md:py-16 gap-7 flex-center flex-col text-center"
      >
        <h2
          id={`${audienceId}-cta-heading`}
          className="primary-heading text-primary-color max-w-3xl"
        >
          {promise}
        </h2>

        {cta.external ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-[10px] bg-linear-to-r from-primary-color to-[#67967B] text-white font-semibold hover:brightness-110 transition-all"
          >
            {cta.label}
          </a>
        ) : (
          <Link
            href={cta.href}
            className="px-8 py-4 rounded-[10px] bg-linear-to-r from-primary-color to-[#67967B] text-white font-semibold hover:brightness-110 transition-all"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}

export default AudienceCTA;
