import NavBar from "../sections/NavBar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import MoreFeatures from "../sections/MoreFeatures";
import Security from "../sections/Security";
import Works from "../sections/Works";
import Testimonial from "../sections/Testimonial";
import Download from "../sections/Download";
import Faqs from "../sections/Faqs";
import Partners from "../components/Partners";
import MainFooter from "../sections/MainFooter";
// import { useEffect } from "react";
// import { useSmoothScroll } from "../hooks/useScrollHandler";
// import { gsap } from "gsap";

// gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(ScrollTrigger);

// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
// });

// let smooth = _ScrollSmoother.create({
//   smooth: 2,
//   smoothTouch: 0.1,
//   effects: true,
// });

function HomePage() {
  // const { isHomePage, setActiveSection } = useSmoothScroll();
  // useEffect(() => {
  //   // Ensure home is active if at top on mount
  //   if (isHomePage && window.scrollY === 0) {
  //     setActiveSection("home");
  //   }

  //   if (isHomePage && window.scrollY > 700) {
  //     setActiveSection("home");
  //   }
  // }, [isHomePage]);

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      {/* <main className="relative md:mt-[-34rem] sm:mt-[-31rem] m:max-[580px]:mt-[33rem] m:mt-[-32rem] mt-[-15rem] rounded-t-[40px] max-m:pt-15"> */}
      {/* <main className="relative mt-[-34rem] max-md:mt-[-32rem] max-sm:mt-[-30rem] max-[580px]:mt-[-24rem]!  rounded-t-[40px] max-m:pt-15"> */}

      <div className="absolute top-[80vh] w-screen bg-transparent overflow-auto">
        <div className="h-32 md:h-30 sticky"></div>
        <main className="relative rounded-t-[40px] max-m:pt-15">
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
