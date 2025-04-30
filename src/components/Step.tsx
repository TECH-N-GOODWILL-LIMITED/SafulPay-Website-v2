import { useRef } from "react";
import type { Step as StepData } from "../data/appContent";
import { useViewportWidth } from "../hooks/useViewportWidth";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";
import bgIcon from "../assets/bg-logo-illustration.svg";
import circleSvg from "../assets/circle-bg.svg";
import lineImage from "../assets/line-illustration.svg";

interface StepProps {
  data: StepData;
  index: number;
}

function Step({ data, index }: StepProps) {
  const stepRef = useRef<HTMLLIElement | null>(null);
  const { icon, title, description } = data;
  const { isMobile } = useViewportWidth();

  useGsapCustomAnimation({
    containerRef: stepRef,
    targetSelector: ".step",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.6 },
    index: isMobile ? 0 : index,
    staggerDelay: isMobile ? 0 : 0.4,
  });

  return (
    <>
      {index === 1 && (
        <img
          src={lineImage}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="w-29 h-29 max-lg:w-16 max-md:w-29 max-md:rotate-90 max-md:scale-y-[-1]"
        />
      )}
      {index === 2 && (
        <img
          src={lineImage}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="w-29 h-29 rotate-180 scale-x-[-1] max-lg:w-16 max-md:w-29 max-md:rotate-270 max-md:scale-y-[-1]"
        />
      )}
      <li ref={stepRef} className="max-w-87.5" key={index}>
        <div className="step flex flex-col gap-2.5 self-start w-full">
          <div className="flex items-center justify-center relative">
            <img
              src={circleSvg}
              alt=""
              role="presentation"
              aria-hidden="true"
              className="w-20 h-20"
            />
            <span className="absolute">{index + 1}</span>
          </div>
          <div
            role="group"
            tabIndex={0}
            aria-labelledby={`step-title-${index}`}
            aria-describedby={`step-desc-${index}`}
            className="flex relative flex-col justify-center px-7.5 items-center pt-10 pb-5 gap-2.5 bg-primary-shade-10 rounded-[30px]"
          >
            <img
              src={bgIcon}
              alt=""
              role="presentation"
              aria-hidden="true"
              className="max-w-147.5 absolute rotate-[133.24deg]"
            />
            <img src={icon} alt={`${title} icon`} className="w-15 h-15" />

            <h4
              id={`step-title-${index}`}
              className="title-text text-white py-2.5"
            >
              {title}
            </h4>
            <p id={`step-desc-${index}`} className="small-text py-2.5">
              {description}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Step;
