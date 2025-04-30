import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSmoothScrollContext } from "../context/SmoothScrollProvider";
import { isIOS } from "../utils/iosScroll";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIconWhite from "/icon-menu-white.svg";
import safulpayTextIcon from "/safulpay-navbar-text-logo-icon.svg";
import safulPayLogo from "/safulpay-icon-white.svg";

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
  // NEW
  const menuRef = useRef<HTMLDivElement>(null);
  // const firstLinkRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { scrollToSection, activeSection, isHomePage } =
    useSmoothScrollContext();
  const vh = useViewportHeight();

  // Focus management for accessibility
  // useEffect(() => {
  //   if (isMenuOpen && firstLinkRef.current) {
  //     firstLinkRef.current.focus();
  //   }
  // }, [isMenuOpen]);

  // iOS-specific body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      // Additional iOS fix to prevent background scrolling
      if (isIOS()) {
        document.body.style.top = `-${window.scrollY}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
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

  const handleScrollLink = (url: string) => {
    const mobileOffset = 140;

    if (!isHomePage && (url === "contact-us" || url === "download")) {
      scrollToSection(url, {
        offset: mobileOffset,
        onMenuClose: () => setIsMenuOpen(false),
      });
      return;
    }

    if (isHomePage) {
      scrollToSection(url, {
        offset: mobileOffset,
        onMenuClose: () => setIsMenuOpen(false),
      });
      return;
    }

    navigate("/", { state: { scrollTo: url }, replace: true });
  };

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
                onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollLink("home");
                }}
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
                onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollLink("home");
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
                onClick={() => setIsMenuOpen(false)}
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
                  // ref={index === 0 ? firstLinkRef : null}
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
                  to={link.url}
                  end
                  onClick={(e) => {
                    if (location.pathname === link.url) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setIsMenuOpen(false);
                    }
                  }}
                  key={`mobile-route-${link.url}`}
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
                  handleScrollLink("download");
                  setIsMenuOpen(false);
                }}
                className="px-7.5 py-4.25 rounded-[10px] bg-secondary-color text-primary-color text-[20px] tracking-[-0.4px] font-semibold cursor-pointer"
              >
                Download App
              </button>
              <div className="flex justify-between items-center border-t border-white">
                {otherLinks.map((link, index) => (
                  <NavLink
                    to={link.url}
                    end
                    onClick={(e) => {
                      if (location.pathname === link.url) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMenuOpen(false);
                      }
                    }}
                    key={index}
                    aria-label={`Navigate to ${link.label}`}
                    className={({ isActive }) =>
                      `py-2.5 px-5 max-xl:px-3 text-[12px] font-extralight hover:text-secondary-color transition-colors cursor-pointer ${
                        isActive && "text-secondary-color font-bold"
                      }`
                    }
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
