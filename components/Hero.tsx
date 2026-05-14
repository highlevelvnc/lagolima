"use client";
import { ArrowRight } from "./Icons";
import { useT } from "./LangProvider";

export default function Hero() {
  const { t } = useT();
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-bg" />
      <div className="hero-blob a" />
      <div className="hero-blob b" />

      <div className="container-x hero-inner">
        <div>
          <span className="hero-eyebrow" data-reveal>{t.hero.eyebrow}</span>
          <h1 className="hero-h1">
            {t.hero.titleWords.map((w, i) => (
              <span
                key={i}
                className={`word${("accent" in w && w.accent) ? " accent" : ""}`}
                style={{ ["--d" as any]: `${i * 70}ms` }}
              >
                {w.text}
              </span>
            ))}
          </h1>
          <p className="lead" data-reveal>{t.hero.lead}</p>
          <div className="hero-actions" data-reveal>
            <a href="#contactos" className="btn btn-primary magnetic">{t.hero.ctaPrimary} <ArrowRight className="arrow" /></a>
            <a href="#servicos" className="btn btn-ghost">{t.hero.ctaSecondary} <ArrowRight className="arrow" /></a>
          </div>
          <div className="hero-meta">
            <div data-reveal><span>{t.hero.metaA}</span><strong>{t.hero.metaAValue}</strong></div>
            <div data-reveal><span>{t.hero.metaB}</span><strong>{t.hero.metaBValue}</strong></div>
            <div data-reveal><span>{t.hero.metaC}</span><strong>{t.hero.metaCValue}</strong></div>
          </div>
        </div>

        <div className="hero-visual" data-reveal="scale">
          <div className="hv-tech">LAGO·LIMA — TECH SURFACES — PT</div>
          <div className="hv-card hv-1 parallax" data-speed="0.06" aria-hidden />
          <div className="hv-card hv-2 parallax" data-speed="0.12" aria-hidden />
          <div className="hv-card hv-3 parallax" data-speed="0.18">
            <div className="k">{t.hero.metaA}</div>
            <div className="v">{t.hero.metaAValue}</div>
            <div className="bar" role="presentation"><span /></div>
            <div className="k" style={{ marginTop: 14 }}>{t.hero.metaB}</div>
            <div className="v">{t.hero.metaBValue}</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden>
        <span>{t.hero.scroll}</span><span className="line" />
      </div>
    </section>
  );
}
