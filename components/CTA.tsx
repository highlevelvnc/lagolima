import { ArrowRight } from "./Icons";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section cta">
      <div className="container-x cta-inner">
        <span className="eyebrow on-dark" style={{ justifyContent: "center", display: "inline-flex" }} data-reveal>
          Próximo passo
        </span>
        <h2 data-reveal>Tem um <em>projeto</em> em mente?</h2>
        <p data-reveal>Fale connosco e receba uma proposta ajustada ao seu espaço, objetivo e orçamento.</p>
        <div className="cta-actions" data-reveal>
          <a href="#contactos" className="btn btn-primary">Pedir Orçamento <ArrowRight className="arrow" /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-ghost">
            Contactar por WhatsApp <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
