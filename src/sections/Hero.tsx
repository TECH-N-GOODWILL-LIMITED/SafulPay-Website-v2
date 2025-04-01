import { companyData } from "../data/companyData";
import DownloadItem from "../components/DownloadItem";
import mockUpImage from "../assets/mockup-home-page.png";
// import Partners from "../components/Partners";

function Hero() {
  const { company } = companyData;

  return (
    // <section id="home" className="section gap-10 min-h-[80vh]">
    <section id="home" className="section gap-10 min-h-[80vh]" data-section>
      <div className="flex-center flex-col gap-2.5 max-m:gap-7.5 mt-50 py-2.5 text-white">
        <h1 className="max-w-275 p-2.5">
          {company.slogan}
          <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
            {company.name}
          </span>
        </h1>
        <p className="text-[clamp(16px,3.721vw,30px)] font-normal tracking-[-0.9px] max-m:tracking-normal p-2.5 max-w-250 max-m:max-w-80">
          {company.description}
        </p>
        <DownloadItem />
      </div>
      <div className="max-w-[min(63.49vw,444px)] relative">
        <img src={mockUpImage} alt="" />
        {/* <div className="absolute top-[16%] left-[-900%] flex gap-2.5 whitespace-nowrap bg-primary-color rotate-[8.29deg] w-max z-[-1] max-md:hidden">
          <Partners />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;

// import { useState, useEffect } from "react";
// import throttle from "lodash.throttle";

// const MyComponent = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = throttle(() => {
//       const heroSection = document.getElementById("hero-section");
//       if (heroSection) {
//         const heroHeight = heroSection.offsetHeight;
//         if (window.scrollY > heroHeight) {
//           setHasScrolled(true);
//         } else {
//           setHasScrolled(false);
//         }
//       }
//     }, 100); // Throttle to 100ms

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
