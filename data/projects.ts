export type ProjectCategory =
  | "Desportivo"
  | "Industrial"
  | "Microcimento"
  | "Impermeabilização"
  | "Relva Artificial";

export const PROJECT_FILTERS: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Desportivo",
  "Industrial",
  "Microcimento",
  "Impermeabilização",
  "Relva Artificial"
];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  size: "lg" | "md" | "sm";
};

export const PROJECTS: Project[] = [
  { id: "p1", title: "Pavilhão multiuso premium", category: "Desportivo", image: "/projetos/sport-arena.jpg", size: "lg" },
  { id: "p2", title: "Transformação de pavilhão", category: "Industrial", image: "/projetos/sport-pavilhao-transformacao.jpg", size: "md" },
  { id: "p3", title: "Acabamento contínuo brilhante", category: "Microcimento", image: "/projetos/micro-interior-glossy.jpg", size: "sm" },
  { id: "p4", title: "Piscina e área exterior", category: "Impermeabilização", image: "/projetos/water-piscina-pedra.jpg", size: "sm" },
  { id: "p5", title: "Campo de relva sintética", category: "Relva Artificial", image: "/projetos/turf-campo-detalhe.jpg", size: "md" },
  { id: "p6", title: "Polidesportivo exterior", category: "Desportivo", image: "/projetos/sport-polidesportivo.jpg", size: "lg" },
  { id: "p7", title: "Pavimento industrial técnico", category: "Industrial", image: "/projetos/industrial-pavilhao.jpg", size: "md" },
  { id: "p8", title: "Jardim com relva artificial", category: "Relva Artificial", image: "/projetos/turf-casa.jpg", size: "sm" },
  { id: "p9", title: "Terraço impermeabilizado", category: "Impermeabilização", image: "/projetos/water-piscina-moderna.jpg", size: "sm" }
];
