import { useState } from 'react';

interface CaseStudiesProps {
  darkMode: boolean;
}

const categories = ['All', 'Paid Ads', 'SEO', 'Social Media', 'Email'];

const caseStudies = [
  {
    title: 'E-commerce Fashion Brand',
    category: 'Paid Ads',
    metric: '4.8x ROAS',
    description: 'Scaled Meta Ads from $5K to $25K monthly spend while maintaining profitability through audience segmentation and creative testing.',
    results: ['Revenue: $120K/mo', 'CPA reduced by 34%', 'New customer acquisition: 2,400/mo'],
    color: 'from-violet-500 to-purple-600',
    tag: 'Meta + Google Ads'
  },
  {
    title: 'Local Dental Practice',
    category: 'SEO',
    metric: '+312% Organic Traffic',
    description: 'Complete local SEO overhaul including Google Business optimization, technical fixes, and content strategy targeting high-intent keywords.',
    results: ['Page 1 rankings: 28 keywords', 'New patients: +45/mo', 'Revenue increase: $18K/mo'],
    color: 'from-cyan-500 to-blue-600',
    tag: 'Local SEO'
  },
  {
    title: 'SaaS Startup',
    category: 'Paid Ads',
    metric: '6.2x ROAS',
    description: 'Built a full-funnel Google Ads strategy from scratch, combining search, display, and YouTube campaigns for a B2B SaaS product.',
    results: ['MRR growth: $45K in 90 days', 'CAC: $180 (down from $450)', 'Trial-to-paid: 23%'],
    color: 'from-fuchsia-500 to-pink-600',
    tag: 'Google Ads'
  },
  {
    title: 'Restaurant Chain',
    category: 'Social Media',
    metric: '+89K Followers',
    description: 'Developed a viral short-form video strategy across TikTok and Instagram Reels, driving foot traffic and brand awareness.',
    results: ['Engagement rate: 8.4%', 'Video views: 12M total', 'Foot traffic increase: 22%'],
    color: 'from-amber-500 to-orange-600',
    tag: 'TikTok + Instagram'
  },
  {
    title: 'DTC Skincare Brand',
    category: 'Email',
    metric: '+47% Revenue from Email',
    description: 'Built complete Klaviyo automation flows including welcome series, abandoned cart, post-purchase, and win-back sequences.',
    results: ['Email revenue: $38K/mo', 'Open rate: 42%', 'Repeat purchase rate: 34%'],
    color: 'from-emerald-500 to-teal-600',
    tag: 'Klaviyo'
  },
  {
    title: 'Fitness Coaching Business',
    category: 'Social Media',
    metric: '12x Return on Content',
    description: 'Created a personal brand content engine producing 30+ pieces of content monthly, driving inbound leads and course sales.',
    results: ['Inbound leads: 200+/mo', 'Course sales: $65K/mo', 'Community: 15K members'],
    color: 'from-rose-500 to-red-600',
    tag: 'Instagram + YouTube'
  }
];

export default function CaseStudies({ darkMode }: CaseStudiesProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Proven Results{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real campaigns, real numbers. Here's how I've helped businesses grow.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30'
                  : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study, idx) => (
            <div key={idx} className={`group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:shadow-2xl'}`}>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.color} text-white mb-4`}>
                {study.tag}
              </div>
              <h3 className="text-lg font-bold mb-2">{study.title}</h3>
              <div className={`text-2xl font-bold mb-3 bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                {study.metric}
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {study.description}
              </p>
              <ul className="space-y-1.5">
                {study.results.map((result, rIdx) => (
                  <li key={rIdx} className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
