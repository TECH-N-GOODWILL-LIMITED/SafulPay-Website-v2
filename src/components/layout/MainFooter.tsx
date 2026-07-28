import ContactUs from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

/**
 * `surface` matches the footer's backdrop to the page above it. The audience
 * and company pages run on the dark surface, so a white band behind the
 * contact card would read as an accidental seam between them and the footer.
 */
function MainFooter({ surface = "light" }: { surface?: "light" | "dark" }) {
  return (
    <div
      className={`relative flex flex-col items-center overflow-x-clip ${
        surface === "dark" ? "bg-[#0b1310]" : "bg-background"
      }`}
    >
      <ContactUs />
      <img
        className="max-w-147.5 absolute right-[-14%] top-[-9%] max-md:max-w-120 max-sm:max-w-100 opacity-80 -z-10"
        src={bgIcon.src}
        width={590}
        height={187}
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
