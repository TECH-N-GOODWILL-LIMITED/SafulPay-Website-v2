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
      className="w-full bg-background px-5 py-6"
      aria-labelledby={`${audienceId}-trust-heading`}
      data-section
    >
      <div className="max-w-360 mx-auto rounded-[36px] max-md:rounded-[26px] wash-mint border border-primary-shade-10 overflow-hidden">
        <div className="px-14 py-16 max-lg:px-9 max-md:px-6 max-md:py-12 flex flex-col items-center gap-8 text-center">
          <div ref={badgeRef} className="flex flex-col items-center gap-4">
            <span className="flex-center w-16 h-16 rounded-2xl bg-white border border-primary-shade-10 shadow-[0_12px_30px_-14px_rgba(58,86,70,0.5)]">
              <Image
                src={regulated.icon}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                unoptimized
                className="w-8 h-8"
              />
            </span>
            <h2
              id={`${audienceId}-trust-heading`}
              className="text-[clamp(20px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary-color max-w-2xl"
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
                className="trust-item px-5 py-2.5 rounded-full bg-white border border-primary-shade-10 text-sm font-light text-text-color/75 shadow-[0_4px_14px_-8px_rgba(58,86,70,0.4)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
