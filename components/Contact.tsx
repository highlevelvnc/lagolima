"use client";
import { useState } from "react";
import { ArrowRight, Phone, Mail, Pin, Clock } from "./Icons";
import { COMPANY } from "@/lib/constants";
import { useT } from "./LangProvider";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useT();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="section contact" id="contactos">
      <div className="container-x">
        <div className="contact-grid">
          <div>
            <span className="eyebrow" data-reveal>{t.contact.eyebrow}</span>
            <h2 data-reveal style={{ marginTop: 14 }}>{t.contact.title}</h2>
            <p className="lead" data-reveal>{t.contact.lead}</p>

            <form className="form" data-reveal onSubmit={onSubmit}>
              <label>{t.contact.labels.name}
                <input name="nome" type="text" required placeholder={t.contact.placeholders.name} autoComplete="name" />
              </label>
              <label>{t.contact.labels.phone}
                <input name="telefone" type="tel" required placeholder={t.contact.placeholders.phone} autoComplete="tel" pattern="[0-9 +()-]{7,}" />
              </label>
              <label>{t.contact.labels.email}
                <input name="email" type="email" required placeholder={t.contact.placeholders.email} autoComplete="email" />
              </label>
              <label>{t.contact.labels.location}
                <input name="localidade" type="text" placeholder={t.contact.placeholders.location} autoComplete="address-level2" />
              </label>
              <label className="full">{t.contact.labels.service}
                <select name="servico" defaultValue={t.contact.serviceOptions[0]}>
                  {t.contact.serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className="full">{t.contact.labels.message}
                <textarea name="mensagem" placeholder={t.contact.placeholders.message} />
              </label>
              <button type="submit" className="btn btn-primary magnetic full" style={{ width: "max-content" }}>
                {sent ? t.contact.sent : t.contact.submit} <ArrowRight className="arrow" />
              </button>
            </form>
          </div>

          <aside className="contact-side" data-reveal="right">
            <span className="sub">{t.contact.side.sub}</span>
            <h3>{t.contact.side.title}</h3>

            <div className="contact-item">
              <div className="ico" aria-hidden><Phone /></div>
              <div>
                <span className="k">{t.contact.side.phoneLbl}</span>
                <a className="v" href={`tel:${COMPANY.phoneIntl}`}>{COMPANY.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Mail /></div>
              <div>
                <span className="k">{t.contact.side.emailLbl}</span>
                <a className="v" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Pin /></div>
              <div>
                <span className="k">{t.contact.side.coverageLbl}</span>
                <span className="v">{t.contact.side.coverageVal}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico" aria-hidden><Clock /></div>
              <div>
                <span className="k">{t.contact.side.replyLbl}</span>
                <span className="v">{t.contact.side.replyVal}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
