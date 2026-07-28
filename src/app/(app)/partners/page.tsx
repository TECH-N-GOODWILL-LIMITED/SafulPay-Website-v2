import type { Metadata } from "next";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { bridgeData } from "@/data/appContent";
import { partnersPage } from "@/data/companyPages";
import CompanyHero from "@/components/company/CompanyHero";
import JsonLd from "@/components/shared/JsonLd";

const { company, seo, partners } = companyData;

export const metadata: Metadata = {
  title: partnersPage.seo.title,
  description: partnersPage.seo.description,
  alternates: { canonical: `${seo.siteUrl}${partnersPage.path}` },
  openGraph: {
    title: `${partnersPage.seo.title} | ${company.name}`,
    description: partnersPage.seo.description,
    url: `${seo.siteUrl}${partnersPage.path}`,
  },
};

const partnersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${partnersPage.seo.title} | ${company.name}`,
  url: `${seo.siteUrl}${partnersPage.path}`,
  description: partnersPage.seo.description,
  isPartOf: { "@type": "WebSite", name: company.name, url: seo.siteUrl },
  mentions: partners.map((partner) => ({
    "@type": "Organization",
    name: partner.name,
  })),
};

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={partnersSchema} />
      <main id="main-content" className="pt-0 gap-0 bg-background">
        <CompanyHero intro={partnersPage} />

        <section className="w-full bg-background" data-section>
          <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
            <h2 className="primary-heading text-primary-color text-left">
              Who we connect
            </h2>

            <div className="w-full grid grid-cols-3 max-md:grid-cols-2 gap-5">
              {partners.map((partner) => (
                <figure
                  key={partner.name}
                  className="flex flex-col items-center justify-center gap-4 p-7 rounded-[20px] bg-primary-shade-5 border border-primary-shade-10"
                >
                  <Image
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={48}
                    unoptimized
                    className="h-10 w-auto object-contain"
                  />
                  <figcaption className="small-text text-primary-color font-semibold text-center">
                    {partner.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          className="w-full bg-linear-to-br from-primary-shade-5 via-background to-secondary-color/10"
          data-section
        >
          <div className="section px-5 py-24 max-md:py-16 gap-10 text-left items-start">
            <div className="flex flex-col gap-3">
              <h2 className="primary-heading text-primary-color text-left">
                {bridgeData.title}
              </h2>
              <p className="text-[clamp(16px,2.2vw,20px)] font-extralight text-text-color/85 max-w-3xl">
                {bridgeData.description}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-5">
              {[bridgeData.sources, bridgeData.destinations].map((group) => (
                <div
                  key={group.title}
                  className="flex flex-col gap-4 p-7 rounded-[20px] bg-white border border-primary-shade-10"
                >
                  <h3 className="title-text text-primary-color">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-primary-shade-5 border border-primary-shade-10 text-sm font-light text-text-color/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
