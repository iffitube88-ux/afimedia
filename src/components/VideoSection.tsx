import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="scroll-animate text-5xl md:text-6xl font-black text-white mb-6 opacity-0">
            Meet the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="scroll-animate text-xl text-slate-400 max-w-3xl mx-auto opacity-0 stagger-1">
            Learn about our mission and approach to digital marketing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate relative opacity-0 stagger-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                    
                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl shadow-blue-500/50 group"
                    >
                      <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Welcome to lamaMedia</h3>
                      <p className="text-slate-300">A message from our founder, Irfan Abdul Majid</p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                          2:45
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                          12.5K views
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Video Player (Placeholder - would integrate with actual video) */
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🎥</div>
                      <p className="text-xl">Video Player</p>
                      <p className="text-slate-400 text-sm mt-2">Founder Introduction Video</p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="mt-4 px-6 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
                      >
                        Close Video
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">About lamaMedia</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  In this video, our founder Irfan Abdul Majid shares the story behind lamaMedia, 
                  our mission to help businesses grow through data-driven digital marketing, and our 
                  commitment to delivering exceptional results for every client.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-blue-400 text-2xl mb-2">🎯</div>
                    <div className="text-white font-semibold mb-1">Our Mission</div>
                    <div className="text-slate-400 text-sm">Help businesses scale through data-driven marketing</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-blue-400 text-2xl mb-2">💡</div>
                    <div className="text-white font-semibold mb-1">Our Approach</div>
                    <div className="text-slate-400 text-sm">ROI-focused strategies with transparent reporting</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-blue-400 text-2xl mb-2">🏆</div>
                    <div className="text-white font-semibold mb-1">Our Promise</div>
                    <div className="text-slate-400 text-sm">Deliver measurable results for every client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
