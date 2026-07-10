import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const COLUMNS_PER_ROW = 2;
const ROWS_PER_PAGE = 2;
const ITEMS_PER_PAGE = COLUMNS_PER_ROW * ROWS_PER_PAGE;

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
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase">
              {t("projects.title")}
            </h2>
          </div>
          <p className="text-gray-500 font-light text-lg max-w-sm">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-8"
            >
              {paginatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-16">
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Page ${i + 1}`}
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
                aria-label="Page précédente"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPage}
                aria-label="Page suivante"
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
