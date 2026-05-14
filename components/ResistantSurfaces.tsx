import { BENEFITS } from "@/data/benefits";
import { benefitIcon } from "./Icons";

export default function ResistantSurfaces() {
  return (
    <section className="section resist">
      <div className="container-x">
        <div className="resist-grid">
          <div>
            <span className="eyebrow on-dark" data-reveal>Promessa Técnica</span>
            <h2 data-reveal style={{ marginTop: 14 }}>
              Superfícies que resistem.<br />
              <em>Acabamentos</em> que valorizam.
            </h2>
            <p className="lead" data-reveal>
              Cada projeto exige a solução certa. A LAGO LIMA combina análise técnica, materiais adequados e execução profissional para criar superfícies duradouras e visualmente cuidadas.
            </p>
          </div>

          <div className="benefits">
            {BENEFITS.map((b) => (
              <div className="benefit" key={b.idx} data-reveal>
                <span className="idx">{b.idx}</span>
                <span className="ico" aria-hidden>{benefitIcon(b.icon)}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
