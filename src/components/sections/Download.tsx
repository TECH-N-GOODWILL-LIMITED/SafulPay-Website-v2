"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { companyData } from "@/data/companyData";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useViewportWidth } from "@/hooks/useViewportWidth";
import DownloadItem from "@/components/DownloadItem";
import Socials from "@/components/Socials";
import mockupImage from "@/assets/images/mockup-login-signup.png";

function Download() {
  const downloadRef = useRef<HTMLElement | null>(null);
  const downloadTextRef = useRef<HTMLDivElement>(null);
  const mockupSlide = useRef<React.ElementRef<typeof Image>>(null);
  const { isMobile } = useViewportWidth();
  const { downloads } = companyData;
  const { title, subtitle, text } = downloads;

  useScaleFadeIn({
    containerRef: downloadRef,
    start: "top bottom",
    end: "bottom bottom",
    scrub: isMobile ? false : 0.5,
  });

  useHeaderAnimation({ containerRef: downloadTextRef });

  useSlideFadeIn({
    containerRef: mockupSlide,
    scrub: 0.5,
    end: "bottom 80%",
  });

  return (
    <section
      ref={downloadRef}
      id="download"
      role="region"
      aria-label={title}
      className="section py-6 px-20 flex-row justify-between bg-text-color text-white rounded-[50px] max-md:flex-col max-md:gap-2.5"
      data-section
    >
      <div
        ref={downloadTextRef}
        className="hide text-left max-w-[705px] px-2.5 min-w-1/2 max-md:text-center max-md:flex-center max-md:flex-col max-md:gap-2.5"
      >
        <h2 className="animateheader primary-heading text-secondary-color font-semibold py-2.5 tracking-[-2.56px] max-m:tracking-[-1.36px]">
          {title}
        </h2>
        <h3 className="secondary-heading py-2.5">{subtitle}</h3>
        <p className="py-2.5 title-text font-normal text-offwhite max-w-xl">
          {text}
        </p>
        <DownloadItem />
        <Socials className="mt-8" />
      </div>
      <Image
        ref={mockupSlide}
        src={mockupImage}
        alt="SafulPay mobile app login and signup screen mockup"
        className="show max-w-1/2 max-md:max-w-89"
      />
      <DownloadItem />
      <Socials />
    </section>
  );
}

export default Download;
