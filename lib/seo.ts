import type { Metadata, Viewport } from "next";

export const SITE_URL = "https://lagolima.pt";

export const viewport: Viewport = {
  themeColor: "#001430",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export const PT_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    template: "%s · LAGO LIMA"
  },
  description:
    "Soluções profissionais em pavimentos desportivos e industriais, microcimento, impermeabilização e relva artificial em Portugal.",
  keywords: [
    "pavimentos desportivos", "pavimentos industriais", "microcimento",
    "impermeabilização", "relva artificial", "Portugal"
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-PT": "/", en: "/en", "x-default": "/" }
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_GB"],
    title: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    description:
      "Soluções profissionais em pavimentos desportivos e industriais, microcimento, impermeabilização e relva artificial em Portugal.",
    siteName: "LAGO LIMA",
    url: SITE_URL
  }
};

export const EN_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Sports & Industrial Flooring",
    template: "%s · LAGO LIMA"
  },
  description:
    "Professional sports and industrial flooring, microcement, waterproofing and artificial turf solutions across Portugal.",
  keywords: [
    "sports flooring", "industrial flooring", "microcement",
    "waterproofing", "artificial turf", "Portugal"
  ],
  alternates: {
    canonical: "/en",
    languages: { "pt-PT": "/", en: "/en", "x-default": "/" }
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["pt_PT"],
    title: "LAGO LIMA | Sports & Industrial Flooring",
    description:
      "Professional sports and industrial flooring, microcement, waterproofing and artificial turf solutions across Portugal.",
    siteName: "LAGO LIMA",
    url: `${SITE_URL}/en`
  }
};
