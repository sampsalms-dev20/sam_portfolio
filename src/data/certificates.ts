export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: "Web Development" | "Hardware & Systems" | "AR & Emerging Tech" | "Software Engineering" | "Database & Cloud" | "Cybersecurity & IT";
  date: string;
  image: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
  isPlaceholder: boolean;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-001",
    title: "Introduction to Greenhouse Gas Accounting for IT",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity & IT",
    date: "September 29, 2026",
    image: "./certificates/Screenshot 2026-09-29 164309.jpg",
    credentialId: "278d4ba6-e2fe-45fa-abc9-bd8337c3a879",
    verificationUrl: "https://www.netacad.com/",
    skills: ["GHG Accounting", "IT Emissions", "Green IT", "Sustainability"],
    description: "Official Cisco certificate validating foundational knowledge of greenhouse gas accounting, IT carbon footprint categorization, and sustainability metrics.",
    isPlaceholder: false
  },
  {
    id: "cert-002",
    title: "Fundamentals of Database Management",
    issuer: "Department of Information and Communications Technology (DICT)",
    category: "Database & Cloud",
    date: "September 2, 2026",
    image: "./certificates/Screenshot 2026-09-29 162116.jpg",
    credentialId: "2026-DTCBWEB4628",
    verificationUrl: "#",
    skills: ["Database Management", "SQL Basics", "Data Structures", "DICT Region V"],
    description: "Certificate of Attendance issued by DICT Region V - Catanduanes Provincial Office for database management principles and data architecture.",
    isPlaceholder: false
  },
  {
    id: "cert-003",
    title: "Generative AI Overview for Project Managers",
    issuer: "Project Management Institute (PMI)",
    category: "AR & Emerging Tech",
    date: "September 29, 2026",
    image: "./certificates/cert ai.jpg",
    credentialId: "PMI-GENAI-2026",
    verificationUrl: "https://www.pmi.org/",
    skills: ["Generative AI", "AI Project Management", "Prompt Engineering", "Emerging Tech"],
    description: "Certificate of Course Completion covering generative AI applications, workflow integration, and AI-driven project management strategies.",
    isPlaceholder: false
  },
  {
    id: "cert-004",
    title: "IBM Bob for Cybersecurity",
    issuer: "IBM SkillsBuild",
    category: "Cybersecurity & IT",
    date: "September 28, 2026",
    image: "./certificates/sam cert.jpg",
    credentialId: "ALM-COURSE_4089545",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["Cybersecurity", "IBM Security", "Threat Detection", "System Protection"],
    description: "Completion certificate for IBM Bob cybersecurity workflows, threat awareness, and security response fundamentals.",
    isPlaceholder: false
  },
  {
    id: "cert-005",
    title: "What is open source?",
    issuer: "IBM SkillsBuild",
    category: "Software Engineering",
    date: "September 28, 2026",
    image: "./certificates/cert 2.jpg",
    credentialId: "URL-4B9F8C797BBC",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["Open Source", "Software Licensing", "Git", "Community Development"],
    description: "IBM SkillsBuild completion certificate covering open source software development, licensing models, and collaborative coding.",
    isPlaceholder: false
  },
  {
    id: "cert-006",
    title: "IBM Bob: Supporting the Software Development Lifecycle",
    issuer: "IBM SkillsBuild",
    category: "Software Engineering",
    date: "September 28, 2026",
    image: "./certificates/cert.jpg",
    credentialId: "URL-DE384A47103B",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["SDLC", "Agile Development", "Software Engineering", "IBM Tools"],
    description: "Completion certificate covering support mechanisms, automation, and tooling across the software development lifecycle.",
    isPlaceholder: false
  },
  {
    id: "cert-007",
    title: "Git Tutorial For Beginners | Simplilearn",
    issuer: "IBM SkillsBuild / Simplilearn",
    category: "Software Engineering",
    date: "September 28, 2026",
    image: "./certificates/cwrt.jpg",
    credentialId: "URL-EEUNAIZOWRU",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["Git", "Version Control", "GitHub", "Branch Management"],
    description: "Hands-on training certification in Git version control fundamentals, repository management, branching, and merging workflows.",
    isPlaceholder: false
  },
  {
    id: "cert-008",
    title: "Create a Credly account",
    issuer: "IBM SkillsBuild",
    category: "Software Engineering",
    date: "September 28, 2026",
    image: "./certificates/cred.jpg",
    credentialId: "URL-0E39749E2965",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["Digital Credentials", "Credly", "Professional Verification"],
    description: "Completion certificate for digital badge configuration and professional credential portfolio integration on Credly.",
    isPlaceholder: false
  },
  {
    id: "cert-009",
    title: "Earn it! Accept it! Share it!",
    issuer: "IBM SkillsBuild",
    category: "Software Engineering",
    date: "September 28, 2026",
    image: "./certificates/cert1.jpg",
    credentialId: "URL-CC7432BB7A8A",
    verificationUrl: "https://skillsbuild.org/",
    skills: ["Career Readiness", "Digital Literacy", "Skill Sharing"],
    description: "Certification in professional brand building, digital credential management, and technical achievement sharing.",
    isPlaceholder: false
  }
];
