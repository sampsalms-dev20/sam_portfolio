export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  category: "AR/VR" | "Web App" | "Tool";
}

export const projectsData: ProjectItem[] = [
  {
    id: "arware",
    title: "ArWARE",
    shortDescription: "An Augmented Reality-Based Computer Hardware Learning Application for ICT Learners.",
    fullDescription: "ArWARE is an interactive educational tool designed to help students visualize and learn internal computer hardware components through 3D models and WebAR camera markers. It allows ICT learners to assemble, disassemble, and inspect motherboard components directly in their web browser or mobile devices.",
    technologies: ["React", "Vite", "A-Frame", "Three.js", "MindAR", "WebAR", "Tailwind CSS"],
    image: "./projects/arware-preview.svg",
    githubUrl: "https://github.com/samsonmolina/arware", // Update with real repository URL
    liveDemoUrl: "https://samsonmolina.github.io/arware", // Update with live demo link if available
    featured: true,
    category: "AR/VR"
  },
  {
    id: "dev-portfolio",
    title: "Digital Credential Portfolio",
    shortDescription: "A sleek, responsive developer portfolio showcasing verified certificates, badges, and projects.",
    fullDescription: "Built with React, Vite, and Tailwind CSS, this portfolio features dark/light mode toggles, modal credential verification views, filterable project displays, and automated GitHub Actions deployment to GitHub Pages.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    image: "./projects/portfolio-preview.svg",
    githubUrl: "https://github.com/samsonmolina/samsonmolina.github.io",
    liveDemoUrl: "#",
    featured: true,
    category: "Web App"
  },
  {
    id: "pc-hardware-quiz",
    title: "Interactive PC Component Quiz & Simulator",
    shortDescription: "An interactive web utility for testing computer system servicing knowledge and motherboard component identification.",
    fullDescription: "Provides interactive pinout diagrams, drag-and-drop cable connection simulations, and diagnostic quiz modules for students preparing for hardware certification exams.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    image: "./projects/hardware-quiz.svg",
    githubUrl: "https://github.com/samsonmolina/pc-hardware-quiz",
    liveDemoUrl: "#",
    featured: false,
    category: "Tool"
  }
];
