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
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = calculateIOSDuration(distance);
    let startTime: number | null = null;

    const scrollStep = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = cubicEaseOut(progress);

      window.scrollTo(0, startY + distance * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        onComplete?.();
        resolve();
      }
    };

    Promise.resolve().then(() => {
      window.requestAnimationFrame(scrollStep);
    });
  });
};

const calculateIOSDuration = (distance: number): number => {
  const absoluteDistance = Math.abs(distance);
  return Math.min(Math.max(absoluteDistance / 800, 0.3), 1.2) * 2000;
};

const cubicEaseOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};
