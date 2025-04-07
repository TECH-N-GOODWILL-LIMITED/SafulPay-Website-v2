import NavBar from "../sections/NavBar";
import Team from "../sections/Team";
import About from "../sections/About";
import Download from "../sections/Download";
import MainFooter from "../sections/MainFooter";

function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="py-75 gap-75 max-md:gap-25 max-md:pt-36">
        <About />
        <Team />
        <Download />
      </main>
      <MainFooter />
    </>
  );
}

export default AboutUs;
