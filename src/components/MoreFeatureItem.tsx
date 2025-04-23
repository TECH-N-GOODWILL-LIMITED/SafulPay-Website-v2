import type { MoreFeature } from "../data/appContent";
import absoluteImage from "../assets/ray-illustration.svg";
// import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";
// import { useRef } from "react";

interface MoreFeatureProps {
  feature: MoreFeature;
  index: number;
}

function MoreFeaturesItem({ feature, index }: MoreFeatureProps) {
  const { title, image } = feature;

  // const featureItemRef = useRef<HTMLDivElement>(null);

  // useGsapCustomAnimation({
  //   containerRef: featureItemRef,
  //   from: {
  //     opacity: 0,
  //     y: 50,
  //     scale: 0.9,
  //   },
  //   to: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     duration: 0.6,
  //     ease: "power2.out",
  //     delay: index * 0.5,
  //   },
  // });

  return (
    <div
      // ref={featureItemRef}
      tabIndex={0}
      role="group"
      aria-label={`Feature: ${title}`}
      className={`hello max-w-[387px] flex flex-col relative overflow-hidden items-center gap-20 max-[900px]:gap-10 max-xl:px-8 max-lg:px-4 bg-offwhite rounded-[50px] p-12.5 pb-0 ${
        index === 1 && "pt-0"
      }`}
    >
      <img
        src={absoluteImage}
        alt=""
        role="presentation"
        className={`absolute w-85.25 ${
          index === 1 ? "top-[46%]" : "top-[28%]"
        }`}
      />

      {index !== 1 && (
        <p tabIndex={-1} className="title-text p-2.5">
          {title}
        </p>
      )}

      <img src={image} alt={`${title} illustration`} className="w-75 z-1" />

      {index === 1 && (
        <p tabIndex={-1} className="title-text p-2.5">
          {title}
        </p>
      )}
    </div>
  );
}

export default MoreFeaturesItem;
