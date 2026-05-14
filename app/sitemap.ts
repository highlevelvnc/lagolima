import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: { languages: { "pt-PT": `${SITE_URL}/`, en: `${SITE_URL}/en` } }
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "pt-PT": `${SITE_URL}/`, en: `${SITE_URL}/en` } }
    }
  ];
}
