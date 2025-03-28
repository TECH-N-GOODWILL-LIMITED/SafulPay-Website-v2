import ContactUs from "./ContactUs";
import Footer from "../components/Footer";
import bgIcon from "../assets/bg-logo-illustration.svg";

function MainFooter() {
  return (
    <div className="bg-white relative flex flex-col items-center overflow-x-clip">
      <ContactUs />
      <img
        className="max-w-147.5 absolute right-[-14%] top-[-9%] max-md:max-w-120 max-sm:max-w-100 opacity-80"
        src={bgIcon}
        alt=""
      />
      <Footer />
    </div>
  );
}

export default MainFooter;
