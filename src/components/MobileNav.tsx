import { NavLink, useNavigate } from "react-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIconWhite from "/icon-menu-white.svg";
import safulpayTextIcon from "/safulpay-navbar-text-logo-icon.svg";
import safulPayLogo from "/safulpay-icon-white.svg";
import { useEffect, useRef } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";

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
  const navigate = useNavigate();

  const vh = useViewportHeight();
  const { isHomePage, activeSection, scrollToSection } = useSmoothScroll();

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

  // checks orientation of mobile devices
  useEffect(() => {
    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

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

  const handleScrollLink = (url: string) => {
    setIsMenuOpen(false);

    // Restore body scroll manually
    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    // Navigate if you're not on homepage
    if (!isHomePage && url !== "contact-us") {
      navigate("/", {
        state: { scrollTo: url },
        replace: true,
      });
      return;
    }

    // Delay scroll slightly using RAF chaining instead of setTimeout
    const offset = url === "features" ? 280 : 120;

    // Give DOM 1–2 frames to reflow, then scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(url, offset);
      });
    });
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
                src={safulpayTextIcon}
                alt={`${companyName} text logo`}
                className="h-42.5 px-3.25 py-1.25 cursor-pointer max-md:h-auto"
                style={{
                  maxHeight: vh < 760 ? "100px" : "",
                  height: "100%",
                  display: vh < 680 ? "none" : "",
                }}
                onClick={() => handleScrollLink("home")}
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
                aria-label={isMenuOpen && "Close menu"}
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
                  onClick={() => handleScrollLink(link.url)}
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
