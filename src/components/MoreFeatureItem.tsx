import { useRef } from "react";
import type { MoreFeature } from "../data/appContent";
import { useViewportWidth } from "../hooks/useViewportWidth";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";
import absoluteImage from "../assets/ray-illustration.svg";

interface MoreFeatureProps {
  feature: MoreFeature;
  index: number;
}

function MoreFeaturesItem({ feature, index }: MoreFeatureProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { title, image } = feature;
  const { isMobile } = useViewportWidth();

  useGsapCustomAnimation({
    containerRef: itemRef,
    targetSelector: ".item",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.6 },
    index: isMobile ? 0 : index,
    staggerDelay: isMobile ? 0 : 0.4,
  });

  return (
    <div ref={itemRef} className="max-w-[387px]">
      <div
        tabIndex={0}
        role="group"
        aria-label={`Feature: ${title}`}
        className={`item w-full h-full flex flex-col relative overflow-hidden items-center gap-20 max-[900px]:gap-10 max-xl:px-8 max-lg:px-4 bg-offwhite rounded-[50px] p-12.5 pb-0 ${
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
    </div>
  );
}

export default MoreFeaturesItem;
