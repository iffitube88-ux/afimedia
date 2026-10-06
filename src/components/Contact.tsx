import { useState } from 'react';

import { PROFILE_IMAGE } from '../config';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              Let's Work Together
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Grow?
              </span>
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Book a free 30-minute discovery call to discuss your goals, current challenges, and how I can help you scale.
            </p>

            {/* Profile card */}
            <div className={`flex items-center gap-4 p-4 rounded-2xl mb-8 ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-violet-500/30">
                <img src={PROFILE_IMAGE} alt="Irfan Abdul Majid" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">Irfan Abdul Majid</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Founder, IffiMedia</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-xs text-green-400">Available now</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</div>
                  <div className="font-medium">iffi@iffimedia.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-xl">
                  📅
                </div>
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Response Time</div>
                  <div className="font-medium">Within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Availability</div>
                  <div className="font-medium">Remote — Worldwide clients</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <div className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connect with me</div>
              <div className="flex gap-3">
                {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map(platform => (
                  <a key={platform} href="#" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={`rounded-3xl border p-8 ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company name"
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-5k">$2,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell me about your project *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="What are your goals? What challenges are you facing?"
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Send Message →
                  </button>
                  <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Free 30-minute discovery call included with every inquiry
                  </p>
                </div>
              </form>
            ) : (
              <div className={`rounded-3xl border p-12 text-center ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Thanks for reaching out! I'll get back to you within 24 hours to schedule our discovery call.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
