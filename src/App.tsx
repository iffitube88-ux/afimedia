import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              iffiMedia
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition font-medium">Services</a>
              <a href="#results" className="text-gray-600 hover:text-gray-900 transition font-medium">Results</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition font-medium">Pricing</a>
              <a href="#career" className="text-gray-600 hover:text-gray-900 transition font-medium">Career</a>
              <a href="#contact" className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition">
                Contact
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-600 hover:text-gray-900 font-medium">Services</a>
              <a href="#results" className="block text-gray-600 hover:text-gray-900 font-medium">Results</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#career" className="block text-gray-600 hover:text-gray-900 font-medium">Career</a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-500 mb-4">Founded by IRFAN ABDUL MAJID</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Marketing That Delivers Results
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We help brands scale revenue through data-driven paid ads, SEO, and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Get Free Audit
              </a>
              <a href="#results" className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition">
                View Results
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">47+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">$3.2M+</div>
              <div className="text-gray-600">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">150%</div>
              <div className="text-gray-600">Avg. ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paid Ads (PPC)</h3>
              <p className="text-gray-600 text-sm mb-4">Meta Ads, Google Ads, TikTok Ads focused on direct ROI</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Campaign Strategy</li>
                <li>• Audience Targeting</li>
                <li>• Performance Tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SEO & Content</h3>
              <p className="text-gray-600 text-sm mb-4">On-page optimization and content strategy for organic growth</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technical SEO Audits</li>
                <li>• Keyword Research</li>
                <li>• Local SEO</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm mb-4">Strategy and content creation for brand building</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content Calendar</li>
                <li>• Short-form Video</li>
                <li>• Community Management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Marketing</h3>
              <p className="text-gray-600 text-sm mb-4">Klaviyo/Mailchimp setups and retention marketing</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automation Flows</li>
                <li>• Lead Nurture</li>
                <li>• Retention Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real campaigns, real numbers, real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-2xl font-bold text-gray-900 mb-2">4.8x ROAS</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce Fashion Brand</h3>
              <p className="text-gray-600 text-sm mb-4">Scaled Meta Ads from $5K to $25K monthly while maintaining profitability</p>
              <div className="text-sm text-gray-600">
                <div>✓ Revenue: $120K/mo</div>
                <div>✓ CPA reduced by 34%</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-2xl font-bold text-gray-900 mb-2">+312% Traffic</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Dental Practice</h3>
              <p className="text-gray-600 text-sm mb-4">Complete local SEO overhaul driving organic patient acquisition</p>
              <div className="text-sm text-gray-600">
                <div>✓ 28 Page 1 rankings</div>
                <div>✓ +45 new patients/mo</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-2xl font-bold text-gray-900 mb-2">6.2x ROAS</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SaaS Startup</h3>
              <p className="text-gray-600 text-sm mb-4">Full-funnel Google Ads strategy for B2B SaaS product</p>
              <div className="text-sm text-gray-600">
                <div>✓ MRR: +$45K in 90 days</div>
                <div>✓ CAC: $180 (down from $450)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom quotes based on your specific needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project-Based</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$500 – $3,000</div>
              <p className="text-gray-600 text-sm mb-6">Depends on scope & complexity</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✓ Marketing audit & strategy</li>
                <li>✓ Campaign setup</li>
                <li>✓ 2-4 weeks support</li>
                <li>✓ Detailed report</li>
              </ul>
              <a href="#contact" className="block w-full py-3 border-2 border-gray-900 text-gray-900 rounded-lg text-center font-semibold hover:bg-gray-900 hover:text-white transition">
                Request Quote
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-gray-900 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Retainer</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$1,500 – $5,000+</div>
              <p className="text-gray-600 text-sm mb-6">Per month based on workload</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✓ Full campaign management</li>
                <li>✓ Weekly optimization calls</li>
                <li>✓ Content creation</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-gray-900 text-white rounded-lg text-center font-semibold hover:bg-gray-800 transition">
                Get Custom Quote
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Advisory</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$75 – $200</div>
              <p className="text-gray-600 text-sm mb-6">Per hour consultation</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✓ Strategy consultation</li>
                <li>✓ Campaign review</li>
                <li>✓ Team training</li>
                <li>✓ Flexible scheduling</li>
              </ul>
              <a href="#contact" className="block w-full py-3 border-2 border-gray-900 text-gray-900 rounded-lg text-center font-semibold hover:bg-gray-900 hover:text-white transition">
                Book Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're looking for talented marketers to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing Specialist</h3>
              <p className="text-gray-600 text-sm mb-3">Full-time / Remote • 2-4 years experience</p>
              <p className="text-gray-600 text-sm mb-4">Join our team and help clients scale their businesses through data-driven strategies.</p>
              <a href="#contact" className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Apply Now
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paid Ads Manager</h3>
              <p className="text-gray-600 text-sm mb-3">Full-time / Remote • 3-5 years experience</p>
              <p className="text-gray-600 text-sm mb-4">Manage high-budget campaigns across multiple platforms for our clients.</p>
              <a href="#contact" className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Ready to scale your business? Let's talk.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              iffiMedia
            </div>
            <p className="text-gray-600 mb-4">
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
