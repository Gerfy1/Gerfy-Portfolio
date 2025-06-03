import { useState, useEffect } from "react";
import { Card, CardContent } from "/@/components/ui/card";
import { Button } from "/@/components/ui/button";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Navbar from "./Navbar";
import SectionAwareJapaneseText from "./SectionAwareJapaneseText";
import { useApp } from '/@/contexts/AppContext';


const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};


const techCategories = {
  languages: {
    title: "Linguagens",
    icon: "💻",
    techs: [
      { name: "Java", icon: "☕", color: "from-orange-500 to-red-600" },
      { name: "Kotlin", icon: "🎯", color: "from-purple-500 to-indigo-600" },
      { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
      { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
      { name: "Python", icon: "🐍", color: "from-green-400 to-blue-600" },
      { name: "PHP", icon: "🌐", color: "from-purple-600 to-blue-600" }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: "🛠️",
    techs: [
      { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-700" },
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-600" },
      { name: "Spring", icon: "🍃", color: "from-green-500 to-green-700" },
      { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-800" },
      { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-teal-600" },
      { name: "Bootstrap", icon: "📱", color: "from-purple-500 to-purple-700" },
      { name: "WordPress", icon: "📝", color: "from-blue-600 to-gray-700" },
      { name: "NPM", icon: "📦", color: "from-red-500 to-red-700" },
      { name: "Yarn", icon: "🧶", color: "from-blue-500 to-cyan-600" },
      { name: "JWT", icon: "🔐", color: "from-gray-600 to-black" }
    ]
  },
  databases: {
    title: "Banco de Dados & ORM",
    icon: "🗄️",
    techs: [
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-700" },
      { name: "MySQL", icon: "🐬", color: "from-orange-500 to-yellow-600" },
      { name: "Hibernate", icon: "💾", color: "from-amber-600 to-orange-700" },
      { name: "phpMyAdmin", icon: "🔧", color: "from-blue-500 to-purple-600" }
    ]
  },
  cloud: {
    title: "Nuvem",
    icon: "☁️",
    techs: [
      { name: "Google Cloud", icon: "🌥️", color: "from-blue-500 to-green-500" },
      { name: "AWS", icon: "🌩️", color: "from-orange-500 to-yellow-500" },
      { name: "Oracle Cloud", icon: "🔴", color: "from-red-600 to-red-800" }
    ]
  },
  hosting: {
    title: "Hosting & SaaS",
    icon: "🌐",
    techs: [
      { name: "Oracle", icon: "🔴", color: "from-red-600 to-red-800" },
      { name: "Vercel", icon: "▲", color: "from-gray-800 to-black" },
      { name: "Render", icon: "🚀", color: "from-purple-600 to-pink-600" },
      { name: "Cloudflare", icon: "🌩️", color: "from-orange-500 to-yellow-500" },
      { name: "Hostinger", icon: "🏠", color: "from-purple-500 to-blue-600" },
      { name: "GitHub Pages", icon: "📄", color: "from-gray-700 to-gray-900" }
    ]
  },
  devops: {
    title: "CI/CD & VCS",
    icon: "🔄",
    techs: [
      { name: "Git", icon: "📦", color: "from-orange-600 to-red-600" },
      { name: "GitHub", icon: "🐱", color: "from-gray-700 to-gray-900" },
      { name: "GitLab", icon: "🦊", color: "from-orange-500 to-red-500" },
      { name: "Gradle", icon: "⚙️", color: "from-green-600 to-blue-600" }
    ]
  },
  tools: {
    title: "Ferramentas",
    icon: "🔧",
    techs: [
      { name: "Figma", icon: "🎭", color: "from-purple-500 to-pink-500" },
      { name: "Postman", icon: "📮", color: "from-orange-500 to-red-500" },
      { name: "Notion", icon: "📝", color: "from-gray-600 to-gray-800" },
      { name: "Trello", icon: "📋", color: "from-blue-500 to-blue-700" },
      { name: "Insomnia", icon: "😴", color: "from-purple-600 to-indigo-700" },
      { name: "Twilio", icon: "📞", color: "from-red-500 to-pink-600" },
      { name: "Hugo", icon: "⚡", color: "from-pink-500 to-rose-600" },
      { name: "Swagger UI", icon: "📊", color: "from-green-500 to-blue-600" }
    ]
  }
};

const allTechs = Object.values(techCategories).reduce((acc, category) => {
  category.techs.forEach(tech => {
    acc[tech.name] = tech;
  });
  return acc;
}, {});

export default function Portfolio() {
  const [showTextParticles, setShowTextParticles] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedCharacters, setTypedCharacters] = useState([]);
  const { language, theme, t } = useApp();

  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: t.typedStrings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      contentType: 'html',
      onBegin: () => {
        setIsTyping(true);
        setShowTextParticles(true);
      },
      onComplete: () => {
        setIsTyping(false);
      },
      onTypingPaused: () => {
        setIsTyping(false);
      },
      onTypingResumed: () => {
        setIsTyping(true);
      }
    });

    const typedElement = document.querySelector('#typed');
    if (typedElement) {
      let lastLength = 0;
      
      const observer = new MutationObserver(() => {
        const currentLength = typedElement.textContent.length;
        
        if (currentLength > lastLength) {
          createCharacterParticle(currentLength);
        }
        
        lastLength = currentLength;
      });
      


      observer.observe(typedElement, {
        childList: true,
        subtree: true,
        characterData: true
      });


    return () => {
        typed.destroy();
        observer.disconnect();
      };
    }

    return () => typed.destroy();
  }, [language]);

  const createCharacterParticle = (position) => {
    const typedElement = document.querySelector('#typed');
    if (!typedElement) return;

    const rect = typedElement.getBoundingClientRect();
    const containerRect = typedElement.parentElement.getBoundingClientRect();
    
    const relativeX = rect.right - containerRect.left;
    const relativeY = rect.top - containerRect.top + rect.height / 2;
    
    const particles = [];
    
    for (let i = 0; i < 3; i++) {
      const particle = {
        id: `${position}-${i}-${Date.now()}-${Math.random()}`,
        x: relativeX + (Math.random() - 0.5) * 20,
        y: relativeY + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        size: 1 + Math.random() * 2
      };
      particles.push(particle);
    }
    
    setTypedCharacters(prev => [...prev, ...particles]);
    
    setTimeout(() => {
      setTypedCharacters(prev => 
        prev.filter(p => !particles.some(newP => newP.id === p.id))
      );
    }, 2000);
  };

  return (
    <main className={`min-h-screen font-sans overflow-x-hidden ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>      <Navbar />
      
      <SectionAwareJapaneseText side="left" />
      <SectionAwareJapaneseText side="right" />
      
        <section id="home" className={`relative ${
        theme === 'dark' ? 'bg-black text-purple-100' : 'bg-white text-gray-900'
      } min-h-screen flex flex-col items-center justify-center text-center px-4`}>
        
        <div className={`absolute inset-0 pointer-events-none ${
          theme === 'dark' ? 'opacity-20' : 'opacity-10'
        }`} style={{
          backgroundImage: theme === 'dark' ? `
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 70%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 70%)
          ` : `
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.05) 0%, transparent 70%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 70%)
          `,
          backgroundSize: '400px 400px, 600px 600px'
        }}></div>
        
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: theme === 'dark' ? [
              "radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 60%)"
            ] : [
              "radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.10) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.06) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div 
          className="z-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
             <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[200px] flex items-center">
              <span 
                id="typed" 
                className={`text-transparent bg-clip-text ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-200 via-gray-200 to-purple-300'
                    : 'bg-gradient-to-r from-purple-600 via-gray-800 to-black'
                }`}
              />
            </h1>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {typedCharacters.map((particle) => (
                <motion.div
                  key={particle.id}
                  className={`absolute rounded-full ${
                    theme === 'dark' ? 'bg-white/90' : 'bg-purple-600/90'
                  }`}
                  style={{
                    left: particle.x,
                    top: particle.y,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    boxShadow: theme === 'dark' 
                      ? '0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(255, 255, 255, 0.6), 0 0 24px rgba(255, 255, 255, 0.3)'
                      : '0 0 8px rgba(168, 85, 247, 0.9), 0 0 16px rgba(168, 85, 247, 0.6), 0 0 24px rgba(168, 85, 247, 0.3)'
                  }}
                  initial={{
                    scale: 0,
                    opacity: 1,
                    x: 0,
                    y: 0
                  }}
                  animate={{
                    scale: [0, 1.5, 1, 0],
                    opacity: [1, 0.8, 0.4, 0],
                    x: particle.vx * 25,
                    y: particle.vy * 35
                  }}
                  transition={{
                    duration: 1.8,
                    ease: "easeOut"
                  }}
                />
              ))}
            {isTyping && (
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg"
                animate={{
                  boxShadow: theme === 'dark' ? [
                    '0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 0 40px rgba(255, 255, 255, 0.6)',
                    '0 0 60px rgba(255, 255, 255, 0.8)',
                    '0 0 40px rgba(255, 255, 255, 0.6)',
                    '0 0 20px rgba(255, 255, 255, 0.1)'
                  ] : [
                    '0 0 20px rgba(168, 85, 247, 0.1)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 60px rgba(168, 85, 247, 0.8)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 20px rgba(168, 85, 247, 0.1)'
                  ]
                }}
                transition={{
                  duration: 1, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            </div>
          </div>
                
            
           <motion.p 
            className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } text-lg md:text-xl max-w-2xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {t.welcome}
          </motion.p>
          
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.h2 
              className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-400 via-purple-200 to-gray-300'
                  : 'bg-gradient-to-r from-purple-600 via-purple-800 to-gray-700'
              } tracking-wider`}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
                textShadow: theme === 'dark' 
                  ? '0 0 20px rgba(168, 85, 247, 0.3)'
                  : '0 0 15px rgba(168, 85, 247, 0.4)'
              }}
            >
              {t.tagline}
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className={`w-6 h-10 border-2 ${
              theme === 'dark' ? 'border-purple-500' : 'border-purple-600'
            } rounded-full mx-auto flex justify-center`}>
              <motion.div 
                className={`w-1 h-3 ${
                  theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                } rounded-full mt-2`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  boxShadow: theme === 'dark' 
                    ? '0 0 8px rgba(168, 85, 247, 0.6), 0 0 16px rgba(168, 85, 247, 0.4)'
                    : '0 0 8px rgba(168, 85, 247, 0.8), 0 0 16px rgba(168, 85, 247, 0.6)'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className={`relative ${
        theme === 'dark' ? 'bg-purple-950 text-purple-100' : 'bg-gray-50 text-gray-900'
      } py-20 px-6`}>
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
             {t.aboutTitle} <span className={`text-transparent bg-clip-text ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-gray-300'
                : 'bg-gradient-to-r from-purple-600 to-gray-700'
            }`}>{t.aboutTitleHighlight}</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeInUp}
          >
           <div className="space-y-6">
              <motion.p 
                className={`text-lg ${
                  theme === 'dark' ? 'text-purple-200' : 'text-gray-700'
                } leading-relaxed`}
                variants={fadeInUp}
              >
                {t.aboutText1}
              </motion.p>
              <motion.p 
                className={`text-lg ${
                  theme === 'dark' ? 'text-purple-200' : 'text-gray-700'
                } leading-relaxed`}
                variants={fadeInUp}
              >
               {t.aboutText2}
              </motion.p>
              <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
                {t.traits.map((trait, index) => (
                  <motion.span 
                    key={trait} 
                    className={`px-4 py-2 ${
                      theme === 'dark' 
                        ? 'bg-purple-800/50 border-purple-600/50 text-purple-200 hover:shadow-purple-500/50'
                        : 'bg-purple-100 border-purple-300/50 text-purple-800 hover:shadow-purple-400/30'
                    } border rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: theme === 'dark' 
                        ? '0 4px 20px rgba(168, 85, 247, 0.3), 0 0 8px rgba(168, 85, 247, 0.2)'
                        : '0 4px 20px rgba(168, 85, 247, 0.2), 0 0 8px rgba(168, 85, 247, 0.1)'
                    }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                       background: theme === 'dark' ? `conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        rgba(255, 255, 255, 0.4) 10deg,
                        rgba(255, 255, 255, 0.8) 20deg,
                        rgba(255, 255, 255, 0.4) 30deg,
                        transparent 40deg,
                        transparent 320deg,
                        rgba(255, 255, 255, 0.4) 330deg,
                        rgba(255, 255, 255, 0.8) 340deg,
                        rgba(255, 255, 255, 0.4) 350deg,
                        transparent 360deg
                      )` : `conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        rgba(168, 85, 247, 0.4) 10deg,
                        rgba(168, 85, 247, 0.8) 20deg,
                        rgba(168, 85, 247, 0.4) 30deg,
                        transparent 40deg,
                        transparent 320deg,
                        rgba(168, 85, 247, 0.4) 330deg,
                        rgba(168, 85, 247, 0.8) 340deg,
                        rgba(168, 85, 247, 0.4) 350deg,
                        transparent 360deg
                      )`,
                      padding: '3px'
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className={`w-full h-full rounded-2xl ${
                      theme === 'dark' ? 'bg-purple-950' : 'bg-white'
                    }`}></div>                 
                     </motion.div>

                   <div className={`absolute inset-1 rounded-2xl overflow-hidden ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-800 to-purple-900'
                      : 'bg-gradient-to-br from-gray-100 to-purple-100'
                  }`}>
                    <img 
                      src="../public/110788311.jpeg" 
                      alt={t.aboutImageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    <div 
                      className={`w-full h-full flex items-center justify-center ${
                        theme === 'dark' ? 'text-purple-100' : 'text-purple-900'
                      } text-6xl font-bold`}
                      style={{
                        display: 'none',
                        fontFamily: '"Caveat Brush", "Kalam", cursive'
                      }}
                    >
                      G
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(
                        circle at center,
                        rgba(168, 85, 247, 0.1) 0%,
                        transparent 70%
                      )`
                    }}
                  />

                  <div
                    className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(
                        circle at center,
                        rgba(168, 85, 247, ${theme === 'dark' ? '0.1' : '0.05'}) 0%,
                        transparent 70%
                      )`
                    }}
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl -z-10 blur-xl opacity-50"
                  style={{
                    background: `linear-gradient(
                      45deg,
                      rgba(168, 85, 247, ${theme === 'dark' ? '0.3' : '0.2'}),
                      rgba(139, 92, 246, ${theme === 'dark' ? '0.3' : '0.2'}),
                      rgba(124, 58, 237, ${theme === 'dark' ? '0.3' : '0.2'})
                    )`
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className={`relative ${
        theme === 'dark' ? 'bg-gray-900 text-purple-100' : 'bg-white text-gray-900'
      } py-20 px-6`}>        
      <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
          >
            {t.projectsTitle} <span className={`text-transparent bg-clip-text ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-gray-300'
                : 'bg-gradient-to-r from-purple-600 to-gray-700'
            }`}>{t.projectsTitleHighlight}</span>
          </motion.h2>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                id: 1,
                title: t.projects.forumhub.title,
                description: t.projects.forumhub.description,
                tech: ["Java", "Spring", "PostgreSQL","Swagger UI", "Git"],
                color: "from-purple-600 to-white",
                status: "completed",
                github: "https://github.com/Gerfy1/ForumHub",
                demo: null
              },
              {
                id: 2,
                title: t.projects.medapi.title,
                description: t.projects.medapi.description,
                tech: ["Java", "Spring", "MySQL", "Swagger UI", "Git", "Trello", "Figma"],
                color: "from-purple-600 to-white",
                status: "completed",
                github: "https://github.com/Gerfy1/MedAPI",
                demo: null
              },
              {
               id: 3,
                title: t.projects.fipeapp.title,
                description: t.projects.fipeapp.description,
                tech: ["Java", "Insomnia", "Swagger UI", "Git", "Notion"],
                color: "from-purple-700 to-white",
                status: "completed",
                github: "https://github.com/Gerfy1/FipeAPP",
                demo: null
              },
              {
                id: 4,
                title: t.projects.jobsMemory.title,
                description: t.projects.jobsMemory.description,
                tech: ["Java","Spring","TypeScript", "Angular", "MySQL","Git", "Docker", "Figma", "Vercel", "Render"],
                color: "from-purple-700 to-white",
                status: "inDevelopment",
                github: "https://github.com/geraldo/jobs-memory",
                demo: "https://login-angular-memory.vercel.app/login"
              },
              {
                id: 5,
                title: t.projects.managementSystem.title,
                description: t.projects.managementSystem.description,
                tech: ["Java", "Spring", "PostgreSQL", "Oracle Cloud", "Git", "React"],
                color: "from-purple-600 to-white",
                status: "planning",
                github: null,
                demo: null
              },
              {
                id: 6,
                title: t.projects.port.title,
                description: t.projects.port.description,
                tech: ["JavaScript", "React", "Tailwind", "Vercel", "Git", "Figma"],
                color: "from-purple-600 to-white",
                status: "completed",
                github: null,
                demo: null
              }
            ].map((project) => (
              <motion.div
                key={project.id}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
              <Card className={`${
                  theme === 'dark' 
                    ? 'bg-gray-800/80 border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/10'
                    : 'bg-white border-gray-200 hover:border-purple-400/50 hover:shadow-purple-400/10 shadow-lg'
                } backdrop-blur-sm transition-all duration-300 overflow-hidden hover:shadow-2xl h-full flex flex-col`}>
                                    <motion.div 
                    className={`h-2 bg-gradient-to-r ${project.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.5))'
                    }}
                  />
                    <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' 
                          ? 'text-purple-100 group-hover:text-purple-200'
                          : 'text-gray-900 group-hover:text-purple-700'
                      } transition-colors`}>
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'completed' 
                          ? (theme === 'dark' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300')
                          : project.status === 'inDevelopment' 
                          ? (theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border border-yellow-300')
                          : (theme === 'dark' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-300')
                      }`}>
                        {t.projectStatus[project.status]}
                      </span>
                    </div>
                   <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    } text-sm mb-4 leading-relaxed flex-1`}>                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((techName, index) => {
                        const tech = allTechs[techName] || { name: techName, icon: "🔧", color: "from-gray-600 to-gray-800" };
                        return (
                          <motion.span 
                            key={techName} 
                            className={`px-3 py-1 ${
                              theme === 'dark' 
                              ? 'bg-purple-800/30 text-purple-200 border border-purple-600/30'
                              : 'bg-purple-50 text-purple-700 border border-purple-200'
                          } rounded-full text-xs font-medium`}                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)'
                            }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            title={techName}
                          >
                            <span className="text-xs">{tech.icon}</span>
                            {techName}
                          </motion.span>
                        );
                      })}
                    </div>
                    <div className={`flex gap-3 ${!project.github && !project.demo ? 'justify-center' : ''}`}>
                      {project.github && (
                        <Button 
                          variant="outline" 
                          className={`${
                            theme === 'dark' 
                              ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-purple-200 hover:border-purple-500/50'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-purple-700 hover:border-purple-400/50'
                            } flex-1 transition-all duration-300`}                          style={{
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.3), 0 4px 12px rgba(0,0,0,0.2)';
                            e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.boxShadow = '';
                            e.target.style.borderColor = '';
                          }}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <span className="flex items-center gap-2">
                            🐱 {t.projectButtons.github}
                          </span>
                        </Button>
                      )}
                      {project.demo && (
                        <Button 
                          className={`${
                            theme === 'dark' 
                              ? 'bg-purple-600 hover:bg-purple-700 text-white hover:text-purple-100'
                              : 'bg-purple-600 hover:bg-purple-700 text-white hover:text-purple-100'
                          } flex-1 transition-all duration-300`}                          style={{
                            boxShadow: '0 0 8px rgba(168, 85, 247, 0.3)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.4), 0 4px 12px rgba(0,0,0,0.2)';
                            e.target.style.filter = 'brightness(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.boxShadow = '0 0 8px rgba(168, 85, 247, 0.3)';
                            e.target.style.filter = '';
                          }}
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <span className="flex items-center gap-2">
                            👁️ {t.projectButtons.demo}
                          </span>
                        </Button>
                      )}
                      {!project.github && !project.demo && (
                        <div className="flex-1 flex items-center justify-center">
                      <span className={`${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                          } text-sm italic`}>                            🚧 {t.projectButtons.inDevelopment}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className={`relative ${
        theme === 'dark' ? 'bg-black text-purple-100' : 'bg-gray-50 text-gray-900'
      } py-20 px-6`}>
          <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
          >
            <span className={`text-transparent bg-clip-text ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-gray-300'
                : 'bg-gradient-to-r from-purple-600 to-gray-700'
            }`}>{t.skillsTitle}</span> {t.skillsTitleHighlight}          </motion.h2>
          
          <div className="space-y-12">
            {Object.entries(techCategories).map(([categoryKey, category], categoryIndex) => (
              <motion.div
                key={categoryKey}
                variants={fadeInUp}
                className="space-y-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h3 
                  className={`text-2xl font-bold text-center ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                  } flex items-center justify-center gap-3`}                  variants={fadeInUp}
                >
                  <span className="text-3xl">{category.icon}</span>
                  {t.techCategories[categoryKey]}
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                  variants={staggerContainer}
                >
                  {category.techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group cursor-pointer"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`${
                          theme === 'dark' 
                            ? 'bg-gray-900 hover:bg-purple-950 border-gray-700 hover:border-purple-600'
                            : 'bg-white hover:bg-purple-50 border-gray-200 hover:border-purple-400'
                        } border rounded-2xl p-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col items-center justify-center min-h-[120px]`}
                        whileHover={{
                          boxShadow: theme === 'dark' 
                            ? '0 10px 30px rgba(168, 85, 247, 0.2), 0 0 15px rgba(168, 85, 247, 0.1)'
                            : '0 10px 30px rgba(168, 85, 247, 0.15), 0 0 15px rgba(168, 85, 247, 0.08)'
                        }}
                      >
                        <motion.div 
                          className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-2xl`}
                          whileHover={{
                            boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
                          }}
                          style={{
                            filter: tech.color.includes('purple') ? 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))' : ''
                          }}
                        >
                          {tech.icon}
                        </motion.div>
                        <span className={`${
                          theme === 'dark' 
                            ? 'text-gray-300 group-hover:text-purple-300'
                            : 'text-gray-700 group-hover:text-purple-700'
                        } font-medium text-sm text-center`}>
                          {tech.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className={`relative ${
        theme === 'dark' ? 'bg-black text-purple-100' : 'bg-white text-gray-900'
      } py-20 px-6`}>        <motion.div 
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            {t.contactTitle} <span className={`text-transparent bg-clip-text ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-purple-200'
                : 'bg-gradient-to-r from-purple-600 to-purple-800'
            }`}>{t.contactTitleHighlight}</span> {t.contactTitleEnd}
          </motion.h2>
          
          <motion.p 
           className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } text-lg mb-8 leading-relaxed`}
            variants={fadeInUp}
          >
            {t.contactText}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            variants={fadeInUp}
          >
            <motion.a 
              href="mailto:geraldo.alves@gerfy.tech" 
              className={`${
                theme === 'dark' ? 'text-purple-300 hover:text-purple-200' : 'text-purple-600 hover:text-purple-700'
              } transition-colors text-lg`}              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
              }}
            >
              geraldo.alves@gerfy.tech
            </motion.a>
            <span className={`hidden sm:block ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}>|</span>            <motion.a 
                href="https://wa.me/5583988442527"
                target="_blank"
                rel="noopener noreferrer"              
                className={`${
                theme === 'dark' ? 'text-purple-300 hover:text-purple-200' : 'text-purple-600 hover:text-purple-700'
              } transition-colors text-lg`}              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
              }}
            >
              (83) 98844-2527
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button 
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-purple-200'
                  : 'bg-gray-100 hover:bg-gray-200 text-purple-700 border border-gray-300'
              } px-8 py-3 transition-all duration-300`}              style={{
                boxShadow: '0 0 8px rgba(168, 85, 247, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.4), 0 0 30px rgba(168, 85, 247, 0.2), 0 4px 12px rgba(0,0,0,0.2)';
                e.target.style.color = 'rgb(221, 214, 254)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 8px rgba(168, 85, 247, 0.2)';
                e.target.style.color = '';
              }}
              onClick={() => window.open('https://www.linkedin.com/in/geraldoaafilho', '_blank')}
            >
              {t.contactButtons.linkedin}
            </Button>
            <Button 
              variant="outline" 
            className={`${
                theme === 'dark' 
                  ? 'border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-purple-200'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-purple-700'
              } px-8 py-3 transition-all duration-300`}
                style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.3), 0 4px 12px rgba(0,0,0,0.2)';
                e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '';
                e.target.style.borderColor = '';
              }}
            onClick={() => window.open('https://github.com/Gerfy1', '_blank')}
            >
              {t.contactButtons.github}
            </Button>
          </motion.div>
        </motion.div>
      </section>

  <footer className={`relative ${
        theme === 'dark' ? 'bg-black text-gray-600 border-gray-800' : 'bg-white text-gray-500 border-gray-200'
      } py-8 text-center border-t`}>        
      <p className="relative z-10">
          &copy; 2025 Geraldo. {t.footer}
        </p>
      </footer>
    </main>
  );
}