"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { audienceDoors } from "@/data/audiences";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import mockupImage from "@/assets/images/mockups/mockup-new-safulpay-iphone13.webp";

/**
 * The four audience doors on the home page (guide §2).
 *
 * If a visitor cannot instantly tell which door is theirs, the navigation has
 * failed — so each door leads with the plain first-person line that separates
 * it from the others, Business and Agency most of all.
 */
function SolutionsPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useHeaderAnimation({ containerRef: headerRef, start: "top 78%" });

  useScaleFadeIn({
    containerRef: imageRef,
    fromScale: 0.95,
    start: "top 80%",
  });

  useSlideFadeIn({
    containerRef: listRef,
    targetSelector: ".solution-item",
    fromX: 40,
    fromY: 0,
    stagger: 0.12,
    start: "top 78%",
  });

  return (
    <section
      id="audiences"
      role="region"
      aria-labelledby="solutions-heading"
      className="section gap-12.5 max-md:gap-7.5 scroll-mt-32"
      data-section
    >
      <div
        ref={headerRef}
        className="flex flex-col gap-5 py-2.5 max-w-250 max-sm:gap-2.5 w-full"
      >
        <h2
          id="solutions-heading"
          className="animateheader p-2.5 primary-heading"
        >
          Find your&nbsp;
          <span className="text-secondary-color">door</span>
        </h2>
        <p className="p-2.5 px-12.5 max-md:mx-0 max-w-5xl">
          SafulPay serves four groups of people. Pick the one that sounds like
          you, and see exactly what you can do today.
        </p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-2.5">
        <div ref={imageRef} className="flex justify-center lg:justify-start">
          <Image
            src={mockupImage}
            alt="SafulPay app mockup"
            className="max-w-[min(80vw,340px)] lg:max-w-sm drop-shadow-[0_24px_48px_rgba(58,86,70,0.18)]"
            aria-hidden="true"
          />
        </div>

        <div ref={listRef} className="flex flex-col mx-4.5">
          {audienceDoors.map((door, i) => (
            <Link
              key={door.id}
              href={door.path}
              className={`solution-item group flex items-start justify-between gap-6 py-6 transition-colors duration-200 hover:bg-primary-shade-5 -mx-4 px-4 rounded-2xl ${
                i < audienceDoors.length - 1 ? "border-b border-zinc-100" : ""
              }`}
            >
              <div className="flex flex-col gap-2 text-left">
                <span className="w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary-color text-primary-color border border-primary-shade-10">
                  {door.label}
                </span>

                <p className="secondary-heading text-left group-hover:text-primary-color transition-colors duration-150">
                  {door.tagline}
                </p>
              </div>

              <div className="shrink-0 w-9 h-9 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:border-primary-color group-hover:text-primary-color group-hover:bg-primary-shade-5 transition-all duration-200 mt-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-150"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsPreview;
