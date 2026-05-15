"use client";

import Image from "next/image";
import { useRef } from "react";
import { companyData } from "@/data/companyData";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import KeyFeatures from "@/components/shared/KeyFeatures";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";
import bgImage from "@/assets/images/illustrations/bg-about-icons.png";

function About() {
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const aboutIntroRef = useRef<HTMLDivElement>(null);
  const aboutBgRef = useRef<HTMLImageElement>(null);
  const aboutMobileBgRef = useRef<HTMLImageElement>(null);
  const { aboutus, company } = companyData;

  useScaleFadeIn({ containerRef: aboutRef });

  useHeaderAnimation({
    containerRef: aboutIntroRef,
  });

  useSlideFadeIn({ containerRef: aboutBgRef, fromY: 0 });
  useSlideFadeIn({ containerRef: aboutMobileBgRef, fromY: 0 });

  return (
    <section
      role="region"
      aria-labelledby="about-heading"
      className="section gap-50 py-2.5 max-lg:gap-25"
    >
      <div className="relative w-full flex-center px-12.5">
        <h1
          ref={aboutRef}
          id="about-heading"
          className="px-2.5 py-50 max-lg:py-40 max-md:pb-0 z-2"
        >
          About{" "}
          <span className="bg-linear-to-r from-primary-color to-secondary-color bg-clip-text text-transparent  ">
            {company.name}
          </span>
        </h1>
        <Image
          ref={aboutBgRef}
          src={bgImage} unoptimized
          alt=""
          aria-hidden="true"
          role="presentation"
          className="absolute max-w-460 w-full top-0 max-md:hidden max-lg:max-w-216.5"
          width={1840}
          height={1840}
        />
        <Image
          ref={aboutMobileBgRef}
          src={bgIcon} unoptimized
          width={1000}
          height={1000}
          alt=""
          aria-hidden="true"
          role="presentation"
          className="absolute max-w-400 top-1/3 md:hidden block"
        />
      </div>
      <div
        ref={aboutIntroRef}
        className="max-w-250 flex-center flex-col gap-2.5"
      >
        <h2 className="animateheader primary-heading p-2.5">{aboutus.title}</h2>
        <KeyFeatures />
        <div className="mx-12.5">
          {aboutus.intro.map((intro, index) => (
            <p
              key={index}
              className={`secondary-heading font-normal ${
                index === 1 ? "mb-0" : "mb-5"
              }`}
            >
              {intro}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
