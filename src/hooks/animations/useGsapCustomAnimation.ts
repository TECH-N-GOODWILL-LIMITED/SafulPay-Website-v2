// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function useScrollAnimation({
//   containerRef,
//   targetSelector, // optional: "*", ".classname", or undefined
//   from = {},
//   to = {},
//   duration = 1,
//   ease = "power2.out",
//   start = "top 80%",
//   end,
//   toggleActions = "play none none reverse",
//   scrub = false,
//   stagger = 0.1,
// }: {
//   containerRef: React.RefObject<HTMLElement | null>;
//   targetSelector?: string;
//   from?: {
//     scale?: number;
//     x?: number | string;
//     y?: number | string;
//     opacity?: number;
//   };
//   to?: {
//     scale?: number;
//     x?: number | string;
//     y?: number | string;
//     opacity?: number;
//   };
//   duration?: number;
//   ease?: string;
//   start?: string;
//   end?: string;
//   toggleActions?: string;
//   scrub?: boolean | number;
//   stagger?: number;
// }) {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const container = containerRef.current;
//       if (!container) return;

//       let targets: Element[] | NodeListOf<Element>;

//       if (!targetSelector) {
//         targets = [container];
//       } else if (targetSelector === "*") {
//         targets = container.querySelectorAll(":scope > *");
//       } else {
//         targets = container.querySelectorAll(targetSelector);
//       }

//       if (!targets.length) return;

//       gsap.fromTo(
//         targets,
//         { ...from },
//         {
//           ...to,
//           duration,
//           ease,
//           stagger: targets.length > 1 ? stagger : 0,
//           scrollTrigger: {
//             trigger: container,
//             start,
//             end: end || undefined,
//             toggleActions: scrub ? undefined : toggleActions,
//             scrub,
//           },
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, [
//     containerRef,
//     targetSelector,
//     from,
//     to,
//     duration,
//     ease,
//     start,
//     end,
//     toggleActions,
//     scrub,
//     stagger,
//   ]);
// }

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapTweenVars = gsap.TweenVars;

type UseGsapScrollAnimationProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  from?: GsapTweenVars;
  to?: GsapTweenVars;
  scrollTrigger?: Partial<ScrollTrigger.Vars>; // Allow full ScrollTrigger control
};

export function useGsapCustomAnimation({
  containerRef,
  targetSelector,
  from = {},
  to = {},
  scrollTrigger = {},
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

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          scrollTrigger: {
            trigger: container,
            start: "top 80%", // default values, overridden below
            toggleActions: "play none none reverse",
            ...scrollTrigger, // allow full customization
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, targetSelector, from, to, scrollTrigger]);
}
