"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { navItems, downloadAction } from "@/data/navigation";
import { useSectionNav } from "@/hooks/useSectionNav";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import menuIconWhite from "@/assets/images/icons/icon-menu-white.svg";
import safulpayTextIcon from "@/assets/images/brand/safulpay-navbar-text-logo-icon.svg";
import safulPayLogo from "@/assets/images/brand/safulpay-icon-white.svg";

interface OtherLinks {
  url: string;
  label: string;
}

interface MobileNavProps {
  otherLinks: OtherLinks[];
  companyName: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Every nav item collapses into the hamburger in the same left-to-right order
 * as desktop, with the dropdowns becoming accordions (guide §3.3). Download App
 * lives in the header bar, outside this panel.
 */
const MobileNav = React.forwardRef(
  (
    { companyName, otherLinks, isMenuOpen, setIsMenuOpen }: MobileNavProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);

    const pathname = usePathname();
    const { goToSection } = useSectionNav();
    const vh = useViewportHeight();

    useEffect(() => {
      if (isMenuOpen) {
        document.body.classList.add("scroll-lock");
        setOverlayVisible(true);
      } else {
        document.body.classList.remove("scroll-lock");
        setExpanded(null);
        const timeout = setTimeout(() => setOverlayVisible(false), 350); // match transition duration
        return () => clearTimeout(timeout);
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

    const close = () => setIsMenuOpen(false);

    const goHome = () => {
      close();
      if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <>
        {overlayVisible && (
          <div
            className={`menu-bg fixed h-screen w-full bg-black/40 backdrop-blur-lg z-5 lg:hidden transition-opacity duration-350 ease-in-out will-change-opacity ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={close}
          />
        )}
        <div
          ref={ref}
          id="mobile-menu"
          className="fixed right-0 top-0 max-w-80 w-full h-dvh p-5 pt-8 rounded-l-[20px] bg-primary-color font-outfit flex flex-col text-white lg:hidden z-10 transform translate-x-full"
        >
          <div className="flex justify-between items-start shrink-0">
            <Link href="/" onClick={goHome} aria-label="Go to homepage">
              <Image
                src={vh < 680 ? safulPayLogo : safulpayTextIcon}
                unoptimized
                width={100}
                height={170}
                alt={`${companyName} logo`}
                className="px-3.25 cursor-pointer w-auto"
                style={{ height: vh < 680 ? "48px" : vh < 800 ? "120px" : "150px" }}
              />
            </Link>

            <button
              onClick={close}
              aria-label="Close menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="cursor-pointer"
            >
              <Image
                src={menuIconWhite}
                unoptimized
                width={30}
                height={30}
                alt=""
                aria-hidden="true"
                className="w-7.5"
              />
            </button>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col items-stretch text-left grow overflow-y-auto scrollbar-auto my-6 min-h-0"
          >
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.url}
                    onClick={close}
                    className="px-5 py-3 text-lg font-semibold tracking-[-0.28px] hover:text-secondary-color transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = expanded === item.label;
              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpanded(isExpanded ? null : item.label)
                    }
                    className="flex items-center justify-between px-5 py-3 text-lg font-semibold tracking-[-0.28px] cursor-pointer hover:text-secondary-color transition-colors"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 8"
                      aria-hidden="true"
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M1 1.5 6 6.5 11 1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col pb-2">
                      <Link
                        href={item.url}
                        onClick={close}
                        className="pl-8 pr-5 py-2 text-sm font-semibold text-secondary-color"
                      >
                        {item.label} overview
                      </Link>
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                            className="pl-8 pr-5 py-2 text-sm font-light hover:text-secondary-color transition-colors"
                          >
                            {child.label}
                          </a>
                        ) : child.section ? (
                          <button
                            key={child.label}
                            type="button"
                            onClick={() => {
                              close();
                              goToSection(child.url, child.section);
                            }}
                            className="pl-8 pr-5 py-2 text-sm font-light text-left cursor-pointer hover:text-secondary-color transition-colors"
                          >
                            {child.label}
                          </button>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.url}
                            onClick={close}
                            className="pl-8 pr-5 py-2 text-sm font-light hover:text-secondary-color transition-colors"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex flex-col items-stretch gap-4 shrink-0">
            <Link
              href={downloadAction.url}
              onClick={close}
              className="px-7.5 py-3.5 rounded-[10px] bg-secondary-color text-primary-color text-lg tracking-[-0.4px] font-semibold cursor-pointer text-center"
            >
              {downloadAction.label}
            </Link>
            <div className="flex justify-between items-center border-t border-white/30 pt-2">
              {otherLinks.map((link) => (
                <Link
                  href={link.url}
                  onClick={close}
                  key={link.url}
                  aria-label={`Navigate to ${link.label}`}
                  className={`py-2 px-3 text-[12px] font-extralight hover:text-secondary-color transition-colors cursor-pointer ${
                    pathname === link.url && "text-secondary-color font-bold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  },
);

MobileNav.displayName = "MobileNav";

export default MobileNav;
