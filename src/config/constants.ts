// Application Constants
export const APP_NAME = 'FitCoach';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  HOME: '/',
  ONLINE_TRAINING: '/online-training',
  TRANSFORMATIONS: '/transformations',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About Me' },
  { to: ROUTES.ONLINE_TRAINING, label: 'Online Training' },
  { to: ROUTES.TRANSFORMATIONS, label: 'Transformations' },
  { to: ROUTES.CONTACT, label: 'Contact' },
] as const;

// Social Media
export const SOCIAL_LINKS = {
  FACEBOOK: '#',
  INSTAGRAM: '#',
  YOUTUBE: '#',
  WHATSAPP: 'https://wa.me/8801940214',
} as const;
