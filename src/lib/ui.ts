import { cn } from './utils';

/**
 * Button Component Utilities
 * Provides consistent, accessible button styles across the application
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg',
  secondary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950 shadow-md hover:shadow-lg',
  success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 shadow-md hover:shadow-lg',
  outline: 'bg-transparent border-2 border-current hover:bg-current hover:bg-opacity-10 active:bg-opacity-20',
  ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200',
};

export const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-12 py-6 text-xl',
};

export function getButtonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className,
}: Partial<ButtonProps> & { className?: string }): string {
  return cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-semibold rounded-full',
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:scale-105 active:scale-95',
    
    // Variant styles
    buttonVariants[variant],
    
    // Size styles
    buttonSizes[size],
    
    // Full width
    fullWidth && 'w-full',
    
    // Loading state
    isLoading && 'cursor-wait',
    
    // Custom classes
    className
  );
}

/**
 * Standard section spacing utilities
 */
export const sectionSpacing = {
  default: 'py-16 md:py-24',
  tight: 'py-12 md:py-16',
  loose: 'py-20 md:py-28',
};

/**
 * Typography scale - mobile-first
 */
export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
  h4: 'text-xl md:text-2xl font-bold',
  h5: 'text-lg md:text-xl font-bold',
  body: 'text-base md:text-lg leading-relaxed',
  bodyLarge: 'text-lg md:text-xl leading-relaxed',
  small: 'text-sm md:text-base',
};

/**
 * Card hover animation classes
 */
export const cardHoverAnimation = 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2';

/**
 * Container utility with consistent padding
 */
export const containerPadding = 'container mx-auto px-4 sm:px-6 lg:px-8';

/**
 * Gradient backgrounds
 */
export const gradients = {
  blue: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900',
  green: 'bg-gradient-to-br from-green-600 via-green-700 to-green-800',
  blueLight: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900',
  gray: 'bg-gradient-to-br from-gray-50 to-gray-100',
};

/**
 * Accessibility helpers
 */
export const srOnly = 'sr-only';

export function addAriaLabel(label: string) {
  return { 'aria-label': label };
}
