// utils/iosScroll.ts
export const iosScrollTo = (elementId: string, offset = 0): Promise<void> => {
  return new Promise((resolve) => {
    const element = document.getElementById(elementId);
    if (!element) {
      resolve();
      return;
    }

    // iOS-specific smooth scroll implementation
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + startY - offset;
    const distance = targetY - startY;
    const duration = 600; // milliseconds
    let startTime: number | null = null;

    const scrollStep = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic easing for smoother motion
      const easeProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        resolve();
      }
    };

    window.requestAnimationFrame(scrollStep);
  });
};

// Detect iOS Chrome specifically
export const isIOSChrome = (): boolean => {
  return /CriOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
