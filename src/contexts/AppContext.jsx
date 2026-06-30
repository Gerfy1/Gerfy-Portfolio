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
      experiencia: 'Experiência',
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
        } font-bold" style="font-family: 'Roboto', sans-serif; font-weight: 700;">tecnologia</span>`
      ],

      aboutTitle: 'Sobre',
      aboutTitleHighlight: 'mim',
      aboutText1:
        'Sou Software Developer formado em Análise e Desenvolvimento de Sistemas pela UNIESP, com atuação em backend, cloud e evolução de sistemas críticos. Atualmente trabalho na IntuitiveCare, desenvolvendo e migrando operações do ciclo de faturamento hospitalar em um domínio regulado, com foco em segurança, rastreabilidade e confiabilidade.',
      aboutText2:
        'Minha trajetória combina suporte técnico, infraestrutura Linux, automação e desenvolvimento full-stack, o que me dá uma visão prática de ponta a ponta: do problema operacional à solução em produção. Gosto de trabalhar com clareza de escopo, qualidade incremental, testes e colaboração próxima com Produto para entregar software confiável, sustentável e alinhado ao negócio.',
      aboutImageAlt: 'Geraldo - Desenvolvedor de Software',
      traits: [
        'Inovação',
        'Criatividade',
        'Dedicação',
        'Aprendizado Rápido',
        'Resolução de Problemas',
        'Trabalho em Equipe',
        'Proatividade'
      ],

      experienceTitle: 'Experiência',
      experienceTitleHighlight: 'profissional',
      experience: {
        role: 'Software Developer',
        company: 'IntuitiveCare',
        period: 'Maio/2026 - Atual',
        description:
          'Atuo no desenvolvimento e migração de operações backend do ciclo de faturamento hospitalar (RCM) na plataforma de Workflows, em um domínio sensível com dados de saúde, LGPD e padrão TISS. Trabalho em alinhamento direto com Produto para modernizar fluxos legados com segurança, previsibilidade e paridade comportamental.',
        bullets: [
          'Modernização de rotas legadas em Chalice para arquitetura serverless orientada a eventos com AWS Lambda, SQS e PostgreSQL.',
          'Aplicação de Spec-Driven Development com especificação rigorosa, plano incremental e validação de escopo antes da codificação.',
          'Prática de TDD/ATDD no ciclo RED-GREEN-REFACTOR para preservar comportamento legado e elevar a confiança das entregas.',
          'Adoção de boas práticas de segurança e rastreabilidade com JSON Schema, SQL parametrizado, PRs vinculados ao JIRA e documentação arquitetural atualizada.'
        ],
        chips: ['AWS Lambda', 'SQS', 'PostgreSQL', 'JSON Schema', 'TDD/ATDD', 'LGPD/TISS', 'JIRA']
      },

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
            'Forum Hub é um desafio proposto pela Alura na conclusão do programa Oracle ONE. O projeto consolida conhecimentos e replica a parte de back-end do fórum da Alura.'
        },
        medapi: {
          title: 'MedAPI',
          description:
            'MedAPI é um projeto que demonstra a aplicação prática de tecnologias e boas práticas no desenvolvimento de APIs RESTful para aplicações corporativas.'
        },
        fipeapp: {
          title: 'FipeAPP',
          description:
            'FipeAPP é uma aplicação Java que permite consultar preços médios de veículos com base na Tabela Fipe.'
        },
        jobsMemory: {
          title: 'Jobs Memory',
          description:
            'Jobs Memory é uma aplicação completa para organizar e acompanhar candidaturas de emprego, com dashboard intuitivo e sistema de lembretes.'
        },
        rustdeskInfra: {
          title: 'Infraestrutura de Acesso Remoto Corporativo',
          description:
            'Projeto completo de reestruturação da solução de acesso remoto na MasterTechPB. Migração para plataforma open source auto-hospedada (RustDesk) com infraestrutura virtualizada (Proxmox + Docker), customização de client corporativo com installer avançado em NSIS e desenvolvimento de dashboard de gerenciamento em Go e Vue.'
        },
        port: {
          title: 'Portfólio Interativo',
          description:
            'Portfólio moderno e responsivo desenvolvido com React e Tailwind CSS, apresentando animações fluidas, alternância de temas e suporte multilíngue.'
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

      footer: 'Feito com muito café'
    },
    en: {
      inicio: 'Home',
      sobre: 'About',
      experiencia: 'Experience',
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
        } font-bold">technology</span>`
      ],

      aboutTitle: 'About',
      aboutTitleHighlight: 'me',
      aboutText1:
        'I am a Software Developer with a degree in Systems Analysis and Development from UNIESP, focused on backend engineering, cloud and the evolution of critical systems. I currently work at IntuitiveCare, developing and migrating hospital revenue cycle operations in a regulated domain, with a focus on security, traceability and reliability.',
      aboutText2:
        'My background combines technical support, Linux infrastructure, automation and full-stack development, giving me a practical end-to-end view: from operational problems to production-ready solutions. I value clear scope, incremental quality, testing and close collaboration with Product to deliver reliable, sustainable software aligned with business needs.',
      aboutImageAlt: 'Geraldo - Software Developer',
      traits: [
        'Innovation',
        'Creativity',
        'Dedication',
        'Fast Learning',
        'Problem Solving',
        'Teamwork',
        'Proactivity'
      ],

      experienceTitle: 'Professional',
      experienceTitleHighlight: 'experience',
      experience: {
        role: 'Software Developer',
        company: 'IntuitiveCare',
        period: 'May/2026 - Present',
        description:
          'I develop and migrate backend operations for the hospital revenue cycle management (RCM) domain on the Workflows platform, working with sensitive healthcare data, LGPD and TISS requirements. I collaborate closely with Product to modernize legacy flows with security, predictability and behavioral parity.',
        bullets: [
          'Modernization of legacy Chalice routes into an event-driven serverless architecture with AWS Lambda, SQS and PostgreSQL.',
          'Application of Spec-Driven Development through rigorous specifications, incremental planning and scope validation before coding.',
          'TDD/ATDD practice with the RED-GREEN-REFACTOR cycle to preserve legacy behavior and increase delivery confidence.',
          'Security and traceability practices with JSON Schema, parameterized SQL, JIRA-linked PRs and updated architecture documentation.'
        ],
        chips: ['AWS Lambda', 'SQS', 'PostgreSQL', 'JSON Schema', 'TDD/ATDD', 'LGPD/TISS', 'JIRA']
      },

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
            'Forum Hub is a challenge proposed by Alura at the conclusion of the Oracle ONE program. The project consolidates knowledge and replicates part of the Alura Forum back-end.'
        },
        medapi: {
          title: 'MedAPI',
          description:
            'MedAPI demonstrates the practical application of technologies and practices in the development of RESTful APIs for corporate applications.'
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
            'Complete restructuring project of the remote access solution at MasterTechPB. Migration to a self-hosted open source platform (RustDesk) with virtualized infrastructure (Proxmox + Docker), corporate client customization with an advanced NSIS installer and management dashboard development in Go and Vue.'
        },
        port: {
          title: 'Interactive Portfolio',
          description:
            'Modern and responsive portfolio built with React and Tailwind CSS, featuring smooth animations, theme switching and multilingual support.'
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

      footer: 'Made with lots and lots of coffee'
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
