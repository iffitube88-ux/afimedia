import { useState } from 'react';

interface PricingProps {
  darkMode: boolean;
}

const plans = [
  {
    name: 'Project-Based',
    description: 'Perfect for one-off tasks and audits',
    price: '$800',
    period: 'per project',
    features: [
      'Marketing audit & strategy',
      'Campaign setup (one platform)',
      'Website landing page review',
      'Email sequence setup',
      '2 weeks of support',
      'Detailed report & recommendations'
    ],
    cta: 'Start a Project',
    popular: false,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    name: 'Monthly Retainer',
    description: 'Ongoing management for consistent growth',
    price: '$2,500',
    period: 'per month',
    features: [
      'Full campaign management',
      'Multi-platform strategy',
      'Weekly optimization calls',
      'Content creation (8 posts/mo)',
      'Monthly strategy sessions',
      'Real-time dashboard access',
      'Priority support',
      'Quarterly business reviews'
    ],
    cta: 'Get Started',
    popular: true,
    gradient: 'from-violet-600 to-fuchsia-500'
  },
  {
    name: 'Advisory',
    description: 'Expert guidance on an hourly basis',
    price: '$150',
    period: 'per hour',
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
    gradient: 'from-cyan-600 to-blue-700'
  }
];

export default function Pricing({ darkMode }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Transparent{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Choose the model that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                {idx === 0 ? '📋' : idx === 1 ? '🚀' : '💬'}
              </div>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
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

        <p className={`text-center text-sm mt-10 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          💡 All plans include a free 30-minute discovery call. Custom packages available for enterprise needs.
        </p>
      </div>
    </section>
  );
}
