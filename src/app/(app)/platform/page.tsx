import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { companyData } from "@/data/companyData";
import PlatformHero from "@/components/sections/platform/PlatformHero";
import AgencySection from "@/components/sections/platform/AgencySection";
import MerchantSection from "@/components/sections/platform/MerchantSection";
import DeveloperSection from "@/components/sections/platform/DeveloperSection";
import PlatformCTA from "@/components/sections/platform/PlatformCTA";

const { company, seo } = companyData;

export const metadata: Metadata = {
  title: `${company.name} Platform | For Agents, Merchants & Developers`,
  description:
    "One infrastructure layer. Three purpose-built products. Agency management, merchant payments, and developer APIs — all on the SafulPay platform.",
  alternates: { canonical: `${seo.siteUrl}/platform` },
  openGraph: {
    title: `${company.name} Platform | For Agents, Merchants & Developers`,
    description:
      "Agency banking, merchant payment tools, and REST APIs for developers — all built on SafulPay's infrastructure in Sierra Leone.",
    url: `${seo.siteUrl}/platform`,
  },
};

const platformSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${company.name} Platform`,
  url: `${seo.siteUrl}/platform`,
  description:
    "One infrastructure layer. Three purpose-built products. Agency management, merchant payments, and developer APIs.",
  mainEntity: [
    {
      "@type": "Service",
      name: "Agency Banking Platform",
      description:
        "Offer cash-in, cash-out, bill payments and remittance pickup. Earn transparent commission on every transaction.",
      provider: { "@type": "Organization", name: company.name },
    },
    {
      "@type": "Service",
      name: "Merchant Payment Tools",
      description:
        "Receive QR, link and in-app payments. Pay salaries and suppliers in bulk.",
      provider: { "@type": "Organization", name: company.name },
    },
    {
      "@type": "Service",
      name: "Developer API",
      description:
        "A single REST API for mobile money, banks, bills and remittances across Sierra Leone. Sandbox, webhooks, idempotency — built right.",
      provider: { "@type": "Organization", name: company.name },
    },
  ],
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={platformSchema} />
      <main className="pt-0 gap-0">
        <div className="w-full bg-primary-color">
          <PlatformHero />
        </div>
        <AgencySection />
        <div className="w-full bg-zinc-50">
          <MerchantSection />
        </div>
        <div className="w-full bg-primary-color">
          <DeveloperSection />
        </div>
        <PlatformCTA />
      </main>
    </>
  );
}
