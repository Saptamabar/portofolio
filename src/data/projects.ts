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
    title : "TrustChain AI",
    description : "A real-time fraud detection platform that uses an LSTM–Isolation Forest ensemble with SHAP explainability and blockchain audit trails to flag anomalous financial transactions.",
    image : "/projects/trustchainAI.png",
    githubUrl : "https://github.com/Saptamabar/trustchain-ai",
    demoUrl : "https://trustchain.achmadsapta.dev/",
    tags : ["Golang","FastAPI","React"],
    icons : ["/icons/golang.svg","/icons/fastapi.svg","/icons/react.svg"]    
  },
  {
    title: "SkillSwap",
    description: "Collaborative Learning Platform with authentication, class management, and payments. Top 4 in Technoday Hackathon 2025.",
    image: "/projects/SkillSwap.png",
    githubUrl: "https://github.com/af133/hackton",
    demoUrl: "https://hackton-production.up.railway.app/",
    tags: ["Laravel", "Tailwind", "Midtrans"],
    icons: ["/icons/laravel.svg", "/icons/tailwindcss.svg", "/icons/mysql.svg"]
  }, 
  {
    title: "ScholarMate",
    description: "Scholarship Information Platform with role-based access, filtering, and notifications.",
    image: "/projects/SchoolarMate.png",    
    githubUrl: "https://github.com/AzizaturRofiqiyah/PWEB_B8",
    tags: ["Laravel", "MySQL", "Tailwind"],
    icons: ["/icons/laravel.svg", "/icons/mysql.svg", "/icons/tailwindcss.svg"]
  },
  {
    title: "Anggrek AI",
    description: "Orchid Stock & AI Disease Detection System using Roboflow for early disease detection.",
    image: "/projects/AnggrekAI.png",
    githubUrl: "https://github.com/Saptamabar/PPL-G1",
    demoUrl : "https://achmadsapta.freedev.app/",
    tags: ["Laravel", "Roboflow", "AI"],
    icons: ["/icons/laravel.svg"]
  },
  {
    title : "HistoPlay",
    description : "A mobile-first interactive edutainment app that gamifies Indonesian history learning through branching visual novel storytelling and a global leaderboard",
    image : "/projects/HistoPlay.png",
    githubUrl : "https://github.com/Saptamabar/HistoPlay",
    demoUrl : "https://histoplay.vercel.app/",
    tags : ["Next.JS","Typescript","Firebase"],
    icons : ["/icons/nextjs.svg","/icons/typescript.svg","/icons/firebase.svg"]    
  },
  {
    title : "SINARASA",
    description : "A full-stack waste bank management system that digitalizes resident waste submissions, point rewards, and admin validation for a community program in Desa Sidomukti, Jember.",
    image : "/projects/Sinarasa.png",
    githubUrl : "https://github.com/Saptamabar/bank-sampah-sinarasa",
    demoUrl : "https://sinarasa.achmadsapta.dev/",
    tags : ["Laravel","Livewire","MySQL"],
    icons : ["/icons/laravel.svg","/icons/livewire.svg","/icons/mysql.svg"]    
  },

];
