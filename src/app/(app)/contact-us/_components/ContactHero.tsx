"use client";

import { useRef } from "react";
import { companyData } from "@/data/companyData";
import { contactInfo } from "@/data/appContent";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";

const { company } = companyData;

function ContactHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useSlideFadeIn({
    containerRef: heroRef,
    targetSelector: ".hero-animate",
    fromX: 0,
    fromY: 40,
    stagger: 0.1,
    start: "top 90%",
    each: true,
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-primary-color overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-secondary-color/8 blur-[120px]" />
      </div>

      <div className="relative section px-6 md:px-10 pt-44 pb-20 md:pt-52 md:pb-28 gap-10 md:gap-14">
        {/* Heading */}
        <div className="hero-animate flex flex-col items-center text-center gap-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-color/15 text-secondary-color text-xs font-bold tracking-[0.2em] uppercase">
            Contact Us
          </span>
          <h1 className="text-[clamp(32px,6vw,64px)] font-black leading-[1.05] tracking-tight text-white">
            Get in touch with{" "}
            <span className="text-secondary-color">{company.name}</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Have a question, need help, or want to partner with us? We&apos;d
            love to hear from you.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="hero-animate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-color/30 hover:bg-white/8 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary-color/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3f02c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em]">Email</span>
            <span className="text-sm font-semibold text-white group-hover:text-secondary-color transition-colors">
              {contactInfo.email}
            </span>
          </a>

          {/* Support */}
          <a
            href={`mailto:${contactInfo.supportEmail}`}
            className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-color/30 hover:bg-white/8 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary-color/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3f02c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em]">Support</span>
            <span className="text-sm font-semibold text-white group-hover:text-secondary-color transition-colors">
              {contactInfo.supportEmail}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-color/30 hover:bg-white/8 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary-color/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3f02c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em]">Phone</span>
            <span className="text-sm font-semibold text-white group-hover:text-secondary-color transition-colors">
              {contactInfo.phone}
            </span>
          </a>

          {/* Office */}
          <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-secondary-color/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3f02c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em]">Office</span>
            <span className="text-sm font-semibold text-white leading-snug">
              {contactInfo.address}
              <br />
              {contactInfo.city}, {contactInfo.country}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
