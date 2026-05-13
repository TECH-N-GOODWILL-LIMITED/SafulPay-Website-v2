import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SmoothScrollProvider } from "../context/SmoothScrollProvider";
import { companyData } from "@/data/companyData";
import "../index.css";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const { company, seo } = companyData;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: `${company.name} | ${company.slogan}`,
    template: `%s | ${company.name}`,
  },
  description: seo.fullDescription,
  keywords: seo.keywords,
  authors: [{ name: company.name, url: seo.siteUrl }],
  creator: company.name,
  publisher: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SL",
    url: seo.siteUrl,
    siteName: company.name,
    title: `${company.name} | ${company.slogan}`,
    description: seo.shortDescription,
    images: [
      {
        url: seo.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${company.name} — ${company.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.slogan}`,
    description: seo.shortDescription,
    images: [seo.ogImagePath],
    creator: seo.twitterHandle,
    site: seo.twitterHandle,
  },
  icons: [
    { rel: "icon", url: "/safulpay-icon.svg", type: "image/svg+xml" },
    {
      rel: "icon",
      url: "/safulpay-icon-green.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/safulpay-icon-lemon.svg",
      media: "(prefers-color-scheme: dark)",
    },
    { rel: "apple-touch-icon", url: seo.appleTouchIconPath },
  ],
  manifest: "/manifest.webmanifest",
  alternates: { canonical: seo.siteUrl },
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: seo.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#c3f02c" },
  ],
  width: "device-width",
  initialScale: 1,
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