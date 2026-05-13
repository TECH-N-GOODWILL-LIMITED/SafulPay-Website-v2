"use client";

import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useSmoothScrollContext } from "../context/SmoothScrollProvider";
import { useViewportHeight } from "../hooks/useViewportHeight";
import ray from "../assets/images/open-app-ray.svg";
import menuIcon from "../assets/images/icon-menu-green.svg";

interface NavLink {
  url: string;
  label: string;
  type: "scroll" | "route";
}

interface CompanyData {
  name: string;
  greenLogo: string | StaticImageData;
}

interface DesktopNavProps {
  company: CompanyData;
  navLinks: NavLink[];
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopNav({ company, navLinks, setIsMenuOpen }: DesktopNavProps) {
  const router = useRouter();
  const pathname = usePathname();
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
      router.replace("/#" + url);
    }
  };

  const routeLinks = navLinks.filter((link) => link.type === "route");
  const scrollLinks = navLinks.filter((link) => link.type === "scroll");

  return (
    <div
      className="mx-2.5 md:mx-10 p-3 max-md:p-3 mt-5 max-w-container-width w-full bg-primary-shade-30 backdrop-blur-md rounded-[20px] flex justify-between items-center text-sm font-semibold text-white transition-colors duration-500"
      style={{
        marginTop: vh < 600 ? "12px" : "",
      }}
    >
      <Link
        href="/"
        onClick={(e) => {
          if (isHomePage) {
            e.preventDefault();
            handleScrollLink("home");
          }
        }}
        aria-label="Go to homepage"
        className="flex gap-2.5 items-center max-xl:gap-1 cursor-pointer"
      >
        <Image
          src={company.greenLogo}
          alt={`${company.name} logo`}
          width={40}
          height={40}
          unoptimized
          className="w-10 px-2 py-1 max-md:w-10 max-xl:w-9 max-lg:w-11 h-auto"
          aria-hidden="true"
        />
        <p className="secondary-heading bg-linear-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
          {company.name}
        </p>
      </Link>
      <nav className="max-lg:hidden text-base" aria-label="Main navigation">
        {!isHeroSection ? (
          <>
            {scrollLinks.map((link) => (
              <button
                key={`scroll-${link.url}`}
                onClick={() => handleScrollLink(link.url)}
                className={`cursor-pointer py-1.5 px-4 max-xl:px-3 transition-all hover:cursor-pointer hover:scale-105 hover:text-secondary-color ${
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

            {routeLinks.map((link) => {
              const isActive = pathname === link.url;
              return (
                <Link
                  href={link.url}
                  onClick={(e) => {
                    if (pathname === link.url) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  key={`route-${link.url}`}
                  aria-label={`Navigate to ${link.label}`}
                  className={`cursor-pointer py-1.5 px-4 max-xl:px-3 transition-all hover:scale-105 hover:text-secondary-color ${
                    isActive && "text-secondary-color font-bold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </>
        ) : (
          <button
            onClick={() => handleScrollLink("features")}
            aria-label="Open Application"
            className="cursor-pointer transition-all hover:cursor-pointer hover:scale-105 hover:text-secondary-color"
          >
            <span>Open App</span>
            <Image
              src={ray}
              alt=""
              aria-hidden="true"
              role="presentation"
              unoptimized
              className="cursor-pointer animate-ping absolute h-full w-auto transform top-0 left-1/2 -translate-x-1/2"
            />
          </button>
        )}
      </nav>
      <button
        onClick={() => handleScrollLink("download")}
        className="cursor-pointer px-5 py-2.5 rounded-[10px] bg-secondary-color text-primary-color text-base tracking-[-0.4px] font-semibold max-lg:hidden hover:brightness-95 hover:text-text-color transition-all"
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
        <Image
          src={menuIcon}
          alt={`${company.name} menu`}
          className="w-7.5 max-md:w-6"
          width={24}
          height={24}
          aria-hidden="true"
          unoptimized
        />
      </button>
    </div>
  );
}

export default DesktopNav;
