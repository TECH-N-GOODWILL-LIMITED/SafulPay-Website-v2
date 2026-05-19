"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { featuresData } from "@/data/appContent";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import KeyFeatures from "@/components/shared/KeyFeatures";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";
import illustrationImage from "@/assets/images/illustrations/illustration-image.png";

function Features() {
  const featuresTextRef = useRef<HTMLDivElement>(null);
  const IllustrationsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [allowMotion, setAllowMotion] = useState(true);
  const { featuresText, featuresIllustration } = featuresData;

  useHeaderAnimation({ containerRef: featuresTextRef });

  useScaleFadeIn({
    containerRef: IllustrationsRef,
    targetSelector: ".feature-images",
  });

  // Honor prefers-reduced-motion — keep the static image for these users
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="features"
      role="region"
      aria-labelledby="features-heading"
      className="relative section gap-12.5 max-md:gap-2.5 pt-20"
      data-section
    >
      <img
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        loading="lazy"
        decoding="async"
        className="max-w-147.5 h-auto absolute -top-26 left-[-68px] opacity-80 max-m:max-w-80! max-md:max-w-120 max-sm:max-w-100"
      />
      <div
        ref={featuresTextRef}
        className="flex flex-col gap-5 py-2.5 max-w-250 max-sm:gap-2.5"
      >
        <h2
          id="features-heading"
          className="animateheader p-2.5 primary-heading"
        >
          Features You Will Get
        </h2>
        <KeyFeatures />
        <p className="p-2.5 mx-12.5">{featuresText[0]}</p>
      </div>
      <div
        className="relative w-full max-w-[min(90vw,1000px)] aspect-5/4 max-md:hidden bg-none!"
        aria-hidden="true"
      >
        <Image
          src={illustrationImage}
          alt=""
          role="presentation"
          fill
          sizes="(max-width: 768px) 0px, 1000px"
          priority
          className={`object-contain transition-opacity duration-500 ${
            allowMotion && videoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {allowMotion && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            tabIndex={-1}
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/features_vid.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div
        ref={IllustrationsRef}
        className="max-w-90 p-7.5 hidden max-md:flex-center flex-col gap-2.5"
      >
        {featuresIllustration.map((illustration, index) => (
          <Image
            src={illustration}
            alt=""
            key={index}
            width={500}
            height={500}
            className="feature-images"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
