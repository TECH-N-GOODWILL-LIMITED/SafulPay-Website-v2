import type { Metadata } from "next";
import PlatformHero from "@/components/sections/platform/PlatformHero";
import AgencySection from "@/components/sections/platform/AgencySection";
import MerchantSection from "@/components/sections/platform/MerchantSection";
import DeveloperSection from "@/components/sections/platform/DeveloperSection";
import PlatformCTA from "@/components/sections/platform/PlatformCTA";

export const metadata: Metadata = {
  title: "SafulPay Platform | For Agents, Merchants & Developers",
  description:
    "One infrastructure layer. Three purpose-built products. Agency management, merchant payments, and developer APIs — all on the SafulPay platform.",
};

export default function PlatformPage() {
  return (
    <main className="pt-0 gap-0">
      {/* Hero — dark green background */}
      <div className="w-full bg-primary-color">
        <PlatformHero />
      </div>

      {/* Agency — white */}
      <AgencySection />

      {/* Merchant — subtle off-white */}
      <div className="w-full bg-zinc-50">
        <MerchantSection />
      </div>

      {/* Developer — dark green */}
      <div className="w-full bg-primary-color">
        <DeveloperSection />
      </div>

      {/* CTA — white */}
      <PlatformCTA />
    </main>
  );
}
