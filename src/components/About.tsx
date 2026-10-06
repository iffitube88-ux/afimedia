interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border overflow-hidden ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
                About iffiMedia
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Built by Irfan Abdul Majid 👋
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  <strong className={darkMode ? 'text-white' : 'text-gray-900'}>iffiMedia</strong> is a digital marketing agency with 5+ years of experience helping brands 
                  turn their ad spend into predictable, scalable revenue. We've managed over $3.2M in ad 
                  spend across Meta, Google, and TikTok — and we're obsessed with finding the intersection 
                  of data and creativity.
                </p>
                <p>
                  Founded by <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Irfan Abdul Majid</strong> (known as "Iffi"), 
                  we started after scaling a DTC brand's monthly revenue from $50K to $400K in 18 months. 
                  That experience taught us what actually works (and what doesn't) when it comes to growing 
                  a business through digital channels.
                </p>
                <p>
                  At iffiMedia, we specialize in <strong className={darkMode ? 'text-white' : 'text-gray-900'}>paid ads, SEO, and conversion optimization</strong> — 
                  but we believe the best marketing strategies connect all the dots. That's why we take a 
                  holistic approach, making sure every channel works together to drive real business results.
                </p>
              </div>

              {/* Tools & Platforms */}
              <div className="mt-8">
                <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tools & Platforms We Work With:
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Meta Ads', 'Google Ads', 'TikTok Ads', 'Klaviyo', 'GA4', 'Looker Studio', 'SEMrush', 'Ahrefs', 'Notion', 'Shopify'].map(tool => (
                    <span key={tool} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'}`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5">
                  Let's Work Together →
                </a>
                <a href="#results" className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${darkMode ? 'border border-gray-700 text-gray-300 hover:bg-white/5' : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                  See Our Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
