export interface BadgeItem {
  id: string;
  name: string;
  category: "Green IT" | "Skill Badge" | "Community Achievement";
  description: string;
  dateEarned: string;
  issuer: string;
  badgeId: string;
  iconName: string;
  skills: string[];
  image: string;
  isPlaceholder: boolean;
}

export const badgesData: BadgeItem[] = [
  {
    id: "badge-ghg",
    name: "Introduction to Greenhouse Gas Accounting for IT",
    category: "Green IT",
    description: "Cisco verified digital badge for completing GHG accounting for IT, emissions categorization, and carbon calculations relevant to software & hardware systems.",
    dateEarned: "September 29, 2026",
    issuer: "Cisco Networking Academy (OnePointFive)",
    badgeId: "CISCO-GHG-2026",
    iconName: "Globe",
    skills: ["GHG Accounting", "Green IT", "Sustainability", "Emissions Calculation"],
    image: "./certificates/badge.jpg",
    isPlaceholder: false
  }
];
