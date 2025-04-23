// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function useScaleFadeIn({
//   containerRef,
//   targetSelector, // Optional
//   fromScale = 0.8,
//   toScale = 1,
//   fromOpacity = 0,
//   toOpacity = 1,
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
//   fromScale?: number;
//   toScale?: number;
//   fromOpacity?: number;
//   toOpacity?: number;
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
//         // Animate container itself
//         targets = [container];
//       } else if (targetSelector === "*") {
//         // Animate all child elements
//         targets = container.querySelectorAll(":scope > *");
//       } else {
//         // Animate specific matching children
//         targets = container.querySelectorAll(targetSelector);
//       }

//       if (!targets.length) return;

//       gsap.fromTo(
//         targets,
//         {
//           scale: fromScale,
//           opacity: fromOpacity,
//         },
//         {
//           scale: toScale,
//           opacity: toOpacity,
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
//     fromScale,
//     toScale,
//     fromOpacity,
//     toOpacity,
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

type ScaleFadeOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  fromOpacity?: number;
  toOpacity?: number;
  fromScale?: number;
  toScale?: number;
  fromScaleX?: number;
  toScaleX?: number;
  fromScaleY?: number;
  toScaleY?: number;
  duration?: number;
  ease?: string;
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean | number;
  stagger?: number;
};

export function useScaleFadeIn({
  containerRef,
  targetSelector,
  fromOpacity = 0,
  toOpacity = 1,
  fromScale,
  toScale,
  fromScaleX,
  toScaleX,
  fromScaleY,
  toScaleY,
  duration = 1,
  ease = "power2.out",
  start = "top 80%",
  end,
  toggleActions = "play none none reverse",
  scrub = false,
  stagger = 0.1,
}: ScaleFadeOptions) {
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

      // Determine the scaling direction and fallback to default scale if none provided
      const fromScaleProps: gsap.TweenVars = { opacity: fromOpacity };
      const toScaleProps: gsap.TweenVars = { opacity: toOpacity };

      if (fromScaleX !== undefined || toScaleX !== undefined) {
        fromScaleProps.scaleX = fromScaleX ?? 0.8;
        toScaleProps.scaleX = toScaleX ?? 1;
      } else if (fromScaleY !== undefined || toScaleY !== undefined) {
        fromScaleProps.scaleY = fromScaleY ?? 0.8;
        toScaleProps.scaleY = toScaleY ?? 1;
      } else {
        fromScaleProps.scale = fromScale ?? 0.8;
        toScaleProps.scale = toScale ?? 1;
      }

      gsap.fromTo(targets, fromScaleProps, {
        ...toScaleProps,
        duration,
        ease,
        stagger: targets.length > 1 ? stagger : 0,
        scrollTrigger: {
          trigger: container,
          start,
          end: end || undefined,
          toggleActions: scrub ? undefined : toggleActions,
          scrub,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    containerRef,
    targetSelector,
    fromOpacity,
    toOpacity,
    fromScale,
    toScale,
    fromScaleX,
    toScaleX,
    fromScaleY,
    toScaleY,
    duration,
    ease,
    start,
    end,
    toggleActions,
    scrub,
    stagger,
  ]);
}
