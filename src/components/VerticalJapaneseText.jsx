import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const randomChars = [
  '創', '造', '性', '革', '新', '技', '術', '継', '続', '的', 'な', '進', '化',
  '未', '来', 'を', '築', 'く', '情', '熱', '成', '長', '挑', '戦', '協', '力',
  '学', '習', '品', '質', '効', '率', '開', '発', '設', '計', '実', '装',
  '最', '適', '化', '美', '学', '芸', '術', '完', '璧', '精', '神', '魂',
  '心', '愛', '希', '望', '夢', '光', '力', '強', '速', '智', '慧', '知'
];

const finalWords = [
  ['継', '続', '的', 'な', '進', '化'], // Evolução contínua
  ['創', '造', '性'],                   // Criatividade
  ['革', '新'],                         // Inovação
  ['技', '術'],                         // Habilidade
  ['未', '来', 'を', '築', 'く'],       // Construir o futuro
  ['情', '熱'],                         // Paixão
  ['成', '長'],                         // Crescimento
  ['品', '質'],                         // Qualidade
];

export default function VerticalJapaneseText({ 
  side = "left", 
  isBlackBackground = true 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayChars, setDisplayChars] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingCharIndex, setAnimatingCharIndex] = useState(-1);

  useEffect(() => {
    const firstWord = finalWords[0];
    setDisplayChars([...firstWord]);
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      if (isAnimating) return;

      let newWordIndex;
      do {
        newWordIndex = Math.floor(Math.random() * finalWords.length);
      } while (newWordIndex === currentWordIndex && finalWords.length > 1);
      
      const targetWord = finalWords[newWordIndex];
      setCurrentWordIndex(newWordIndex);
      setIsAnimating(true);

      const maxLength = Math.max(displayChars.length, targetWord.length);
      let workingChars = [...displayChars];
      
      while (workingChars.length < targetWord.length) {
        workingChars.push(randomChars[Math.floor(Math.random() * randomChars.length)]);
      }
      
      if (workingChars.length > targetWord.length) {
        workingChars = workingChars.slice(0, targetWord.length);
      }

      setDisplayChars(workingChars);

      let currentCharIndex = 0;
      
      const animateNextChar = () => {
        if (currentCharIndex >= targetWord.length) {
          setDisplayChars([...targetWord]);
          setIsAnimating(false);
          setAnimatingCharIndex(-1);
          return;
        }

        setAnimatingCharIndex(currentCharIndex);
        let animationCount = 0;
        const maxAnimations = 3 + Math.random() * 3; 
        const charInterval = setInterval(() => {
          setDisplayChars(prev => {
            const newChars = [...prev];
            newChars[currentCharIndex] = randomChars[Math.floor(Math.random() * randomChars.length)];
            return newChars;
          });

          animationCount++;

          if (animationCount >= maxAnimations) {
            clearInterval(charInterval);
            
            setDisplayChars(prev => {
              const newChars = [...prev];
              newChars[currentCharIndex] = targetWord[currentCharIndex];
              return newChars;
            });

            currentCharIndex++;
            
        
            setTimeout(animateNextChar, 30); 
          }
        }, 15); 
      };

      setTimeout(animateNextChar, 50); 
    };

    const initialDelay = setTimeout(startAnimation, 500); 

    const interval = setInterval(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, 2000 + Math.random() * 2000); 

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [currentWordIndex, displayChars.length, isAnimating]);

  const currentWord = finalWords[currentWordIndex] || finalWords[0];
  
  const textColor = isBlackBackground ? 'text-amber-100/25' : 'text-stone-800/25';
  const glowColor = isBlackBackground ? 'text-amber-400/60' : 'text-amber-700/55';

  return (
    <div className={`fixed ${side === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-10 pointer-events-none select-none`}>
      <div className="flex flex-col space-y-2">
        {displayChars.map((char, index) => (
          <motion.div
            key={`${currentWordIndex}-${index}`}
            className={`
              text-5xl md:text-7xl lg:text-8xl font-black
              ${animatingCharIndex === index ? glowColor : textColor}
              transition-all duration-75
            `}
            animate={animatingCharIndex === index ? {
              scale: [1, 1.15, 1],
              opacity: isBlackBackground ? [0.25, 0.7, 0.25] : [0.25, 0.65, 0.25],
            } : {
              scale: 1,
              opacity: isBlackBackground ? 0.25 : 0.25
            }}
            transition={{
              duration: 0.015,
              repeat: animatingCharIndex === index ? Infinity : 0,
              repeatType: "loop"
            }}
            style={{
              fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
              fontWeight: 900,
              color: isBlackBackground ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
              textShadow: animatingCharIndex === index 
                ? (isBlackBackground 
                    ? '0 0 15px rgba(30, 64, 175, 0.7), 0 0 30px rgba(30, 64, 175, 0.4), 0 0 45px rgba(30, 64, 175, 0.2)' 
                    : '0 0 10px rgba(29, 78, 216, 0.6), 0 0 20px rgba(29, 78, 216, 0.3)')
                : 'none',
              filter: animatingCharIndex === index ? 'brightness(1.5)' : 'brightness(1)'
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
      {/* scanzin animado */}
      {isAnimating && (
        <motion.div
          className={`absolute -left-3 -right-3 h-1 ${
            isBlackBackground ? 'bg-amber-400/50 shadow-xl shadow-amber-400/40' : 'bg-amber-700/45 shadow-xl shadow-amber-700/35'
          } rounded-full`}
          animate={{
            y: [animatingCharIndex * 85 - 10, animatingCharIndex * 85 + 95],
            opacity: [0, 1, 1, 0],
            scaleX: [0.5, 1, 1, 0.5]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`particle-${animatingCharIndex}-${i}`}
              className={`absolute w-2 h-2 rounded-full ${
                isBlackBackground ? 'bg-amber-400/70 shadow-lg shadow-amber-400/50' : 'bg-amber-700/60 shadow-lg shadow-amber-700/40'
              }`}
              style={{
                left: side === 'left' ? '100%' : '0%',
                top: `${animatingCharIndex * 85 + 30 + i * 15}px`
              }}
              animate={{
                x: [(side === 'left' ? 0 : 0), (side === 'left' ? 25 : -25), (side === 'left' ? 0 : 0)],
                y: [0, -15 + i * 8, 0],
                opacity: [0, 0.9, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
