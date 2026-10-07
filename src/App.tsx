import { useState, useEffect, useRef } from 'react';
import LiveChat from './components/LiveChat';
import MeetingScheduler from './components/MeetingScheduler';
import CaseStudyDetail, { detailedCaseStudies } from './components/CaseStudyDetail';
import IndustryPage from './components/IndustryPage';
import ROICalculator from './components/ROICalculator';
import CookieConsent from './components/CookieConsent';
import VideoSection from './components/VideoSection';
import ReviewsWidget from './components/ReviewsWidget';
import CareerPage from './components/CareerPage';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<'home' | 'career'>('home');
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

  // If on career page, show CareerPage component
  if (currentPage === 'career') {
    return <CareerPage onBack={() => setCurrentPage('home')} />;
  }

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
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <img src="https://image.qwenlm.ai/generated-images/62f4c8cf-0f54-465c-af84-fff2c3986a54/_result.png" alt="Lama" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  lamaMedia
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Results', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-slate-300 hover:text-blue-400 transition font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button 
                onClick={() => setCurrentPage('career')}
                className="relative text-slate-300 hover:text-blue-400 transition font-medium group"
              >
                Career
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>(555) 123-4567</span>
              </a>
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
              {['Services', 'Results', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-slate-300 hover:text-blue-400 font-medium py-2">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('career');
                  setMobileMenuOpen(false);
                }}
                className="block text-left text-slate-300 hover:text-blue-400 font-medium py-2 w-full"
              >
                Career
              </button>
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
              Founded by <a href="https://ae.linkedin.com/in/iambk12" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors underline decoration-blue-400/30 hover:decoration-cyan-400">Irfan Abdul Majid</a> • Serving elite clients nationwide
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

      {/* Client Logos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider font-semibold">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['TechFlow', 'Pacific Coast', 'Summit Health', 'Urban Style', 'Luxe Home', 'CloudSync'].map((brand, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="text-slate-400 font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: 'Google Partner', icon: '🏆' },
              { name: 'Meta Business Partner', icon: '📘' },
              { name: 'Clutch Top Agency', icon: '⭐' },
              { name: 'Inc. 5000', icon: '📊' },
              { name: '4.9★ Google Reviews', icon: '💎' }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-blue-500/20 rounded-full hover:border-blue-500/50 transition-all duration-300">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-medium text-slate-300">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {detailedCaseStudies.map((caseStudy, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div 
                  className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer"
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    {caseStudy.results[0].value}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{caseStudy.overview.substring(0, 100)}...</p>
                  <div className="text-sm text-slate-300 space-y-2">
                    {caseStudy.results.slice(0, 2).map((res: any, rIdx: number) => (
                      <div key={rIdx} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span className="text-blue-400">✓</span>
                        <span>{res.value} {res.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-blue-400 font-semibold text-sm group-hover:text-cyan-400 transition">
                    Read Full Case Study →
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



      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              The experts behind your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Irfan Abdul Majid', role: 'Founder & CEO', specialty: 'Digital Strategy', emoji: '👨‍💼' },
              { name: 'Sarah Johnson', role: 'Head of SEO', specialty: 'Technical SEO Expert', emoji: '👩‍💻' },
              { name: 'Michael Chen', role: 'PPC Director', specialty: 'Google & Meta Ads', emoji: '👨‍💻' },
              { name: 'Emily Rodriguez', role: 'Content Lead', specialty: 'Content Strategy', emoji: '👩‍🎨' }
            ].map((member, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-5xl">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate relative opacity-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Get Weekly Marketing Tips</h3>
              <p className="text-slate-400 mb-8">Join 5,000+ marketers receiving actionable insights every week</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500"
                />
                <button type="submit" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </form>
              <p className="text-slate-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
              Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
              Expert tips, strategies, and industry updates to help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '10 Proven SEO Strategies to Boost Your Rankings in 2026',
                excerpt: 'Discover the latest SEO techniques that are driving real results for our clients. From technical optimization to content strategy, learn how to dominate search results.',
                category: 'SEO',
                date: 'Jan 6, 2026',
                readTime: '8 min read',
                image: '🔍'
              },
              {
                title: 'How to Maximize ROAS with Google Ads: A Complete Guide',
                excerpt: 'Learn the exact strategies we use to achieve 4.8x+ ROAS for our clients. From audience targeting to bid optimization, master Google Ads like a pro.',
                category: 'PPC',
                date: 'Jan 3, 2026',
                readTime: '12 min read',
                image: '🎯'
              },
              {
                title: 'Email Marketing Automation: The Key to 47% Revenue Growth',
                excerpt: 'See how we helped clients generate nearly half their revenue through strategic email automation. Learn the flows and sequences that actually convert.',
                category: 'Email Marketing',
                date: 'Dec 28, 2025',
                readTime: '10 min read',
                image: '✉️'
              },
              {
                title: 'Social Media Trends 2026: What\'s Working Right Now',
                excerpt: 'Stay ahead of the curve with the latest social media trends. From TikTok strategies to Instagram Reels, discover what\'s driving engagement in 2026.',
                category: 'Social Media',
                date: 'Dec 22, 2025',
                readTime: '7 min read',
                image: '📱'
              },
              {
                title: 'Conversion Rate Optimization: Turn More Visitors into Customers',
                excerpt: 'Learn the psychological triggers and UX principles that increase conversions by 30%+. Real examples and actionable tips you can implement today.',
                category: 'CRO',
                date: 'Dec 15, 2025',
                readTime: '9 min read',
                image: '📈'
              },
              {
                title: 'Local SEO Guide: Dominate Your Market in 2026',
                excerpt: 'Complete guide to local SEO including Google Business Profile optimization, local citations, and ranking strategies for local businesses.',
                category: 'Local SEO',
                date: 'Dec 10, 2025',
                readTime: '11 min read',
                image: '📍'
              }
            ].map((post, idx) => (
              <div key={idx} className="scroll-animate group relative opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Blog Post Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-8xl">
                    {post.image}
                  </div>
                  
                  {/* Blog Post Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-xs">{post.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{post.readTime}</span>
                      <a href="#" className="text-blue-400 font-semibold text-sm hover:text-cyan-400 transition-colors group-hover:translate-x-1 inline-flex items-center gap-2">
                        Read More
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blog Posts Button */}
          <div className="text-center mt-12">
            <a href="#" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              View All Articles →
            </a>
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
                        type="text" 
                        placeholder="iffi.com or https://yourwebsite.com"
                        pattern="^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$"
                        title="Enter a valid website URL (e.g., iffi.com or https://yourwebsite.com)"
                        className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/20 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 transition-all" 
                      />
                      <p className="text-xs text-slate-500 mt-2">So we can review your current marketing before our call (e.g., iffi.com)</p>
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

                  {/* Industry Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">Your Industry</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedIndustry('ecommerce')}
                        className="p-3 bg-slate-800/50 border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all text-center group"
                      >
                        <div className="text-2xl mb-1">🛒</div>
                        <div className="text-xs text-slate-300 group-hover:text-blue-400">E-commerce</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedIndustry('saas')}
                        className="p-3 bg-slate-800/50 border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all text-center group"
                      >
                        <div className="text-2xl mb-1">💻</div>
                        <div className="text-xs text-slate-300 group-hover:text-blue-400">SaaS</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedIndustry('healthcare')}
                        className="p-3 bg-slate-800/50 border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all text-center group"
                      >
                        <div className="text-2xl mb-1">🏥</div>
                        <div className="text-xs text-slate-300 group-hover:text-blue-400">Healthcare</div>
                      </button>
                    </div>
                  </div>

                  {/* ROI Calculator */}
                  <ROICalculator />

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

      {/* Video Section */}
      <VideoSection />
      
      {/* Reviews Widget */}
      <ReviewsWidget />

      {/* Premium Footer - LAST CONTENT SECTION */}
      <footer className="py-16 border-t border-blue-500/10 bg-slate-950/50 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-blue-500/30">
                  <img src="https://image.qwenlm.ai/generated-images/62f4c8cf-0f54-465c-af84-fff2c3986a54/_result.png" alt="Lama" className="w-full h-full object-cover" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  lamaMedia
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Premium digital marketing agency delivering data-driven results for ambitious brands.
              </p>
              <p className="text-slate-500 text-xs">
                Founded by <a href="https://ae.linkedin.com/in/iambk12" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-400 transition-colors">Irfan Abdul Majid</a>
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition text-sm">SEO Services</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition text-sm">PPC Advertising</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition text-sm">Social Media Marketing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition text-sm">Email Marketing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition text-sm">Content Marketing</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#results" className="text-slate-400 hover:text-blue-400 transition text-sm">Case Studies</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-blue-400 transition text-sm">Pricing</a></li>
                <li><a href="#blog" className="text-slate-400 hover:text-blue-400 transition text-sm">Blog</a></li>
                <li><button onClick={() => setCurrentPage('career')} className="text-slate-400 hover:text-blue-400 transition text-sm text-left">Careers</button></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">
                  <span className="text-blue-400">📧</span> hello@lamamedia.com
                </li>
                <li className="text-slate-400">
                  <span className="text-blue-400">📞</span> +1 (555) 123-4567
                </li>
                <li className="text-slate-400">
                  <span className="text-blue-400">📍</span> Remote Worldwide
                </li>
              </ul>
              {/* Social Media Links */}
              <div className="flex gap-3 mt-4">
                <a href="https://facebook.com/lamamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/lamamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/lamamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/lamamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © 2026 lamaMedia. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy-policy" className="text-slate-500 hover:text-blue-400 transition">Privacy Policy</a>
                <a href="/terms" className="text-slate-500 hover:text-blue-400 transition">Terms of Service</a>
                <a href="/cookies" className="text-slate-500 hover:text-blue-400 transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:scale-110 transition-all duration-300 z-30 hidden md:flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Live Chat Widget */}
      <LiveChat />

      {/* Meeting Scheduler */}
      <MeetingScheduler />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Case Study Detail Modal */}
      <CaseStudyDetail 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        caseStudy={selectedCaseStudy} 
      />

      {/* Industry Page Modal */}
      <IndustryPage 
        isOpen={!!selectedIndustry} 
        onClose={() => setSelectedIndustry('')} 
        industry={selectedIndustry} 
      />
    </div>
  );
}

export default App;
