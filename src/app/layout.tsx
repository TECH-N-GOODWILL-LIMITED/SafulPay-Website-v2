import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SmoothScrollProvider } from "../context/SmoothScrollProvider";
import "../index.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafulPay | Finance just got better",
  description: "Finance just got better",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/safulpay-icon-green.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/safulpay-icon-lemon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
