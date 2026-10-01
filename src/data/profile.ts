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
  about: `I am a dedicated Information Technology student passionate about bridging hardware and software through modern web interfaces, 3D visualizations, and Augmented Reality (AR) applications. My focus is on creating interactive, accessible learning experiences and high-performance web solutions.`,
  
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University / College",
      period: "2023 - Present",
      description: "Focusing on Software Engineering, Web Development, Network Administration, and Interactive Multimedia Systems."
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
