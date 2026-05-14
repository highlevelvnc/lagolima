export type Lang = "pt" | "en" | "de";
export const LANGS: Lang[] = ["pt", "en", "de"];
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
    extras: {
      eyebrow: "Soluções Complementares",
      title: "Para além do pavimento,",
      titleAccent: "a obra completa",
      lead: "Oferecemos também serviços de fachadas, isolamento térmico e reabilitação estrutural — para responder a obras mais exigentes com um único interlocutor.",
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
    extras: {
      eyebrow: "Complementary Solutions",
      title: "Beyond flooring,",
      titleAccent: "the full project",
      lead: "We also deliver facade work, thermal insulation and structural rehabilitation — so demanding projects can move forward with a single point of contact.",
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
  },
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      projects: "Projekte",
      process: "Ablauf",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Angebot anfordern"
    },
    hero: {
      eyebrow: "TECHNISCHE BÖDEN · PORTUGAL",
      titleWords: [
        { text: "Technische" },
        { text: "Böden" },
        { text: "für" },
        { text: "Sport,", accent: true },
        { text: "Industrie" },
        { text: "und" },
        { text: "professionelle" },
        { text: "Oberflächen." }
      ],
      lead: "Langlebige Lösungen in Sportböden, Mikrozement, Abdichtungen und Kunstrasen für anspruchsvolle Projekte in ganz Portugal.",
      ctaPrimary: "Angebot anfordern",
      ctaSecondary: "Leistungen ansehen",
      metaA: "Fachgebiet",
      metaAValue: "Technische Böden",
      metaB: "Einsatz",
      metaBValue: "Sport · Industrie",
      metaC: "Tätigkeitsgebiet",
      metaCValue: "Festland-Portugal",
      scroll: "scrollen"
    },
    impact: [
      { lbl: "01 — Projekt", title: "Maß-", accent: "geschneidert", desc: "Jeder Raum wird mit der passenden technischen Lösung bewertet und geplant." },
      { lbl: "02 — Materialien", title: "Beständige", accent: "Lösungen", desc: "Materialien, ausgewählt für intensive Nutzung, Außen- und Industriebereiche." },
      { lbl: "03 — Ausführung", title: "Professionelle", accent: "Verarbeitung", desc: "Sorgfältige Ausführung mit Liebe zum Detail und termingerechter Lieferung." },
      { lbl: "04 — Team", title: "Technische", accent: "Expertise", desc: "Spezialisierte Crew für Sport-, Industrie- und Spezialböden." }
    ],
    services: {
      eyebrow: "Leistungen",
      title: "Technische Oberflächen für jede Anforderung.",
      lead: "Vom Sportplatz bis zur Industriehalle, vom Eigenheim bis zur Geschäftsfläche — Komplettlösungen mit professioneller Ausführung.",
      more: "Mehr erfahren",
      items: {
        "pavimentos-desportivos": { title: "Sportböden", desc: "Oberflächen für Spielfelder, Courts und Hallen. Griffigkeit, Stoßdämpfung und Langlebigkeit für intensiven Einsatz." },
        "pavimentos-industriais": { title: "Industrieböden", desc: "Technische Harze und fugenlose Beläge für Hallen, Lager und Bereiche mit hoher mechanischer Belastung." },
        "microcimento": { title: "Mikrozement", desc: "Fugenlose, moderne Oberflächen für Böden und Wände. Hochwertige Ästhetik mit hoher Beständigkeit." },
        "impermeabilizacao": { title: "Abdichtung", desc: "Dächer, Terrassen, Balkone und Fundamente. Vollständiger Schutz gegen Eindringen von Wasser und Feuchtigkeit." },
        "relva-artificial": { title: "Kunstrasen", desc: "Verlegung auf Spielfeldern, in Gärten und Außenbereichen. Natürlicher Look bei minimalem Pflegeaufwand." }
      }
    },
    extras: {
      eyebrow: "Ergänzende Lösungen",
      title: "Über den Boden hinaus —",
      titleAccent: "das gesamte Bauvorhaben",
      lead: "Wir liefern auch Fassadenarbeiten, Wärmedämmung und Bausanierung, damit anspruchsvolle Projekte mit nur einem Ansprechpartner umgesetzt werden können.",
      items: {
        "isolamento": { tag: "Dämmung", title: "Fassadendämmung", desc: "Hochleistungs-Dämmsysteme thermisch und akustisch (ETICS / Cappotto) mit zertifizierter Energieeffizienz und Langlebigkeit." },
        "remodelacao": { tag: "Innenausbau", title: "Renovierung", desc: "Raumtransformation mit Premium-Oberflächen und präziser technischer Ausführung für Wohn- und Gewerbeprojekte." },
        "reabilitacao": { tag: "Struktur", title: "Sanierung", desc: "Ästhetische und funktionale Restaurierung von Gebäuden — Denkmalschutz und strukturelle Verstärkung mit zertifizierten Materialien." }
      }
    },
    resist: {
      eyebrow: "Technisches Versprechen",
      title1: "Oberflächen, die bleiben.",
      title2: "Verarbeitung,",
      title2Suffix: "die überzeugt.",
      lead: "Jedes Projekt verlangt die richtige Antwort. LAGO LIMA verbindet technische Analyse, passende Materialien und professionelle Ausführung, um dauerhafte, ästhetisch gepflegte Oberflächen zu schaffen.",
      benefits: [
        { idx: "/01", title: "Widerstandsfähigkeit und Langlebigkeit", desc: "Materialien und Aufbauten, abgestimmt auf intensive, langfristige Nutzung." },
        { idx: "/02", title: "Spezialisierte technische Ausführung", desc: "Eine Crew, geschult in fugenlosen, Sport- und Industrieböden." },
        { idx: "/03", title: "An den Raum angepasste Lösungen", desc: "Jedes Projekt beginnt mit einer gründlichen Bewertung von Standort und Nutzung." },
        { idx: "/04", title: "Materialien passend zur Nutzung", desc: "Technische Spezifikation nach Last, Exposition und Verkehr." },
        { idx: "/05", title: "Saubere, professionelle Verarbeitung", desc: "Liebe zum Detail bei Fugen, Anschlüssen und Endoberflächen." },
        { idx: "/06", title: "Termintreue", desc: "Realistische Planung, Lieferung im vereinbarten Zeitrahmen." }
      ]
    },
    banner: {
      eyebrow: "Oberflächentechnik",
      title1: "Wir bauen Oberflächen, geschaffen für",
      titleAccent: "intensive Nutzung",
      title2: ", Leistung und Langlebigkeit.",
      marks: ["RUTSCHHEMMEND", "UV-BESTÄNDIG", "HOCHBELASTBAR", "GRIFFIG"]
    },
    applications: {
      eyebrow: "Anwendungsbereiche",
      title: "Für Räume, die mehr verlangen als nur eine Oberfläche.",
      lead: "Lösungen für unterschiedliche Kontexte, vom Sport bis zum Privatbereich.",
      items: [
        { tag: "/ 01 SPORT", title: "Sportplätze", desc: "Technische Böden für Fußball, Padel, Basketball und mehrere Disziplinen." },
        { tag: "/ 02 INDUSTRIE", title: "Industriehallen", desc: "Harze und fugenlose Beläge für hohe Lasten." },
        { tag: "/ 03 LOGISTIK", title: "Lagerhallen", desc: "Oberflächen, gerüstet für intensiven Verkehr und schweren Betrieb." },
        { tag: "/ 04 BILDUNG", title: "Schulen und Vereine", desc: "Pausenhöfe, Mehrzwecksportplätze und Hallen für den täglichen Einsatz." },
        { tag: "/ 05 WOHNEN", title: "Wohnbereiche", desc: "Mikrozement, wasserdichte Terrassen und fugenlose Oberflächen." },
        { tag: "/ 06 HANDEL", title: "Geschäftsflächen", desc: "Böden mit hochwertiger Ästhetik und hoher Verschleißfestigkeit." },
        { tag: "/ 07 AUSSEN", title: "Außenbereiche", desc: "Oberflächen, beständig gegen Regen, Sonne und Temperaturschwankungen." },
        { tag: "/ 08 GARTEN", title: "Gärten mit Kunstrasen", desc: "Ästhetische, langlebige Lösung mit minimalem Pflegeaufwand." }
      ]
    },
    process: {
      eyebrow: "Wie wir arbeiten",
      title: "Vier Schritte zu einer Oberfläche, die hält.",
      lead: "Ein klarer Ablauf, vom ersten Vor-Ort-Termin bis zur endgültigen Übergabe.",
      steps: [
        { title: "Standortbewertung", desc: "Technischer Besuch, Untergrundbewertung, Bedarfs- und Nutzungsanalyse." },
        { title: "Lösungsvorschlag", desc: "Technisches Angebot mit passendem Material, Aufbau und detaillierter Kostenschätzung." },
        { title: "Vorbereitung der Oberfläche", desc: "Untergrundbehandlung, Nivellierung und Grundierung für Haftung und Langlebigkeit." },
        { title: "Verlegung und Übergabe", desc: "Ausführung durch spezialisiertes Team, Qualitätskontrolle und finale Übergabe." }
      ]
    },
    projects: {
      eyebrow: "Projekte",
      title: "Technische Arbeit in unterschiedlichen Kontexten.",
      lead: "Eine Auswahl an Typologien und Umgebungen, in denen LAGO LIMA tätig ist.",
      filters: ["Alle", "Sport", "Industrie", "Mikrozement", "Abdichtung", "Kunstrasen"] as const,
      items: {
        p1: { title: "Premium-Mehrzweckhalle", category: "Sport" },
        p2: { title: "Hallensanierung", category: "Industrie" },
        p3: { title: "Glänzende fugenlose Oberfläche", category: "Mikrozement" },
        p4: { title: "Pool- und Außenbereich", category: "Abdichtung" },
        p5: { title: "Kunstrasenspielfeld", category: "Kunstrasen" },
        p6: { title: "Mehrzweck-Sportplatz im Freien", category: "Sport" },
        p7: { title: "Technischer Industrieboden", category: "Industrie" },
        p8: { title: "Garten mit Kunstrasen", category: "Kunstrasen" },
        p9: { title: "Wasserdichte Terrasse", category: "Abdichtung" }
      }
    },
    about: {
      eyebrow: "Über uns",
      title: "Bodentechnik. Verantwortung für jeden Quadratmeter.",
      lead: "LAGO LIMA realisiert Sport- und Industrieböden und liefert technische Lösungen in Mikrozement, Abdichtung und Kunstrasen. Mit Fokus auf Beständigkeit, Verarbeitung und Ausführungsqualität entwickeln wir auf den jeweiligen Raum zugeschnittene Lösungen.",
      chips: ["Mikrozement", "Harz", "Abdichtung", "Rasen"],
      values: [
        { label: "Qualität" },
        { label: "Beständigkeit" },
        { label: "Vertrauen" },
        { label: "Präzision" },
        { label: "Langlebigkeit" }
      ]
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title1: "Haben Sie ein",
      titleAccent: "Projekt",
      title2: "im Blick?",
      lead: "Kontaktieren Sie uns und erhalten Sie ein Angebot, abgestimmt auf Raum, Ziel und Budget.",
      primary: "Angebot anfordern",
      whatsapp: "Per WhatsApp schreiben"
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Holen Sie sich ein Angebot für Ihr Projekt.",
      lead: "Füllen Sie das Formular möglichst ausführlich aus. Wir antworten mit einem passenden technischen Angebot.",
      labels: {
        name: "Name",
        phone: "Telefon",
        email: "E-Mail",
        location: "Ort",
        service: "Leistung",
        message: "Nachricht"
      },
      placeholders: {
        name: "Ihr Name",
        phone: "+351 9XX XXX XXX",
        email: "email@beispiel.de",
        location: "Stadt / Bezirk",
        message: "Beschreiben Sie den Raum, die ungefähre Fläche und den gewünschten Zeitraum..."
      },
      serviceOptions: [
        "Sportböden",
        "Industrieböden",
        "Mikrozement",
        "Abdichtung",
        "Kunstrasen",
        "Sonstiges / Kombiniert"
      ],
      submit: "Anfrage senden",
      sent: "Anfrage erhalten — vielen Dank!",
      side: {
        sub: "Mit dem Team sprechen",
        title: "Wir besprechen Ihr Projekt gerne mit Ihnen.",
        phoneLbl: "Telefon / WhatsApp",
        emailLbl: "E-Mail",
        coverageLbl: "Tätigkeitsgebiet",
        coverageVal: "Festland-Portugal",
        replyLbl: "Antwortzeit",
        replyVal: "Innerhalb von 24 Werkstunden"
      }
    },
    footer: {
      desc: "Sport- und Industrieböden.\nMikrozement · Abdichtung · Kunstrasen.",
      tagline: "Wir bauen Oberflächen. Wir liefern Ergebnisse.",
      navTitle: "Navigation",
      servicesTitle: "Leistungen",
      contactTitle: "Kontakt",
      rights: "Alle Rechte vorbehalten",
      ribbon: "PT · Technische Böden"
    },
    loader: { status: "Oberflächen vorbereiten" },
    skipLink: "Zum Inhalt springen",
    backToTop: "Nach oben",
    wa: "Per WhatsApp schreiben"
  }
} as const;

// keep type compatibility
export type { Dict };
