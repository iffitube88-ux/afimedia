import { useState } from 'react';

interface IndustryPageProps {
  isOpen: boolean;
  onClose: () => void;
  industry: string;
}

export default function IndustryPage({ isOpen, onClose, industry }: IndustryPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const industries: any = {
    'ecommerce': {
      icon: '🛒',
      title: 'E-commerce Marketing',
      subtitle: 'Scale Your Online Store',
      color: 'from-orange-500 to-red-500',
      challenges: [
        'High customer acquisition costs',
        'Low conversion rates',
        'Cart abandonment issues',
        'Difficulty scaling profitably'
      ],
      solutions: [
        'Advanced audience targeting and segmentation',
        'Dynamic product ads with catalog optimization',
        'Cart abandonment recovery sequences',
        'Conversion rate optimization for product pages'
      ],
      stats: [
        { value: '4.8x', label: 'Average ROAS' },
        { value: '+120%', label: 'Revenue Growth' },
        { value: '-35%', label: 'Cart Abandonment' }
      ],
      caseStudy: 'Fashion e-commerce brand achieved 4.8x ROAS and $120K monthly revenue'
    },
    'saas': {
      icon: '💻',
      title: 'SaaS Marketing',
      subtitle: 'Grow Your Subscription Business',
      color: 'from-blue-500 to-purple-500',
      challenges: [
        'High customer acquisition costs',
        'Long sales cycles',
        'Trial-to-paid conversion',
        'Churn reduction'
      ],
      solutions: [
        'Full-funnel Google Ads strategy',
        'Landing page optimization for conversions',
        'Lead nurturing email sequences',
        'Customer success and retention campaigns'
      ],
      stats: [
        { value: '6.2x', label: 'Average ROAS' },
        { value: '-60%', label: 'CAC Reduction' },
        { value: '+45%', label: 'Trial Conversion' }
      ],
      caseStudy: 'B2B SaaS startup reduced CAC from $450 to $180 while scaling to $45K MRR'
    },
    'healthcare': {
      icon: '🏥',
      title: 'Healthcare Marketing',
      subtitle: 'Attract More Patients',
      color: 'from-green-500 to-teal-500',
      challenges: [
        'Low visibility in local search',
        'Competition from larger practices',
        'Patient trust and credibility',
        'HIPAA-compliant marketing'
      ],
      solutions: [
        'Local SEO and Google Business Profile optimization',
        'Patient review generation systems',
        'HIPAA-compliant content marketing',
        'Appointment booking optimization'
      ],
      stats: [
        { value: '+312%', label: 'Organic Traffic' },
        { value: '28', label: 'Page 1 Rankings' },
        { value: '+45', label: 'New Patients/Month' }
      ],
      caseStudy: 'Dental practice went from page 3 to position 1, generating 45+ new patients monthly'
    }
  };

  const data = industries[industry];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto animate-fade-in">
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl border border-blue-500/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className={`relative h-64 bg-gradient-to-r ${data.color} flex items-center justify-center`}>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">{data.icon}</div>
              <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
              <p className="text-xl text-white/80">{data.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Challenges */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">🎯</span> Common Challenges
              </h2>
              <ul className="space-y-3">
                {data.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">💡</span> Our Solutions
              </h2>
              <ul className="space-y-3">
                {data.solutions.map((solution: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Preview */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-400">📈</span> Success Story
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">{data.caseStudy}</p>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Get Industry-Specific Strategy</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                    <textarea
                      placeholder="Tell us about your challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    >
                      Get Free Strategy Call
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400">We'll contact you within 24 hours with a custom strategy.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
