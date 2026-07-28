import type { MetadataRoute } from "next";
import { companyData } from "@/data/companyData";
import { audienceSurfaces } from "@/data/audiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = companyData.seo;

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },

    // The four audience doors — the primary surfaces of the site.
    ...audienceSurfaces.map((surface) => ({
      url: `${siteUrl}${surface.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    // Company section — the institutional trust layer.
    { url: `${siteUrl}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/security`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/partners`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/regulatory`, changeFrequency: "monthly", priority: 0.7 },

    { url: `${siteUrl}/download`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact-us`, changeFrequency: "monthly", priority: 0.7 },

    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${siteUrl}/terms-and-condition`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
