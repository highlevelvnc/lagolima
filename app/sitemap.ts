import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ALT = {
  "pt-PT": `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
  de: `${SITE_URL}/de`,
  fr: `${SITE_URL}/fr`,
  es: `${SITE_URL}/es`
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = { lastModified: now, changeFrequency: "monthly" as const, alternates: { languages: ALT } };
  return [
    { url: `${SITE_URL}/`, priority: 1.0, ...base },
    { url: `${SITE_URL}/en`, priority: 0.9, ...base },
    { url: `${SITE_URL}/de`, priority: 0.9, ...base },
    { url: `${SITE_URL}/fr`, priority: 0.9, ...base },
    { url: `${SITE_URL}/es`, priority: 0.9, ...base }
  ];
}
