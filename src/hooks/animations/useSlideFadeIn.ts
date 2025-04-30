import { useGsapCustomAnimation } from "./useGsapCustomAnimation"; // adjust path as needed

type SlideFadeInOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  fromOpacity?: number;
  toOpacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  stagger?: number;
  toggleActions?: string;
};

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
  delay = 0,
  ease = "power2.out",
  start = "top 80%",
  end,
  // toggleActions = "play none none reverse",
  scrub = false,
  stagger = 0.1,
  toggleActions = "play none none none",
}: SlideFadeInOptions) {
  const from: gsap.TweenVars = {
    x: fromX,
    y: fromY,
    opacity: fromOpacity,
  };

  const to: gsap.TweenVars = {
    x: toX,
    y: toY,
    opacity: toOpacity,
    duration,
    ease,
    delay,
    stagger,
  };

  useGsapCustomAnimation({
    containerRef,
    targetSelector,
    from,
    to,
    scrollTrigger: {
      start,
      end,
      scrub,
      toggleActions: scrub ? undefined : toggleActions,
    },
  });
}
