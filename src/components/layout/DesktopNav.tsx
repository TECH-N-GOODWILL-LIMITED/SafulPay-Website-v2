"use client";

import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import { navItems, downloadAction } from "@/data/navigation";
import NavDropdown from "@/components/layout/NavDropdown";
import menuIcon from "@/assets/images/icons/icon-menu-green.svg";

interface CompanyData {
  name: string;
  greenLogo: string | StaticImageData;
}

interface DesktopNavProps {
  company: CompanyData;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Bank-style top bar: logo links Home, Home is the explicit first item, the four
 * audience doors and Company open dropdowns, and Download App is the single
 * right-aligned primary action (guide §3.1).
 */
function DesktopNav({ company, setIsMenuOpen }: DesktopNavProps) {
  const pathname = usePathname();
  const vh = useViewportHeight();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  // Any route change closes whatever was open.
  useEffect(() => setOpenLabel(null), [pathname]);

  const isCurrent = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  // The bar carries white text over whatever the page puts behind it: the dark
  // hero panels on the audience and company pages, but also plain white content
  // once the home page scrolls. At the previous 30% fill the white washed out
  // over light content, so the fill is strong enough to guarantee contrast
  // everywhere while keeping the blur.
  return (
    <div
      className="mx-2.5 md:mx-10 p-3 max-md:p-3 mt-5 max-w-container-width w-full bg-primary-color/85 backdrop-blur-md rounded-[20px] flex justify-between items-center text-sm font-semibold text-white transition-colors duration-500"
      style={{ marginTop: vh < 600 ? "12px" : "" }}
    >
      <Link
        href="/"
        aria-label="Go to homepage"
        className="flex gap-2.5 items-center max-xl:gap-1 cursor-pointer shrink-0"
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
        {/* Gradient starts at white, not primary-color: the audience and company
            heroes put a primary-color panel directly behind this bar, and a
            primary-color glyph on it is invisible. */}
        <p className="secondary-heading bg-linear-to-r from-white to-secondary-color bg-clip-text text-transparent">
          {company.name}
        </p>
      </Link>

      <nav
        className="max-lg:hidden text-base flex items-center"
        aria-label="Main navigation"
      >
        {navItems.map((item) =>
          item.children ? (
            <NavDropdown
              key={item.label}
              item={item}
              isOpen={openLabel === item.label}
              onOpen={() => setOpenLabel(item.label)}
              onClose={() =>
                setOpenLabel((current) =>
                  current === item.label ? null : current,
                )
              }
              isActive={isCurrent(item.url)}
            />
          ) : (
            <Link
              key={item.label}
              href={item.url}
              aria-current={isCurrent(item.url) ? "page" : undefined}
              className={`py-1.5 px-4 max-xl:px-2.5 cursor-pointer transition-colors hover:text-secondary-color ${
                isCurrent(item.url) ? "text-secondary-color" : ""
              }`}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <Link
        href={downloadAction.url}
        className="cursor-pointer px-5 py-2.5 rounded-[10px] bg-secondary-color text-primary-color text-base tracking-[-0.4px] font-semibold max-lg:hidden hover:brightness-95 hover:text-text-color transition-all shrink-0"
      >
        {downloadAction.label}
      </Link>

      <div className="hidden max-lg:flex items-center gap-2.5">
        {/* Stays outside the hamburger at every width (guide §3.3). */}
        <Link
          href={downloadAction.url}
          className="px-4 py-2 max-sm:px-3 max-sm:py-1.5 rounded-[10px] bg-secondary-color text-primary-color text-sm max-sm:text-xs tracking-[-0.4px] font-semibold hover:brightness-95 transition-all whitespace-nowrap"
        >
          {downloadAction.label}
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer bg-none border-none"
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
    </div>
  );
}

export default DesktopNav;
