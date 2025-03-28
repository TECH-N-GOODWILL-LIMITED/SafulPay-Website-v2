import { useEffect } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;

    if (scrollTo) {
      const timer = setTimeout(() => {
        // If there's a scroll target, scroll to it
        const element = document.getElementById(scrollTo);
        if (element) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: `#${scrollTo}`, offsetY: 100 },
            ease: "power2.out",
          });
        }
        // Clear the state after scrolling
        window.history.replaceState({}, "");
      }, 100); // Small delay to ensure DOM is ready

      return () => clearTimeout(timer);
    } else {
      // Scroll to top for route changes
      gsap.to(window, {
        duration: 0.5,
        scrollTo: 0,
        ease: "power2.out",
      });
    }
  }, [location.pathname, location.state]);

  return null;
}
