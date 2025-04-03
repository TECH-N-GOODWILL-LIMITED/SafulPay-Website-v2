import { useState } from "react";
import { faqsData } from "../data/appContent";
import FaqItem from "../components/FaqItem";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default: first item is open

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const { title, intro, faqs } = faqsData;

  return (
    <section
      id="faqs"
      className="section py-2.5 px-5 gap-2.5 relative mb-50"
      data-section
    >
      <img
        src={bgIcon}
        alt=""
        className=" max-w-147.5 max-md:max-w-120 absolute left-[-370px] top-[10%] opacity-80"
      />
      <h2 className="max-w-275 py-2.5 text-primary-color text-[clamp(20px,7.907vw,64px)] font-semibold tracking-[-2.56px] max-m:tracking-[-1.36px]">
        {title}
      </h2>
      <p className="max-w-175 py-2.5 px-10 small-text font-normal">{intro}</p>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </section>
  );
}

export default Faqs;
