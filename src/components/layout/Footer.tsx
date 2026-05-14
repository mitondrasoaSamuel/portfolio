import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/samuel-fr%C3%A9d%C3%A9ric-582699292/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:mitondrasoasamuel@gmail.com', label: 'Email' },
  { icon: MessageSquare, href: 'https://wa.me/261347913887', label: 'WhatsApp' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-accent flex items-center justify-center">
              <span className="font-bold text-sm text-brand-bg">SF</span>
            </div>
            <span className="font-display font-bold text-lg">SAMUEL <span className="text-emerald-accent">FRÉDÉRIC</span></span>
          </div>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-2">
            Full-Stack Developer • SaaS Architect
          </p>
        </div>

        <div className="flex gap-8">
          {socialLinks.map((social) => (
            <a 
              key={social.label} 
              href={social.href}
              className="text-gray-500 hover:text-emerald-accent transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-gray-600 text-xs text-center md:text-right">
          © {year} SAMUEL FRÉDÉRIC. <br className="md:hidden" /> {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
