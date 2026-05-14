export type Service = {
  slug: string;
  num: string;
  title: string;
  desc: string;
  image: string;
  icon: "sport" | "industry" | "micro" | "water" | "turf";
  span?: number;
};

export const SERVICES: Service[] = [
  {
    slug: "pavimentos-desportivos",
    num: "01 / SPORT",
    title: "Pavimentos Desportivos",
    desc: "Superfícies para campos, courts e pavilhões. Aderência, amortecimento e durabilidade para uso intensivo.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    icon: "sport",
    span: 2
  },
  {
    slug: "pavimentos-industriais",
    num: "02 / INDUSTRY",
    title: "Pavimentos Industriais",
    desc: "Resinas técnicas e pavimentos contínuos para pavilhões, armazéns e espaços com elevada carga mecânica.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    icon: "industry",
    span: 2
  },
  {
    slug: "microcimento",
    num: "03 / MICRO",
    title: "Microcimento",
    desc: "Acabamento contínuo e moderno para pavimentos e paredes. Estética premium com alta resistência.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
    icon: "micro",
    span: 2
  },
  {
    slug: "impermeabilizacao",
    num: "04 / WATER",
    title: "Impermeabilização",
    desc: "Coberturas, terraços, varandas e fundações. Proteção total contra infiltrações e humidade.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",
    icon: "water",
    span: 3
  },
  {
    slug: "relva-artificial",
    num: "05 / TURF",
    title: "Relva Artificial",
    desc: "Aplicação em campos, jardins e zonas exteriores. Estética natural sem manutenção exigente.",
    image: "https://images.unsplash.com/photo-1592991538534-00b298f49f6f?q=80&w=1400&auto=format&fit=crop",
    icon: "turf",
    span: 3
  }
];
