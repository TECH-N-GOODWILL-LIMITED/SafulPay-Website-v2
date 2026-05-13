import type { MetadataRoute } from "next";
import { companyData } from "@/data/companyData";

const { company, seo } = companyData;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.name,
    description: seo.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: seo.backgroundColor,
    theme_color: seo.themeColor,
    categories: ["finance", "utilities"],
    icons: [
      {
        src: "/safulpay-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/safulpay-icon-green.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}