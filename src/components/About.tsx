import React from "react";
import { profileData } from "../data/profile";
import { GraduationCap, Heart, Target, Code2, Glasses, Cpu, Music, UserCheck } from "lucide-react";

export const About: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case "Glasses":
        return <Glasses className="w-5 h-5 text-indigo-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-500" />;
      case "Music":
        return <Music className="w-5 h-5 text-purple-500" />;
      default:
        return <UserCheck className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background &amp; Aspirations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know my academic journey, technical passions, and career trajectory as an Information Technology student.
          </p>
        </div>

        {/* Bio Card */}
        <div className="mb-12 p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full inline-block" />
            Personal Biography
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            {profileData.about}
          </p>
        </div>

        {/* Grid Cards for Education, Interests, Career Goals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-blue-500/30 pl-4 py-1 space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{edu.institution} • {edu.period}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Interests */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Interests &amp; Focus
            </h3>
            <div className="space-y-4">
              {profileData.interests.map((interest, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/60 shrink-0 mt-0.5">
                    {getInterestIcon(interest.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{interest.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Career Interests
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Target roles and professional directions I am actively developing skills for:
            </p>
            <div className="space-y-2.5">
              {profileData.careerGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
