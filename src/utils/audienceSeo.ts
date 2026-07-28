import type { Metadata } from "next";
import type { AudienceSurface } from "@/data/audiences";
import { companyData } from "@/data/companyData";

const { company, seo } = companyData;

/** Page metadata for an audience surface — same shape for all four. */
export function audienceMetadata(surface: AudienceSurface): Metadata {
  const url = `${seo.siteUrl}${surface.path}`;

  return {
    title: surface.seo.title,
    description: surface.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${surface.seo.title} | ${company.name}`,
      description: surface.seo.description,
      url,
    },
  };
}

/**
 * Service schema for an audience surface. Each capability becomes an offer in
 * the catalog, which keeps the structured data honest: only what the page
 * actually publishes shows up here.
 */
export function audienceSchema(surface: AudienceSurface) {
  const url = `${seo.siteUrl}${surface.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${company.name} ${surface.navLabel}`,
    serviceType: surface.navLabel,
    url,
    description: surface.definition,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: seo.siteUrl,
    },
    areaServed: { "@type": "Country", name: "Sierra Leone" },
    audience: { "@type": "Audience", audienceType: surface.navLabel },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `What you can do today — ${surface.navLabel}`,
      itemListElement: surface.capabilities.map((capability) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          description: capability.description,
        },
      })),
    },
  };
}
