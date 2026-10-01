import React from "react";
import { siteConfig } from "../data/config";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
