import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import { privacyPolicyData } from "@/data/agreementData";
import Agreement from "@/components/Agreement";

const { company, seo } = companyData;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the ${company.name} Privacy Policy to understand how we collect, use, and protect your personal data and financial information.`,
  alternates: { canonical: `${seo.siteUrl.replace(/\/$/, "")}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return <Agreement data={privacyPolicyData} />;
}
