import { useState, useEffect } from 'react';
import VerticalJapaneseText from './VerticalJapaneseText';
import { useApp } from '/@/contexts/AppContext';

export default function SectionAwareJapaneseText({ side }) {
  const [isBlackBackground, setIsBlackBackground] = useState(true);
  const { theme } = useApp();

  useEffect(() => {
    const updateBackgroundColor = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let currentBackgroundIsBlack = true;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          
          if (isVisible) {
            if (theme === 'dark') {
              currentBackgroundIsBlack = ['home', 'about', 'projects'].includes(sectionId);
            } else {
              // moodo claro
              currentBackgroundIsBlack = !['home','about', 'skills'].includes(sectionId);
            }
            break;
          }
        }
      }

      setIsBlackBackground(currentBackgroundIsBlack);
    };

    updateBackgroundColor();
    window.addEventListener('scroll', updateBackgroundColor);
    
    return () => {
      window.removeEventListener('scroll', updateBackgroundColor);
    };
  }, [theme]);

  return <VerticalJapaneseText side={side} isBlackBackground={isBlackBackground} />;
}