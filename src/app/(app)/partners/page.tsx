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
          <div className="shell flex flex-col px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16 gap-10 text-left items-start">
            <h2 className="text-[clamp(28px,4.6vw,54px)] font-bold tracking-[-0.035em] leading-[1.03] text-left text-primary-color">
              Who we <span className="text-gradient-green">connect</span>
            </h2>

            <div className="w-full grid grid-cols-3 max-md:grid-cols-2 gap-4">
              {partners.map((partner) => (
                <figure
                  key={partner.name}
                  className="flex flex-col items-center justify-center gap-4 p-8 rounded-[22px] card-light card-light-hover"
                >
                  <span className="flex-center h-12 w-full">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={48}
                      unoptimized
                      className="h-10 w-auto object-contain"
                    />
                  </span>
                  <figcaption className="text-sm font-medium text-text-color/70 text-center">
                    {partner.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16" data-section>
          <div className="shell rounded-[36px] max-md:rounded-[26px] wash-mint border border-primary-shade-10 px-14 py-16 max-lg:px-9 max-md:px-6 max-md:py-12 flex flex-col gap-10 text-left">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-[clamp(26px,4.2vw,48px)] font-bold tracking-[-0.035em] leading-[1.05] text-left text-primary-color">
                {bridgeData.title}
              </h2>
              <p className="text-[clamp(15px,1.9vw,19px)] font-extralight leading-relaxed text-text-color/65">
                {bridgeData.description}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {[bridgeData.sources, bridgeData.destinations].map((group) => (
                <div
                  key={group.title}
                  className="flex flex-col gap-5 p-8 rounded-[22px] card-light"
                >
                  <h3 className="text-[clamp(16px,1.9vw,20px)] font-semibold text-primary-color">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3.5 py-1.5 rounded-full bg-primary-shade-5 border border-primary-shade-10 text-sm font-light text-text-color/75"
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
