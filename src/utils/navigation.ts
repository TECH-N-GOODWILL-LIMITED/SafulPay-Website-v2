import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (sectionId: string, offsetY = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${sectionId}`, offsetY, autoKill: true },
      ease: "power3.inOut",
    });
  }
};
