import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); 
    }
  };

  const navItems = [
    { id: 'home', label: t.inicio },
    { id: 'about', label: t.sobre },
    { id: 'projects', label: t.projetos },
    { id: 'skills', label: t.habilidades },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden ${
          isScrolled ? (theme === 'dark' 
            ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200/50'
          ) : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 w-full">
          <div className="flex items-center justify-between">
            <motion.div
              className="cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
            >
              <motion.span 
                className={`text-3xl md:text-4xl font-bold ${
                  theme === 'dark' 
                    ? 'text-white group-hover:text-gray-100' 
                    : 'text-gray-900 group-hover:text-gray-700'
                } transition-colors duration-300 select-none transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}
                style={{
                  fontFamily: '"Edu VIC WA NT Hand Pre", "Caveat Brush", "Kalam", cursive, sans-serif',
                  fontWeight: 600,
                  textShadow: theme === 'dark' ? 
                    '0 3px 6px rgba(0,0,0,0.4), 0 1px 3px rgba(168, 85, 247, 0.3)' :
                    '0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(168, 85, 247, 0.2)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  lineHeight: 0.8,
                  color: theme === 'dark' ? '#ffffff' : '#1f2937'
                }}
                whileHover={{
                  textShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 25px rgba(168, 85, 247, 0.5), 0 3px 6px rgba(0,0,0,0.4)'
                }}
              > 
                g
              </motion.span>
            </motion.div>

            {/* menu desk */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    activeSection === item.id ? 
                      'text-purple-300' : 
                      (theme === 'dark' 
                        ? 'text-gray-300 hover:text-purple-200' 
                        : 'text-gray-700 hover:text-purple-600'
                      )
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-gray-500"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              {/* troca tema */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark' ? 
                    'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 
                    'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.button>

              {/* troca linguagem */}
              <motion.button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark' ? 
                    'bg-gray-800 hover:bg-gray-700' : 
                    'bg-gray-200 hover:bg-gray-300'
                } flex items-center space-x-2`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              >
                <svg 
                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                  />
                </svg>
                <span className={`text-xs font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {language.toUpperCase()}
                </span>
              </motion.button>
              
              {/* botao de contato */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50"
                style={{
                  boxShadow: '0 0 8px rgba(168, 85, 247, 0.3), 0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.4), 0 4px 8px rgba(0,0,0,0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.contato}
              </motion.button>
            </div>

            {/* botao menu mob */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'text-purple-200 hover:text-white hover:bg-black-800' 
                    : 'text-purple-600 hover:text-purple-800 hover:bg-black-100'
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
                }}
              >
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* menuu mobi */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* menu cont*/}
            <motion.div
              className={`absolute top-20 right-4 left-4 ${
                theme === 'dark' 
                  ? 'bg-black-900/95 border-gray-700' 
                  : 'bg-white/95 border-black-200'
              } backdrop-blur-md rounded-2xl border shadow-2xl overflow-hidden`}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6 space-y-4">
                {/* itens do nav */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? (theme === 'dark' 
                            ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                            : 'bg-purple-100 text-purple-700 border border-purple-300/50')
                        : (theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-800 hover:text-purple-200'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600')
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* divider */}
                <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} my-4`} />

                {/* act */}
                <div className="flex justify-between items-center gap-4">
                  {/* troca tema */}
                  <motion.button
                    onClick={toggleTheme}
                    className={`flex-1 p-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      theme === 'dark' ?
                        'bg-[#0D0D0D] hover:bg-[#1A1A1A] text-yellow-400 border border-purple-800/20' :
                        'bg-white hover:bg-purple-50 text-gray-800 border border-purple-100'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === 'dark' ? '☀️' : '🌙'}
                    <span className="text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </motion.button>

                  {/* troca linguagem */}
                  <motion.button
                    onClick={toggleLanguage}
                    className={`flex-1 p-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      theme === 'dark' ?
                        'bg-[#0D0D0D] hover:bg-[#1A1A1A] border border-purple-800/20' :
                        'bg-white hover:bg-purple-50 border border-purple-100'
                      } flex items-center space-x-2`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🌐
                    <span className={`text-xs font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {language.toUpperCase()}
                    </span>
                  </motion.button>
                </div>

                {/* contat */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-medium transition-all duration-300 border border-purple-500/30"
                  style={{
                    boxShadow: '0 0 8px rgba(168, 85, 247, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t.contato}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}