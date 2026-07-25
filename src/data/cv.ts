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
      github: "github.com/peteraraya"
    },
    summary: "Full Stack Developer con más de 8 años de experiencia end-to-end, especializado en React, TypeScript, Node.js y arquitecturas serverless (Atlassian Forge), con experiencia adicional en Angular, NestJS y WordPress/PHP a través de proyectos de consultoría externa y desarrollo de productos propios. Historial consistente entregando valor medible: reducción de tiempos de entrega, resolución de vulnerabilidades críticas de seguridad (RBAC, MFA, RLS) y modernización de stacks legacy (PHP, XML, WordPress) hacia arquitecturas actuales. Reconocido por mi perseverancia técnica, capacidad de adaptación rápida a nuevos stacks y dedicación a la calidad de código y testing (Vitest, Jest, Playwright, MSW).\n\nCon más de 5 años trabajando en equipos distribuidos y comunicación asíncrona —incluyendo colaboración simultánea con múltiples clientes externos— he demostrado autonomía real: lideré procesos completos sin supervisión directa, cumpliendo plazos y estándares de calidad de forma sostenida. Busco un rol remoto senior donde aportar impacto medible desde el primer sprint.",
    availability: "Disponibilidad inmediata",
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
            name: "Proyecto Forge - Atlassian Marketplace",
            achievements: [
              "Reduje el time-to-market en ~30% mediante el diseño e implementación de una arquitectura serverless en Atlassian Forge, eliminando overhead de infraestructura tradicional.",
              "Integré un sistema de chat omnicanal (Jira Service Management + WhatsApp), mejorando los tiempos de respuesta del equipo de soporte.",
              "Diagnostiqué y resolví de forma autónoma más de 10 edge cases críticos en producción relacionados con adjuntos multimedia.",
              "Lideré de forma independiente la internacionalización (i18n) de la aplicación, habilitando su expansión a nuevos mercados."
            ]
          },
          {
            name: "Proyecto UVLPIC - Industria Circular",
            achievements: [
              "Desarrollé de forma autónoma el módulo completo de campañas y marketplace, frontend y backend end-to-end, hasta producción.",
              "Implementé validaciones complejas en formularios y flujos de datos, reduciendo inconsistencias generadas por el usuario.",
              "Identifiqué y corregí vulnerabilidades críticas de seguridad en el backend, reforzando la confianza de la plataforma."
            ]
          },
          {
            name: "Proyecto RGSTCS - Teleconsulta (Salud)",
            achievements: [
              "Diseñé e implementé un sistema RBAC para permisos diferenciados de médicos, pacientes y administradores en una plataforma con más de 33.000 consultas y 11.000 pacientes atendidos.",
              "Integré autenticación multifactor (MFA) y resolví problemas recurrentes de gestión de sesión, mejorando la estabilidad del sistema."
            ]
          },
          {
            name: "Proyecto RedBlu - Base de la Plataforma de Teleconsulta + E-commerce",
            achievements: [
              "Desarrollé RedBlu, la aplicación base sobre la que posteriormente se construyó y escaló el proyecto de Teleconsulta (RGSTCS), sentando la arquitectura inicial del producto.",
              "Diseñé e implementé el sitio de venta en WordPress con módulo de e-commerce (WooCommerce) para la comercialización de teleconsultas médicas, incluyendo catálogo de servicios, checkout y flujo de pago.",
              "Implementé un patrón API Gateway para orquestar de forma segura la comunicación entre el frontend de venta (WordPress/PHP) y los microservicios backend de telemedicina.",
              "Senté las bases técnicas (autenticación, estructura de datos y flujo médico-paciente) y gestioné los despliegues en entornos cloud como Heroku."
            ]
          },
          {
            name: "Proyectos para Clientes (Consultoría Externa) - 2020 – 2025",
            achievements: [
              "En paralelo a los proyectos en Ticblue, trabajé como desarrollador externo Full Stack enfocado en corporativos (Salud y Seguros).",
              "Real Seguros: desarrollo y mantenimiento del Portal de Clientes usando Angular 2+ y contenedores Docker, implementando flujos críticos.",
              "iMed - Licencias Médicas (LME): Migración de plataformas legacy hacia React y TypeScript, integrando PrimeReact, TailwindCSS y manipulación avanzada de PDFs (react-pdfobject).",
              "iMed - Design System: Arquitectura y desarrollo de la librería de componentes corporativa (@imed_npm/design-system) consumida por múltiples equipos internos.",
              "iMed - APIs & Testing: Desarrollo en Node.js/NestJS integrando bases de datos, con fuerte enfoque en calidad mediante pruebas con Jest.",
              "Desarrollo de integraciones nativas para el ecosistema Jira usando Atlassian Forge UI Kit (ej: 'issue-history-exporter')."
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
          "Optimicé el rendimiento y la compatibilidad cross-browser, reduciendo tiempos de carga en distintos entornos."
        ]
      }
    ],
    projects: [
      {
        name: "Centinela (Mapa de Emergencias)",
        period: "2026",
        description: "Proyecto propio",
        link: "https://red-centinela.vercel.app/",
        image: "/img/projects/centinela.jpg",
        achievements: [
          "Plataforma web para monitorear emergencias en Chile en tiempo real usando React 19, TypeScript, MapLibre y Zustand.",
          "Backend en NestJS actuando como agregador y scraper de múltiples fuentes (SENAPRED, Bomberos, CONAF, SEC) unificando los datos."
        ]
      },
      {
        name: "Gym Tracker App",
        period: "2025 - presente",
        description: "Proyecto propio",
        link: "https://gym-tracker-eta-amber.vercel.app/",
        image: "/img/projects/gym-tracker.jpg",
        achievements: [
          "Aplicación fullstack con Next.js 15, React 19, TypeScript y Supabase: autenticación, dashboard de métricas y RLS para aislamiento seguro de datos por usuario."
        ]
      },
      {
        name: "Tienda de Confecciones",
        period: "2025",
        description: "Proyecto propio",
        image: "/img/projects/tienda.jpg",
        achievements: [
          "Sistema e-commerce fullstack con panel de administración, CRUD de productos y control de stock, sobre arquitectura Supabase (Auth, DB, Storage)."
        ]
      },
      {
        name: "MVP Ecosistema Atlassian",
        period: "2025",
        description: "Proyecto propio",
        image: "/img/projects/atlassian.jpg",
        achievements: [
          "Diseño y desarrollo continuo de un MVP SaaS para el ecosistema Atlassian, explorando oportunidades en el Marketplace."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Angular 2+, TypeScript (strict mode), Tailwind CSS, Material UI, JavaScript ES6+, Leaflet (GIS), Formik, i18n",
      "Backend": "Node.js, Express, NestJS, Java (Spring Boot), PHP, REST APIs, WebSockets (Socket.io), Atlassian Forge, PostgreSQL, MongoDB",
      "Seguridad": "RBAC, MFA, Row-Level Security (RLS), validación con Zod",
      "E-commerce": "WooCommerce, pasarelas de pago, gestión de catálogo y checkout para venta de servicios digitales",
      "Testing & Calidad": "Jest, Vitest, MSW, Playwright, testing unitario, integración y E2E, colaboración con equipos SQA",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, Axios, MapLibre (mapas interactivos)",
      "Herramientas": "Git, Jira, Conventional Commits, CI/CD, metodologías ágiles, Design Systems",
      "Blandas": "perseverancia técnica, adaptabilidad, autonomía en remoto, comunicación asíncrona efectiva"
    },
    education: [
      {
        title: "Analista Programador",
        institution: "Instituto Profesional / Centro de Formación Técnica (INACAP), 2014"
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
      { name: "Inglés", level: "Lectura técnica fluida, nivel básico" }
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
      github: "github.com/peteraraya"
    },
    summary: "Full Stack Developer with over 8 years of end-to-end experience, specializing in React, TypeScript, Node.js, and serverless architectures (Atlassian Forge), with additional experience in Angular, NestJS, and WordPress/PHP through external consulting projects and development of personal products. Consistent track record of delivering measurable value: reducing delivery times, resolving critical security vulnerabilities (RBAC, MFA, RLS), and modernizing legacy stacks (PHP, XML, WordPress) into current architectures. Recognized for my technical perseverance, quick adaptability to new stacks, and dedication to code quality and testing (Vitest, Jest, Playwright, MSW).\n\nWith over 5 years working in distributed teams and asynchronous communication —including simultaneous collaboration with multiple external clients— I have demonstrated true autonomy: I independently led complete processes without direct supervision, consistently meeting deadlines and quality standards. Seeking a senior remote role where I can make a measurable impact from the first sprint.",
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
            name: "Forge Project - Atlassian Marketplace",
            achievements: [
              "Reduced time-to-market by ~30% by designing and implementing a serverless architecture on Atlassian Forge, eliminating traditional infrastructure overhead.",
              "Integrated an omnichannel chat system (Jira Service Management + WhatsApp), improving response times for the support team.",
              "Autonomously diagnosed and resolved 10+ critical edge cases in production related to multimedia attachments.",
              "Independently led the internationalization (i18n) of the app, enabling its expansion to new global markets."
            ]
          },
          {
            name: "UVLPIC Project - Circular Economy",
            achievements: [
              "Autonomously developed the complete campaigns and marketplace module, end-to-end frontend and backend, up to production.",
              "Implemented complex validations for forms and data flows, reducing user-generated inconsistencies.",
              "Identified and patched critical security vulnerabilities in the backend, reinforcing platform trust."
            ]
          },
          {
            name: "RGSTCS Project - Telehealth",
            achievements: [
              "Designed and implemented an RBAC system for differentiated permissions for doctors, patients, and admins in a platform with over 33,000 consultations and 11,000 patients.",
              "Integrated multi-factor authentication (MFA) and resolved recurring session management issues, improving system stability."
            ]
          },
          {
            name: "RedBlu Project - Base of the Telehealth Platform + E-commerce",
            achievements: [
              "Developed RedBlu, the foundational application on which the Telehealth project (RGSTCS) was later built and scaled, laying the initial product architecture.",
              "Designed and implemented the sales site in WordPress with an e-commerce module (WooCommerce) for the commercialization of medical teleconsultations, including service catalog, checkout, and payment flow.",
              "Implemented an API Gateway pattern to securely orchestrate communication between the sales frontend (WordPress/PHP) and the telemedicine backend microservices.",
              "Laid the technical foundations (authentication, data structure, and doctor-patient flow) and managed deployments to cloud environments like Heroku."
            ]
          },
          {
            name: "Client Projects (External Consulting) - 2020 – 2025",
            achievements: [
              "Alongside internal Ticblue projects, worked as an external Full Stack developer focused on Enterprise clients (Healthcare and Insurance).",
              "Real Seguros: Developed and maintained the Customer Portal using Angular 2+ and Docker containers, implementing critical flows.",
              "iMed - Medical Licenses (LME): Migrated legacy platforms to React and TypeScript, integrating PrimeReact, TailwindCSS, and advanced PDF manipulation (react-pdfobject).",
              "iMed - Design System: Architected and developed the corporate component library (@imed_npm/design-system) consumed by multiple internal teams.",
              "iMed - APIs & Testing: Node.js/NestJS development integrating databases, with a strong focus on quality through Jest testing.",
              "Developed native integrations for the Jira ecosystem using Atlassian Forge UI Kit (e.g., 'issue-history-exporter')."
            ]
          }
        ]
      },
      {
        company: "Previous Company",
        role: "Frontend Developer",
        period: "2018 – July 2020",
        achievements: [
          "Developed interactive interfaces in React, achieving a measurable reduction in bounce rate.",
          "Integrated REST APIs with a .NET backend, ensuring consistency and real-time data validation.",
          "Optimized performance and cross-browser compatibility, reducing load times across different environments."
        ]
      }
    ],
    projects: [
      {
        name: "Centinela (Emergencies Map)",
        period: "2026",
        description: "Personal Project",
        link: "https://red-centinela.vercel.app/",
        image: "/img/projects/centinela.jpg",
        achievements: [
          "Web platform to monitor emergencies in Chile in real-time using React 19, TypeScript, MapLibre, and Zustand.",
          "Backend in NestJS acting as an aggregator and scraper from multiple sources (SENAPRED, Firefighters, CONAF, SEC) unifying data."
        ]
      },
      {
        name: "Gym Tracker App",
        period: "2025 - present",
        description: "Personal Project",
        link: "https://gym-tracker-eta-amber.vercel.app/",
        image: "/img/projects/gym-tracker.jpg",
        achievements: [
          "Fullstack application with Next.js 15, React 19, TypeScript, and Supabase: authentication, metrics dashboard, and RLS for secure data isolation per user."
        ]
      },
      {
        name: "Clothing Store",
        period: "2025",
        description: "Personal Project",
        image: "/img/projects/tienda.jpg",
        achievements: [
          "Fullstack e-commerce system with an admin panel, product CRUD, and stock control, built on Supabase architecture (Auth, DB, Storage)."
        ]
      },
      {
        name: "Atlassian Ecosystem MVP",
        period: "2025",
        description: "Personal Project",
        image: "/img/projects/atlassian.jpg",
        achievements: [
          "Continuous design and development of a SaaS MVP for the Atlassian ecosystem, exploring opportunities in the Marketplace."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Angular 2+, TypeScript, Tailwind CSS, Material UI, PrimeReact, JavaScript ES6+, Leaflet (GIS), Formik, i18n",
      "Backend": "Node.js, Express, NestJS, Java (Spring Boot), PHP, API Gateway, REST APIs, WebSockets (Socket.io), Atlassian Forge, PostgreSQL, MongoDB",
      "Security": "RBAC, MFA, Row-Level Security (RLS), Zod validation",
      "E-commerce": "WooCommerce, payment gateways, catalog management and checkout for digital services sales",
      "Testing & Quality": "Jest, Vitest, MSW, Playwright, Unit, Integration & E2E Testing, Collaboration with SQA teams",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, Axios, MapLibre (interactive maps)",
      "Tools": "Git, Jira, Conventional Commits, CI/CD, Agile methodologies, Design Systems",
      "Soft Skills": "Technical perseverance, adaptability, autonomy in remote environments, effective asynchronous communication"
    },
    education: [
      {
        title: "Programmer Analyst",
        institution: "Professional Institute / Technical Training Center (INACAP), 2014"
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
      { name: "English", level: "Fluent technical reading, basic level" }
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
