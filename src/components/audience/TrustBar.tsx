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
  useSlideFadeIn({
    containerRef: ref,
    targetSelector: ".trust-item",
    fromX: 0,
    fromY: 40,
    stagger: 0.08,
  });

  const { regulated } = companyData;

  return (
    <section
      id="trust"
      className="w-full bg-primary-color text-white"
      aria-labelledby={`${audienceId}-trust-heading`}
      data-section
    >
      <div className="section px-5 py-20 max-md:py-14 gap-8 text-left items-start">
        <div className="flex items-center gap-3">
          <Image
            src={regulated.icon}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            unoptimized
            className="w-8 h-8"
          />
          <h2
            id={`${audienceId}-trust-heading`}
            className="secondary-heading text-secondary-color"
          >
            {regulated.text}
          </h2>
        </div>

        <ul
          ref={ref}
          className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-x-10 gap-y-3"
        >
          {trust.map((item) => (
            <li
              key={item}
              className="trust-item flex items-start gap-3 small-text text-white/85"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary-color shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
