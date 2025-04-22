import { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../data/appContent";
import TestimonialItem from "../components/TestimonialItem";
import testimonialLogo from "../assets/safulpay-testimonial-logo.png";
import lineImage from "../assets/long-line-illustration.svg";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const testimonialItems = document.querySelectorAll(".testimonial-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(testimonialItems).indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    testimonialItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useGsapCustomAnimation({
    containerRef: testimonialRef,
    targetSelector: ".lineimage",
    from: {
      opacity: 0.6,
      scaleX: -1,
    },
    to: {
      opacity: 1,
      scaleX: 1,
      ease: "power2.out",
    },
    scrollTrigger: {
      scrub: true,
      end: "bottom center",
    },
  });

  return (
    <section
      ref={testimonialRef}
      id="testimonials"
      role="region"
      aria-label="What our users say about SafulPay"
      className="section py-12.5 gap-12.5 relative max-md:gap-2.5"
      data-section
    >
      <img
        src={lineImage}
        alt=""
        className="lineimage absolute h-[1000px] left-0 bottom-[-24%] max-xl:hidden"
      />
      <img
        src={lineImage}
        alt=""
        className="lineimage absolute h-[1000px] right-0 bottom-[-24%] scale-x-[-1] max-xl:hidden"
      />
      <h2 className="py-2.5 px-12.5 primary-heading font-bold tracking-[-2.1px] max-m:tracking-[-1.36px]">
        Don't just take our word for it.
      </h2>
      {/* <div className="w-full flex justify-between max-w-207.75 max-md:justify-center">
        <div className="pt-2.5 px-2.5 flex flex-col gap-2.5 text-left max-w-105 overflow-y-auto h-102.5 max-md:h-full max-md:max-w-full max-md:mx-5">
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
        </div>
        <div className="w-78 flex justify-end max-md:hidden">
          <div className="relative w-75 h-75 bg-primary-shade-10 backdrop-blur-[25px] mt-4 rounded-[200px] flex items-center justify-center rounded-bl-[15px]">
            {testimonialsData.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.image}
                alt=""
                className={`absolute z-1 rounded-full w-15 h-15 object-cover ${
                  index === 0
                    ? `bottom-[-22%] left-6 w-25 h-25`
                    : index === 1
                    ? "bottom-5 right-10"
                    : index === 2
                    ? "bottom-28 right-1"
                    : index === 3
                    ? "top-0 left-0 transform translate-x-1/2"
                    : "w-5! h-5! top-2/5 left-0 transform -translate-x-1/2"
                }`}
              />
            ))}
            <img src={testimonialLogo} alt="" className="w-37.5" />
          </div>
        </div>
      </div> */}
      <div className="w-full flex justify-between max-w-207.75 max-md:justify-center">
        <div className="pt-2.5 px-2.5 flex flex-col gap-2.5 text-left max-w-105 overflow-y-auto h-102.5 max-md:h-full max-md:max-w-full max-md:mx-5">
          {testimonialsData?.length > 0 ? (
            testimonialsData.map((testimony, index) => (
              <div
                key={index}
                className="testimonial-item"
                ref={index === 0 ? firstItemRef : null}
              >
                <TestimonialItem
                  name={testimony.name}
                  location={testimony.location}
                  title={testimony.title}
                  text={testimony.text}
                  isActive={index === activeIndex}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No testimonials found.</p>
          )}
        </div>

        <div className="w-78 flex justify-end max-md:hidden">
          <div className="relative w-75 h-75 bg-primary-shade-10 backdrop-blur-[25px] mt-4 rounded-[200px] flex items-center justify-center rounded-bl-[15px]">
            {testimonialsData.map((testimonial, index) => {
              // Calculate position based on active index
              const positionIndex =
                (index - activeIndex + testimonialsData.length) %
                testimonialsData.length;

              return (
                <img
                  key={index}
                  src={testimonial.image}
                  alt=""
                  className={`absolute z-1 rounded-full w-15 h-15 object-cover transition-all duration-500 ${
                    positionIndex === 0
                      ? `bottom-[-22%] left-6 w-25 h-25 z-10`
                      : positionIndex === 1
                      ? "bottom-5 right-10 z-5"
                      : positionIndex === 2
                      ? "bottom-28 right-1 z-3"
                      : positionIndex === 3
                      ? "top-0 left-0 transform translate-x-1/2 z-2"
                      : "w-5! h-5! top-2/5 left-0 transform -translate-x-1/2 z-1 opacity-70"
                  }`}
                />
              );
            })}
            <img src={testimonialLogo} alt="" className="w-37.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
