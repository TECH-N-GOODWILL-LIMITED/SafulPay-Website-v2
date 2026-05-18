"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { iosScrollTo, isIOS } from "@/utils/iosScroll";
import { gsapScrollTo } from "@/utils/gsapScrollTo";

const SECTION_OFFSETS: Record<string, number> = {
  bridge: 280,
};

export const getOffset = (id: string) => SECTION_OFFSETS[id] ?? 120;

export const useSmoothScroll = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolledDown, setScrolledDown] = useState(false);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setScrolledDown(window.scrollY > 80);
    const onScroll = () => setScrolledDown(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scrollTween.current?.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isHomePage = pathname === "/";

  // Show hero/"Open App" state only when genuinely at the top of the homepage
  const isHeroSection =
    isHomePage && !scrolledDown && (!activeSection || activeSection === "home");

  const scrollToSection = async (
    elementId: string,
    options: {
      offset?: number;
      autoKill?: boolean;
      forceUpdate?: boolean;
      onComplete?: () => void;
      onMenuClose?: () => void;
      duration?: number;
    } = {},
  ) => {
    scrollTween.current?.kill();
    options.onMenuClose?.();

    if (options.onMenuClose) {
      document.body.style.overflow = "";
      document.body.style.position = "";
    }

    const element = document.getElementById(elementId);
    if (!element) return;

    const targetY =
      element.getBoundingClientRect().top +
      window.scrollY -
      (options.offset ?? getOffset(elementId));

    const completeHandler = () => {
      setActiveSection(elementId);
      options.onComplete?.();
      // Always clean any hash from URL after scroll completes
      window.history.replaceState({}, "", window.location.pathname);
    };

    if (isIOS()) {
      await iosScrollTo(targetY, completeHandler);
    } else {
      const isBridgeFromHero =
        (elementId === "bridge" && isHeroSection) ||
        (elementId === "home" && activeSection === "bridge");

      scrollTween.current = gsapScrollTo(targetY, {
        autoKill: options.autoKill ?? true,
        onComplete: completeHandler,
        duration: isBridgeFromHero ? 1.8 : options.duration ?? undefined,
      });
    }
  };

  return {
    activeSection,
    setActiveSection,
    scrollToSection,
    isHomePage,
    isHeroSection,
  };
};