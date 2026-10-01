import React from "react";
import type { ProjectItem } from "../data/projects";
import { ExternalLink, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div
      className={`group rounded-3xl bg-white dark:bg-slate-800/90 border transition-all duration-300 flex flex-col overflow-hidden ${
        project.featured
          ? "border-blue-500/40 dark:border-blue-500/40 shadow-xl ring-1 ring-blue-500/20"
          : "border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600"
      }`}
    >
      {/* Project Image Banner */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Featured Badge Overlay */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Featured Project</span>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
          {project.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/80 dark:border-slate-600/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(project)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              title="View Details"
            >
              <Layers className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
