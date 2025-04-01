import { testimonialsData } from "../data/appContent";
import TestimonialItem from "../components/TestimonialItem";
import testimonialLogo from "../assets/safulpay-testimonial-logo.png";
import lineImage from "../assets/long-line-illustration.svg";
import Marquee from "react-fast-marquee";
// import { useRef, useState } from "react";

function Testimonial() {
  // const [direction, setDirection] = useState<"down" | "up">("up");
  // const marqueeRef = useRef(null);

  // const handleComplete = () => {
  //   setDirection((prev) => (prev === "up" ? "down" : "up"));
  // };

  return (
    <section
      id="testimonials"
      className="section py-12.5 gap-12.5 relative max-md:gap-2.5"
      data-section
    >
      <img
        src={lineImage}
        alt=""
        className="absolute h-[1000px] left-0 bottom-[-24%] z-1 max-xl:hidden"
      />
      <img
        src={lineImage}
        alt=""
        className="absolute h-[1000px] right-0 bottom-[-24%] scale-x-[-1] z-1 max-xl:hidden"
      />
      <h2 className="py-2.5 px-12.5 primary-heading font-bold tracking-[-2.1px] max-m:tracking-[-1.36px]">
        Don't just take our word for it.
      </h2>
      <div className="w-full flex justify-between max-w-207.75 max-md:justify-center">
        <Marquee
          // ref={marqueeRef}
          className="marquee"
          direction="up"
          loop={0}
          speed={200}
          pauseOnClick={true}
          // onCycleComplete={handleComplete}
        >
          {testimonialsData?.length > 0 ? (
            testimonialsData.map((testimony, index) => (
              <TestimonialItem
                key={index}
                name={testimony.name}
                location={testimony.location}
                title={testimony.title}
                text={testimony.text}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No testimonials found.</p>
          )}
        </Marquee>

        <div className="w-78 flex justify-end max-md:hidden">
          <div className="w-75 h-75 bg-primary-shade-10 backdrop-blur-[25px] mt-4 rounded-[200px] flex items-center justify-center shrink-0 rounded-bl-[15px]">
            <img src={testimonialLogo} alt="" className="w-37.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
