import { useState } from 'react';
import { createWhatsAppURL, DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../../../lib/whatsapp';
import beforeImg from '../../../assets/images/transformations/before/image.png';
import afterImg from '../../../assets/images/transformations/after/image.png';

type FilterType = 'all' | 'weight-loss' | 'muscle-gain' | 'general-fitness';

interface Transformation {
  id: number;
  clientName: string;
  category: 'weight-loss' | 'muscle-gain' | 'general-fitness';
  result: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  stats: {
    before: string;
    after: string;
    change: string;
  };
}

export default function TransformationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const transformations: Transformation[] = [
    {
      id: 1,
      clientName: 'John Smith',
      category: 'weight-loss',
      result: 'Lost 25kg and gained confidence',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '16 Weeks',
      stats: { before: '95kg', after: '70kg', change: '-25kg' }
    },
    {
      id: 2,
      clientName: 'Sarah Johnson',
      category: 'muscle-gain',
      result: 'Built 8kg of lean muscle mass',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '20 Weeks',
      stats: { before: '58kg', after: '66kg', change: '+8kg' }
    },
    {
      id: 3,
      clientName: 'Mike Rodriguez',
      category: 'weight-loss',
      result: 'Transformed body composition',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '12 Weeks',
      stats: { before: '88kg', after: '75kg', change: '-13kg' }
    },
    {
      id: 4,
      clientName: 'Emma Davis',
      category: 'general-fitness',
      result: 'Improved overall fitness and energy',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '14 Weeks',
      stats: { before: '68kg', after: '64kg', change: '-4kg' }
    },
    {
      id: 5,
      clientName: 'David Chen',
      category: 'muscle-gain',
      result: 'Gained strength and muscle definition',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '18 Weeks',
      stats: { before: '72kg', after: '80kg', change: '+8kg' }
    },
    {
      id: 6,
      clientName: 'Lisa Martinez',
      category: 'weight-loss',
      result: 'Achieved dream body and lifestyle',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '22 Weeks',
      stats: { before: '82kg', after: '62kg', change: '-20kg' }
    },
    {
      id: 7,
      clientName: 'James Wilson',
      category: 'general-fitness',
      result: 'Better health and mobility',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '10 Weeks',
      stats: { before: '75kg', after: '73kg', change: '-2kg' }
    },
    {
      id: 8,
      clientName: 'Rachel Brown',
      category: 'muscle-gain',
      result: 'Built athletic physique',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '16 Weeks',
      stats: { before: '55kg', after: '61kg', change: '+6kg' }
    },
    {
      id: 9,
      clientName: 'Tom Anderson',
      category: 'weight-loss',
      result: 'Complete body transformation',
      beforeImage: beforeImg,
      afterImage: afterImg,
      duration: '24 Weeks',
      stats: { before: '105kg', after: '82kg', change: '-23kg' }
    }
  ];

  const filters = [
    { id: 'all' as FilterType, label: 'All Transformations' },
    { id: 'weight-loss' as FilterType, label: 'Weight Loss' },
    { id: 'muscle-gain' as FilterType, label: 'Muscle Gain' },
    { id: 'general-fitness' as FilterType, label: 'General Fitness' }
  ];

  const filteredTransformations = activeFilter === 'all'
    ? transformations
    : transformations.filter(t => t.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white py-4 md:py-6 transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Amazing Transformations
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Real people, real results. See how our clients transformed their bodies and lives.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-20 bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-950/50 border-b border-gray-200 dark:border-slate-800 py-4 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg dark:shadow-blue-500/30 scale-105'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransformations.map(transformation => (
              <div
                key={transformation.id}
                className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-slate-950/50 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-2 p-4 bg-gray-50 dark:bg-slate-900 transition-colors">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                    <img
                      src={transformation.beforeImage}
                      alt={`${transformation.clientName} - Before`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                    <img
                      src={transformation.afterImage}
                      alt={`${transformation.clientName} - After`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Client Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    {transformation.clientName}
                  </h3>

                  {/* Result Summary */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                    {transformation.result}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-3 text-center transition-colors">
                      <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">Before</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{transformation.stats.before}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-3 text-center transition-colors">
                      <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">After</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{transformation.stats.after}</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/50 rounded-lg p-3 text-center transition-colors">
                      <div className="text-xs text-blue-700 dark:text-blue-400 mb-1">Change</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{transformation.stats.change}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{transformation.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTransformations.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full mb-6 transition-colors">
                <svg className="w-10 h-10 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">No transformations found</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 md:py-6 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join these amazing people and achieve the body you've always wanted
          </p>
          <a
            href={createWhatsAppURL(DEFAULT_WHATSAPP_NUMBER, WHATSAPP_MESSAGES.transformation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white dark:bg-white text-green-600 dark:text-green-600 font-bold text-xl rounded-full hover:bg-green-50 dark:hover:bg-green-50 transition-all duration-300 shadow-2xl dark:shadow-green-400/30 hover:scale-105"
          >
            <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Start Your Journey Now
          </a>
        </div>
      </section>
    </div>
  );
}
