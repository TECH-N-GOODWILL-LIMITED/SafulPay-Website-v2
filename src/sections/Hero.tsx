import { useRef } from "react";
import { companyData } from "../data/companyData";
import DownloadItem from "../components/DownloadItem";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import { useAnimateText } from "../hooks/animations/useAnimateText";
import { useSlideFadeIn } from "../hooks/animations/useSlideFadeIn";
import mockUpImage from "../assets/mockup-home-page.png";
// import Partners from "../components/Partners";

function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const companyNameRef = useRef<HTMLSpanElement | null>(null);
  const mockupImageRef = useRef<HTMLImageElement | null>(null);
  const { company } = companyData;

  useAnimateText({
    containerRef: companyNameRef,
    text: company.alias,
    finalText: company.name,
    repeat: 1,
    yoyo: true,
  });

  useHeaderAnimation({ containerRef: heroRef, start: "top bottom" });

  useSlideFadeIn({ containerRef: mockupImageRef, fromX: 0, fromY: -100 });

  return (
    // <section id="home" className="section gap-10 min-h-[80vh]">
    <section
      id="home"
      role="region"
      aria-labelledby="hero-heading"
      className="section gap-10 min-h-[80vh]"
      data-section
    >
      <div
        ref={heroRef}
        className="flex-center flex-col gap-2.5 max-m:gap-7.5 mt-50 py-2.5 text-white"
      >
        <h1 id="hero-heading" className="animateheader max-w-275 p-2.5">
          {company.slogan}
          <span
            ref={companyNameRef}
            className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent"
          >
            Saful
          </span>
        </h1>
        <p className="text-[clamp(16px,3.721vw,30px)] font-normal tracking-[-0.9px] max-m:tracking-normal p-2.5 max-w-250 max-m:max-w-80">
          {company.description}
        </p>
        <div className="max-w-3/4">
          <DownloadItem />
        </div>
      </div>
      <div className="cursor-pointer max-w-[min(63.49vw,444px)] relative">
        <img ref={mockupImageRef} src={mockUpImage} alt="App homepage mockup" />
        {/* <div className="absolute top-[16%] left-[-900%] flex gap-2.5 whitespace-nowrap bg-primary-color rotate-[8.29deg] w-max z-[-1] max-md:hidden">
          <Partners />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
