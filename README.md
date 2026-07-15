# React Portfolio Frontend Base

This is a clean, modern, and production-ready React frontend template designed to serve as a baseline for portfolio projects or generic frontend applications.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [@tanstack/react-router](https://tanstack.com/router)
- **Data Fetching**: [@tanstack/react-query](https://tanstack.com/query) + [Axios](https://axios-http.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [@tanstack/react-form](https://tanstack.com/form) + [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Code Quality**: [ESLint](https://eslint.org/) (Flat config)

## 📁 Project Structure

```text
src/
├── app/            # Application configuration (router, global providers)
├── components/     # Reusable, domain-agnostic UI components (buttons, inputs)
├── lib/            # Utility functions and configurations (API client, Query client)
├── pages/          # Page components (Home, About, etc.)
├── stores/         # Global state management (Zustand stores)
├── styles/         # Global stylesheets (Tailwind imports)
└── types/          # Global TypeScript types and Zod schemas
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm run test
   ```

## 🎯 Features

- **Component-driven**: Clean UI separation.
- **Strict Typing**: Fully configured TypeScript setup.
- **Easy Routing**: `@tanstack/react-router` makes file-based or route-tree routing seamless.
- **Frontend-only ready**: Comes with mock setups (`msw`) and generic stores (`zustand`) without coupling to a backend.

## 🌐 Flujo de Despliegue (Git Actions & Producción)

Este proyecto utiliza **GitHub Actions** para automatizar el despliegue a **GitHub Pages** (Producción).

### Proceso de CI/CD
1. El flujo está definido en el archivo `.github/workflows/deploy.yml`.
2. El evento que desencadena el despliegue es un `push` a las ramas `main` o `master`.
3. Cuando se integran cambios a `main`, GitHub Actions ejecuta los siguientes pasos en un entorno `ubuntu-latest`:
   - Hace checkout del repositorio.
   - Configura Node.js (versión 20).
   - Instala las dependencias con `npm ci`.
   - Construye la aplicación optimizada para producción (`npm run build`), la cual genera la carpeta `dist`.
   - Configura y empaqueta la carpeta de compilación usando las actions de GitHub Pages.
   - Finalmente despliega el artefacto en GitHub Pages, dejándolo público.

### Pasos para subir cambios
Para integrar nuevas características de forma segura, el flujo recomendado es:

1. **Commit y Push en rama feature**: Todo el trabajo se realiza en una rama separada (ej. `feature/nueva-funcionalidad`).
2. **Integración a Develop**: Una vez terminada y probada la funcionalidad localmente, se realiza merge a la rama `develop` (la cual funciona como entorno de staging/integración).
3. **Pase a Producción (Main)**: Para lanzar la versión a producción, se realiza un merge desde `develop` hacia la rama `main`.
4. **Despliegue Automático**: Al hacer push sobre `main`, GitHub Actions tomará el control y actualizará automáticamente la versión pública.
