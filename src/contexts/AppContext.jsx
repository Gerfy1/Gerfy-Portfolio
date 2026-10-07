import { createContext, useContext, useEffect, useState } from 'react'
import { getInitialLanguage, saveLanguage } from '../lib/language'

const AppContext = createContext()
export const translations = {
    'pt-BR': {
        inicio: 'Início',
        sobre: 'Sobre',
        experiencia: 'Experiência',
        projetos: 'Projetos',
        habilidades: 'Habilidades',
        contato: 'Vamos conversar',
        pageTitle: 'Geraldo Alves | Software Developer',
        pageDescription:
            'Software Developer na IntuitiveCare. Python, Java, AWS e PostgreSQL para integrações, sistemas em produção e produtos completos.',
        heroName: 'Geraldo Alves',
        heroRole: 'Software Developer',
        heroEyebrow: 'SOFTWARE · INTEGRAÇÕES · SOLUÇÕES',
        welcome:
            'Entendo as dores do negócio e desenvolvo software para resolvê-las. Na IntuitiveCare, modernizo sistemas e integrações do setor de saúde. Com o Pedido Divino, conecto pedidos, entregas e gestão para simplificar a rotina de restaurantes.',
        tagline: 'Do processo ao produto. Do código à produção.',
        typedStrings: [
            'Oi, eu sou o Geraldo',
            'Sou Software Developer',
            'Conecto sistemas e simplifico operações',
            'Transformo dores em soluções'
        ],
        viewProjects: 'Explorar projetos',
        skipLink: 'Pular para o conteúdo',
        switchLanguage: 'Switch to English',
        lightMode: 'Ativar tema claro',
        darkMode: 'Ativar tema escuro',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
        navigation: 'Navegação principal',
        aboutTitle: 'Sobre',
        aboutTitleHighlight: 'mim',
        aboutText1:
            'Sou Software Developer na IntuitiveCare, onde trabalho com Python, AWS e PostgreSQL em sistemas do ciclo financeiro hospitalar. Modernizo serviços legados, desenvolvo integrações TISS e investigo falhas em produção, com atenção à segurança dos dados, à confiabilidade e à manutenção do software.',
        aboutText2:
            'Formado em Análise e Desenvolvimento de Sistemas pela UNIESP, trago uma trajetória em suporte, infraestrutura Linux, automação e desenvolvimento full-stack. Essa visão de ponta a ponta também orienta o Pedido Divino: uma plataforma que desenvolvi para conectar pedidos, entregas e atendimento no salão à gestão de um restaurante.',
        aboutImageAlt: 'Geraldo Alves, Software Developer',
        traits: ['Sistemas em produção', 'Integrações', 'Testes automatizados', 'Visão de produto'],
        experienceTitle: 'Experiência',
        experienceTitleHighlight: 'profissional',
        experience: {
            role: 'Software Developer',
            company: 'IntuitiveCare',
            period: 'Abril/2026 — Atual',
            description:
                'Engenharia backend para o ciclo financeiro hospitalar, com dados de saúde e integrações TISS em um ambiente regulado pela LGPD. Entregas incrementais, especificações claras e testes orientam meu trabalho com a equipe.',
            bullets: [
                'Migração de serviços HTTP legados em Chalice para workflows com Python, AWS Lambda, SQS, EventBridge e PostgreSQL, preservando o comportamento das operações.',
                'Desenvolvimento e manutenção de integrações TISS: geração de XML, mapeamento de campos e validações para o envio de faturamento às operadoras.',
                'Investigação de falhas em produção entre APIs, bancos de dados, serviços AWS e portais externos; atualização de runtimes Python e pipelines de CI/CD.',
                'Desenho de uma estratégia de observabilidade com CloudWatch, S3 e Athena junto à infraestrutura; entregas rastreáveis com pytest, JSON Schema e SQL parametrizado.'
            ],
            chips: [
                'Python',
                'AWS Lambda',
                'SQS',
                'EventBridge',
                'PostgreSQL',
                'XML / TISS',
                'pytest'
            ]
        },
        projectsTitle: 'Projetos que',
        projectsTitleHighlight: 'mostram meu trabalho',
        projectStatus: {
            completed: 'Concluído',
            published: 'Publicado',
            inDevelopment: 'Em desenvolvimento',
            planning: 'Planejamento'
        },
        projectButtons: {
            github: 'Código no GitHub',
            demo: 'Ver projeto',
            article: 'Ver relato',
            spigot: 'Ver no SpigotMC',
            website: 'Visitar plataforma',
            details: 'Por dentro do projeto',
            inDevelopment: 'Em desenvolvimento'
        },
        featuredLabel: 'PROJETO EM DESTAQUE',
        featuredHeadline: 'Do pedido ao fechamento.',
        operationsTitle: 'A operação, conectada',
        engineeringTitle: 'A engenharia por trás',
        projects: {
            pedidoDivino: {
                title: 'Pedido Divino',
                description:
                    'Uma plataforma para restaurantes que reúne cardápio digital, pedidos online, delivery e atendimento no salão. Equipe, entregas e relacionamento com clientes em uma única experiência.',
                operations:
                    'Clientes compram pelo cardápio digital; a loja administra pedidos, catálogo, cupons e fidelidade; motoboys acompanham entregas pelo mapa. No salão, a operação reúne mesas, reservas, comandas, cozinha, caixa e estacionamento, além de comunicação por WhatsApp, impressão e relatórios.',
                engineering:
                    'Desenvolvi uma aplicação multiloja com frontend em Next.js, React e TypeScript, API em Java e Spring Boot, PostgreSQL e autenticação com controle de acesso por funções. O projeto conecta processos operacionais complexos em um produto utilizável e integrado.'
            },
            forumhub: {
                title: 'Forum HUB',
                description:
                    'Backend de um fórum desenvolvido no programa Oracle ONE, da Alura. Um projeto de formação que aplica Java, Spring e PostgreSQL à construção de uma API.'
            },
            medapi: {
                title: 'MedAPI',
                description:
                    'Projeto de API REST que aplica Java, Spring e persistência em MySQL, com documentação Swagger. Uma demonstração prática de desenvolvimento backend para aplicações corporativas.'
            },
            telaAI: {
                title: 'TelaAI',
                description:
                    'Plataforma que desenvolvi para compartilhar telas e assistir a jogos com amigos pelo navegador. Utiliza WebRTC com conexões P2P entre o transmissor e cada espectador, sinalização via Node.js e Socket.IO e negociação de conectividade com ICE/STUN. O coturn fornece retransmissão TURN quando a conexão direta não é possível. A interface em React permite trocar a tela sem alterar o link e ajustar a qualidade por espectador.'
            },
            jobsMemory: {
                title: 'Jobs Memory',
                description:
                    'Aplicação full-stack para organizar candidaturas de emprego, acompanhar oportunidades em um dashboard e gerenciar lembretes. Backend Java/Spring e interface Angular.'
            },
            rustdeskInfra: {
                title: 'Acesso remoto corporativo',
                description:
                    'Reestruturação do acesso remoto na MasterTechPB com RustDesk auto-hospedado, Linux, Proxmox e Docker. Desenvolvi um instalador NSIS e evoluí o dashboard em Go e Vue, com métricas e auditoria de sessões.'
            },
            restrainingOrder: {
                title: 'RestrainingOrder',
                description:
                    'Plugin desenvolvido em Java para Minecraft 1.13+, publicado no SpigotMC. Permite que jogadores mantenham usuários indesejados à distância para reduzir perseguições e perturbações em servidores de sobrevivência. Utiliza matemática vetorial para afastar o jogador bloqueado ao entrar no raio de proteção, com configuração em português e inglês.'
            }
        },
        skillsTitle: 'Tecnologias',
        skillsTitleHighlight: '& prática',
        skillsIntro:
            'Meu foco no dia a dia: Python, Java, AWS e PostgreSQL. Uma base que se conecta à experiência em frontend, infraestrutura e automação.',
        techCategories: {
            languages: 'Linguagens',
            frameworks: 'Frameworks e bibliotecas',
            databases: 'Bancos de dados e ORM',
            cloud: 'Cloud e infraestrutura',
            devops: 'Versionamento e build',
            tools: 'Ferramentas de desenvolvimento'
        },
        contactTitle: 'Vamos conversar sobre',
        contactTitleHighlight: 'sua próxima contratação',
        contactTitleEnd: '?',
        contactText:
            'Estou aberto a oportunidades como Software Developer ou Engenheiro de Software em equipes nacionais e internacionais. Se você busca alguém que conecta engenharia ao contexto do negócio, vamos conversar.',
        contactButtons: {
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },
        footer: 'Construído com código, curiosidade e café.'
    },
    en: {
        inicio: 'Home',
        sobre: 'About',
        experiencia: 'Experience',
        projetos: 'Projects',
        habilidades: 'Skills',
        contato: "Let's talk",
        pageTitle: 'Geraldo Alves | Software Developer',
        pageDescription:
            'Software Developer at IntuitiveCare. Python, Java, AWS and PostgreSQL for integrations, production systems and complete products.',
        heroName: 'Geraldo Alves',
        heroRole: 'Software Developer',
        heroEyebrow: 'SOFTWARE · INTEGRATIONS · SOLUTIONS',
        welcome:
            'I build software around the problems businesses need to solve. At IntuitiveCare, I modernize healthcare systems and integrations. With Pedido Divino, I bring together ordering, delivery and management to simplify day-to-day restaurant operations.',
        tagline: 'From workflow to product. From code to production.',
        typedStrings: [
            "Hi, I'm Geraldo",
            "I'm a Software Developer",
            'I connect systems and simplify operations',
            'I turn pain points into solutions'
        ],
        viewProjects: 'Explore projects',
        skipLink: 'Skip to content',
        switchLanguage: 'Mudar para português brasileiro',
        lightMode: 'Switch to light theme',
        darkMode: 'Switch to dark theme',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        navigation: 'Main navigation',
        aboutTitle: 'About',
        aboutTitleHighlight: 'me',
        aboutText1:
            "I'm a Software Developer at IntuitiveCare, working with Python, AWS and PostgreSQL on hospital revenue cycle systems. I modernize legacy services, build integrations using Brazil's TISS healthcare data exchange standard, and investigate production issues, with a focus on data security, reliability and maintainability.",
        aboutText2:
            'I hold a degree in Systems Analysis and Development from UNIESP. My background spans technical support, Linux infrastructure, automation and full-stack development. That end-to-end perspective also shapes Pedido Divino, a platform I built to connect restaurant orders, delivery and dine-in service with day-to-day management.',
        aboutImageAlt: 'Geraldo Alves, Software Developer',
        traits: ['Production systems', 'Integrations', 'Automated testing', 'Product thinking'],
        experienceTitle: 'Professional',
        experienceTitleHighlight: 'experience',
        experience: {
            role: 'Software Developer',
            company: 'IntuitiveCare',
            period: 'April 2026 — Present',
            description:
                "Backend engineering for hospital revenue cycle management, handling healthcare data and TISS integrations under Brazil's LGPD data protection requirements. I work with the team through clear specifications, incremental delivery and automated testing.",
            bullets: [
                'Migrating legacy Chalice HTTP services to event-driven workflows with Python, AWS Lambda, SQS, EventBridge and PostgreSQL while preserving existing behavior.',
                'Building and maintaining TISS integrations, including XML generation, field mapping and data validation for billing submissions to health insurers.',
                'Tracing production failures across APIs, databases, AWS services and external portals; updating Python runtimes and CI/CD pipelines.',
                'Designing an observability strategy with CloudWatch, S3 and Athena alongside the infrastructure team; delivering traceable changes with pytest, JSON Schema and parameterized SQL.'
            ],
            chips: [
                'Python',
                'AWS Lambda',
                'SQS',
                'EventBridge',
                'PostgreSQL',
                'XML / TISS',
                'pytest'
            ]
        },
        projectsTitle: 'Selected',
        projectsTitleHighlight: 'projects',
        projectStatus: {
            completed: 'Completed',
            published: 'Published',
            inDevelopment: 'In development',
            planning: 'Planned'
        },
        projectButtons: {
            github: 'View code',
            demo: 'View project',
            article: 'Read the story',
            spigot: 'View on SpigotMC',
            website: 'Visit website',
            details: 'Inside the project',
            inDevelopment: 'In development'
        },
        featuredLabel: 'FEATURED PROJECT',
        featuredHeadline: 'From the first order to closing time.',
        operationsTitle: 'Connected restaurant operations',
        engineeringTitle: 'Behind the product',
        projects: {
            pedidoDivino: {
                title: 'Pedido Divino',
                description:
                    'A restaurant platform bringing together digital menus, online ordering, delivery and dine-in service. One experience connecting staff, deliveries and customer relationships.',
                operations:
                    'Customers order from a digital menu; restaurants manage orders, catalogs, coupons and loyalty programs; couriers track deliveries on a map. Dine-in operations cover tables, reservations, tabs, kitchen workflows, checkout and parking, with WhatsApp communication, printing and reports.',
                engineering:
                    'I built a multi-store application with a Next.js, React and TypeScript frontend, a Java and Spring Boot API, PostgreSQL, and authentication with role-based access control. The project translates complex operational processes into a usable, integrated product.'
            },
            forumhub: {
                title: 'Forum HUB',
                description:
                    "A forum backend built during Alura's Oracle ONE program. This learning project applies Java, Spring and PostgreSQL to API development."
            },
            medapi: {
                title: 'MedAPI',
                description:
                    'A REST API project using Java, Spring and MySQL persistence, with Swagger documentation. A practical demonstration of backend development for business applications.'
            },
            telaAI: {
                title: 'TelaAI',
                description:
                    'A platform I built for sharing screens and watching games with friends in the browser. Uses WebRTC with P2P connections between the broadcaster and each viewer, Node.js and Socket.IO for signaling, and ICE/STUN for connectivity negotiation. coturn provides TURN relay when a direct connection cannot be established. The React interface supports switching the shared screen without changing the room link and adjusting quality for each viewer.'
            },
            jobsMemory: {
                title: 'Jobs Memory',
                description:
                    'A full-stack application for organizing job applications, tracking opportunities in a dashboard and managing reminders, with a Java/Spring backend and Angular interface.'
            },
            rustdeskInfra: {
                title: 'Corporate remote access',
                description:
                    'Rebuilt remote access at MasterTechPB with self-hosted RustDesk, Linux, Proxmox and Docker. I built an NSIS installer and extended a Go and Vue management dashboard with metrics and session auditing.'
            },
            restrainingOrder: {
                title: 'RestrainingOrder',
                description:
                    'A Java plugin for Minecraft 1.13+, published on SpigotMC. It lets players keep unwanted users at a distance to reduce harassment and disruption on survival servers. Uses vector math to push blocked players away when they enter the protected radius, with configuration in English and Portuguese.'
            }
        },
        skillsTitle: 'Technologies',
        skillsTitleHighlight: '& practice',
        skillsIntro:
            'My core focus: Python, Java, AWS and PostgreSQL, backed by experience in frontend development, infrastructure and automation.',
        techCategories: {
            languages: 'Languages',
            frameworks: 'Frameworks & libraries',
            databases: 'Databases & ORM',
            cloud: 'Cloud & infrastructure',
            devops: 'Version control & build',
            tools: 'Development tools'
        },
        contactTitle: "Let's talk about",
        contactTitleHighlight: 'your next hire',
        contactTitleEnd: '.',
        contactText:
            "I'm open to Software Developer and Software Engineer opportunities with teams in Brazil and internationally. If you're looking for someone who connects engineering decisions to business needs, let's talk.",
        contactButtons: {
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },
        footer: 'Built with code, curiosity and coffee.'
    }
}

export const useApp = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useApp must be used within AppProvider')
    return context
}

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage)
    const [theme, setTheme] = useState('light')
    const t = translations[language]

    const toggleLanguage = () => {
        const next = language === 'pt-BR' ? 'en' : 'pt-BR'
        setLanguage(next)
        saveLanguage(next)
    }
    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

    useEffect(() => {
        document.documentElement.lang = language
        document.title = t.pageTitle
        const description = document.querySelector('meta[name="description"]')
        if (description) description.content = t.pageDescription
    }, [language, t])

    return (
        <AppContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
            {children}
        </AppContext.Provider>
    )
}
