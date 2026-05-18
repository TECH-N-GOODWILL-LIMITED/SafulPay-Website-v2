"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import mockupImage from "@/assets/images/mockups/mockup-new-safulpay-iphone13.png";

const solutions = [
  {
    id: "agent",
    href: "/platform#agency",
    label: "Agent",
    tagline: "Earn from every transaction.",
    description:
      "Offer cash-in, cash-out, bill payments and remittance pickup to your community. Earn transparent commission on every transaction.",
  },
  {
    id: "merchant",
    href: "/platform#merchant",
    label: "Merchant",
    tagline: "Get paid. Pay people.",
    description:
      "In-app checkout, QR, payment links, and bulk payouts to staff, suppliers and beneficiaries.",
  },
  {
    id: "developer",
    href: "/platform#developer",
    label: "Developer",
    tagline: "Embed money rails.",
    description:
      "REST + websocket APIs for wallets, bills and remittance flows. Sandbox today.",
  },
];

function SolutionsPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  useSlideFadeIn({
    containerRef: ctaRef,
    fromX: 0,
    fromY: 20,
    start: "top 92%",
  });

  return (
    <section
      role="region"
      aria-labelledby="solutions-heading"
      className="section gap-12.5 max-md:gap-7.5"
      data-section
    >
      {/* ── Header ── matches the pattern of Features / Security headings */}
      <div
        ref={headerRef}
        className="flex flex-col gap-5 py-2.5 max-w-250 max-sm:gap-2.5 w-full"
      >
        <h2
          id="solutions-heading"
          className="animateheader p-2.5 primary-heading"
        >
          Built for&nbsp;
          <span className="text-secondary-color">Everyone</span>&nbsp; Moving
          Money
        </h2>
        <p className="p-2.5 px-12.5 max-md:mx-0 max-w-5xl">
          Whether you&apos;re running an agency, accepting business payments, or
          building fintech. There&apos;s a SafulPay surface for that.
        </p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-2.5">
        {/* Left: single mockup image */}
        <div ref={imageRef} className="flex justify-center lg:justify-start">
          <Image
            src={mockupImage}
            alt="SafulPay app mockup"
            className="max-w-[min(80vw,340px)] lg:max-w-sm drop-shadow-[0_24px_48px_rgba(58,86,70,0.18)]"
            aria-hidden="true"
          />
        </div>

        {/* Right: stacked solution list */}
        <div ref={listRef} className="flex flex-col mx-4.5">
          {solutions.map((s, i) => (
            <Link
              key={s.id}
              href={s.href}
              className={`solution-item group flex items-start justify-between gap-6 py-7 transition-colors duration-200 hover:bg-primary-shade-5 -mx-4 px-4 rounded-2xl ${
                i < solutions.length - 1 ? "border-b border-zinc-100" : ""
              }`}
            >
              <div className="flex flex-col gap-2 text-left">
                {/* Label pill */}
                <span className="w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary-color text-primary-color border border-primary-shade-10">
                  {s.label}
                </span>

                {/* Tagline */}
                <p className="secondary-heading text-left group-hover:text-primary-color transition-colors duration-150">
                  {s.tagline}
                </p>

                {/* Description */}
                <p className="small-text text-left text-zinc-500 max-w-sm">
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
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
          <div ref={ctaRef} className="px-2.5 mt-10 self-start">
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-color text-white text-sm font-semibold hover:bg-primary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(58,86,70,0.3)]"
            >
              Explore all solutions
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-all"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsPreview;
