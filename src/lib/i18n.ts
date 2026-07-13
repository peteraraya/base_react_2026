import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "header.portfolio": "Portfolio",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.projects": "Projects",
      "footer.rights": "Portfolio. All rights reserved.",
      // HomePage
      "home.title": "Welcome to Your Portfolio",
      "home.subtitle": "This is a clean, frontend-only React template to start building your portfolio.",
      // AboutPage
      "about.title": "About Me",
      "about.description": "I'm a frontend developer building awesome user interfaces.",
      // ContactPage
      "contact.title": "Let's Connect",
      "contact.description": "Feel free to reach out for collaborations or just a friendly hello!",
      // ProjectsPage
      "projects.title": "Projects Gallery",
      "projects.description": "Explore my repositories in real time connected with GitHub API. Filter by tech or search a specific project.",
      "projects.search": "Search projects...",
      "projects.sort": "Sort by:",
      "projects.sortUpdated": "Recently updated",
      "projects.sortStars": "Stars",
      "projects.sortName": "Name",
      "projects.all": "All",
      "projects.noResults": "No projects match the search criteria."
    }
  },
  es: {
    translation: {
      "header.portfolio": "Portafolio",
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.contact": "Contacto",
      "nav.projects": "Proyectos",
      "footer.rights": "Portafolio. Todos los derechos reservados.",
      // HomePage
      "home.title": "Bienvenido a tu Portafolio",
      "home.subtitle": "Esta es una plantilla de React limpia, solo frontend, para comenzar a construir tu portafolio.",
      // AboutPage
      "about.title": "Acerca de mí",
      "about.description": "Soy un desarrollador frontend construyendo interfaces de usuario increíbles.",
      // ContactPage
      "contact.title": "Hablemos",
      "contact.description": "¡No dudes en escribirme para colaboraciones, oportunidades laborales o simplemente para saludar!",
      // ProjectsPage
      "projects.title": "Galería de Proyectos",
      "projects.description": "Explora mis repositorios en tiempo real conectados con la API de GitHub. Filtra por tecnología o busca un proyecto específico.",
      "projects.search": "Buscar proyectos...",
      "projects.sort": "Ordenar por:",
      "projects.sortUpdated": "Más recientes",
      "projects.sortStars": "Estrellas",
      "projects.sortName": "Nombre",
      "projects.all": "Todos",
      "projects.noResults": "No se encontraron proyectos que coincidan con la búsqueda."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;