import { useEffect } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll-to-hash from navigation state
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;

    if (scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          const offset = scrollTo === "features" ? 280 : 120;
          const targetY =
            element.getBoundingClientRect().top + window.scrollY - offset;

          gsap.to(window, {
            duration: 1,
            scrollTo: targetY,
            ease: "power2.out",
            onComplete: () => {
              window.history.replaceState({}, "");
            },
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // Scroll to top for regular route changes
    if (!location.hash) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: 0,
        ease: "power2.out",
      });
    }
  }, [location.pathname, location.state, location.hash]);

  return null;
}
