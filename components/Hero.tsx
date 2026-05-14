import { ArrowRight } from "./Icons";

/**
 * Palavras como spans inline-block com margin-right (não trailing whitespace),
 * para o browser quebrar a linha de forma previsível conforme o viewport.
 * Sem <br/> — deixa o fluxo natural responsivo.
 */
const TITLE_WORDS: { text: string; accent?: boolean }[] = [
  { text: "Pavimentos" },
  { text: "técnicos," },
  { text: "desportivos", accent: true },
  { text: "e" },
  { text: "industriais" },
  { text: "com" },
  { text: "acabamento" },
  { text: "profissional." }
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-bg" />
      <div className="hero-blob a" />
      <div className="hero-blob b" />

      <div className="container-x hero-inner">
        <div>
          <span className="hero-eyebrow" data-reveal>PAVIMENTOS TÉCNICOS · PORTUGAL</span>
          <h1 className="hero-h1">
            {TITLE_WORDS.map((w, i) => (
              <span
                key={i}
                className={`word${w.accent ? " accent" : ""}`}
                style={{ ["--d" as any]: `${i * 70}ms` }}
              >
                {w.text}
              </span>
            ))}
          </h1>
          <p className="lead" data-reveal>
            Soluções duradouras em pavimentos desportivos, microcimento, impermeabilização e relva artificial para obras exigentes em Portugal.
          </p>
          <div className="hero-actions" data-reveal>
            <a href="#contactos" className="btn btn-primary">Pedir Orçamento <ArrowRight className="arrow" /></a>
            <a href="#servicos" className="btn btn-ghost">Ver Serviços <ArrowRight className="arrow" /></a>
          </div>
          <div className="hero-meta">
            <div data-reveal><span>Especialidade</span><strong>Pavimentos Técnicos</strong></div>
            <div data-reveal><span>Aplicação</span><strong>Desportivos · Industriais</strong></div>
            <div data-reveal><span>Cobertura</span><strong>Portugal Continental</strong></div>
          </div>
        </div>

        <div className="hero-visual" data-reveal="scale">
          <div className="hv-tech">LAGO·LIMA — TECH SURFACES — PT</div>
          <div className="hv-card hv-1 parallax" data-speed="0.06" aria-hidden />
          <div className="hv-card hv-2 parallax" data-speed="0.12" aria-hidden />
          <div className="hv-card hv-3 parallax" data-speed="0.18">
            <div className="k">Resistência técnica</div>
            <div className="v">Alta durabilidade</div>
            <div className="bar" role="presentation"><span /></div>
            <div className="k" style={{ marginTop: 14 }}>Acabamento</div>
            <div className="v">Profissional</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden>
        <span>scroll</span><span className="line" />
      </div>
    </section>
  );
}
