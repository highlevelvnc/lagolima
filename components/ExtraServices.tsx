"use client";
import { EXTRA_SERVICES } from "@/data/extraServices";
import { useT } from "./LangProvider";

/**
 * Soluções complementares oferecidas pela LAGO LIMA além dos pavimentos:
 * isolamento de fachadas, remodelação e reabilitação. Sem footer-banner,
 * sem links externos.
 */
export default function ExtraServices() {
  const { t } = useT();

  return (
    <section className="section extras">
      <div className="container-x">
        <div className="extras-head">
          <span className="eyebrow" data-reveal>{t.extras.eyebrow}</span>
          <h2 data-reveal style={{ marginTop: 14 }}>
            {t.extras.title} <em>{t.extras.titleAccent}</em>.
          </h2>
          <p data-reveal>{t.extras.lead}</p>
        </div>

        <div className="extras-grid">
          {EXTRA_SERVICES.map((s) => {
            const i = t.extras.items[s.id as keyof typeof t.extras.items];
            return (
              <article className="extras-card" key={s.id} data-reveal>
                <div className="extras-card-img" style={{ backgroundImage: `url(${s.image})` }} aria-hidden>
                  <span className="extras-card-num">{s.num}</span>
                  <span className="extras-card-tag">{i.tag}</span>
                </div>
                <div className="extras-card-body">
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                  <div className="extras-specs">
                    {s.specs.map((sp) => <span key={sp}>{sp}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
