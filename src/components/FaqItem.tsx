"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { FAQItem } from "../data/appContent";
import expandIcon from "../assets/images/expand-icon.svg";
import collapseIcon from "../assets/images/collapse-icon.svg";

interface FaqItemProps {
  data: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}

function FaqItem({ data, isOpen, toggle }: FaqItemProps) {
  const answerRef = useRef<HTMLParagraphElement | null>(null);
  const iconRef = useRef<HTMLImageElement | null>(null);

  const { question, answer } = data;

  // Animate on open/close
  useEffect(() => {
    if (answerRef.current && iconRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotation: 180,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }, [isOpen]);

  const faqId = `faq-${question
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^\w-]+/g, "")}`;

  return (
    <div className="grid grid-cols-[1fr_auto] text-left max-w-5xl w-full mx-auto p-2.5 items-center bg-[#ffffff0d] rounded-[50px]">
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={faqId}
        tabIndex={0}
        className="cursor-pointer small-text text-left font-semibold py-2.5 px-7.5"
      >
        {question}
      </button>
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={faqId}
        aria-label={`${isOpen ? "Collapse" : "Expand"} FAQ ${question}`}
        className="cursor-pointer rounded-[50px] bg-[#c3f02c33] p-5 max-md:p-3 relative"
      >
        <Image
          ref={iconRef}
          src={isOpen ? collapseIcon : expandIcon}
          alt=""
          className="w-3 h-3 md:h-5 md:w-5"
          aria-hidden="true"
        />
      </button>

      <p
        ref={answerRef}
        id={faqId}
        aria-live="polite"
        tabIndex={-1}
        className="small-text max-w-200 py-2.5 px-7.5 h-0 opacity-0 overflow-hidden"
      >
        {answer}
      </p>
    </div>
  );
}

export default FaqItem;
