import About from "@/sections/About";
import Team from "@/sections/Team";
import Download from "@/sections/Download";

export default function AboutUs() {
  return (
    <>
      <main className="py-75 gap-75 max-md:gap-25 max-md:pt-36">
        <About />
        <Team />
        <Download />
      </main>
    </>
  );
}
