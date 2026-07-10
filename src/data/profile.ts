export const profile = {
  firstName: "Samuel",
  lastName: "Frédéric",
  displayName: "SAMUEL FRÉDÉRIC",
  initials: "SF",
  email: "mitondrasoasamuel@gmail.com",
  phoneDisplay: "+261 34 79 138 87",
  phoneWhatsApp: "261347913887",
  githubUrl: "https://github.com/mitondrasoaSamuel",
  linkedinUrl: "https://www.linkedin.com/in/samuel-fr%C3%A9d%C3%A9ric-582699292/",
  cvPath: "/cv.pdf",
  cvDownloadName: "CV_Samuel_Frederic.pdf",
  roleTagline: "Full-Stack Developer • SaaS Architect",
} as const;

export type SocialId = "github" | "linkedin" | "email" | "whatsapp";

export const socialLinks: { id: SocialId; href: string; label: string }[] = [
  { id: "github", href: profile.githubUrl, label: "GitHub" },
  { id: "linkedin", href: profile.linkedinUrl, label: "LinkedIn" },
  { id: "email", href: `mailto:${profile.email}`, label: "Email" },
  {
    id: "whatsapp",
    href: `https://wa.me/${profile.phoneWhatsApp}`,
    label: "WhatsApp",
  },
];
