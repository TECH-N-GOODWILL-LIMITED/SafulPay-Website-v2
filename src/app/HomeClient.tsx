"use client";

import { useRef } from "react";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import NavBar from "@/components/layout/NavBar";
import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import MoreFeatures from "@/app/_components/MoreFeatures";
import Security from "@/app/_components/Security";
import Works from "@/app/_components/Works";
import Testimonial from "@/app/_components/Testimonial";
import Partners from "@/app/_components/Partners";
import Download from "@/components/shared/Download";
import Faqs from "@/app/_components/Faqs";
import MainFooter from "@/components/layout/MainFooter";
import SolutionsPreview from "@/app/_components/SolutionsPreview";
import BridgeSection from "@/components/shared/BridgeSection";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

export default function HomeClient() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const vh = useViewportHeight();

  useScaleFadeIn({
    containerRef: mainRef,
    fromScaleX: 0.8,
    fromOpacity: 1,
    scrub: 0.5,
    end: "top top",
  });

  return (
    <div className="relative">
      <NavBar />
      <Hero />

      <div
        className={`absolute w-screen bg-transparent overflow-auto ${
          vh < 620 ? "top-[50%]" : "top-[80vh]"
        }`}
      >
        <div className="h-32 md:h-30 sticky"></div>
        <main ref={mainRef} className="relative rounded-t-[40px] max-m:pt-15">
          <img
            src={bgIcon.src}
            alt=""
            aria-hidden="true"
            role="presentation"
            loading="lazy"
            decoding="async"
            className="max-w-147.5 h-auto absolute top-[-47px] right-[-68px] opacity-80 max-m:max-w-80! max-md:max-w-120 max-sm:max-w-100"
          />
          <BridgeSection />
          <Features />
          <MoreFeatures />
          <div className="absolute top-[34.4%] max-[780px]:top-[31%] max-[858px]:top-[32%] flex gap-2.5 whitespace-nowrap bg-primary-color rotate-[-8.29deg] w-max z-9 max-md:hidden">
            <Partners />
          </div>
          <Security />
          <SolutionsPreview />
          <Works />
          <Testimonial />
          <Download />
          <Faqs />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}
