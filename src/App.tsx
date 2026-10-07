import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation - Glass Effect */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              iffiMedia
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition font-medium">Services</a>
              <a href="#results" className="text-gray-300 hover:text-white transition font-medium">Results</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition font-medium">Pricing</a>
              <a href="#career" className="text-gray-300 hover:text-white transition font-medium">Career</a>
              <a href="#contact" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
                Contact
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-white font-medium">Services</a>
              <a href="#results" className="block text-gray-300 hover:text-white font-medium">Results</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white font-medium">Pricing</a>
              <a href="#career" className="block text-gray-300 hover:text-white font-medium">Career</a>
              <a href="#contact" className="block text-gray-300 hover:text-white font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12 md:p-16">
            <div className="text-center">
              <p className="text-sm font-medium text-blue-400 mb-4">Founded by IRFAN ABDUL MAJID</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Digital Marketing</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  That Delivers Results
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                We help brands scale revenue through data-driven paid ads, SEO, and conversion optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                  Get Free Audit
                </a>
                <a href="#results" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition">
                  View Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '47+', label: 'Clients Served' },
              { value: '$3.2M+', label: 'Ad Spend Managed' },
              { value: '150%', label: 'Avg. ROAS' },
              { value: '5+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Paid Ads (PPC)', desc: 'Meta Ads, Google Ads, TikTok Ads focused on direct ROI', features: ['Campaign Strategy', 'Audience Targeting', 'Performance Tracking'] },
              { icon: '🔍', title: 'SEO & Content', desc: 'On-page optimization and content strategy for organic growth', features: ['Technical SEO Audits', 'Keyword Research', 'Local SEO'] },
              { icon: '📱', title: 'Social Media', desc: 'Strategy and content creation for brand building', features: ['Content Calendar', 'Short-form Video', 'Community Management'] },
              { icon: '✉️', title: 'Email Marketing', desc: 'Klaviyo/Mailchimp setups and retention marketing', features: ['Automation Flows', 'Lead Nurture', 'Retention Campaigns'] }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real campaigns, real numbers, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: '4.8x ROAS', title: 'E-commerce Fashion Brand', desc: 'Scaled Meta Ads from $5K to $25K monthly while maintaining profitability', results: ['Revenue: $120K/mo', 'CPA reduced by 34%'] },
              { metric: '+312% Traffic', title: 'Local Dental Practice', desc: 'Complete local SEO overhaul driving organic patient acquisition', results: ['28 Page 1 rankings', '+45 new patients/mo'] },
              { metric: '6.2x ROAS', title: 'SaaS Startup', desc: 'Full-funnel Google Ads strategy for B2B SaaS product', results: ['MRR: +$45K in 90 days', 'CAC: $180 (down from $450)'] }
            ].map((result, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition">
                <div className="text-2xl font-bold text-blue-400 mb-2">{result.metric}</div>
                <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{result.desc}</p>
                <div className="text-sm text-gray-300 space-y-1">
                  {result.results.map((res, rIdx) => (
                    <div key={rIdx}>✓ {res}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom quotes based on your specific needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Project-Based', price: '$500 – $3,000', note: 'Depends on scope & complexity', features: ['Marketing audit & strategy', 'Campaign setup', '2-4 weeks support', 'Detailed report'], popular: false },
              { name: 'Monthly Retainer', price: '$1,500 – $5,000+', note: 'Per month based on workload', features: ['Full campaign management', 'Weekly optimization calls', 'Content creation', 'Priority support'], popular: true },
              { name: 'Advisory', price: '$75 – $200', note: 'Per hour consultation', features: ['Strategy consultation', 'Campaign review', 'Team training', 'Flexible scheduling'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white/5 backdrop-blur-md rounded-xl border ${plan.popular ? 'border-blue-500/50' : 'border-white/10'} p-8 relative hover:bg-white/10 transition`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm mb-6">{plan.note}</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>✓ {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded-lg text-center font-semibold transition ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {plan.popular ? 'Get Custom Quote' : plan.name === 'Advisory' ? 'Book Session' : 'Request Quote'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're looking for talented marketers to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Digital Marketing Specialist', type: 'Full-time / Remote • 2-4 years experience', desc: 'Join our team and help clients scale their businesses through data-driven strategies.' },
              { title: 'Paid Ads Manager', type: 'Full-time / Remote • 3-5 years experience', desc: 'Manage high-budget campaigns across multiple platforms for our clients.' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition">
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{job.type}</p>
                <p className="text-gray-400 text-sm mb-4">{job.desc}</p>
                <a href="#contact" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Ready to scale your business? Let's talk.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none text-white"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              iffiMedia
            </div>
            <p className="text-gray-400 mb-4">
              Founded by IRFAN ABDUL MAJID
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 iffiMedia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
