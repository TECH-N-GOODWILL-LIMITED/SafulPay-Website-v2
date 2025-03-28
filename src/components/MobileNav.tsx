import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import menuIconWhite from "/icon-menu-white.svg";
import safulpayTextIcon from "/safulpay-navbar-text-logo-icon.svg";

gsap.registerPlugin(ScrollToPlugin);

interface NavLink {
  url: string;
  label: string;
  type: "scroll" | "route";
}

interface OtherLinks {
  url: string;
  label: string;
}

interface MobileNavProps {
  otherLinks: OtherLinks[];
  navLinks: NavLink[];
  companyName: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({
  otherLinks,
  navLinks,
  companyName,
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      if (link.type === "scroll") {
        const element = document.getElementById(link.url);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: `#${sectionId}`, offsetY: 80, autoKill: true },
        ease: "power3.inOut",
        onComplete: () => setActiveSection(sectionId),
      });
    }
  };

  const handleScrollLink = (link: NavLink) => {
    if (location.pathname !== "/") {
      // Navigate to home page with scroll target in state
      navigate("/", {
        state: { scrollTo: link.url },
        replace: true,
      });
    } else {
      // Already on home page - just scroll
      scrollToSection(link.url);
    }
  };

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <>
      {isMenuOpen && (
        <div className="max-w-75 w-full p-5 pt-19.5 rounded-l-[20px] bg-primary-color fixed right-0 font-outfit flex flex-col gap-13.75  text-white lg:hidden">
          <div className="flex justify-between items-start">
            <img
              src={safulpayTextIcon}
              alt={`${companyName} text logo`}
              onClick={() => scrollToSection("home")}
              className="h-45.25 px-3.25 py-1.25 cursor-pointer"
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="cursor-pointer"
            >
              <img
                src={menuIconWhite}
                alt="hamburger menu icon"
                className="w-7.5"
              />
            </button>
          </div>
          <nav
            className="flex flex-col items-start mb-11.25"
            aria-label="Mobile navigation"
          >
            {scrollLinks.map((link) => (
              <button
                onClick={() => handleScrollLink(link)}
                className={`px-5 py-3 text-lg font-semibold tracking-[-0.28px] cursor-pointer hover:text-secondary-color focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-secondary-color transition-colors ${
                  activeSection === link.url && "text-secondary-color font-bold"
                }`}
                key={`mobile-scroll-${link.url}`}
              >
                {link.label}
              </button>
            ))}

            {routeLinks.map((link) => (
              <NavLink
                to={link.url}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `tracking-[-0.28px] cursor-pointer px-5 py-3 text-lg font-semibold hover:text-secondary-color focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-secondary-color${
                    isActive ? "text-secondary-color" : ""
                  }`
                }
                key={`mobile-route-${link.url}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => {
              scrollToSection("download");
              setIsMenuOpen(false);
            }}
            className="px-7.5 py-4.25 self-startz rounded-[10px] bg-secondary-color text-primary-color text-[20px] tracking-[-0.4px] font-semibold mb-[-25px] cursor-pointer"
          >
            Download App
          </button>
          <div className="flex justify-between items-center  border-t border-white">
            {otherLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="py-2.5 px-5 font-extralight text-[12px] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
