import { useRef } from "react";
import type { SecurityFeature } from "../data/appContent";
import { useViewportWidth } from "../hooks/useViewportWidth";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";
import mockUp from "../assets/mockup-login.png";

interface FeatureProps {
  data: SecurityFeature;
  index: number;
}

function SecurityFeature({ data, index }: FeatureProps) {
  const securityFeatureRef = useRef<HTMLDivElement | null>(null);
  const { icon, title, description } = data;
  const { isMobile } = useViewportWidth();

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
          <img
            src={mockUp}
            alt="Login mockup image"
            className="w-full object-cover"
          />
        </div>
      )}
      <div ref={securityFeatureRef}>
        <div
          tabIndex={0}
          role="group"
          aria-label={title}
          aria-description={description}
          className="security-step max-w-75 p-2.5 flex flex-col gap-x-2.5 lg:w-75"
        >
          <div className="py-5 px-7.5 bg-primary-shade-10 rounded-[30px] flex justify-center">
            <img src={icon} alt={`${title} icon`} className="w-10 md:w-15" />
          </div>
          <h3 className="secondary-heading py-2.5">{title}</h3>
          <p className="py-2.5">{description}</p>
        </div>
      </div>
    </>
  );
}

export default SecurityFeature;
