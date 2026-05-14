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
  { id: "p1", title: "Pavimento de campo desportivo", category: "Desportivo", image: "https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?q=80&w=1400&auto=format&fit=crop", size: "lg" },
  { id: "p2", title: "Pavimento de pavilhão técnico", category: "Industrial", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop", size: "md" },
  { id: "p3", title: "Acabamento contínuo interior", category: "Microcimento", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop", size: "sm" },
  { id: "p4", title: "Cobertura técnica", category: "Impermeabilização", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop", size: "sm" },
  { id: "p5", title: "Aplicação em zona exterior", category: "Relva Artificial", image: "https://images.unsplash.com/photo-1592991538534-00b298f49f6f?q=80&w=1200&auto=format&fit=crop", size: "md" },
  { id: "p6", title: "Superfície multi-uso", category: "Desportivo", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop", size: "lg" }
];
