import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  ...p,
  className: ("i " + (p.className || "")).trim()
});

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Sport = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18" /></svg>
);
export const Industry = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="9" width="18" height="12" rx="1" /><path d="M3 9l9-6 9 6" /></svg>
);
export const Micro = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 20l4-10 6 4 6-8" /><path d="M4 20h16" /></svg>
);
export const Water = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 2s7 8 7 13a7 7 0 11-14 0c0-5 7-13 7-13z" /></svg>
);
export const Turf = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 20c2-6 4-9 8-9s6 3 8 9" /><path d="M2 20h20" /></svg>
);
export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /></svg>
);
export const Tool = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 21l4-4 5 5 9-12" /><path d="M14 4h6v6" /></svg>
);
export const Plan = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 6h16v12H4z" /><path d="M4 10h16M8 14h4" /></svg>
);
export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Finish = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 4h16v6H4zM4 14h16v6H4z" /></svg>
);
export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>
);
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 7L9 18l-5-5" /></svg>
);
export const Target = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></svg>
);
export const Drop = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 22s8-6 8-13a8 8 0 10-16 0c0 7 8 13 8 13z" /></svg>
);
export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M22 16.92V21a1 1 0 01-1.1 1A19 19 0 012 4.1 1 1 0 013 3h4.09a1 1 0 011 .75l1 4a1 1 0 01-.29 1L7.21 10.21a16 16 0 006.58 6.58l1.46-1.6a1 1 0 011-.29l4 1a1 1 0 01.75 1z" /></svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" /><circle cx="12" cy="9" r="3" /></svg>
);
export const Whatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={28} height={28} {...p}>
    <path d="M20.5 3.5A11 11 0 003.6 17l-1.6 5 5.1-1.5A11 11 0 1020.5 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-3 .9.9-3-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.4.1-.2 0-.3 0-.5l-.6-1.5c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.1 2 3.1 4.8 4.2 1.7.7 2.3.7 3.1.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .2-1.1-.1-.1-.2-.1-.4-.2z" />
  </svg>
);

export const serviceIcon = (k: string) => {
  switch (k) {
    case "sport": return <Sport />;
    case "industry": return <Industry />;
    case "micro": return <Micro />;
    case "water": return <Water />;
    case "turf": return <Turf />;
    default: return <Sport />;
  }
};

export const benefitIcon = (k: string) => {
  switch (k) {
    case "shield": return <Shield />;
    case "tool": return <Tool />;
    case "plan": return <Plan />;
    case "clock": return <Clock />;
    case "finish": return <Finish />;
    case "calendar": return <Calendar />;
    default: return <Shield />;
  }
};

export const valueIcon = (k: string) => {
  switch (k) {
    case "star": return <Star />;
    case "shield": return <Shield />;
    case "check": return <Check />;
    case "target": return <Target />;
    case "drop": return <Drop />;
    default: return <Star />;
  }
};
