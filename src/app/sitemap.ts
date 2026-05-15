import type { MetadataRoute } from "next";
import { companyData } from "@/data/companyData";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = companyData.seo;

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/platform`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about-us`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/download`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-condition`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
