export type ExperienceItemTranslation = {
  role: string;
  period: string;
  location: string;
  desc: string;
};

export type ExperienceItemsMap = Record<string, ExperienceItemTranslation>;

export const experienceItemsFr: ExperienceItemsMap = {
  "big-dev-company": {
    role: "Développeur Full-Stack",
    period: "2024 - Aujourd'hui",
    location: "Madagascar · Hybride",
    desc: "Développement de solutions SaaS (COSTY, LyzAx) et CRM international (Link of Serenity). Conception d'architectures complètes, APIs REST & GraphQL, systèmes d'abonnement et authentification sécurisée.",
  },
  "nosy-be-twins-tour": {
    role: "Développeur Web Full-Stack",
    period: "Nov. - Déc. 2025",
    location: "Madagascar · Mission ponctuelle",
    desc: "Développement d'un site vitrine touristique : présentation des offres, formulaires de réservation et de contact, optimisation des performances et de la sécurité.",
  },
  "dds-toamasina": {
    role: "Développeur Frontend",
    period: "2023 - 2024",
    location: "Madagascar",
    desc: "Projet LCBVV pour la Gendarmerie Nationale : application de suivi des véhicules volés, intégration QR code pour le suivi terrain et interfaces React.js performantes.",
  },
  "smmc-port-toamasina": {
    role: "Responsable IT / Développeur Full-Stack",
    period: "2021 - 2023",
    location: "Toamasina, Madagascar",
    desc: "Digitalisation des processus logistiques portuaires. Numérisation de +3 000 dossiers administratifs, réduction estimée de 40 % du traitement manuel, APIs internes et application mobile React Native de gestion des présences.",
  },
};

export const experienceItemsEn: ExperienceItemsMap = {
  "big-dev-company": {
    role: "Full-Stack Developer",
    period: "2024 - Present",
    location: "Madagascar · Hybrid",
    desc: "Development of SaaS solutions (COSTY, LyzAx) and international CRM (Link of Serenity). Full-stack architecture design, REST & GraphQL APIs, subscription systems and secure authentication.",
  },
  "nosy-be-twins-tour": {
    role: "Full-Stack Web Developer",
    period: "Nov. - Dec. 2025",
    location: "Madagascar · Short-term mission",
    desc: "Development of a tourism showcase website: presentation of offers, booking and contact forms, performance and security optimization.",
  },
  "dds-toamasina": {
    role: "Frontend Developer",
    period: "2023 - 2024",
    location: "Madagascar",
    desc: "LCBVV project for the National Gendarmerie: stolen vehicle tracking application, QR code integration for field monitoring and high-performance React.js interfaces.",
  },
  "smmc-port-toamasina": {
    role: "IT Manager / Full-Stack Developer",
    period: "2021 - 2023",
    location: "Toamasina, Madagascar",
    desc: "Digitalization of port logistics processes. Digitization of 3,000+ administrative files, estimated 40% reduction in manual processing, internal APIs and React Native mobile app for attendance management.",
  },
};

export const experienceItemsEs: ExperienceItemsMap = {
  "big-dev-company": {
    role: "Desarrollador Full-Stack",
    period: "2024 - Actualidad",
    location: "Madagascar · Híbrido",
    desc: "Desarrollo de soluciones SaaS (COSTY, LyzAx) y CRM internacional (Link of Serenity). Diseño de arquitecturas completas, APIs REST y GraphQL, sistemas de suscripción y autenticación segura.",
  },
  "nosy-be-twins-tour": {
    role: "Desarrollador Web Full-Stack",
    period: "Nov. - Dic. 2025",
    location: "Madagascar · Misión puntual",
    desc: "Desarrollo de un sitio web vitrina turístico: presentación de ofertas, formularios de reserva y contacto, optimización del rendimiento y la seguridad.",
  },
  "dds-toamasina": {
    role: "Desarrollador Frontend",
    period: "2023 - 2024",
    location: "Madagascar",
    desc: "Proyecto LCBVV para la Gendarmería Nacional: aplicación de seguimiento de vehículos robados, integración de código QR para seguimiento en campo e interfaces React.js de alto rendimiento.",
  },
  "smmc-port-toamasina": {
    role: "Responsable IT / Desarrollador Full-Stack",
    period: "2021 - 2023",
    location: "Toamasina, Madagascar",
    desc: "Digitalización de procesos logísticos portuarios. Digitalización de más de 3 000 expedientes administrativos, reducción estimada del 40 % del tratamiento manual, APIs internas y aplicación móvil React Native de gestión de asistencia.",
  },
};
