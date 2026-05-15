import { SITE_URL } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import type { Lang } from "@/lib/i18n";

/**
 * Structured Data (schema.org) — Organization + LocalBusiness + WebSite + Services.
 * Injetado em <head> via <script type="application/ld+json">.
 * Cada idioma passa o seu próprio idioma + URL canónico.
 */
type Props = { lang: Lang };

const PHONE_E164 = "+351964783836";

const SERVICE_NAMES: Record<Lang, string[]> = {
  pt: ["Pavimentos Desportivos", "Pavimentos Industriais", "Microcimento", "Impermeabilização", "Relva Artificial"],
  en: ["Sports Flooring", "Industrial Flooring", "Microcement", "Waterproofing", "Artificial Turf"],
  de: ["Sportböden", "Industrieböden", "Mikrozement", "Abdichtung", "Kunstrasen"],
  fr: ["Sols Sportifs", "Sols Industriels", "Microciment", "Étanchéité", "Gazon Synthétique"],
  es: ["Pavimentos Deportivos", "Pavimentos Industriales", "Microcemento", "Impermeabilización", "Césped Artificial"]
};

const DESC: Record<Lang, string> = {
  pt: "Pavimentos desportivos, industriais, microcimento, impermeabilização e relva artificial. Execução profissional em Portugal.",
  en: "Sports flooring, industrial flooring, microcement, waterproofing and artificial turf. Professional execution across Portugal.",
  de: "Sportböden, Industrieböden, Mikrozement, Abdichtungen und Kunstrasen. Professionelle Ausführung in ganz Portugal.",
  fr: "Sols sportifs, sols industriels, microciment, étanchéité et gazon synthétique. Exécution professionnelle au Portugal.",
  es: "Pavimentos deportivos, industriales, microcemento, impermeabilización y césped artificial. Ejecución profesional en Portugal."
};

const AREA: Record<Lang, string> = {
  pt: "Portugal Continental",
  en: "Mainland Portugal",
  de: "Festland-Portugal",
  fr: "Portugal continental",
  es: "Portugal continental"
};

const CATALOG: Record<Lang, string> = {
  pt: "Serviços", en: "Services", de: "Leistungen", fr: "Prestations", es: "Servicios"
};

export default function JsonLd({ lang }: Props) {
  const url = lang === "pt" ? SITE_URL : `${SITE_URL}/${lang}`;
  const langTag = lang === "pt" ? "pt-PT" : lang;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.fullName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.jpg`,
    email: COMPANY.email,
    telephone: PHONE_E164,
    sameAs: ["https://www.facebook.com/share/1BkM1wZVUZ/"]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}#localbusiness`,
    name: COMPANY.name,
    description: DESC[lang],
    url,
    telephone: PHONE_E164,
    email: COMPANY.email,
    image: `${SITE_URL}/og.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressRegion: "Viana do Castelo",
      addressLocality: "Ponte de Lima"
    },
    areaServed: { "@type": "Country", name: AREA[lang] },
    parentOrganization: { "@id": `${SITE_URL}#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: CATALOG[lang],
      itemListElement: SERVICE_NAMES[lang].map((n, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: n, provider: { "@id": `${SITE_URL}#organization` } }
      }))
    }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: COMPANY.name,
    inLanguage: langTag,
    publisher: { "@id": `${SITE_URL}#organization` }
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: COMPANY.fullName,
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: { "@id": `${SITE_URL}#organization` },
    inLanguage: langTag,
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og${lang === "pt" ? "" : `-${lang}`}.jpg` }
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, webpage]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
