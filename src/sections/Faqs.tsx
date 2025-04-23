import { useRef, useState } from "react";
import { faqsData } from "../data/appContent";
import FaqItem from "../components/FaqItem";
import bgIcon from "../assets/bg-logo-illustration.svg";
import { useSlideFadeIn } from "../hooks/animations/useSlideFadeIn";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { title, intro, faqs } = faqsData;

  const faqsRef = useRef<HTMLUListElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useHeaderAnimation({
    containerRef: faqsRef,
    bodySelector: ".animatebody",
  });

  useSlideFadeIn({
    containerRef: faqsRef,
    targetSelector: ".faq-item",
    fromX: 0,
    fromY: 400,
    fromOpacity: 0.2,
    end: "bottom center",
    ease: "power3.out",
    scrub: true,
    stagger: 0.4,
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
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
        className=" max-w-147.5 max-md:max-w-120 absolute left-[-370px] top-[10%] opacity-80"
      />
      <h2 className="animateheader max-w-275 py-2.5 text-primary-color text-[clamp(20px,7.907vw,64px)] font-semibold tracking-[-2.56px] max-m:tracking-[-1.36px]">
        {title}
      </h2>
      <p className="animatebody max-w-175 py-2.5 px-10 small-text font-normal">
        {intro}
      </p>

      <ul className="w-full">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item mx-auto">
            <FaqItem
              data={faq}
              isOpen={openIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
            />
          </li>
          // <li key={index} className=" mx-auto">
          //   <FaqItem question={faq.question} answer={faq.answer} />
          // </li>
        ))}
      </ul>
    </section>
  );
}

export default Faqs;
