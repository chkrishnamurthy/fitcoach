# Fitness Personal Coach Website

A modern, responsive website for a personal fitness trainer built with React, TypeScript, and Tailwind CSS. Following a **feature-based architecture** for maximum modularity and reusability.

## 📋 Table of Contents
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Scripts](#scripts)

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Strict mode enabled for type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with `@import "tailwindcss"` syntax
- **React Router v6** - Client-side routing
- **Mobile-first** - Responsive design approach

## 🏗️ Architecture

This project follows a **feature-based architecture** where each feature is self-contained and reusable:

```
✅ Modularity - Features can be easily copied to other projects
✅ Scalability - New features follow the same predictable structure  
✅ Maintainability - Each feature is isolated with clear boundaries
✅ Documentation - Each feature has its own context.md file
```

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, fonts)
├── components/
│   ├── layout/         # Header, Footer, Layout
│   ├── shared/         # Reusable components
│   └── ui/             # ShadCN UI components (future)
├── config/
│   ├── api.ts          # API configuration
│   └── constants.ts    # App constants (routes, nav)
├── features/           # 🌟 Feature-based modules
│   ├── home/
│   ├── online-training/
│   ├── transformations/
│   ├── about-me/
│   └── contact/
├── hooks/              # Global custom hooks
├── lib/
│   ├── utils.ts        # Utilities (cn, formatDate)
│   └── validators.ts   # Validation helpers
├── routers/            # Route configuration
├── services/           # API services
├── store/              # Global state (Context)
└── styles/
    └── index.css       # Global Tailwind styles
```

### Feature Structure Template

Each feature follows this consistent structure:

```
features/[feature-name]/
├── components/         # Feature UI components
│   ├── [Feature]Page.tsx
│   └── index.ts
├── context/           # State management (Context + Reducer)
├── hooks/             # Custom hooks for this feature
├── helpers/           # Utilities and constants
│   └── constants.ts
├── services/          # API integration
├── context.md         # 📝 Feature documentation
└── index.tsx          # Feature entry point
```

## ✨ Features

### Current Features

| Feature | Route | Description |
|---------|-------|-------------|
| **Home** | `/` | Landing page with overview |
| **Online Training** | `/online-training` | Training programs and packages |
| **Transformations** | `/transformations` | Client success stories |
| **About Me** | `/about` | Trainer background and certifications |
| **Contact** | `/contact` | Contact form and communication |

### Layout Components

- **Header**: Sticky navigation with mobile hamburger menu and active route highlighting
- **Footer**: Dark theme with social links and WhatsApp CTA
- **Layout**: Wraps all pages with header/footer

## 🎯 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Development Guidelines

### Adding a New Feature

1. **Create directory structure:**
   ```bash
   mkdir -p src/features/[feature-name]/{components,context,hooks,helpers,services}
   ```

2. **Create main component:**
   ```typescript
   // src/features/[feature-name]/components/[FeatureName]Page.tsx
   export default function FeatureNamePage() {
     return <div>Feature content</div>;
   }
   ```

3. **Add feature constants:**
   ```typescript
   // src/features/[feature-name]/helpers/constants.ts
   export const FEATURE_CONSTANTS = {
     FEATURE_NAME: 'Feature Name',
     ROUTE_PATH: '/feature-path',
   };
   ```

4. **Create entry point:**
   ```typescript
   // src/features/[feature-name]/index.tsx
   export { FeatureNamePage } from './components';
   export * from './helpers/constants';
   ```

5. **Document the feature:**
   ```markdown
   Create comprehensive context.md file following the template
   ```

6. **Update routing:**
   - Add route to `src/App.tsx`
   - Update `src/config/constants.ts`

### Conventions

- **Components**: PascalCase (`HomePage.tsx`)
- **Files**: camelCase (`useFeatureData.ts`)
- **Folders**: kebab-case (`online-training/`)
- **Constants**: UPPER_SNAKE_CASE (`ROUTE_PATH`)

### State Management

- Global state → `src/store/` (React Context)
- Feature state → `[feature]/context/` (Context + Reducer)
- Component state → `useState` / `useReducer`

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Environment Variables

Create `.env` file for API configuration:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### Routes

All routes are centralized in [`src/config/constants.ts`](src/config/constants.ts):

```typescript
export const ROUTES = {
  HOME: '/',
  ONLINE_TRAINING: '/online-training',
  TRANSFORMATIONS: '/transformations',
  ABOUT: '/about',
  CONTACT: '/contact',
};
```

## 📚 Documentation

- **Root Context**: [`context.md`](context.md) - Project overview and architecture
- **Feature Docs**: Each feature has its own `context.md` file:
  - [`features/home/context.md`](src/features/home/context.md)
  - [`features/online-training/context.md`](src/features/online-training/context.md)
  - [`features/transformations/context.md`](src/features/transformations/context.md)
  - [`features/about-me/context.md`](src/features/about-me/context.md)
  - [`features/contact/context.md`](src/features/contact/context.md)

## 🚧 Future Enhancements

### Planned Features
- [ ] User authentication system
- [ ] Booking and scheduling
- [ ] Payment integration
- [ ] Blog/articles section
- [ ] Workout library
- [ ] Meal planning tools
- [ ] Progress tracking dashboard

### Technical Improvements
- [ ] Add ShadCN UI components
- [ ] Implement Axios for API calls
- [ ] Add form validation library (React Hook Form + Zod)
- [ ] Global error handling
- [ ] Loading skeletons
- [ ] SEO optimization
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)

## 📖 Key Files

- [`src/App.tsx`](src/App.tsx) - Main app with routing
- [`src/components/layout/Layout.tsx`](src/components/layout/Layout.tsx) - App layout wrapper
- [`src/config/constants.ts`](src/config/constants.ts) - Global constants
- [`src/lib/utils.ts`](src/lib/utils.ts) - Utility functions
- [`context.md`](context.md) - Complete project documentation

## 🤝 Contributing

When contributing, please:
1. Follow the feature-based structure
2. Document new features with `context.md`
3. Keep features isolated and reusable
4. Use TypeScript strictly (no `any`)
5. Follow mobile-first approach
6. Write descriptive commit messages

## 📄 License

Private project

---

**Last Updated:** December 17, 2025 | **Version:** 1.0.0

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
