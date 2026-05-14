# LAGO LIMA — Website

Pavimentos Desportivos e Industriais · Microcimento · Impermeabilização · Relva Artificial.

Stack: **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · GSAP · next/font**.

## Correr localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Publicar na Vercel

1. Faz push do repositório para GitHub.
2. Em https://vercel.com/new importa o repositório.
3. Framework detectado automaticamente como **Next.js**. Não é preciso configurar nada — `npm run build` e `next start` ficam tratados.
4. Adiciona o domínio em **Project → Settings → Domains** (ex.: `lagolima.pt`).
5. Em produção, actualiza `metadataBase` em `app/layout.tsx` para o domínio final.

## Onde editar conteúdo

| O que mudar | Ficheiro |
|---|---|
| Contactos (telefone, email, WhatsApp, região) | `lib/constants.ts` |
| Links de navegação | `lib/constants.ts` (`NAV_LINKS`) |
| Serviços (5 cards) | `data/services.ts` |
| Benefícios (6 itens) | `data/benefits.ts` |
| Aplicações (8 cards) | `data/applications.ts` |
| Passos do processo | `data/processSteps.ts` |
| Projetos (galeria + filtros) | `data/projects.ts` |
| Valores | `data/values.ts` |
| Textos das secções (eyebrows, títulos, leads) | dentro de cada `components/*.tsx` |
| Metadata / SEO / OG | `app/layout.tsx` |
| Tagline do footer | `components/Footer.tsx` |

## Imagens reais

Hoje todas as imagens vêm de Unsplash (placeholder profissional).

Para trocar por fotos reais do cliente:

1. Colocar ficheiros em `public/projetos/`, `public/servicos/`, etc.
2. Trocar a string `image:` nos data files (ex.: `/projetos/campo-01.jpg`).
3. As imagens de fundo das secções fixas (`hero`, `banner`, `about`) estão em `app/globals.css` nas regras `.hv-1`, `.hv-2`, `.banner-bg`, `.about-img` — basta trocar a URL.
4. `next.config.mjs` já permite carregar de `images.unsplash.com` para futuras migrações para `next/image`.

## Arquitectura

```
app/
  layout.tsx        # fontes, metadata, SEO, OG
  page.tsx          # composição da homepage
  globals.css       # design system completo
components/
  Header.tsx        # fixo, glass ao scroll, drawer mobile
  Hero.tsx          # parallax cards + grelha técnica
  Impact.tsx        # 4 cards técnicos
  Services.tsx      # 5 cards (3+2)
  ResistantSurfaces.tsx
  ParallaxBanner.tsx
  Applications.tsx  # 8 cards 4x2
  Process.tsx       # timeline 4 passos
  Projects.tsx      # masonry + filtros
  About.tsx
  CTA.tsx
  Contact.tsx       # formulário + painel escuro
  Footer.tsx
  FloatingWhatsApp.tsx
  ScrollEffects.tsx # IO + fallback 3500ms + parallax (cleanup correto)
  Icons.tsx
  Brand.tsx
data/               # arrays de conteúdo (serviços, projetos, etc.)
lib/constants.ts    # COMPANY, WHATSAPP_URL, NAV_LINKS
public/
  preview.html      # mockup HTML original (referência visual)
```

## Padrões importantes

- `overflow-x: clip` (não `hidden`) no `html, body`.
- Reveal ao scroll usa CSS + IntersectionObserver com **fallback de 3500ms** que força `data-revealed="true"` em todos os elementos — garante que nada fica invisível em headless browsers ou se o IO falhar.
- GSAP **não** é usado para fade-ups simples. Apenas planeado para parallax/timelines complexas se for preciso. Ler `ScrollEffects.tsx` para detalhes.
- `prefers-reduced-motion` é respeitado: parallax, pulse do WhatsApp e rotação dos dots do processo são desactivados.
- Parallax é desactivado em ecrãs ≤ 700px (mobile).

## Formulário de contacto

Hoje o `onSubmit` apenas mostra confirmação local. Para activar envio real:

- Criar `app/api/contact/route.ts` com um `POST` que recebe os campos e dispara email (Resend, FormSubmit, Nodemailer, etc.).
- No `components/Contact.tsx`, trocar o handler para `fetch("/api/contact", { method: "POST", body: JSON.stringify(...) })`.

## Acessibilidade

- `lang="pt-PT"`, skip-link para o `<main>`, focus rings com `focus-visible`.
- Drawer mobile com `role="dialog"` e `aria-hidden` controlado.
- Labels em todos os inputs do formulário, com `autoComplete` configurado.

## Futuras páginas

Estrutura preparada para `/servicos`, `/projetos`, `/sobre`, `/contactos` — basta criar `app/servicos/page.tsx` etc. e reutilizar os componentes. Para essas páginas, actualizar `NAV_LINKS` em `lib/constants.ts` para usar URLs em vez de âncoras.
