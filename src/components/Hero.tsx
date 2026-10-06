import { useEffect, useState } from 'react';
import { PROFILE_IMAGE } from '../config';

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const targets = [{ set: setCount1, target: 47 }, { set: setCount2, target: 3.2 }, { set: setCount3, target: 150 }];
    const interval = setInterval(() => {
      targets.forEach(t => {
        t.set(prev => {
          if (prev >= t.target) return t.target;
          return prev + (t.target / 60);
        });
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-gray-950"></div>
              </div>
              {/* Profile photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-violet-500/20">
                <img
                  src={PROFILE_IMAGE}
                  alt="Alex Rivera - Digital Marketing Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-full text-xs font-medium text-violet-400 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                🎯 PPC Expert
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-full text-xs font-medium text-cyan-400 shadow-lg animate-bounce" style={{ animationDuration: '3.5s' }}>
                🔍 SEO Pro
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-violet-400">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">I Help Brands</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Scale Revenue
              </span>
              <span className="block">with Data-Driven</span>
              <span className="block">Digital Marketing</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed lg:mb-10">
              Freelance digital marketing specialist focused on paid ads, SEO, and conversion optimization. 
              Turning ad spend into predictable growth for ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
              <a href="#audit" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all hover:-translate-y-1">
                Get Free Marketing Audit →
              </a>
              <a href="#results" className="w-full sm:w-auto px-8 py-4 border border-gray-700 text-gray-300 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-all">
                View Case Studies
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {Math.floor(count1)}+
                </div>
                <div className="text-sm text-gray-500 mt-1">Clients Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  {count2.toFixed(1)}M+
                </div>
                <div className="text-sm text-gray-500 mt-1">Ad Spend Managed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {Math.floor(count3)}%
                </div>
                <div className="text-sm text-gray-500 mt-1">Avg. ROAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-violet-400 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
