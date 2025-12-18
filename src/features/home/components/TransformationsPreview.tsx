import { Link } from 'react-router-dom';
import beforeImage from '../../../assets/images/transformations/before/image.png';
import afterImage from '../../../assets/images/transformations/after/image.png';

export default function TransformationsPreview() {
  const transformations = [
    {
      name: 'John D.',
      age: 32,
      result: 'Lost 30 lbs in 3 months',
      description: 'Transformed from overweight to athletic build with consistent training and nutrition guidance.',
      stats: {
        before: '210 lbs',
        after: '180 lbs',
        duration: '3 months',
      },
    },
    {
      name: 'Sarah M.',
      age: 28,
      result: 'Gained 15 lbs of muscle',
      description: 'Built lean muscle mass and achieved her dream physique through dedicated strength training.',
      stats: {
        before: '125 lbs',
        after: '140 lbs',
        duration: '6 months',
      },
    },
    {
      name: 'Mike R.',
      age: 45,
      result: 'Complete body transformation',
      description: 'From sedentary lifestyle to marathon finisher with sustainable lifestyle changes.',
      stats: {
        before: '245 lbs',
        after: '195 lbs',
        duration: '8 months',
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-slate-950 dark:to-black text-white transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Transformations, Real Results
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            See how our clients have achieved life-changing results through dedication and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 dark:hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Before/After Image Layout */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-1 bg-gray-900 dark:bg-black p-2">
                  {/* Before Image */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={beforeImage}
                      alt="Before transformation"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEFORE
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={afterImage}
                      alt="After transformation"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{transformation.name}</h3>
                  <span className="text-sm text-gray-400">{transformation.age} years</span>
                </div>
                
                <p className="text-blue-400 font-semibold mb-3">
                  {transformation.result}
                </p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {transformation.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Before</p>
                    <p className="text-sm font-semibold text-white">{transformation.stats.before}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">After</p>
                    <p className="text-sm font-semibold text-green-400">{transformation.stats.after}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Time</p>
                    <p className="text-sm font-semibold text-blue-400">{transformation.stats.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/transformations"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>View All Transformations</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
