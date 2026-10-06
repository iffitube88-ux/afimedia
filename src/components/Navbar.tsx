import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Services', 'Results', 'Pricing', 'Reviews', 'Audit', 'Career', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-purple-500/5' : 'bg-white/90 backdrop-blur-xl shadow-lg') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/30">
              i
            </div>
            <span className="font-bold text-lg hidden sm:block">iffiMedia</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5">
              Book a Call
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={`lg:hidden border-t ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-xl`}>
          <div className="px-4 py-4 space-y-1">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium ${darkMode ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}>
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-lg text-sm font-medium text-center mt-3">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
