import Brand from "./Brand";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const SERVICOS = [
  "Pavimentos Desportivos",
  "Pavimentos Industriais",
  "Microcimento",
  "Impermeabilização",
  "Relva Artificial"
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand height={44} />
            <p>Pavimentos Desportivos e Industriais.<br />Microcimento · Impermeabilização · Relva Artificial.</p>
            <p className="footer-tagline">Construímos superfícies. Entregamos resultados.</p>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Serviços</h5>
            <ul>
              {SERVICOS.map((s) => (
                <li key={s}><a href="#servicos">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contactos</h5>
            <ul>
              <li><a href={`tel:${COMPANY.phoneIntl}`}>{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li>{COMPANY.region}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} LAGO LIMA · Todos os direitos reservados</span>
          <span>PT · Pavimentos Técnicos</span>
        </div>
      </div>
    </footer>
  );
}
