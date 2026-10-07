import { useState, useEffect, useRef } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <img src="https://image.qwenlm.ai/generated-images/9610a238-b26a-49aa-bf7a-d4e50f48dbc7/_result.png" alt="Lama" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  lamaMedia
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Results', 'Pricing', 'Career', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-slate-300 hover:text-blue-400 transition font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Get Started
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-blue-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/10">
            <div className="px-4 py-6 space-y-3">
              {['Services', 'Results', 'Pricing', 'Career', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-slate-300 hover:text-blue-400 font-medium py-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Premium Hero Section */}
      <header ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Mouse tracking gradient */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full mb-8 animate-fade-in-up backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-400">🏆 Trusted by 47+ Premium Brands Across USA</span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up stagger-1">
              <span className="block text-white">Digital Marketing</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                That Delivers Results
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-400 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              <span className="text-white font-semibold">lamaMedia</span> is a premium digital marketing agency specializing in{' '}
              <span className="text-blue-400 font-semibold">SEO services</span>,{' '}
              <span className="text-blue-400 font-semibold">PPC advertising</span>,{' '}
              <span className="text-blue-400 font-semibold">social media marketing</span>, and{' '}
              <span className="text-blue-400 font-semibold">conversion optimization</span>.
            </p>

            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-3">
              Founded by <span className="text-blue-400 font-semibold">Irfan Abdul Majid</span> • Serving elite clients nationwide
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up stagger-4">
              <a href="#contact" className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Get Free Marketing Audit →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#results" className="px-10 py-5 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/30 text-white rounded-xl font-bold text-lg hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                View Case Studies
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 animate-fade-in-up stagger-5">
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <span className="text-blue-400">✓</span>
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <span className="text-blue-400">✓</span>
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <span className="text-blue-400">✓</span>
                <span>ROI-Focused</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <span className="text-blue-400">✓</span>
                <span>24/7 Premium Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '47+', label: 'Premium Clients', icon: '👥' },
              { value: '$3.2M+', label: 'Ad Spend Managed', icon: '💰' },
              { value: '150%', label: 'Average ROAS', icon: '📈' },
              { value: '5+', label: 'Years Excellence', icon: '⭐' }
            ].map((stat, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Premium <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              Elite digital marketing solutions crafted for ambitious brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Paid Ads (PPC)', desc: 'Meta Ads, Google Ads, TikTok Ads with laser focus on ROI', features: ['Campaign Strategy', 'Audience Targeting', 'Performance Tracking'] },
              { icon: '🔍', title: 'SEO & Content', desc: 'Dominate search rankings with data-driven optimization', features: ['Technical SEO Audits', 'Keyword Research', 'Local SEO'] },
              { icon: '📱', title: 'Social Media', desc: 'Build brand authority with strategic content creation', features: ['Content Calendar', 'Short-form Video', 'Community Management'] },
              { icon: '✉️', title: 'Email Marketing', desc: 'Maximize LTV with sophisticated automation', features: ['Automation Flows', 'Lead Nurture', 'Retention Campaigns'] }
            ].map((service, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="text-sm text-slate-300 space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span className="text-blue-400 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Results Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Proven <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              Real campaigns, extraordinary outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: '4.8x ROAS', title: 'E-commerce Fashion Brand', desc: 'Scaled Meta Ads from $5K to $25K monthly with exceptional profitability', results: ['Revenue: $120K/mo', 'CPA reduced by 34%'] },
              { metric: '+312% Traffic', title: 'Local Dental Practice', desc: 'Complete local SEO overhaul driving massive organic patient acquisition', results: ['28 Page 1 rankings', '+45 new patients/mo'] },
              { metric: '6.2x ROAS', title: 'SaaS Startup', desc: 'Full-funnel Google Ads strategy for B2B SaaS product launch', results: ['MRR: +$45K in 90 days', 'CAC: $180 (down from $450)'] }
            ].map((result, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    {result.metric}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{result.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{result.desc}</p>
                  <div className="text-sm text-slate-300 space-y-2">
                    {result.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span className="text-blue-400">✓</span>
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              Trusted by leading brands across the USA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "lamaMedia transformed our Facebook ad strategy completely. We went from burning cash to a predictable 4.8x ROAS in just 8 weeks. Their data-driven approach is unmatched.",
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
                quote: "We hired lamaMedia for our TikTok advertising and the results were incredible. 12M+ views in the first month and our brand awareness skyrocketed. Highly recommend.",
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
                quote: "Working with lamaMedia was the best decision we made. They scaled our SaaS from $50K to $400K MRR in 6 months with a full-funnel Google Ads strategy.",
                name: "Robert Kim",
                title: "Founder",
                company: "CloudSync Platform",
                location: "Seattle, WA"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-400 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-blue-500/20 pt-6">
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-400 mt-1">{testimonial.title}</div>
                    <div className="text-sm text-blue-400 font-semibold mt-1">{testimonial.company}</div>
                    <div className="text-xs text-slate-500 mt-1">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Flexible <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              Premium solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Project-Based', price: '$500 – $3,000', note: 'Depends on scope & complexity', features: ['Marketing audit & strategy', 'Campaign setup', '2-4 weeks support', 'Detailed report'], popular: false },
              { name: 'Monthly Retainer', price: '$1,500 – $5,000+', note: 'Per month based on workload', features: ['Full campaign management', 'Weekly optimization calls', 'Content creation', 'Priority support'], popular: true },
              { name: 'Advisory', price: '$75 – $200', note: 'Per hour consultation', features: ['Strategy consultation', 'Campaign review', 'Team training', 'Flexible scheduling'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`scroll-animate group relative opacity-0 ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-50 animate-pulse"></div>
                )}
                <div className={`relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border-2 ${plan.popular ? 'border-blue-500' : 'border-blue-500/20 group-hover:border-blue-500/50'} p-10 transition-all duration-300 hover:-translate-y-2 h-full`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                    {plan.price}
                  </div>
                  <p className="text-slate-400 text-sm mb-10">{plan.note}</p>
                  <ul className="space-y-4 text-sm text-slate-300 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span className="text-blue-400 text-xl">✓</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`block w-full py-5 rounded-xl text-center font-bold text-lg transition-all duration-300 hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-500/50' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                    {plan.popular ? 'Get Custom Quote' : plan.name === 'Advisory' ? 'Book Session' : 'Request Quote'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Career Section */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Elite Team</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              We're looking for exceptional talent to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Digital Marketing Specialist', type: 'Full-time / Remote • 2-4 years experience', desc: 'Join our elite team and help premium clients scale their businesses through data-driven strategies.' },
              { title: 'Paid Ads Manager', type: 'Full-time / Remote • 3-5 years experience', desc: 'Manage high-budget campaigns across multiple platforms for our distinguished clients.' }
            ].map((job, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h3 className="text-3xl font-bold text-white mb-4">{job.title}</h3>
                  <p className="text-blue-400 text-sm font-semibold mb-6">{job.type}</p>
                  <p className="text-slate-400 text-base mb-8 leading-relaxed">{job.desc}</p>
                  <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                    Apply Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 opacity-0 stagger-1">
              Ready to elevate your brand? Let's talk.
            </p>
          </div>

          <div className="scroll-animate opacity-0 stagger-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-10 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-10 text-center">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Smith"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@company.com"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">
                        WhatsApp Number <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                      <p className="text-xs text-slate-500 mt-2">For quick communication via WhatsApp</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">
                        Your Website URL <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input 
                        type="url" 
                        placeholder="https://yourwebsite.com"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                      <p className="text-xs text-slate-500 mt-2">So we can review your current marketing before our call</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-3">
                        Monthly Marketing Budget <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <select className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white transition-all">
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
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Tell Us About Your Project *</label>
                    <textarea 
                      rows={6} 
                      required
                      placeholder="What are your goals? What challenges are you facing? What services are you interested in?"
                      className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none text-white placeholder-slate-500 transition-all"
                    ></textarea>
                  </div>
                  <button type="submit" className="group relative w-full py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Send Message →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 border-t border-blue-500/10 bg-slate-950/50 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <img src="https://image.qwenlm.ai/generated-images/9610a238-b26a-49aa-bf7a-d4e50f48dbc7/_result.png" alt="Lama" className="w-9 h-9 object-contain" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                lamaMedia
              </div>
            </div>
            <p className="text-slate-400 mb-6 text-lg">
              Founded by <span className="text-blue-400 font-semibold">Irfan Abdul Majid</span>
            </p>
            <p className="text-slate-500 text-sm">
              © 2026 lamaMedia. All rights reserved. Premium Digital Marketing Agency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
