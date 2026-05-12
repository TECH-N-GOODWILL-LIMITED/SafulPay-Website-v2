import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Download from "@/components/sections/Download";

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
