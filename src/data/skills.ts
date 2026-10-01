export interface SkillItem {
  name: string;
  category: "Frontend" | "Language & Tools" | "AR & 3D" | "Hardware & Design";
  level?: "Beginner" | "Intermediate" | "Advanced";
  icon?: string;
}

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "HTML", category: "Frontend", level: "Advanced" },
  { name: "CSS", category: "Frontend", level: "Advanced" },
  { name: "JavaScript", category: "Frontend", level: "Advanced" },
  { name: "TypeScript", category: "Frontend", level: "Intermediate" },
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Vite", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  
  // Tools & Languages
  { name: "Git", category: "Language & Tools", level: "Intermediate" },
  { name: "GitHub", category: "Language & Tools", level: "Advanced" },
  
  // 3D / WebAR
  { name: "3D/WebAR", category: "AR & 3D", level: "Advanced" },
  { name: "Three.js / A-Frame", category: "AR & 3D", level: "Intermediate" },
  { name: "MindAR", category: "AR & 3D", level: "Intermediate" },
  { name: "Unity", category: "AR & 3D", level: "Beginner" },
  
  // Hardware & Design
  { name: "Computer Hardware", category: "Hardware & Design", level: "Advanced" },
  { name: "UI/UX Design", category: "Hardware & Design", level: "Intermediate" }
];
