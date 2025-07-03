export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "My Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/images/projects/project1.png",
    demoUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    tags: ["React", "Tailwind", "API"]
  },
  {
    title: "Task Manager App",
    description: "A simple task management app with React and Firebase.",
    image: "/images/projects/project2.png",
    demoUrl: "https://yourtaskapp.com",
    githubUrl: "https://github.com/yourusername/taskapp",
    tags: ["React", "Tailwind", "API"]
  },
  
];
