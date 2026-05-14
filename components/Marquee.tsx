/**
 * Faixa horizontal contínua com keywords da marca. Duplicada para loop perfeito.
 * 100% CSS — sem JS, sem RAF.
 */
const ITEMS = [
  "PAVIMENTOS DESPORTIVOS",
  "MICROCIMENTO",
  "IMPERMEABILIZAÇÃO",
  "RELVA ARTIFICIAL",
  "PAVIMENTOS INDUSTRIAIS",
  "ACABAMENTO PROFISSIONAL",
  "EXECUÇÃO TÉCNICA"
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div className="marquee-row" key={dup}>
            {ITEMS.map((t) => (
              <span key={`${dup}-${t}`} className="marquee-item">
                <span className="marquee-dot" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
