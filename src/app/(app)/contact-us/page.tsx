import type { Metadata } from "next";
import { companyData } from "@/data/companyData";
import { faqsData, contactInfo } from "@/data/appContent";
import JsonLd from "@/components/shared/JsonLd";
import FaqSections from "./_components/FaqSections";
import ContactHero from "./_components/ContactHero";

const { company, seo } = companyData;

export const metadata: Metadata = {
  title: `Contact Us & FAQs`,
  description: `Get in touch with ${company.name} or find answers to common questions about mobile money, agents, merchants, and developer APIs in Sierra Leone.`,
  alternates: { canonical: `${seo.siteUrl}/contact-us` },
  openGraph: {
    title: `Contact ${company.name} | Help & FAQs`,
    description: `Reach our team or browse FAQs about ${company.name}'s mobile money platform in Sierra Leone.`,
    url: `${seo.siteUrl}/contact-us`,
  },
};

const allFaqs = faqsData.categories.flatMap((c) => c.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${company.name}`,
  url: `${seo.siteUrl}/contact-us`,
  mainEntity: {
    "@type": "Organization",
    name: company.name,
    url: seo.siteUrl,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: contactInfo.city,
      addressCountry: contactInfo.country,
    },
  },
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={[contactSchema, faqSchema]} />
      <main className="pt-0 gap-0">
        <ContactHero />
        <FaqSections />
      </main>
    </>
  );
}
