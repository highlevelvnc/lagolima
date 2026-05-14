"use client";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import { ArrowRight, Menu, Close } from "./Icons";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const onAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`} id="header">
        <div className="container-x header-inner">
          <a href="#inicio" onClick={(e) => onAnchor(e, "#inicio")} aria-label="LAGO LIMA — Início">
            <Brand />
          </a>
          <nav className="nav" aria-label="Navegação principal">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => onAnchor(e, l.href)}>{l.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <a href="#contactos" onClick={(e) => onAnchor(e, "#contactos")} className="btn btn-primary">
              Pedir Orçamento <ArrowRight className="arrow" />
            </a>
          </div>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Abrir menu" aria-expanded={open}>
            <Menu />
          </button>
        </div>
      </header>

      <aside className={`drawer${open ? " open" : ""}`} aria-hidden={!open} role="dialog">
        <div className="drawer-top">
          <Brand height={34} />
          <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Fechar menu" style={{ display: "grid" }}>
            <Close />
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => onAnchor(e, l.href)}>{l.label}</a>
          ))}
        </nav>
        <a href="#contactos" onClick={(e) => onAnchor(e, "#contactos")} className="btn btn-primary">
          Pedir Orçamento <ArrowRight className="arrow" />
        </a>
      </aside>
    </>
  );
}
