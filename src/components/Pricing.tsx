interface PricingProps {
  darkMode: boolean;
}

const plans = [
  {
    name: 'Project-Based',
    description: 'Perfect for one-off tasks, audits & setups',
    priceRange: '$500 – $3,000',
    priceNote: 'Depends on scope & complexity',
    features: [
      'Marketing audit & strategy',
      'Campaign setup (any platform)',
      'Website / landing page review',
      'Email sequence setup',
      '2–4 weeks of support',
      'Detailed report & recommendations'
    ],
    cta: 'Request a Quote',
    popular: false,
    gradient: 'from-gray-600 to-gray-800',
    icon: '📋'
  },
  {
    name: 'Monthly Retainer',
    description: 'Ongoing management for consistent growth',
    priceRange: '$1,500 – $5,000+',
    priceNote: 'Per month — based on workload & channels',
    features: [
      'Full campaign management',
      'Multi-platform strategy',
      'Weekly optimization calls',
      'Content creation (custom volume)',
      'Monthly strategy sessions',
      'Real-time dashboard access',
      'Priority support',
      'Quarterly business reviews'
    ],
    cta: 'Get a Custom Quote',
    popular: true,
    gradient: 'from-violet-600 to-fuchsia-500',
    icon: '🚀'
  },
  {
    name: 'Advisory / Consulting',
    description: 'Expert guidance on an hourly basis',
    priceRange: '$75 – $200',
    priceNote: 'Per hour — varies by engagement type',
    features: [
      'Strategy consultation',
      'Campaign review & feedback',
      'Team training sessions',
      'Ad-hoc troubleshooting',
      'Tool & platform guidance',
      'Flexible scheduling'
    ],
    cta: 'Book a Session',
    popular: false,
    gradient: 'from-cyan-600 to-blue-700',
    icon: '💬'
  }
];

const factors = [
  { icon: '📊', title: 'Business Size', desc: 'Startup vs. enterprise needs differ' },
  { icon: '🎯', title: 'Scope of Work', desc: 'Single channel vs. full-funnel strategy' },
  { icon: '⏱️', title: 'Timeline', desc: 'Urgent projects may have premium rates' },
  { icon: '📈', title: 'Goals & KPIs', desc: 'Revenue targets shape the investment' },
  { icon: '🔧', title: 'Tools & Platforms', desc: 'Number of channels being managed' },
  { icon: '🤝', title: 'Engagement Length', desc: 'Longer partnerships get better rates' }
];

export default function Pricing({ darkMode }: PricingProps) {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Flexible Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Fair Pricing,{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              No Surprises
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every business is unique — so is every project. Here are typical ranges to give you an idea. 
            Your custom quote depends on your specific needs, goals, and scope.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? darkMode ? 'bg-gray-900 border-violet-500/50 shadow-2xl shadow-violet-500/10' : 'bg-white border-violet-300 shadow-2xl shadow-violet-500/20'
                : darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:shadow-xl'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white text-xl mb-6`}>
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="mb-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {plan.priceRange}
                </span>
              </div>
              <p className={`text-xs mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {plan.priceNote}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 text-xs">✓</span>
                    </span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/30'
                    : darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Why pricing varies */}
        <div className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-10 ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <h3 className="text-2xl font-bold mb-2 text-center">Why Rates Vary Per Project</h3>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I don't believe in one-size-fits-all pricing. Here's what affects your custom quote:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factors.map((factor, idx) => (
              <div key={idx} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
                <div className="text-2xl mb-2">{factor.icon}</div>
                <div className="font-semibold text-sm mb-1">{factor.title}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{factor.desc}</div>
              </div>
            ))}
          </div>
          <div className={`mt-8 p-4 rounded-xl text-center text-sm ${darkMode ? 'bg-violet-500/10 text-violet-300' : 'bg-violet-50 text-violet-700'}`}>
            💡 <strong>Free discovery call:</strong> We'll discuss your goals and I'll give you a transparent, custom quote within 24 hours. No hidden fees. No surprises.
          </div>
        </div>
      </div>
    </section>
  );
}
