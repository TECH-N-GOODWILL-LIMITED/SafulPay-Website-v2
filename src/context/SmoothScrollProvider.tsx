import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SmoothScrollContextType {
  isHomePage: boolean;
  isHeroSection: boolean;
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (
    sectionId: string,
    offset?: number,
    autoKill?: boolean,
    forceUpdate?: boolean
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(
  undefined
);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const scrollToRef = useRef(
    (location.state as { scrollTo?: string })?.scrollTo
  );

  const isHomePage = location.pathname === "/";

  const isHeroSection =
    typeof window !== "undefined" &&
    isHomePage &&
    (window.scrollY < 100 ||
      !activeSection ||
      activeSection === "home" ||
      activeSection === "");

  const scrollToSection = (
    sectionId: string,
    offset = 0,
    autoKill = true,
    forceUpdate = false
  ) => {
    scrollTween.current?.kill();

    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const targetY =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const currentY = window.scrollY;
    const distance = Math.abs(targetY - currentY);

    const isBetweenHeroAndFeatures =
      (isHeroSection && sectionId === "features") ||
      (activeSection === "features" && isHeroSection);

    // Speed-based duration: scrolls at ~1200px per second (adjust speed factor if needed)
    const speed = 1200;
    const duration = isBetweenHeroAndFeatures
      ? 1.2
      : Math.min(distance / speed, 2.4); // cap duration to 2.4s max

    scrollTween.current = gsap.to(window, {
      duration,
      scrollTo: { y: targetY, autoKill },
      ease: "power2.inOut",
      onComplete: () => {
        setActiveSection(sectionId);
        if (forceUpdate) window.history.replaceState({}, "");
      },
      onInterrupt: () => (scrollTween.current = null),
    });
  };

  useEffect(() => {
    // Reset when navigating away from home
    if (!isHomePage) {
      setActiveSection("");
    }
  }, [location.pathname, isHomePage]);

  //   Refresh ScrollTrigger on Resize / Orientation Change
  useEffect(() => {
    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  useEffect(() => {
    const scrollTarget = scrollToRef.current || location.hash?.replace("#", "");

    if (scrollTarget) {
      scrollToRef.current = undefined;

      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          scrollToSection(scrollTarget, 120, true, true);
        }
      }, 200);
    }
  }, [location.hash]);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });

    // Handle home section (when scrolled to top)
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.scroll() === 0) setActiveSection("home");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY > 300 || isScrolling) return;
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      isScrolling = true;

      if (e.deltaY > 0) {
        scrollToSection("features", 280, false);
      }

      setTimeout(() => (isScrolling = false), 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isHomePage]);

  return (
    <SmoothScrollContext.Provider
      value={{
        isHomePage,
        isHeroSection,
        activeSection,
        setActiveSection,
        scrollToSection,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScroll must be used within a SmoothScrollProvider"
    );
  }
  return context;
};
