export type Lang = "pt" | "en";
export const LANGS: Lang[] = ["pt", "en"];
export const DEFAULT_LANG: Lang = "pt";

type Dict = typeof DICT.pt;

export const DICT = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      process: "Processo",
      about: "Sobre Nós",
      contact: "Contactos",
      cta: "Pedir Orçamento"
    },
    hero: {
      eyebrow: "PAVIMENTOS TÉCNICOS · PORTUGAL",
      titleWords: [
        { text: "Pavimentos" },
        { text: "técnicos," },
        { text: "desportivos", accent: true },
        { text: "e" },
        { text: "industriais" },
        { text: "com" },
        { text: "acabamento" },
        { text: "profissional." }
      ],
      lead: "Soluções duradouras em pavimentos desportivos, microcimento, impermeabilização e relva artificial para obras exigentes em Portugal.",
      ctaPrimary: "Pedir Orçamento",
      ctaSecondary: "Ver Serviços",
      metaA: "Especialidade",
      metaAValue: "Pavimentos Técnicos",
      metaB: "Aplicação",
      metaBValue: "Desportivos · Industriais",
      metaC: "Cobertura",
      metaCValue: "Portugal Continental",
      scroll: "scroll"
    },
    impact: [
      { lbl: "01 — Projeto", title: "À", accent: "medida", desc: "Cada espaço é avaliado e desenhado com a solução técnica adequada." },
      { lbl: "02 — Materiais", title: "Soluções", accent: "resistentes", desc: "Materiais selecionados para uso intenso, exterior e ambientes industriais." },
      { lbl: "03 — Execução", title: "Acabamento", accent: "profissional", desc: "Aplicação rigorosa, com atenção ao detalhe e cumprimento de prazos." },
      { lbl: "04 — Equipa", title: "Aplicação", accent: "técnica", desc: "Equipa especializada em pavimentos desportivos, industriais e técnicos." }
    ],
    services: {
      eyebrow: "Serviços",
      title: "Pavimentos e superfícies técnicas para cada exigência.",
      lead: "Do campo desportivo ao pavilhão industrial, da habitação privada ao espaço comercial — soluções completas com execução profissional.",
      more: "Saber mais",
      items: {
        "pavimentos-desportivos": { title: "Pavimentos Desportivos", desc: "Superfícies para campos, courts e pavilhões. Aderência, amortecimento e durabilidade para uso intensivo." },
        "pavimentos-industriais": { title: "Pavimentos Industriais", desc: "Resinas técnicas e pavimentos contínuos para pavilhões, armazéns e espaços com elevada carga mecânica." },
        "microcimento": { title: "Microcimento", desc: "Acabamento contínuo e moderno para pavimentos e paredes. Estética premium com alta resistência." },
        "impermeabilizacao": { title: "Impermeabilização", desc: "Coberturas, terraços, varandas e fundações. Proteção total contra infiltrações e humidade." },
        "relva-artificial": { title: "Relva Artificial", desc: "Aplicação em campos, jardins e zonas exteriores. Estética natural sem manutenção exigente." }
      }
    },
    partner: {
      eyebrow: "Parceria",
      title: "Soluções complementares",
      titleAccent: "em altura",
      lead: "Em parceria com a {name}, oferecemos também serviços de fachadas, isolamento térmico e reabilitação estrutural — um único interlocutor para obras de maior complexidade.",
      label: "Em parceria com",
      visit: "Visitar pcworkvertical.pt",
      items: {
        "isolamento": { tag: "Isolamento", title: "Isolamento de Fachadas", desc: "Sistemas térmicos e acústicos de alta performance (ETICS / Cappotto), com eficiência energética e durabilidade certificada." },
        "remodelacao": { tag: "Interiores", title: "Remodelação", desc: "Transformação de espaços com acabamentos premium e execução técnica rigorosa para projetos residenciais e comerciais." },
        "reabilitacao": { tag: "Estrutura", title: "Reabilitação", desc: "Restauração estética e funcional de edifícios — preservação patrimonial e reforço estrutural com materiais certificados." }
      }
    },
    resist: {
      eyebrow: "Promessa Técnica",
      title1: "Superfícies que resistem.",
      title2: "Acabamentos",
      title2Suffix: "que valorizam.",
      lead: "Cada projeto exige a solução certa. A LAGO LIMA combina análise técnica, materiais adequados e execução profissional para criar superfícies duradouras e visualmente cuidadas.",
      benefits: [
        { idx: "/01", title: "Resistência e durabilidade", desc: "Materiais e camadas adequadas a uso intensivo e a longo prazo." },
        { idx: "/02", title: "Execução técnica especializada", desc: "Equipa formada para pavimentos contínuos, desportivos e industriais." },
        { idx: "/03", title: "Soluções adaptadas ao espaço", desc: "Cada projeto começa com análise rigorosa do local e da utilização." },
        { idx: "/04", title: "Materiais adequados à utilização", desc: "Especificação técnica em função de carga, exposição e tráfego." },
        { idx: "/05", title: "Acabamentos limpos e profissionais", desc: "Atenção ao detalhe nas juntas, remates e superfícies finais." },
        { idx: "/06", title: "Cumprimento de prazos", desc: "Planeamento realista, entregas dentro do calendário definido." }
      ]
    },
    banner: {
      eyebrow: "Engenharia de Superfícies",
      title1: "Construímos superfícies preparadas para",
      titleAccent: "uso intenso",
      title2: ", desempenho e longa duração.",
      marks: ["ANTI-DERRAPANTE", "UV RESISTANTE", "USO INTENSIVO", "ALTA ADERÊNCIA"]
    },
    applications: {
      eyebrow: "Aplicações",
      title: "Para espaços que exigem mais do que uma superfície.",
      lead: "Soluções pensadas para diferentes contextos, do desporto à habitação privada.",
      items: [
        { tag: "/ 01 SPORT", title: "Campos desportivos", desc: "Pisos técnicos para futebol, padel, basquetebol e múltiplas modalidades." },
        { tag: "/ 02 INDUSTRY", title: "Pavilhões industriais", desc: "Resinas e pavimentos contínuos para cargas elevadas." },
        { tag: "/ 03 LOGISTICS", title: "Armazéns", desc: "Superfícies preparadas para movimentação intensa e tráfego pesado." },
        { tag: "/ 04 EDUCATION", title: "Escolas e clubes", desc: "Recreios, polidesportivos e pavilhões para uso diário." },
        { tag: "/ 05 HOUSING", title: "Habitações", desc: "Microcimento, terraços impermeáveis e acabamentos contínuos." },
        { tag: "/ 06 RETAIL", title: "Espaços comerciais", desc: "Pavimentos com estética premium e elevada resistência ao uso." },
        { tag: "/ 07 OUTDOOR", title: "Zonas exteriores", desc: "Pavimentos resistentes a chuva, sol e variações térmicas." },
        { tag: "/ 08 GREEN", title: "Jardins com relva artificial", desc: "Solução estética, durável e sem manutenção exigente." }
      ]
    },
    process: {
      eyebrow: "Como Trabalhamos",
      title: "Quatro passos para uma superfície que dura.",
      lead: "Um processo claro, desde a primeira visita ao espaço até à entrega final da obra.",
      steps: [
        { title: "Análise do espaço", desc: "Visita técnica, avaliação da base, identificação de necessidades e exigências de uso." },
        { title: "Recomendação da solução", desc: "Proposta técnica com material adequado, sistema construtivo e orçamento detalhado." },
        { title: "Preparação da superfície", desc: "Tratamento da base, regularização e primários para garantir aderência e durabilidade." },
        { title: "Aplicação e entrega final", desc: "Execução por equipa especializada, controlo de qualidade e entrega da obra concluída." }
      ]
    },
    projects: {
      eyebrow: "Projetos",
      title: "Trabalho técnico em diferentes contextos.",
      lead: "Uma seleção de tipologias e ambientes em que a LAGO LIMA atua.",
      filters: ["Todos", "Desportivo", "Industrial", "Microcimento", "Impermeabilização", "Relva Artificial"] as const,
      items: {
        p1: { title: "Pavilhão multiuso premium", category: "Desportivo" },
        p2: { title: "Transformação de pavilhão", category: "Industrial" },
        p3: { title: "Acabamento contínuo brilhante", category: "Microcimento" },
        p4: { title: "Piscina e área exterior", category: "Impermeabilização" },
        p5: { title: "Campo de relva sintética", category: "Relva Artificial" },
        p6: { title: "Polidesportivo exterior", category: "Desportivo" },
        p7: { title: "Pavimento industrial técnico", category: "Industrial" },
        p8: { title: "Jardim com relva artificial", category: "Relva Artificial" },
        p9: { title: "Terraço impermeabilizado", category: "Impermeabilização" }
      }
    },
    about: {
      eyebrow: "Sobre Nós",
      title: "Engenharia de pavimentos. Compromisso com cada metro.",
      lead: "A LAGO LIMA atua na execução de pavimentos desportivos e industriais, oferecendo soluções técnicas em microcimento, impermeabilização e relva artificial. Com foco na resistência, no acabamento e na qualidade de execução, desenvolvemos soluções adaptadas às necessidades de cada espaço.",
      chips: ["Microcimento", "Resina", "Impermeabilização", "Relva"],
      values: [
        { label: "Qualidade" },
        { label: "Resistência" },
        { label: "Confiança" },
        { label: "Precisão" },
        { label: "Durabilidade" }
      ]
    },
    cta: {
      eyebrow: "Próximo passo",
      title1: "Tem um",
      titleAccent: "projeto",
      title2: "em mente?",
      lead: "Fale connosco e receba uma proposta ajustada ao seu espaço, objetivo e orçamento.",
      primary: "Pedir Orçamento",
      whatsapp: "Contactar por WhatsApp"
    },
    contact: {
      eyebrow: "Contactos",
      title: "Receba uma proposta para o seu projeto.",
      lead: "Preencha o formulário com o máximo de detalhe possível. Respondemos com uma proposta técnica adequada.",
      labels: {
        name: "Nome",
        phone: "Telefone",
        email: "Email",
        location: "Localidade",
        service: "Tipo de serviço",
        message: "Mensagem"
      },
      placeholders: {
        name: "O seu nome",
        phone: "9XX XXX XXX",
        email: "email@exemplo.pt",
        location: "Concelho / Distrito",
        message: "Descreva o espaço, área aproximada e prazo desejado..."
      },
      serviceOptions: [
        "Pavimentos Desportivos",
        "Pavimentos Industriais",
        "Microcimento",
        "Impermeabilização",
        "Relva Artificial",
        "Outro / Combinado"
      ],
      submit: "Enviar Pedido de Orçamento",
      sent: "Pedido recebido — obrigado!",
      side: {
        sub: "Falar com a equipa",
        title: "Estamos disponíveis para esclarecer o seu projeto.",
        phoneLbl: "Telefone / WhatsApp",
        emailLbl: "Email",
        coverageLbl: "Cobertura",
        coverageVal: "Portugal Continental",
        replyLbl: "Resposta",
        replyVal: "Em 24h úteis"
      }
    },
    footer: {
      desc: "Pavimentos Desportivos e Industriais.\nMicrocimento · Impermeabilização · Relva Artificial.",
      tagline: "Construímos superfícies. Entregamos resultados.",
      navTitle: "Navegação",
      servicesTitle: "Serviços",
      contactTitle: "Contactos",
      rights: "Todos os direitos reservados",
      ribbon: "PT · Pavimentos Técnicos"
    },
    loader: { status: "A preparar superfícies" },
    skipLink: "Saltar para o conteúdo",
    backToTop: "Voltar ao topo",
    wa: "Contactar por WhatsApp"
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Get a Quote"
    },
    hero: {
      eyebrow: "TECHNICAL FLOORING · PORTUGAL",
      titleWords: [
        { text: "Technical" },
        { text: "flooring" },
        { text: "for", accent: false },
        { text: "sport,", accent: true },
        { text: "industry" },
        { text: "and" },
        { text: "professional" },
        { text: "finishes." }
      ],
      lead: "Long-lasting solutions in sports flooring, microcement, waterproofing and artificial turf for demanding projects across Portugal.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "View Services",
      metaA: "Specialty",
      metaAValue: "Technical Flooring",
      metaB: "Application",
      metaBValue: "Sports · Industrial",
      metaC: "Coverage",
      metaCValue: "Mainland Portugal",
      scroll: "scroll"
    },
    impact: [
      { lbl: "01 — Project", title: "Tailor", accent: "made", desc: "Every space is assessed and designed with the right technical solution." },
      { lbl: "02 — Materials", title: "Resilient", accent: "solutions", desc: "Materials selected for intensive use, outdoor and industrial environments." },
      { lbl: "03 — Execution", title: "Professional", accent: "finish", desc: "Rigorous application with attention to detail and on-time delivery." },
      { lbl: "04 — Team", title: "Technical", accent: "expertise", desc: "Specialised crew in sports, industrial and technical flooring." }
    ],
    services: {
      eyebrow: "Services",
      title: "Technical surfaces engineered for every demand.",
      lead: "From sports courts to industrial halls, from private homes to retail spaces — full solutions delivered with professional execution.",
      more: "Learn more",
      items: {
        "pavimentos-desportivos": { title: "Sports Flooring", desc: "Surfaces for courts, pitches and pavilions. Grip, shock absorption and durability for intensive use." },
        "pavimentos-industriais": { title: "Industrial Flooring", desc: "Technical resins and seamless floors for warehouses, halls and spaces with heavy mechanical loads." },
        "microcimento": { title: "Microcement", desc: "Seamless, modern finish for floors and walls. Premium aesthetics with high resistance." },
        "impermeabilizacao": { title: "Waterproofing", desc: "Roofs, terraces, balconies and foundations. Full protection against infiltration and moisture." },
        "relva-artificial": { title: "Artificial Turf", desc: "Installation in fields, gardens and outdoor areas. Natural look with minimal maintenance." }
      }
    },
    partner: {
      eyebrow: "Partnership",
      title: "Complementary solutions",
      titleAccent: "at height",
      lead: "Together with {name}, we also offer facade work, thermal insulation and structural rehabilitation — a single point of contact for more complex projects.",
      label: "In partnership with",
      visit: "Visit pcworkvertical.pt",
      items: {
        "isolamento": { tag: "Insulation", title: "Facade Insulation", desc: "High-performance thermal and acoustic systems (ETICS / Cappotto) with certified energy efficiency and durability." },
        "remodelacao": { tag: "Interiors", title: "Renovation", desc: "Space transformation with premium finishes and rigorous technical execution for residential and commercial projects." },
        "reabilitacao": { tag: "Structure", title: "Rehabilitation", desc: "Aesthetic and functional restoration of buildings — heritage preservation and structural reinforcement with certified materials." }
      }
    },
    resist: {
      eyebrow: "Technical Promise",
      title1: "Surfaces that endure.",
      title2: "Finishes",
      title2Suffix: "that elevate.",
      lead: "Every project demands the right answer. LAGO LIMA combines technical analysis, suitable materials and professional execution to create lasting, visually polished surfaces.",
      benefits: [
        { idx: "/01", title: "Resistance and durability", desc: "Materials and layers tuned for intensive, long-term use." },
        { idx: "/02", title: "Specialised technical execution", desc: "A crew trained for seamless, sports and industrial flooring." },
        { idx: "/03", title: "Solutions adapted to the space", desc: "Every project starts with a rigorous assessment of site and use." },
        { idx: "/04", title: "Materials matched to use", desc: "Technical specification driven by load, exposure and traffic." },
        { idx: "/05", title: "Clean, professional finishes", desc: "Attention to detail in joints, edges and final surfaces." },
        { idx: "/06", title: "Deadlines respected", desc: "Realistic planning, delivery within the agreed schedule." }
      ]
    },
    banner: {
      eyebrow: "Surface Engineering",
      title1: "We build surfaces ready for",
      titleAccent: "intensive use",
      title2: ", performance and the long run.",
      marks: ["ANTI-SLIP", "UV RESISTANT", "HEAVY-DUTY", "HIGH GRIP"]
    },
    applications: {
      eyebrow: "Applications",
      title: "For spaces that demand more than a surface.",
      lead: "Solutions designed for diverse contexts, from sport to private homes.",
      items: [
        { tag: "/ 01 SPORT", title: "Sports fields", desc: "Technical floors for football, padel, basketball and multiple disciplines." },
        { tag: "/ 02 INDUSTRY", title: "Industrial halls", desc: "Resins and seamless flooring for heavy loads." },
        { tag: "/ 03 LOGISTICS", title: "Warehouses", desc: "Surfaces prepared for intensive traffic and heavy operations." },
        { tag: "/ 04 EDUCATION", title: "Schools and clubs", desc: "Playgrounds, multisport courts and pavilions for daily use." },
        { tag: "/ 05 HOUSING", title: "Homes", desc: "Microcement, waterproof terraces and seamless finishes." },
        { tag: "/ 06 RETAIL", title: "Retail spaces", desc: "Flooring with premium aesthetics and high wear resistance." },
        { tag: "/ 07 OUTDOOR", title: "Outdoor areas", desc: "Surfaces resilient to rain, sun and temperature swings." },
        { tag: "/ 08 GREEN", title: "Gardens with artificial turf", desc: "Aesthetic, durable, low-maintenance solutions." }
      ]
    },
    process: {
      eyebrow: "How We Work",
      title: "Four steps to a surface that lasts.",
      lead: "A clear process, from the first site visit to final delivery.",
      steps: [
        { title: "Site assessment", desc: "Technical visit, base evaluation, identification of needs and usage requirements." },
        { title: "Solution proposal", desc: "Technical proposal with the right material, build-up and a detailed estimate." },
        { title: "Surface preparation", desc: "Base treatment, levelling and primers to ensure adhesion and longevity." },
        { title: "Application and handover", desc: "Execution by a specialised crew, quality control and final delivery." }
      ]
    },
    projects: {
      eyebrow: "Projects",
      title: "Technical work across different contexts.",
      lead: "A selection of typologies and environments where LAGO LIMA operates.",
      filters: ["All", "Sports", "Industrial", "Microcement", "Waterproofing", "Artificial Turf"] as const,
      items: {
        p1: { title: "Premium multi-purpose hall", category: "Sports" },
        p2: { title: "Pavilion transformation", category: "Industrial" },
        p3: { title: "Glossy seamless finish", category: "Microcement" },
        p4: { title: "Pool and outdoor area", category: "Waterproofing" },
        p5: { title: "Synthetic turf pitch", category: "Artificial Turf" },
        p6: { title: "Outdoor multisport court", category: "Sports" },
        p7: { title: "Technical industrial floor", category: "Industrial" },
        p8: { title: "Garden with artificial turf", category: "Artificial Turf" },
        p9: { title: "Waterproof terrace", category: "Waterproofing" }
      }
    },
    about: {
      eyebrow: "About Us",
      title: "Flooring engineering. Commitment to every square metre.",
      lead: "LAGO LIMA delivers sports and industrial flooring, with technical solutions in microcement, waterproofing and artificial turf. With a focus on resistance, finish and execution quality, we develop solutions tailored to each space.",
      chips: ["Microcement", "Resin", "Waterproofing", "Turf"],
      values: [
        { label: "Quality" },
        { label: "Resistance" },
        { label: "Trust" },
        { label: "Precision" },
        { label: "Durability" }
      ]
    },
    cta: {
      eyebrow: "Next step",
      title1: "Have a",
      titleAccent: "project",
      title2: "in mind?",
      lead: "Get in touch and receive a proposal tailored to your space, goal and budget.",
      primary: "Get a Quote",
      whatsapp: "Chat on WhatsApp"
    },
    contact: {
      eyebrow: "Contact",
      title: "Get a proposal for your project.",
      lead: "Fill in the form with as much detail as possible. We reply with a fitting technical proposal.",
      labels: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        location: "Location",
        service: "Service type",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        phone: "+351 9XX XXX XXX",
        email: "email@example.com",
        location: "City / District",
        message: "Describe the space, approximate area and desired timeline..."
      },
      serviceOptions: [
        "Sports Flooring",
        "Industrial Flooring",
        "Microcement",
        "Waterproofing",
        "Artificial Turf",
        "Other / Combined"
      ],
      submit: "Send Request",
      sent: "Request received — thank you!",
      side: {
        sub: "Talk to the team",
        title: "We're available to walk you through your project.",
        phoneLbl: "Phone / WhatsApp",
        emailLbl: "Email",
        coverageLbl: "Coverage",
        coverageVal: "Mainland Portugal",
        replyLbl: "Reply",
        replyVal: "Within 24 business hours"
      }
    },
    footer: {
      desc: "Sports and Industrial Flooring.\nMicrocement · Waterproofing · Artificial Turf.",
      tagline: "We build surfaces. We deliver results.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved",
      ribbon: "PT · Technical Flooring"
    },
    loader: { status: "Preparing surfaces" },
    skipLink: "Skip to content",
    backToTop: "Back to top",
    wa: "Chat on WhatsApp"
  }
} as const;

// keep type compatibility
export type { Dict };
