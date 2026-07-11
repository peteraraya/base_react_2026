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
    summary: "Full Stack Developer con más de 8 años de experiencia end-to-end en el ciclo de vida del software, especializado en React, TypeScript, Node.js y arquitecturas serverless (Atlassian Forge). Historial consistente entregando valor medible: reducción de tiempos de entrega, resolución de vulnerabilidades críticas de seguridad (RBAC, MFA, RLS) y modernización de stacks legacy hacia arquitecturas actuales. Reconocido por mi perseverancia para resolver problemas técnicos complejos hasta el final, mi capacidad de adaptación rápida a nuevos stacks y contextos de negocio, y mi dedicación a la calidad de código y las buenas prácticas de testing (Vitest, Playwright, MSW).\n\nCon más de 5 años colaborando en equipos distribuidos y comunicación asíncrona, he demostrado autonomía real trabajando remoto: lideré de forma independiente procesos completos (internacionalización, módulos end-to-end, migraciones de seguridad) sin supervisión directa, cumpliendo plazos y estándares de calidad de forma sostenida. Busco un rol remoto senior donde aportar impacto medible desde el primer sprint.",
    experience: [
      {
        company: "Ticblue",
        role: "Full Stack Developer",
        period: "Agosto 2020 – Junio 2026",
        projects: [
          {
            name: "Proyecto Forge - Atlassian Marketplace",
            achievements: [
              "Reduje el time-to-market en aproximadamente un 30% mediante el diseño e implementación de una arquitectura serverless en Atlassian Forge, eliminando overhead de infraestructura tradicional y acelerando los ciclos de entrega.",
              "Integré un sistema de chat omnicanal (Jira Service Management + WhatsApp), mejorando significativamente los tiempos de respuesta y la eficiencia operativa del equipo de soporte.",
              "Diagnostiqué y resolví de forma autónoma más de 10 edge cases críticos en producción relacionados con el manejo de adjuntos multimedia, incrementando la estabilidad y confiabilidad del sistema.",
              "Lideré de forma independiente el proceso de internacionalización (i18n) de la aplicación, habilitando su expansión a nuevos mercados internacionales sin necesidad de supervisión directa."
            ]
          },
          {
            name: "Proyecto UVLPIC - Industria Circular",
            achievements: [
              "Desarrollé de forma autónoma el módulo completo de campañas y marketplace, abarcando frontend y backend end-to-end, desde el diseño técnico hasta el despliegue en producción.",
              "Implementé validaciones complejas en formularios y flujos de datos, reduciendo significativamente las inconsistencias y errores generados por el usuario.",
              "Identifiqué y corregí vulnerabilidades críticas de seguridad en el backend, previniendo posibles brechas de datos y reforzando la confianza de la plataforma."
            ]
          },
          {
            name: "Proyecto RGSTCS - Teleconsulta (Salud)",
            achievements: [
              "Diseñé e implementé un sistema de control de accesos basado en roles (RBAC) para gestionar permisos diferenciados de médicos, pacientes y administradores en una plataforma de salud crítica con más de 33.000 consultas y 11.000 pacientes atendidos.",
              "Integré autenticación multifactor (MFA), elevando sustancialmente el nivel de seguridad de la plataforma y el cumplimiento de buenas prácticas en el sector salud.",
              "Diagnostiqué y resolví problemas recurrentes de gestión de sesión, mejorando la estabilidad del sistema y la experiencia general del usuario."
            ]
          },
          {
            name: "Proyectos para Clientes (Consultoría Externa) - 2020-2025",
            achievements: [
              "En paralelo a los proyectos internos de Ticblue participé como desarrollador externo, desempeñándome principalmente como Full Stack Developer con foco en React, Node.js y NestJS.",
              "Reale Seguros: desarrollo y mantenimiento del Portal de Clientes, implementando funcionalidades frontend y backend.",
              "IMED - Migración XML a Node.js: desarrollo de pruebas unitarias e integración utilizando Jest durante la modernización de una plataforma legacy.",
              "IMED - Licencias Médicas: migración desde PFP hacia React y NestJS, desarrollando principalmente formularios, validaciones e integración con APIs en el frontend.",
              "IMED - Design System: implementación y evolución del sistema de diseño corporativo mediante componentes reutilizables utilizados por múltiples aplicaciones.",
              "IMED - Gestión de Bonos: desarrollo de una API para la gestión de bonos médicos e integración con servicios internos."
            ]
          }
        ]
      },
      {
        company: "Empresa anterior",
        role: "Desarrollador Frontend",
        period: "2018 – Julio 2020",
        achievements: [
          "Desarrollé interfaces interactivas en React, mejorando la experiencia de usuario y logrando una reducción medible en la tasa de abandono.",
          "Integré APIs REST con backend .NET, asegurando consistencia, validación de datos en tiempo real y robustez en la comunicación entre sistemas.",
          "Optimicé el rendimiento y la compatibilidad cross-browser de las aplicaciones, reduciendo tiempos de carga y errores en distintos entornos."
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
          "Construí una aplicación fullstack con Next.js 15, React 19, TypeScript y Supabase, incluyendo autenticación, dashboard de métricas y análisis de progreso del usuario.",
          "Implementé Row-Level Security (RLS) en Supabase para garantizar el aislamiento seguro de datos por usuario.",
          "Optimicé el rendimiento mediante caching estratégico y lazy loading, mejorando los Core Web Vitals de la aplicación."
        ]
      },
      {
        name: "Tienda de Confecciones",
        period: "2023",
        description: "Proyecto propio",
        achievements: [
          "Desarrollé un sistema e-commerce fullstack con panel de administración, catálogo público y CRUD de productos con variantes de talla y color, junto con control de stock en tiempo real.",
          "Diseñé una arquitectura escalable con Supabase (Auth, DB, Storage), preparada para integración directa con pasarelas de pago."
        ]
      },
      {
        name: "MVP Ecosistema Atlassian",
        period: "2024 – Presente",
        description: "Proyecto propio",
        achievements: [
          "Diseño y desarrollo continuo de un MVP de solución SaaS orientado al ecosistema Atlassian, explorando activamente oportunidades de negocio dentro del Marketplace, demostrando iniciativa y visión de producto más allá del rol técnico."
        ]
      }
    ],
    skills: {
      "Desarrollo Frontend": "React 19, Next.js 15, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n",
      "Desarrollo Backend": "Node.js, PHP, REST APIs, Atlassian Forge, Arquitectura Serverless, PostgreSQL, Supabase",
      "Seguridad": "RBAC, MFA, Row-Level Security (RLS), validación con Zod",
      "Testing & Calidad": "Vitest, MSW, Playwright, testing unitario y E2E, colaboración con equipos SQA",
      "State / Data Management": "TanStack Query v5, TanStack Router, Zustand v5, Axios",
      "Herramientas & Prácticas": "Git, Jira, Conventional Commits, CI/CD, metodologías ágiles",
      "Competencias Blandas": "Perseverancia técnica, adaptabilidad a nuevos contextos, dedicación a la calidad, autonomía en entornos remotos, comunicación asíncrona efectiva"
    },
    education: [
      {
        title: "Analista Programador",
        institution: "Instituto Profesional / Centro de Formación Técnica (INACAP), 2014",
        status: "Abierto a oportunidades remotas · Disponibilidad inmediata"
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
    summary: "Full Stack Developer with over 8 years of end-to-end experience in the software lifecycle, specializing in React, TypeScript, Node.js, and serverless architectures (Atlassian Forge). Consistent track record of delivering measurable value: reducing delivery times, resolving critical security vulnerabilities (RBAC, MFA, RLS), and modernizing legacy stacks into current architectures. Recognized for my perseverance in solving complex technical problems to the end, quick adaptability to new stacks and business contexts, and dedication to code quality and testing best practices (Vitest, Playwright, MSW).\n\nWith over 5 years of collaborating in distributed teams using asynchronous communication, I have demonstrated true autonomy working remotely: I independently led complete processes (internationalization, end-to-end modules, security migrations) without direct supervision, consistently meeting deadlines and quality standards. Seeking a senior remote role where I can make a measurable impact from the first sprint.",
    experience: [
      {
        company: "Ticblue",
        role: "Full Stack Developer",
        period: "August 2020 – June 2026",
        projects: [
          {
            name: "Forge Project - Atlassian Marketplace",
            achievements: [
              "Reduced time-to-market by ~30% by designing and implementing a serverless architecture on Atlassian Forge, eliminating traditional infrastructure overhead and accelerating delivery cycles.",
              "Integrated an omnichannel chat system (Jira Service Management + WhatsApp), significantly improving response times and operational efficiency for the support team.",
              "Autonomously diagnosed and resolved 10+ critical edge cases in production related to multimedia attachment handling, increasing system stability and reliability.",
              "Independently led the internationalization (i18n) process of the app, enabling its expansion to new global markets without the need for direct supervision."
            ]
          },
          {
            name: "UVLPIC Project - Circular Economy",
            achievements: [
              "Autonomously developed the complete campaigns and marketplace module, covering end-to-end frontend and backend from technical design to production deployment.",
              "Implemented complex validations for forms and data flows, significantly reducing inconsistencies and user-generated errors.",
              "Identified and patched critical security vulnerabilities in the backend, preventing potential data breaches and reinforcing platform trust."
            ]
          },
          {
            name: "RGSTCS Project - Telehealth",
            achievements: [
              "Designed and implemented a Role-Based Access Control (RBAC) system to manage differentiated permissions for doctors, patients, and admins in a critical health platform serving over 33,000 consultations and 11,000 patients.",
              "Integrated Multi-Factor Authentication (MFA), substantially elevating the platform's security level and compliance with health sector best practices.",
              "Diagnosed and fixed recurring session management issues, improving system stability and overall user experience."
            ]
          },
          {
            name: "Client Projects (External Consulting) - 2020-2025",
            achievements: [
              "Alongside internal Ticblue projects, I participated as an external developer, primarily working as a Full Stack Developer focusing on React, Node.js, and NestJS.",
              "Reale Seguros: Developed and maintained the Customer Portal, implementing frontend and backend functionalities.",
              "IMED - XML to Node.js Migration: Developed unit and integration tests using Jest during the modernization of a legacy platform.",
              "IMED - Medical Licenses: Migrated from PFP to React and NestJS, focusing on forms, validations, and API integrations in the frontend.",
              "IMED - Design System: Implemented and evolved the corporate design system through reusable components used by multiple applications.",
              "IMED - Bonus Management: Developed an API for managing medical bonuses and integrating with internal services."
            ]
          }
        ]
      },
      {
        company: "Previous Company",
        role: "Frontend Developer",
        period: "2018 – July 2020",
        achievements: [
          "Developed interactive interfaces in React, improving user experience and achieving a measurable reduction in bounce rate.",
          "Integrated REST APIs with a .NET backend, ensuring consistency, real-time data validation, and robust cross-system communication.",
          "Optimized application performance and cross-browser compatibility, reducing load times and errors across different environments."
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
          "Built a fullstack application with Next.js 15, React 19, TypeScript, and Supabase, including authentication, a metrics dashboard, and user progress analysis.",
          "Implemented Row-Level Security (RLS) in Supabase to ensure secure data isolation per user.",
          "Optimized performance using strategic caching and lazy loading, improving the app's Core Web Vitals."
        ]
      },
      {
        name: "Clothing Store",
        period: "2023",
        description: "Personal Project",
        achievements: [
          "Developed a fullstack e-commerce system with an admin panel, public catalog, and product CRUD with size and color variants, alongside real-time stock control.",
          "Designed a scalable architecture using Supabase (Auth, DB, Storage), ready for direct integration with payment gateways."
        ]
      },
      {
        name: "Atlassian Ecosystem MVP",
        period: "2024 – Present",
        description: "Personal Project",
        achievements: [
          "Continuously designing and developing a SaaS MVP tailored for the Atlassian ecosystem, actively exploring business opportunities within the Marketplace, demonstrating initiative and product vision beyond the technical role."
        ]
      }
    ],
    skills: {
      "Frontend Development": "React 19, Next.js 15, TypeScript (strict mode), Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Highcharts, i18n",
      "Backend Development": "Node.js, PHP, REST APIs, Atlassian Forge, Serverless Architecture, PostgreSQL, Supabase",
      "Security": "RBAC, MFA, Row-Level Security (RLS), Zod validation",
      "Testing & Quality": "Vitest, MSW, Playwright, Unit & E2E Testing, Collaboration with SQA teams",
      "State / Data Management": "TanStack Query v5, TanStack Router, Zustand v5, Axios",
      "Tools & Practices": "Git, Jira, Conventional Commits, CI/CD, Agile methodologies",
      "Soft Skills": "Technical perseverance, adaptability to new contexts, dedication to quality, autonomy in remote environments, effective asynchronous communication"
    },
    education: [
      {
        title: "Programmer Analyst",
        institution: "Professional Institute / Technical Training Center (INACAP), 2014",
        status: "Open to remote opportunities · Immediate availability"
      }
    ]
  }
};
