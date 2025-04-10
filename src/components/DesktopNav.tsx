import { Link, NavLink, useNavigate } from "react-router";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import { useViewportHeight } from "../hooks/useViewportHeight";
import menuIcon from "/icon-menu-green.svg";

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

  const {
    isHomePage,
    isHeroSection,
    activeSection,
    setActiveSection,
    scrollToSection,
  } = useSmoothScroll();

  const handleScrollLink = (url: string) => {
    if (!isHomePage && url !== "contact-us") {
      setActiveSection(url);
      navigate("/", { state: { scrollTo: url }, replace: true });
    }

    const offset = url === "features" ? 280 : 120;
    scrollToSection(url, offset);
  };

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <div
      className="mx-2.25 max-lg:mx-5 p-4 mt-5 max-w-container-width w-full bg-primary-shade-30 backdrop-blur-[10px]  rounded-[20px] flex justify-between items-center small-text font-semibold text-white"
      style={{
        marginTop: vh < 600 ? "16px" : "",
      }}
    >
      <Link
        to="/"
        onClick={() => scrollToSection("home")}
        aria-label="Go to homepage"
        className="flex gap-2.5 items-center max-xl:gap-1 cursor-pointer"
      >
        <img
          src={company.greenLogo}
          alt={`${company.name} logo`}
          aria-hidden="true"
          className="w-15 px-3 py-1.25 max-xl:w-9 max-xl:px-1 max-lg:w-12.5 max-lg:px-2.5"
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
                className={`cursor-pointer hover:cursor-pointer px-5 max-xl:px-3 hover:text-secondary-color transition-colors ${
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
                key={`route-${link.url}`}
                to={link.url}
                className={({ isActive }) =>
                  `px-5 max-xl:px-3 hover:text-secondary-color transition-colors cursor-pointer hover:cursor-pointer ${
                    isActive && "text-secondary-color font-bold"
                  }`
                }
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </NavLink>
            ))}
          </>
        ) : (
          <button
            onClick={() => handleScrollLink("features")}
            className="cursor-pointer hover:cursor-pointer"
          >
            Open App
          </button>
        )}
      </nav>
      <button
        onClick={() => scrollToSection("download", 120)}
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
          className="w-7.5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default DesktopNav;
