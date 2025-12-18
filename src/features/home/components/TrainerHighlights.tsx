export default function TrainerHighlights() {
  const highlights = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: '10+ Years',
      subtitle: 'Experience',
      description: 'Over a decade of professional fitness training and coaching expertise.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '500+',
      subtitle: 'Clients Trained',
      description: 'Successfully helped hundreds achieve their fitness goals and transform their lives.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Certified',
      subtitle: 'Professional Trainer',
      description: 'Nationally certified with advanced credentials in personal training and nutrition.',
    },
  ];

  const specializations = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Weight Loss',
      description: 'Proven strategies for sustainable fat loss and body transformation.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Muscle Gain',
      description: 'Build lean muscle mass with science-based strength training programs.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Online Coaching',
      description: 'Personalized remote training with full support from anywhere in the world.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Main Highlights */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Expertise You Can Trust
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Backed by years of experience and proven results in transforming lives through fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">{highlight.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {highlight.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{highlight.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Training Specializations
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert guidance tailored to your specific fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specializations.map((specialization, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-2 border-blue-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3">{specialization.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {specialization.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{specialization.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
