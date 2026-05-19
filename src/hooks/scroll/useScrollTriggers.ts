"use client";

import { useEffect } from "react";

// ScrollTrigger is ~45KB. Dynamic-importing keeps it out of the initial
// bundle so it doesn't block FCP — the active-section highlighting just
// kicks in a frame or two after the scroll listeners would have otherwise.
export const useScrollTriggers = (
  isActive: boolean,
  setActiveSection: (id: string) => void,
) => {
  useEffect(() => {
    if (!isActive) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

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

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.scroll() === 0) setActiveSection("home");
        },
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [isActive, setActiveSection]);
};