import { useRef } from "react";
import { companyData } from "../data/companyData";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";
import { useSlideFadeIn } from "../hooks/animations/useSlideFadeIn";
import DownloadItem from "../components/DownloadItem";
import mockupImage from "../assets/mockup-login-signup.png";
import { useViewportWidth } from "../hooks/useViewportWidth";
import Socials from "../components/Socials";

function Download() {
  const downloadRef = useRef<HTMLHeadingElement | null>(null);
  const downloadTextRef = useRef<HTMLDivElement>(null);
  const mockupSlide = useRef<HTMLImageElement>(null);
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
      className="section max-w-400 py-12.5 px-10 flex-row justify-center bg-text-color text-white rounded-[50px] max-md:flex-col max-md:gap-2.5"
      data-section
    >
      <div
        ref={downloadTextRef}
        className="hide text-left max-w-[705px] px-2.5  min-w-1/2 max-md:text-center max-md:flex-center max-md:flex-col max-md:gap-2.5"
      >
        <h2 className="animateheader text-[clamp(20px,7.907vw,64px)] text-secondary-color font-semibold py-2.5 tracking-[-2.56px] max-m:tracking-[-1.36px]">
          {title}
        </h2>
        <h3 className="secondary-heading py-2.5">{subtitle}</h3>
        <p className="py-2.5">{text}</p>
        <DownloadItem />
        <Socials className="mt-12" />
      </div>
      <img
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
