import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { LangProvider } from "@/components/LangProvider";
import { PT_META, viewport as vp } from "@/lib/seo";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport = vp;
export const metadata = PT_META;

export default function PtRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <LangProvider initialLang="pt">{children}</LangProvider>
      </body>
    </html>
  );
}
