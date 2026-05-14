import { APPLICATIONS } from "@/data/applications";

export default function Applications() {
  return (
    <section className="section apps">
      <div className="container-x">
        <div className="apps-head">
          <span className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }} data-reveal>
            Aplicações
          </span>
          <h2 data-reveal style={{ marginTop: 14 }}>Para espaços que exigem mais do que uma superfície.</h2>
          <p data-reveal>Soluções pensadas para diferentes contextos, do desporto à habitação privada.</p>
        </div>

        <div className="apps-grid">
          {APPLICATIONS.map((a) => (
            <article className="app" key={a.title} data-reveal>
              <div className="img-bg" style={{ backgroundImage: `url(${a.image})` }} aria-hidden />
              <div className="app-body">
                <span className="tag">{a.tag}</span>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
