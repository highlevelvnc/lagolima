export const COMPANY = {
  name: "LAGO LIMA",
  tagline: "PAVIMENTOS TÉCNICOS",
  fullName: "LAGO LIMA — Pavimentos Desportivos e Industriais",
  region: "Portugal Continental",
  email: "lagolima.lda@gmail.com",
  phone: "964 783 836",
  phoneIntl: "+351964783836"
} as const;

export const WHATSAPP_MESSAGE =
  "Olá, gostaria de pedir um orçamento para um projeto com a LAGO LIMA.";

export const WHATSAPP_URL = `https://wa.me/351964783836?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contactos", label: "Contactos" }
] as const;
