import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20 z-40 p-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-slate-300 text-sm">
            🍪 We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <a href="/privacy-policy" className="text-blue-400 hover:text-cyan-400 ml-1 underline">Learn more</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-6 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-all"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
