"use client";

import Image from "next/image";
import { useRef } from "react";
import { companyData } from "@/data/companyData";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

/**
 * Block 5 of the shared template: the trust & regulatory line (guide §4).
 *
 * The Bank of Sierra Leone licence is stated plainly here, as the guide's
 * section 6 requires — no sandbox qualifier.
 */
function TrustBar({
  trust,
  audienceId,
}: {
  trust: string[];
  audienceId: string;
}) {
  const ref = useRef<HTMLUListElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useSlideFadeIn({ containerRef: badgeRef, fromX: 0, fromY: 36, stagger: 0.1 });
  useSlideFadeIn({
    containerRef: ref,
    targetSelector: ".trust-item",
    fromX: 0,
    fromY: 26,
    stagger: 0.07,
  });

  const { regulated } = companyData;

  return (
    <section
      id="trust"
      className="relative w-full bg-[#0b1310] text-white overflow-hidden"
      aria-labelledby={`${audienceId}-trust-heading`}
      data-section
    >
      <div className="rule-fade" />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(103,150,123,0.30), transparent 72%)",
        }}
      />

      <div className="section relative z-10 px-5 py-24 max-md:py-16 gap-10 items-center text-center">
        <div ref={badgeRef} className="flex flex-col items-center gap-5">
          <span className="flex-center w-16 h-16 rounded-2xl glass">
            {/* The bank mark is a dark glyph — inverted so it reads on glass. */}
            <Image
              src={regulated.icon}
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              unoptimized
              className="w-8 h-8 grayscale invert"
            />
          </span>
          <h2
            id={`${audienceId}-trust-heading`}
            className="text-[clamp(20px,3vw,32px)] font-semibold tracking-[-0.02em] text-white max-w-2xl"
          >
            {regulated.text}
          </h2>
        </div>

        <ul
          ref={ref}
          className="w-full flex flex-wrap items-center justify-center gap-3"
        >
          {trust.map((item) => (
            <li
              key={item}
              className="trust-item glass glass-hover px-5 py-3 rounded-full text-sm font-light text-white/75"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
