"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { faqsData } from "@/data/appContent";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import FaqItem from "@/app/_components/FaqItem";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function Faqs() {
  const faqsRef = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { title, intro, categories } = faqsData;

  // Show the first category (General) as a preview on the homepage
  const previewFaqs = categories[0]?.faqs ?? [];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useHeaderAnimation({
    containerRef: faqsRef,
    bodySelector: ".animatebody",
  });

  useSlideFadeIn({
    containerRef: faqsRef,
    targetSelector: ".faq-item",
    fromX: -50,
    fromY: 50,
    fromOpacity: 0,
    start: "top 85%",
    ease: "power2.out",
    stagger: 0.08,
    each: true,
  });

  return (
    <section
      ref={faqsRef}
      id="faqs"
      role="region"
      aria-label={title}
      className="section py-2.5 px-5 gap-2.5 relative mb-50"
      data-section
    >
      <img
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        width={590}
        height={590}
        loading="lazy"
        decoding="async"
        className="max-w-147.5 h-auto max-md:max-w-120 absolute left-[-370px] top-[10%] opacity-80"
      />
      <h2 className="animateheader max-w-5xl py-2.5 text-primary-color primary-heading font-semibold tracking-[-2.56px] max-m:tracking-[-1.36px] leading-snug">
        {title}
      </h2>
      <p className="animatebody max-w-xl py-2.5 px-10 small-text font-normal">
        {intro}
      </p>

      <ul className="w-full" aria-label="Frequently asked questions">
        {previewFaqs.map((faq, index) => (
          <li key={index} className="faq-item mx-auto">
            <FaqItem
              data={faq}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          </li>
        ))}
      </ul>

      <Link
        href="/contact-us#faqs"
        className="faq-item inline-flex items-center gap-2 mt-4 px-7 py-3.5 rounded-xl bg-primary-color text-white text-sm font-semibold hover:bg-primary-color/90 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(58,86,70,0.45)]"
      >
        View all FAQs
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}

export default Faqs;
