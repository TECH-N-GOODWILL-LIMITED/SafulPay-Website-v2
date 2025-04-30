import { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { useSmoothScroll } from "../hooks/animations/useSmoothScroll";
import { useScrollTriggers } from "../hooks/animations/useScrollTriggers";

interface SmoothScrollContextType extends ReturnType<typeof useSmoothScroll> {
  isHeroSection: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(
  undefined
);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const scroll = useSmoothScroll();

  useScrollTriggers(scroll.isHomePage, scroll.setActiveSection);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const offset = hash === "features" ? 280 : 120;

    if (hash) {
      setTimeout(() => {
        scroll.scrollToSection(hash, {
          offset,
          forceUpdate: true,
          duration: 1.5, // Slower for hash navigation
        });
      }, 200);
    }
  }, [location.hash]);

  // Enhanced wheel handler for hero section
  useEffect(() => {
    if (!scroll.isHomePage) return;

    let isScrolling = false;
    let wheelTimeout: number;
    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY > 300 || isScrolling) return;
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      clearTimeout(wheelTimeout);
      isScrolling = true;

      if (e.deltaY > 0) {
        scroll.scrollToSection("features", {
          offset: 280,
          duration: 1.8, // Slower scroll from hero
        });
      }

      wheelTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1800); // Longer cooldown
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [scroll.isHomePage]);

  return (
    <SmoothScrollContext.Provider value={{ ...scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScrollContext = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScrollContext must be used within a SmoothScrollProvider"
    );
  }
  return context;
};
