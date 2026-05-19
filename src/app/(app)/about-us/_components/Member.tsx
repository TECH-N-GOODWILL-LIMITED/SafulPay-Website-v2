"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import type { Member } from "@/data/companyData";
import { useGsapCustomAnimation } from "@/hooks/animations/useGsapCustomAnimation";
import SocialIcon from "@/components/ui/SocialIcon";

// ── Theme map (driven by cardTheme from data) ─────────────────────────────────
const CARD_THEMES = {
  primary: {
    overlayBg: "#3a5646",
    text: "text-white",
    icon: "bg-white/15 text-white hover:bg-white hover:text-primary-color",
  },
  secondary: {
    overlayBg: "#c3f02c",
    text: "text-[#1b1b1b]",
    icon: "bg-[#1b1b1b]/10 text-[#1b1b1b] hover:bg-[#1b1b1b] hover:text-secondary-color",
  },
  accent: {
    overlayBg: "#ff8181",
    text: "text-white",
    icon: "bg-white/15 text-white hover:bg-white hover:text-error-color",
  },
} as const;

// ── Types ─────────────────────────────────────────────────────────────────────
interface MemberProps {
  data: Member;
  index: number;
}

// ── Component ─────────────────────────────────────────────────────────────────
function Member({ data, index }: MemberProps) {
  const memberRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const bioRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);

  const { name, role, img, bio, cardTheme = "primary", socials = {} } = data;
  const theme = CARD_THEMES[cardTheme];

  // Bubble originates from bottom-left on even cards, bottom-right on odd
  const origin = index % 2 === 0 ? "12% 88%" : "88% 88%";
  const collapsed = `circle(0% at ${origin})`;
  const expanded = `circle(170% at ${origin})`;

  // Scroll entrance — reuses existing hook
  useGsapCustomAnimation({
    containerRef: memberRef,
    targetSelector: ".member",
    from: { opacity: 0, y: 60, x: -20, scale: 0.9 },
    to: { opacity: 1, y: 0, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
    each: true,
    scrollTrigger: { start: "top 90%" },
  });

  // Hover — no existing hook covers event-driven timelines
  const handleMouseEnter = () => {
    gsap
      .timeline()
      .to(overlayRef.current, {
        clipPath: expanded,
        duration: 0.55,
        ease: "power3.out",
      })
      .to(
        bioRef.current,
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
        "-=0.2",
      )
      .to(
        socialsRef.current,
        { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" },
        "-=0.18",
      );
  };

  const handleMouseLeave = () => {
    gsap
      .timeline()
      .to([bioRef.current, socialsRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.16,
        ease: "power2.in",
      })
      .to(
        overlayRef.current,
        { clipPath: collapsed, duration: 0.45, ease: "power3.in" },
        "-=0.05",
      );
  };

  return (
    <div ref={memberRef}>
      <div
        role="article"
        aria-label={`Team member: ${name}, ${role}`}
        className="member w-full bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image + Overlay */}
        <div className="relative aspect-3/4 bg-primary-shade-5 overflow-hidden">
          {img && (
            <Image
              src={img}
              alt={`${name}'s photo`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col justify-between p-7"
            style={{ backgroundColor: theme.overlayBg, clipPath: collapsed }}
            aria-hidden="true"
          >
            <div ref={bioRef} className="opacity-0 translate-y-3 my-auto">
              <p className={`text-sm leading-relaxed ${theme.text}`}>
                {bio ??
                  `${role} at SafulPay — committed to financial inclusion across Sierra Leone.`}
              </p>
            </div>

            <div
              ref={socialsRef}
              className="flex gap-3 opacity-0 translate-y-3"
            >
              {Object.entries(socials).map(([platform, url]) =>
                url ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on ${platform}`}
                    className={`p-2.5 rounded-full transition-colors duration-200 ${theme.icon}`}
                  >
                    <SocialIcon platform={platform} className="w-4 h-4" />
                  </a>
                ) : null,
              )}
            </div>
          </div>
        </div>

        {/* Name / Role footer */}
        <div className="p-6">
          <p className="title-text font-semibold">{name}</p>
          <p className="text-[13px] text-gray-500 mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Member;
