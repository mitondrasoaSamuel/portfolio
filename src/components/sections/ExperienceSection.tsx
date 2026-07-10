import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../../data/experiences";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
            {t("experience.headline_before")}
            <span className="text-emerald-500">
              {t("experience.headline_accent")}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-accent via-cyan-accent to-transparent -translate-x-1/2 sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const itemKey = `experience.items.${exp.id}`;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-stretch pl-10 sm:pl-0 ${
                    i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 top-8 sm:top-1/2 w-4 h-4 rounded-full bg-brand-bg border-4 border-emerald-accent -translate-x-1/2 sm:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

                  <div
                    className={`w-full min-w-0 sm:w-[calc(50%-1rem)] p-6 sm:p-8 glass-card border-white/5 hover:border-cyan-accent/30 transition-colors duration-500 ${
                      i % 2 === 0 ? "sm:mr-1" : "sm:ml-1"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-cyan-accent text-xs font-mono mb-4 uppercase tracking-widest">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {t(`${itemKey}.period`)}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1 break-words">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-2 gap-y-2 text-gray-500 text-xs sm:text-sm mb-4">
                      <span className="inline-flex items-start sm:items-center gap-2 min-w-0">
                        <Briefcase className="w-3 h-3 shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words">{t(`${itemKey}.role`)}</span>
                      </span>
                      <span className="text-white/20 hidden sm:inline shrink-0">|</span>
                      <span className="inline-flex items-start sm:items-center gap-2 min-w-0">
                        <MapPin className="w-3 h-3 shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words">{t(`${itemKey}.location`)}</span>
                      </span>
                    </div>
                    <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed break-words">
                      {t(`${itemKey}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
