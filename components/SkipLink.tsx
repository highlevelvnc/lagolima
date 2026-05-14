"use client";
import { useT } from "./LangProvider";

export default function SkipLink() {
  const { t } = useT();
  return <a className="skip-link" href="#main">{t.skipLink}</a>;
}
