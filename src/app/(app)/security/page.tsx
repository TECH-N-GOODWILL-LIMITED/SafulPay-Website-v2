import type { Metadata } from "next";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { securityData } from "@/data/appContent";
import { securityPage } from "@/data/companyPages";
import CompanyHero from "@/components/company/CompanyHero";
import JsonLd from "@/components/shared/JsonLd";

const { company, seo, regulated } = companyData;

export const metadata: Metadata = {
  title: securityPage.seo.title,
  description: securityPage.seo.description,
  alternates: { canonical: `${seo.siteUrl}${securityPage.path}` },
  openGraph: {
    title: `${securityPage.seo.title} | ${company.name}`,
    description: securityPage.seo.description,
    url: `${seo.siteUrl}${securityPage.path}`,
  },
};

const securitySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${securityPage.seo.title} | ${company.name}`,
  url: `${seo.siteUrl}${securityPage.path}`,
  description: securityPage.seo.description,
  isPartOf: { "@type": "WebSite", name: company.name, url: seo.siteUrl },
};

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={securitySchema} />
      <main id="main-content" className="pt-0 gap-0 bg-background">
        <CompanyHero intro={securityPage} />

        <section className="w-full bg-background" data-section>
          <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
            <p className="text-[clamp(16px,2.2vw,20px)] font-extralight text-text-color/85 max-w-3xl">
              {securityData.intro}
            </p>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-5">
              {securityData.securityFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col gap-3 p-7 rounded-[20px] bg-primary-shade-5 border border-primary-shade-10"
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10"
                  />
                  <h2 className="title-text text-primary-color">
                    {feature.title}
                  </h2>
                  <p className="small-text text-text-color/80">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary-color text-white" data-section>
          <div className="section px-5 py-20 max-md:py-14 gap-4 flex-center flex-col text-center">
            <Image
              src={regulated.icon}
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              unoptimized
              className="w-12 h-12"
            />
            <p className="secondary-heading text-secondary-color max-w-2xl">
              {regulated.text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
