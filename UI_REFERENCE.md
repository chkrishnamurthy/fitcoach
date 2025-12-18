# UI Utilities Reference Guide

Quick reference for consistent styling across the fitness coaching website.

## Card Hover Effects

### Standard Card (Large)
```tsx
className="... hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
```
**Use for**: Main content cards, program cards, transformation cards

### Small Card
```tsx
className="... hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300"
```
**Use for**: Specialization cards, feature cards, benefit cards

### Button/CTA
```tsx
className="... hover:shadow-lg hover:scale-105 transition-all duration-300"
```
**Use for**: Buttons, call-to-action elements

### Icon/Social Link
```tsx
className="... hover:scale-110 hover:bg-gray-800 transition-all duration-300"
```
**Use for**: Icons, social media links, small interactive elements

## Section Spacing

### Standard Section
```tsx
className="py-16 md:py-24"
```
**Use for**: Most content sections

### Hero/Feature Section
```tsx
className="py-20 md:py-28 lg:py-36"
```
**Use for**: Hero sections, major feature sections

### Compact Section
```tsx
className="py-12 md:py-16"
```
**Use for**: CTAs, banners, tight sections

## Typography Scale (Mobile-First)

### Headings
```tsx
// H1 - Page title
className="text-4xl md:text-5xl lg:text-6xl font-bold"

// H2 - Section title
className="text-3xl md:text-4xl lg:text-5xl font-bold"

// H3 - Subsection title
className="text-2xl md:text-3xl font-bold"

// H4 - Card title
className="text-xl font-bold"

// H5 - Small heading
className="text-lg font-semibold"
```

### Body Text
```tsx
// Large body
className="text-lg md:text-xl"

// Standard body
className="text-base md:text-lg"

// Small text
className="text-sm"

// Extra small
className="text-xs"
```

### Line Height
```tsx
// For better readability, always add:
className="... leading-relaxed"  // For body text
className="... leading-tight"    // For headings
```

## Grid Layouts

### 3-Column Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```
**Use for**: Program cards, feature grids

### 2-Column Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-8"
```
**Use for**: Benefits, testimonials

### Auto-Fit Grid
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
```
**Use for**: Transformation gallery, image grids

## Button Styles

### Primary CTA
```tsx
className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
```

### Success/WhatsApp CTA
```tsx
className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
```

### Secondary Button
```tsx
className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300"
```

### Ghost Button
```tsx
className="px-6 py-3 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300"
```

## Focus States

All interactive elements should have:
```tsx
className="... focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
```

## Gradients

### Primary Blue Gradient
```tsx
className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
```
**Use for**: Hero sections, main CTAs

### Success Green Gradient
```tsx
className="bg-gradient-to-r from-green-600 to-green-700"
```
**Use for**: WhatsApp CTAs, success messages

### Background Gradient
```tsx
className="bg-gradient-to-br from-gray-50 to-gray-100"
```
**Use for**: Section backgrounds, subtle contrast

## Backdrop Effects

### Glassmorphism
```tsx
className="bg-white/95 backdrop-blur-sm"
```
**Use for**: Sticky header, modal overlays

### Overlay
```tsx
className="bg-black/50 backdrop-blur-sm"
```
**Use for**: Image overlays, modals

## Animations

### Fade In
```tsx
className="animate-fadeIn"
```
**Use for**: Mobile menu, modals, tooltips

### On Scroll (Future)
Add intersection observer for:
- Fade up on scroll
- Count up animations
- Stagger effects

## Container Widths

### Standard Container
```tsx
className="container mx-auto px-4"
```

### Narrow Container (Reading Width)
```tsx
className="container mx-auto px-4 max-w-4xl"
```
**Use for**: Article content, long-form text

### Wide Container
```tsx
className="container mx-auto px-4 max-w-7xl"
```
**Use for**: Dashboards, grids

## Responsive Patterns

### Mobile Menu
```tsx
// Desktop nav
className="hidden md:flex ..."

// Mobile button
className="md:hidden ..."

// Mobile menu
className="md:hidden ..."
```

### Image Sizes
```tsx
// Full width on mobile, half on desktop
className="w-full md:w-1/2"

// Hidden on mobile
className="hidden md:block"

// Visible on mobile only
className="block md:hidden"
```

## Accessibility Helpers

### Skip to Content Link
```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg"
>
  Skip to content
</a>
```

### Screen Reader Only Text
```tsx
className="sr-only"
```

### ARIA Labels
```tsx
aria-label="Close menu"
aria-expanded={isOpen}
aria-controls="menu-id"
role="navigation"
role="menu"
```

## Color Palette

### Primary
- Blue 600: `#2563eb` - Main brand color
- Blue 700: `#1d4ed8` - Hover state
- Blue 50: `#eff6ff` - Active/selected background

### Success
- Green 600: `#16a34a` - WhatsApp, success actions
- Green 700: `#15803d` - Hover state

### Semantic
- Gray 900: `#111827` - Headings
- Gray 700: `#374151` - Body text
- Gray 600: `#4b5563` - Muted text
- Gray 400: `#9ca3af` - Disabled text
- Gray 100: `#f3f4f6` - Borders
- Gray 50: `#f9fafb` - Backgrounds

### Status
- Orange 600: Weight loss program
- Blue 600: Muscle building program
- Purple 600: Personal coaching program
- Red: Error states
- Yellow: Warning states

## Spacing Scale

- xs: `0.25rem` (4px)
- sm: `0.5rem` (8px)
- md: `1rem` (16px)
- lg: `1.5rem` (24px)
- xl: `2rem` (32px)
- 2xl: `3rem` (48px)
- 3xl: `4rem` (64px)

## Z-Index Scale

- Header: `z-50`
- Modal: `z-40`
- Dropdown: `z-30`
- Sticky elements: `z-20`
- Tooltips: `z-10`

## Common Patterns

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
    Section Title
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
    Section description goes here.
  </p>
</div>
```

### Card with Icon
```tsx
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  <div className="text-blue-600 mb-4">
    {/* Icon SVG */}
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Card description text.
  </p>
</div>
```

### WhatsApp Button
```tsx
<a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
    {/* WhatsApp icon path */}
  </svg>
  Chat on WhatsApp
</a>
```

---

**Pro Tips:**
1. Always use `transition-all duration-300` for smooth animations
2. Combine hover effects: shadow + transform for depth
3. Use `leading-relaxed` on body text for readability
4. Mobile-first: start with small screens, add `md:` and `lg:` for larger
5. Keep focus states visible for accessibility
6. Use semantic HTML (section, nav, main, article)
7. Test with `prefers-reduced-motion` enabled
