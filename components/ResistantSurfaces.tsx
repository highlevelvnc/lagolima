"use client";
import { BENEFITS } from "@/data/benefits";
import { benefitIcon } from "./Icons";
import { useT } from "./LangProvider";

export default function ResistantSurfaces() {
  const { t } = useT();
  return (
    <section className="section resist">
      <div className="container-x">
        <div className="resist-grid">
          <div>
            <span className="eyebrow on-dark" data-reveal>{t.resist.eyebrow}</span>
            <h2 data-reveal style={{ marginTop: 14 }}>
              {t.resist.title1}<br />
              <em>{t.resist.title2}</em> {t.resist.title2Suffix}
            </h2>
            <p className="lead" data-reveal>{t.resist.lead}</p>
          </div>

          <div className="benefits">
            {BENEFITS.map((b, i) => (
              <div className="benefit" key={b.idx} data-reveal>
                <span className="idx">{t.resist.benefits[i].idx}</span>
                <span className="ico" aria-hidden>{benefitIcon(b.icon)}</span>
                <h4>{t.resist.benefits[i].title}</h4>
                <p>{t.resist.benefits[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
