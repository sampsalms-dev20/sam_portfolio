import React, { useState } from "react";
import { badgesData } from "../data/badges";
import type { BadgeItem } from "../data/badges";
import { BadgeCard } from "./BadgeCard";
import { X, AlertTriangle, BadgeCheck } from "lucide-react";

export const Badges: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<BadgeItem | null>(null);

  return (
    <section id="badges" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
            <BadgeCheck className="w-4 h-4 text-purple-500" />
            <span>Digital Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Badges
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technical domain badges and specialized skill micro-credentials.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badgesData.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              onSelect={(b) => setSelectedBadge(b)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                {selectedBadge.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedBadge.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedBadge.description}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {selectedBadge.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Issuer:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedBadge.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Earned Date:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedBadge.dateEarned}</span>
              </div>
            </div>

            {selectedBadge.isPlaceholder && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>This badge is marked as a <strong>sample placeholder</strong>.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
