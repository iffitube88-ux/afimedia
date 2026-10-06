interface ServicesProps {
  darkMode: boolean;
}

const services = [
  {
    icon: '🎯',
    title: 'Paid Ads (PPC)',
    description: 'Meta Ads, Google Ads, TikTok Ads. Laser-focused on direct ROI and performance tracking that scales.',
    features: ['Campaign Strategy & Setup', 'Audience Research & Targeting', 'A/B Testing & Optimization', 'Weekly Performance Reports'],
    color: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/20'
  },
  {
    icon: '🔍',
    title: 'SEO & Content',
    description: 'On-page optimization, technical audits, local SEO, and content strategy that drives organic traffic.',
    features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'On-Page Optimization', 'Local SEO & Google Business'],
    color: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20'
  },
  {
    icon: '📱',
    title: 'Social Media',
    description: 'Strategy, short-form video creation, community engagement, and brand building across platforms.',
    features: ['Content Calendar Planning', 'Reels & Short-Form Video', 'Community Management', 'Brand Voice Development'],
    color: 'from-fuchsia-500 to-pink-600',
    shadow: 'shadow-fuchsia-500/20'
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    description: 'Klaviyo/Mailchimp setups, lead nurture sequences, and retention marketing that maximizes LTV.',
    features: ['Email Automation Flows', 'Lead Nurture Sequences', 'Retention Campaigns', 'A/B Testing & Analytics'],
    color: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/20'
  }
];

export default function Services({ darkMode }: ServicesProps) {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
            Core Specializations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Services That Drive{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A T-shaped skill set: deep expertise in performance marketing with broad knowledge across the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-xl'}`}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-6 shadow-lg ${service.shadow}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    </span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
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
