import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#001430",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lagolima.pt"),
  title: {
    default: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    template: "%s · LAGO LIMA"
  },
  description:
    "Soluções profissionais em pavimentos desportivos e industriais, microcimento, impermeabilização e relva artificial em Portugal. Sports flooring, microcement, waterproofing and artificial turf — Portugal.",
  keywords: [
    "pavimentos desportivos", "pavimentos industriais", "microcimento",
    "impermeabilização", "relva artificial", "Portugal",
    "sports flooring", "industrial flooring", "microcement",
    "waterproofing", "artificial turf"
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-PT": "/", "en": "/", "x-default": "/" }
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_GB"],
    title: "LAGO LIMA | Pavimentos Desportivos e Industriais",
    description:
      "Soluções profissionais em pavimentos desportivos e industriais, microcimento, impermeabilização e relva artificial em Portugal.",
    siteName: "LAGO LIMA"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
