export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-slate-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Here are some helpful links:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/" className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all text-left group">
              <div className="text-blue-400 text-2xl mb-2">🏠</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition">Home</div>
              <div className="text-slate-400 text-sm">Return to homepage</div>
            </a>
            <a href="#services" className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all text-left group">
              <div className="text-blue-400 text-2xl mb-2">🎯</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition">Services</div>
              <div className="text-slate-400 text-sm">Explore our services</div>
            </a>
            <a href="#results" className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all text-left group">
              <div className="text-blue-400 text-2xl mb-2">📈</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition">Case Studies</div>
              <div className="text-slate-400 text-sm">View our results</div>
            </a>
            <a href="#contact" className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all text-left group">
              <div className="text-blue-400 text-2xl mb-2">💬</div>
              <div className="text-white font-semibold group-hover:text-blue-400 transition">Contact</div>
              <div className="text-slate-400 text-sm">Get in touch</div>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Go Home
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all">
            Contact Support
          </a>
        </div>

        <div className="mt-12 text-slate-500 text-sm">
          <p>If you believe this is an error, please contact us at <a href="mailto:hello@lamamedia.com" className="text-blue-400 hover:text-cyan-400">hello@lamamedia.com</a></p>
        </div>
      </div>
    </div>
  );
}
