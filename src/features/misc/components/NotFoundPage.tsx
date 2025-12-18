import { Link } from 'react-router-dom';
import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../../../lib/whatsapp';

export default function NotFoundPage() {
  const whatsappURL = createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES.contact);
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-slate-950 transition-colors px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Page not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you’re looking for doesn’t exist or was moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md"
          >
            Go Home
          </Link>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
