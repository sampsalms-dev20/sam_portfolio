import React, { useState } from "react";
import { seminarsData } from "../data/seminars";
import type { SeminarItem } from "../data/seminars";
import { Video, Calendar, Building, X } from "lucide-react";

export const Seminars: React.FC = () => {
  const [selectedSeminar, setSelectedSeminar] = useState<SeminarItem | null>(null);

  return (
    <section id="seminars" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4 text-emerald-500" />
            <span>Attendance &amp; Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seminars &amp; Webinars
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Certificates of attendance for technical webinars, IT workshops, and educational seminars.
          </p>
        </div>

        {/* Seminars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminarsData.map((seminar) => (
            <div
              key={seminar.id}
              className="group rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setSelectedSeminar(seminar)}>
                <img
                  src={seminar.image}
                  alt={seminar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Video className="w-3 h-3" /> Webinar Cert
                </div>
              </div>

              {/* Seminar Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    <span className="truncate max-w-[200px]">{seminar.organizer}</span>
                    <span>{seminar.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {seminar.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {seminar.description}
                  </p>

                  {seminar.controlNumber && (
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/40 px-2.5 py-1 rounded-md inline-block">
                      Control No: {seminar.controlNumber}
                    </p>
                  )}
                </div>

                {/* View Action Button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <button
                    onClick={() => setSelectedSeminar(seminar)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <span>View Webinar Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSeminar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-2 text-emerald-500">
                <Video className="w-5 h-5" />
                <span className="font-bold text-slate-900 dark:text-white text-sm">Webinar Certificate View</span>
              </div>
              <button
                onClick={() => setSelectedSeminar(null)}
                className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 shadow-inner">
                <img
                  src={selectedSeminar.image}
                  alt={selectedSeminar.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs">
                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" /> Organizer
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">{selectedSeminar.organizer}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Date Conducted
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">{selectedSeminar.date}</p>
                </div>
                {selectedSeminar.controlNumber && (
                  <div>
                    <p className="text-slate-400 font-semibold uppercase tracking-wider mb-1">Control Number</p>
                    <p className="font-mono font-bold text-emerald-500">{selectedSeminar.controlNumber}</p>
                  </div>
                )}
                {selectedSeminar.platform && (
                  <div>
                    <p className="text-slate-400 font-semibold uppercase tracking-wider mb-1">Platform</p>
                    <p className="font-bold text-slate-900 dark:text-white">{selectedSeminar.platform}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
