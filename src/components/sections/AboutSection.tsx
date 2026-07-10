import { useTranslation } from "react-i18next";
import { FolderKanban, Clock, Building2 } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const stats = [
  { id: 1, label: "impact.stat1", icon: FolderKanban },
  { id: 2, label: "impact.stat2", icon: Clock },
  { id: 3, label: "impact.stat3", icon: Building2 },
];

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="max-w-xl">
            <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              {t("about.kicker")}
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-10 leading-[0.9]">
              {t("about.headline_before")}{" "}
              <span className="text-emerald-500">{t("about.headline_accent")}</span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
              {t("about.description")}
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                {t("about.expertise_label")}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat) => (
              <TiltCard key={stat.id}>
                <div className="glass-card p-8 flex items-center justify-between border-white/[0.03] hover:border-emerald-500/20 group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-display font-bold text-white leading-snug">
                        {t(stat.label)}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
