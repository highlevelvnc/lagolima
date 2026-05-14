"use client";
import { useT } from "./LangProvider";

export default function Impact() {
  const { t } = useT();
  return (
    <section className="impact">
      <div className="container-x">
        <div className="impact-grid">
          {t.impact.map((it) => (
            <div className="impact-card" key={it.lbl} data-reveal>
              <span className="lbl">{it.lbl}</span>
              <div className="num">{it.title} <span className="plus">{it.accent}</span></div>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
