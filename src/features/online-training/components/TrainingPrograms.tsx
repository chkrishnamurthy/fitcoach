import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER } from '../../../lib/whatsapp';

export default function TrainingPrograms() {
  const programs = [
    {
      name: 'Weight Loss Program',
      duration: '12 Weeks',
      targetAudience: 'Perfect for those looking to shed excess body fat and achieve a leaner physique',
      benefits: [
        'Customized calorie deficit plan',
        'Fat-burning workout routines',
        'Nutrition tracking & guidance',
        'Weekly progress monitoring',
        'Sustainable lifestyle habits'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Muscle Building Program',
      duration: '16 Weeks',
      targetAudience: 'Ideal for individuals wanting to build muscle mass and increase strength',
      benefits: [
        'Progressive overload training',
        'High-protein meal planning',
        'Hypertrophy-focused workouts',
        'Supplement recommendations',
        'Form technique guidance'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Personal 1-on-1 Online Coaching',
      duration: 'Flexible Duration',
      targetAudience: 'Tailored for those who need personalized attention and fully customized programs',
      benefits: [
        'Completely personalized plan',
        'Direct 1-on-1 coaching sessions',
        'Unlimited WhatsApp support',
        'Real-time plan adjustments',
        'Accountability & motivation'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Choose Your Program
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors">
            Select the program that matches your fitness goals. All programs include unlimited WhatsApp support.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${program.gradient} dark:brightness-90 text-white p-8 transition-all`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{program.name}</h3>
                <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{program.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Who it's for */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2 transition-colors">Who It's For</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                    {program.targetAudience}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3 transition-colors">Key Benefits</h4>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, `Hi, I want to register for ${program.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-green-400/30"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Register on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">100% Money-Back Guarantee if not satisfied</span>
          </div>
        </div>
      </div>
    </section>
  );
}
