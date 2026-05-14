export type Benefit = { idx: string; icon: string; title: string; desc: string };

export const BENEFITS: Benefit[] = [
  { idx: "/01", icon: "shield", title: "Resistência e durabilidade", desc: "Materiais e camadas adequadas a uso intensivo e a longo prazo." },
  { idx: "/02", icon: "tool", title: "Execução técnica especializada", desc: "Equipa formada para pavimentos contínuos, desportivos e industriais." },
  { idx: "/03", icon: "plan", title: "Soluções adaptadas ao espaço", desc: "Cada projeto começa com análise rigorosa do local e da utilização." },
  { idx: "/04", icon: "clock", title: "Materiais adequados à utilização", desc: "Especificação técnica em função de carga, exposição e tráfego." },
  { idx: "/05", icon: "finish", title: "Acabamentos limpos e profissionais", desc: "Atenção ao detalhe nas juntas, remates e superfícies finais." },
  { idx: "/06", icon: "calendar", title: "Cumprimento de prazos", desc: "Planeamento realista, entregas dentro do calendário definido." }
];
