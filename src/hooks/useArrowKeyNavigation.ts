// hooks/useArrowKeyNavigation.ts
import { useCallback } from "react";

export type NavigationDirection = "horizontal" | "vertical" | "both";

export function useArrowKeyNavigation({
  refs,
  index,
  direction = "both",
  wrap = true,
}: {
  refs: (HTMLElement | null)[];
  index: number;
  direction?: NavigationDirection;
  wrap?: boolean;
}) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const total = refs.length;
      let nextIndex = index;

      const isHorizontal = direction === "horizontal" || direction === "both";
      const isVertical = direction === "vertical" || direction === "both";

      if (isHorizontal && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        nextIndex = e.key === "ArrowRight" ? index + 1 : index - 1;
        e.preventDefault();
      }

      if (isVertical && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        nextIndex = e.key === "ArrowDown" ? index + 1 : index - 1;
        e.preventDefault();
      }

      if (wrap) {
        nextIndex = (nextIndex + total) % total;
      } else {
        if (nextIndex < 0 || nextIndex >= total) return;
      }

      const nextRef = refs[nextIndex];
      nextRef?.focus();
    },
    [refs, index, direction, wrap]
  );

  return { handleKeyDown };
}
