import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-accent flex items-center justify-center">
              <span className="font-bold text-sm text-brand-bg">{profile.initials}</span>
            </div>
            <span className="font-display font-bold text-lg">
              {profile.firstName.toUpperCase()}{" "}
              <span className="text-emerald-accent">{profile.lastName.toUpperCase()}</span>
            </span>
          </div>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-2">
            {profile.roleTagline}
          </p>
        </div>

        <SocialLinks
          className="flex gap-8"
          iconClassName="text-gray-500 hover:text-emerald-accent transition-colors"
          iconSize={20}
        />

        <div className="text-gray-600 text-xs text-center md:text-right">
          © {year} {profile.displayName}. <br className="md:hidden" /> {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
