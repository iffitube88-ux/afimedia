interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-16 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-violet-500/50 bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IM</span>
              </div>
              <span className="font-bold text-lg">IffiMedia</span>
            </div>
            <p className={`max-w-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Digital marketing agency helping ambitious brands scale revenue through data-driven paid ads, SEO, and conversion optimization. Founded by Irfan Abdul Majid.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Instagram'].map(platform => (
                <a key={platform} href="#" className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'}`}>
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Case Studies', 'Pricing', 'Reviews', 'Free Audit', 'Career'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Paid Ads (PPC)', 'SEO & Content', 'Social Media', 'Email Marketing', 'Marketing Audits'].map(service => (
                <li key={service}>
                  <a href="#services" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2026 IffiMedia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>Privacy Policy</a>
            <a href="#" className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
