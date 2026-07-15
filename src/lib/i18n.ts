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
      "nav.courses": "Courses",
      "nav.analyzer": "Analyzer",
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
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.success": "Message sent successfully!",
      "contact.form.error": "There was an error sending the message. Please try again.",
      // ProjectsPage
      "projects.title": "Projects Gallery",
      "projects.description": "Explore my repositories in real time connected with GitHub API. Filter by tech or search a specific project.",
      "projects.search": "Search projects...",
      "projects.sort": "Sort by:",
      "projects.sortUpdated": "Recently updated",
      "projects.sortStars": "Stars",
      "projects.sortName": "Name",
      "projects.all": "All",
      "projects.noResults": "No projects match the search criteria.",
      "projects.contributions": "GitHub Contributions",
      // CoursesPage
      "courses.title": "My Courses",
      "courses.description": "Courses I've completed or am currently taking to improve my skills.",
      // AnalyzerPage
      "analyzer.title": "Job Fit Analyzer ✨",
      "analyzer.description": "Paste a job description to discover how well your profile matches the requirements using AI.",
      "analyzer.paste": "Paste job requirements here...",
      "analyzer.analyze": "Analyze Compatibility",
      "analyzer.analyzing": "Analyzing skills and experience...",
      "analyzer.score": "Compatibility Score",
      "analyzer.verdict": "Veredict",
      "analyzer.matches": "Strong Matches",
      "analyzer.gaps": "Skill Gaps",
      "analyzer.strategy": "Interview Strategy"
    }
  },
  es: {
    translation: {
      "header.portfolio": "Portafolio",
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.contact": "Contacto",
      "nav.projects": "Proyectos",
      "nav.courses": "Cursos",
      "nav.analyzer": "Analizador",
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
      "contact.form.name": "Nombre",
      "contact.form.email": "Correo Electrónico",
      "contact.form.message": "Mensaje",
      "contact.form.send": "Enviar Mensaje",
      "contact.form.sending": "Enviando...",
      "contact.form.success": "¡Mensaje enviado con éxito!",
      "contact.form.error": "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      // ProjectsPage
      "projects.title": "Galería de Proyectos",
      "projects.description": "Explora mis repositorios en tiempo real conectados con la API de GitHub. Filtra por tecnología o busca un proyecto específico.",
      "projects.search": "Buscar proyectos...",
      "projects.sort": "Ordenar por:",
      "projects.sortUpdated": "Más recientes",
      "projects.sortStars": "Estrellas",
      "projects.sortName": "Nombre",
      "projects.all": "Todos",
      "projects.noResults": "No se encontraron proyectos que coincidan con la búsqueda.",
      "projects.contributions": "Contribuciones en GitHub",
      // CoursesPage
      "courses.title": "Mis Cursos",
      "courses.description": "Cursos que he completado o que estoy tomando actualmente para mejorar mis habilidades.",
      // AnalyzerPage
      "analyzer.title": "Analizador de Ofertas ✨",
      "analyzer.description": "Pega una descripción de oferta laboral para descubrir tu nivel de compatibilidad usando IA.",
      "analyzer.paste": "Pega los requisitos de la vacante aquí...",
      "analyzer.analyze": "Analizar Compatibilidad",
      "analyzer.analyzing": "Analizando skills y experiencia...",
      "analyzer.score": "Nivel de Compatibilidad",
      "analyzer.verdict": "Veredicto",
      "analyzer.matches": "Puntos Fuertes",
      "analyzer.gaps": "Brechas a Mejorar",
      "analyzer.strategy": "Estrategia para Entrevista"
    }
  }
};

const savedLanguage = localStorage.getItem('portfolio_lang') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // default language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
