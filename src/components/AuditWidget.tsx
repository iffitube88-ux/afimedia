import { useState } from 'react';

interface AuditWidgetProps {
  darkMode: boolean;
}

const steps = [
  {
    title: 'What\'s your biggest marketing challenge?',
    options: [
      { icon: '📉', label: 'Low website traffic' },
      { icon: '💸', label: 'Wasting ad spend' },
      { icon: '📱', label: 'No social media presence' },
      { icon: '✉️', label: 'Poor email engagement' },
      { icon: '🔄', label: 'Low conversion rates' },
      { icon: '🎯', label: 'Unclear strategy' }
    ]
  },
  {
    title: 'What\'s your monthly marketing budget?',
    options: [
      { icon: '💰', label: 'Under $2,000' },
      { icon: '💰', label: '$2,000 - $5,000' },
      { icon: '💰', label: '$5,000 - $15,000' },
      { icon: '💰', label: '$15,000 - $50,000' },
      { icon: '💰', label: '$50,000+' },
      { icon: '🤔', label: 'Not sure yet' }
    ]
  },
  {
    title: 'Where should I send your free audit?',
    options: []
  }
];

export default function AuditWidget({ darkMode }: AuditWidgetProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (label: string) => {
    const newSelected = [...selected];
    newSelected[currentStep] = label;
    setSelected(newSelected);
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <section id="audit" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-4">
            Free Marketing Audit
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get Your{' '}
            <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
              Free Audit
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Answer 3 quick questions and I'll send you a personalized marketing audit with actionable recommendations — completely free.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto rounded-3xl border p-8 sm:p-10 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200 shadow-2xl'}`}>
          {!submitted ? (
            <>
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[0, 1, 2].map(step => (
                  <div key={step} className="flex-1 flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      step <= currentStep
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white'
                        : darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {step < currentStep ? '✓' : step + 1}
                    </div>
                    {step < 2 && (
                      <div className={`flex-1 h-1 rounded-full ${step < currentStep ? 'bg-violet-500' : darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-bold mb-6">{steps[currentStep].title}</h3>

              {currentStep < 2 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {steps[currentStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt.label)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selected[currentStep] === opt.label
                            ? 'border-violet-500 bg-violet-500/10'
                            : darkMode ? 'border-gray-700 hover:border-gray-600 bg-gray-800/50' : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{opt.icon}</div>
                        <div className="text-sm font-medium">{opt.label}</div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!selected[currentStep]}
                    className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-violet-500/30 transition-all"
                  >
                    Continue →
                  </button>
                </>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Website URL (optional)</label>
                      <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!email || !name}
                    className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-violet-500/30 transition-all"
                  >
                    Get My Free Audit →
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">You're all set!</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'll have your personalized marketing audit ready within 48 hours. Check your email at <strong>{email}</strong>.
              </p>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className="text-sm">
                  <strong>While you wait:</strong> Check out my{' '}
                  <a href="#results" className="text-violet-400 underline">case studies</a> to see the kind of results I deliver.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
