"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Loading screen temática (camadas de pavimento + scan estilo aplicação técnica).
 *
 * Importante: dismiss não depende de `window.load` — corre exclusivamente em
 * `useEffect` (que dispara após primeira pintura). Mínimo 600ms para suavizar,
 * safety de 1800ms. Garante que NUNCA fica preso, mesmo que algum recurso
 * externo demore a carregar.
 */
export default function Loader() {
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const minMs = 600;
    const t = window.setTimeout(() => setHide(true), minMs);
    const safety = window.setTimeout(() => setHide(true), 1800);
    return () => { window.clearTimeout(t); window.clearTimeout(safety); };
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

      <div className="loader-stage">
        <Image
          src="/logo.png"
          alt="LAGO LIMA"
          width={1492}
          height={1022}
          priority
          sizes="(max-width: 600px) 220px, 320px"
          className="loader-logo"
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
