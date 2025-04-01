import expandIcon from "../assets/expand-icon.svg";
import collapseIcon from "../assets/collapse-icon.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: () => void;
}

function FaqItem({ question, answer, isOpen, toggleFAQ }: FaqItemProps) {
  const [parent] = useAutoAnimate();

  return (
    <div
      className="grid grid-cols-[1fr_auto] text-left max-w-277.5 w-full p-2.5 items-center bg-[#ffffff0d] rounded-[50px]"
      ref={parent}
    >
      <span
        onClick={toggleFAQ}
        className="small-text font-semibold py-2.5 px-7.5"
      >
        {question}
      </span>
      <button
        className="cursor-pointer rounded-[50px] bg-[#c3f02c33] p-5 max-md:p-3"
        ref={parent}
        onClick={toggleFAQ}
      >
        <img
          src={isOpen ? collapseIcon : expandIcon}
          alt=""
          className="w-3 h-3 md:h-5 md:w-5"
        />
      </button>
      {isOpen && (
        <p className="small-text max-w-200 py-2.5 px-7.5 col-span-full">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
