import React, { useState } from "react";
import { siteConfig } from "../data/config";
import { Mail, Copy, Check, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./Icons";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactLinks = [
    {
      name: "Email Address",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      isCopyable: true
    },
    {
      name: "GitHub Profile",
      value: `@${siteConfig.githubUsername}`,
      href: siteConfig.githubUrl,
      icon: GithubIcon,
      color: "bg-slate-500/10 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700",
      isCopyable: false
    },
    {
      name: "LinkedIn Profile",
      value: "Samson Molina",
      href: siteConfig.linkedinUrl,
      icon: LinkedinIcon,
      color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800",
      isCopyable: false
    },
    {
      name: "Facebook Profile",
      value: "Samson B. Molina",
      href: siteConfig.facebookUrl,
      icon: FacebookIcon,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
      isCopyable: false
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect &amp; Collaborate
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project idea, academic inquiry, or collaboration offer? Reach out through any of the channels below!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${link.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {link.value}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                  <a
                    href={link.href}
                    target={link.isCopyable ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </a>

                  {link.isCopyable && (
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Copy confirmation toast */}
        {copied && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
            <Check className="w-4 h-4" />
            <span>Email address copied to clipboard!</span>
          </div>
        )}
      </div>
    </section>
  );
};
