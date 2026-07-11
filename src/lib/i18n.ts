import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "header.portfolio": "Portfolio",
      "nav.home": "Home",
      "nav.about": "About",
      "footer.rights": "Portfolio. All rights reserved.",
      // HomePage
      "home.title": "Welcome to Your Portfolio",
      "home.subtitle": "This is a clean, frontend-only React template to start building your portfolio.",
      // AboutPage
      "about.title": "About Me",
      "about.description": "I'm a frontend developer building awesome user interfaces."
    }
  },
  es: {
    translation: {
      "header.portfolio": "Portafolio",
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "footer.rights": "Portafolio. Todos los derechos reservados.",
      // HomePage
      "home.title": "Bienvenido a tu Portafolio",
      "home.subtitle": "Esta es una plantilla de React limpia, solo frontend, para comenzar a construir tu portafolio.",
      // AboutPage
      "about.title": "Acerca de mí",
      "about.description": "Soy un desarrollador frontend construyendo interfaces de usuario increíbles."
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