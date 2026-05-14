"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Loading screen temática: simula a aplicação técnica de um pavimento.
 *  - Fundo navy escuro (cor da marca)
 *  - 3 camadas inferiores (gravilha / base / acabamento) que sobem em sequência
 *  - "Scan/trowel" horizontal que percorre o logo, sugerindo aplicação de microcimento
 *  - Logo real centrado num cartão branco para preservar contraste
 *
 * Dismiss: max(800ms, window.load). Após hide, ignora cliques (pointer-events:none).
 */
export default function Loader() {
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const minMs = 800;

    const dismiss = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => setHide(true), wait);
    };

    if (document.readyState === "complete") dismiss();
    else window.addEventListener("load", dismiss, { once: true });

    // safety: nunca deixar o loader visível mais de 4s
    const safety = window.setTimeout(() => setHide(true), 4000);

    return () => {
      window.removeEventListener("load", dismiss);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!hide) return;
    const t = window.setTimeout(() => setRemoved(true), 700);
    return () => window.clearTimeout(t);
  }, [hide]);

  if (removed) return null;

  return (
    <div className={`loader${hide ? " loader-hide" : ""}`} aria-hidden={hide} role="status" aria-live="polite">
      <div className="loader-bg" />
      <div className="loader-grid" />

      <div className="loader-card">
        <Image
          src="/logo.png"
          alt="LAGO LIMA"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 600px) 220px, 320px"
          style={{ width: "auto", height: "auto", maxWidth: "320px", maxHeight: "180px" }}
        />
        <div className="loader-scan" aria-hidden />
      </div>

      <div className="loader-status">
        <span className="loader-tag">A preparar superfícies</span>
        <span className="loader-dots"><i /><i /><i /></span>
      </div>

      {/* camadas de pavimento que sobem (gravilha · base · acabamento) */}
      <div className="loader-layers" aria-hidden>
        <span className="layer l1" />
        <span className="layer l2" />
        <span className="layer l3" />
      </div>
    </div>
  );
}
