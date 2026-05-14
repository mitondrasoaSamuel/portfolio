import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const projects = [
  {
    title: "COSTY",
    subtitle:
      "SaaS Gestion Restauration - Optimisation des coûts et stocks en temps réel.",
    tech: ["React.js", "AdonisJS", "MySQL"],
  },
  {
    title: "LyzAx",
    subtitle:
      "Plateforme Premium de services digitaux avec architecture micro-services.",
    tech: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "Link of Serenity",
    subtitle:
      "CRM International dédié à l'industrie du bien-être et de la santé.",
    tech: ["Next.js", "AdonisJS", "TypeScript"],
  },
  {
    title: "LCBVV Madagascar",
    subtitle: "Système de gestion judiciaire pour la Gendarmerie Nationale.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Econo-max",
    subtitle:
      "Application d'optimisation budgétaire et suivi analytique des dépenses.",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "SMMC",
    subtitle:
      "Plateforme logistique de gestion portuaire et suivi de marchandises.",
    tech: ["AdonisJS", "React", "MySQL"],
  },
  {
    title: "Nosy Be Twins Tour",
    subtitle:
      "Plateforme de réservation touristique haut de gamme à Madagascar.",
    tech: ["Next.js", "Tailwind", "Typescript"],
  },
];

const ITEMS_PER_PAGE = 2;

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              PROJETS <br /> SÉLECTIONNÉS
            </h2>
          </div>
          <div className="text-gray-500 font-light text-lg">
            Une sélection de solutions SaaS et <br /> architectures haute
            performance.
          </div>
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-12"
            >
              {paginatedProjects.map((project) => (
                <Fragment key={project.title}>
                  <TiltCard className="group cursor-pointer h-full">
                    <div className="glass-card p-10 h-full hover:border-emerald-500/30 relative overflow-hidden flex flex-col justify-between transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:text-emerald-500 transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>

                    <div className="relative z-10">
                      <div className="text-[10px] font-bold text-emerald-500 mb-4 uppercase tracking-[0.3em]">
                        Case Study 0{projects.indexOf(project) + 1}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-700">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 font-light text-lg mb-10 leading-relaxed max-w-md">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-all duration-1000" />
                    </div>
                  </TiltCard>
                </Fragment>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-20">
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    currentPage === i
                      ? "w-12 bg-emerald-500"
                      : "w-4 bg-white/10 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevPage}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPage}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
