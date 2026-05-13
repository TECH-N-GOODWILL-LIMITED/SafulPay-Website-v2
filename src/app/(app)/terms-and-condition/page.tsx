import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import { termsAndConditionsData } from "@/data/agreementData";
import Agreement from "@/components/Agreement";

const { company, seo } = companyData;

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read the ${company.name} Terms and Conditions governing use of our mobile money platform, services, and APIs.`,
  alternates: { canonical: `${seo.siteUrl}/terms-and-condition` },
  robots: { index: true, follow: true },
};

export default function TermsCondition() {
  return <Agreement data={termsAndConditionsData} />;
}