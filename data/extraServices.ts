export type ExtraService = {
  id: string;
  num: string;
  specs: string[];
  image: string;
};

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "isolamento",
    num: "01",
    specs: ["ETICS", "Cappotto", "Térmico", "Acústico"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "remodelacao",
    num: "02",
    specs: ["Acabamentos premium", "Design contemporâneo", "Execução técnica"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "reabilitacao",
    num: "03",
    specs: ["Reabilitação estrutural", "Preservação patrimonial", "Materiais certificados"],
    image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=1400&auto=format&fit=crop"
  }
];
