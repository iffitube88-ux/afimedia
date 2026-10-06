import { useState } from 'react';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Bloom Skincare',
    text: 'Alex completely transformed our paid ads strategy. We went from burning money on Facebook to a predictable 4.8x ROAS in just 6 weeks. The level of data-driven decision making was unlike any marketer we\'ve worked with before.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder, FitPro Coaching',
    text: 'The social media strategy Alex built for us generated 89K new followers and completely changed our brand visibility. Our course sales tripled in the first quarter. Absolutely worth every penny.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Dr. Emily Torres',
    role: 'Owner, Torres Dental',
    text: 'Our local SEO was non-existent before Alex. Now we rank #1 for 12 high-value keywords and new patient inquiries have increased by 45%. The ROI on this investment was clear within the first month.',
    rating: 5,
    avatar: '👩‍⚕️'
  },
  {
    name: 'James Wright',
    role: 'CMO, TechScale SaaS',
    text: 'Alex\'s Google Ads expertise helped us reduce our CAC by 60% while scaling to $45K MRR. The strategic approach to full-funnel campaigns was game-changing for our startup.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Lisa Park',
    role: 'Owner, Urban Eats Restaurant',
    text: 'The TikTok content strategy was incredible. We went from zero presence to viral videos with 12M+ views. Foot traffic increased 22% and our brand is now recognized across the city.',
    rating: 5,
    avatar: '👩‍🍳'
  },
  {
    name: 'David Kim',
    role: 'Director, GreenLeaf Organics',
    text: 'The email marketing flows Alex set up in Klaviyo now generate 47% of our total revenue. The abandoned cart sequence alone recovered $12K in the first month. Exceptional work.',
    rating: 5,
    avatar: '👨‍🔬'
  }
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            What Clients{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't take my word for it — here's what business owners say after working with me.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={`max-w-3xl mx-auto rounded-3xl border p-8 sm:p-12 mb-12 ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            "{testimonials[activeIdx].text}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl">
              {testimonials[activeIdx].avatar}
            </div>
            <div>
              <div className="font-bold">{testimonials[activeIdx].name}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonials[activeIdx].role}</div>
            </div>
          </div>
        </div>

        {/* Testimonial selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeIdx === idx
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30'
                  : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{t.avatar}</span>
              <span className="hidden sm:inline">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
