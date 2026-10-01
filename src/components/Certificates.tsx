import React, { useState } from "react";
import { certificatesData } from "../data/certificates";
import type { CertificateItem } from "../data/certificates";
import { CertificateCard } from "./CertificateCard";
import { CertificateModal } from "./CertificateModal";
import { Award } from "lucide-react";

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Official Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certificates &amp; Training
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Official certificates of completion, technical qualifications, and academic credentials.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onView={(selected) => setSelectedCert(selected)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
