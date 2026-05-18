import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import About from "@/app/(app)/about-us/_components/About";
import Team from "@/app/(app)/about-us/_components/Team";
import Download from "@/components/shared/Download";
import JsonLd from "@/components/shared/JsonLd";

const { company, seo, socials, team } = companyData;

export const metadata: Metadata = {
  title: `About ${company.name}`,
  description: `Learn about ${company.name} — ${company.description} Meet the team behind Sierra Leone's leading mobile money platform.`,
  alternates: { canonical: `${seo.siteUrl}/about-us` },
  openGraph: {
    title: `About ${company.name}`,
    description: `Meet the team and learn the mission behind ${company.name} — Sierra Leone's leading mobile money platform.`,
    url: `${seo.siteUrl}/about-us`,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${company.name}`,
  url: `${seo.siteUrl}/about-us`,
  description: company.description,
  mainEntity: {
    "@type": "Organization",
    name: company.name,
    url: seo.siteUrl,
    sameAs: socials.map((s) => s.url),
    employee: team.members.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
    })),
  },
};

export default function AboutUs() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <main className="py-75 gap-75 max-md:gap-25 max-md:pt-36">
        <About />
        <Team />
        <Download />
      </main>
    </>
  );
}