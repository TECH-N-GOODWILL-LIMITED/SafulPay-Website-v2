import { companyData } from "../data/companyData";
import bgIcon from "../assets/bg-logo-illustration.svg";

function ContactUs() {
  const { company } = companyData;

  return (
    <section id="contact-us" className="w-full flex-center" data-section>
      <div className="relative max-m:w-87.5 max-w-250 w-full mx-5 z-2 bg-white px-10 py-20 rounded-[20px] flex flex-col gap-7.5 items-center justify-center overflow-hidden shadow-[0_0_30px_0_rgba(11,70,80,0.4)] md:mb-[-80px] mb-[-36px]">
        <img
          className="max-w-147.5 absolute rotate-[152.08deg] opacity-80 left-[-176px] top-[-6%] max-md:hidden"
          src={bgIcon}
          alt=""
        />
        <div className="flex sm:gap-2.5 gap-0 items-center">
          <img
            src={company.greenLogo}
            alt=""
            className="w-15 py-1.25 px-3.25 max-sm:w-10 max-sm:py-[3.33px] max-sm:px-2"
          />
          <span className="text-[clamp(16px,5.117vw,34px)] font-semibold tracking-[-1.36px] bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent max-m:tracking-[-0.44px]">
            {company.name}
          </span>
        </div>
        <div className="relative focus-within:outline focus-within:outline-secondary-color flex justify-center max-w-175.5 w-full border py-2.5 pr-2.5 pl-7.5 border-secondary-color rounded-[20px] mx-5 max-sm:p-1.25 max-sm:pt-5 max-sm:flex-col max-sm:gap-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="focus:outline-none focus:ring-0 title-text font-extralight text-primary-color placeholder:text-[#67967b] block border-none bg-none w-full mr-2.5 caret-primary-color max-sm:p-2.5"
          />
          <button
            type="submit"
            title="Enter your email address"
            className="small-text font-semibold text-white bg-gradient-to-r from-primary-color to-[#67967B] px-10 py-6.25 rounded-[20px] max-sm:py-2.5 max-sm:rounded-[10px] cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
