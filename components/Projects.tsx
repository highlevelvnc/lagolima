"use client";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/data/projects";
import { useT } from "./LangProvider";

export default function Projects() {
  const { t } = useT();
  const filters = t.projects.filters;
  const [active, setActive] = useState<string>(filters[0]);

  // Mapeia PT category → posição no array PROJECTS para localizar
  const PT_CATEGORIES = ["Todos", "Desportivo", "Industrial", "Microcimento", "Impermeabilização", "Relva Artificial"];

  const visible = useMemo(() => {
    const idx = filters.indexOf(active as any);
    const ptCat = PT_CATEGORIES[idx];
    return PROJECTS.map((p) => ({
      ...p,
      hidden: ptCat !== "Todos" && p.category !== ptCat
    }));
  }, [active, filters]);

  return (
    <section className="section projects" id="projetos">
      <div className="container-x">
        <div className="projects-head">
          <div>
            <span className="eyebrow" data-reveal>{t.projects.eyebrow}</span>
            <h2 data-reveal style={{ marginTop: 14 }}>{t.projects.title}</h2>
            <p data-reveal>{t.projects.lead}</p>
          </div>
        </div>

        <div className="filters" data-reveal role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery">
          {visible.map((p) => {
            const i = t.projects.items[p.id as keyof typeof t.projects.items];
            return (
              <article
                key={p.id}
                className={`proj size-${p.size}${p.hidden ? " hidden-filter" : ""}`}
                data-reveal
                aria-label={`${i.title} — ${i.category}`}
              >
                <div className="img-bg" style={{ backgroundImage: `url(${p.image})` }} aria-hidden />
                <div className="proj-meta">
                  <span className="cat">{i.category}</span>
                  <h4>{i.title}</h4>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
