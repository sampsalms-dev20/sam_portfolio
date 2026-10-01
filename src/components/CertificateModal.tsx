import React from "react";
import type { CertificateItem } from "../data/certificates";
import { X, ExternalLink, ShieldCheck, Calendar, Building, CheckCircle } from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2 text-amber-500">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-bold text-slate-900 dark:text-white text-sm">Certificate Verification View</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details Metadata Grid */}
          <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Building className="w-3.5 h-3.5" /> Issuing Organization
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{certificate.issuer}</p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Date Issued
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{certificate.date}</p>
            </div>

            {certificate.credentialId && (
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  Credential ID
                </p>
                <p className="text-sm font-mono font-bold text-amber-600 dark:text-amber-400">{certificate.credentialId}</p>
              </div>
            )}

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Verification Status
              </p>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                <CheckCircle className="w-3 h-3" /> Valid Credential
              </span>
            </div>
          </div>

          {certificate.isPlaceholder && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs">
              💡 <strong>Note:</strong> This is currently a sample placeholder card. Update <code>src/data/certificates.ts</code> with your actual certificates!
            </div>
          )}

          {certificate.verificationUrl && certificate.verificationUrl !== "#" && (
            <div className="pt-2">
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify Credential on Issuer Site</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
