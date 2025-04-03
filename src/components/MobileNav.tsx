import { NavLink, useNavigate } from "react-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIconWhite from "/icon-menu-white.svg";
import safulpayTextIcon from "/safulpay-navbar-text-logo-icon.svg";
import safulPayLogo from "/safulpay-icon-white.svg";
import { useEffect, useRef } from "react";

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
  const navigate = useNavigate();

  const vh = useViewportHeight();
  const { isHomePage, activeSection, setActiveSection, scrollToSection } =
    useSmoothScroll();

  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const handleScrollLink = (link: NavLink) => {
    if (!isHomePage && link.url !== "contact-us") {
      setActiveSection(link.url);
      navigate("/", { state: { scrollTo: link.url }, replace: true });
    } else {
      const offset = link.url === "features" ? 280 : 120;
      scrollToSection(link.url, offset);
      setIsMenuOpen(false);
    }
  };

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <>
      {isMenuOpen && (
        <>
          <div
            className="fixed h-screen w-full bg-black opacity-40 backdrop-blur-[40px] z-2 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="max-w-75 h-screen w-full p-5 pt-19.5 rounded-l-[20px] bg-primary-color fixed right-0 font-outfit flex flex-col justify-between text-white lg:hidden z-10"
            style={{
              paddingTop: vh < 600 ? "40px" : "",
            }}
          >
            <div className="flex justify-between items-start">
              <img
                src={safulpayTextIcon}
                alt={`${companyName} text logo`}
                onClick={() => scrollToSection("home")}
                className="h-42.5 px-3.25 py-1.25 cursor-pointer max-md:h-auto"
                style={{
                  maxHeight: vh < 760 ? "100px" : "",
                  height: "100%",
                  display: vh < 680 ? "none" : "",
                }}
              />

              <div
                className="flex-center"
                style={{
                  display: vh > 680 ? "none" : "",
                }}
              >
                <img
                  src={safulPayLogo}
                  alt={`${companyName} logo`}
                  aria-hidden="true"
                  className="w-15 px-3.25 py-1.25 max-xl:w-9 max-xl:px-1 max-lg:w-12.5 max-lg:px-2.5"
                  style={{
                    width: vh < 600 ? "44px" : "",
                  }}
                />
                <p className="secondary-heading text-white tracking-[-0.9px]">
                  {companyName}
                </p>
              </div>

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
              className="flex flex-col items-start mb-0 m:mb-11.25 "
              aria-label="Mobile navigation"
            >
              {scrollLinks.map((link) => (
                <button
                  onClick={() => handleScrollLink(link)}
                  className={`px-5 py-3 text-lg font-semibold tracking-[-0.28px] cursor-pointer hover:text-secondary-color focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-secondary-color transition-colors ${
                    activeSection === link.url &&
                    "text-secondary-color font-bold"
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
            <div
              className="flex flex-col items-start gap-7.5"
              style={{
                gap: vh < 550 ? "20px" : "",
              }}
            >
              <button
                onClick={() => {
                  scrollToSection("download");
                  setIsMenuOpen(false);
                }}
                className="px-7.5 py-4.25 rounded-[10px] bg-secondary-color text-primary-color text-[20px] tracking-[-0.4px] font-semibold cursor-pointer"
              >
                Download App
              </button>
              <div className="flex justify-between items-center border-t border-white">
                {otherLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.url}
                    className={({ isActive }) =>
                      `py-2.5 px-5 max-xl:px-3 text-[12px] font-extralight hover:text-secondary-color transition-colors cursor-pointer ${
                        isActive && "text-secondary-color font-bold"
                      }`
                    }
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MobileNav;
