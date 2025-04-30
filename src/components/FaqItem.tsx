import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { FAQItem } from "../data/appContent";
import expandIcon from "../assets/expand-icon.svg";
import collapseIcon from "../assets/collapse-icon.svg";

interface FaqItemProps {
  data: FAQItem;
  isOpen: boolean;
  toggleFAQ: () => void;
}

function FaqItem({ data, isOpen, toggleFAQ }: FaqItemProps) {
  const [parent] = useAutoAnimate();
  const { question, answer } = data;

  const faqId = `faq-${question
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^\w-]+/g, "")}`;

  const handleToggle = () => {
    toggleFAQ();
  };

  return (
    <div
      ref={parent}
      className="grid grid-cols-[1fr_auto] text-left max-w-277.5 w-full mx-auto p-2.5 items-center bg-[#ffffff0d] rounded-[50px]"
    >
      <button
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={faqId}
        tabIndex={0}
        className="cursor-pointer small-text text-left font-semibold py-2.5 px-7.5"
      >
        {question}
      </button>
      <button
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={faqId}
        aria-label={`${isOpen ? "Collapse" : "Expand"} FAQ ${question}`}
        className="cursor-pointer rounded-[50px] bg-[#c3f02c33] p-5 max-md:p-3"
      >
        <img
          src={isOpen ? collapseIcon : expandIcon}
          alt={isOpen ? "Collapse FAQ" : "Expand FAQ"}
          className="w-3 h-3 md:h-5 md:w-5"
          aria-hidden="false"
        />
      </button>

      {isOpen && (
        <p
          id={faqId}
          aria-live="polite"
          tabIndex={-1}
          // ref={answerRef}
          className="small-text max-w-200 py-2.5 px-7.5 col-span-full"
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqItem;

// import { useAutoAnimate } from "@formkit/auto-animate/react";

// interface FaqItemProps {
//   question: string;
//   answer: string;
// }

// function FaqItem({ question, answer }: FaqItemProps) {
//   const [parent] = useAutoAnimate();

//   return (
//     <details
//       ref={parent}
//       className="group text-left max-w-277.5 w-full mx-auto p-2.5 bg-[#ffffff0d] rounded-[50px] open:bg-[#ffffff1a] transition-colors"
//     >
//       <summary className="small-text font-semibold py-2 px-7.5 list-none cursor-pointer flex-center justify-between">
//         {question}
//         <span className="cursor-pointer rounded-[50px] bg-[#c3f02c33] p-5 max-md:p-3">
//           <img
//             src={expandIcon}
//             alt=""
//             className="w-3 h-3 md:h-5 md:w-5 group-open:hidden"
//             aria-hidden="true"
//           />
//           <img
//             src={collapseIcon}
//             alt=""
//             className="w-3 h-3 md:h-5 md:w-5 hidden group-open:block"
//             aria-hidden="true"
//           />
//         </span>
//       </summary>
//       <p className="small-text max-w-200 py-2.5 px-7.5">{answer}</p>
//     </details>
//   );
// }

// export default FaqItem;
