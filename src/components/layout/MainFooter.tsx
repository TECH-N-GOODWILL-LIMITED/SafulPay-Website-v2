import ContactUs from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function MainFooter() {
  return (
    <div className="bg-background relative flex flex-col items-center overflow-x-clip">
      <ContactUs />
      <img
        className="max-w-147.5 absolute right-[-14%] top-[-9%] max-md:max-w-120 max-sm:max-w-100 opacity-80 -z-10"
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <Footer />
    </div>
  );
}

export default MainFooter;
