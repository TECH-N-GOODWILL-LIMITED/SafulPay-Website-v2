export const isIOS = (): boolean => {
  return (
    /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (navigator.userAgent === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

export const iosScrollTo = (
  targetY: number,
  onComplete?: () => void
): Promise<void> => {
  return new Promise((resolve) => {
    const startY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const distance = targetY - startY;
    const duration = calculateIOSDuration(distance);
    let startTime: number | null = null;
    let canceled = false;

    const cancelScroll = () => {
      canceled = true;
      cleanup();
      resolve();
    };

    const cleanup = () => {
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("keydown", cancelScroll);
    };

    window.addEventListener("touchstart", cancelScroll);
    window.addEventListener("wheel", cancelScroll);
    window.addEventListener("keydown", cancelScroll);

    const scrollStep = (timestamp: number) => {
      if (canceled) return;
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = cubicEaseOut(progress);

      window.scrollTo(0, startY + distance * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        cleanup();
        onComplete?.();
        resolve();
      }
    };

    window.requestAnimationFrame(scrollStep);
  });
};

const calculateIOSDuration = (distance: number): number => {
  const absoluteDistance = Math.abs(distance);
  const baseDuration =
    Math.min(Math.max(absoluteDistance / 800, 0.3), 1.2) * 2000;
  return Math.max(baseDuration, 300);
};

const cubicEaseOut = (t: number): number => 1 - Math.pow(1 - t, 3);
