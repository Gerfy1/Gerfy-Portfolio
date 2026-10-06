import { Card, CardContent } from "/@/components/ui/card";
import { motion } from "framer-motion";
import Projects from "./Projects";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";
import SectionAwareJapaneseText from "./SectionAwareJapaneseText";
import { useApp } from '/@/contexts/AppContext';
import {
  FaJava,
  FaPython,
  FaPhp,
  FaNode,
  FaReact,
  FaAngular,
  FaVuejs,
  FaDocker,
  FaGit,
  FaGithub,
  FaGitlab,
  FaAmazon,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiHibernate,

  SiGooglecloud,
  SiVercel,
  SiRender,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiInsomnia,
  SiTailwindcss,
  SiBootstrap,

  SiKotlin,
  SiGo
} from 'react-icons/si';


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
    icon: "",
    techs: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "PHP", icon: "php" },
      { name: "Go", icon: "go" }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: "",
    techs: [
      { name: "Spring", icon: "springboot" },
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React Native", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Vue", icon: "vuejs" }
    ]
  },
  databases: {
    title: "Banco de Dados & ORM",
    icon: "",
    techs: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Hibernate", icon: "hibernate" }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "",
    techs: [
      { name: "AWS", icon: "amazonaws" },
      { name: "Oracle Cloud", icon: "oraclecloud" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "Proxmox", icon: "proxmox" }
    ]
  },
  devops: {
    title: "Controle de Versão",
    icon: "",
    techs: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Gradle", icon: "gradle" }
    ]
  },
  tools: {
    title: "Ferramentas de Desenvolvimento",
    icon: "",
    techs: [
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "Insomnia", icon: "insomnia" },
      { name: "Swagger UI", icon: "swagger" },
      { name: "NSIS", icon: "nsis" }
    ]
  }
};

// Icon mapping for react-icons
const iconMap = {
  java: FaJava,
  kotlin: SiKotlin,
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: FaPython,
  php: FaPhp,
  go: SiGo,
  springboot: SiSpringboot,
  angular: FaAngular,
  react: FaReact,
  nextjs: SiNextdotjs,
  nodejs: FaNode,
  vuejs: FaVuejs,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  hibernate: SiHibernate,
  amazonaws: FaAmazon,
  googlecloud: SiGooglecloud,
  docker: FaDocker,
  vercel: SiVercel,
  render: SiRender,
  git: FaGit,
  github: FaGithub,
  gitlab: FaGitlab,

  figma: SiFigma,
  postman: SiPostman,
  insomnia: SiInsomnia,
  swagger: SiSwagger,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  
  proxmox: null,     // No icon available
  nsis: null         // No icon available
};

// Helper function to get icon component
const getIconComponent = (iconKey) => {
  return iconMap[iconKey] || null;
};

