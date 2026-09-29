import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          id: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          id: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
  ];
}
