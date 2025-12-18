import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../../../lib/whatsapp';

export default function HowItWorks() {
  const whatsappURL = createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES.onlineTraining);
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed assessment of your fitness goals, current fitness level, medical history, and lifestyle. This helps us understand your unique needs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Personalized Plan Creation',
      description: 'Based on your goals and assessment, I create a customized workout and nutrition plan tailored specifically for you. Every program is unique.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Daily Guidance & Support',
      description: 'Receive your workouts through our app, video demonstrations for each exercise, and direct access to me for questions, form checks, and motivation.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Progress Tracking',
      description: 'Regular check-ins to monitor your progress, adjust your program as needed, and celebrate your wins. We track measurements, photos, and performance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            How Online Training Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors">
            A simple 4-step process to transform your fitness from anywhere in the world
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent -translate-y-1/2 z-0" />
                )}

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 border-2 border-gray-100 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-500/30 transition-colors">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-blue-600 dark:text-blue-400 mb-4 mt-4 transition-colors">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors">
            Ready to get started? The process is simple and effective.
          </p>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/30 hover:scale-105"
          >
            Start Your Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
