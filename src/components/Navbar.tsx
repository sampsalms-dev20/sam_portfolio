import React, { useState, useEffect } from "react";
import { Menu, X, Award, BadgeCheck, Video, Home } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Badges", href: "#badges", icon: BadgeCheck },
    { name: "Seminars & Webinars", href: "#seminars", icon: Video },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 group text-xl font-bold text-white tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-amber-300">
              Samson
              <span className="text-amber-400"> Portfolio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1 bg-slate-800/60 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-slate-700 text-amber-400 shadow-sm"
                      : "text-slate-300 hover:text-amber-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open Navigation Menu"
            className="sm:hidden p-2.5 rounded-xl text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <nav className="sm:hidden mt-3 p-4 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-950/60 text-amber-400 font-semibold"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-500" />
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
