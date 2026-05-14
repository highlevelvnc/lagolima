export default function ParallaxBanner() {
  return (
    <section className="banner">
      <div className="banner-bg parallax-bg" aria-hidden />
      <div className="banner-inner">
        <span className="eyebrow on-dark" style={{ justifyContent: "center" }} data-reveal>
          Engenharia de Superfícies
        </span>
        <h2 data-reveal>
          Construímos superfícies preparadas para <em>uso intenso</em>, desempenho e longa duração.
        </h2>
        <div className="marks" data-reveal>
          <span>ANTI-DERRAPANTE</span>
          <span>UV RESISTANTE</span>
          <span>USO INTENSIVO</span>
          <span>ALTA ADERÊNCIA</span>
        </div>
      </div>
    </section>
  );
}
