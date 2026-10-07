import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">iffi</span>
              <span className="text-white">Media</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white transition font-medium">Services</a>
              <a href="#results" className="text-slate-300 hover:text-white transition font-medium">Results</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition font-medium">Pricing</a>
              <a href="#career" className="text-slate-300 hover:text-white transition font-medium">Career</a>
              <a href="#contact" className="px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
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
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-slate-300 hover:text-white font-medium py-2">Services</a>
              <a href="#results" className="block text-slate-300 hover:text-white font-medium py-2">Results</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white font-medium py-2">Pricing</a>
              <a href="#career" className="block text-slate-300 hover:text-white font-medium py-2">Career</a>
              <a href="#contact" className="block text-slate-300 hover:text-white font-medium py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-12 md:p-20">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-400">🏆 Trusted by 47+ Businesses Across USA</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Digital Marketing Agency</span>
                <br />
                <span className="text-blue-400">That Delivers Results</span>
              </h1>
              <p className="text-xl text-slate-400 mb-6 max-w-3xl mx-auto">
                iffiMedia is a full-service digital marketing agency specializing in <strong className="text-white">SEO services</strong>, <strong className="text-white">PPC advertising</strong>, <strong className="text-white">social media marketing</strong>, and <strong className="text-white">conversion optimization</strong>. We help brands scale revenue through data-driven strategies.
              </p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                Founded by <strong className="text-blue-400">Irfan Abdul Majid</strong> • Serving clients nationwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="#contact" className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                  Get Free Marketing Audit
                </a>
                <a href="#results" className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition">
                  View Case Studies
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <span>✓ No Long-Term Contracts</span>
                <span>✓ Transparent Reporting</span>
                <span>✓ ROI-Focused</span>
                <span>✓ 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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
              <article key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 text-center hover:border-blue-500/50 transition">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider">Trusted by Leading Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['TechFlow', 'Pacific Coast', 'Summit Health', 'Urban Style', 'Luxe Home', 'CloudSync'].map((brand, idx) => (
              <div key={idx} className="text-center">
                <div className="text-slate-500 font-bold text-lg hover:text-blue-400 transition cursor-pointer">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital Marketing Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive SEO, PPC, social media, and email marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Paid Ads (PPC)', desc: 'Meta Ads, Google Ads, TikTok Ads focused on direct ROI', features: ['Campaign Strategy', 'Audience Targeting', 'Performance Tracking'] },
              { icon: '🔍', title: 'SEO & Content', desc: 'On-page optimization and content strategy for organic growth', features: ['Technical SEO Audits', 'Keyword Research', 'Local SEO'] },
              { icon: '📱', title: 'Social Media', desc: 'Strategy and content creation for brand building', features: ['Content Calendar', 'Short-form Video', 'Community Management'] },
              { icon: '✉️', title: 'Email Marketing', desc: 'Klaviyo/Mailchimp setups and retention marketing', features: ['Automation Flows', 'Lead Nurture', 'Retention Campaigns'] }
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real campaigns, real numbers, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { metric: '4.8x ROAS', title: 'E-commerce Fashion Brand', desc: 'Scaled Meta Ads from $5K to $25K monthly while maintaining profitability', results: ['Revenue: $120K/mo', 'CPA reduced by 34%'] },
              { metric: '+312% Traffic', title: 'Local Dental Practice', desc: 'Complete local SEO overhaul driving organic patient acquisition', results: ['28 Page 1 rankings', '+45 new patients/mo'] },
              { metric: '6.2x ROAS', title: 'SaaS Startup', desc: 'Full-funnel Google Ads strategy for B2B SaaS product', results: ['MRR: +$45K in 90 days', 'CAC: $180 (down from $450)'] }
            ].map((result, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-blue-500/50 transition">
                <div className="text-3xl font-bold text-blue-400 mb-3">{result.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{result.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{result.desc}</p>
                <div className="text-sm text-slate-300 space-y-2">
                  {result.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      {res}
                    </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Flexible Pricing</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Custom quotes based on your specific needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Project-Based', price: '$500 – $3,000', note: 'Depends on scope & complexity', features: ['Marketing audit & strategy', 'Campaign setup', '2-4 weeks support', 'Detailed report'], popular: false },
              { name: 'Monthly Retainer', price: '$1,500 – $5,000+', note: 'Per month based on workload', features: ['Full campaign management', 'Weekly optimization calls', 'Content creation', 'Priority support'], popular: true },
              { name: 'Advisory', price: '$75 – $200', note: 'Per hour consultation', features: ['Strategy consultation', 'Campaign review', 'Team training', 'Flexible scheduling'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border-2 ${plan.popular ? 'border-blue-500' : 'border-slate-700'} p-8 relative hover:border-blue-500/50 transition`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-8">{plan.note}</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <span className="text-blue-400 text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-4 rounded-lg text-center font-semibold transition ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  {plan.popular ? 'Get Custom Quote' : plan.name === 'Advisory' ? 'Book Session' : 'Request Quote'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Trusted by leading brands across the USA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "iffiMedia transformed our Facebook ad strategy completely. We went from burning cash to a predictable 4.8x ROAS in just 8 weeks. Their data-driven approach is unmatched.",
                name: "Sarah Mitchell",
                title: "Marketing Director",
                company: "TechFlow Solutions",
                location: "Austin, TX"
              },
              {
                quote: "The Google Ads campaigns they built for us reduced our customer acquisition cost by 62% while scaling to $200K monthly revenue. Absolutely game-changing results.",
                name: "Michael Chen",
                title: "CEO",
                company: "Pacific Coast Retail",
                location: "San Diego, CA"
              },
              {
                quote: "Their SEO work took us from page 3 to position 1 for our main keywords in 4 months. Organic traffic increased 312% and we're now generating 45+ leads daily.",
                name: "Jennifer Rodriguez",
                title: "Operations Manager",
                company: "Summit Healthcare Group",
                location: "Denver, CO"
              },
              {
                quote: "We hired iffiMedia for our TikTok advertising and the results were incredible. 12M+ views in the first month and our brand awareness skyrocketed. Highly recommend.",
                name: "David Thompson",
                title: "Brand Manager",
                company: "Urban Style Co.",
                location: "New York, NY"
              },
              {
                quote: "The email marketing automation they set up in Klaviyo now generates 47% of our total revenue. The abandoned cart flow alone recovered $38K in the first month.",
                name: "Amanda Foster",
                title: "E-commerce Director",
                company: "Luxe Home Decor",
                location: "Chicago, IL"
              },
              {
                quote: "Working with iffiMedia was the best decision we made. They scaled our SaaS from $50K to $400K MRR in 6 months with a full-funnel Google Ads strategy.",
                name: "Robert Kim",
                title: "Founder",
                company: "CloudSync Platform",
                location: "Seattle, WA"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-blue-500/50 transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.title}</div>
                  <div className="text-sm text-blue-400 font-medium">{testimonial.company}</div>
                  <div className="text-xs text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We're looking for talented marketers to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Digital Marketing Specialist', type: 'Full-time / Remote • 2-4 years experience', desc: 'Join our team and help clients scale their businesses through data-driven strategies.' },
              { title: 'Paid Ads Manager', type: 'Full-time / Remote • 3-5 years experience', desc: 'Manage high-budget campaigns across multiple platforms for our clients.' }
            ].map((job, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-blue-500/50 transition">
                <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{job.type}</p>
                <p className="text-slate-400 text-sm mb-6">{job.desc}</p>
                <a href="#contact" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-400">
              Ready to scale your business? Let's talk.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    WhatsApp Number <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  />
                  <p className="text-xs text-slate-500 mt-1">For quick communication via WhatsApp</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Website URL <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input 
                    type="url" 
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500" 
                  />
                  <p className="text-xs text-slate-500 mt-1">So we can review your current marketing before our call</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Monthly Marketing Budget <span className="text-slate-500">(Optional)</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white">
                    <option value="">Select budget range</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tell Us About Your Project *</label>
                <textarea 
                  rows={5} 
                  required
                  placeholder="What are your goals? What challenges are you facing? What services are you interested in?"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none text-white placeholder-slate-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Proven Process</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic approach to delivering measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Deep dive into your business, competitors, and current marketing performance' },
              { step: '02', title: 'Strategy Development', desc: 'Custom roadmap tailored to your goals, budget, and timeline' },
              { step: '03', title: 'Execution & Launch', desc: 'Implement campaigns with precision across all chosen channels' },
              { step: '04', title: 'Optimize & Scale', desc: 'Continuous testing, optimization, and scaling of winning strategies' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-blue-500/50 transition relative">
                <div className="text-6xl font-bold text-blue-500/20 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-400 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Specialized expertise across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['E-commerce', 'SaaS', 'Healthcare', 'Real Estate', 'Finance', 'Education', 'Restaurant', 'Fitness', 'Legal', 'Technology', 'Retail', 'Manufacturing'].map((industry, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-4 text-center hover:border-blue-500/50 transition">
                <div className="text-white font-medium text-sm">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about working with iffiMedia
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How long does it take to see results from digital marketing?', a: 'Results vary by channel. PPC campaigns can show results within days, while SEO typically takes 3-6 months for significant organic growth. We set clear expectations and milestones from day one.' },
              { q: 'What is your minimum contract length?', a: 'We offer flexible engagement models. Project-based work has no commitment, while monthly retainers typically start at 3 months to allow sufficient time for optimization and results.' },
              { q: 'Do you work with small businesses or only large companies?', a: 'We work with businesses of all sizes. Our pricing scales based on your needs and budget. Whether you\'re a startup or established enterprise, we have solutions that fit.' },
              { q: 'What makes iffiMedia different from other agencies?', a: 'Our data-driven approach, transparent reporting, and focus on ROI set us apart. We don\'t just run campaigns; we build sustainable growth systems. Plus, you work directly with senior strategists, not junior account managers.' },
              { q: 'How do you measure success?', a: 'We establish KPIs aligned with your business goals during onboarding. This could be ROAS, conversion rate, organic traffic, lead generation, or revenue growth. We provide detailed monthly reports with actionable insights.' },
              { q: 'Can I cancel my retainer at any time?', a: 'Yes, after the initial commitment period, you can cancel with 30 days notice. We believe in earning your business every month through results, not contracts.' }
            ].map((faq, idx) => (
              <details key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition group">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-400 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free marketing audit and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              Get Free Audit
            </a>
            <a href="tel:+15550123" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
              Call Us: (555) 012-3456
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">iffi</span>
                <span className="text-white">Media</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Digital marketing agency delivering measurable results through data-driven strategies.
              </p>
              <p className="text-slate-500 text-xs">
                Founded by IRFAN ABDUL MAJID
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-slate-400 hover:text-white transition">SEO Services</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition">PPC Advertising</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition">Social Media Marketing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition">Email Marketing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition">Content Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#results" className="text-slate-400 hover:text-white transition">Case Studies</a></li>
                <li><a href="#career" className="text-slate-400 hover:text-white transition">Careers</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📧</span>
                  <span>hello@iffimedia.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📞</span>
                  <span>(555) 012-3456</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">🕒</span>
                  <span>Mon-Fri: 9AM - 6PM EST</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📍</span>
                  <span>Serving clients nationwide</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2026 iffiMedia. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition" aria-label="Facebook">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition" aria-label="Twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition" aria-label="LinkedIn">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition" aria-label="Instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
