import MainFooter from "@/components/sections/MainFooter";
import NavBar from "@/components/sections/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <MainFooter />
    </>
  );
}
