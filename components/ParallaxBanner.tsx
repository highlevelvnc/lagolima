"use client";
import { useEffect, useRef } from "react";

/**
 * Banner com vídeo de fundo (lavagem técnica de pavimentos).
 * - autoplay/loop/muted/playsInline → funciona em iOS Safari
 * - IntersectionObserver: pausa o vídeo quando fora do viewport (poupa bateria/dados)
 * - Em prefers-reduced-motion, não inicia o vídeo (mantém poster)
 */
export default function ParallaxBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.15 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="banner">
      <div className="banner-bg parallax-bg" aria-hidden>
        <video
          ref={videoRef}
          className="banner-video ken-burns"
          src="/video/lavagem-pavimentos.mp4"
          poster="/video/lavagem-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
        />
      </div>
      <div className="banner-inner">
        <span className="eyebrow on-dark" style={{ justifyContent: "center" }} data-reveal>
          Engenharia de Superfícies
        </span>
        <h2 data-reveal>
          Construímos superfícies preparadas para <em>uso intenso</em>, desempenho e longa duração.
        </h2>
        <div className="marks" data-reveal>
          <span>ANTI-DERRAPANTE</span>
          <span>UV RESISTANTE</span>
          <span>USO INTENSIVO</span>
          <span>ALTA ADERÊNCIA</span>
        </div>
      </div>
    </section>
  );
}
