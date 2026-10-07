import { useState } from 'react';

export default function ReviewsWidget() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Michael Chen',
      company: 'TechFlow Solutions',
      rating: 5,
      date: '2 weeks ago',
      text: 'lamaMedia transformed our digital presence completely. Their SEO strategy took us from page 5 to position 1 for our main keywords in just 4 months. The team is responsive, data-driven, and truly cares about results. Highly recommended!',
      avatar: 'MC'
    },
    {
      name: 'Sarah Johnson',
      company: 'Pacific Coast Retail',
      rating: 5,
      date: '1 month ago',
      text: 'Working with lamaMedia has been a game-changer for our e-commerce business. They reduced our customer acquisition cost by 60% while scaling our monthly revenue to $200K. Their PPC expertise is unmatched.',
      avatar: 'SJ'
    },
    {
      name: 'David Rodriguez',
      company: 'Summit Healthcare',
      rating: 5,
      date: '1 month ago',
      text: 'The local SEO work lamaMedia did for our dental practice was incredible. We went from invisible in local search to generating 45+ new patients monthly. Their attention to detail and strategic approach is exceptional.',
      avatar: 'DR'
    },
    {
      name: 'Emily Thompson',
      company: 'Urban Style Co.',
      rating: 5,
      date: '2 months ago',
      text: 'lamaMedia\'s social media strategy helped us achieve 12M+ views on TikTok in the first month. Their content creation and community management skills are top-notch. Our brand awareness has skyrocketed!',
      avatar: 'ET'
    },
    {
      name: 'Robert Kim',
      company: 'CloudSync Platform',
      rating: 5,
      date: '2 months ago',
      text: 'As a B2B SaaS startup, we needed a marketing partner who understood our space. lamaMedia delivered beyond expectations, helping us scale from $50K to $400K MRR in 6 months with their full-funnel Google Ads strategy.',
      avatar: 'RK'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
            What Clients <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
            Real reviews from real clients
          </p>
        </div>

        {/* Google Rating */}
        <div className="scroll-animate flex justify-center mb-12 opacity-0 stagger-2">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 flex items-center gap-6">
            <div className="text-5xl">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-white">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
              <div className="text-slate-400 text-sm">Based on 47 reviews on Google</div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="scroll-animate max-w-4xl mx-auto opacity-0 stagger-3">
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 md:p-12">
            <div className="absolute top-8 left-8 text-6xl text-blue-500/20">"</div>
            
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              <p className="text-xl text-slate-200 leading-relaxed mb-8 italic">
                "{reviews[currentReview].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {reviews[currentReview].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{reviews[currentReview].name}</div>
                    <div className="text-slate-400 text-sm">{reviews[currentReview].company}</div>
                    <div className="text-slate-500 text-xs mt-1">{reviews[currentReview].date}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevReview}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentReview === idx ? 'bg-blue-500 w-8' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
