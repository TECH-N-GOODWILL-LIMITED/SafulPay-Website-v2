import { useEffect, useRef } from "react";
import type { FAQItem } from "../data/appContent";
import { gsap } from "gsap";
import expandIcon from "../assets/expand-icon.svg";
import collapseIcon from "../assets/collapse-icon.svg";

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
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  // Animate icon rotation
  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: isOpen ? 180 : 0,
        transformOrigin: "50% 50%",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const faqId = `faq-${question
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^\w-]+/g, "")}`;

  return (
    <div className="grid grid-cols-[1fr_auto] text-left max-w-277.5 w-full mx-auto p-2.5 items-center bg-[#ffffff0d] rounded-[50px]">
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
        className="cursor-pointer rounded-[50px] bg-[#c3f02c33] p-5 max-md:p-3"
      >
        <img
          ref={iconRef}
          src={isOpen ? expandIcon : collapseIcon}
          alt={isOpen ? "Collapse FAQ" : "Expand FAQ"}
          className="w-3 h-3 md:h-5 md:w-5"
          aria-hidden="false"
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
