import React from "react";
import type { BadgeItem } from "../data/badges";
import { Globe, GitPullRequest, Code, Cpu, Sparkles, Shield, AlertCircle, Award } from "lucide-react";

interface BadgeCardProps {
  badge: BadgeItem;
  onSelect?: (badge: BadgeItem) => void;
}

export const BadgeCard: React.FC<BadgeCardProps> = ({ badge, onSelect }) => {
  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-8 h-8 text-blue-500" />;
      case "GitPullRequest":
        return <GitPullRequest className="w-8 h-8 text-purple-500" />;
      case "Code":
        return <Code className="w-8 h-8 text-emerald-500" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-cyan-500" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-amber-500" />;
      default:
        return <Shield className="w-8 h-8 text-indigo-500" />;
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(badge)}
      className="group relative rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover-lift hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top Banner Tag */}
      {badge.isPlaceholder && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50/90 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-full backdrop-blur-xs">
          <AlertCircle className="w-3 h-3" />
          <span>Placeholder</span>
        </div>
      )}

      {/* Badge Image Frame or Icon Emblem */}
      {badge.image ? (
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center p-2">
          <img
            src={badge.image}
            alt={badge.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <Award className="w-3 h-3" /> Verified Badge
          </div>
        </div>
      ) : (
        <div className="p-6 pb-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
            {renderBadgeIcon(badge.iconName)}
          </div>
        </div>
      )}

      {/* Badge Information Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill */}
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
            {badge.category}
          </span>

          {/* Name */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {badge.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
            {badge.description}
          </p>

          {/* Tagged Skills */}
          {badge.skills && badge.skills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {badge.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
          <span>{badge.issuer}</span>
          <span>{badge.dateEarned}</span>
        </div>
      </div>
    </div>
  );
};
