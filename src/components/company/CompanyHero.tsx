"use client";

import { useRef } from "react";
import type { CompanyPageIntro } from "@/data/companyPages";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import Aurora from "@/components/ui/Aurora";

/**
 * Shared header for the Company section pages, so Security, Trusted partners
 * and Regulatory open the same way the audience surfaces do: a contained dark
 * panel on the white page.
 */
function CompanyHero({ intro }: { intro: CompanyPageIntro }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useHeaderAnimation({ containerRef: ref, start: "top 95%" });

  return (
    <section className="w-full bg-background px-5 pt-28 max-md:pt-24 pb-16">
      <div className="relative max-w-360 mx-auto rounded-[36px] max-md:rounded-[26px] overflow-hidden bg-[#0d1613] text-white isolate">
        <Aurora />

        <div
          ref={ref}
          className="relative z-10 px-14 py-20 max-lg:px-9 max-md:px-6 max-md:py-14 flex flex-col gap-6 text-left items-start"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase glass text-secondary-color">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-color shadow-[0_0_10px_2px_rgba(195,240,44,0.7)]" />
            {intro.eyebrow}
          </span>

          <h1 className="animateheader text-[clamp(32px,5.2vw,64px)] font-bold tracking-[-0.04em] leading-[1.02] max-w-4xl">
            {intro.title}
          </h1>

          <p className="text-[clamp(16px,2vw,21px)] font-extralight leading-relaxed max-w-2xl text-white/70">
            {intro.lede}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyHero;
