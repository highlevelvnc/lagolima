const ITEMS = [
  { lbl: "01 — Projeto", title: "À", accent: "medida", desc: "Cada espaço é avaliado e desenhado com a solução técnica adequada." },
  { lbl: "02 — Materiais", title: "Soluções", accent: "resistentes", desc: "Materiais selecionados para uso intenso, exterior e ambientes industriais." },
  { lbl: "03 — Execução", title: "Acabamento", accent: "profissional", desc: "Aplicação rigorosa, com atenção ao detalhe e cumprimento de prazos." },
  { lbl: "04 — Equipa", title: "Aplicação", accent: "técnica", desc: "Equipa especializada em pavimentos desportivos, industriais e técnicos." }
];

export default function Impact() {
  return (
    <section className="impact">
      <div className="container-x">
        <div className="impact-grid">
          {ITEMS.map((it) => (
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
