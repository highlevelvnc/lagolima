"use client";
import { useEffect, useState } from "react";

/** Barra fina no topo absoluto da página que cresce conforme o scroll. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
        setPct(p);
        rafId = 0;
      });
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div className="scroll-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
