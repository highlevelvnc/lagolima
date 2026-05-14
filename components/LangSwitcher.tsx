"use client";
import { useT } from "./LangProvider";
import { LANGS } from "@/lib/i18n";

export default function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useT();
  return (
    <div className={`lang-switch${compact ? " compact" : ""}`} role="group" aria-label="Idioma">
      {LANGS.map((l) => (
        <button
          key={l}
          className={`lang-btn${lang === l ? " active" : ""}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          type="button"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
