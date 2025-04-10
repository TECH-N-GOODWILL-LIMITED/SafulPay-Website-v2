import { footerData, navLinks } from "../data/appContent";
import { companyData } from "../data/companyData";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [parent] = useAutoAnimate();
  const { company } = companyData;
  const { otherLinks } = footerData;

  return (
    <header
      ref={parent}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-99"
    >
      <DesktopNav
        company={company}
        navLinks={navLinks}
        setIsMenuOpen={setIsMenuOpen}
      />
      <MobileNav
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
