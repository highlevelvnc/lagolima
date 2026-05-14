"use client";
import { useMemo, useState } from "react";
import { PROJECTS, PROJECT_FILTERS } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<(typeof PROJECT_FILTERS)[number]>("Todos");

  const visible = useMemo(
    () => PROJECTS.map((p) => ({ ...p, hidden: active !== "Todos" && p.category !== active })),
    [active]
  );

  return (
    <section className="section projects" id="projetos">
      <div className="container-x">
        <div className="projects-head">
          <div>
            <span className="eyebrow" data-reveal>Projetos</span>
            <h2 data-reveal style={{ marginTop: 14 }}>Trabalho técnico em diferentes contextos.</h2>
            <p data-reveal>Uma seleção de tipologias e ambientes em que a LAGO LIMA atua.</p>
          </div>
        </div>

        <div className="filters" data-reveal role="tablist" aria-label="Filtrar projetos">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery">
          {visible.map((p) => (
            <article
              key={p.id}
              className={`proj size-${p.size}${p.hidden ? " hidden-filter" : ""}`}
              data-reveal
              aria-label={`${p.title} — ${p.category}`}
            >
              <div className="img-bg" style={{ backgroundImage: `url(${p.image})` }} aria-hidden />
              <div className="proj-meta">
                <span className="cat">{p.category}</span>
                <h4>{p.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
