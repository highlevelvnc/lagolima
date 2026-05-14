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
    image: "/projetos/sport-pavilhao-real.jpg",
    icon: "sport",
    span: 2
  },
  {
    slug: "pavimentos-industriais",
    num: "02 / INDUSTRY",
    title: "Pavimentos Industriais",
    desc: "Resinas técnicas e pavimentos contínuos para pavilhões, armazéns e espaços com elevada carga mecânica.",
    image: "/projetos/industrial-real.jpg",
    icon: "industry",
    span: 2
  },
  {
    slug: "microcimento",
    num: "03 / MICRO",
    title: "Microcimento",
    desc: "Acabamento contínuo e moderno para pavimentos e paredes. Estética premium com alta resistência.",
    image: "/projetos/micro-real.jpg",
    icon: "micro",
    span: 2
  },
  {
    slug: "impermeabilizacao",
    num: "04 / WATER",
    title: "Impermeabilização",
    desc: "Coberturas, terraços, varandas e fundações. Proteção total contra infiltrações e humidade.",
    image: "/projetos/water-piscina-casa.jpg",
    icon: "water",
    span: 3
  },
  {
    slug: "relva-artificial",
    num: "05 / TURF",
    title: "Relva Artificial",
    desc: "Aplicação em campos, jardins e zonas exteriores. Estética natural sem manutenção exigente.",
    image: "/projetos/turf-campo-detalhe.jpg",
    icon: "turf",
    span: 3
  }
];
