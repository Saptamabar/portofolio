export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  tags: string[];
  icons :string[];
}

export const projects: Project[] = [
  {
    title: "Patungan : Pembantu Manajemen Stok dan Transaksi Toko Bangunan",
    description: "Developed a Point of Sales (POS) application using C# to support daily operations of a building materials store, including sales transactions, inventory management, and reporting.",
    image: "/projects/Patungan.png",
    githubUrl: "https://github.com/Saptamabar/PBO_B1",
    tags: ["C#", "Winforms", "OOP"],
    icons: ["/icons/Csharp.svg"]
  },
  {
    title: "Anggrek AI",
    description: "Anggrek AI is a web-based information system designed to manage orchid inventory and implement artificial intelligence (AI) for early disease detection in orchid plants.",
    image: "/projects/AnggrekAI.png",
    demoUrl: "https://grand-intuition-production.up.railway.app/",
    githubUrl: "https://github.com/Saptamabar/PPL-G1",
    tags: ["Laravel", "PHP", "API", "Roboflow"],
    icons : ["/icons/laravel.svg","/icons/tailwindcss.svg","/icons/javascript.svg"]
  },
  {
    title: "ScholarMate - Web-Based Scholarship Information System",
    description: "ScholarMate is a responsive web-based platform designed to centralize and simplify access to scholarship opportunities for students and university applicants.",
    image: "/projects/SchoolarMate.png",
    demoUrl: "https://pwebb8-production.up.railway.app/",
    githubUrl: "https://github.com/AzizaturRofiqiyah/PWEB_B8",
    tags: ["Laravel", "PHP", "AJAX","Tailwind"],
    icons : ["/icons/laravel.svg","/icons/php.svg","/icons/javascript.svg"]
  },
  {
    title: "Portofolio Website",
    description: "An Portofolio Website",
    image: "/projects/Portofolio.png",
    demoUrl: "https://achmad-sapta.vercel.app/",
    githubUrl: "https://github.com/Saptamabar/PBO_B1",
    tags: ["Next.JS", "React.JS"],
    icons: ["/icons/react.svg"]
  },
];
