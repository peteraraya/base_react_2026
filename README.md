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
