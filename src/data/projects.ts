import lcbvvImage from "../assets/images/lcbvv.png";
import costyImage from "../assets/images/costy.png";
import lyzaxImage from "../assets/images/lyzax.png";
import linkOfSerenityImage from "../assets/images/link.png";
import olanaTalentMobileImage from "../assets/images/olona.png";
import pharmasoftImage from "../assets/images/pharma.png";
import soasoftImage from "../assets/images/soa.png";
import nosyBeTwinsTourImage from "../assets/images/nosy be.png";
import avaBeImage from "../assets/images/ava-be.png";
import econoMaxImage from "../assets/images/economax.png";
import onboardingImage from "../assets/images/onboard.png";
import automizeaImage from "../assets/images/automizea.png";
import ecomiLocationImage from "../assets/images/ecomi.png";
import sitaNewsImage from "../assets/images/sita.png";
import leaderPneusImage from "../assets/images/leader.png";

export interface Project {
  id: string;
  title: string;
  image: string;
  tech: string[];
  /** Use "#" or omit to hide live link and "Voir le projet" CTA */
  link?: string;
  /** Use "#" or omit to hide GitHub icon */
  githubLink?: string;
}

export function isValidProjectLink(link?: string) {
  const normalized = link?.trim();
  return Boolean(normalized && normalized !== "#");
}

export const projects: Project[] = [
  {
    id: "costy",
    title: "COSTY",
    image: costyImage,
    tech: ["React.js", "AdonisJS", "MySQL"],
    link: "https://app.costy.fr/login",
    githubLink: "#",
  },
  {
    id: "lyzax",
    title: "LyzAx",
    image: lyzaxImage,
    tech: ["Vue 3", "Inertia.js", "Tailwind CSS", "Laravel Echo", "Pusher"],
    link: "https://lyzax.rtkagency.com/",
    githubLink: "#",
  },
  {
    id: "link-of-serenity",
    title: "Link of Serenity",
    image: linkOfSerenityImage,
    tech: ["Next.js", "React", "AdonisJS", "Socket.io", "Stripe"],
    link: "https://vigilant-beaver.185-209-228-202.plesk.page/?theme=once",
    githubLink: "#",
  },
  {
    id: "olana-talent-mobile",
    title: "Olana Talent Mobile",
    image: olanaTalentMobileImage,
    tech: ["Expo", "React Native", "TypeScript"],
    link: "#",
    githubLink: "#",
  },
  {
    id: "pharmasoft",
    title: "Pharma'Soft",
    image: pharmasoftImage,
    tech: ["React", "Express", "Socket.io", "MySQL"],
    link: "http://pharmasoft.bigdevcompany.com/login",
    githubLink: "#",
  },
  {
    id: "soasoft",
    title: "Soa'Soft",
    image: soasoftImage,
    tech: ["Electron", "React", "Node.js", "Express", "MySQL"],
    link: "https://soasoft.bigdevacademy.com/login#/login",
    githubLink: "#",
  },
  {
    id: "nosy-be-twins-tour",
    title: "Nosy Be Twins Tour",
    image: nosyBeTwinsTourImage,
    tech: ["Next.js", "Tailwind", "Typescript"],
    link: "http://www.nosybetwinstour.com/",
    githubLink: "#",
  },
  {
    id: "ava-be",
    title: "AVA BE",
    image: avaBeImage,
    tech: ["React", "Vite", "Express", "Google APIs"],
    link: "#",
    githubLink: "#",
  },
  {
    id: "economax",
    title: "EconoMax",
    image: econoMaxImage,
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "reCAPTCHA"],
    link: "https://econo-max.fr/",
    githubLink: "#",
  },
  {
    id: "onboarding",
    title: "OnBoarding",
    image: onboardingImage,
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    link: "https://onboarding.moryjinabovictorbrillant.com/",
    githubLink: "#",
  },
  {
    id: "automizea",
    title: "Automizea",
    image: automizeaImage,
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "reCAPTCHA"],
    link: "https://automizea.fr/",
    githubLink: "#",
  },
  {
    id: "ecomi-location",
    title: "ECOMi Location",
    image: ecomiLocationImage,
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    link: "http://ecomi.srv988443.hstgr.cloud/",
    githubLink: "#",
  },
  {
    id: "sitanews",
    title: "SitaNews",
    image: sitaNewsImage,
    tech: ["Laravel", "PHP", "Vite", "JavaScript", "MySQL", "Axios"],
    link: "https://www.sitanews.net/",
    githubLink: "#",
  },
  {
    id: "leader-pneus",
    title: "Leader Pneus",
    image: leaderPneusImage,
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Express", "MySQL"],
    link: "https://say-decor-admissions-madrid.trycloudflare.com/",
    githubLink: "#",
  },
  {
    id: "lcbvv",
    title: "LCBVV Madagascar",
    image: lcbvvImage,
    tech: ["React.js", "MySQL", "Laravel"],
    link: "https://lcbvv.vercel.app/",
    githubLink: "#",
  },
];
