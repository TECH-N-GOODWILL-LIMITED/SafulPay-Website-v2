import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapTweenVars = gsap.TweenVars;

type UseGsapScrollAnimationProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  index?: number;
  staggerDelay?: number;
  from?: GsapTweenVars;
  to?: GsapTweenVars;
  scrollTrigger?: Partial<ScrollTrigger.Vars>; // Allow full ScrollTrigger control
};

export function useGsapCustomAnimation({
  containerRef,
  targetSelector,
  from = {},
  to = {},
  index = 0,
  staggerDelay = 0,
  scrollTrigger = {},
}: UseGsapScrollAnimationProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // const existingTriggers = ScrollTrigger.getAll().filter(
      //   (trigger) => trigger.trigger === container
      // );

      // if (existingTriggers.length > 0) return;

      let targets: Element[] | NodeListOf<Element>;

      if (!targetSelector) {
        targets = [container];
      } else if (targetSelector === "*") {
        targets = container.querySelectorAll(":scope > *");
      } else {
        targets = container.querySelectorAll(targetSelector);
      }

      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          delay: index * staggerDelay,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
            ...scrollTrigger, // allow full customization
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  });
}
