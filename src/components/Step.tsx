import type { Step as StepData } from "../data/appContent";
import bgIcon from "../assets/bg-logo-illustration.svg";
import lineImage from "../assets/line-illustration.svg";
import circleSvg from "../assets/circle-bg.svg";
import AnimatedStep from "../hooks/animations/AnimatedStep";
// import { useRef } from "react";
// import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";

interface StepProps {
  data: StepData;
  index: number;
}

function Step({ data, index }: StepProps) {
  const { icon, title, description } = data;

  // const stepRef = useRef<HTMLLIElement>(null);

  // useGsapCustomAnimation({
  //   containerRef: stepRef,
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
      <AnimatedStep index={index}>
        <li
          // ref={stepRef}
          className="max-w-87.5 flex flex-col gap-2.5 self-start"
          key={index}
        >
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
        </li>
      </AnimatedStep>
    </>
  );
}

export default Step;
