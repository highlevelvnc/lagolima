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
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400&auto=format&fit=crop",
    icon: "sport",
    span: 2
  },
  {
    slug: "pavimentos-industriais",
    num: "02 / INDUSTRY",
    title: "Pavimentos Industriais",
    desc: "Resinas técnicas e pavimentos contínuos para pavilhões, armazéns e espaços com elevada carga mecânica.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1400&auto=format&fit=crop",
    icon: "industry",
    span: 2
  },
  {
    slug: "microcimento",
    num: "03 / MICRO",
    title: "Microcimento",
    desc: "Acabamento contínuo e moderno para pavimentos e paredes. Estética premium com alta resistência.",
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=1400&auto=format&fit=crop",
    icon: "micro",
    span: 2
  },
  {
    slug: "impermeabilizacao",
    num: "04 / WATER",
    title: "Impermeabilização",
    desc: "Coberturas, terraços, varandas e fundações. Proteção total contra infiltrações e humidade.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1400&auto=format&fit=crop",
    icon: "water",
    span: 3
  },
  {
    slug: "relva-artificial",
    num: "05 / TURF",
    title: "Relva Artificial",
    desc: "Aplicação em campos, jardins e zonas exteriores. Estética natural sem manutenção exigente.",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1400&auto=format&fit=crop",
    icon: "turf",
    span: 3
  }
];
