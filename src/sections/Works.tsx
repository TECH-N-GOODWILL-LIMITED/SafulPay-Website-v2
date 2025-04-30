import { useRef } from "react";
import { worksData } from "../data/appContent";
import Step from "../components/Step";
import { useViewportWidth } from "../hooks/useViewportWidth";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";

function Works() {
  const worksRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewportWidth();
  const { title, intro, instruction, steps } = worksData;

  useScaleFadeIn({
    containerRef: worksRef,
    start: "top bottom",
    end: "80% bottom",
    scrub: isMobile ? false : 0.5,
  });

  useHeaderAnimation({
    containerRef: worksRef,
  });

  return (
    <section
      ref={worksRef}
      id="works"
      role="region"
      aria-label={title}
      aria-description={instruction}
      className="section max-w-400 py-25 px-5 gap-5 md:gap-10 bg-text-color text-white rounded-[50px]"
      data-section
    >
      <h2 className="animateheader primary-heading font-bold p-2.5 tracking-[-2.1px]">
        {title}
      </h2>
      <p className="p-2.5 mx-2.5 max-w-300">{intro}</p>
      <h3 className="p-2.5 secondary-heading">{instruction}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2.5 place-items-center justify-center">
        {steps.map((step, index) => (
          <Step key={step.title} data={step} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default Works;
