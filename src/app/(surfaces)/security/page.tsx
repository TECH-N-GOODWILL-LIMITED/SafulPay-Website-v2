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
      <main id="main-content" className="pt-0 gap-0 bg-[#0b1310] text-white">
        <CompanyHero intro={securityPage} />

        <section className="relative w-full overflow-hidden" data-section>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 5%, rgba(195,240,44,0.10), transparent 70%)",
            }}
          />
          <div className="section relative z-10 px-5 py-28 max-md:py-20 gap-12 text-left items-start">
            <p className="text-[clamp(16px,2.1vw,20px)] font-extralight leading-relaxed text-white/65 max-w-3xl">
              {securityData.intro}
            </p>

            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {securityData.securityFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="group flex flex-col gap-4 p-8 rounded-[22px] glass glass-hover"
                >
                  <span className="flex-center w-12 h-12 rounded-2xl bg-secondary-color/15 border border-secondary-color/25">
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
                  <h2 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.01em]">
                    {feature.title}
                  </h2>
                  <p className="text-sm font-light leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden" data-section>
          <div className="rule-fade" />
          <div className="section relative z-10 px-5 py-24 max-md:py-16 gap-5 flex-center flex-col text-center">
            <span className="flex-center w-16 h-16 rounded-2xl glass">
              <Image
                src={regulated.icon}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                unoptimized
                className="w-8 h-8 grayscale invert"
              />
            </span>
            <p className="text-[clamp(20px,3vw,32px)] font-semibold tracking-[-0.02em] max-w-2xl">
              {regulated.text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
