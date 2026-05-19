"use client";
import Brand from "./Brand";
import { COMPANY } from "@/lib/constants";
import { useT } from "./LangProvider";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  const navItems = [
    { href: "#inicio", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#projetos", label: t.nav.projects },
    { href: "#processo", label: t.nav.process },
    { href: "#sobre", label: t.nav.about },
    { href: "#contactos", label: t.nav.contact }
  ];
  const services = Object.values(t.services.items).map((s) => s.title);

  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand height={44} />
            <p style={{ whiteSpace: "pre-line" }}>{t.footer.desc}</p>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>
          <div>
            <h5>{t.footer.navTitle}</h5>
            <ul>
              {navItems.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{t.footer.servicesTitle}</h5>
            <ul>
              {services.map((s) => (
                <li key={s}><a href="#servicos">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{t.footer.contactTitle}</h5>
            <ul>
              <li><a href={`tel:${COMPANY.phoneIntl}`}>{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li>{t.contact.side.coverageVal}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} LAGO LIMA · {t.footer.rights}</span>
          <span className="footer-credit">
            {t.footer.builtBy}{" "}
            <a href="https://highlevelmkt.com" target="_blank" rel="noopener noreferrer">
              highlevelmkt.com
            </a>
          </span>
          <span>{t.footer.ribbon}</span>
        </div>
      </div>
    </footer>
  );
}
