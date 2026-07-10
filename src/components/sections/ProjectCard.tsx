import { ArrowRight, Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { isValidProjectLink, type Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const hasLiveLink = isValidProjectLink(project.link);
  const hasGithubLink = isValidProjectLink(project.githubLink);
  const hasAnyLink = hasLiveLink || hasGithubLink;
  const itemKey = `projects.items.${project.id}`;

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-[#0a0e14] border border-white/[0.06] hover:border-white/10 transition-colors duration-500">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={t(`${itemKey}.headline`)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

        <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-md bg-[#0a0e14]/90 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-black/50">
          {t(`${itemKey}.category`)}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-emerald-400 text-[11px] font-semibold uppercase tracking-[0.2em] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {project.title}
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-snug tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {t(`${itemKey}.headline`)}
          </h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-4">
          {t(`${itemKey}.subtitle`)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-[11px] text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasAnyLink && (
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-4">
              {hasGithubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label={`${t("projects.view_repo")} — ${project.title}`}
                  title={t("projects.view_repo")}
                >
                  <Github size={20} strokeWidth={1.75} />
                </a>
              )}
              {hasLiveLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label={t("projects.view_live")}
                  title={t("projects.view_live")}
                >
                  <Globe size={20} strokeWidth={1.75} />
                </a>
              )}
            </div>

            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                {t("projects.view_live")}
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
