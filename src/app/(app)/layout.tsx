import React from "react";

import MainFooter from "@/components/layout/MainFooter";
import NavBar from "@/components/layout/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <MainFooter />
    </>
  );
}
