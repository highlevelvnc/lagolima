"use client";
import { useEffect } from "react";

/**
 * Monta uma única vez no layout:
 *  - IntersectionObserver para `[data-reveal]` (fade-up por defeito; suporta data-reveal="left|right|scale")
 *  - Fallback setTimeout 3500ms que força revealed=true em todos (garante que nada fica invisível)
 *  - Parallax simples (transform-based) para `.parallax` e `.parallax-bg`
 *  - Em mobile (<=700px) e prefers-reduced-motion, parallax é desactivado
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 700px)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      if (!el.hasAttribute("data-revealed")) el.setAttribute("data-revealed", "false");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute("data-revealed", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
    }, 3500);

    // parallax
    const parEls = Array.from(document.querySelectorAll<HTMLElement>(".parallax, .parallax-bg"));
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        parEls.forEach((el) => {
          if (reduced || isMobile) {
            el.style.transform = "";
            return;
          }
          const speed = parseFloat(
            el.dataset.speed || (el.classList.contains("parallax-bg") ? "0.2" : "0.1")
          );
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          el.style.transform = `translate3d(0, ${-center * speed}px, 0)`;
        });
        rafId = 0;
      });
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      document.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
