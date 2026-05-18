"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { faqsData } from "@/data/appContent";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import { useSlideFadeIn } from "@/hooks/animations/useSlideFadeIn";
import FaqItem from "@/app/_components/FaqItem";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function Faqs() {
  const faqsRef = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { title, intro, faqs } = faqsData;

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
      <Image
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
        width={590}
        height={590}
        unoptimized
        className="max-w-147.5 h-auto max-md:max-w-120 absolute left-[-370px] top-[10%] opacity-80"
      />
      <h2 className="animateheader max-w-5xl py-2.5 text-primary-color primary-heading font-semibold tracking-[-2.56px] max-m:tracking-[-1.36px] leading-snug">
        {title}
      </h2>
      <p className="animatebody max-w-xl py-2.5 px-10 small-text font-normal">
        {intro}
      </p>

      <ul className="w-full" aria-label="Frequently asked questions">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item mx-auto">
            <FaqItem
              data={faq}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faqs;
