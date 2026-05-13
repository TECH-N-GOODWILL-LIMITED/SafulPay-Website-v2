"use client";

import { useRef } from "react";
import { useViewportHeight } from "../hooks/useViewportHeight";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";
import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import MoreFeatures from "@/components/sections/MoreFeatures";
import Security from "@/components/sections/Security";
import Works from "@/components/sections/Works";
import Testimonial from "@/components/sections/Testimonial";
import Partners from "@/components/Partners";
import Download from "@/components/sections/Download";
import Faqs from "@/components/sections/Faqs";
import MainFooter from "@/components/sections/MainFooter";
import SolutionsPreview from "@/components/sections/SolutionsPreview";

export default function HomePage() {
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
        className={`absolute ${
          vh < 620 ? "top-[50%]" : "top-[80vh]"
        } w-screen bg-transparent overflow-auto`}
      >
        <div className="h-32 md:h-30 sticky"></div>
        <main ref={mainRef} className="relative rounded-t-[40px] max-m:pt-15">
          <Features />
          <MoreFeatures />
          <Security />
          <SolutionsPreview />
          <Works />
          <Testimonial />
          <div className="absolute top-4/15 flex gap-2.5 whitespace-nowrap bg-primary-color rotate-[-8.29deg] w-max z-9 max-md:hidden">
            <Partners />
          </div>
          <Download />
          <Faqs />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}
