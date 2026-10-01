import React, { useState } from "react";
import { ArrowRight, Award, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";
import { siteConfig } from "../data/config";

export const Hero: React.FC = () => {
  const [isCircle, setIsCircle] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Animated Gradient Mesh & Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl" />
        
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-800 text-amber-300 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Verified Credentials &amp; Digital Badges Showcase</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {siteConfig.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-400">
                {siteConfig.title}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to my digital credential portfolio. This space showcases my verified certificates of completion, technical skill badges, academic qualifications, and recognized achievements in Information Technology and Software Systems.
            </p>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {["Verified Certificates", "Technical Badges", "CSS NC II", "Web Development", "WebAR & 3D", "Git & CI/CD"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={() => scrollTo("certificates")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Explore Certificates</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("badges")}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 font-bold text-sm border border-slate-700 shadow-xs flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <BadgeCheck className="w-4 h-4 text-purple-400" />
                <span>View Digital Badges</span>
              </button>
            </div>
          </div>

          {/* Right Image / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group max-w-sm w-full flex flex-col items-center">
              {/* Glowing Halo */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 opacity-80 blur-xl group-hover:opacity-100 transition-all duration-700 ease-in-out ${
                  isCircle ? "rounded-full" : "rounded-3xl"
                }`}
              />
              
              {/* Seamless Fit Circle / Square Profile Image */}
              <button
                onClick={() => setIsCircle(!isCircle)}
                title="Click profile photo to toggle shape"
                className={`relative w-72 h-72 sm:w-80 sm:h-80 bg-white border-4 border-amber-500/90 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:scale-[1.02] active:scale-[0.98] ${
                  isCircle ? "rounded-full" : "rounded-3xl"
                }`}
              >
                <img
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-center bg-white transition-all duration-700 ease-in-out"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
