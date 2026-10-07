import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Navigation - Premium Glass */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative text-3xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                iffiMedia
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['Services', 'Results', 'Pricing', 'Career', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition duration-200"></div>
                </a>
              ))}
              <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-105">
                Get Started
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-emerald-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/10">
            <div className="px-4 py-6 space-y-3">
              {['Services', 'Results', 'Pricing', 'Career', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-emerald-400 font-medium py-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Immersive */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Glowing orb behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-12 md:p-20 overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 animate-pulse"></div>
              <div className="absolute inset-[1px] bg-slate-950/90 rounded-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="text-sm font-medium text-emerald-400">✨ Founded by IRFAN ABDUL MAJID</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Digital Marketing
                  </span>
                  <span className="block text-white mt-2">
                    That Delivers
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Results
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We help ambitious brands scale revenue through data-driven paid ads, SEO, and conversion optimization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition transform hover:scale-105">
                    <span className="relative z-10">Get Free Audit →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-50 group-hover:opacity-100 transition"></div>
                  </a>
                  <a href="#results" className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition transform hover:scale-105">
                    View Results
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Floating Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '47+', label: 'Clients Served', icon: '🎯' },
              { value: '$3.2M+', label: 'Ad Spend Managed', icon: '💰' },
              { value: '150%', label: 'Avg. ROAS', icon: '📈' },
              { value: '5+', label: 'Years Experience', icon: '⚡' }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:border-emerald-500/50 transition transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Premium Cards */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-emerald-500/50 transition transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Showcase */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Proven <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real campaigns, real numbers, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: '4.8x ROAS', title: 'E-commerce Fashion Brand', desc: 'Scaled Meta Ads from $5K to $25K monthly while maintaining profitability', results: ['Revenue: $120K/mo', 'CPA reduced by 34%'] },
              { metric: '+312% Traffic', title: 'Local Dental Practice', desc: 'Complete local SEO overhaul driving organic patient acquisition', results: ['28 Page 1 rankings', '+45 new patients/mo'] },
              { metric: '6.2x ROAS', title: 'SaaS Startup', desc: 'Full-funnel Google Ads strategy for B2B SaaS product', results: ['MRR: +$45K in 90 days', 'CAC: $180 (down from $450)'] }
            ].map((result, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-emerald-500/50 transition transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {result.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{result.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{result.desc}</p>
                  <div className="text-sm text-gray-300 space-y-2">
                    {result.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Premium Tiers */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Flexible <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Custom quotes based on your specific needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Project-Based', price: '$500 – $3,000', note: 'Depends on scope & complexity', features: ['Marketing audit & strategy', 'Campaign setup', '2-4 weeks support', 'Detailed report'], popular: false },
              { name: 'Monthly Retainer', price: '$1,500 – $5,000+', note: 'Per month based on workload', features: ['Full campaign management', 'Weekly optimization calls', 'Content creation', 'Priority support'], popular: true },
              { name: 'Advisory', price: '$75 – $200', note: 'Per hour consultation', features: ['Strategy consultation', 'Campaign review', 'Team training', 'Flexible scheduling'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`group relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-75"></div>
                )}
                <div className={`relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border-2 ${plan.popular ? 'border-emerald-500' : 'border-white/10 group-hover:border-emerald-500/50'} p-8 transition transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-400 text-sm mb-8">{plan.note}</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <span className="text-emerald-400 text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`block w-full py-4 rounded-xl text-center font-bold transition ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-emerald-500/50' : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'}`}>
                    {plan.popular ? 'Get Custom Quote' : plan.name === 'Advisory' ? 'Book Session' : 'Request Quote'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career - Opportunities */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Join Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're looking for talented marketers to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Digital Marketing Specialist', type: 'Full-time / Remote • 2-4 years experience', desc: 'Join our team and help clients scale their businesses through data-driven strategies.' },
              { title: 'Paid Ads Manager', type: 'Full-time / Remote • 3-5 years experience', desc: 'Manage high-budget campaigns across multiple platforms for our clients.' }
            ].map((job, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-emerald-500/50 transition transform hover:scale-105 hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                  <p className="text-emerald-400 text-sm font-medium mb-4">{job.type}</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{job.desc}</p>
                  <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-105">
                    Apply Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Premium Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Get In <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to scale your business? Let's talk.
            </p>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea rows={6} className="w-full px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition resize-none text-white"></textarea>
                </div>
                <button type="submit" className="group relative w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition transform hover:scale-105">
                  <span className="relative z-10">Send Message →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Premium */}
      <footer className="py-16 bg-slate-900/50 backdrop-blur-xl border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25"></div>
              <div className="relative text-4xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                iffiMedia
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Founded by <span className="text-emerald-400 font-semibold">IRFAN ABDUL MAJID</span>
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
