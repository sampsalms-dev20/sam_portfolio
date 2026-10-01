export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: string;
}

export const profileData = {
  about: `I am Samson B. Molina, a 4th-year Information Technology student (BSIT 4E) at Partido State University under the College of Engineering & Computational Sciences. I am passionate about web development, interactive software applications, 3D/WebAR integration, and network administration.`,
  
  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT 4E)",
      institution: "Partido State University • College of Engineering & Computational Sciences",
      period: "2021 - Present",
      description: "Focusing on Software Engineering, Web Application Development, System Administration, and Interactive Multimedia Systems."
    },
    {
      degree: "Senior High School - ICT Strand",
      institution: "High School Academy",
      period: "2021 - 2023",
      description: "Specialized in Computer Programming, Computer System Servicing, and Digital Arts."
    }
  ] as EducationItem[],

  interests: [
    {
      title: "Web Development",
      description: "Building modern, responsive user interfaces using React, TypeScript, and modern CSS tools.",
      iconName: "Code2"
    },
    {
      title: "Augmented Reality & 3D",
      description: "Creating immersive WebAR hardware learning tools with MindAR, Three.js, and A-Frame.",
      iconName: "Glasses"
    },
    {
      title: "Computer Hardware & IoT",
      description: "Troubleshooting hardware systems, building custom PC rigs, and experimenting with IoT sensors.",
      iconName: "Cpu"
    },
    {
      title: "Creative Tech & Music",
      description: "Playing musical instruments, sound engineering, and combining audio with digital art.",
      iconName: "Music"
    }
  ] as InterestItem[],

  careerGoals: [
    "Frontend & Web Application Developer",
    "AR/VR Interactive Solutions Developer",
    "UI/UX & Digital Product Specialist",
    "Full-Stack Software Engineer"
  ]
};
