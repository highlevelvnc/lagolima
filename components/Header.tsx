"use client";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import { ArrowRight, Menu, Close } from "./Icons";
import { useT } from "./LangProvider";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useT();

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

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#projetos", label: t.nav.projects },
    { href: "#processo", label: t.nav.process },
    { href: "#sobre", label: t.nav.about },
    { href: "#contactos", label: t.nav.contact }
  ];

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
          <a href="#inicio" onClick={(e) => onAnchor(e, "#inicio")} aria-label="LAGO LIMA — Home">
            <Brand />
          </a>
          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => onAnchor(e, l.href)}>{l.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <LangSwitcher compact />
            <a href="#contactos" onClick={(e) => onAnchor(e, "#contactos")} className="btn btn-primary magnetic">
              {t.nav.cta} <ArrowRight className="arrow" />
            </a>
          </div>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Menu />
          </button>
        </div>
      </header>

      <aside className={`drawer${open ? " open" : ""}`} aria-hidden={!open} role="dialog">
        <div className="drawer-top">
          <Brand height={28} />
          <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Close menu" style={{ display: "grid" }}>
            <Close />
          </button>
        </div>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => onAnchor(e, l.href)}>{l.label}</a>
          ))}
        </nav>
        <div style={{ marginTop: 24 }}>
          <LangSwitcher />
        </div>
        <a href="#contactos" onClick={(e) => onAnchor(e, "#contactos")} className="btn btn-primary">
          {t.nav.cta} <ArrowRight className="arrow" />
        </a>
      </aside>
    </>
  );
}
