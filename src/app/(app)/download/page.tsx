import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import Download from "@/components/shared/Download";
import JsonLd from "@/components/shared/JsonLd";

const { company, seo, downloads } = companyData;

export const metadata: Metadata = {
  title: `Download ${company.name}`,
  description: `Download the ${company.name} app for iOS and Android. Sierra Leone's fastest mobile money app — send money, pay bills, and top up airtime in seconds.`,
  alternates: { canonical: `${seo.siteUrl}/download` },
  openGraph: {
    title: `Download ${company.name}`,
    description: `Get the ${company.name} app on the App Store or Google Play. Available for iOS and Android.`,
    url: `${seo.siteUrl}/download`,
  },
};

const downloadSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: company.name,
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  description: seo.fullDescription,
  downloadUrl: [downloads.appStore.link, downloads.playStore.link],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Organization", name: company.name, url: seo.siteUrl },
};

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={downloadSchema} />
      <main className="bg-text-color flex flex-col">
        <Download />
        <div className="h-50 bg-white w-full" />
      </main>
    </>
  );
}