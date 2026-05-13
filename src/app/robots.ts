import type { MetadataRoute } from "next";
import { companyData } from "@/data/companyData";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = companyData.seo;

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Explicitly allow major AI crawlers so content appears in AI answers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}