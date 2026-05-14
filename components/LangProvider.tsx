"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DICT, DEFAULT_LANG, LANGS, type Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof DICT)["pt"] };

const LangCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "lagolima.lang";

function detect(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && LANGS.includes(saved)) return saved;
  const nav = (window.navigator.language || "").toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Server e primeira render usam DEFAULT_LANG ("pt") para evitar hydration mismatch.
  // Após mount, detectamos e ajustamos.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const d = detect();
    if (d !== lang) setLangState(d);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-PT" : "en");
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch {}
  }, [lang]);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: setLangState,
    t: DICT[lang] as (typeof DICT)["pt"]
  }), [lang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LangProvider");
  return ctx;
}
