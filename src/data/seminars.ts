export interface SeminarItem {
  id: string;
  title: string;
  organizer: string;
  topic: string;
  date: string;
  platform: string;
  image: string;
  controlNumber?: string;
  trainingCode?: string;
  description: string;
}

export const seminarsData: SeminarItem[] = [
  {
    id: "webinar-001",
    title: "Fundamentals of Database Management",
    organizer: "Department of Information and Communications Technology (DICT) Region V",
    topic: "Database Systems & Data Architecture",
    date: "September 2, 2026",
    platform: "Google Meet (2-Hour Technical Webinar)",
    image: "./certificates/Screenshot 2026-09-29 162116.jpg",
    controlNumber: "2026-DTCBWEB4628",
    trainingCode: "R5ILCDB:2026-W-FDBM-1",
    description: "Official Certificate of Attendance for completing the technical webinar on database management fundamentals conducted by DICT Region V - Catanduanes Provincial Office."
  }
];
