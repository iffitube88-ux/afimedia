import { useState } from 'react';

interface CareerProps {
  darkMode: boolean;
}

const openings = [
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time / Remote',
    experience: '2-4 years',
    description: 'Looking for a passionate marketer to join our team and help clients scale their businesses through data-driven strategies.',
    skills: ['Meta/Google Ads', 'SEO', 'Analytics', 'Content Strategy'],
    urgent: false
  },
  {
    title: 'Paid Ads Manager',
    type: 'Full-time / Remote',
    experience: '3-5 years',
    description: 'Seeking an experienced PPC specialist to manage high-budget campaigns across multiple platforms for our clients.',
    skills: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'ROAS Optimization'],
    urgent: true
  },
  {
    title: 'SEO Content Writer',
    type: 'Part-time / Remote',
    experience: '1-3 years',
    description: 'Need a skilled writer who understands SEO principles and can create engaging, ranking content for various niches.',
    skills: ['SEO Writing', 'Keyword Research', 'Content Strategy', 'WordPress'],
    urgent: false
  },
  {
    title: 'Social Media Manager',
    type: 'Freelance / Remote',
    experience: '2+ years',
    description: 'Looking for a creative social media expert to manage multiple client accounts and drive engagement through compelling content.',
    skills: ['Instagram', 'TikTok', 'Content Creation', 'Community Management'],
    urgent: false
  }
];

export default function Career({ darkMode }: CareerProps) {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    cvFile: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFile: e.target.files[0] });
    }
  };

  return (
    <section id="career" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Build Your Career{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're always looking for talented marketers who are passionate about driving results. 
            Check out our open positions and apply today.
          </p>
        </div>

        {/* Job Openings */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {openings.map((job, idx) => (
            <div key={idx} className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    {job.urgent && (
                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                  <div className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {job.type} • {job.experience} experience
                  </div>
                </div>
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedPosition(job.title);
                  setFormData({ ...formData, position: job.title });
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-violet-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="application-form" className={`max-w-3xl mx-auto rounded-3xl border p-8 sm:p-10 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200 shadow-2xl'}`}>
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Apply for a Position</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fill out the form below and upload your CV. We'll review your application and get back to you within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Position Applying For *</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    >
                      <option value="">Select a position</option>
                      {openings.map((job, idx) => (
                        <option key={idx} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other / General Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-4">2-4 years</option>
                    <option value="4-6">4-6 years</option>
                    <option value="6+">6+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio / LinkedIn URL</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload CV / Resume *</label>
                  <div className={`border-2 border-dashed rounded-xl p-6 text-center ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-50'}`}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <div className="text-3xl mb-2">📄</div>
                      <div className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {formData.cvFile ? formData.cvFile.name : 'Click to upload your CV'}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        PDF, DOC, or DOCX (Max 5MB)
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter / Why should we hire you? *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tell us about your experience, skills, and why you're a great fit..."
                    className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-violet-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
                >
                  Submit Application →
                </button>
                <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  We review all applications and respond within 48 hours
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Thanks for applying, <strong>{formData.name}</strong>! We've received your application for the <strong>{formData.position}</strong> position. 
                We'll review your CV and get back to you within 48 hours.
              </p>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className="text-sm">
                  <strong>What happens next?</strong> Our team will review your application, and if there's a match, we'll schedule an initial interview call.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
