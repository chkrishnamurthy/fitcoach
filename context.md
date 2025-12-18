# Fitness Coach Website - Project Context

## Project Overview
A modern, responsive website for a personal fitness trainer built with React, TypeScript, and Tailwind CSS. The project follows a feature-based architecture for maximum modularity and reusability.

## Tech Stack
- **React 18** - Modern React with hooks
- **TypeScript** - Strict mode enabled for type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Mobile-first** - Responsive design approach

## Architecture Philosophy

This project follows a **feature-based architecture** where each major feature is completely self-contained and reusable. This approach provides:

1. **Modularity**: Features can be easily copied to other projects
2. **Scalability**: New features follow the same predictable structure
3. **Maintainability**: Each feature is isolated with clear boundaries
4. **Reusability**: Components, hooks, and logic are feature-specific
5. **Documentation**: Each feature has its own context.md file

## Project Structure

```
src/
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable UI components
│   ├── shared/         # Common components (buttons, inputs, etc.)
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   └── ui/             # ShadCN UI components (future)
├── config/             # Configuration files
│   ├── api.ts         # API configuration
│   └── constants.ts   # Application constants (routes, nav items, social links)
├── features/           # Feature-specific components and logic
│   ├── home/          # Home page feature
│   ├── online-training/   # Online training feature
│   ├── transformations/   # Client transformations feature
│   ├── about-me/      # About the trainer feature
│   └── contact/       # Contact form feature
├── hooks/              # Global custom React hooks
├── lib/               # Utility libraries and helpers
│   ├── utils.ts       # General utilities (cn, formatDate, etc.)
│   └── validators.ts  # Validation helpers (email, phone, etc.)
├── pages/             # Legacy page components (being migrated to features)
├── routers/           # Routing configuration (future)
├── services/          # Global API services and data fetching
├── store/             # Global state management (useContext)
└── styles/            # Global styles
    └── index.css      # Global styles with Tailwind imports
```

## Feature Structure Template

Each feature follows this consistent structure:

```
features/
└── [feature-name]/
    ├── components/        # Feature-specific UI components
    │   ├── MainComponent.tsx
    │   └── index.ts
    ├── context/          # State management (Context + Reducer)
    │   ├── Context.ts
    │   ├── Actions.ts
    │   ├── Reducer.ts
    │   ├── initialState.ts
    │   └── index.ts
    ├── hooks/            # Custom React hooks
    │   ├── useFeatureData.ts
    │   └── index.ts
    ├── helpers/          # Utility functions and constants
    │   ├── constants.ts
    │   ├── formatters.ts
    │   └── validators.ts
    ├── services/         # API integration
    │   ├── api.ts
    │   └── endpoints.ts
    ├── context.md        # Feature documentation
    └── index.tsx         # Feature entry point
```

## Current Features

### 1. Home (`/`)
Landing page with welcome message and overview.
- Path: `src/features/home/`
- Route: `/`
- Component: `HomePage`

### 2. Online Training (`/online-training`)
Showcases online training programs and packages.
- Path: `src/features/online-training/`
- Route: `/online-training`
- Component: `OnlineTrainingPage`

### 3. Transformations (`/transformations`)
Client success stories with before/after photos.
- Path: `src/features/transformations/`
- Route: `/transformations`
- Component: `TransformationsPage`

### 4. About Me (`/about`)
Trainer's background, certifications, and philosophy.
- Path: `src/features/about-me/`
- Route: `/about`
- Component: `AboutMePage`

### 5. Contact (`/contact`)
Contact form and communication methods.
- Path: `src/features/contact/`
- Route: `/contact`
- Component: `ContactPage`

## Layout Components

### Header
- Sticky header with logo and navigation
- Responsive hamburger menu for mobile
- Active route highlighting using NavLink
- Located: `src/components/layout/Header.tsx`

### Footer
- Dark-themed footer with three columns
- Trainer info, social media links, WhatsApp CTA
- Appears on all pages via Layout wrapper
- Located: `src/components/layout/Footer.tsx`

### Layout
- Wraps all pages with Header and Footer
- Uses React Router's `<Outlet />` for nested routing
- Located: `src/components/layout/Layout.tsx`

## Development Guidelines

### Adding a New Feature

1. **Create directory structure:**
   ```bash
   mkdir -p src/features/[feature-name]/{components,context,hooks,helpers,services}
   ```

2. **Create main component:**
   - Add `components/[FeatureName]Page.tsx`
   - Export from `components/index.ts`

3. **Add constants:**
   - Create `helpers/constants.ts` with feature constants

4. **Create entry point:**
   - Add `index.tsx` to export main components

5. **Document the feature:**
   - Create comprehensive `context.md` file

6. **Update routing:**
   - Add route to `src/App.tsx`
   - Update `src/config/constants.ts` with new route

### Component Conventions
- Use functional components with hooks
- Follow TypeScript strict mode
- Use Tailwind CSS for styling (no CSS modules)
- Implement proper error boundaries (future)
- Include loading states (future)

### State Management
- Use React Context for global state (in `src/store/`)
- Use local useState/useReducer for component state
- Use Context+Reducer pattern for complex feature state

### Naming Conventions
- Components: PascalCase (`HomePage.tsx`)
- Files: camelCase (`useFeatureData.ts`)
- Feature folders: kebab-case (`online-training/`)
- Constants: UPPER_SNAKE_CASE (`ROUTE_PATH`)

## Configuration

### Routes
All routes are defined in `src/config/constants.ts`:
```typescript
export const ROUTES = {
  HOME: '/',
  ONLINE_TRAINING: '/online-training',
  TRANSFORMATIONS: '/transformations',
  ABOUT: '/about',
  CONTACT: '/contact',
};
```

### API Configuration
API settings in `src/config/api.ts`:
- Base URL configuration
- Timeout settings
- Endpoint definitions

## Dependencies

### Core
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.11.0

### Styling
- tailwindcss: ^4.1.18
- @tailwindcss/postcss: (latest)
- autoprefixer: ^10.4.23

### Development
- typescript: ~5.9.3
- vite: ^7.2.4
- @vitejs/plugin-react: ^5.1.1

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Future Enhancements

### Planned Features
- User authentication
- Booking system
- Payment integration
- Blog/articles section
- Workout library
- Meal planning
- Progress tracking

### Technical Improvements
- Add ShadCN UI components
- Implement form validation library
- Add Axios for API calls
- Set up global error handling
- Add loading skeletons
- Implement SEO optimization
- Add unit tests (Vitest)
- Add E2E tests (Playwright)

## Important Notes

1. **Always follow the feature structure** when adding new features
2. **Document each feature** with a detailed context.md file
3. **Keep features isolated** - avoid cross-feature dependencies
4. **Use TypeScript strictly** - no `any` types
5. **Mobile-first approach** - design for mobile, enhance for desktop
6. **Use Tailwind utilities** - avoid custom CSS when possible
7. **Context.md files are crucial** - they help future developers and AI tools understand the codebase

## Contact & Support

For questions about the architecture or to propose changes, refer to this context.md file and individual feature context.md files.

---

**Last Updated:** December 17, 2025
**Version:** 1.0.0
