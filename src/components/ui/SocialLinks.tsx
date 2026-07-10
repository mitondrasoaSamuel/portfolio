import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { socialLinks, type SocialId } from "../../data/profile";

const SOCIAL_ICONS: Record<SocialId, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  whatsapp: MessageSquare,
};

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  openInNewTab?: boolean;
};

export default function SocialLinks({
  className = "flex gap-6",
  iconClassName = "text-white/30 hover:text-white transition-colors",
  iconSize = 18,
  openInNewTab = true,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const Icon = SOCIAL_ICONS[social.id];
        return (
          <a
            key={social.id}
            href={social.href}
            aria-label={social.label}
            className={iconClassName}
            {...(openInNewTab
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
