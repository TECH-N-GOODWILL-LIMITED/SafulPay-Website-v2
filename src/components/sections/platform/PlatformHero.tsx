"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import mockupImage from "@/assets/images/mockup-home-page.png";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

const PERSONAS = [
  { id: "user" as const, label: "User" },
  { id: "agent" as const, label: "Agent" },
  { id: "merchant" as const, label: "Merchant" },
  { id: "developer" as const, label: "Developer" },
] as const;

type PersonaId = (typeof PERSONAS)[number]["id"];

interface PersonaContent {
  eyebrow: string;
  headline: string;
  accentPhrase: string;
  lede: string;
  cta: { label: string; href: string; external?: boolean };
  cta2: { label: string; href: string };
}

const CONTENT: Record<PersonaId, PersonaContent> = {
  user: {
    eyebrow: "For You",
    headline: "One app for every way you move money.",
    accentPhrase: "every way",
    lede: "Send to any mobile money or bank, pay EDSA, top up airtime, gift in seconds, and receive money from anywhere in the world.",
    cta: { label: "Get the app", href: "/download" },
    cta2: { label: "See what you can do", href: "/#features" },
  },
  agent: {
    eyebrow: "For Agents",
    headline: "Run an agent business that scales.",
    accentPhrase: "that scales",
    lede: "Offer cash-in, cash-out, bill payments and remittance pickup to your community. Earn transparent commission on every transaction.",
    cta: { label: "Apply as Agent", href: "mailto:agents@safulpay.com" },
    cta2: { label: "See agent tools", href: "#agency" },
  },
  merchant: {
    eyebrow: "For Business",
    headline: "Accept payments. Pay out at scale.",
    accentPhrase: "Pay out",
    lede: "Receive QR, link and in-app payments. Pay salaries and suppliers in bulk. Built for restaurants, retailers, offices and NGOs.",
    cta: {
      label: "Get a business account",
      href: "mailto:merchants@safulpay.com",
    },
    cta2: { label: "Explore merchant tools", href: "#merchant" },
  },
  developer: {
    eyebrow: "For Developers",
    headline: "Money rails for any product.",
    accentPhrase: "any product",
    lede: "A single REST API for mobile money, banks, bills and remittances across Sierra Leone. Sandbox, webhooks, idempotency — built right.",
    cta: {
      label: "Read the docs",
      href: "https://docs.safulpay.com",
      external: true,
    },
    cta2: { label: "Get API keys", href: "#developer" },
  },
};

const STATS = [
  { value: "10K+", label: "Users moving money" },
  { value: "1K+", label: "Agent points" },
  { value: "15+", label: "Network partners" },
  { value: "99.9%", label: "Uptime SLA" },
];

function renderHeadline(headline: string, accentPhrase: string) {
  const idx = headline.indexOf(accentPhrase);
  if (idx === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="text-secondary-color">{accentPhrase}</span>
      {headline.slice(idx + accentPhrase.length)}
    </>
  );
}

function PlatformHero() {
  const [activePersona, setActivePersona] = useState<PersonaId>("agent");
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useSlideFadeIn({
    containerRef: mockupRef,
    fromX: 60,
    fromY: 0,
    start: "top 90%",
  });

  const handlePersonaChange = useCallback(
    (id: PersonaId) => {
      if (id === activePersona || !contentInnerRef.current) return;
      gsap.to(contentInnerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.14,
        ease: "power2.in",
        onComplete: () => {
          setActivePersona(id);
          if (contentInnerRef.current) {
            gsap.fromTo(
              contentInnerRef.current,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" },
            );
          }
        },
      });
    },
    [activePersona],
  );

  const PersonaContent = CONTENT[activePersona];

  return (
    <section
      id="platform-hero"
      role="region"
      aria-labelledby="platform-heading"
      className="section pb-16 pt-40 text-left px-6 m:px-10 flex-center min-h-screen"
      data-section
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 lg:gap-15 items-center">
        {/* Left: content */}
        <div className="flex flex-col gap-7">
          {/* Persona tabs */}
          <div className="relative w-fit">
            {/* Hand-sketch annotation */}
            <div
              className="absolute -top-8 right-3 flex items-end gap-1 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                className="text-white/30 shrink-0"
              >
                <path
                  d="M 14 2 C 11 9, 7 15, 5 23"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 5 23 L 11 20 M 5 23 L 3 16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[10px] italic text-white/70 font-light mb-2.5 tracking-wide rotate-2 whitespace-nowrap">
                change persona
              </span>
            </div>

            <div
              className="inline-flex rounded-2xl border border-white/15 bg-white/5 p-1"
              role="tablist"
              aria-label="Select your audience"
            >
              {PERSONAS.map((persona) => (
                <button
                  key={persona.id}
                  role="tab"
                  aria-selected={activePersona === persona.id}
                  onClick={() => handlePersonaChange(persona.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activePersona === persona.id
                      ? "bg-secondary-color text-primary-color shadow-[0_2px_14px_-2px_rgba(195,240,44,0.45)]"
                      : "text-offwhite hover:text-white bg-transparent"
                  }`}
                >
                  {persona.label}
                </button>
              ))}
            </div>
          </div>

          {/* Animated content */}
          <div ref={contentInnerRef} className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary-color">
              {PersonaContent.eyebrow}
            </p>

            <h1
              id="platform-heading"
              className="text-white text-left leading-[1.05] tracking-tight"
            >
              {renderHeadline(
                PersonaContent.headline,
                PersonaContent.accentPhrase,
              )}
            </h1>

            <p className="text-offwhite/80 text-base md:text-lg leading-relaxed max-w-[520px]">
              {PersonaContent.lede}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={PersonaContent.cta.href}
                {...(PersonaContent.cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary-color text-primary-color text-sm font-bold hover:bg-secondary-color/90 active:scale-[0.98] transition-all duration-200"
              >
                {PersonaContent.cta.label}
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
              </a>
              <a
                href={PersonaContent.cta2.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white/75 text-sm font-medium hover:bg-white/8 hover:border-white/30 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                {PersonaContent.cta2.label}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-secondary-color tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div
          ref={mockupRef}
          className="flex justify-center lg:justify-end relative max-lg:hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-secondary-color/10 blur-3xl" />
          </div>
          <Image
            src={mockupImage}
            alt="SafulPay app preview"
            className="relative max-w-[340px] h-auto drop-shadow-[0_40px_70px_rgba(0,0,0,0.45)]"
            priority
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default PlatformHero;
