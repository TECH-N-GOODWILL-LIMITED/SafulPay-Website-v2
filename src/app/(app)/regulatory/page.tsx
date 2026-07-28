import type { Metadata } from "next";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { contactInfo } from "@/data/appContent";
import { regulatoryPage, regulatoryPoints } from "@/data/companyPages";
import CompanyHero from "@/components/company/CompanyHero";
import Aurora from "@/components/ui/Aurora";
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
          <div className="shell flex flex-col px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16 gap-8 text-left items-start">
            <div className="w-full flex items-center gap-6 p-8 rounded-[22px] wash-mint border border-primary-shade-10 max-md:flex-col max-md:text-center">
              <span className="flex-center w-16 h-16 rounded-2xl bg-white border border-primary-shade-10 shrink-0 shadow-[0_12px_30px_-14px_rgba(58,86,70,0.5)]">
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
              <p className="text-[clamp(18px,2.6vw,28px)] font-semibold tracking-[-0.02em] text-primary-color text-left max-md:text-center">
                {regulated.text}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {regulatoryPoints.map((point) => (
                <article
                  key={point.title}
                  className="flex flex-col gap-3 p-8 rounded-[22px] card-light card-light-hover"
                >
                  <h2 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.01em] text-primary-color">
                    {point.title}
                  </h2>
                  <p className="text-sm font-light leading-relaxed text-text-color/65">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background px-6 sm:px-10 lg:px-14 pb-24 max-md:pb-16" data-section>
          <div className="relative shell rounded-[36px] max-md:rounded-[26px] overflow-hidden bg-[#0d1613] text-white isolate">
            <Aurora variant="lime" />
            <div className="relative z-10 px-14 py-16 max-lg:px-9 max-md:px-6 max-md:py-12 flex flex-col gap-5 text-left items-start">
              <h2 className="text-[clamp(24px,3.6vw,40px)] font-bold tracking-[-0.03em]">
                Raise a <span className="text-gradient-lime">complaint</span>
              </h2>
              <p className="text-white/65 font-light max-w-2xl">
                If a transaction goes wrong, contact our support team directly.
                We are available around the clock.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactInfo.supportEmail}`}
                  className="glass glass-hover px-5 py-3 rounded-full text-sm font-medium text-secondary-color"
                >
                  {contactInfo.supportEmail}
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                  className="glass glass-hover px-5 py-3 rounded-full text-sm font-medium text-secondary-color"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
