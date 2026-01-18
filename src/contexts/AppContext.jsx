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

        welcome:
            'Bem-vindo ao meu universo digital. Explore meus projetos e descubra como transformo ideias em soluções inovadoras.',
        tagline: 'TRANSFORMANDO IDEIAS EM REALIDADE',
        typedStrings: [
            `Oi, eu sou o <span class="${
                theme === 'dark' ? 'text-blue-300' : 'text-black-800'
            } font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Geraldo</span>`,

            `Sou <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Software Developer</span>`,

            `Transformo <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">ideias em código</span>`,

            `Apaixonado por <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">tecnologia</span> <span class="text-yellow-400">💻</span>`
        ],

        aboutTitle: 'Sobre',
        aboutTitleHighlight: 'mim',
        aboutText1:
            'Graduado em Análise e Desenvolvimento de Sistemas pela UNIESP, atuo como Engenheiro de Software Júnior com foco em criar soluções robustas e escaláveis. Sou um desenvolvedor Full Stack que vai além do código: tenho experiência prática com infraestrutura Linux, Docker e automação, garantindo que as aplicações em Java (Spring Boot), Angular e React funcionem com eficiência em produção.',
        aboutText2:
            'Durante meu estágio na MasterTechPB, conduzi projeto completo de reestruturação de infraestrutura de acesso remoto, desenvolvendo desde a infraestrutura virtualizada até dashboard de gerenciamento full-stack. Possuo base sólida em resolução de problemas, integração de sistemas e colaboração com equipes técnicas, aliando experiência prévia em suporte técnico a uma visão orientada a eficiência, estabilidade e melhoria contínua.',
        aboutText2:
            'Minha bagagem inclui passagens por grandes players como Globoplay e Mercado Livre, onde afiei minha capacidade analítica e de resolução de problemas em ambientes críticos. Hoje, combino essa visão orientada a estabilidade com minhas habilidades técnicas para entregar software de alta qualidade.',
        aboutImageAlt: 'Geraldo - Desenvolvedor Full Stack',
        traits: [
            'Inovação',
            'Criatividade',
            'Dedicação',
            'Aprendizado Rápido',
            'Resolução de Problemas',
            'Trabalho em Equipe',
            'Proatividade'
        ],

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
                description:
                    'Fórum hub é um desafio proposto pela a alura na conclusão do programa Oracle ONE. O projeto é utilizado para consolidar conhecimento e replicar a parte de Back-End do forum Alura.'
            },
            medapi: {
                title: 'MedAPI',
                description:
                    'MedAPI é um projeto que visa demonstrar a aplicação prática dessas tecnologias e práticas no contexto de desenvolvimento de APIs RESTful para aplicações corporativas.'
            },
            fipeapp: {
                title: 'FipeAPP',
                description:
                    'FipeAPP é uma aplicação Java que permite aos usuários consultar preços médios de veículos com base na Tabela Fipe.'
            },
            jobsMemory: {
                title: 'Jobs Memory',
                description:
                    'Jobs Memory é uma aplicação completa para organizar e acompanhar candidaturas de emprego, com dashboard intuitivo e sistema de lembretes.'
            },
            rustdeskInfra: {
                title: 'Infraestrutura de Acesso Remoto Corporativo',
                description:
                    'Projeto completo de reestruturação da solução de acesso remoto na MasterTechPB. Migração para plataforma open source auto-hospedada (RustDesk) com infraestrutura virtualizada (Proxmox + Docker), customização de client corporativo com installer avançado em NSIS, e desenvolvimento de dashboard de gerenciamento em Go e Vue com gestão de dispositivos, auditoria de sessões, agendas organizacionais e base de conhecimento integrada.'
            },
            port: {
                title: 'Portfólio Interativo',
                description:
                    'Portfólio moderno e responsivo desenvolvido com React e Tailwind CSS, apresentando animações fluidas, alternância de temas e suporte multilíngue. Demonstra minhas habilidades em desenvolvimento frontend com foco na experiência do usuário e design intuitivo.'
            }
        },

        skillsTitle: 'Tecnologias',
        skillsTitleHighlight: '& Habilidades',
        techCategories: {
            languages: 'Linguagens',
            frameworks: 'Frameworks & Libraries',
            databases: 'Banco de Dados & ORM',
            cloud: 'Cloud & DevOps',
            devops: 'Controle de Versão',
            tools: 'Ferramentas de Desenvolvimento'
        },

        contactTitle: 'Vamos criar algo',
        contactTitleHighlight: 'incrível',
        contactTitleEnd: 'juntos?',
        contactText:
            'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.',
        contactButtons: {
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },

        footer: 'Feito com muito cafézão ☕'
    },
    en: {
        inicio: 'Home',
        sobre: 'About',
        projetos: 'Projects',
        habilidades: 'Skills',
        contato: 'Contact me',

        welcome:
            'Welcome to my digital universe. Explore my projects and discover how I transform ideas into innovative solutions.',
        tagline: 'SHAPING IDEAS INTO REALITY',
        typedStrings: [
            `Hi, I'm <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold">Geraldo</span>`,
            `I'm a <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold">Software Developer</span>`,
            `I transform <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold">ideas into code</span>`,
            `Passionate about <span class="${
                theme === 'dark' ? 'text-blue-200' : 'text-black-800'
            } font-bold">technology</span> <span class="text-yellow-400">💻</span>`
        ],

        aboutTitle: 'About',
        aboutTitleHighlight: 'me',
        aboutText1:
            'Software Engineer with a degree in Systems Analysis and Development from UNIESP and hands-on experience in backend development (Java, Spring Boot) and frontend (Angular and React). Worked in corporate environments with Linux infrastructure, Docker, automation, and self-hosted systems, participating in the implementation and evolution of production solutions.',
        aboutText2:
            'During my internship at MasterTechPB, I led a complete remote access infrastructure restructuring project, developing from virtualized infrastructure to full-stack management dashboard. I have a strong foundation in problem-solving, system integration, and collaboration with technical teams, combining previous technical support experience with a focus on efficiency, stability, and continuous improvement.',
        aboutImageAlt: 'Geraldo - Full Stack Developer',
        traits: [
            'Innovation',
            'Creativity',
            'Dedication',
            'Fast Learning',
            'Problem Solving',
            'Teamwork',
            'Proactivity'
        ],

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
                description:
                    'Hub Forum is a challenge proposed by Alura at the conclusion of the Oracle ONE program. The project is used to consolidate knowledge and replicate part of the Alura Forum Back-End.'
            },
            medapi: {
                title: 'MedAPI',
                description:
                    'MedAPI is a project that aims to demonstrate the practical application of these technologies and practices in the context of developing RESTful APIs for corporate applications.'
            },
            fipeapp: {
                title: 'FipeAPP',
                description:
                    'FipeAPP is a Java application that allows users to check average vehicle prices based on the Fipe Table.'
            },
            jobsMemory: {
                title: 'Jobs Memory',
                description:
                    'Jobs Memory is a comprehensive application for organizing and tracking job applications, with an intuitive dashboard and reminder system.'
            },
            rustdeskInfra: {
                title: 'Corporate Remote Access Infrastructure',
                description:
                    'Complete restructuring project of remote access solution at MasterTechPB. Migration to self-hosted open source platform (RustDesk) with virtualized infrastructure (Proxmox + Docker), corporate client customization with advanced NSIS installer, and management dashboard development in Go and Vue with device management, session auditing, organizational address books and integrated knowledge base.'
            },
            port: {
                title: 'Interactive Portfolio',
                description:
                    'Modern and responsive portfolio built with React and Tailwind CSS, featuring smooth animations, theme switching and multilingual support. Showcases my frontend development skills with focus on user experience and intuitive design.'
            }
        },

        skillsTitle: 'Technologies',
        skillsTitleHighlight: '& Skills',
        techCategories: {
            languages: 'Languages',
            frameworks: 'Frameworks & Libraries',
            databases: 'Databases & ORM',
            cloud: 'Cloud & DevOps',
            devops: 'Version Control',
            tools: 'Development Tools'
        },

        contactTitle: "Let's create something",
        contactTitleHighlight: 'amazing',
        contactTitleEnd: 'together?',
        contactText:
            "I'm always open to new opportunities and interesting projects. Get in touch and let's talk about how I can help transform your ideas into reality.",
        contactButtons: {
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },

        footer: 'Made with lots and lots of coffee ☕'
    }
}

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
