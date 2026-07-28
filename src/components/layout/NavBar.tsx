"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { companyData } from "@/data/companyData";
import { footerData } from "@/data/appContent";
import MobileNav from "@/components/layout/MobileNav";
import DesktopNav from "@/components/layout/DesktopNav";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const { company } = companyData;
  const { otherLinks } = footerData;

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (mobileNavRef.current) {
      if (isFirstRender.current) {
        // Set initial state without animation
        gsap.set(mobileNavRef.current, { x: isMenuOpen ? 0 : "100%" });
        isFirstRender.current = false;
        return;
      }

      if (isMenuOpen) {
        // Animate slide in from right
        gsap.to(mobileNavRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Animate slide out to right
        gsap.to(mobileNavRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power2.in",
        });
      }
    }

    return () => {
      if (mobileNavRef.current) {
        gsap.killTweensOf(mobileNavRef.current);
      }
    };
  }, [isMenuOpen]);

  return (
    <header
      role="banner"
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-50"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-4 py-2 z-50"
      >
        Skip to main content
      </a>
      <DesktopNav company={company} setIsMenuOpen={setIsMenuOpen} />
      <MobileNav
        ref={mobileNavRef}
        companyName={company.name}
        otherLinks={otherLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}

export default NavBar;
