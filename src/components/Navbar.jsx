import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '/@/contexts/AppContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
    }
  };

   const navItems = [
    { id: 'home', label: t.inicio },
    { id: 'about', label: t.sobre },
    { id: 'projects', label: t.projetos },
    { id: 'skills', label: t.habilidades },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? (theme === 'dark' 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200/50'
        ) : 'bg-transparent'
    }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo G japonês com fonte brush */}
          <motion.div
            className="cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            <motion.span 
            className={`text-5xl font-bold ${
              theme === 'dark' 
                ? 'text-white group-hover:text-gray-100' 
                : 'text-gray-900 group-hover:text-gray-700'
            } transition-colors duration-300 select-none transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}              style={{
                fontFamily: '"Caveat Brush", "Kalam", cursive',
                fontWeight: 600,
                textShadow: theme === 'dark' ? 
                '0 3px 6px rgba(0,0,0,0.4), 0 1px 3px rgba(168, 85, 247, 0.3)' :
                '0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(168, 85, 247, 0.2)',                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                lineHeight: 0.8
              }}
              whileHover={{
                textShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 25px rgba(168, 85, 247, 0.5), 0 3px 6px rgba(0,0,0,0.4)'
              }}
            > 
              G
            </motion.span>
          </motion.div>

         {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Items */}
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
             {/* Theme Toggle */}
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

            {/* Language Toggle > fix*/}
            <motion.button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark' ? 
                  'bg-gray-800 hover:bg-gray-700' : 
                  'bg-gray-200 hover:bg-gray-300'
              } flex items-center space-x-1`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <span className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {language === 'pt' ? '\uD83C\uDDFA\uD83C\uDDF8' : '\uD83C\uDDE7\uD83C\uDDF7'}
              </span>
              <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language === 'pt' ? 'EN' : 'PT'}
              </span>
            </motion.button>
            
            {/* Botão de Contato com neon roxo > curriculo */}
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

          {/* Menu Mobile  - em desenvolvimento*/}
          <div className="md:hidden">
            <motion.button
              className="text-purple-200 p-2 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
              whileHover={{
                textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}