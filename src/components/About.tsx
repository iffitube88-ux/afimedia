import { PROFILE_IMAGE } from '../config';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border overflow-hidden ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="flex flex-col lg:flex-row">
            {/* Image side */}
            <div className="lg:w-2/5 relative">
              <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                <img
                  src={PROFILE_IMAGE}
                  alt="Alex Rivera"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-gray-900/30"></div>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Hey, I'm Alex 👋
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  I'm a freelance digital marketing specialist with 5+ years of experience helping brands 
                  turn their ad spend into predictable, scalable revenue. I've managed over $3.2M in ad 
                  spend across Meta, Google, and TikTok — and I'm obsessed with finding the intersection 
                  of data and creativity.
                </p>
                <p>
                  Before going freelance, I worked in-house at a DTC brand where I scaled their monthly 
                  revenue from $50K to $400K in 18 months. That experience taught me what actually works 
                  (and what doesn't) when it comes to growing a business through digital channels.
                </p>
                <p>
                  I specialize in <strong className={darkMode ? 'text-white' : 'text-gray-900'}>paid ads, SEO, and conversion optimization</strong> — 
                  but I believe the best marketing strategies connect all the dots. That's why I take a 
                  holistic approach, making sure every channel works together to drive real business results.
                </p>
              </div>

              {/* Tools & Platforms */}
              <div className="mt-8">
                <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tools & Platforms I Work With:
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
                  See My Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
