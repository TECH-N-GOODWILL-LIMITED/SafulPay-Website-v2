"use client";

import Image from "next/image";
import { useRef } from "react";
import type { SecurityFeature } from "@/data/appContent";
import { useViewportWidth } from "@/hooks/useViewportWidth";
import { useGsapCustomAnimation } from "@/hooks/animations/useGsapCustomAnimation";
import mockUp from "@/assets/images/mockups/mockup-login.png";

interface FeatureProps {
  data: SecurityFeature;
  index: number;
}

function SecurityFeature({ data, index }: FeatureProps) {
  const securityFeatureRef = useRef<HTMLDivElement | null>(null);
  const { icon, title, description } = data;
  const { isMobile } = useViewportWidth();

  const descId = `security-feature-desc-${title
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^\w-]+/g, "")}`;

  useGsapCustomAnimation({
    containerRef: securityFeatureRef,
    targetSelector: ".security-step",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.6 },
    index: isMobile ? 0 : index,
    staggerDelay: isMobile ? 0 : 0.1,
  });

  return (
    <>
      {index === 1 && (
        <div className="col-span-1 row-span-2 items-center justify-center hidden lg:flex">
          <Image
            src={mockUp}
            alt="Login mockup image"
            className="max-w-113 object-cover"
            width={452}
            height={922}
          />
        </div>
      )}
      <div ref={securityFeatureRef}>
        <div
          tabIndex={0}
          role="group"
          aria-label={title}
          aria-describedby={descId}
          className="security-step max-w-75 p-2.5 flex flex-col gap-x-2.5 lg:w-75"
        >
          <div className="py-5 px-7.5 bg-primary-shade-10 rounded-[30px] flex justify-center">
            <div className="w-10 md:w-15 h-10 md:h-15 relative">
              <Image
                src={icon}
                alt={`${title} icon`}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="secondary-heading py-2.5">{title}</h3>
          <p id={descId} className="py-2.5">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default SecurityFeature;
