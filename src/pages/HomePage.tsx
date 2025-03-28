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

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <main className="relative mt-[-34rem] rounded-t-[40px]">
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
    </>
  );
}

export default HomePage;
