import { PROCESS_STEPS } from "@/data/processSteps";

/**
 * Reveal dos passos é feito via CSS + IntersectionObserver (em ScrollEffects),
 * com fallback de 3500ms. Não usamos `gsap.from()` para fade-ups: se o plugin
 * não registar ou falhar em headless, a secção inteira ficaria invisível.
 */
export default function Process() {
  return (
    <section className="section process" id="processo">
      <div className="container-x">
        <div className="process-head">
          <div>
            <span className="eyebrow on-dark" data-reveal>Como Trabalhamos</span>
            <h2 data-reveal style={{ marginTop: 14 }}>Quatro passos para uma superfície que dura.</h2>
          </div>
          <p data-reveal>Um processo claro, desde a primeira visita ao espaço até à entrega final da obra.</p>
        </div>

        <div className="steps">
          {PROCESS_STEPS.map((s) => (
            <div className="step" key={s.num} data-reveal>
              <div className="dot" aria-hidden>{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
