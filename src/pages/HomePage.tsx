import { useRef } from "react";
import NavBar from "../sections/NavBar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import MoreFeatures from "../sections/MoreFeatures";
import Security from "../sections/Security";
import Works from "../sections/Works";
import Testimonial from "../sections/Testimonial";
import Download from "../sections/Download";
import Faqs from "../sections/Faqs";
import MainFooter from "../sections/MainFooter";
import Partners from "../components/Partners";
import { useViewportHeight } from "../hooks/useViewportHeight";
import { useScaleFadeIn } from "../hooks/animations/useScaleFadeIn";

function HomePage() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const vh = useViewportHeight();

  useScaleFadeIn({
    containerRef: mainRef,
    fromScaleX: 0.8,
    fromOpacity: 1,
    scrub: 0.5,
    end: "top top",
  });

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      {/* <main className="relative md:mt-[-34rem] sm:mt-[-31rem] m:max-[580px]:mt-[33rem] m:mt-[-32rem] mt-[-15rem] rounded-t-[40px] max-m:pt-15"> */}
      {/* <main className="relative mt-[-34rem] max-md:mt-[-32rem] max-sm:mt-[-30rem] max-[580px]:mt-[-24rem]!  rounded-t-[40px] max-m:pt-15"> */}

      <div
        className={`absolute ${
          vh < 620 ? "top-[50%]" : "top-[80vh]"
        } w-screen bg-transparent overflow-auto`}
      >
        <div className="h-32 md:h-30 sticky"></div>
        <main ref={mainRef} className="relative rounded-t-[40px] max-m:pt-15">
          <Features />
          <MoreFeatures />
          <Security />
          <Works />
          <Testimonial />
          <div className="absolute top-[29%] flex gap-2.5 whitespace-nowrap bg-primary-color rotate-[-8.29deg] w-max z-9 max-md:hidden">
            <Partners />
          </div>
          <Download />
          <Faqs />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}

export default HomePage;
