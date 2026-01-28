export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  tags: string[];
  icons: string[];
}

export const projects: Project[] = [
  {
    title: "POS – WebApp",
    description: "Developed a Full-Stack POS application using Golang for high-performance backend REST APIs and Vue.js for a responsive frontend.",
    image: "/projects/POSWebApp.png",
    githubUrl: "https://github.com/Saptamabar",
    tags: ["Golang", "Vue.js", "PostgreSQL"],
    icons: ["/icons/golang.svg", "/icons/vue.svg", "/icons/postgresql.svg"]
  },
  {
    title: "SkillSwap",
    description: "Collaborative Learning Platform with authentication, class management, and payments. Top 4 in Technoday Hackathon 2025.",
    image: "/projects/SkillSwap.png",
    githubUrl: "https://github.com/Saptamabar",
    tags: ["Laravel", "Tailwind", "Midtrans"],
    icons: ["/icons/laravel.svg", "/icons/tailwindcss.svg", "/icons/mysql.svg"]
  },
  {
    title: "Web UM Jember",
    description: "Modern redesign of Universitas Muhammadiyah Jember website. Awarded 1st Place at Innovius Web Design Competition 2025.",
    image: "/projects/WebUMJember.png",
    githubUrl: "https://github.com/Saptamabar",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    icons: ["/icons/html5.svg", "/icons/css3.svg", "/icons/javascript.svg", "/icons/tailwindcss.svg"]
  },
  {
    title: "ScholarMate",
    description: "Scholarship Information Platform with role-based access, filtering, and notifications.",
    image: "/projects/SchoolarMate.png",
    demoUrl: "https://pwebb8-production.up.railway.app/",
    githubUrl: "https://github.com/AzizaturRofiqiyah/PWEB_B8",
    tags: ["Laravel", "MySQL", "Tailwind"],
    icons: ["/icons/laravel.svg", "/icons/mysql.svg", "/icons/tailwindcss.svg"]
  },
  {
    title: "Anggrek AI",
    description: "Orchid Stock & AI Disease Detection System using Roboflow for early disease detection.",
    image: "/projects/AnggrekAI.png",
    demoUrl: "https://grand-intuition-production.up.railway.app/",
    githubUrl: "https://github.com/Saptamabar/PPL-G1",
    tags: ["Laravel", "Roboflow", "AI"],
    icons: ["/icons/laravel.svg", "/icons/python.svg"]
  },
];
