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
        className="w-full rounded-[2rem] bg-primary-color overflow-hidden relative px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-8"
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full bg-secondary-color/8 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-5%] w-72 h-72 rounded-full bg-secondary-color/5 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-center gap-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary-color/20 text-secondary-color border border-secondary-color/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-secondary-color"
              aria-hidden="true"
            />
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
                  ? "bg-secondary-color text-primary-color hover:bg-secondary-color/90 shadow-[0_4px_20px_-4px_rgba(195,240,44,0.4)]"
                  : link.variant === "outline"
                    ? "border border-white/20 text-white hover:bg-white/8 hover:border-white/30"
                    : "text-white/60 hover:text-white"
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
        <p className="relative text-white/30 text-xs font-medium tracking-wide">
          Licensed and regulated by the Bank of Sierra Leone
        </p>
      </div>
    </section>
  );
}

export default PlatformCTA;
