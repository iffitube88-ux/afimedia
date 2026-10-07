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
