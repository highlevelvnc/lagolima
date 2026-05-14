"use client";
import { useEffect, useRef } from "react";
import { useT } from "./LangProvider";

export default function ParallaxBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useT();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }),
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
          autoPlay loop muted playsInline preload="metadata" aria-hidden
        />
      </div>
      <div className="banner-inner">
        <span className="eyebrow on-dark" style={{ justifyContent: "center" }} data-reveal>{t.banner.eyebrow}</span>
        <h2 data-reveal>
          {t.banner.title1} <em>{t.banner.titleAccent}</em>{t.banner.title2}
        </h2>
        <div className="marks" data-reveal>
          {t.banner.marks.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>
    </section>
  );
}
