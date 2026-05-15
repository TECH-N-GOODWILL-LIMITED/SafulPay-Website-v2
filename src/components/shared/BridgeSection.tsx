"use client";

import Image from "next/image";
import { useRef } from "react";
import { bridgeData } from "@/data/appContent";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import safulpayIconWhite from "@/assets/images/brand/safulpay-icon-white.svg";

interface PillColumnProps {
  title: string;
  items: string[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  dotClass: string;
  alignClass: string;
}

function PillColumn({
  title,
  items,
  containerRef,
  dotClass,
  alignClass,
}: PillColumnProps) {
  return (
    <div className={`flex flex-col gap-5 ${alignClass} lg:h-full`}>
      <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-primary-color/80">
        {title}
      </span>
      <div
        ref={containerRef}
        className={`flex flex-wrap gap-2.5 my-auto ${alignClass === "items-end" ? "justify-end" : alignClass === "items-start" ? "justify-start" : "justify-center"}`}
      >
        {items.map((label) => (
          <span
            key={label}
            className="bridge-pill inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06)] text-sm font-semibold text-text-color whitespace-nowrap"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`}
              aria-hidden="true"
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function BeatingLogo() {
  return (
    <div
      className="relative flex items-center justify-center w-46 h-46 md:w-60 md:h-60 shrink-0"
      aria-hidden="true"
    >
      {/* Subtle border-only ping rings — slow & easy on the eye */}
      <span className="absolute w-24 h-24 md:w-30 md:h-30 rounded-full border border-primary-color/30 animate-ping [animation-duration:3.5s]" />
      <span className="absolute w-24 h-24 md:w-30 md:h-30 rounded-full border border-primary-color/30 animate-ping [animation-duration:3.5s] [animation-delay:1.2s]" />
      <span className="absolute w-24 h-24 md:w-30 md:h-30 rounded-full border border-primary-color/30 animate-ping [animation-duration:3.5s] [animation-delay:2.4s]" />

      {/* Logo disc */}
      <div className="relative z-10 w-40 h-40 md:w-50 md:h-50 rounded-full bg-primary-color flex items-center justify-center shadow-[0_12px_40px_-10px_rgba(58,86,70,0.55)]">
        <Image
          src={safulpayIconWhite}
          alt=""
          width={48}
          height={48}
          className="w-24 h-24 md:w-32 md:h-32"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function BridgeSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const sourcesRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const { tag, title, description, sources, destinations } = bridgeData;

  useSlideFadeIn({
    containerRef: headerRef,
    targetSelector: "*",
    fromX: 0,
    fromY: 30,
    stagger: 0.1,
    start: "top 85%",
    each: true,
  });

  useScaleFadeIn({
    containerRef: cardRef,
    fromScale: 0.96,
    start: "top 80%",
  });

  useSlideFadeIn({
    containerRef: sourcesRef,
    targetSelector: ".bridge-pill",
    fromX: -40,
    fromY: 0,
    stagger: 0.05,
    start: "top 80%",
    each: true,
  });

  useSlideFadeIn({
    containerRef: destRef,
    targetSelector: ".bridge-pill",
    fromX: 40,
    fromY: 0,
    stagger: 0.05,
    start: "top 80%",
    each: true,
  });

  useScaleFadeIn({
    containerRef: logoRef,
    fromScale: 0.6,
    start: "top 80%",
  });

  return (
    <section
      id="bridge"
      role="region"
      aria-labelledby="bridge-heading"
      className="section py-2.5 px-10"
      data-section
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center gap-4 max-w-250 mx-auto"
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-color/70">
          {tag}
        </span>
        <h2
          id="bridge-heading"
          className="primary-heading leading-tight tracking-tight text-text-color"
        >
          {title}
        </h2>
        <p className="p-2.5">{description}</p>
      </div>

      {/* Bridge card */}
      <div
        ref={cardRef}
        className="relative mt-12 md:mt-16 max-w-7xl w-full bg-primary-shade-10 rounded-[50px] p-8 md:p-12 lg:p-14 border border-zinc-100 shadow-[0_24px_80px_-24px_rgba(58,86,70,0.18)] overflow-hidden"
      >
        {/* Animated flowing dashes — desktop only */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center h-[1.5px] pointer-events-none"
        >
          <div className="flex-1 h-full bridge-flow bridge-flow-left" />
          <div className="w-52 md:w-60" />
          <div className="flex-1 h-full bridge-flow bridge-flow-right" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-6">
          {/* Sources */}
          <PillColumn
            title={sources.title}
            items={sources.items}
            containerRef={sourcesRef}
            dotClass="bg-primary-color"
            alignClass="items-center lg:items-end"
          />

          {/* Center beating logo */}
          <div ref={logoRef} className="flex justify-center">
            <BeatingLogo />
          </div>

          {/* Destinations */}
          <PillColumn
            title={destinations.title}
            items={destinations.items}
            containerRef={destRef}
            dotClass="bg-secondary-color"
            alignClass="items-center lg:items-start"
          />
        </div>
      </div>
    </section>
  );
}

export default BridgeSection;
