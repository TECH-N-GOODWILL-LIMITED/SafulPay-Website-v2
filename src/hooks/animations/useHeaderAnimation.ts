import { useScaleFadeIn } from "./useScaleFadeIn";
import { useSlideFadeIn } from "./useSlideFadeIn";

export function useHeaderAnimation({
  containerRef,
  headingSelector = ".animateheader",
  bodySelector,
  headingFromScale = 0.8,
  headingToScale = 1,
  headingFromOpacity = 0,
  headingToOpacity = 1,
  headingDuration = 0.8,
  bodyYOffset = 100,
  bodyFromOpacity = 0,
  bodyToOpacity = 1,
  bodyDuration = 0.8,
  stagger = 0.1,
  start = "top 70%",
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  headingSelector?: string;
  bodySelector?: string;
  headingFromScale?: number;
  headingToScale?: number;
  headingFromOpacity?: number;
  headingToOpacity?: number;
  headingDuration?: number;
  bodyYOffset?: number;
  bodyFromOpacity?: number;
  bodyToOpacity?: number;
  bodyDuration?: number;
  stagger?: number;
  start?: string;
}) {
  // Animate Heading using useScaleFadeIn
  useScaleFadeIn({
    containerRef,
    targetSelector: headingSelector,
    fromScale: headingFromScale,
    toScale: headingToScale,
    fromOpacity: headingFromOpacity,
    toOpacity: headingToOpacity,
    duration: headingDuration,
    start,
    stagger,
  });

  // Animate Body using useSlideFadeIn (only Y offset, no X movement)
  useSlideFadeIn({
    containerRef,
    targetSelector: bodySelector || `:scope > *:not(${headingSelector})`,
    fromX: 0,
    fromY: bodyYOffset,
    toY: 0,
    fromOpacity: bodyFromOpacity,
    toOpacity: bodyToOpacity,
    duration: bodyDuration,
    start,
    stagger,
  });
}
