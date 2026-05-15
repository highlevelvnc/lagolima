import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { LangProvider } from "@/components/LangProvider";
import { FR_META, viewport as vp } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport = vp;
export const metadata = FR_META;

export default function FrRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <JsonLd lang="fr" />
      </head>
      <body>
        <LangProvider initialLang="fr">{children}</LangProvider>
      </body>
    </html>
  );
}
