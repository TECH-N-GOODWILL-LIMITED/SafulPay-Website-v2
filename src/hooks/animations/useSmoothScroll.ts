import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { iosScrollTo, isIOS } from "../../utils/iosScroll";
import { gsapScrollTo } from "../../utils/gsapScrollTo";

export const useSmoothScroll = () => {
  const [activeSection, setActiveSection] = useState("");
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      scrollTween.current?.kill();
    };
  }, []);

  const isHomePage = location.pathname === "/";

  const isHeroSection =
    typeof window !== "undefined" &&
    isHomePage &&
    (window.scrollY < 100 || !activeSection || activeSection === "home");

  const scrollToSection = async (
    elementId: string,
    options: {
      offset?: number;
      autoKill?: boolean;
      forceUpdate?: boolean;
      onComplete?: () => void;
      onMenuClose?: () => void;
      navigateHome?: boolean;
      duration?: number; // Option to control duration
    } = {}
  ) => {
    // Kill any existing animation immediately
    scrollTween.current?.kill();
    options.onMenuClose?.();

    // Restore body scroll
    if (options.onMenuClose) {
      document.body.style.overflow = "";
      document.body.style.position = "";
    }

    // Immediate navigation if needed
    if (options.navigateHome && !isHomePage && elementId !== "contact-us") {
      navigate("/", { state: { scrollTo: elementId }, replace: true });
      return;
    }

    const element = document.getElementById(elementId);
    if (!element) return;

    const targetY =
      element.getBoundingClientRect().top +
      window.scrollY -
      (options.offset || 0);

    const completeHandler = () => {
      setActiveSection(elementId);
      options.onComplete?.();
      if (options.forceUpdate) window.history.replaceState({}, "");
    };

    if (isIOS()) {
      await iosScrollTo(targetY, completeHandler);
    } else {
      // Scroll between Hero section and Features
      const isHeroFeaturesNavigation =
        (elementId === "features" && isHeroSection) ||
        (elementId === "home" && activeSection === "features");

      scrollTween.current = gsapScrollTo(targetY, {
        autoKill: options.autoKill ?? true,
        onComplete: completeHandler,
        duration: isHeroFeaturesNavigation
          ? 1.8 // Consistent duration for hero<->features
          : options.duration || undefined,
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
