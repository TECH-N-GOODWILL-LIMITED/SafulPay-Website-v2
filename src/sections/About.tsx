import { useRef } from "react";
import KeyFeatures from "../components/KeyFeatures";
import { companyData } from "../data/companyData";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";
import { useSlideFadeIn } from "../hooks/animations/useSlideFadeIn";
import bgImage from "/bg-about-icons.png";
import bgIcon from "../assets/bg-logo-illustration.svg";

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
      <div className="relative w-screen flex-center mx-12.5">
        <h1
          ref={aboutRef}
          id="about-heading"
          className="px-2.5 py-50 max-lg:py-40 max-md:pb-0"
        >
          About{" "}
          <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent  ">
            {company.name}
          </span>
        </h1>
        <img
          ref={aboutBgRef}
          src={bgImage}
          alt=""
          aria-hidden="true"
          role="presentation"
          className="absolute max-w-460 w-full top-0 max-md:hidden max-lg:max-w-216.5"
        />
        <img
          ref={aboutMobileBgRef}
          src={bgIcon}
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
