import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SmoothScrollProvider } from "../context/SmoothScrollProvider";
import "../index.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafulPay | Finance just got better",
  description: "Finance just got better",
  icons: {
    icon: "/safulpay-icon.svg",
  },
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
