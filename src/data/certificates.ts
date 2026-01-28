export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Technoday Hackathon (Top 4)",
    issuer: "Technoday",
    date: "2025",
    image: "/certificates/Technoday.png",
  },
  {
    title: "1st Place - Innovius Web Design Competition",
    issuer: "Innovius",
    date: "2025",
    image: "/certificates/Innovius.png",
  },
  {
    title: "3rd Place - I-COM CPC",
    issuer: "I-COM",
    date: "2024",
    image: "/certificates/CPC.png", 
  },
  {
    title: "BNSP - Junior Mobile Developer",
    issuer: "BNSP",
    date: "October 2024",
    image: "/certificates/bnsp-mobile.png",
  },
];
