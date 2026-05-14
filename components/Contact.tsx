"use client";
import { useState } from "react";
import { ArrowRight, Phone, Mail, Pin, Clock } from "./Icons";
import { COMPANY } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Pavimentos Desportivos",
  "Pavimentos Industriais",
  "Microcimento",
  "Impermeabilização",
  "Relva Artificial",
  "Outro / Combinado"
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Preparado para futura integração (API route, FormSubmit, Resend, etc.).
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="section contact" id="contactos">
      <div className="container-x">
        <div className="contact-grid">
          <div>
            <span className="eyebrow" data-reveal>Contactos</span>
            <h2 data-reveal style={{ marginTop: 14 }}>Receba uma proposta para o seu projeto.</h2>
            <p className="lead" data-reveal>
              Preencha o formulário com o máximo de detalhe possível. Respondemos com uma proposta técnica adequada.
            </p>

            <form className="form" data-reveal onSubmit={onSubmit} noValidate={false}>
              <label>Nome
                <input name="nome" type="text" required placeholder="O seu nome" autoComplete="name" />
              </label>
              <label>Telefone
                <input name="telefone" type="tel" required placeholder="9XX XXX XXX" autoComplete="tel" pattern="[0-9 +()-]{7,}" />
              </label>
              <label>Email
                <input name="email" type="email" required placeholder="email@exemplo.pt" autoComplete="email" />
              </label>
              <label>Localidade
                <input name="localidade" type="text" placeholder="Concelho / Distrito" autoComplete="address-level2" />
              </label>
              <label className="full">Tipo de serviço
                <select name="servico" defaultValue={SERVICE_OPTIONS[0]}>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className="full">Mensagem
                <textarea name="mensagem" placeholder="Descreva o espaço, área aproximada e prazo desejado..." />
              </label>
              <button type="submit" className="btn btn-primary full" style={{ width: "max-content" }}>
                {sent ? "Pedido recebido — obrigado!" : "Enviar Pedido de Orçamento"} <ArrowRight className="arrow" />
              </button>
            </form>
          </div>

          <aside className="contact-side" data-reveal="right">
            <span className="sub">Falar com a equipa</span>
            <h3>Estamos disponíveis para esclarecer o seu projeto.</h3>

            <div className="contact-item">
              <div className="ico" aria-hidden><Phone /></div>
              <div>
                <span className="k">Telefone / WhatsApp</span>
                <a className="v" href={`tel:${COMPANY.phoneIntl}`}>{COMPANY.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Mail /></div>
              <div>
                <span className="k">Email</span>
                <a className="v" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Pin /></div>
              <div>
                <span className="k">Cobertura</span>
                <span className="v">{COMPANY.region}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Clock /></div>
              <div>
                <span className="k">Resposta</span>
                <span className="v">Em 24h úteis</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
