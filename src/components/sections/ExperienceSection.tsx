import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'International AI Startup',
    role: 'Lead SaaS Engineer',
    period: '2023 - Present',
    location: 'Remote / International',
    desc: 'Conception d’architectures SaaS évolutives pour des solutions d’IA marketing.'
  },
  {
    company: 'Gendarmerie Nationale (LCBVV)',
    role: 'Full-Stack Developer',
    period: '2022 - 2023',
    location: 'Madagascar',
    desc: 'Digitalisation du système de suivi des véhicules volés. Développement React/Node.'
  },
  {
    company: 'Econo-max / IJEERY',
    role: 'E-commerce Engineer',
    period: '2021 - 2022',
    location: 'Madagascar',
    desc: 'Optimisation UX et gestion de stock en temps réel pour une plateforme E-commerce majeure.'
  }
];

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">Parcours <span className="text-cyan-accent">Professionnel</span></h2>
          <div className="w-20 h-1 bg-cyan-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-accent via-cyan-accent to-transparent sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 sm:top-auto w-4 h-4 rounded-full bg-brand-bg border-4 border-emerald-accent sm:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

                <div className="w-full sm:w-1/2 p-8 glass-card border-white/5 hover:border-cyan-accent/30 transition-all duration-500">
                  <div className="flex items-center gap-2 text-cyan-accent text-xs font-mono mb-4 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-accent">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Briefcase className="w-3 h-3" /> {exp.role}
                    <span className="text-white/20">|</span>
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                {/* Empty spacer for desktop symmetry */}
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
