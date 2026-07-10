import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  Database as DbIcon,
  Cloud,
  Layout,
} from "lucide-react";
import TiltCard from "../ui/TiltCard";

type TechGroupId = "frontend" | "backend" | "data" | "tools";

const TECH_GROUP_ORDER: TechGroupId[] = [
  "frontend",
  "backend",
  "data",
  "tools",
];

const TECH_GROUP_ICONS: Record<TechGroupId, LucideIcon> = {
  frontend: Layout,
  backend: Terminal,
  data: DbIcon,
  tools: Cloud,
};

type TechGroupI18n = { title: string; skills: string[] };

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
            {t("tech.headline_before")}
            <span className="text-emerald-500">
              {t("tech.headline_accent")}
            </span>
          </h2>
          <p className="text-gray-500 font-light max-w-lg mx-auto">
            {t("tech.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_GROUP_ORDER.map((id) => {
            const group = t(`tech.groups.${id}`, {
              returnObjects: true,
            }) as TechGroupI18n;
            const Icon = TECH_GROUP_ICONS[id];
            return (
              <TiltCard key={id} className="h-full">
                <div className="glass-card p-8 h-full border-white/5 hover:border-emerald-500/20 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-6 text-white group-hover:text-emerald-500 transition-colors">
                    {group.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 text-sm text-gray-500 font-light"
                      >
                        <div className="w-1 h-1 rounded-full bg-emerald-500/30" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
