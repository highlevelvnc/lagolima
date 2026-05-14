import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { LangProvider } from "@/components/LangProvider";
import { EN_META, viewport as vp } from "@/lib/seo";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport = vp;
export const metadata = EN_META;

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <LangProvider initialLang="en">{children}</LangProvider>
      </body>
    </html>
  );
}
