import type { Metadata, Viewport } from "next";

export const SITE_URL = "https://lagolima.pt";

export const viewport: Viewport = {
  themeColor: "#001430",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

const LANG_ALTERNATES = {
  "pt-PT": "/",
  en: "/en",
  de: "/de",
  fr: "/fr",
  es: "/es",
  "x-default": "/"
} as const;

const SHARED_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1
  }
} as const;

/**
 * Para Google Search Console: se preferires verificação por meta tag
 * (em vez de DNS), define NEXT_PUBLIC_GSC_VERIFICATION no env e o token
 * é injetado automaticamente. Se já verificaste via DNS, ignora.
 */
const VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION
  ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
  : undefined;

export const PT_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Pavimentos Desportivos e Industriais em Portugal",
    template: "%s · LAGO LIMA"
  },
  description:
    "Pavimentos desportivos, industriais, microcimento, impermeabilização e relva artificial. Execução profissional em Portugal por equipa especializada. Peça orçamento.",
  keywords: [
    "pavimentos desportivos", "pavimentos industriais", "microcimento",
    "impermeabilização", "relva artificial", "Portugal", "Ponte de Lima",
    "pavimentos técnicos", "resinas industriais", "ETICS", "Cappotto"
  ],
  authors: [{ name: "LAGO LIMA" }],
  creator: "LAGO LIMA",
  publisher: "LAGO LIMA",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/", languages: LANG_ALTERNATES },
  robots: SHARED_ROBOTS,
  verification: VERIFICATION,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_GB", "de_DE", "fr_FR", "es_ES"],
    title: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    description:
      "Soluções profissionais em pavimentos desportivos e industriais, microcimento, impermeabilização e relva artificial em Portugal.",
    siteName: "LAGO LIMA",
    url: SITE_URL,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "LAGO LIMA — Pavimentos técnicos em Portugal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    description: "Pavimentos técnicos, microcimento, impermeabilização e relva artificial. Execução profissional em Portugal.",
    images: ["/og.jpg"]
  }
};

export const EN_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Sports & Industrial Flooring in Portugal",
    template: "%s · LAGO LIMA"
  },
  description:
    "Sports flooring, industrial flooring, microcement, waterproofing and artificial turf. Professional execution across Portugal. Get a quote.",
  keywords: [
    "sports flooring", "industrial flooring", "microcement",
    "waterproofing", "artificial turf", "Portugal", "technical flooring",
    "epoxy floors", "ETICS", "Cappotto"
  ],
  authors: [{ name: "LAGO LIMA" }],
  creator: "LAGO LIMA",
  publisher: "LAGO LIMA",
  alternates: { canonical: "/en", languages: LANG_ALTERNATES },
  robots: SHARED_ROBOTS,
  verification: VERIFICATION,
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["pt_PT", "de_DE", "fr_FR", "es_ES"],
    title: "LAGO LIMA | Sports & Industrial Flooring",
    description:
      "Professional sports and industrial flooring, microcement, waterproofing and artificial turf across Portugal.",
    siteName: "LAGO LIMA",
    url: `${SITE_URL}/en`,
    images: [{ url: "/og-en.jpg", width: 1200, height: 630, alt: "LAGO LIMA — Technical flooring in Portugal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGO LIMA | Sports & Industrial Flooring",
    description: "Technical flooring, microcement, waterproofing and artificial turf in Portugal.",
    images: ["/og-en.jpg"]
  }
};

