export interface Tech {
  name: string;
  icon: string;
  iconcolor? : string;
}

export const techStack: Tech[] = [
  {name : "HTML", icon : "/icons/html5.svg", iconcolor: "#E34F26"},
  {name : "CSS", icon: "/icons/css3.svg", iconcolor : "#2062Af"},
  {name : "Python", icon : "/icons/python.svg", iconcolor : "#3776AB"},
  {name : "C#", icon : "/icons/Csharp.svg", iconcolor : "#9B4F96"},
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg",iconcolor: "#06B6D4" },
  {name : "Javascript", icon: "/icons/javascript.svg", iconcolor: "#F7DF1E"},
  {name: "PHP", icon: "/icons/php.svg", iconcolor : "#777BB4"},
  { name: "TypeScript", icon: "/icons/typescript.svg", iconcolor: "#3178C6" },
  { name: "Laravel", icon: "/icons/laravel.svg", iconcolor : "#FF2D20" },
  { name: "React", icon: "/icons/react.svg", iconcolor: "#61DAFB" },
  {name : "My Sql", icon : "/icons/mysql.svg", iconcolor : "#4479A1"},
  {name : "Figma", icon : "/icons/figma.svg", iconcolor: "#F24E1E"}
];
