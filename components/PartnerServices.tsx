"use client";
import { PARTNER, PARTNER_SERVICES } from "@/data/partnerServices";
import { ArrowRight } from "./Icons";
import { useT } from "./LangProvider";

export default function PartnerServices() {
  const { t } = useT();
  const leadWithName = t.partner.lead.replace("{name}", PARTNER.name);

  return (
    <section className="section partner">
      <div className="container-x">
        <div className="partner-head">
          <span className="eyebrow" data-reveal>{t.partner.eyebrow}</span>
          <h2 data-reveal style={{ marginTop: 14 }}>
            {t.partner.title} <em>{t.partner.titleAccent}</em>.
          </h2>
          <p data-reveal dangerouslySetInnerHTML={{
            __html: leadWithName.replace(PARTNER.name, `<strong>${PARTNER.name}</strong>`)
          }} />
        </div>

        <div className="partner-grid">
          {PARTNER_SERVICES.map((s) => {
            const i = t.partner.items[s.id as keyof typeof t.partner.items];
            return (
              <article className="partner-card" key={s.id} data-reveal>
                <div className="partner-card-img" style={{ backgroundImage: `url(${s.image})` }} aria-hidden>
                  <span className="partner-card-num">{s.num}</span>
                  <span className="partner-card-tag">{i.tag}</span>
                </div>
                <div className="partner-card-body">
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                  <div className="partner-specs">
                    {s.specs.map((sp) => <span key={sp}>{sp}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="partner-footer" data-reveal>
          <div>
            <span className="partner-label">{t.partner.label}</span>
            <strong className="partner-name">{PARTNER.name}</strong>
            <span className="partner-tag">{PARTNER.tagline}</span>
          </div>
          <a href={PARTNER.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            {t.partner.visit} <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
