export type Value = { icon: "star" | "shield" | "check" | "target" | "drop"; label: string };

export const VALUES: Value[] = [
  { icon: "star", label: "Qualidade" },
  { icon: "shield", label: "Resistência" },
  { icon: "check", label: "Confiança" },
  { icon: "target", label: "Precisão" },
  { icon: "drop", label: "Durabilidade" }
];
