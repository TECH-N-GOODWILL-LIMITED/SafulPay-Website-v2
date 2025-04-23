import { NavLink, useNavigate } from "react-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIconWhite from "/icon-menu-white.svg";
import safulpayTextIcon from "/safulpay-navbar-text-logo-icon.svg";
import safulPayLogo from "/safulpay-icon-white.svg";
import { useEffect, useRef } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import { iosScrollTo, isIOSChrome } from "../utils/iosScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

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
  // Close menu when clicking outside

  // const handleScrollLink = (url: string) => {
  //   document.body.style.overflow = "";
  //   document.body.style.touchAction = "";
  //   setIsMenuOpen(false);

  //   if (!isHomePage && url !== "contact-us") {
  //     navigate("/", {
  //       state: { scrollTo: url },
  //       replace: true,
  //     });
  //     return;
  //   }

  //   const offset = url === "features" ? 280 : 120;

  //   setTimeout(() => {
  //     scrollToSection(url, offset);
  //   }, 300);
  // };

  // NEW
  const vh = useViewportHeight();
  const { isHomePage, activeSection, scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLButtonElement>(null);

  // Enhanced scroll handler with iOS Chrome detection
  const handleScrollLink = async (url: string) => {
    setIsMenuOpen(false);

    // Immediately restore scroll capability
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.touchAction = "";

    if (!isHomePage && url !== "contact-us") {
      await navigate("/", { replace: true });
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (isIOSChrome()) {
      // Use our custom iOS Chrome scroll implementation
      await iosScrollTo(url, 140);
    } else {
      // Use native smooth scroll for other browsers
      const element = document.getElementById(url);
      if (element) {
        const targetY =
          element.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }
    }
  };

  // Focus management for accessibility
  useEffect(() => {
    if (isMenuOpen && firstLinkRef.current) {
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    }
  }, [isMenuOpen]);

  // Body scroll lock that works with iOS Chrome
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.touchAction = "";

      // iOS Chrome needs this to prevent scroll position jumps
      if (isIOSChrome()) {
        setTimeout(() => {
          window.scrollTo(0, window.scrollY);
        }, 10);
      }
    }
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen, setIsMenuOpen]);

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <>
      {isMenuOpen && (
        <>
          <div
            className="fixed h-screen w-full bg-black/40 backdrop-blur-lg z-5 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="max-w-75 h-[100dvh] w-full p-5 pt-19.5 max-md:pt-11 rounded-l-[20px] bg-primary-color fixed right-0 font-outfit flex flex-col justify-between text-white lg:hidden z-10"
            style={{
              paddingTop: vh < 600 ? "40px" : "",
            }}
          >
            <div className="flex justify-between items-start">
              <img
                onClick={() => handleScrollLink("home")}
                src={safulpayTextIcon}
                alt={`${companyName} text logo`}
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
                onClick={() => handleScrollLink("home")}
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
                onClick={() => setIsMenuOpen(false)}
                ref={firstLinkRef}
                aria-label={isMenuOpen && "Close menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="cursor-pointer"
              >
                <img
                  src={menuIconWhite}
                  alt="Close menu icon"
                  className="w-7.5"
                />
              </button>
            </div>
            <nav
              aria-label="Mobile navigation"
              role="menu"
              className="flex flex-col items-start mb-0 m:mb-11.25 "
            >
              {scrollLinks.map((link) => (
                <button
                  key={`mobile-scroll-${link.url}`}
                  onClick={() => handleScrollLink(link.url)}
                  role="menuitem"
                  className={`px-5 py-3 text-lg font-semibold tracking-[-0.28px] cursor-pointer hover:text-secondary-color focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-secondary-color transition-colors ${
                    activeSection === link.url &&
                    "text-secondary-color font-bold"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {routeLinks.map((link) => (
                <NavLink
                  key={`mobile-route-${link.url}`}
                  to={link.url}
                  role="menuitem"
                  className={({ isActive }) =>
                    `tracking-[-0.28px] cursor-pointer px-5 py-3 text-lg font-semibold hover:text-secondary-color focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-secondary-color${
                      isActive ? "text-secondary-color" : ""
                    }`
                  }
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
