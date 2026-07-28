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
          <div className="shell flex flex-col px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16 gap-10 text-left items-start">
            <p className="text-[clamp(16px,2vw,20px)] font-extralight leading-relaxed text-text-color/70 max-w-3xl">
              {securityData.intro}
            </p>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {securityData.securityFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col gap-4 p-8 rounded-[22px] card-light card-light-hover"
                >
                  <span className="flex-center w-12 h-12 rounded-2xl bg-linear-to-br from-primary-color to-[#67967b] shadow-[0_10px_24px_-12px_rgba(58,86,70,0.8)]">
                    <Image
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                      unoptimized
                      className="w-6 h-6 grayscale invert"
                    />
                  </span>
                  <h2 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.01em] text-primary-color">
                    {feature.title}
                  </h2>
                  <p className="text-sm font-light leading-relaxed text-text-color/65">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16" data-section>
          <div className="shell rounded-[36px] max-md:rounded-[26px] wash-mint border border-primary-shade-10 px-14 py-16 max-lg:px-9 max-md:px-6 max-md:py-12 flex-center flex-col gap-5 text-center">
            <span className="flex-center w-16 h-16 rounded-2xl bg-white border border-primary-shade-10 shadow-[0_12px_30px_-14px_rgba(58,86,70,0.5)]">
              <Image
                src={regulated.icon}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                unoptimized
                className="w-8 h-8"
              />
            </span>
            <p className="text-[clamp(20px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary-color max-w-2xl">
              {regulated.text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
