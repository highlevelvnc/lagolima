import { VALUES } from "@/data/values";
import { valueIcon } from "./Icons";

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container-x">
        <div className="about-grid">
          <div className="about-img" data-reveal="left" role="img" aria-label="Aplicação técnica em obra">
            <div className="about-tech">
              <span>Microcimento</span>
              <span>Resina</span>
              <span>Impermeabilização</span>
              <span>Relva</span>
            </div>
          </div>

          <div data-reveal="right">
            <span className="eyebrow">Sobre Nós</span>
            <h2 style={{ marginTop: 14 }}>Engenharia de pavimentos. Compromisso com cada metro.</h2>
            <p className="lead">
              A LAGO LIMA atua na execução de pavimentos desportivos e industriais, oferecendo soluções técnicas em microcimento, impermeabilização e relva artificial. Com foco na resistência, no acabamento e na qualidade de execução, desenvolvemos soluções adaptadas às necessidades de cada espaço.
            </p>

            <div className="values">
              {VALUES.map((v) => (
                <div className="value" key={v.label}>
                  <span className="ico" aria-hidden>{valueIcon(v.icon)}</span>
                  <span>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
