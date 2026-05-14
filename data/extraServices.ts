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
    image: "/projetos/isolamento-real.jpg"
  },
  {
    id: "remodelacao",
    num: "02",
    specs: ["Acabamentos premium", "Design contemporâneo", "Execução técnica"],
    image: "/projetos/remodelacao-real.jpg"
  },
  {
    id: "reabilitacao",
    num: "03",
    specs: ["Reabilitação estrutural", "Preservação patrimonial", "Materiais certificados"],
    image: "/projetos/reabilitacao-real.jpg"
  }
];
