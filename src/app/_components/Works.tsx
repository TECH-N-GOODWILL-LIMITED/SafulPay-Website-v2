"use client";

import { useRef } from "react";
import { worksData } from "@/data/appContent";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import Step from "@/app/_components/Step";

function Works() {
  const worksRef = useRef<HTMLDivElement>(null);
  const { title, intro, instruction, steps } = worksData;

  useScaleFadeIn({
    containerRef: worksRef,
    start: "top 80%",
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
      aria-describedby="works-instruction"
      className="section py-16 px-5 gap-6 bg-text-color text-white rounded-[50px] my-20"
      data-section
    >
      <h2 className="animateheader primary-heading font-bold p-2.5 tracking-[-2.1px]">
        {title}
      </h2>
      <p className="p-2.5 mx-2.5 max-w-5xl">{intro}</p>
      <h3 id="works-instruction" className="p-2.5 secondary-heading">
        {instruction}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2.5 place-items-center justify-center">
        {steps.map((step, index) => (
          <Step key={step.title} data={step} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default Works;
