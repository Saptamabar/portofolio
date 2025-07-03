export interface Experience {
  title: string;
  company: string;
  period: string; // contoh: "2023 - Present"
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "PT Digital Maju",
    period: "2023 - Present",
    description: "Developed responsive web apps using React, Next.js, and Tailwind CSS. Focused on UI/UX and performance optimization."
  },
  {
    title: "Intern Web Developer",
    company: "Startup Kreatif",
    period: "2022 - 2023",
    description: "Built and maintained internal tools, collaborated with design team, and learned about agile development."
  },
];
