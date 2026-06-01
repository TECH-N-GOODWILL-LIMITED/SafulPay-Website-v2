import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import { faqsData } from "@/data/appContent";
import JsonLd from "@/components/shared/JsonLd";
import HomeClient from "@/app/HomeClient";

const { company, seo, socials, downloads, creator } = companyData;

export const metadata: Metadata = {
  title: `${company.name} | ${company.slogan}`,
  description: seo.fullDescription,
  alternates: { canonical: seo.siteUrl },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: seo.siteUrl,
  logo: `${seo.siteUrl}/safulpay-icon-green.svg`,
  description: seo.fullDescription,
  foundingLocation: "Sierra Leone",
  sameAs: socials.map((s) => s.url),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@safulpay.com",
    availableLanguage: "English",
  },
};

const creatorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${seo.siteUrl}/#creator`,
  name: creator.name,
  alternateName: creator.shortName,
  url: creator.url,
  jobTitle: creator.role,
  worksFor: { "@type": "Organization", name: company.name, url: seo.siteUrl },
  sameAs: creator.sameAs,
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: seo.siteUrl,
  description: seo.shortDescription,
  creator: { "@id": `${seo.siteUrl}/#creator` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${seo.siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: company.name,
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  description: seo.fullDescription,
  url: seo.siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: [downloads.appStore?.link, downloads.playStore?.link].filter(
    Boolean,
  ),
  author: { "@type": "Organization", name: company.name },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.categories
    .flatMap((c) => c.faqs)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema,
          creatorSchema,
          webSiteSchema,
          appSchema,
          faqSchema,
        ]}
      />
      <HomeClient />
    </>
  );
}
