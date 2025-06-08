import { Link, NavLink, useNavigate } from "react-router";
import { useSmoothScrollContext } from "../context/SmoothScrollProvider";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIcon from "/icon-menu-green.svg";
import ray from "../assets/open-app-ray.svg";

interface NavLink {
  url: string;
  label: string;
  type: "scroll" | "route";
}

interface CompanyData {
  name: string;
  greenLogo: string;
}

interface DesktopNavProps {
  company: CompanyData;
  navLinks: NavLink[];
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopNav({ company, navLinks, setIsMenuOpen }: DesktopNavProps) {
  const navigate = useNavigate();
  const vh = useViewportHeight();
  const { activeSection, scrollToSection, isHeroSection, isHomePage } =
    useSmoothScrollContext();

  const handleScrollLink = (url: string) => {
    const offset = url === "features" ? 280 : 120;
    const shouldScroll =
      isHomePage ||
      (!isHomePage && (url === "contact-us" || url === "download"));

    if (shouldScroll) {
      scrollToSection(url, { offset });
    } else {
      navigate("/", { state: { scrollTo: url }, replace: true });
    }
  };

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <div
      className="mx-2.25 max-lg:mx-5 p-4 max-md:p-3 mt-5 max-w-container-width w-full bg-primary-shade-30 backdrop-blur-[10px] rounded-[20px] flex justify-between items-center small-text font-semibold text-white"
      style={{
        marginTop: vh < 600 ? "12px" : "",
      }}
    >
      <Link
        to="/"
        onClick={(e) => {
          if (isHomePage) {
            e.preventDefault();
            handleScrollLink("home");
          }
        }}
        aria-label="Go to homepage"
        className="flex gap-2.5 items-center max-xl:gap-1 cursor-pointer"
      >
        <img
          src={company.greenLogo}
          alt={`${company.name} logo`}
          aria-hidden="true"
          className="w-15 px-3 py-1.25 max-md:w-10 max-md:py-0 max-xl:w-9 max-xl:px-1 max-lg:w-12.5 max-lg:px-2.5"
        />
        <p className="secondary-heading bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
          {company.name}
        </p>
      </Link>
      <nav className={`max-lg:hidden`} aria-label="Main navigation">
        {!isHeroSection ? (
          <>
            {scrollLinks.map((link) => (
              <button
                key={`scroll-${link.url}`}
                onClick={() => handleScrollLink(link.url)}
                className={`cursor-pointer py-2.5 px-5 max-xl:px-3 transition-all hover:cursor-pointer hover:scale-105 hover:text-secondary-color ${
                  activeSection === link.url && "text-secondary-color font-bold"
                }`}
                aria-label={`Scroll to ${link.label} section`}
                aria-current={
                  activeSection === link.url ? "location" : undefined
                }
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
                  }
                }}
                key={`route-${link.url}`}
                aria-label={`Navigate to ${link.label}`}
                className={({ isActive }) =>
                  `cursor-pointer py-2.5 px-5 max-xl:px-3 transition-all hover:scale-105 hover:text-secondary-color ${
                    isActive && "text-secondary-color font-bold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </>
        ) : (
          <button
            onClick={() => handleScrollLink("features")}
            aria-label="Open Application"
            className="cursor-pointer transition-all hover:cursor-pointer hover:scale-105 hover:text-secondary-color"
          >
            <span>Open App</span>
            <img
              src={ray}
              alt=""
              aria-hidden="true"
              role="presentation"
              className="cursor-pointer animate-ping absolute h-full transform top-0 left-1/2 -translate-x-1/2"
            />
          </button>
        )}
      </nav>
      <button
        onClick={() => handleScrollLink("download")}
        className="cursor-pointer px-7.5 py-4.25 rounded-[10px] bg-secondary-color text-primary-color text-[20px] tracking-[-0.4px] font-semibold max-xl:p-2.75 max-lg:hidden"
        aria-label="Scroll to download section"
      >
        Download App
      </button>

      {/* MENU BUTTON */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="cursor-pointer bg-none border-none hidden max-lg:block"
        aria-label="Open mobile menu"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <img
          src={menuIcon}
          alt={`${company.name} menu`}
          className="w-7.5 max-md:w-6"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default DesktopNav;
