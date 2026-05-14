import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  fr: {
    translation: {
      nav: {
        about: "À propos",
        projects: "Projets",
        experience: "Expérience",
        contact: "Contact",
      },
      hero: {
        role: "Développeur Full-Stack • SaaS Engineer • AI Solutions Builder",
        mainTitle:
          "JE TRANSFORME LES BESOINS MÉTIERS EN SOLUTIONS DIGITALES MODERNES",
        description:
          "Développeur Full-Stack JavaScript/TypeScript spécialisé en React.js, Next.js, Node.js et architectures SaaS modernes. Je conçois des plateformes performantes, évolutives et orientées métier pour les entreprises ambitieuses.",
        cta_projects: "Voir mes projets",
        cta_cv: "Télécharger CV",
        cta_contact: "Me contacter",
        portrait_overlay: "Développeur full-stack",
      },
      about: {
        title: "À propos de moi",
        kicker: "Introduction",
        headline_before: "CONCEVOIR L'AVENIR DU",
        headline_accent: "SAAS",
        description:
          "Développeur Full-Stack avec plus de 3 ans d'expérience, spécialisé en React/Next.js et Node.js (AdonisJS). J'interviens sur la conception d'applications SaaS, CRM et ERP, en développant des solutions modernes, performantes et maintenables, couvrant l'intégralité du cycle de développement : frontend, backend, API et architecture métier.",
        expertise_label: "Expert en AdonisJS & React",
      },
      impact: {
        title: "Impact & Résultats",
        stat1: "14 projets livrés",
        stat2: "3 ans d'expérience",
        stat3: "11 secteurs d'activité",
        stat4: "Automatisation workflows CRM",
        stat5: "Architecture SaaS scalable",
        stat6: "Systèmes temps réel",
        stat7: "Optimisation UX & performances",
      },
      tech: {
        title: "Mon Stack Technique",
        headline_before: "STACK ",
        headline_accent: "TECH",
        subtitle:
          "Les outils que j'utilise pour bâtir des solutions robustes et évolutives.",
        groups: {
          frontend: {
            title: "Frontend",
            skills: [
              "React / Next.js",
              "Vue.js",
              "TypeScript",
              "Tailwind CSS",
            ],
          },
          backend: {
            title: "Backend",
            skills: ["Node.js", "Express.js", "AdonisJS", "Laravel"],
          },
          data: {
            title: "Data",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
          },
          tools: {
            title: "Outils",
            skills: ["Git", "GitHub Actions", "Figma", "Postman"],
          },
        },
      },
      projects: {
        title: "Projets Sélectionnés",
        view_live: "Voir le projet",
      },
      contact: {
        title: "Travaillons ensemble",
        subtitle: "Un projet ? Une mission ? Ou juste envie de discuter ?",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        whatsapp: "WhatsApp",
      },
      footer: {
        rights: "Tous droits réservés.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        role: "Full-Stack Developer • SaaS Engineer • AI Solutions Builder",
        mainTitle: "I TURN BUSINESS NEEDS INTO MODERN DIGITAL SOLUTIONS",
        description:
          "Full-Stack JavaScript/TypeScript Developer specialized in React.js, Next.js, Node.js, and modern SaaS architectures. I build high-performance, scalable, and business-oriented platforms for ambitious companies.",
        cta_projects: "View projects",
        cta_cv: "Download CV",
        cta_contact: "Contact me",
        portrait_overlay: "Full-stack developer",
      },
      about: {
        title: "About me",
        kicker: "Introduction",
        headline_before: "SHAPING THE FUTURE OF",
        headline_accent: "SAAS",
        description:
          "Full-Stack Developer with over 3 years of experience, specialized in React/Next.js and Node.js (AdonisJS). I work on the design of SaaS, CRM and ERP applications, building modern, high-performance and maintainable solutions, covering the entire development cycle: frontend, backend, API and business architecture.",
        expertise_label: "Expert in AdonisJS & React",
      },
      impact: {
        title: "Impact & Results",
        stat1: "14 projects delivered",
        stat2: "3 years of experience",
        stat3: "11 industries served",
        stat4: "CRM workflow automation",
        stat5: "Scalable SaaS architecture",
        stat6: "Real-time systems",
        stat7: "UX & performance optimization",
      },
      tech: {
        title: "Tech Stack",
        headline_before: "STACK ",
        headline_accent: "TECH",
        subtitle:
          "The tools I use to build robust, evolvable solutions.",
        groups: {
          frontend: {
            title: "Frontend",
            skills: [
              "React / Next.js",
              "Vue.js",
              "TypeScript",
              "Tailwind CSS",
            ],
          },
          backend: {
            title: "Backend",
            skills: ["Node.js", "Express.js", "AdonisJS", "Laravel"],
          },
          data: {
            title: "Data",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
          },
          tools: {
            title: "Outils",
            skills: ["Git", "GitHub Actions", "Figma", "Postman"],
          },
        },
      },
      projects: {
        title: "Selected Projects",
        view_live: "Live demo",
      },
      contact: {
        title: "Let's work together",
        subtitle: "A project? A mission? Or just want to chat?",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        whatsapp: "WhatsApp",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        projects: "Proyectos",
        experience: "Experiencia",
        contact: "Contacto",
      },
      hero: {
        role: "Desarrollador Full-Stack • Ingeniero SaaS • Constructor de Soluciones IA",
        mainTitle:
          "TRANSFORMO LAS NECESIDADES DEL NEGOCIO EN SOLUCIONES DIGITALES MODERNAS",
        description:
          "Desarrollador Full-Stack JavaScript/TypeScript especializado en React.js, Next.js, Node.js y arquitecturas SaaS modernas. Creo plataformas de alto rendimiento, escalables y orientadas al negocio para empresas ambiciosas.",
        cta_projects: "Ver proyectos",
        cta_cv: "Descargar CV",
        cta_contact: "Contactar",
        portrait_overlay: "Desarrollador full-stack",
      },
      about: {
        title: "Sobre mí",
        kicker: "Introducción",
        headline_before: "DISEÑANDO EL FUTURO DEL",
        headline_accent: "SAAS",
        description:
          "Desarrollador Full-Stack con más de 3 años de experiencia, especializado en React/Next.js y Node.js (AdonisJS). Intervengo en el diseño de aplicaciones SaaS, CRM y ERP, desarrollando soluciones modernas, de alto rendimiento y mantenibles, cubriendo todo el ciclo de desarrollo: frontend, backend, API y arquitectura de negocio.",
        expertise_label: "Experto en AdonisJS y React",
      },
      impact: {
        title: "Impacto y Resultados",
        stat1: "14 proyectos entregados",
        stat2: "3 años de experiencia",
        stat3: "11 sectores de actividad",
        stat4: "Automatización de flujos CRM",
        stat5: "Arquitectura SaaS escalable",
        stat6: "Sistemas en tiempo real",
        stat7: "Optimización de UX y rendimiento",
      },
      tech: {
        title: "Stack Tecnológico",
        headline_before: "STACK ",
        headline_accent: "TECNO",
        subtitle:
          "Las herramientas que uso para construir soluciones robustas y evolutivas.",
        groups: {
          frontend: {
            title: "Front-end",
            skills: [
              "React / Next.js",
              "Vue.js",
              "TypeScript",
              "Tailwind CSS",
            ],
          },
          backend: {
            title: "Back-end",
            skills: ["Node.js", "Express.js", "AdonisJS", "Laravel"],
          },
          data: {
            title: "Datos",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
          },
          tools: {
            title: "Herramientas",
            skills: ["Git", "GitHub Actions", "Figma", "Postman"],
          },
        },
      },
      projects: {
        title: "Proyectos Seleccionados",
        view_live: "Ver proyecto",
      },
      contact: {
        title: "Trabajemos juntos",
        subtitle: "¿Un proyecto? ¿Una misión? ¿O simplemente quieres charlar?",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar",
        whatsapp: "WhatsApp",
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
