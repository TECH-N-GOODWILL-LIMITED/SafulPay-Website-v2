import React from "react";

import MainFooter from "@/components/layout/MainFooter";
import NavBar from "@/components/layout/NavBar";

/**
 * Layout for the dark surfaces — the four audience doors and the Company
 * pages. Same chrome as `(app)`, but the footer runs on the dark backdrop so
 * these pages carry one continuous surface from hero to copyright line.
 *
 * Route groups don't appear in the URL, so `/personal`, `/security` and the
 * rest keep the paths the sitemap and nav already point at.
 */
export default function SurfaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <MainFooter surface="dark" />
    </>
  );
}
