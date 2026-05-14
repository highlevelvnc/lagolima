"use client";
import { APPLICATIONS } from "@/data/applications";
import { useT } from "./LangProvider";

export default function Applications() {
  const { t } = useT();
  return (
    <section className="section apps">
      <div className="container-x">
        <div className="apps-head">
          <span className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }} data-reveal>
            {t.applications.eyebrow}
          </span>
          <h2 data-reveal style={{ marginTop: 14 }}>{t.applications.title}</h2>
          <p data-reveal>{t.applications.lead}</p>
        </div>

        <div className="apps-grid">
          {APPLICATIONS.map((a, i) => {
            const item = t.applications.items[i];
            return (
              <article className="app" key={i} data-reveal>
                <div className="img-bg" style={{ backgroundImage: `url(${a.image})` }} aria-hidden />
                <div className="app-body">
                  <span className="tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
