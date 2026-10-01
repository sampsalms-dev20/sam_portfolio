import React, { useState } from "react";
import { ArrowRight, Award, Sparkles, BadgeCheck, Video } from "lucide-react";
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
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in-up">
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {siteConfig.name}
              </h1>
            </div>

            {/* Short Introduction (Single uniform color text with course & subject) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to my portfolio! I am Samson B. Molina, a student taking Bachelor of Science in Information Technology (BSIT 4E) at Partido State University - College of Engineering &amp; Computational Sciences. This portfolio is submitted as a midterm project for C225 - ST1: Seminars and Tours.
            </p>

            {/* Academic & Skill Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {["BSIT 4E", "C225 - ST1", "Seminars & Tours", "Information Technology", "Web Development", "CSS NC II"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/60 flex items-center gap-1.5 hover:border-amber-400/60 hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons (Seminars / Webinars -> Certificates -> Badges) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={() => scrollTo("seminars")}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Video className="w-4 h-4 text-slate-950" />
                <span>Seminars / Webinars</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("certificates")}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-cyan-500/40 hover:border-cyan-400 shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Certificates</span>
              </button>

              <button
                onClick={() => scrollTo("badges")}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-amber-500/40 hover:border-amber-400 shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <BadgeCheck className="w-4 h-4 text-amber-400" />
                <span>Badges</span>
              </button>
            </div>
          </div>

          {/* Right Image / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center animate-float">
            <div className="relative group max-w-sm w-full flex flex-col items-center">
              {/* Glowing Halo in Blue & Gold dual colors */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-amber-400 to-blue-600 opacity-80 blur-xl group-hover:opacity-100 animate-glow-pulse transition-all duration-700 ease-in-out ${
                  isCircle ? "rounded-full" : "rounded-3xl"
                }`}
              />
              
              {/* Seamless Fit Circle / Square Profile Image */}
              <button
                onClick={() => setIsCircle(!isCircle)}
                title="Click profile photo to toggle shape"
                className={`relative w-72 h-72 sm:w-80 sm:h-80 bg-white border-4 border-cyan-400 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 active:scale-95 ${
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
