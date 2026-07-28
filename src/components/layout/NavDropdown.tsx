"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import type { NavItem } from "@/data/navigation";
import { useSectionNav } from "@/hooks/useSectionNav";

interface NavDropdownProps {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isActive: boolean;
}

/**
 * One audience door in the desktop nav. Opens on hover and on click, closes on
 * Escape, on blur out of the panel, and once a child has been chosen.
 */
function NavDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
  isActive,
}: NavDropdownProps) {
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { goToSection } = useSectionNav();

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handlePointer = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handlePointer);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handlePointer);
    };
  }, [isOpen, onClose]);

  const children = item.children ?? [];

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex items-center gap-1.5 py-1.5 px-4 max-xl:px-2.5 cursor-pointer transition-colors hover:text-secondary-color ${
          isActive ? "text-secondary-color" : ""
        }`}
      >
        {item.label}
        <svg
          viewBox="0 0 12 8"
          aria-hidden="true"
          className={`w-2.5 h-2.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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

      {isOpen && (
        <div
          id={panelId}
          role="menu"
          aria-label={item.label}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
        >
          <div className="min-w-62 bg-white rounded-[16px] p-2 shadow-[0_12px_40px_0_rgba(11,70,80,0.25)] flex flex-col text-left">
            {children.map((child) =>
              child.external ? (
                <a
                  key={child.label}
                  href={child.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-[10px] text-primary-color text-base font-medium hover:bg-primary-shade-5 transition-colors"
                >
                  {child.label}
                </a>
              ) : child.section ? (
                <button
                  key={child.label}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    goToSection(child.url, child.section);
                    onClose();
                  }}
                  className="px-4 py-2.5 rounded-[10px] text-primary-color text-base font-medium text-left cursor-pointer hover:bg-primary-shade-5 transition-colors"
                >
                  {child.label}
                </button>
              ) : (
                <Link
                  key={child.label}
                  href={child.url}
                  role="menuitem"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-[10px] text-primary-color text-base font-medium hover:bg-primary-shade-5 transition-colors"
                >
                  {child.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
