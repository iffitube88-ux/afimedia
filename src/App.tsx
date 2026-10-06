import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculator from './components/Calculator';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AuditWidget from './components/AuditWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Calculator darkMode={darkMode} />
      <CaseStudies darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <AuditWidget darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
