# Home Feature

## Purpose
The Home feature serves as the landing page for the Fitness Coach website, providing an overview and welcoming visitors with comprehensive information about services, trainer highlights, and social proof.

## Directory Structure
```
home/
├── components/
│   ├── HomePage.tsx                    # Main home page component
│   ├── HeroSection.tsx                 # Hero banner with CTA
│   ├── TrainerHighlights.tsx           # Key stats and highlights
│   ├── OnlineTrainingCTA.tsx           # Online training promotion
│   ├── TransformationsPreview.tsx      # Client success stories
│   ├── WhyChooseMe.tsx                 # Reasons to choose trainer
│   ├── WhatsAppCTA.tsx                 # Contact CTA banner
│   └── index.ts                        # Component exports
├── context/                            # State management (if needed)
├── hooks/                              # Custom hooks (if needed)
├── helpers/
│   └── constants.ts                    # Feature constants
├── services/                           # API services (if needed)
├── context.md                          # This documentation file
└── index.tsx                           # Feature entry point
```

## Components

### HomePage
Main component that orchestrates all home page sections in the correct order.

**Sections Order:**
1. HeroSection
2. TrainerHighlights
3. OnlineTrainingCTA
4. TransformationsPreview
5. WhyChooseMe
6. WhatsAppCTA

**Props:** None

**Usage:**
```tsx
import { HomePage } from '@/features/home';

<HomePage />
```

### HeroSection
Hero banner with headline, subheadline, and two CTA buttons.

**Features:**
- Gradient blue background
- Large headline with emphasis span
- Two CTA buttons (View Programs, Get Started)
- Decorative gradient element at bottom
- Fully responsive design

**SEO:** Uses `<h1>` for main heading

**Links:**
- `/online-training` - View Training Programs
- `/contact` - Get Started Today

### TrainerHighlights
Four-column grid showcasing trainer's key achievements and approach.

**Highlights:**
- 500+ Clients Trained
- 10+ Years Experience
- Results-Driven Approach
- Personalized Plans

**Features:**
- Icon with each highlight
- Card-based layout with hover effects
- Responsive grid (1/2/4 columns)

**SEO:** Uses `<h2>` for section heading, `<h3>` for each highlight

### OnlineTrainingCTA
Two-column promotional section for online training programs.

**Features:**
- Blue gradient background
- Feature list with checkmarks
- CTA button to training page
- Visual element placeholder (desktop only)

**Includes:**
- Custom workout plans
- Video demonstrations
- Nutrition guidance
- 24/7 support

**SEO:** Uses `<h2>` for section heading

**Links:**
- `/online-training` - Explore Training Programs

### TransformationsPreview
Dark-themed section showcasing 3 client success stories.

**Features:**
- Client name and result headline
- Testimonial quote
- Before/after metrics
- Placeholder for images
- CTA to full transformations page

**Sample Data:**
- 3 transformation cards with real results
- Visual placeholders for before/after images

**SEO:** Uses `<h2>` for section heading, `<h3>` for client names

**Links:**
- `/transformations` - View All Transformations

### WhyChooseMe
Six-reason grid explaining value proposition.

**Reasons:**
1. Proven Track Record
2. Science-Based Methods
3. Personalized Approach
4. Continuous Support
5. Flexible Training Options
6. Holistic Wellness

**Features:**
- Icons for each reason
- Responsive 3-column grid
- Card layout with hover effects

**SEO:** Uses `<h2>` for section heading, `<h3>` for each reason

### WhatsAppCTA
Green-themed call-to-action banner with contact options.

**Features:**
- WhatsApp icon and branding
- Two CTA buttons (WhatsApp, Phone)
- Availability information
- Gradient green background

**CTAs:**
- WhatsApp: Opens WhatsApp chat (wa.me/8801940214)
- Phone: Click-to-call (tel:+8801940214)

**SEO:** Uses `<h2>` for section heading

## State Management
Currently, this feature does not require complex state management. All content is static. Future enhancements may include:
- Dynamic content loading from API
- User interaction tracking
- A/B testing variants

## API Integration
Future API endpoints:
- GET `/api/home/stats` - Fetch real-time trainer statistics
- GET `/api/home/featured-transformations` - Fetch featured client stories
- POST `/api/home/cta-click` - Track CTA button clicks

## Dependencies
- React
- React Router (for navigation)
- Tailwind CSS (for styling)

## SEO Optimization

### Heading Structure
```
h1 - "Transform Your Body, Transform Your Life" (Hero)
h2 - Section headings (Why Work With Me, Train Anywhere, etc.)
h3 - Sub-section headings (individual cards/items)
```

### Semantic HTML
- Proper use of `<section>` elements
- Descriptive link text for accessibility
- Alt-text ready image placeholders

## Responsive Design

### Breakpoints
- Mobile: Default (single column)
- Tablet: md: (2 columns where applicable)
- Desktop: lg: (3-4 columns)

### Mobile-First
All sections are designed mobile-first and progressively enhanced for larger screens.

## Future Enhancements
- [ ] Hero video background option
- [ ] Animated statistics counters
- [ ] Real client transformation images
- [ ] Interactive testimonial slider
- [ ] Newsletter subscription form
- [ ] Live chat integration
- [ ] Scroll animations (AOS/Framer Motion)
- [ ] A/B testing for CTA buttons
- [ ] Dynamic content from CMS
- [ ] Social proof notifications (recent signups)
- [ ] Integration with booking system

## Performance Considerations
- All images should be lazy-loaded
- Consider using next-gen image formats (WebP)
- Implement skeleton loaders for dynamic content
- Optimize SVG icons for bundle size

## Customization Guide

### Update Content
1. **Trainer Stats** - Edit numbers in `TrainerHighlights.tsx`
2. **Client Stories** - Update array in `TransformationsPreview.tsx`
3. **Contact Info** - Change phone/WhatsApp in `WhatsAppCTA.tsx`
4. **Value Props** - Modify reasons in `WhyChooseMe.tsx`

### Update Links
- All route links reference `/online-training`, `/transformations`, `/contact`
- Update in respective component files

### Update Colors
- Hero: Blue gradient (blue-600 to blue-800)
- Transformations: Dark theme (gray-900)
- WhatsApp CTA: Green gradient (green-600 to green-700)
- Use Tailwind classes for easy theme updates

## Accessibility
- All SVG icons have proper aria attributes
- Links have descriptive text
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Interactive elements have focus states

---

**Last Updated:** December 17, 2025
**Version:** 1.0.0
