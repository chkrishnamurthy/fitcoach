import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../../../lib/whatsapp';
import profileImage from '../../../assets/images/about-me/profiles/profile.jpeg';

export default function AboutMePage() {
  const whatsappURL = createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES.aboutMe);

  const certifications = [
    {
      title: 'Certified Personal Trainer (CPT)',
      organization: 'National Academy of Sports Medicine',
      year: '2015',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Sports Nutrition Specialist',
      organization: 'International Sports Sciences Association',
      year: '2017',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: 'Strength & Conditioning Coach',
      organization: 'National Strength & Conditioning Association',
      year: '2018',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Online Coaching Certification',
      organization: 'Precision Nutrition',
      year: '2020',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const journeySteps = [
    {
      year: '2013',
      title: 'The Beginning',
      description: 'Started my own fitness journey, transforming from an overweight college student to a fitness enthusiast. Lost 30kg and discovered my passion for health and fitness.'
    },
    {
      year: '2015',
      title: 'Became a Certified Trainer',
      description: 'Earned my first certification and started training clients at a local gym. Helped my first 50 clients achieve their fitness goals.'
    },
    {
      year: '2017',
      title: 'Specialized in Nutrition',
      description: 'Realized that nutrition is 70% of the transformation. Got certified in sports nutrition to provide complete guidance to my clients.'
    },
    {
      year: '2019',
      title: 'Opened My Own Training Studio',
      description: 'Established a private training facility and grew my client base to over 200 satisfied members achieving incredible transformations.'
    },
    {
      year: '2020',
      title: 'Launched Online Coaching',
      description: 'Transitioned to online coaching during the pandemic. Discovered I could help people worldwide. Now training 500+ clients globally.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Continuing to transform lives through personalized online coaching. Every day I wake up excited to help my clients become the best versions of themselves.'
    }
  ];

  const philosophyPoints = [
    {
      title: 'Sustainable, Not Extreme',
      description: 'No crash diets or extreme workout plans. I believe in creating sustainable habits that last a lifetime, not quick fixes that fail.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Personalization is Key',
      description: 'Every person is unique. Your program should be tailored to your body, lifestyle, goals, and preferences - never a cookie-cutter approach.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Education Empowers',
      description: "I teach you the 'why' behind every exercise and meal plan. When you understand the science, you make better decisions and stay committed.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Mindset Matters',
      description: 'Physical transformation starts in the mind. I help you build mental resilience, overcome self-doubt, and develop a champion mindset.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Hero Profile Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white py-4 md:py-4 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Profile Image */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Trainer Profile"
                      loading="eager"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-2">
                <div className="inline-block bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold">Certified Fitness Professional</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-green-300">
                  Mahmood Balala
                  
                </h1>
                <span className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed transition-colors">Your Fitness Coach</span>
                {/* <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-6 leading-relaxed transition-colors">
                  Transforming lives through personalized fitness coaching for over 10 years
                </p> */}
                <p className="text-blue-100 dark:text-blue-200 leading-relaxed transition-colors mt-4">
                  Hi 👋, I'm <span className="text-green-300 dark:text-green-300 font-semibold">Mahmood Balala</span>. I'm not just a trainer; I'm your partner in transformation. I understand the struggles, the doubts, and the victories. Let me help you achieve what you once thought was impossible.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">10+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">500+</div>
                    <div className="text-sm text-blue-200">Clients Trained</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                My Professional Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors">
                From personal transformation to helping thousands achieve their fitness goals
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {journeySteps.map((step, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg dark:shadow-slate-950/50 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-2">{step.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{step.description}</p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-6 h-6 bg-white rounded-full" />
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Certifications & Credentials
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors">
              Continuously learning to provide you with the best, science-based coaching
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800 border-2 border-blue-100 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white p-4 rounded-xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors">{cert.organization}</p>
                    <div className="inline-block bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold transition-colors">
                      {cert.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              My Training Philosophy
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors">
              These core principles guide everything I do and have helped hundreds of clients achieve lasting results
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-slate-950/50 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{point.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Quote */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden transition-colors">
              <div className="absolute top-0 left-0 text-blue-400 dark:text-blue-500 opacity-20 text-9xl font-serif">"</div>
              <p className="text-2xl md:text-3xl font-bold mb-4 relative z-10 leading-relaxed">
                Your fitness journey is not about being better than someone else. It's about being better than you used to be.
              </p>
              <p className="text-blue-200 dark:text-blue-300 text-lg">- My Personal Motto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:from-green-700 dark:via-green-800 dark:to-green-900 text-white transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 dark:text-green-200 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors">
            Let's work together to create the body and life you've always wanted. Your transformation starts with a simple message.
          </p>

          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-6 bg-white dark:bg-white text-green-600 dark:text-green-600 font-bold text-xl rounded-full hover:bg-green-50 dark:hover:bg-green-50 transition-all duration-300 shadow-2xl dark:shadow-green-400/30 hover:scale-110"
          >
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Let's Talk About Your Goals
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-green-200 dark:text-green-300 transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
