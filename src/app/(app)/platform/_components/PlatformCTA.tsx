"use client";

import { useRef } from "react";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

const ctaLinks = [
  {
    label: "Apply as Agent",
    href: "mailto:agents@safulpay.com",
    variant: "primary" as const,
  },
  {
    label: "Become a Merchant",
    href: "mailto:merchants@safulpay.com",
    variant: "outline" as const,
  },
  {
    label: "Developer Docs",
    href: "https://docs.safulpay.com",
    variant: "ghost" as const,
    external: true,
  },
];

function PlatformCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useSlideFadeIn({
    containerRef: ctaRef,
    fromX: 0,
    fromY: 40,
    stagger: 0.1,
    start: "top 85%",
  });

  return (
    <section
      role="region"
      aria-label="Get started with SafulPay"
      className="section py-20 md:py-28"
      data-section
    >
      <div
        ref={ctaRef}
        className="w-full rounded-4xl bg-primary-color overflow-hidden relative px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-8"
      >
        {/* Dot grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[-20%] right-[-8%] w-md h-112 rounded-full bg-secondary-color/12 blur-3xl" />
          <div className="absolute bottom-[-15%] left-[-4%] w-80 h-80 rounded-full bg-secondary-color/8 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-center gap-4 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary-color/20 text-secondary-color border border-secondary-color/20">
            <span
              className="relative flex h-1.5 w-1.5 shrink-0"
              aria-hidden="true"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-color opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary-color" />
            </span>
            Get Started Today
          </span>

          <h2 className="primary-heading text-white">
            Ready to build with SafulPay?
          </h2>

          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            Join thousands of agents, merchants, and developers already using
            SafulPay's infrastructure to power financial services across Sierra
            Leone.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="relative flex flex-wrap justify-center gap-3">
          {ctaLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold active:scale-[0.98] transition-all duration-200 ${
                link.variant === "primary"
                  ? "bg-secondary-color text-primary-color hover:bg-secondary-color/90 shadow-[0_8px_28px_-6px_rgba(195,240,44,0.5)]"
                  : link.variant === "outline"
                    ? "border border-white/20 text-white hover:bg-white/8 hover:border-white/30"
                    : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
              {link.variant === "primary" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Trust line */}
        <div className="relative flex flex-col items-center gap-3">
          <div className="w-16 h-px bg-white/15" />
          <p className="text-white/30 text-xs font-medium tracking-wide">
            Licensed and regulated by the Bank of Sierra Leone
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlatformCTA;
