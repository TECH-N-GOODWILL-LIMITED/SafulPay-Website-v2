"use client";

import { useRef } from "react";
import type { CompanyPageIntro } from "@/data/companyPages";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import SectionBadge from "@/components/ui/SectionBadge";

/**
 * Shared header for the Company section pages, so Security, Trusted partners
 * and Regulatory open the same way the audience surfaces do.
 */
function CompanyHero({ intro }: { intro: CompanyPageIntro }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useHeaderAnimation({ containerRef: ref });

  return (
    <section className="w-full bg-primary-color text-white">
      <div
        ref={ref}
        className="section px-5 pt-40 pb-20 max-md:pt-32 gap-6 text-left items-start"
      >
        <SectionBadge label={intro.eyebrow} dark />
        <h1 className="animateheader text-[clamp(32px,6vw,64px)] font-bold tracking-[-2px] leading-[1.05] max-w-4xl">
          {intro.title}
        </h1>
        <p className="text-[clamp(16px,2.2vw,22px)] font-extralight max-w-2xl text-white/85">
          {intro.lede}
        </p>
      </div>
    </section>
  );
}

export default CompanyHero;
