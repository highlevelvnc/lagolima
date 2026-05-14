export default function Brand({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <span className="brand" aria-label="LAGO LIMA">
      <span className="brand-mark" aria-hidden />
      <span className="brand-text">
        LAGO LIMA{withTagline && <small>PAVIMENTOS TÉCNICOS</small>}
      </span>
    </span>
  );
}