export default function Portfolio() {
  const { theme, t } = useApp();
  const experience = t.experience;
  const experienceChips = experience.chips;
  const experienceBullets = experience.bullets;

  return (
    <main className={`portfolio-page min-h-screen font-sans overflow-x-hidden ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <a href="#home" className="skip-link">{t.skipLink}</a>
      <Navbar />
      
      <SectionAwareJapaneseText side="left" />
      <SectionAwareJapaneseText side="right" />
      
      <section id="home" tabIndex={-1} className={`relative flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32 text-center ${theme === 'dark' ? 'bg-black text-blue-100' : 'bg-white text-gray-900'}`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: theme === 'dark' ? 'radial-gradient(ellipse at 50% 35%, #17255480, transparent 65%)' : 'radial-gradient(ellipse at 50% 35%, #dbeafe, transparent 65%)' }} />
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0"
          animate={{ background: theme === 'dark' ? [
            'radial-gradient(circle at 30% 70%, rgba(30,64,175,0.15), transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(30,58,138,0.18), transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(23,37,84,0.12), transparent 60%)'
          ] : [
            'radial-gradient(circle at 30% 70%, rgba(30,64,175,0.06), transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(30,58,138,0.08), transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(23,37,84,0.05), transparent 60%)'
          ] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="relative z-10 mx-auto w-full max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className={`mb-6 text-xs font-semibold tracking-[0.18em] ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>{t.heroEyebrow}</p>
          <HeroTitle />
          <p className={`mx-auto max-w-2xl text-lg leading-relaxed md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.welcome}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800">{t.viewProjects}</a>
            <a href="#contact" className={`inline-flex min-h-[44px] items-center rounded-lg border px-6 py-3 font-semibold transition-colors ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-900' : 'border-gray-300 hover:bg-gray-50'}`}>{t.contato}</a>
          </div>
          <p className={`mt-10 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{t.tagline}</p>
        </motion.div>
      </section>

      <section id="about" tabIndex={-1} className={`relative ${
        theme === 'dark' ? 'bg-blue-950 text-blue-100' : 'bg-gray-50 text-gray-900'
      } py-20 px-6`}>
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
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
                ? 'bg-gradient-to-r from-blue-400 to-gray-300'
                : 'bg-gradient-to-r from-blue-900 to-gray-700'
            }`}>{t.aboutTitleHighlight}</span>
          </motion.h2>
          
          <motion.div 
            className="grid gap-10 items-center md:grid-cols-[minmax(0,1fr)_256px]"
            variants={fadeInUp}
          >
           <div className="space-y-6">
              <motion.p 
                className={`text-lg ${
                  theme === 'dark' ? 'text-blue-200' : 'text-gray-700'
                } leading-relaxed`}
                variants={fadeInUp}
              >
                {t.aboutText1}
              </motion.p>
              <motion.p 
                className={`text-lg ${
                  theme === 'dark' ? 'text-blue-200' : 'text-gray-700'
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
                        ? 'bg-blue-800/50 border-blue-600/50 text-blue-200 hover:shadow-blue-500/50'
                        : 'bg-blue-100 border-blue-300/50 text-blue-800 hover:shadow-blue-400/30'
                    } border rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: theme === 'dark' 
                        ? '0 4px 20px rgba(30, 64, 175, 0.3), 0 0 8px rgba(30, 64, 175, 0.2)'
                        : '0 4px 20px rgba(30, 64, 175, 0.2), 0 0 8px rgba(30, 64, 175, 0.1)'
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
                        rgba(30, 64, 175, 0.4) 10deg,
                        rgba(30, 64, 175, 0.8) 20deg,
                        rgba(30, 64, 175, 0.4) 30deg,
                        transparent 40deg,
                        transparent 320deg,
                        rgba(30, 64, 175, 0.4) 330deg,
                        rgba(30, 64, 175, 0.8) 340deg,
                        rgba(30, 64, 175, 0.4) 350deg,
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
                      theme === 'dark' ? 'bg-blue-950' : 'bg-white'
                    }`}></div>                 
                     </motion.div>

                   <div className={`absolute inset-1 rounded-2xl overflow-hidden ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-800 to-blue-900'
                      : 'bg-gradient-to-br from-gray-100 to-blue-100'
                  }`}>
                    <img 
                      src="/110788311.jpeg" width="256" height="256" loading="lazy"
                      alt={t.aboutImageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    <div 
                      className={`w-full h-full flex items-center justify-center ${
                        theme === 'dark' ? 'text-blue-100' : 'text-blue-900'
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
                        rgba(30, 64, 175, 0.1) 0%,
                        transparent 70%
                      )`
                    }}
                  />

                  <div
                    className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(
                        circle at center,
                        rgba(30, 64, 175, ${theme === 'dark' ? '0.1' : '0.05'}) 0%,
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
                      rgba(30, 64, 175, ${theme === 'dark' ? '0.3' : '0.2'}),
                      rgba(37, 99, 235, ${theme === 'dark' ? '0.3' : '0.2'}),
                      rgba(59, 130, 246, ${theme === 'dark' ? '0.3' : '0.2'})
                    )`
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="experience" tabIndex={-1} className={`relative ${
        theme === 'dark' ? 'bg-black text-blue-100' : 'bg-white text-gray-900'
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
            {t.experienceTitle} <span className={`text-transparent bg-clip-text ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-400 to-gray-300'
                : 'bg-gradient-to-r from-blue-900 to-gray-700'
            }`}>{t.experienceTitleHighlight}</span>
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className={`${
              theme === 'dark'
                ? 'bg-[#0D0D0D]/90 border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/10'
                : 'bg-white border-gray-200 shadow-lg hover:border-blue-400/50 hover:shadow-blue-400/10'
            } backdrop-blur-sm transition-all duration-300 overflow-hidden hover:shadow-2xl`}>
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-700 via-blue-500 to-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(30, 64, 175, 0.5))',
                  transformOrigin: 'left'
                }}
              />

              <CardContent className="p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.95fr_1.35fr] gap-8 lg:gap-10">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 mx-auto sm:mx-0">
                        <div className={`absolute inset-0 rounded-2xl ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-blue-500/40 via-gray-500/20 to-blue-900/40'
                            : 'bg-gradient-to-br from-blue-200 via-gray-100 to-blue-500/30'
                        } blur-md opacity-70`} />
                        <div className={`relative w-full h-full rounded-2xl overflow-hidden border ${
                          theme === 'dark'
                            ? 'border-blue-700/40 bg-blue-950'
                            : 'border-blue-200 bg-blue-50'
                        } shadow-xl`}>
                          <img
                            src="/gerfy.png"
                            alt={t.aboutImageAlt}
                            className="w-full h-full object-cover object-[center_38%]"
                            loading="lazy"
                          />
                        </div>
                        <div className={`absolute -right-2 -bottom-2 w-10 h-10 rounded-xl flex items-center justify-center ${
                          theme === 'dark'
                            ? 'bg-blue-900 text-blue-100 border border-blue-700'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        } shadow-lg`}>
                          <FaBriefcase size={18} />
                        </div>
                      </div>

                      <div className="min-w-0 text-center sm:text-left">
                        <h3 className={`text-2xl md:text-3xl font-bold ${
                          theme === 'dark' ? 'text-blue-100' : 'text-gray-900'
                        }`}>
                          {experience.role}
                        </h3>
                        <div className={`mt-3 flex flex-col sm:flex-row sm:items-center gap-3 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <span className="flex items-center gap-2">
                            <FaBuilding size={14} />
                            {experience.company}
                          </span>
                          <span className={`hidden sm:block ${
                            theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                          }`}>|</span>
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt size={14} />
                            {experience.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className={`text-base md:text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experienceChips.map((chip, index) => (
                        <motion.span
                          key={chip}
                          className={`px-3 py-1.5 ${
                            theme === 'dark'
                              ? 'bg-blue-800/30 text-blue-200 border border-blue-600/30'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          } rounded-full text-xs font-medium`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 8px rgba(30, 64, 175, 0.4)'
                          }}
                          transition={{ delay: index * 0.06 }}
                        >
                          {chip}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {experienceBullets.map((item, index) => (
                      <motion.div
                        key={item}
                        className={`flex gap-4 p-4 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-blue-950/20 border-blue-900/40'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                          y: -3,
                          boxShadow: theme === 'dark'
                            ? '0 10px 24px rgba(30, 64, 175, 0.12)'
                            : '0 10px 24px rgba(30, 64, 175, 0.10)'
                        }}
                        transition={{ delay: index * 0.08, duration: 0.25 }}
                      >
                        <span className={`mt-1 shrink-0 ${
                          theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          <FaCheckCircle size={16} />
                        </span>
                        <p className={`text-base leading-relaxed ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <Projects />

      <section id="skills" tabIndex={-1} className={`relative ${
        theme === 'dark' ? 'bg-black text-blue-100' : 'bg-gray-50 text-gray-900'
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
                ? 'bg-gradient-to-r from-blue-400 to-gray-300'
                : 'bg-gradient-to-r from-blue-600 to-gray-700'
            }`}>{t.skillsTitle}</span> {t.skillsTitleHighlight}          </motion.h2>
          
          <p className={`mx-auto mb-6 max-w-2xl text-center text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.skillsIntro}</p>
          <div className="mb-12 flex flex-wrap justify-center gap-3">{["Python", "Java", "AWS", "PostgreSQL"].map(name => <span key={name} className={`rounded-full border px-5 py-2 font-semibold ${theme === 'dark' ? 'border-blue-700 bg-blue-950 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-900'}`}>{name}</span>)}</div>
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
                    theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                  } flex items-center justify-center gap-3`}                  variants={fadeInUp}
                >
                  <span className="text-3xl">{category.icon}</span>
                  {t.techCategories[categoryKey]}
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                  variants={staggerContainer}
                >
                  {category.techs.map((tech, index) => {
                    const IconComponent = getIconComponent(tech.icon);
                    return (
                      <motion.div
                        key={tech.name}
                        className="group"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className={`${
                            theme === 'dark' 
                              ? 'bg-[#1a1a1a] border-[#404040] hover:border-[#0ea5e9] hover:bg-[#1a1a2e]'
                              : 'bg-white border-[#e5e7eb] hover:border-[#3b82f6] hover:bg-[#f8f9fa]'
                          } border rounded-xl p-5 text-center transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[110px] group`}
                          whileHover={{
                            boxShadow: theme === 'dark' 
                              ? '0 4px 12px rgba(14, 165, 233, 0.1), 0 0 1px rgba(14, 165, 233, 0.2)'
                              : '0 4px 12px rgba(59, 130, 246, 0.08), 0 0 1px rgba(59, 130, 246, 0.15)'
                          }}
                        >
                          {IconComponent ? (
                            <motion.div 
                              className={`mb-3 flex items-center justify-center ${
                                theme === 'dark' 
                                  ? 'text-gray-300 group-hover:text-blue-300'
                                  : 'text-gray-700 group-hover:text-blue-700'
                              }`}
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconComponent size={40} aria-hidden="true" />
                            </motion.div>
                          ) : (
                            <div aria-hidden="true" className="mb-3 text-2xl">◯</div>
                          )}
                          <span className={`${
                            theme === 'dark' 
                              ? 'text-gray-300 group-hover:text-blue-300'
                              : 'text-gray-700 group-hover:text-blue-700'
                          } font-medium text-sm text-center transition-colors duration-200`}>
                            {tech.name}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" tabIndex={-1} className={`relative ${
        theme === 'dark' ? 'bg-black text-blue-100' : 'bg-white text-gray-900'
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
                ? 'bg-gradient-to-r from-blue-400 to-blue-200'
                : 'bg-gradient-to-r from-blue-600 to-blue-800'
            }`}>{t.contactTitleHighlight}</span>{t.contactTitleEnd}
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
              href="mailto:gaalmeidafilho@gmail.com"
              className={`${
                theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
              } inline-flex min-h-[44px] items-center transition-colors text-lg`}              whileHover={{
                scale: 1.05,
                textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
              }}
            >
              gaalmeidafilho@gmail.com
            </motion.a>
            <span className={`hidden sm:block ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}>|</span>            <motion.a 
                href="https://wa.me/5583988442527"
                target="_blank"
                rel="noopener noreferrer"              
                className={`${
                theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
              } inline-flex min-h-[44px] items-center transition-colors text-lg`}              whileHover={{
                scale: 1.05,
                textShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
              }}
            >
              (83) 98844-2527
            </motion.a>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.linkedin.com/in/geraldoaafilho" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
              {t.contactButtons.linkedin}
            </a>
            <a href="https://github.com/Gerfy1" target="_blank" rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] items-center justify-center rounded-lg border px-8 py-3 font-semibold transition-colors ${theme === 'dark' ? 'border-gray-600 text-gray-200 hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}>
              {t.contactButtons.github}
            </a>
          </div>
        </motion.div>
      </section>

  <footer className={`relative ${
        theme === 'dark' ? 'bg-black text-gray-400 border-gray-800' : 'bg-white text-gray-600 border-gray-200'
      } py-8 text-center border-t`}>        
      <p className="relative z-10">
          &copy; 2026 Geraldo. {t.footer}
        </p>
      </footer>
    </main>
  );
}