export const DE_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Sport- und Industrieböden in Portugal",
    template: "%s · LAGO LIMA"
  },
  description:
    "Sportböden, Industrieböden, Mikrozement, Abdichtungen und Kunstrasen. Professionelle Ausführung in ganz Portugal. Angebot anfordern.",
  keywords: [
    "Sportböden", "Industrieböden", "Mikrozement",
    "Abdichtung", "Kunstrasen", "Portugal", "technische Böden",
    "Epoxidböden", "ETICS", "Cappotto"
  ],
  authors: [{ name: "LAGO LIMA" }],
  creator: "LAGO LIMA",
  publisher: "LAGO LIMA",
  alternates: { canonical: "/de", languages: LANG_ALTERNATES },
  robots: SHARED_ROBOTS,
  verification: VERIFICATION,
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["pt_PT", "en_GB", "fr_FR", "es_ES"],
    title: "LAGO LIMA | Sport- und Industrieböden",
    description:
      "Professionelle Sport- und Industrieböden, Mikrozement, Abdichtung und Kunstrasen in Portugal.",
    siteName: "LAGO LIMA",
    url: `${SITE_URL}/de`,
    images: [{ url: "/og-de.jpg", width: 1200, height: 630, alt: "LAGO LIMA — Technische Böden in Portugal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGO LIMA | Sport- und Industrieböden",
    description: "Technische Böden, Mikrozement, Abdichtung und Kunstrasen in Portugal.",
    images: ["/og-de.jpg"]
  }
};

export const FR_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Revêtements Sportifs et Industriels au Portugal",
    template: "%s · LAGO LIMA"
  },
  description:
    "Sols sportifs, sols industriels, microciment, étanchéité et gazon synthétique. Exécution professionnelle au Portugal. Demandez votre devis.",
  keywords: [
    "sols sportifs", "sols industriels", "microciment",
    "étanchéité", "gazon synthétique", "Portugal",
    "revêtements techniques", "résine époxy", "ETICS", "Cappotto"
  ],
  authors: [{ name: "LAGO LIMA" }],
  creator: "LAGO LIMA",
  publisher: "LAGO LIMA",
  alternates: { canonical: "/fr", languages: LANG_ALTERNATES },
  robots: SHARED_ROBOTS,
  verification: VERIFICATION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["pt_PT", "en_GB", "de_DE", "es_ES"],
    title: "LAGO LIMA | Revêtements Sportifs et Industriels",
    description:
      "Solutions professionnelles en sols sportifs, sols industriels, microciment, étanchéité et gazon synthétique au Portugal.",
    siteName: "LAGO LIMA",
    url: `${SITE_URL}/fr`,
    images: [{ url: "/og-fr.jpg", width: 1200, height: 630, alt: "LAGO LIMA — Revêtements techniques au Portugal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGO LIMA | Revêtements Sportifs et Industriels",
    description: "Sols techniques, microciment, étanchéité et gazon synthétique au Portugal.",
    images: ["/og-fr.jpg"]
  }
};

export const ES_META: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LAGO LIMA | Pavimentos Deportivos e Industriales en Portugal",
    template: "%s · LAGO LIMA"
  },
  description:
    "Pavimentos deportivos, industriales, microcemento, impermeabilización y césped artificial. Ejecución profesional en Portugal. Solicita presupuesto.",
  keywords: [
    "pavimentos deportivos", "pavimentos industriales", "microcemento",
    "impermeabilización", "césped artificial", "Portugal",
    "pavimentos técnicos", "resinas industriales", "ETICS", "Cappotto"
  ],
  authors: [{ name: "LAGO LIMA" }],
  creator: "LAGO LIMA",
  publisher: "LAGO LIMA",
  alternates: { canonical: "/es", languages: LANG_ALTERNATES },
  robots: SHARED_ROBOTS,
  verification: VERIFICATION,
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["pt_PT", "en_GB", "de_DE", "fr_FR"],
    title: "LAGO LIMA | Pavimentos Deportivos e Industriales",
    description:
      "Soluciones profesionales en pavimentos deportivos, industriales, microcemento, impermeabilización y césped artificial en Portugal.",
    siteName: "LAGO LIMA",
    url: `${SITE_URL}/es`,
    images: [{ url: "/og-es.jpg", width: 1200, height: 630, alt: "LAGO LIMA — Pavimentos técnicos en Portugal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LAGO LIMA | Pavimentos Deportivos e Industriales",
    description: "Pavimentos técnicos, microcemento, impermeabilización y césped artificial en Portugal.",
    images: ["/og-es.jpg"]
  }
};
