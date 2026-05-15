"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useSmoothScroll, getOffset } from "@/hooks/scroll/useSmoothScroll";
import { useScrollTriggers } from "@/hooks/scroll/useScrollTriggers";

interface SmoothScrollContextType extends ReturnType<typeof useSmoothScroll> {
  isHeroSection: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(
  undefined,
);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const [hashValue, setHashValue] = useState("");
  const scroll = useSmoothScroll();

  useScrollTriggers(scroll.isHomePage, scroll.setActiveSection);

  // Handle URL hashes on mount and change — clean hash from URL after scroll
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setHashValue(hash);
      // Remove hash from URL immediately so it never lingers
      window.history.replaceState({}, "", window.location.pathname);
    }

    const handleHashChange = () => {
      const h = window.location.hash.replace("#", "");
      if (h) {
        window.history.replaceState({}, "", window.location.pathname);
        setHashValue(h);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll to captured hash section
  useEffect(() => {
    if (!hashValue) return;
    const id = hashValue;
    setHashValue("");

    setTimeout(() => {
      scroll.scrollToSection(id, {
        offset: getOffset(id),
        duration: 1.5,
      });
    }, 300);
  }, [hashValue]);

  // Handle cross-page scroll requests stored in sessionStorage
  useEffect(() => {
    if (!scroll.isHomePage) return;
    const pending = sessionStorage.getItem("pendingScroll");
    if (!pending) return;
    sessionStorage.removeItem("pendingScroll");

    setTimeout(() => {
      scroll.scrollToSection(pending, {
        offset: getOffset(pending),
        duration: 1.5,
      });
    }, 600);
  }, [scroll.isHomePage]);

  // Wheel-to-bridge from hero
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
        scroll.scrollToSection("bridge", { offset: 280, duration: 1.8 });
      }

      wheelTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1800);
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