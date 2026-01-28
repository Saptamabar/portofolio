export interface Experience {
  title: string;
  company: string;
  period: string; // contoh: "2023 - Present"
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "PT Suitmedia Kreasi Indonesia",
    period: "Aug 2025 – Dec 2025",
    description: "Developed CMS-based websites, built REST APIs, integrated third-party APIs, and collaborated in an Agile environment."
  },
  {
    title: "Assistant Coordinator",
    company: "Software Engineering Laboratory",
    period: "Aug 2025 – Present",
    description: "Coordinated assistant schedules, ensured smooth lab operations, acted as liaison, and led meetings."
  },
  {
    title: "Teaching Assistant",
    company: "Software Engineering Laboratory",
    period: "Aug 2024 – Present",
    description: "Supported 50+ students in Algorithm & Programming, OOP, and Web Programming. Assisted with debugging and prepared course materials."
  },
];
