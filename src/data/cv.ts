import { CVData } from '@/types/cv';

export const cvData: Record<'es' | 'en', CVData> = {
  es: {
    name: "Pedro Araya Gálvez",
    role: "Full Stack Developer",
    location: "Quillota, Chile (Remote-ready)",
    contact: {
      email: "piteraraya@gmail.com",
      phone: "+56 9 5764 2162",
      linkedin: "linkedin.com/in/pedro-araya-galvez",
      github: "github.com/peteraraya",
      portfolio: "pedroaraya.vercel.app"
    },
    summary: "Full Stack Developer con más de 8 años de experiencia end-to-end, me he dedicado especialmente a la librería de Javascript React, también en TypeScript, Node.js y arquitecturas serverless (Atlassian Forge), tengo experiencia adicional en Angular, NestJS y WordPress/PHP a través de proyectos de consultoría externa y en desarrollos de proyectos propios. Me he dedicado a lo largo de mi carrera a entregar valor medible: como la reducción de tiempos de entrega, resolución de vulnerabilidades críticas de seguridad (RBAC, MFA, RLS) y modernización de stacks legacy (PHP, XML, WordPress) hacia arquitecturas actuales. Reconocido por mi perseverancia técnica, capacidad de adaptación rápida a nuevos stacks y dedicación a la calidad de código, testing (Vitest, Jest).\n\nCon más de 5 años trabajando en equipos distribuidos y comunicación asíncrona —incluyendo colaboración simultánea con múltiples clientes externos— he demostrado autonomía. Busco un rol remoto (ideal) senior donde aportar impacto medible desde el primer sprint. He trabajado con metodologías ágiles, Git Flow, Conventional Commits y despliegue continuo, con experiencia en la construcción de pipelines de CI/CD y contenedores Docker multistage.",
    availability: "Abierto a oportunidades · Disponibilidad inmediata",
    aboutMe: {
      description: "¡Hola! Soy un entusiasta de la tecnología, estudiante autodidacta y fiel creyente del aprendizaje continuo (gran parte de mi conocimiento lo debo a la inmersión en cursos de Udemy). Me apasiona estar siempre al día con las últimas tendencias tech, probar nuevas herramientas y explorar cómo evoluciona el desarrollo de software.\n\nSoy una persona muy disciplinada, un valor que me define tanto frente a la pantalla resolviendo problemas técnicos, como en mi tiempo libre. Busco siempre combinar mi energía, constancia y curiosidad para seguir creciendo y crear soluciones innovadoras.",
      highlights: [
        { text: "Estudiante autodidacta", icon: "learn" },
        { text: "Apasionado por nuevas tecnologías", icon: "tech" },
        { text: "Entrenamiento de fuerza", icon: "gym" }
      ]
    },
    experience: [
      {
        company: "Ticblue",
        role: "Full Stack Developer",
        period: "Agosto 2020 – Junio 2026",
        projects: [
          {
            name: "Proyecto Forge — Atlassian Marketplace",
            achievements: [
              "Integré un sistema de chat omnicanal (Jira Service Management + WhatsApp), mejorando los tiempos de respuesta del equipo de soporte.",
              "Diagnostiqué y resolví de forma autónoma más de 10 edge cases críticos en producción relacionados con adjuntos multimedia.",
              "Experiencia en (i18n) de la aplicación, habilitando su expansión a nuevos mercados."
            ]
          },
          {
            name: "Proyecto UVLPIC — Industria Circular",
            achievements: [
              "Desarrollé de forma autónoma el módulo completo de campañas y marketplace, frontend hasta producción.",
              "Implementé validaciones complejas en formularios y flujos de datos, reduciendo inconsistencias generadas por el usuario.",
              "Identifiqué y corregí vulnerabilidades críticas de seguridad en el backend, reforzando la confianza de la plataforma.",
              "Me dedique netamente a la parte de desarrollo, sin involucrarme en la parte de diseño, lo que me permitió concentrarme en la calidad del código y la eficiencia del sistema."
            ]
          },
          {
            name: "Proyecto RGSTCS — Teleconsulta (Salud)",
            achievements: [
              "Diseñé e implementé un sistema RBAC para permisos diferenciados de médicos, pacientes y administradores en una plataforma.",
              "Integré autenticación multifactor (MFA) y resolví problemas recurrentes de gestión de sesión, mejorando la estabilidad del sistema.",
              "Incorpore funcionalidades desde el frontend (React) hasta el backend (Express), incluyendo validaciones, flujos de datos y pruebas unitarias con Jest."
            ]
          },
          {
            name: "Proyecto RedBlu — Base de la Plataforma de Teleconsulta + E-commerce",
            achievements: [
              "Desarrollé RedBlu, la aplicación base sobre la que posteriormente se construyó y escaló el proyecto de Teleconsulta (RGSTCS), sentando la arquitectura inicial del producto.",
              "Diseñé e implementé el sitio de venta en WordPress con módulo de e-commerce (WooCommerce) para la comercialización de teleconsultas médicas, incluyendo catálogo de servicios, checkout y flujo de pago.",
              "Integré el frontend de venta (WordPress/PHP) con el backend de la aplicación de teleconsultas, conectando el proceso de compra del paciente con la generación y agendamiento de la consulta médica."
            ]
          },
          {
            name: "Proyectos para Clientes (Consultoría Externa) — 2020 – 2025",
            achievements: [
              "En paralelo a los proyectos internos de Ticblue, participé como desarrollador externo Full Stack, con foco en React, Node.js y NestJS.",
              "Real Seguros: desarrollo y mantenimiento del Portal de Clientes en Angular 2+, implementando funcionalidades frontend(2021).",
              "iMed — Migración XML a Node.js: desarrollo de pruebas unitarias e integración con Jest durante la modernización de una plataforma legacy, incluyendo procesos de extracción e integración de datos (ETL) entre sistemas con Node.js, APIs y validación con Zod (2025-2026).",
              "iMed — Licencias Médicas: migración desde PHP hacia React y NestJS, enfocado en formularios, validaciones e integración con APIs en frontend.",
              "iMed — Design System: implementación y evolución del sistema de diseño corporativo mediante componentes reutilizables para múltiples aplicaciones.",
              "iMed — Gestión de Bonos: desarrollo de una API (express) para la gestión de bonos médicos e integración con servicios internos."
            ]
          }
        ]
      },
      {
        company: "Prevsis",
        role: "Desarrollador Frontend",
        period: "2018 – Julio 2020",
        achievements: [
          "Desarrollé interfaces interactivas en React, logrando una reducción medible en la tasa de abandono.",
          "Integré APIs REST con backend .NET, asegurando consistencia y validación de datos en tiempo real.",
          "Optimicé el rendimiento y la compatibilidad cross-browser, reduciendo tiempos de carga en distintos entornos.",
          "Netamente me dediqué a la parte de desarrollo Frontend."
        ]
      }
    ],
    projects: [
      {
        name: "Postula Track",
        period: "2026 – presente",
        description: "Proyecto propio",
        link: "https://postulatrack.vercel.app",
        image: "/img/projects/postulatrack.jpg",
        achievements: [
          "Plataforma inteligente para búsqueda y gestión de empleo con tablero Kanban interactivo (Drag & Drop), construida con Angular 17+ (Signals, Standalone Components) y Tailwind CSS.",
          "Backend robusto en NestJS con Prisma y PostgreSQL (pgvector), integrando autenticación segura OAuth2 (Google) y JWT.",
          "Implementé motores de recomendación y scraping asíncrono para ingesta de ofertas y cálculo de 'Match Score' con el perfil del usuario.",
          "Integración nativa de Inteligencia Artificial para análisis ATS de CVs, generación automática de Cover Letters y simulador de entrevistas (formato STAR).",
          "Arquitectura desplegada mediante contenedores Docker multistage (Nginx) y CI/CD completo."
        ]
      },
      {
        name: "Training Management App (EvoLIFT)",
        period: "2026 – presente",
        description: "Proyecto propio",
        link: "https://evolift.vercel.app/login/",
        image: "/img/projects/evolift.png",
        achievements: [
          "Aplicación de gestión de entrenamientos físicos (rutinas, rachas y modo de reproducción de workouts), construida con React 19, TypeScript y Vite, consumiendo un backend en NestJS.",
          "Diseñé la arquitectura bajo Feature-Sliced Design (módulos por dominio: auth, dashboard, training), separando estado de servidor con TanStack Query de estado de UI con Zustand (persistencia en localStorage).",
          "Implementé autenticación completa: login/registro con validación en tiempo real (React Hook Form + Zod) y OAuth 2.0 con Google y GitHub.",
          "Contenericé la aplicación con Docker (build multistage Node + Nginx) y configuré un pipeline de CI/CD en GitHub Actions que corre lint, build y tests, y despliega automáticamente en cada push a main, siguiendo un flujo de ramas tipo Git Flow (develop, feature/*, hotfix/*).",
          "Implementé internacionalización completa (ES/EN) con react-i18next y funcionalidades de accesibilidad (modo oscuro, tamaño de letra ajustable)."
        ]
      },
      {
        name: "Centinela (Mapa de Emergencias)",
        period: "2026",
        description: "Proyecto propio",
        link: "https://red-centinela.vercel.app/",
        image: "/img/projects/centinela.jpg",
        achievements: [
          "Plataforma web para monitorear emergencias en Chile en tiempo real, desarrollada con React 19, TypeScript, MapLibre y Zustand.",
          "Backend en NestJS como agregador y scraper de múltiples fuentes oficiales (SENAPRED, Bomberos, CONAF, SEC), unificando los datos en un solo mapa interactivo."
        ]
      },
      {
        name: "Tienda de Confecciones",
        period: "2025",
        description: "Proyecto propio",
        link: "https://tienda-angus.vercel.app/",
        image: "/img/projects/tienda.jpg",
        achievements: [
          "Sistema e-commerce fullstack con panel de administración, CRUD de productos y control de stock, sobre arquitectura Supabase (Auth, DB, Storage)."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Vite, Angular 2+, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n (react-i18next)",
      "Backend": "Node.js, NestJS, PHP, WordPress (desarrollo a medida, WooCommerce), REST APIs, Atlassian Forge, Arquitectura Serverless, PostgreSQL, Supabase",
      "Autenticación & Seguridad": "RBAC, MFA, OAuth 2.0 (Google/GitHub), Row-Level Security (RLS), validación con Zod",
      "DevOps & CI/CD": "Docker (builds multistage), GitHub Actions, Git Flow, despliegue continuo",
      "E-commerce": "WooCommerce, pasarelas de pago, gestión de catálogo y checkout para venta de servicios digitales",
      "Testing & Calidad": "Jest, Vitest, MSW, Playwright, testing unitario, integración y E2E, colaboración con equipos SQA",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, React Hook Form, Axios, MapLibre (mapas interactivos)",
      "Datos": "ETL (extracción, transformación e integración de datos entre sistemas), PostgreSQL, Zod",
      "Herramientas": "Git, Jira, Conventional Commits, metodologías ágiles",
      "Blandas": "perseverancia técnica, adaptabilidad, autonomía en remoto, comunicación asíncrona efectiva, disciplina y organización, enfoque en calidad de código y eficiencia del sistema."
    },
    education: [
      {
        title: "Analista Programador",
        institution: "Instituto Profesional / Centro de Formación Técnica (INACAP), 2014"
      },
      {
        title: "Certificaciónes Udemy",
        institution: "Atlassian University, 2023"
      }
    ],
    courses: [
      {
        title: "React: De cero a experto",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React Pro: Lleva tus bases al siguiente nivel",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React: Aplicaciones en tiempo real con socket-io",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: De cero a experto",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "REDUX en Angular con NGRX: Desde las bases hasta la práctica",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: Aplicaciones en tiempo real con sockets y rest",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "(Legacy) Angular Avanzado - MEAN",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: De cero a experto creando aplicaciones (Legacy)",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "JavaScript Moderno: Guía para dominar el lenguaje",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "TypeScript: tu completa guía y manual de mano.",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "ReactiveX - RxJs: De cero hasta los detalles",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "PWA - Aplicaciones Web Progresivas: De cero a experto",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Visual Studio Code: Mejora tu velocidad para codificar",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React Native CLI: Aplicaciones para IOS y Android - 2025",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 3
      },
      {
        title: "Node: De cero a experto - 2022",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 61
      },
      {
        title: "Spring Framework & Spring Boot desde cero a experto",
        platform: "Udemy",
        instructor: "Andrés Guzmán",
        status: "in-progress",
        progress: 2
      },
      {
        title: "NodeJS: De cero a experto",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 7
      },
      {
        title: "React: De cero a experto",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 14
      },
      {
        title: "Docker - Guía práctica de uso para desarrolladores",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 14
      },
      {
        title: "Next.js: El framework de React para producción",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 13
      },
      {
        title: "Universidad Spring - Spring Framework y Spring Boot!",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 1
      },
      {
        title: "React PRO: Lleva tus bases al siguiente nivel",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 86
      },
      {
        title: "Universidad Java - Cero a Experto - Actualizado (+155 hrs)",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 1
      },
      {
        title: "Angular y Java EE - Conviértete en Java Full Stack Developer",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 2
      },
      {
        title: "Principios SOLID y Clean Code",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 37
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Lectura técnica fluida, nivel conversacional básico pero en proceso de mejorar este punto" }
    ],
    testimonials: [
      {
        name: "Carlos Mendoza",
        role: "Tech Lead @ Ticblue",
        text: "Pedro es uno de los desarrolladores más autónomos con los que he trabajado. Su capacidad para investigar y resolver problemas complejos en el backend, sumado a su habilidad en React, lo hacen un Full Stack excepcional. Entregó el proyecto Forge mucho antes de lo esperado.",
        avatar: "https://ui-avatars.com/api/?name=Carlos+Mendoza&background=0D8ABC&color=fff"
      },
      {
        name: "Laura Silva",
        role: "Product Manager",
        text: "La atención al detalle de Pedro y su enfoque en la experiencia del usuario cambiaron por completo la plataforma de Teleconsulta. No solo programa, sino que entiende el negocio y siempre propone mejoras proactivamente.",
        avatar: "https://ui-avatars.com/api/?name=Laura+Silva&background=4CAF50&color=fff"
      }
    ],
    articles: [
      {
        title: "Cómo redujimos el time-to-market un 30% usando Serverless en Atlassian Forge",
        date: "Marzo 2025",
        readTime: "5 min",
        url: "#",
        summary: "Análisis de las decisiones de arquitectura que tomamos para eliminar el overhead de infraestructura tradicional y enfocarnos en aportar valor al negocio."
      },
      {
        title: "Estrategias de seguridad: Implementando RLS (Row-Level Security) en Supabase",
        date: "Octubre 2024",
        readTime: "8 min",
        url: "#",
        summary: "Guía técnica sobre cómo blindar los datos a nivel de fila en PostgreSQL para aplicaciones multitenant (SaaS) utilizando Supabase."
      }
    ],
    bestPractices: [
      {
        title: "Clean Code & SOLID",
        description: "Desarrollo de código legible, mantenible y escalable. Fuerte enfoque en la refactorización continua, DRY y separación de responsabilidades.",
        icon: "code"
      },
      {
        title: "Testing Integral",
        description: "Creación de software resiliente mediante pruebas unitarias (Vitest/Jest), de integración (MSW) y E2E (Playwright) para prevenir regresiones.",
        icon: "test"
      },
      {
        title: "Arquitectura Front/Back",
        description: "Diseño de soluciones modulares, uso de arquitecturas Serverless (Atlassian Forge) y principios de Clean Architecture cuando el dominio lo requiere.",
        icon: "architecture"
      },
      {
        title: "CI/CD & Calidad de Código",
        description: "Automatización de despliegues, uso riguroso de linters (ESLint), formateadores (Prettier), y revisiones de código exhaustivas mediante PRs.",
        icon: "cicd"
      }
    ]
  },
  en: {
    name: "Pedro Araya Gálvez",
    role: "Full Stack Developer",
    location: "Quillota, Chile (Remote-ready)",
    contact: {
      email: "piteraraya@gmail.com",
      phone: "+56 9 5764 2162",
      linkedin: "linkedin.com/in/pedro-araya-galvez",
      github: "github.com/peteraraya",
      portfolio: "pedroaraya.vercel.app"
    },
    summary: "Full Stack Developer with over 8 years of end-to-end experience. I have specialized mainly in the JavaScript library React, also in TypeScript, Node.js, and serverless architectures (Atlassian Forge), with additional experience in Angular, NestJS, and WordPress/PHP through external consulting projects and personal project development. Throughout my career, I have focused on delivering measurable value: such as reducing delivery times, resolving critical security vulnerabilities (RBAC, MFA, RLS), and modernizing legacy stacks (PHP, XML, WordPress) into current architectures. Recognized for my technical perseverance, rapid adaptability to new stacks, and dedication to code quality and testing (Vitest, Jest).\n\nWith over 5 years working in distributed teams and asynchronous communication —including simultaneous collaboration with multiple external clients— I have demonstrated true autonomy. Seeking an ideal senior remote role where I can make a measurable impact from the first sprint. I have worked with agile methodologies, Git Flow, Conventional Commits, and continuous deployment, with experience building CI/CD pipelines and multistage Docker containers.",
    availability: "Open to remote opportunities · Immediate availability",
    aboutMe: {
      description: "Hi! I'm a tech enthusiast, self-taught student, and a firm believer in continuous learning (much of my knowledge comes from deep diving into Udemy courses). I'm passionate about staying up-to-date with the latest tech trends, trying out new tools, and exploring how software development evolves.\n\nI am a highly disciplined person, a value that defines me both in front of the screen solving technical problems and in my free time. I'm always looking to combine my energy, perseverance, and curiosity to keep growing and build innovative solutions.",
      highlights: [
        { text: "Self-taught student", icon: "learn" },
        { text: "Passionate about new tech", icon: "tech" },
        { text: "Strength training", icon: "gym" }
      ]
    },
    experience: [
      {
        company: "Ticblue",
        role: "Full Stack Developer",
        period: "August 2020 – June 2026",
        projects: [
          {
            name: "Forge Project — Atlassian Marketplace",
            achievements: [
              "Integrated an omnichannel chat system (Jira Service Management + WhatsApp), improving response times for the support team.",
              "Autonomously diagnosed and resolved 10+ critical edge cases in production related to multimedia attachments.",
              "Experience with the internationalization (i18n) of the app, enabling its expansion to new markets."
            ]
          },
          {
            name: "UVLPIC Project — Circular Economy",
            achievements: [
              "Autonomously developed the complete campaigns and marketplace frontend module, up to production.",
              "Implemented complex validations for forms and data flows, reducing user-generated inconsistencies.",
              "Identified and patched critical security vulnerabilities in the backend, reinforcing platform trust.",
              "Dedicated solely to frontend development, not involved in design, allowing me to focus entirely on code quality and system efficiency."
            ]
          },
          {
            name: "RGSTCS Project — Telehealth",
            achievements: [
              "Designed and implemented an RBAC system for differentiated permissions for doctors, patients, and admins in a platform.",
              "Integrated multi-factor authentication (MFA) and resolved recurring session management issues, improving system stability.",
              "Incorporated functionalities from the frontend (React) to the backend (Express), including validations, data flows, and unit testing with Jest."
            ]
          },
          {
            name: "RedBlu Project — Base of the Telehealth Platform + E-commerce",
            achievements: [
              "Developed RedBlu, the foundational application on which the Telehealth project (RGSTCS) was later built and scaled, laying the initial product architecture.",
              "Designed and implemented the sales site in WordPress with an e-commerce module (WooCommerce) for the commercialization of medical teleconsultations, including service catalog, checkout, and payment flow.",
              "Integrated the sales frontend (WordPress/PHP) with the telehealth application backend, connecting the patient's purchase process with the generation and scheduling of medical consultations."
            ]
          },
          {
            name: "Client Projects (External Consulting) — 2020 – 2025",
            achievements: [
              "Alongside internal Ticblue projects, participated as an external Full Stack developer, focusing on React, Node.js, and NestJS.",
              "Real Seguros: Developed and maintained the Customer Portal using Angular 2+, implementing frontend features (2021).",
              "iMed — XML to Node.js Migration: Developed unit tests and integration with Jest during the modernization of a legacy platform, including data extraction and integration (ETL) processes between systems with Node.js, APIs, and Zod validation (2025-2026).",
              "iMed — Medical Licenses: Migrated from PHP to React and NestJS, focused on forms, validations, and API integration on the frontend.",
              "iMed — Design System: Implemented and evolved the corporate design system through reusable components for multiple applications.",
              "iMed — Bonus Management: Developed an API (express) for medical bonus management and integration with internal services."
            ]
          }
        ]
      },
      {
        company: "Prevsis",
        role: "Frontend Developer",
        period: "2018 – July 2020",
        achievements: [
          "Developed interactive interfaces in React, achieving a measurable reduction in bounce rate.",
          "Integrated REST APIs with a .NET backend, ensuring consistency and real-time data validation.",
          "Optimized performance and cross-browser compatibility, reducing load times across different environments.",
          "Dedicated purely to Frontend development."
        ]
      }
    ],
    projects: [
      {
        name: "Postula Track",
        period: "2026 – present",
        description: "Personal Project",
        link: "https://postulatrack.vercel.app",
        image: "/img/projects/postulatrack.jpg",
        achievements: [
          "Smart platform for job search and management featuring an interactive Kanban board (Drag & Drop), built with Angular 17+ (Signals, Standalone Components) and Tailwind CSS.",
          "Robust backend in NestJS with Prisma and PostgreSQL (pgvector), integrating secure OAuth2 (Google) and JWT authentication.",
          "Implemented recommendation engines and asynchronous scraping for intelligent job offer ingestion and 'Match Score' calculation against user profiles.",
          "Native Artificial Intelligence integration for ATS resume analysis, automatic generation of Cover Letters, and interview simulation (STAR format).",
          "Architecture deployed via multistage Docker containers (Nginx) with complete CI/CD pipelines."
        ]
      },
      {
        name: "Training Management App (EvoLIFT)",
        period: "2026 – present",
        description: "Personal Project",
        link: "https://evolift.vercel.app/login/",
        image: "/img/projects/evolift.png",
        achievements: [
          "Physical training management application (routines, streaks, and workout playback mode), built with React 19, TypeScript, and Vite, consuming a NestJS backend.",
          "Designed architecture under Feature-Sliced Design (modules by domain: auth, dashboard, training), separating server state with TanStack Query from UI state with Zustand (localStorage persistence).",
          "Implemented full authentication: login/registration with real-time validation (React Hook Form + Zod) and OAuth 2.0 with Google and GitHub.",
          "Containerized the application with Docker (multistage build Node + Nginx) and set up a CI/CD pipeline in GitHub Actions that runs linting, building, and testing, and auto-deploys on push to main, following a Git Flow branching model.",
          "Implemented complete internationalization (ES/EN) with react-i18next and accessibility features (dark mode, adjustable font size)."
        ]
      },
      {
        name: "Centinela (Emergencies Map)",
        period: "2026",
        description: "Personal Project",
        link: "https://red-centinela.vercel.app/",
        image: "/img/projects/centinela.jpg",
        achievements: [
          "Web platform to monitor emergencies in Chile in real-time, developed with React 19, TypeScript, MapLibre, and Zustand.",
          "Backend in NestJS acting as an aggregator and scraper from multiple official sources (SENAPRED, Firefighters, CONAF, SEC), unifying data into a single interactive map."
        ]
      },
      {
        name: "Clothing Store",
        period: "2025",
        description: "Personal Project",
        link: "https://tienda-angus.vercel.app/",
        image: "/img/projects/tienda.jpg",
        achievements: [
          "Fullstack e-commerce system with an admin panel, product CRUD, and stock control, built on Supabase architecture (Auth, DB, Storage)."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Vite, Angular 2+, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n (react-i18next)",
      "Backend": "Node.js, NestJS, PHP, WordPress (custom development, WooCommerce), REST APIs, Atlassian Forge, Serverless Architecture, PostgreSQL, Supabase",
      "Authentication & Security": "RBAC, MFA, OAuth 2.0 (Google/GitHub), Row-Level Security (RLS), Zod validation",
      "DevOps & CI/CD": "Docker (multistage builds), GitHub Actions, Git Flow, continuous deployment",
      "E-commerce": "WooCommerce, payment gateways, catalog management and checkout for digital services sales",
      "Testing & Quality": "Jest, Vitest, MSW, Playwright, unit, integration & E2E testing, collaboration with SQA teams",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, React Hook Form, Axios, MapLibre (interactive maps)",
      "Data": "ETL (data extraction, transformation, and integration between systems), PostgreSQL, Zod",
      "Tools": "Git, Jira, Conventional Commits, agile methodologies",
      "Soft Skills": "Technical perseverance, adaptability, autonomy in remote environments, effective asynchronous communication, discipline and organization, focus on code quality and system efficiency"
    },
    education: [
      {
        title: "Programmer Analyst",
        institution: "Professional Institute / Technical Training Center (INACAP), 2014"
      },
      {
        title: "Udemy Certifications",
        institution: "Atlassian University, 2023"
      }
    ],
    courses: [
      {
        title: "React: From Zero to Expert",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React Pro: Take Your Foundations to the Next Level",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React: Real-Time Applications with Socket-io",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: From Zero to Expert",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "REDUX in Angular with NGRX: From Basics to Practice",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: Real-Time Applications with Sockets and REST",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "(Legacy) Advanced Angular - MEAN",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Angular: From Zero to Expert Creating Applications (Legacy)",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Modern JavaScript: A Guide to Mastering the Language",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "TypeScript: Your Complete Guide and Handbook",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "ReactiveX - RxJs: From Zero to Details",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "PWA - Progressive Web Apps: From Zero to Expert",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "GIT+GitHub: A Complete Version Control System from Scratch",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "Visual Studio Code: Improve Your Coding Speed",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "completed",
        progress: 100
      },
      {
        title: "React Native CLI: iOS and Android Applications - 2025",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 3
      },
      {
        title: "Node: From Zero to Expert - 2022",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 61
      },
      {
        title: "Spring Framework & Spring Boot from Zero to Expert",
        platform: "Udemy",
        instructor: "Andrés Guzmán",
        status: "in-progress",
        progress: 2
      },
      {
        title: "NodeJS: From Zero to Expert",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 7
      },
      {
        title: "React: From Zero to Expert",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 14
      },
      {
        title: "Docker - Practical Guide for Developers",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 14
      },
      {
        title: "Next.js: The React Framework for Production",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 13
      },
      {
        title: "Spring University - Spring Framework and Spring Boot!",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 1
      },
      {
        title: "React PRO: Take Your Foundations to the Next Level",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 86
      },
      {
        title: "Java University - Zero to Expert - Updated (+155 hrs)",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 1
      },
      {
        title: "Angular and Java EE - Become a Java Full Stack Developer",
        platform: "Udemy",
        instructor: "Global Mentoring Ing. Ubaldo Acosta",
        status: "in-progress",
        progress: 2
      },
      {
        title: "SOLID Principles and Clean Code",
        platform: "Udemy",
        instructor: "Fernando Herrera",
        status: "in-progress",
        progress: 37
      }
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Fluent technical reading, basic conversational level, currently improving" }
    ],
    testimonials: [
      {
        name: "Carlos Mendoza",
        role: "Tech Lead @ Ticblue",
        text: "Pedro is one of the most autonomous developers I have worked with. His ability to research and solve complex backend problems, coupled with his React skills, make him an exceptional Full Stack. He delivered the Forge project well ahead of schedule.",
        avatar: "https://ui-avatars.com/api/?name=Carlos+Mendoza&background=0D8ABC&color=fff"
      },
      {
        name: "Laura Silva",
        role: "Product Manager",
        text: "Pedro's attention to detail and focus on user experience completely changed the Telehealth platform. He doesn't just code, he understands the business and always proposes proactive improvements.",
        avatar: "https://ui-avatars.com/api/?name=Laura+Silva&background=4CAF50&color=fff"
      }
    ],
    articles: [
      {
        title: "How we reduced time-to-market by 30% using Serverless on Atlassian Forge",
        date: "March 2025",
        readTime: "5 min read",
        url: "#",
        summary: "Analysis of the architectural decisions we made to eliminate traditional infrastructure overhead and focus on delivering business value."
      },
      {
        title: "Security strategies: Implementing RLS (Row-Level Security) in Supabase",
        date: "October 2024",
        readTime: "8 min read",
        url: "#",
        summary: "Technical guide on how to shield data at the row level in PostgreSQL for multitenant applications (SaaS) using Supabase."
      }
    ],
    bestPractices: [
      {
        title: "Clean Code & SOLID",
        description: "Development of readable, maintainable, and scalable code. Strong focus on continuous refactoring, DRY, and separation of concerns.",
        icon: "code"
      },
      {
        title: "Comprehensive Testing",
        description: "Building resilient software through unit tests (Vitest/Jest), integration (MSW), and E2E (Playwright) to prevent regressions.",
        icon: "test"
      },
      {
        title: "Front/Back Architecture",
        description: "Design of modular solutions, use of Serverless architectures (Atlassian Forge), and Clean Architecture principles when domain requires it.",
        icon: "architecture"
      },
      {
        title: "CI/CD & Code Quality",
        description: "Deployment automation, rigorous use of linters (ESLint), formatters (Prettier), and thorough code reviews through PRs.",
        icon: "cicd"
      }
    ]
  }
};
