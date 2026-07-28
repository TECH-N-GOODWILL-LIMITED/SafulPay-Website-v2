"use client";

import { useRouter, usePathname } from "next/navigation";
import { useSmoothScrollContext } from "@/context/SmoothScrollProvider";
import { getOffset } from "@/hooks/scroll/useSmoothScroll";

/**
 * Navigating to a section that may live on another route.
 *
 * When the target section is on the current page we scroll straight to it.
 * Otherwise the section id is handed to `sessionStorage` and the router pushes
 * a clean URL — `SmoothScrollProvider` picks `pendingScroll` up after the route
 * mounts. The URL never carries a `#hash` either way.
 *
 * Shared by DesktopNav, MobileNav and the footer so the hand-off behaves
 * identically everywhere.
 */
export const useSectionNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollToSection } = useSmoothScrollContext();

  const goToSection = (url: string, section?: string) => {
    if (!section) {
      if (pathname === url) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.push(url);
      return;
    }

    if (pathname === url) {
      scrollToSection(section, { offset: getOffset(section) });
      return;
    }

    sessionStorage.setItem("pendingScroll", section);
    router.push(url);
  };

  return { goToSection, pathname };
};
