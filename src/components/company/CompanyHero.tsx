"use client";

import { useRef } from "react";
import type { CompanyPageIntro } from "@/data/companyPages";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import Aurora from "@/components/ui/Aurora";

/**
 * Shared header for the Company section pages, so Security, Trusted partners
 * and Regulatory open the same way the audience surfaces do.
 */
function CompanyHero({ intro }: { intro: CompanyPageIntro }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useHeaderAnimation({ containerRef: ref, start: "top 95%" });

  return (
    <section className="relative w-full overflow-hidden bg-[#0b1310] text-white isolate">
      <Aurora />

      <div
        ref={ref}
        className="section relative z-10 px-5 pt-44 pb-24 max-md:pt-36 max-md:pb-16 gap-6 text-left items-start"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase glass text-secondary-color">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-color shadow-[0_0_10px_2px_rgba(195,240,44,0.7)]" />
          {intro.eyebrow}
        </span>

        <h1 className="animateheader text-[clamp(34px,6.2vw,72px)] font-bold tracking-[-0.04em] leading-[1.0] max-w-4xl">
          {intro.title}
        </h1>

        <p className="text-[clamp(16px,2.1vw,22px)] font-extralight leading-relaxed max-w-2xl text-white/70">
          {intro.lede}
        </p>
      </div>

      <div className="rule-fade relative z-10" />
    </section>
  );
}

export default CompanyHero;
