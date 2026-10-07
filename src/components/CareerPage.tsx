import { useState } from 'react';

interface CareerPageProps {
  onBack?: () => void;
}

export default function CareerPage({ onBack }: CareerPageProps) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      location: 'Remote',
      experience: '2-4 years',
      salary: '$60,000 - $80,000',
      description: 'Join our elite team and help premium clients scale their businesses through data-driven strategies.',
      requirements: [
        '2-4 years of digital marketing experience',
        'Proficiency in SEO, PPC, and social media marketing',
        'Strong analytical skills and data-driven mindset',
        'Experience with Google Ads, Meta Ads, and analytics tools',
        'Excellent communication and project management skills'
      ],
      responsibilities: [
        'Develop and execute comprehensive digital marketing strategies',
        'Manage and optimize paid advertising campaigns',
        'Conduct SEO audits and implement optimization strategies',
        'Create and manage social media campaigns',
        'Analyze performance data and provide actionable insights',
        'Collaborate with clients to understand their goals and deliver results'
      ]
    },
    {
      id: 2,
      title: 'Paid Ads Manager',
      type: 'Full-time',
      location: 'Remote',
      experience: '3-5 years',
      salary: '$70,000 - $95,000',
      description: 'Manage high-budget campaigns across multiple platforms for our distinguished clients.',
      requirements: [
        '3-5 years of experience managing paid advertising campaigns',
        'Expertise in Google Ads, Meta Ads, and TikTok Ads',
        'Proven track record of achieving high ROAS',
        'Strong analytical and problem-solving skills',
        'Experience with campaign optimization and A/B testing',
        'Ability to manage multiple clients and projects simultaneously'
      ],
      responsibilities: [
        'Plan, execute, and optimize paid advertising campaigns',
        'Manage monthly ad budgets ranging from $10K to $500K',
        'Conduct keyword research and audience targeting',
        'Create and test ad creatives and landing pages',
        'Monitor campaign performance and provide detailed reports',
        'Stay updated with latest advertising trends and platform updates'
      ]
    },
    {
      id: 3,
      title: 'SEO Specialist',
      type: 'Full-time',
      location: 'Remote',
      experience: '2-3 years',
      salary: '$55,000 - $75,000',
      description: 'Drive organic growth through technical SEO, content strategy, and link building.',
      requirements: [
        '2-3 years of SEO experience',
        'Deep understanding of search engine algorithms',
        'Experience with SEO tools (Ahrefs, SEMrush, Moz)',
        'Technical SEO knowledge (site speed, schema, crawlability)',
        'Content optimization and keyword research skills',
        'Strong analytical and reporting abilities'
      ],
      responsibilities: [
        'Conduct comprehensive SEO audits and develop optimization strategies',
        'Perform keyword research and competitive analysis',
        'Optimize on-page elements (meta tags, headings, content)',
        'Implement technical SEO improvements',
        'Build high-quality backlinks through outreach',
        'Monitor and report on SEO performance metrics'
      ]
    },
    {
      id: 4,
      title: 'Content Marketing Manager',
      type: 'Full-time',
      location: 'Remote',
      experience: '3-5 years',
      salary: '$65,000 - $85,000',
      description: 'Create compelling content that drives engagement and conversions for our clients.',
      requirements: [
        '3-5 years of content marketing experience',
        'Exceptional writing and editing skills',
        'Experience with content strategy and planning',
        'Knowledge of SEO best practices for content',
        'Ability to create content for multiple platforms',
        'Strong project management and organizational skills'
      ],
      responsibilities: [
        'Develop content strategies aligned with client goals',
        'Create high-quality blog posts, articles, and web content',
        'Manage content calendar and editorial workflow',
        'Optimize content for SEO and user engagement',
        'Collaborate with designers and developers',
        'Analyze content performance and optimize based on data'
      ]
    }
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setApplicationSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setApplicationSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Join Our <span className="text-white">Elite Team</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're looking for exceptional talent to help us deliver world-class digital marketing solutions to our clients.
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Work With <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">lamaMedia</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-3">100% Remote</h3>
              <p className="text-slate-400">Work from anywhere in the world. We believe in flexibility and work-life balance.</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Competitive Salary</h3>
              <p className="text-slate-400">We offer industry-leading compensation packages with performance bonuses.</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-slate-400">Continuous learning, mentorship, and clear career progression paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Open <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Positions</span></h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>🎯 {job.experience} experience</span>
                      <span>💵 {job.salary}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(job.title)}
                    className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-slate-300 mb-4">{job.description}</p>
                <details className="text-slate-400">
                  <summary className="cursor-pointer text-blue-400 hover:text-cyan-400 transition-colors font-semibold">
                    View Details
                  </summary>
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-blue-500/20 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Apply for {selectedJob}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-white/80 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {!applicationSubmitted ? (
              <form onSubmit={handleSubmitApplication} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Portfolio / Website</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Years of Experience *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Upload Resume *</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white file:font-semibold hover:file:bg-blue-600"
                  />
                  <p className="text-xs text-slate-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Cover Letter *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-slate-400">We'll review your application and get back to you within 5 business days.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="py-12 px-4 text-center">
        <button 
          onClick={() => onBack ? onBack() : window.location.href = '/'}
          className="inline-block px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
