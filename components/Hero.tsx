import { ArrowRight } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-bg" />
      <div className="hero-blob a" />
      <div className="hero-blob b" />

      <div className="container-x hero-inner">
        <div>
          <span className="hero-eyebrow" data-reveal>PAVIMENTOS TÉCNICOS · PORTUGAL</span>
          <h1 data-reveal>
            Pavimentos técnicos, <em className="accent">desportivos</em> e industriais com acabamento profissional.
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
