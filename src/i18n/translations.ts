export const translations = {
  en: {
    nav: { home: "Home", about: "About", stack: "Stack", projects: "Projects", contact: "Contact" },
    hero: {
      intro: "Hello — I'm Levi.",
      title: "Full Stack Programmer",
      tagline: "Cross-platform apps, APIs, and clear collaboration across time zones.",
      btnView: "View work",
      btnContact: "Contact",
    },
    about: {
      kicker: "About",
      title: "About me",
      lead: "I'm currently a technical course student and work with front-end, back-end, relational and non-relational databases, and REST APIs.\n\nPassionate about technology and programming, turning ideas into real solutions. I believe the best code solves real problems with simplicity and clarity.",
    },
    tech: {
      kicker: "Stacks",
      title: "Stack",
      lead: "Tools and platforms I use to design, build, and ship software.",
    },
    projects: {
      kicker: "Work",
      title: "Projects",
      lead: "A selection of shipped code — from systems and mobile to focused APIs.",
      viewCode: "View Code",
      items: [
        {
          title: "Hospital System",
          desc: "Web-based hospital workflow: structured data, clear UI, and maintainable Java-oriented logic for administrative and clinical flows.",
          tech: ["Java", "HTML", "CSS"],
          url: "https://github.com/LeviAbreu0/sistema-de-hospital",
        },
        {
          title: "Gasóleo",
          desc: "Mobile app to track motorcycle fuel and oil usage — typed codebase, focused screens, and practical CRUD-style management for everyday riders.",
          tech: ["TypeScript", "React Native"],
          url: "https://github.com/LeviAbreu0/gasoleo",
        },
        {
          title: "Flashcards Node",
          desc: "Node.js backend for flashcard decks — lightweight routes and data flow for study sessions and content management.",
          tech: ["Node.js", "JavaScript"],
          url: "https://github.com/LeviAbreu0/flashcards-node",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Get in touch",
      lead: "Let's turn your idea into reality! Send a message and I'll reply within 1 business day.",
      email: "leviabreu.dev@gmail.com",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: "Levi Abreu",
  },
  pt: {
    nav: { home: "Início", about: "Sobre", stack: "Stack", projects: "Projetos", contact: "Contato" },
    hero: {
      intro: "Olá — sou Levi.",
      title: "Programador Full Stack",
      tagline: "Apps multiplataforma, APIs e colaboração clara entre fusos horários.",
      btnView: "Ver projetos",
      btnContact: "Contato",
    },
    about: {
      kicker: "Sobre",
      title: "Sobre mim",
      lead: "Atualmente sou estudante de curso técnico e trabalho com front-end, back-end, bancos relacionais e não relacionais, e APIs REST.\n\nApaixonado por tecnologia e programação, transformando ideias em soluções reais. Acredito que o melhor código resolve problemas reais com simplicidade e clareza.",
    },
    tech: {
      kicker: "Stacks",
      title: "Stack",
      lead: "Ferramentas e plataformas que uso para projetar, construir e entregar software.",
    },
    projects: {
      kicker: "Trabalhos",
      title: "Projetos",
      lead: "Uma seleção de código entregue — de sistemas e mobile a APIs focadas.",
      viewCode: "Ver Código",
      items: [
        {
          title: "Sistema Hospitalar",
          desc: "Fluxo hospitalar baseado na web: dados estruturados, UI clara e lógica Java orientada a objetos para fluxos administrativos e clínicos.",
          tech: ["Java", "HTML", "CSS"],
          url: "https://github.com/LeviAbreu0/sistema-de-hospital",
        },
        {
          title: "Gasóleo",
          desc: "App mobile para rastrear consumo de combustível e óleo de moto — código tipado, telas focadas e gerenciamento CRUD prático para motociclistas.",
          tech: ["TypeScript", "React Native"],
          url: "https://github.com/LeviAbreu0/gasoleo",
        },
        {
          title: "Flashcards Node",
          desc: "Backend Node.js para decks de flashcards — rotas leves e fluxo de dados para sessões de estudo e gerenciamento de conteúdo.",
          tech: ["Node.js", "JavaScript"],
          url: "https://github.com/LeviAbreu0/flashcards-node",
        },
      ],
    },
    contact: {
      kicker: "Contato",
      title: "Entre em contato",
      lead: "Transforme sua ideia em realidade! Envie uma mensagem e respondo em até 1 dia útil.",
      email: "leviabreu.dev@gmail.com",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: "Levi Abreu",
  },
};

export type Lang = "en" | "pt";
export type TranslationKey = keyof typeof translations.en;
