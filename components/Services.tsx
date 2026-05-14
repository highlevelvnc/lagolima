"use client";
import { SERVICES } from "@/data/services";
import { ArrowRight, serviceIcon } from "./Icons";
import { useT } from "./LangProvider";

export default function Services() {
  const { t } = useT();
  return (
    <section className="section" id="servicos">
      <div className="container-x">
        <div className="services-head">
          <div>
            <span className="eyebrow" data-reveal>{t.services.eyebrow}</span>
            <h2 data-reveal style={{ marginTop: 14 }}>{t.services.title}</h2>
          </div>
          <p data-reveal>{t.services.lead}</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => {
            const i = t.services.items[s.slug as keyof typeof t.services.items];
            return (
              <article key={s.slug} className={`service-card span-${s.span || 2}`} data-reveal>
                <div className="img">
                  <div className="img-bg" style={{ backgroundImage: `url(${s.image})` }} aria-hidden />
                  <span className="icon" aria-hidden>{serviceIcon(s.icon)}</span>
                  <span className="num">{s.num}</span>
                </div>
                <div className="body">
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                  <a href="#contactos" className="more">{t.services.more} <ArrowRight className="arrow" /></a>
                </div>
                <div className="glow" aria-hidden />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
