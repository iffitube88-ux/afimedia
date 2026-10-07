import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation - Glass Effect */}
      <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-xl border-b border-white/40 z-50 shadow-lg shadow-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              iffiMedia
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition font-medium">Results</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition font-medium">Pricing</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 transition font-medium">Career</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/40 backdrop-blur-xl border-t border-white/40">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#results" className="block text-gray-700 hover:text-blue-600 font-medium">Results</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <a href="#career" className="block text-gray-700 hover:text-blue-600 font-medium">Career</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Glass Card */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-white/30 p-12 md:p-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                  Digital Marketing
                </span>
                <br />
                <span className="text-gray-800">That Delivers Results</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Founded by <span className="text-blue-600 font-semibold">IRFAN ABDUL MAJID</span>
                <br />
                We help brands scale revenue through data-driven paid ads, SEO, and conversion optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                  Get Free Audit
                </a>
                <a href="#results" className="px-8 py-4 bg-white/50 backdrop-blur-xl border border-white/60 text-gray-800 rounded-2xl font-semibold hover:bg-white/70 transition transform hover:scale-105">
                  View Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Glass Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '47+', label: 'Clients Served' },
              { value: '$3.2M+', label: 'Ad Spend Managed' },
              { value: '150%', label: 'Avg. ROAS' },
              { value: '5+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-white/20 p-6 text-center hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Glass Cards */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
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
              <div key={idx} className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-white/20 p-6 hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{service.desc}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Glass Cards */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Proven Results</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Real campaigns, real numbers, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: '4.8x ROAS', title: 'E-commerce Fashion Brand', desc: 'Scaled Meta Ads from $5K to $25K monthly while maintaining profitability', results: ['Revenue: $120K/mo', 'CPA reduced by 34%'] },
              { metric: '+312% Traffic', title: 'Local Dental Practice', desc: 'Complete local SEO overhaul driving organic patient acquisition', results: ['28 Page 1 rankings', '+45 new patients/mo'] },
              { metric: '6.2x ROAS', title: 'SaaS Startup', desc: 'Full-funnel Google Ads strategy for B2B SaaS product', results: ['MRR: +$45K in 90 days', 'CAC: $180 (down from $450)'] }
            ].map((result, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-white/20 p-6 hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {result.metric}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{result.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{result.desc}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  {result.results.map((res, rIdx) => (
                    <div key={rIdx}>✓ {res}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Glass Cards */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Flexible Pricing</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Custom quotes based on your specific needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Project-Based', price: '$500 – $3,000', note: 'Depends on scope & complexity', features: ['Marketing audit & strategy', 'Campaign setup', '2-4 weeks support', 'Detailed report'], popular: false },
              { name: 'Monthly Retainer', price: '$1,500 – $5,000+', note: 'Per month based on workload', features: ['Full campaign management', 'Weekly optimization calls', 'Content creation', 'Priority support'], popular: true },
              { name: 'Advisory', price: '$75 – $200', note: 'Per hour consultation', features: ['Strategy consultation', 'Campaign review', 'Team training', 'Flexible scheduling'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white/40 backdrop-blur-xl rounded-2xl border-2 ${plan.popular ? 'border-blue-500' : 'border-white/50'} shadow-xl shadow-white/20 p-8 relative hover:shadow-2xl transition transform hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-700 text-sm mb-6">{plan.note}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>✓ {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded-xl text-center font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50' : 'bg-white/50 backdrop-blur-xl border border-white/60 text-gray-800 hover:bg-white/70'}`}>
                  {plan.popular ? 'Get Custom Quote' : plan.name === 'Advisory' ? 'Book Session' : 'Request Quote'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career - Glass Cards */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We're looking for talented marketers to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Digital Marketing Specialist', type: 'Full-time / Remote • 2-4 years experience', desc: 'Join our team and help clients scale their businesses through data-driven strategies.' },
              { title: 'Paid Ads Manager', type: 'Full-time / Remote • 3-5 years experience', desc: 'Manage high-budget campaigns across multiple platforms for our clients.' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-white/20 p-6 hover:shadow-2xl transition transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{job.type}</p>
                <p className="text-gray-700 text-sm mb-4">{job.desc}</p>
                <a href="#contact" className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Glass Card */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-700">
              Ready to scale your business? Let's talk.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl shadow-white/30 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/60 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/60 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/60 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Glass Effect */}
      <footer className="py-12 bg-white/30 backdrop-blur-xl border-t border-white/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              iffiMedia
            </div>
            <p className="text-gray-700 mb-4">
              Founded by IRFAN ABDUL MAJID
            </p>
            <p className="text-gray-600 text-sm">
              © 2026 iffiMedia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
