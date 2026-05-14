import { SERVICES } from "@/data/services";
import { ArrowRight, serviceIcon } from "./Icons";

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container-x">
        <div className="services-head">
          <div>
            <span className="eyebrow" data-reveal>Serviços</span>
            <h2 data-reveal style={{ marginTop: 14 }}>Pavimentos e superfícies técnicas para cada exigência.</h2>
          </div>
          <p data-reveal>
            Do campo desportivo ao pavilhão industrial, da habitação privada ao espaço comercial — soluções completas com execução profissional.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.slug} className={`service-card span-${s.span || 2}`} data-reveal>
              <div className="img">
                <div className="img-bg" style={{ backgroundImage: `url(${s.image})` }} aria-hidden />
                <span className="icon" aria-hidden>{serviceIcon(s.icon)}</span>
                <span className="num">{s.num}</span>
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#contactos" className="more">Saber mais <ArrowRight className="arrow" /></a>
              </div>
              <div className="glow" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
