export type PartnerService = {
  id: string;
  num: string;
  tag: string;
  title: string;
  desc: string;
  specs: string[];
  image: string;
};

export const PARTNER = {
  name: "PC Work Vertical",
  tagline: "Especialistas em trabalhos verticais e fachadas",
  url: "https://pcworkvertical.pt",
  email: "geral@pcworkvertical.pt"
} as const;

export const PARTNER_SERVICES: PartnerService[] = [
  {
    id: "isolamento",
    num: "01",
    tag: "Isolamento",
    title: "Isolamento de Fachadas",
    desc: "Sistemas térmicos e acústicos de alta performance (ETICS / Cappotto), com eficiência energética e durabilidade estrutural certificada.",
    specs: ["ETICS", "Cappotto", "Térmico", "Acústico"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "remodelacao",
    num: "02",
    tag: "Interiores",
    title: "Remodelação",
    desc: "Transformação de espaços com acabamentos premium e execução técnica rigorosa para projetos residenciais e comerciais.",
    specs: ["Acabamentos premium", "Design contemporâneo", "Execução técnica"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "reabilitacao",
    num: "03",
    tag: "Estrutura",
    title: "Reabilitação",
    desc: "Restauração estética e funcional de edifícios degradados — preservação patrimonial e reforço estrutural com materiais certificados.",
    specs: ["Reabilitação estrutural", "Preservação patrimonial", "Materiais certificados"],
    image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=1400&auto=format&fit=crop"
  }
];
