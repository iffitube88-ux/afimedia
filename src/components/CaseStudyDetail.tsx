import { useState } from 'react';

interface CaseStudyDetailProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: any;
}

export default function CaseStudyDetail({ isOpen, onClose, caseStudy }: CaseStudyDetailProps) {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto animate-fade-in">
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl border border-blue-500/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">{caseStudy.icon}</div>
              <h1 className="text-4xl font-bold mb-2">{caseStudy.title}</h1>
              <p className="text-xl text-white/80">{caseStudy.industry}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">📋</span> Project Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">{caseStudy.overview}</p>
            </div>

            {/* Challenge */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">🎯</span> The Challenge
              </h2>
              <p className="text-slate-300 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">💡</span> Our Solution
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">{caseStudy.solution}</p>
              <ul className="space-y-2">
                {caseStudy.strategies.map((strategy: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-yellow-400">📈</span> Results & Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {result.value}
                    </div>
                    <div className="text-slate-400 text-sm">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">⏱️</span> Project Timeline
              </h2>
              <div className="space-y-4">
                {caseStudy.timeline.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-20 text-blue-400 font-semibold text-sm">{item.phase}</div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-slate-400 text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-slate-200 text-lg italic mb-6 leading-relaxed">"{caseStudy.testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {caseStudy.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{caseStudy.testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{caseStudy.testimonial.title}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h3>
              <p className="text-slate-400 mb-6">Let's discuss how we can help your business grow</p>
              <div className="flex gap-4 justify-center">
                <a href="#contact" onClick={onClose} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Start Your Project
                </a>
                <button onClick={onClose} className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const detailedCaseStudies = [
  {
    id: 1,
    icon: '👗',
    title: 'Fashion E-commerce Brand',
    industry: 'E-commerce • Fashion Retail',
    overview: 'A mid-sized fashion e-commerce brand struggling with declining ROAS and increasing customer acquisition costs approached lamaMedia for a comprehensive paid advertising overhaul.',
    challenge: 'The client was spending $25,000/month on Meta Ads with a declining ROAS of 1.8x. Customer acquisition costs had risen 45% over 6 months, and their existing agency failed to identify the root causes. They needed immediate intervention to stop the bleeding and restore profitability.',
    solution: 'We conducted a deep-dive audit of their ad account, audience targeting, and creative assets. Our team implemented a complete strategy overhaul focusing on audience segmentation, creative testing, and funnel optimization.',
    strategies: [
      'Implemented advanced audience segmentation based on purchase behavior and browsing patterns',
      'Created 50+ new ad creatives with A/B testing framework for continuous optimization',
      'Restructured campaign funnel with dedicated awareness, consideration, and conversion stages',
      'Deployed dynamic product ads with automated catalog optimization',
      'Implemented retargeting sequences with progressive messaging'
    ],
    results: [
      { value: '4.8x', label: 'ROAS Achieved' },
      { value: '$120K', label: 'Monthly Revenue' },
      { value: '-34%', label: 'CPA Reduction' }
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Audit & Strategy', description: 'Complete account audit, competitor analysis, and strategy development' },
      { phase: 'Week 3-4', title: 'Creative Development', description: 'Produced 50+ new ad creatives across multiple formats' },
      { phase: 'Week 5-8', title: 'Launch & Test', description: 'Phased campaign launch with rigorous A/B testing' },
      { phase: 'Week 9-12', title: 'Optimize & Scale', description: 'Continuous optimization and budget scaling based on performance' }
    ],
    testimonial: {
      quote: 'lamaMedia transformed our advertising completely. We went from burning cash to a predictable 4.8x ROAS in just 3 months. Their data-driven approach and creative excellence is unmatched.',
      name: 'Sarah Mitchell',
      title: 'Marketing Director, Fashion Brand'
    }
  },
  {
    id: 2,
    icon: '🦷',
    title: 'Local Dental Practice',
    industry: 'Healthcare • Dental Services',
    overview: 'A multi-location dental practice needed to increase patient acquisition and establish dominance in local search results across three cities.',
    challenge: 'The practice was invisible in local search results, ranking on page 3-5 for key terms. They were losing patients to competitors with stronger online presence. Organic traffic was minimal, and they relied entirely on referrals.',
    solution: 'We implemented a comprehensive local SEO strategy focusing on Google Business Profile optimization, local content creation, and technical SEO improvements.',
    strategies: [
      'Optimized all 3 Google Business Profiles with complete information, photos, and regular posts',
      'Created location-specific landing pages with optimized content for each service area',
      'Implemented schema markup for local business and medical services',
      'Built local citations across 50+ directories with consistent NAP information',
      'Developed patient review generation system to increase Google reviews'
    ],
    results: [
      { value: '+312%', label: 'Organic Traffic' },
      { value: '28', label: 'Page 1 Rankings' },
      { value: '+45', label: 'New Patients/Month' }
    ],
    timeline: [
      { phase: 'Month 1', title: 'Technical Foundation', description: 'Complete technical SEO audit and fixes, schema implementation' },
      { phase: 'Month 2-3', title: 'Content Creation', description: 'Location pages, service pages, and blog content' },
      { phase: 'Month 4-5', title: 'Local Citations', description: 'Built 50+ local citations and optimized GBP profiles' },
      { phase: 'Month 6', title: 'Review Generation', description: 'Implemented patient review system and monitoring' }
    ],
    testimonial: {
      quote: 'The results speak for themselves. We went from page 3 to position 1 for our main keywords in 4 months. We\'re now generating 45+ new patients monthly from organic search alone.',
      name: 'Dr. Jennifer Rodriguez',
      title: 'Owner, Summit Healthcare Group'
    }
  },
  {
    id: 3,
    icon: '💻',
    title: 'B2B SaaS Platform',
    industry: 'Technology • SaaS',
    overview: 'A B2B SaaS startup needed to scale their user acquisition and reduce customer acquisition costs while preparing for Series A funding.',
    challenge: 'The startup was spending $50,000/month on Google Ads with a CAC of $450, which was unsustainable for their business model. They needed to reduce CAC by at least 50% while scaling user acquisition to demonstrate growth for investors.',
    solution: 'We implemented a full-funnel Google Ads strategy with advanced keyword targeting, landing page optimization, and conversion tracking improvements.',
    strategies: [
      'Restructured Google Ads account with dedicated campaigns for each funnel stage',
      'Implemented advanced keyword targeting with negative keyword optimization',
      'Created 15 high-converting landing pages with A/B testing',
      'Deployed conversion tracking with proper attribution modeling',
      'Implemented lead scoring and CRM integration for sales alignment'
    ],
    results: [
      { value: '6.2x', label: 'ROAS Achieved' },
      { value: '+$45K', label: 'MRR Growth' },
      { value: '$180', label: 'New CAC (from $450)' }
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Audit & Planning', description: 'Complete account audit and strategy development' },
      { phase: 'Week 3-4', title: 'Landing Pages', description: 'Created 15 optimized landing pages for different segments' },
      { phase: 'Week 5-8', title: 'Campaign Launch', description: 'Phased campaign launch with rigorous testing' },
      { phase: 'Week 9-12', title: 'Scale & Optimize', description: 'Continuous optimization and budget scaling' }
    ],
    testimonial: {
      quote: 'lamaMedia helped us reduce our CAC by 60% while scaling to $45K MRR in 90 days. Their full-funnel approach and data-driven optimization was exactly what we needed for our Series A.',
      name: 'Robert Kim',
      title: 'Founder & CEO, CloudSync Platform'
    }
  }
];
