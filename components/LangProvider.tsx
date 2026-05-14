"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { DICT, DEFAULT_LANG, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof DICT)["pt"];
};

const LangCtx = createContext<Ctx | null>(null);

/**
 * O idioma é determinado pela rota:
 *  - "/"      → PT (default)
 *  - "/en"    → EN
 *
 * `initialLang` é passado pelo layout do route group, garantindo SSR
 * consistente (sem hydration mismatch e com `<html lang>` correto).
 *
 * `setLang` navega para a rota correspondente em vez de mudar estado.
 */
export function LangProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  const [lang] = useState<Lang>(initialLang);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-PT" : "en");
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    // Mantém âncora (#contactos, etc.) na navegação entre línguas
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const target = l === "pt" ? "/" : `/${l}`;
    router.push(`${target}${hash}`);
  };

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang,
    t: DICT[lang] as (typeof DICT)["pt"]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [lang, pathname]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LangProvider");
  return ctx;
}

export { DEFAULT_LANG };
