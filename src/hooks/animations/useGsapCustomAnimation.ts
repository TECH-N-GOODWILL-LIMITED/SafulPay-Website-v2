"use client";

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
  scrollTrigger?: Partial<ScrollTrigger.Vars>;
  each?: boolean; // New property to trigger items individually
};

export function useGsapCustomAnimation({
  containerRef,
  targetSelector,
  from = {},
  to = {},
  index = 0,
  staggerDelay = 0,
  scrollTrigger = {},
  each = false,
}: UseGsapScrollAnimationProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      let targets: Element[] | NodeListOf<Element>;

      if (!targetSelector) {
        targets = [container];
      } else if (targetSelector === "*") {
        targets = container.querySelectorAll(":scope > *");
      } else {
        targets = container.querySelectorAll(targetSelector);
      }

      if (!targets.length) return;

      if (each) {
        targets.forEach((target, i) => {
          gsap.fromTo(
            target,
            { ...from },
            {
              ...to,
              delay: (to.delay as number || 0) + i * staggerDelay,
              scrollTrigger: {
                trigger: target,
                start: "top bottom",
                toggleActions: "play none none none",
                ...scrollTrigger,
              },
            },
          );
        });
      } else {
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
              ...scrollTrigger,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
