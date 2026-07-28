import type { Metadata } from "next";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { contactInfo } from "@/data/appContent";
import { regulatoryPage, regulatoryPoints } from "@/data/companyPages";
import CompanyHero from "@/components/company/CompanyHero";
import JsonLd from "@/components/shared/JsonLd";

const { company, seo, regulated } = companyData;

export const metadata: Metadata = {
  title: regulatoryPage.seo.title,
  description: regulatoryPage.seo.description,
  alternates: { canonical: `${seo.siteUrl}${regulatoryPage.path}` },
  openGraph: {
    title: `${regulatoryPage.seo.title} | ${company.name}`,
    description: regulatoryPage.seo.description,
    url: `${seo.siteUrl}${regulatoryPage.path}`,
  },
};

const regulatorySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${regulatoryPage.seo.title} | ${company.name}`,
  url: `${seo.siteUrl}${regulatoryPage.path}`,
  description: regulatoryPage.seo.description,
  isPartOf: { "@type": "WebSite", name: company.name, url: seo.siteUrl },
  about: {
    "@type": "Organization",
    name: company.name,
    url: seo.siteUrl,
    memberOf: { "@type": "Organization", name: "Bank of Sierra Leone" },
  },
};

export default function RegulatoryPage() {
  return (
    <>
      <JsonLd data={regulatorySchema} />
      <main id="main-content" className="pt-0 gap-0 bg-background">
        <CompanyHero intro={regulatoryPage} />

        <section className="w-full bg-background" data-section>
          <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
            <div className="w-full flex items-center gap-5 p-7 rounded-[20px] bg-primary-shade-5 border border-primary-shade-10">
              <Image
                src={regulated.icon}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                unoptimized
                className="w-12 h-12 shrink-0"
              />
              <p className="secondary-heading text-primary-color text-left">
                {regulated.text}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-5">
              {regulatoryPoints.map((point) => (
                <article
                  key={point.title}
                  className="flex flex-col gap-3 p-7 rounded-[20px] bg-white border border-primary-shade-10"
                >
                  <h2 className="title-text text-primary-color">
                    {point.title}
                  </h2>
                  <p className="small-text text-text-color/80">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary-color text-white" data-section>
          <div className="section px-5 py-20 max-md:py-14 gap-5 text-left items-start">
            <h2 className="secondary-heading text-secondary-color">
              Raise a complaint
            </h2>
            <p className="small-text text-white/85 max-w-2xl">
              If a transaction goes wrong, contact our support team directly.
              We are available around the clock.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <a
                href={`mailto:${contactInfo.supportEmail}`}
                className="small-text text-secondary-color hover:brightness-110 transition-all"
              >
                {contactInfo.supportEmail}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                className="small-text text-secondary-color hover:brightness-110 transition-all"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
