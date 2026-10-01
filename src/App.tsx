import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Certificates } from "./components/Certificates";
import { Badges } from "./components/Badges";
import { Seminars } from "./components/Seminars";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Certificates />
        <Badges />
        <Seminars />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
