"use client";
import { ArrowRight } from "./Icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { useT } from "./LangProvider";

export default function CTA() {
  const { t } = useT();
  return (
    <section className="section cta">
      <div className="container-x cta-inner">
        <span className="eyebrow on-dark" style={{ justifyContent: "center", display: "inline-flex" }} data-reveal>
          {t.cta.eyebrow}
        </span>
        <h2 data-reveal>{t.cta.title1} <em>{t.cta.titleAccent}</em> {t.cta.title2}</h2>
        <p data-reveal>{t.cta.lead}</p>
        <div className="cta-actions" data-reveal>
          <a href="#contactos" className="btn btn-primary magnetic">{t.cta.primary} <ArrowRight className="arrow" /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            {t.cta.whatsapp} <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
