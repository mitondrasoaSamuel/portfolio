import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  projectItemsEn,
  projectItemsEs,
  projectItemsFr,
} from "./i18n/projectItems";
import {
  experienceItemsEn,
  experienceItemsEs,
  experienceItemsFr,
} from "./i18n/experienceItems";

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
          "Développeur Full-Stack JavaScript/TypeScript — Spécialiste React.js, Next.js & Node.js",
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
          "Développeur Full-Stack spécialisé en React.js, Next.js et Node.js (AdonisJS). Je conçois des applications SaaS, CRM et ERP performantes et évolutives, de A à Z. Curieux et rigoureux, j'aime comprendre les vrais besoins avant de coder, pour livrer des solutions qui durent.",
        expertise_label: "Expert en AdonisJS & React",
      },
      impact: {
        title: "Impact & Résultats",
        stat1: "15 projets livrés",
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
            skills: ["React / Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
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
        subtitle:
          "Une sélection de solutions SaaS et architectures haute performance.",
        caseStudy: "Étude de cas 0{{number}}",
        view_live: "Voir le projet",
        view_repo: "Voir le repo GitHub",
        repo_unavailable: "Repo GitHub non disponible",
        live_unavailable: "Site non disponible",
        items: projectItemsFr,
      },
      experience: {
        headline_before: "Parcours ",
        headline_accent: "Professionnel",
        items: experienceItemsFr,
      },
      contact: {
        title: "Travaillons ensemble",
        subtitle: "Un projet ? Une mission ? Ou juste envie de discuter ?",
        headline_before: "PARLONS DE VOTRE ",
        headline_accent: "PROJET",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès.",
        error: "Impossible d'envoyer le message. Réessayez plus tard.",
        validation_error: "Vérifiez le nom, l'email et que le message n'est pas vide.",
        config_error:
          "Configuration EmailJS manquante. Vérifiez VITE_EMAILJS_* dans le fichier .env.",
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
          "Full-Stack Developer JavaScript/TypeScript — React.js, Next.js & Node.js Specialist",
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
          "Full-Stack Developer specialized in React.js, Next.js and Node.js (AdonisJS). I build performant, scalable SaaS, CRM and ERP applications, end to end. Curious and thorough, I like to understand the real needs before coding, to deliver solutions built to last.",
        expertise_label: "AdonisJS & React Expert",
      },
      impact: {
        title: "Impact & Results",
        stat1: "15 projects delivered",
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
        subtitle: "The tools I use to build robust, evolvable solutions.",
        groups: {
          frontend: {
            title: "Frontend",
            skills: ["React / Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
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
        subtitle:
          "A selection of SaaS solutions and high-performance architectures.",
        caseStudy: "Case Study 0{{number}}",
        view_live: "View project",
        view_repo: "View GitHub repo",
        repo_unavailable: "GitHub repo unavailable",
        live_unavailable: "Website unavailable",
        items: projectItemsEn,
      },
      experience: {
        headline_before: "Professional ",
        headline_accent: "Journey",
        items: experienceItemsEn,
      },
      contact: {
        title: "Let's work together",
        subtitle: "A project? A mission? Or just want to chat?",
        headline_before: "LET'S TALK ABOUT YOUR ",
        headline_accent: "PROJECT",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully.",
        error: "Unable to send the message. Please try again later.",
        validation_error: "Check name, email, and that the message is not empty.",
        config_error:
          "Missing EmailJS configuration. Check VITE_EMAILJS_* variables in the .env file.",
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
          "Desarrollador Full-Stack JavaScript/TypeScript — Especialista en React.js, Next.js y Node.js",
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
          "Desarrollador Full-Stack especializado en React.js, Next.js y Node.js (AdonisJS). Diseño aplicaciones SaaS, CRM y ERP eficientes y escalables, de principio a fin. Curioso y meticuloso, me gusta entender las necesidades reales antes de programar, para ofrecer soluciones duraderas.",
        expertise_label: "Experto en AdonisJS y React",
      },
      impact: {
        title: "Impacto y Resultados",
        stat1: "15 proyectos entregados",
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
            skills: ["React / Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
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
        subtitle:
          "Una selección de soluciones SaaS y arquitecturas de alto rendimiento.",
        caseStudy: "Estudio de caso 0{{number}}",
        view_live: "Ver proyecto",
        view_repo: "Ver repo GitHub",
        repo_unavailable: "Repo GitHub no disponible",
        live_unavailable: "Sitio no disponible",
        items: projectItemsEs,
      },
      experience: {
        headline_before: "Trayectoria ",
        headline_accent: "Profesional",
        items: experienceItemsEs,
      },
      contact: {
        title: "Trabajemos juntos",
        subtitle: "¿Un proyecto? ¿Una misión? ¿O simplemente quieres charlar?",
        headline_before: "HABLEMOS DE TU ",
        headline_accent: "PROYECTO",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "Mensaje enviado con éxito.",
        error: "No se pudo enviar el mensaje. Inténtalo más tarde.",
        validation_error: "Verifica el nombre, el correo y que el mensaje no esté vacío.",
        config_error:
          "Falta la configuración de EmailJS. Verifica las variables VITE_EMAILJS_* en el archivo .env.",
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
