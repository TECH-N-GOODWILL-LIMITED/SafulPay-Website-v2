import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export const gsapScrollTo = (
  targetY: number,
  options: {
    autoKill?: boolean;
    onComplete?: () => void;
    duration?: number;
  } = {}
): gsap.core.Tween => {
  const distance = Math.abs(targetY - window.scrollY);
  const duration = options.duration || Math.min(distance / 1500, 3);

  return gsap.to(window, {
    duration,
    scrollTo: {
      y: targetY,
      autoKill: options.autoKill ?? true,
      onAutoKill: options.onComplete,
    },
    ease: "power2.inOut",
    onComplete: options.onComplete,
  });
};
