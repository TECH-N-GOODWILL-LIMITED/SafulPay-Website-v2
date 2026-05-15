import Image from "next/image";
import ContactUs from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function MainFooter() {
  return (
    <div className="bg-white relative flex flex-col items-center overflow-x-clip">
      <ContactUs />
      <Image
        className="max-w-147.5 absolute right-[-14%] top-[-9%] max-md:max-w-120 max-sm:max-w-100 opacity-80 -z-10"
        src={bgIcon}
        alt=""
        aria-hidden="true"
      />
      <Footer />
    </div>
  );
}

export default MainFooter;
