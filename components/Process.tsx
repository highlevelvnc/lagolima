"use client";
import { useT } from "./LangProvider";

const NUMS = ["01", "02", "03", "04"];

export default function Process() {
  const { t } = useT();
  return (
    <section className="section process" id="processo">
      <div className="container-x">
        <div className="process-head">
          <div>
            <span className="eyebrow on-dark" data-reveal>{t.process.eyebrow}</span>
            <h2 data-reveal style={{ marginTop: 14 }}>{t.process.title}</h2>
          </div>
          <p data-reveal>{t.process.lead}</p>
        </div>

        <div className="steps">
          {t.process.steps.map((s, i) => (
            <div className="step" key={i} data-reveal>
              <div className="dot" aria-hidden>{NUMS[i]}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
