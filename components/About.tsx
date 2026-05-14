"use client";
import { VALUES } from "@/data/values";
import { valueIcon } from "./Icons";
import { useT } from "./LangProvider";

export default function About() {
  const { t } = useT();
  return (
    <section className="section about" id="sobre">
      <div className="container-x">
        <div className="about-grid">
          <div className="about-img" data-reveal="left" role="img" aria-label="Technical application">
            <div className="about-tech">
              {t.about.chips.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>

          <div data-reveal="right">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{t.about.title}</h2>
            <p className="lead">{t.about.lead}</p>

            <div className="values">
              {VALUES.map((v, i) => (
                <div className="value" key={v.icon}>
                  <span className="ico" aria-hidden>{valueIcon(v.icon)}</span>
                  <span>{t.about.values[i].label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
