import { useRef } from "react";
import { featuresData } from "../data/appContent";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import KeyFeatures from "../components/KeyFeatures";
import bgIcon from "../assets/bg-logo-illustration.svg";
import illustrationImage from "../assets/illustration-image.png";

function Features() {
  const { featuresText, featuresIllustration } = featuresData;

  const featuresTextRef = useRef<HTMLDivElement>(null);

  useHeaderAnimation({ containerRef: featuresTextRef });

  return (
    <section
      id="features"
      role="region"
      aria-labelledby="features-heading"
      className="section gap-12.5 max-md:gap-2.5"
      data-section
    >
      <img
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
        className="max-w-147.5 absolute top-[-47px] left-[-68px] opacity-80 max-m:max-w-80! max-md:max-w-120 max-sm:max-w-100"
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
        <p
          aria-describedby="features-heading"
          className="p-2.5 mx-12.5 text-[clamp(12px,3.256vw,24px)]!"
        >
          {featuresText[0]}
        </p>
      </div>
      <img
        src={illustrationImage}
        alt=""
        aria-hidden="true"
        role="presentation"
        className="max-w-[min(90vw,1000px)] max-md:hidden"
      />
      <div className="max-w-90 p-7.5 hidden max-md:flex-center flex-col gap-2.5">
        {featuresIllustration.map((illustration, index) => (
          <img src={illustration} alt="" key={index} />
        ))}
      </div>
    </section>
  );
}

export default Features;
