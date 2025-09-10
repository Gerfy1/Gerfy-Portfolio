import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); 
  const [theme, setTheme] = useState('dark'); 

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

const translations = {
  pt: {
    inicio: 'Início',
    sobre: 'Sobre',
    projetos: 'Projetos',
    habilidades: 'Habilidades',
    contato: 'Contate-me',
    
    welcome: 'Bem-vindo ao meu universo digital. Explore meus projetos e descubra como transformo ideias em soluções inovadoras.',
    tagline: 'TRANSFORMANDO IDEIAS EM REALIDADE',
    typedStrings: [
      `Oi, eu sou o <span class="${theme === 'dark' ? 'text-blue-300' : 'text-black-800'} font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Geraldo</span>`,

      `Sou <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Desenvolvedor Full Stack</span>`,

      `Transformo <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">ideias em código</span>`,

      `Apaixonado por <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">tecnologia</span> <span class="text-yellow-400">💻</span>`,
    ],

    aboutTitle: 'Sobre',
    aboutTitleHighlight: 'mim',
    aboutText1: 'Sou graduando em Análise e Desenvolvimento de Sistemas pela UNIESP e desenvolvedor full stack apaixonado por criar soluções tecnológicas inovadoras. Com experiência sólida em Java, Spring, Angular e TypeScript, atuo tanto no desenvolvimento backend quanto frontend, sempre focado em entregar produtos de alta qualidade.',
    aboutText2: 'Minha jornada profissional inclui experiências em suporte técnico no Globoplay e Mercado Livre, onde desenvolvi habilidades analíticas e de resolução de problemas.',
    aboutImageAlt: 'Geraldo - Desenvolvedor Full Stack',
    traits: ['Inovação', 'Criatividade', 'Dedicação', 'Aprendizado Rápido', 'Resolução de Problemas', 'Trabalho em Equipe', 'Proatividade'],
    
    projectsTitle: 'Meus',
    projectsTitleHighlight: 'Projetos',
    projectStatus: {
      completed: 'Concluído',
      inDevelopment: 'Em desenvolvimento',
      planning: 'Planejamento'
    },
    projectButtons: {
      github: 'GitHub',
      demo: 'Visualizar',
      inDevelopment: 'Em desenvolvimento'
    },
    projects: {
      forumhub: {
        title: 'Forum HUB',
        description: 'O Fórum hub é um desafio proposto pela a alura na conclusão do programa Oracle ONE. O projeto é utilizado para consolidar conhecimento e replicar a parte de Back-End do forum Alura.'
      },
      medapi: {
        title: 'MedAPI',
        description: 'O projeto visa demonstrar a aplicação prática dessas tecnologias e práticas no contexto de desenvolvimento de APIs RESTful para aplicações corporativas.'
      },
      fipeapp: {
        title: 'FipeAPP',
        description: 'FipeAPP é uma aplicação Java que permite aos usuários consultar preços médios de veículos com base na Tabela Fipe.'
      },
      jobsMemory: {
        title: 'Jobs Memory',
        description: 'Aplicação completa para organizar e acompanhar candidaturas de emprego, com dashboard intuitivo e sistema de lembretes.'
      },
      managementSystem: {
        title: 'Sistema de Gestão Empresarial',
        description: 'Solução empresarial robusta desenvolvida com Java Spring e React, oferecendo gestão completa de clientes, vendas e estoque. Inclui dashboard executivo com métricas em tempo real, relatórios personalizáveis, integração com APIs de pagamento e sistema de notificações automatizadas.'
      },
      port: {
        title: 'Portfólio Interativo',
        description: 'Portfólio moderno e responsivo desenvolvido com React e Tailwind CSS, apresentando animações fluidas, alternância de temas e suporte multilíngue. Demonstra minhas habilidades em desenvolvimento frontend com foco na experiência do usuário e design intuitivo.'
      }
    },
    
    skillsTitle: 'Tecnologias',
    skillsTitleHighlight: '& Habilidades',
    techCategories: {
      languages: 'Linguagens',
      frameworks: 'Frameworks & Libraries',
      databases: 'Banco de Dados & ORM',
      cloud: 'Nuvem',
      hosting: 'Hosting & SaaS',
      devops: 'CI/CD & VCS',
      tools: 'Ferramentas'
    },
    
    contactTitle: 'Vamos criar algo',
    contactTitleHighlight: 'incrível',
    contactTitleEnd: 'juntos?',
    contactText: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.',
    contactButtons: {
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    
    footer: 'Feito com ❤️ e muito ☕'
  },
  en: {
    inicio: 'Home',
    sobre: 'About',
    projetos: 'Projects',
    habilidades: 'Skills',
    contato: 'Contact me',
    
    welcome: 'Welcome to my digital universe. Explore my projects and discover how I transform ideas into innovative solutions.',
    tagline: 'SHAPING IDEAS INTO REALITY',
    typedStrings: [
      `Hi, I'm <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold">Geraldo</span>`,
      `I'm a <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold">Full Stack Developer</span>`,
      `I transform <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold">ideas into code</span>`,
      `Passionate about <span class="${theme === 'dark' ? 'text-blue-200' : 'text-black-800'} font-bold">technology</span> <span class="text-yellow-400">💻</span>`,
    ],
    
    aboutTitle: 'About',
    aboutTitleHighlight: 'me',
    aboutText1: 'I\'m pursuing a degree in Systems Analysis and Development at UNIESP and a passionate full stack developer focused on creating innovative technological solutions. With solid experience in Java, Spring, Angular, and TypeScript, I work on both backend and frontend development, always focused on delivering high-quality products.',
    aboutText2: 'My professional journey includes technical support experience at Globoplay(Globo) and Mercado Livre, where I developed analytical and problem-solving skills. Currently, I am seeking internship opportunities in development to apply my knowledge in challenging projects and contribute to dynamic teams.',
    aboutImageAlt: 'Geraldo - Full Stack Developer',
    traits: ['Innovation', 'Creativity', 'Dedication', 'Fast Learning', 'Problem Solving', 'Teamwork', 'Proactivity'],
    
    projectsTitle: 'My',
    projectsTitleHighlight: 'Projects',
    projectStatus: {
      completed: 'Completed',
      inDevelopment: 'In Development',
      planning: 'Planning'
    },
    projectButtons: {
      github: 'GitHub',
      demo: 'View Demo',
      inDevelopment: 'In Development'
    },
    projects: {
      forumhub: {
        title: 'Forum HUB',
        description: 'The Hub Forum is a challenge proposed by Alura at the conclusion of the Oracle ONE program. The project is used to consolidate knowledge and replicate part of the Alura Forum Back-End.'
      },
      medapi: {
        title: 'MedAPI',
        description: 'MedAPI: This project aims to demonstrate the practical application of these technologies and practices in the context of developing RESTful APIs for corporate applications.'
      },
      fipeapp: {
        title: 'FipeAPP',
        description: 'FipeAPP is a Java application that allows users to check average vehicle prices based on the Fipe Table.'
      },
      jobsMemory: {
        title: 'Jobs Memory',
        description: 'Complete application to organize and track job applications, with intuitive dashboard and reminder system.'
      },
      managementSystem: {
        title: 'Management System',
        description: 'Robust business solution built with Java Spring and React, providing complete customer, sales and inventory management. Features executive dashboard with real-time metrics, customizable reports, payment API integration and automated notification system.'
      },
       port: {
        title: 'Interactive Portfolio',
        description: 'Modern and responsive portfolio built with React and Tailwind CSS, featuring smooth animations, theme switching and multilingual support. Showcases my frontend development skills with focus on user experience and intuitive design.'
      }
    },
    
    skillsTitle: 'Technologies',
    skillsTitleHighlight: '& Skills',
    techCategories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      databases: 'Databases & ORM',
      cloud: 'Cloud',
      hosting: 'Hosting & SaaS',
      devops: 'CI/CD & VCS',
      tools: 'Tools'
    },
    
    contactTitle: 'Let\'s create something',
    contactTitleHighlight: 'amazing',
    contactTitleEnd: 'together?',
    contactText: 'I\'m always open to new opportunities and interesting projects. Get in touch and let\'s talk about how I can help transform your ideas into reality.',
    contactButtons: {
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    
    footer: 'Made with ❤️ and lots of ☕'
  }
};

  const t = translations[language];

  return (
    <AppContext.Provider value={{
      language,
      theme,
      toggleLanguage,
      toggleTheme,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};  
