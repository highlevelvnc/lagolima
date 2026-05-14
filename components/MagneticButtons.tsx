"use client";
import { useEffect } from "react";

/**
 * Aplica efeito "magnetic" subtil a qualquer .btn.magnetic em desktop.
 * No mobile (hover:none) ou reduced-motion, é no-op.
 */
export default function MagneticButtons() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".btn.magnetic"));
    const cleanups: Array<() => void> = [];

    els.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const strength = 0.22;
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      };
      const onLeave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);
  return null;
}
