import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSlideFadeIn({
  containerRef,
  targetSelector,
  fromX = 500,
  toX = 0,
  fromY = -100,
  toY = 0,
  fromOpacity = 0,
  toOpacity = 1,
  duration = 1,
  ease = "power2.out",
  start = "top 80%",
  end,
  toggleActions = "play none none reverse",
  scrub = false,
  stagger = 0.1,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  fromOpacity?: number;
  toOpacity?: number;
  duration?: number;
  ease?: string;
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean | number;
  stagger?: number;
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      let targets: Element[] | NodeListOf<Element>;

      if (!targetSelector) {
        // Animate container itself
        targets = [container];
      } else if (targetSelector === "*") {
        // Animate all direct children
        targets = container.querySelectorAll(":scope > *");
      } else {
        // Animate matching children
        targets = container.querySelectorAll(targetSelector);
      }

      if (!targets.length) return;

      gsap.fromTo(
        targets,
        {
          x: fromX,
          y: fromY,
          opacity: fromOpacity,
        },
        {
          x: toX,
          y: toY,
          opacity: toOpacity,
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
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [
    containerRef,
    targetSelector,
    fromX,
    toX,
    fromY,
    toY,
    fromOpacity,
    toOpacity,
    duration,
    ease,
    start,
    end,
    toggleActions,
    scrub,
    stagger,
  ]);
}
