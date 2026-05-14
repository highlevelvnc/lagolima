import { PARTNER, PARTNER_SERVICES } from "@/data/partnerServices";
import { ArrowRight } from "./Icons";

/**
 * Secção de serviços complementares oferecidos via parceria com a
 * PC Work Vertical (trabalhos verticais, fachadas). Visualmente
 * "humble" — não compete com os 5 serviços core da LAGO LIMA.
 */
export default function PartnerServices() {
  return (
    <section className="section partner">
      <div className="container-x">
        <div className="partner-head">
          <span className="eyebrow" data-reveal>Parceria</span>
          <h2 data-reveal style={{ marginTop: 14 }}>
            Soluções complementares <em>em altura</em>.
          </h2>
          <p data-reveal>
            Em parceria com a <strong>{PARTNER.name}</strong>, oferecemos também serviços de fachadas, isolamento térmico e reabilitação estrutural — para responder a obras de maior complexidade num só interlocutor.
          </p>
        </div>

        <div className="partner-grid">
          {PARTNER_SERVICES.map((s) => (
            <article className="partner-card" key={s.id} data-reveal>
              <div className="partner-card-img" style={{ backgroundImage: `url(${s.image})` }} aria-hidden>
                <span className="partner-card-num">{s.num}</span>
                <span className="partner-card-tag">{s.tag}</span>
              </div>
              <div className="partner-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="partner-specs">
                  {s.specs.map((sp) => <span key={sp}>{sp}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="partner-footer" data-reveal>
          <div>
            <span className="partner-label">Em parceria com</span>
            <strong className="partner-name">{PARTNER.name}</strong>
            <span className="partner-tag">{PARTNER.tagline}</span>
          </div>
          <a href={PARTNER.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost on-light">
            Visitar pcworkvertical.pt <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
