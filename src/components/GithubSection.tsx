import React from "react";
import { siteConfig } from "../data/config";
import { ExternalLink, GitBranch, Star, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export const GithubSection: React.FC = () => {
  return (
    <section className="py-16 relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/80 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <GithubIcon className="w-4 h-4" />
              <span>Version Control &amp; Open Source</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Explore My Code Repositories
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              All my projects, WebAR experiments, and portfolio source code are openly published on GitHub. Feel free to inspect, fork, or star my work!
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span>Active Commits</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Open Source Projects</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>React &amp; WebAR</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm shadow-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <GithubIcon className="w-5 h-5 text-slate-900" />
              <span>Visit @{siteConfig.githubUsername} on GitHub</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
