import { useGsapCustomAnimation } from "./useGsapCustomAnimation";

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
  toggleActions = "play none none none",
  scrub = false,
  stagger = 0.1,
}: ScaleFadeOptions) {
  const from: gsap.TweenVars = { opacity: fromOpacity };
  const to: gsap.TweenVars = {
    opacity: toOpacity,
    duration,
    ease,
    stagger,
  };

  if (fromScaleX !== undefined || toScaleX !== undefined) {
    from.scaleX = fromScaleX ?? 0.8;
    to.scaleX = toScaleX ?? 1;
  } else if (fromScaleY !== undefined || toScaleY !== undefined) {
    from.scaleY = fromScaleY ?? 0.8;
    to.scaleY = toScaleY ?? 1;
  } else {
    from.scale = fromScale ?? 0.8;
    to.scale = toScale ?? 1;
  }

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
