import MainFooter from "@/sections/MainFooter";
import NavBar from "@/sections/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <MainFooter />
    </>
  );
}
