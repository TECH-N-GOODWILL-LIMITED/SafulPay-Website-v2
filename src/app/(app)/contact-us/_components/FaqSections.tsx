"use client";

import { useRef, useState } from "react";
import { faqsData } from "@/data/appContent";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import FaqItem from "@/app/_components/FaqItem";

function FaqSections() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const { title, intro, categories } = faqsData;

  const handleToggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  useHeaderAnimation({
    containerRef: sectionRef,
    bodySelector: ".animatebody",
  });

  useSlideFadeIn({
    containerRef: sectionRef,
    targetSelector: ".faq-category",
    fromX: 0,
    fromY: 40,
    fromOpacity: 0,
    start: "top 85%",
    ease: "power2.out",
    stagger: 0.12,
    each: true,
  });

  return (
    <section
      ref={sectionRef}
      id="faqs"
      role="region"
      aria-label={title}
      className="section py-20 md:py-32 px-5 gap-10 bg-background"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <span className="animateheader inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-color/10 text-primary-color text-xs font-bold tracking-[0.2em] uppercase">
          FAQs
        </span>
        <h2 className="animateheader text-[clamp(28px,5vw,52px)] font-black leading-[1.1] tracking-tight text-text-color">
          Answers to{" "}
          <span className="italic text-primary-color">common questions.</span>
        </h2>
        <p className="animatebody text-zinc-500 text-base md:text-lg max-w-lg leading-relaxed">
          {intro}
        </p>
      </div>

      {/* Category sections */}
      <div className="w-full max-w-4xl flex flex-col gap-12 md:gap-16">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="faq-category flex flex-col gap-3">
            {/* Category label */}
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary-color/50 pl-2 mb-2">
              {category.label}
            </span>

            {/* FAQ items */}
            <ul aria-label={`${category.label} FAQs`}>
              {category.faqs.map((faq, faqIdx) => {
                const key = `${catIdx}-${faqIdx}`;
                return (
                  <li key={key} className="faq-item mx-auto">
                    <FaqItem
                      data={faq}
                      isOpen={openKey === key}
                      toggle={() => handleToggle(key)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSections;
