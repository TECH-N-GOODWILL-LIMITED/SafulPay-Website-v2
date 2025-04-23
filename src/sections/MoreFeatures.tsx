import { useRef } from "react";
import { featuresData } from "../data/appContent";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";
import AnimatedStep from "../hooks/animations/AnimatedStep";
import MoreFeaturesItem from "../components/MoreFeatureItem";
import bigRay from "../assets/big-ray-illustration.svg";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";

function MoreFeatures() {
  const { featuresText, moreFeatures } = featuresData;

  const moreFeaturesBgRef = useRef<HTMLDivElement>(null);
  const moreFeaturesTextRef = useRef<HTMLDivElement>(null);
  const bigRayRef = useRef<HTMLImageElement>(null);

  useScaleFadeIn({
    containerRef: moreFeaturesBgRef,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 0.5,
  });

  useHeaderAnimation({
    containerRef: moreFeaturesTextRef,
  });

  useGsapCustomAnimation({
    containerRef: bigRayRef,
    from: {
      scale: 0.8,
      y: 400,
      opacity: 0,
    },
    to: {
      scale: 1,
      y: 0,
      opacity: 1,
      ease: "power2.out",
    },
  });

  return (
    <section
      role="region"
      aria-labelledby="more-features-heading"
      className="section pt-25 max-md:pt-15 pb-50 max-md:pb-5 px-5 flex rounded-t-[30px] gap-25 max-md:gap-12.5 overflow-hidden relative flex-col items-center text-white"
    >
      <div
        ref={moreFeaturesBgRef}
        aria-hidden="true"
        className="absolute w-full h-[67%] max-md:h-full rounded-t-[30px] rounded-b-[60px] bg-primary-color top-0"
      ></div>
      <img
        ref={bigRayRef}
        src={bigRay}
        alt=""
        aria-hidden="true"
        role="presentation"
        className="w-185 absolute top-[-120px] max-m:top-[-6%]"
      />

      <div ref={moreFeaturesTextRef} className="z-2 flex flex-col gap-5">
        <h2
          id="more-features-heading"
          className="animateheader px-12.5 primary-heading"
        >
          Explore Even More Powerful Features
        </h2>
        <p className="z-2 max-w-[1200px] px-12.5">{featuresText[1]}</p>
      </div>
      <div
        role="list"
        className="flex gap-10 z-2 justify-center max-lg:gap-5 max-md:flex-col max-md:gap-2.5"
      >
        {moreFeatures.map((feature, index) => (
          <AnimatedStep key={index} index={index}>
            <MoreFeaturesItem index={index} feature={feature} />
          </AnimatedStep>
        ))}
      </div>
    </section>
  );
}

export default MoreFeatures;
