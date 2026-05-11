"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
// import { usePathname } from "next/navigation";
import { useSmoothScroll } from "../hooks/scroll/useSmoothScroll";
import { useScrollTriggers } from "../hooks/scroll/useScrollTriggers";

interface SmoothScrollContextType extends ReturnType<typeof useSmoothScroll> {
  isHeroSection: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(
  undefined,
);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  // const pathname = usePathname();
  const [hashValue, setHashValue] = useState("");

  useEffect(() => {
    setHashValue(window.location.hash);
    const handleHashChange = () => setHashValue(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scroll = useSmoothScroll();

  useScrollTriggers(scroll.isHomePage, scroll.setActiveSection);

  useEffect(() => {
    const hash = hashValue.replace("#", "");
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
  }, [hashValue]);

  // Enhanced wheel handler for hero section
  useEffect(() => {
    if (!scroll.isHomePage) return;

    let isScrolling = false;
    let wheelTimeout: ReturnType<typeof setTimeout>;
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
      "useSmoothScrollContext must be used within a SmoothScrollProvider",
    );
  }
  return context;
};
