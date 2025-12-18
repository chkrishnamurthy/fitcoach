/**
 * WhatsApp Helper Utilities
 * Provides functions to create WhatsApp links and open WhatsApp with pre-filled messages
 */

/**
 * Creates a WhatsApp URL with a pre-filled message
 * @param phoneNumber - The WhatsApp phone number (with country code, no + or spaces)
 * @param message - The pre-filled message text
 * @returns WhatsApp URL string
 */
export function createWhatsAppURL(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp in a new window/tab with a pre-filled message
 * @param phoneNumber - The WhatsApp phone number (with country code, no + or spaces)
 * @param message - The pre-filled message text
 */
export function openWhatsApp(phoneNumber: string, message: string): void {
  const url = createWhatsAppURL(phoneNumber, message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Default WhatsApp phone number (update with actual number)
 */
export const DEFAULT_WHATSAPP_NUMBER = '8801940214';

/**
 * Pre-defined WhatsApp message templates
 */
export const WHATSAPP_MESSAGES = {
  general: "Hi! I'm interested in starting my fitness journey. Can you provide more information?",
  hero: "Hi! I'm interested in starting my fitness journey with you. Can we discuss the programs?",
  onlineTraining: "Hi! I'm interested in your online personal training programs. Can you share more details?",
  weightLoss: "Hi, I want to register for Weight Loss Program",
  muscleBuilding: "Hi, I want to register for Muscle Building Program",
  personalCoaching: "Hi, I want to register for Personal 1-on-1 Online Coaching",
  transformation: "Hi! I'm ready to start my transformation. Can we discuss the best program for me?",
  contact: "Hi! I'd like to get more information about your fitness training programs.",
  aboutMe: "Hi! I'd love to learn more about your training programs and how you can help me reach my fitness goals.",
} as const;
