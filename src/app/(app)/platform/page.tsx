import type { Metadata } from "next";
import JsonLd from "@/components/shared/JsonLd";
import { companyData } from "@/data/companyData";
import PlatformHero from "@/app/(app)/platform/_components/PlatformHero";
import BridgeSection from "@/components/shared/BridgeSection";
import AgencySection from "@/app/(app)/platform/_components/AgencySection";
import MerchantSection from "@/app/(app)/platform/_components/MerchantSection";
import DeveloperSection from "@/app/(app)/platform/_components/DeveloperSection";
import PlatformCTA from "@/app/(app)/platform/_components/PlatformCTA";

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
        <div className="w-full bg-linear-to-bl from-primary-shade-30 via-background to-secondary-color/10 py-30 pt-36">
          <BridgeSection />
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
