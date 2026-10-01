import React, { useState } from "react";
import { certificatesData } from "../data/certificates";
import { badgesData } from "../data/badges";
import { Search, ShieldCheck, CheckCircle2, AlertCircle, Award, BadgeCheck } from "lucide-react";

export const QuickVerify: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const matchedCert = certificatesData.find(
    (c) => c.credentialId.toLowerCase() === query.trim().toLowerCase()
  );
  const matchedBadge = badgesData.find(
    (b) => b.badgeId.toLowerCase() === query.trim().toLowerCase()
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(true);
    }
  };

  return (
    <section id="verify" className="py-20 relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Official Credential Lookup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verify a Certificate or Badge
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Enter any official Credential ID or Badge ID (e.g., <code className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded">CERT-WEBDEV-2026</code> or <code className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded">BADGE-FE-01</code>) to verify authenticity.
          </p>
        </div>

        {/* Lookup Input Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearched(false);
              }}
              placeholder="Enter Credential ID..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all cursor-pointer shadow-lg flex items-center gap-2 shrink-0"
          >
            <span>Verify</span>
          </button>
        </form>

        {/* Verification Result Card */}
        {searched && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 text-left max-w-xl mx-auto">
            {matchedCert ? (
              <div className="p-6 rounded-3xl bg-slate-800 border border-emerald-500/50 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Verified Certificate Found</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 text-xs font-mono font-bold">
                    {matchedCert.credentialId}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{matchedCert.title}</h3>
                    <p className="text-xs text-slate-300">Issued by {matchedCert.issuer} • {matchedCert.date}</p>
                    <p className="text-xs text-slate-400 mt-2">{matchedCert.description}</p>
                  </div>
                </div>
              </div>
            ) : matchedBadge ? (
              <div className="p-6 rounded-3xl bg-slate-800 border border-emerald-500/50 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Verified Badge Found</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 text-xs font-mono font-bold">
                    {matchedBadge.badgeId}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 shrink-0">
                    <BadgeCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{matchedBadge.name}</h3>
                    <p className="text-xs text-slate-300">Issued by {matchedBadge.issuer} • {matchedBadge.dateEarned}</p>
                    <p className="text-xs text-slate-400 mt-2">{matchedBadge.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-3xl bg-slate-800 border border-amber-500/40 shadow-2xl flex items-center gap-3 text-amber-300">
                <AlertCircle className="w-6 h-6 shrink-0 text-amber-400" />
                <p className="text-xs">
                  No credential matching <strong className="font-mono">{query}</strong> was found. Please check the ID or browse the certificates section below.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
