import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../../../lib/whatsapp';

export default function ContactPage() {
  const whatsappURL = createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES.contact);
  const phoneNumber = '+918801940214'; // Update with actual number
  const email = 'coach@fitness.com'; // Update with actual email

  const contactMethods = [
    {
      title: 'WhatsApp',
      subtitle: 'Fastest Response',
      description: 'Get instant replies to your questions. Available 24/7 for quick consultations.',
      value: DEFAULT_WHATSAPP_NUMBER,
      displayValue: phoneNumber,
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'from-green-600 to-green-700',
      href: whatsappURL,
      action: 'Message on WhatsApp',
      primary: true
    },
    {
      title: 'Phone',
      subtitle: 'Direct Call',
      description: 'Prefer to talk? Call me directly to discuss your fitness goals and programs.',
      value: phoneNumber,
      displayValue: phoneNumber,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
      href: `tel:${phoneNumber}`,
      action: 'Call Now',
      primary: false
    },
    {
      title: 'Email',
      subtitle: 'Send a Message',
      description: 'Prefer email? Send me a detailed message and I\'ll respond within 24 hours.',
      value: email,
      displayValue: email,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-purple-600 to-purple-700',
      href: `mailto:${email}`,
      action: 'Send Email',
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white py-4 md:py-6 transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed transition-colors">
            Ready to transform your body and life? Reach out and let's start your fitness journey together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Primary WhatsApp CTA */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:from-green-700 dark:via-green-800 dark:to-green-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl dark:shadow-green-500/20 transition-colors">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preferred Contact Method
                </h2>
                <p className="text-xl text-green-100 dark:text-green-200 mb-8 transition-colors">
                  Get instant responses and personalized guidance on WhatsApp
                </p>
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-12 py-6 bg-white dark:bg-white text-green-600 dark:text-green-600 font-bold text-xl rounded-full hover:bg-green-50 dark:hover:bg-green-50 transition-all duration-300 shadow-2xl dark:shadow-white/20 hover:scale-110"
                >
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-green-200 dark:text-green-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Instant Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Available 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Contact Methods */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors">
                Other Ways to Reach Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactMethods.filter(method => !method.primary).map((method, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-slate-950/50 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${method.color} dark:brightness-110 text-white rounded-2xl mb-6 transition-all`}>
                      {method.icon}
                    </div>
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{method.title}</h4>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                        {method.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors">
                      {method.description}
                    </p>
                    <div className="mb-6">
                      <a
                        href={method.href}
                        className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 break-all transition-colors"
                      >
                        {method.displayValue}
                      </a>
                    </div>
                    <a
                      href={method.href}
                      target={method.title === 'Email' ? '_self' : '_blank'}
                      rel={method.title === 'Email' ? undefined : 'noopener noreferrer'}
                      className={`inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r ${method.color} text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-xl`}
                    >
                      {method.action}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800 border-2 border-blue-100 dark:border-slate-700 rounded-2xl p-8 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  What Happens Next?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full font-bold text-xl mb-4 transition-colors">
                      1
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">Get in Touch</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                      Send me a message via your preferred contact method
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full font-bold text-xl mb-4 transition-colors">
                      2
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">Free Consultation</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                      We'll discuss your goals and find the perfect program for you
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full font-bold text-xl mb-4">
                      3
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">Start Training</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                      Begin your transformation journey with personalized coaching
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
