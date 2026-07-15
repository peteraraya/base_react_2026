# 🚀 Portafolio Frontend & AI Job Analyzer

Una aplicación frontend moderna, escalable y lista para producción, diseñada como un portafolio interactivo para desarrolladores. Incluye una arquitectura robusta orientada a componentes, internacionalización (i18n), animaciones fluidas, y una integración de Inteligencia Artificial para el análisis de ofertas laborales.

## 🛠 Stack Tecnológico

El proyecto utiliza un ecosistema moderno para garantizar un desarrollo ágil y alto rendimiento:

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Enrutamiento**: [@tanstack/react-router](https://tanstack.com/router) (Type-safe routing)
- **Estado Global**: [Zustand](https://zustand-demo.pmnd.rs/) (Ligero, rápido y sin boilerplate)
- **Estilos y UI**: [Tailwind CSS](https://tailwindcss.com/), `framer-motion` (Animaciones avanzadas), `lucide-react` (Iconografía)
- **Internacionalización**: `react-i18next` (Soporte nativo multi-idioma)
- **Inteligencia Artificial**: API de [Google Gemini (flash-latest)](https://aistudio.google.com/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Calidad de Código**: [ESLint](https://eslint.org/) (Flat config)

---

## 🏗 Arquitectura y Lógica de Funcionamiento

La arquitectura está basada en el patrón de **Componentes Modulares** y una fuerte Separación de Responsabilidades (SoC):

1. **Capa de Presentación (UI)**: Componentes sin estado (`dumb components`) ubicados en `src/components/ui/` y secciones específicas para la presentación del currículum en `src/components/cv/`.
2. **Capa de Páginas (Views)**: Los componentes dentro de `src/pages/` son responsables de integrar las vistas. Orquestan los componentes de UI inyectando la información (Smart Components).
3. **Capa de Datos y Estado Global**: Manejada centralizadamente con `Zustand` (`src/stores/`) para variables globales (como el modo oscuro o filtros de proyectos) y un esquema de datos estático (`src/data/cv.ts`) que funciona como un CMS local (Headless) fácil de actualizar.
4. **Enrutamiento Inteligente**: Se utiliza `@tanstack/react-router` (`src/app/router.tsx`) para definir un sistema jerárquico que permite un control completo, garantizando Type Safety estricto y un rendimiento excepcional mediante la navegación sin recargas.
5. **Capa de Servicios de IA / API**: Concentrada en el directorio `src/lib/`, desde el formateo e internacionalización hasta la interacción directa con el SDK de Google Gemini para procesamiento de texto avanzado.

---

## 📂 Estructura de Directorios

```text
src/
├── app/            # Configuración de base (router.tsx define el RootLayout)
├── components/     # Colección de componentes aislados
│   ├── animations/ # Elementos visuales y transiciones (Framer Motion)
│   ├── cv/         # Secciones que pintan los datos del desarrollador
│   ├── navigation/ # Elementos como el menú principal o Tabla de Contenidos (TOC)
│   └── ui/         # Botones base, inputs, cards, ThemeToggle, LanguageSwitcher
├── data/           # Datos estáticos del portafolio (cv.ts actúa como tu BD)
├── lib/            # Lógica pura, utilidades, API clients e i18n
├── pages/          # Las vistas completas asociadas a una ruta específica
├── stores/         # Controladores de estado global de Zustand
├── styles/         # Reglas de estilo base (Tailwind directives)
└── types/          # Esquemas globales e interfaces para TypeScript
```

---

## 🧩 Componentes Principales

- **`RootComponent`**: Actúa como el `Layout` principal en el router. Engloba el menú `header` inteligente, el contenido (`Outlet`), el footer y elementos flotantes como la paleta de comandos (`CommandPalette`).
- **`ThemeToggle` / `LanguageSwitcher`**: Permiten al usuario alternar sus preferencias persistiendo los valores de Tema y Lenguaje localmente y sincronizándolos en toda la app sin esfuerzo.
- **`JobAnalyzerPage`**: El corazón del análisis de IA. Toma una oferta laboral proporcionada por el usuario y muestra un desglose del porcentaje de coincidencia entre las `skills` locales del desarrollador y lo exigido en el aviso.
- **`TerminalSection`**: Una pequeña e ingeniosa consola retro (landing) que admite comandos básicos simulando interactividad de CLI para captar atención desde el inicio.

---

## 🤖 Integración con Inteligencia Artificial (Gemini)

El portafolio implementa un servicio integral para contrastar descripciones de ofertas laborales contra el currículo estático (usando el modelo **Gemini 1.5 Flash**).

1. **Flujo de Petición**: El archivo `src/lib/gemini.ts` configura la instancia y envía un `prompt` que incluye información dura (Data del CV) + el texto (Oferta Laboral).
2. **Respuesta Tipada JSON**: Gemini recibe instrucciones estrictas de contestar únicamente con un objeto JSON formateado. Esto se mapea directamente a variables locales.
3. **Fallback Resiliente**: En caso de no tener API key o de presentarse un error, el `analyzer.ts` contiene lógica condicional (Fallback Local) que simula el análisis basado en cruce de palabras simples.

---

## 🚀 Instalación y Configuración

### 1. Requisitos Previos
- [Node.js](https://nodejs.org/es) versión 18+ o 20+ (Recomendada).
- Gestor de paquetes: `npm`, `yarn`, `pnpm` o `bun`.

### 2. Pasos de Instalación
```bash
git clone https://github.com/tu-usuario/base_react_2026.git
cd base_react_2026
npm install
```

### 3. Configuración de Variables de Entorno (.env)
En la raíz de tu proyecto, crea un archivo `.env`. (Obtén tu token API de [Google AI Studio](https://aistudio.google.com/)):
```env
# Clave principal para uso del Job Analyzer (Inteligencia Artificial)
VITE_GEMINI_API_KEY=tu_api_key_de_gemini
VITE_BASE_PATH=/
```

### 4. Lanzamiento de Entorno Local
```bash
npm run dev
```

---

## 📖 Guía de Uso y Ejemplos de Implementación

### ¿Cómo crear una nueva página?

1. **Crear el componente Vista en `src/pages/`**:
   ```tsx
   // src/pages/BlogPage.tsx
   export const BlogPage = () => {
     return (
       <div className="max-w-4xl mx-auto py-12">
         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
           Mi Blog Personal
         </h1>
       </div>
     );
   };
   ```

2. **Registrar la ruta en `src/app/router.tsx`**:
   ```tsx
   import { BlogPage } from '@/pages/BlogPage';

   const blogRoute = createRoute({
     getParentRoute: () => rootRoute,
     path: '/blog',
     component: BlogPage,
   });

   // Posteriormente, se inyecta la ruta al Route Tree
   const routeTree = rootRoute.addChildren([
     indexRoute,
     aboutRoute,
     // ...
     blogRoute,
   ]);
   ```

### ¿Cómo usar un Estado Global con Zustand?

```tsx
import { useUIStore } from '@/stores/uiStore';

export const ActionButton = () => {
  // Solo suscribimos al componente para las acciones requeridas, mejorando el rendimiento.
  const { commandPaletteOpen, setCommandPaletteOpen } = useUIStore();
  
  return (
    <button onClick={() => setCommandPaletteOpen(!commandPaletteOpen)}>
      Mostrar Paleta de Comandos
    </button>
  );
};
```

### ¿Cómo registrar un nuevo string para Traducción (i18n)?

1. En el archivo `src/lib/i18n.ts`, ubica el diccionario `resources`:
   ```javascript
   const resources = {
     en: { 
       translation: { 
         "mi.seccion.titulo": "My New Section" 
       } 
     },
     es: { 
       translation: { 
         "mi.seccion.titulo": "Mi Nueva Sección" 
       } 
     }
   };
   ```
2. Úsalo dentro del Hook estandarizado de `react-i18next`:
   ```tsx
   import { useTranslation } from 'react-i18next';

   export const TranslatedTitle = () => {
     const { t } = useTranslation();
     return <h2>{t('mi.seccion.titulo')}</h2>;
   };
   ```

---

## 🌐 Flujo de Trabajo y CI/CD (GitHub Actions)

El proyecto contiene flujos predefinidos de Continuous Integration (CI) orientados a **GitHub Pages** (adaptables a Vercel/Netlify).

### Pipelines de CI/CD
1. En `.github/workflows/deploy.yml` se define la rutina que automatiza el despliegue.
2. Tras la fusión de un Feature a `main`, GitHub Actions configura Node, transpilea con TypeScript, y construye los archivos optimizados (`npm run build`).
3. La carpeta `dist` resultante se empaqueta y se publica online libre de intervenciones manuales.

### Metodología de Colaboración / GitFlow Simplificado
Si deseas aportar o utilizar esto en equipo, se recomienda:

1. **Crear una rama** a partir de `main`: 
   `git checkout -b feature/novedad`
2. **Trabajar y Documentar los cambios** con Commits Atómicos (Semánticos): 
   `git commit -m "feat(ui): implementando carrusel"`
3. **Fase de Pruebas (Staging)** fusionando hacia `develop`: 
   `git checkout develop && git merge feature/novedad`
4. **Lanzamiento (Production)** fusionando hacia `main`: 
   `git checkout main && git merge develop && git push origin main`
*(Este push a main desencadenará el proceso de subida en vivo en GH Actions)*.

---

> Construido para escalar y optimizado para la experiencia. ❤️ 
