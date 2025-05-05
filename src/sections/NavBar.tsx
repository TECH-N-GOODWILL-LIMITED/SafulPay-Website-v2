import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import { companyData } from "../data/companyData";
import { footerData, navLinks } from "../data/appContent";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const { company } = companyData;
  const { otherLinks } = footerData;

  useEffect(() => {
    if (mobileNavRef.current) {
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
  }, [isMenuOpen]);

  return (
    <header
      role="banner"
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-99"
    >
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-4 py-2 z-50"
      >
        Skip to main content
      </a>
      <DesktopNav
        company={company}
        navLinks={navLinks}
        setIsMenuOpen={setIsMenuOpen}
      />
      <MobileNav
        ref={mobileNavRef}
        companyName={company.name}
        navLinks={navLinks}
        otherLinks={otherLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}

export default NavBar;
