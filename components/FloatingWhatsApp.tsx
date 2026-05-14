"use client";
import { useEffect, useState } from "react";
import { Whatsapp } from "./Icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { useT } from "./LangProvider";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);
  const { t } = useT();

  useEffect(() => {
    const onScroll = () => {
      const v = window.scrollY > 220;
      setShow(v);
      if (!v) setTip(false);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = window.setTimeout(() => setTip(true), 1200);
    const t2 = window.setTimeout(() => setTip(false), 1200 + 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [show]);

  return (
    <>
      <a
        className={`wa${show ? " show" : ""}`}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label={t.wa}
      >
        <Whatsapp />
      </a>
      <div className={`wa-tip${tip ? " show" : ""}`} aria-hidden>
        {t.wa}
      </div>
    </>
  );
}
