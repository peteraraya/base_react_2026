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
    summary: "Full Stack Developer con más de 8 años de experiencia end-to-end, especializado en React, TypeScript, Node.js y arquitecturas serverless (Atlassian Forge), con experiencia adicional en Angular y NestJS a través de proyectos de consultoría externa. Historial consistente entregando valor medible: reducción de tiempos de entrega, resolución de vulnerabilidades críticas de seguridad (RBAC, MFA, RLS) y modernización de stacks legacy (PHP, XML) hacia arquitecturas actuales. Reconocido por mi perseverancia técnica, capacidad de adaptación rápida a nuevos stacks y dedicación a la calidad de código y testing (Vitest, Jest, Playwright, MSW).\n\nCon más de 5 años trabajando en equipos distribuidos y comunicación asíncrona —incluyendo colaboración simultánea con múltiples clientes externos— he demostrado autonomía real: lideré procesos completos sin supervisión directa, cumpliendo plazos y estándares de calidad de forma sostenida. Busco un rol remoto senior donde aportar impacto medible desde el primer sprint.",
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
            name: "Proyectos para Clientes (Consultoría Externa) - 2020 – 2025",
            achievements: [
              "En paralelo a los proyectos internos de Ticblue, participé como desarrollador externo Full Stack, con foco en React, Node.js y NestJS.",
              "Real Seguros: desarrollo y mantenimiento del Portal de Clientes en Angular 2+, implementando funcionalidades frontend y backend (2021).",
              "iMed - Migración XML a Node.js: desarrollo de pruebas unitarias e integración con Jest durante la modernización de una plataforma legacy.",
              "iMed - Licencias Médicas: migración desde PHP hacia React y NestJS, enfocado en formularios, validaciones e integración con APIs en frontend.",
              "iMed - Design System: implementación y evolución del sistema de diseño corporativo mediante componentes reutilizables para múltiples aplicaciones.",
              "iMed - Gestión de Bonos: desarrollo de una API para la gestión de bonos médicos e integración con servicios internos."
            ]
          }
        ]
      },
      {
        company: "Empresa anterior",
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
        name: "Gym Tracker App",
        period: "2024",
        description: "Proyecto propio",
        link: "https://gym-tracker-eta-amber.vercel.app/",
        achievements: [
          "Aplicación fullstack con Next.js 15, React 19, TypeScript y Supabase: autenticación, dashboard de métricas y RLS para aislamiento seguro de datos por usuario."
        ]
      },
      {
        name: "Tienda de Confecciones",
        period: "2023",
        description: "Proyecto propio",
        achievements: [
          "Sistema e-commerce fullstack con panel de administración, CRUD de productos y control de stock, sobre arquitectura Supabase (Auth, DB, Storage)."
        ]
      },
      {
        name: "MVP Ecosistema Atlassian",
        period: "2024 – Presente",
        description: "Proyecto propio",
        achievements: [
          "Diseño y desarrollo continuo de un MVP SaaS para el ecosistema Atlassian, explorando oportunidades en el Marketplace."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Angular 2+, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n",
      "Backend": "Node.js, NestJS, PHP, REST APIs, Atlassian Forge, Arquitectura Serverless, PostgreSQL, Supabase",
      "Seguridad": "RBAC, MFA, Row-Level Security (RLS), validación con Zod",
      "Testing & Calidad": "Jest, Vitest, MSW, Playwright, testing unitario, integración y E2E, colaboración con equipos SQA",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, Axios",
      "Herramientas": "Git, Jira, Conventional Commits, CI/CD, metodologías ágiles, Design Systems",
      "Blandas": "perseverancia técnica, adaptabilidad, autonomía en remoto, comunicación asíncrona efectiva"
    },
    education: [
      {
        title: "Analista Programador",
        institution: "Instituto Profesional / Centro de Formación Técnica (INACAP), 2014",
        status: "Abierto a oportunidades remotas · Disponibilidad inmediata"
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Lectura técnica fluida, nivel básico" }
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
    summary: "Full Stack Developer with over 8 years of end-to-end experience, specializing in React, TypeScript, Node.js, and serverless architectures (Atlassian Forge), with additional experience in Angular and NestJS through external consulting projects. Consistent track record of delivering measurable value: reducing delivery times, resolving critical security vulnerabilities (RBAC, MFA, RLS), and modernizing legacy stacks (PHP, XML) into current architectures. Recognized for my technical perseverance, quick adaptability to new stacks, and dedication to code quality and testing (Vitest, Jest, Playwright, MSW).\n\nWith over 5 years working in distributed teams and asynchronous communication —including simultaneous collaboration with multiple external clients— I have demonstrated true autonomy: I independently led complete processes without direct supervision, consistently meeting deadlines and quality standards. Seeking a senior remote role where I can make a measurable impact from the first sprint.",
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
            name: "Client Projects (External Consulting) - 2020 – 2025",
            achievements: [
              "Alongside internal Ticblue projects, participated as an external Full Stack developer, focusing on React, Node.js, and NestJS.",
              "Real Seguros: Development and maintenance of the Customer Portal in Angular 2+, implementing frontend and backend functionalities (2021).",
              "iMed - XML to Node.js Migration: Developed unit and integration tests with Jest during the modernization of a legacy platform.",
              "iMed - Medical Licenses: Migration from PHP to React and NestJS, focused on forms, validations, and API integrations in the frontend.",
              "iMed - Design System: Implementation and evolution of the corporate design system using reusable components for multiple applications.",
              "iMed - Bonus Management: Developed an API for managing medical bonuses and integrating with internal services."
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
        name: "Gym Tracker App",
        period: "2024",
        description: "Personal Project",
        link: "https://gym-tracker-eta-amber.vercel.app/",
        achievements: [
          "Fullstack application with Next.js 15, React 19, TypeScript, and Supabase: authentication, metrics dashboard, and RLS for secure data isolation per user."
        ]
      },
      {
        name: "Clothing Store",
        period: "2023",
        description: "Personal Project",
        achievements: [
          "Fullstack e-commerce system with an admin panel, product CRUD, and stock control, built on Supabase architecture (Auth, DB, Storage)."
        ]
      },
      {
        name: "Atlassian Ecosystem MVP",
        period: "2024 – Present",
        description: "Personal Project",
        achievements: [
          "Continuous design and development of a SaaS MVP for the Atlassian ecosystem, exploring opportunities in the Marketplace."
        ]
      }
    ],
    skills: {
      "Frontend": "React 19, Next.js 15, Angular 2+, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n",
      "Backend": "Node.js, NestJS, PHP, REST APIs, Atlassian Forge, Serverless Architecture, PostgreSQL, Supabase",
      "Security": "RBAC, MFA, Row-Level Security (RLS), Zod validation",
      "Testing & Quality": "Jest, Vitest, MSW, Playwright, Unit, Integration & E2E Testing, Collaboration with SQA teams",
      "State / Data": "TanStack Query v5, TanStack Router, Zustand v5, Axios",
      "Tools": "Git, Jira, Conventional Commits, CI/CD, Agile methodologies, Design Systems",
      "Soft Skills": "Technical perseverance, adaptability, autonomy in remote environments, effective asynchronous communication"
    },
    education: [
      {
        title: "Programmer Analyst",
        institution: "Professional Institute / Technical Training Center (INACAP), 2014",
        status: "Open to remote opportunities · Immediate availability"
      }
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Fluent technical reading, basic level" }
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
