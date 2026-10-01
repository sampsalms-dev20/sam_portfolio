import React from "react";
import type { CertificateItem } from "../data/certificates";
import { Award, ShieldCheck } from "lucide-react";

interface CertificateCardProps {
  certificate: CertificateItem;
  onView: (cert: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  return (
    <div className="group rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Certificate Image Frame */}
      <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
        />

        {certificate.isPlaceholder && (
          <div className="absolute top-3 left-3 bg-amber-500/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs tracking-wider">
            Sample Placeholder
          </div>
        )}

        <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-amber-500 shadow-md">
          <Award className="w-4 h-4" />
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <span>{certificate.issuer}</span>
            <span>{certificate.date}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {certificate.title}
          </h3>

          {certificate.credentialId && (
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/40 px-2.5 py-1 rounded-md inline-block">
              ID: {certificate.credentialId}
            </p>
          )}
        </div>

        {/* Skills Tagged */}
        <div className="flex flex-wrap gap-1">
          {certificate.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <button
            onClick={() => onView(certificate)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-amber-600 dark:hover:bg-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>View Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
};
