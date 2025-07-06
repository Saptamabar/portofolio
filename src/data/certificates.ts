export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    title: "BNSP - Junior Mobile Developer",
    issuer: "BNSP",
    date: "October 2024",
    image: "/certificates/bnsp-mobile.png",
  },
  {
    title: "Python",
    issuer: "Hacker Rank",
    date: "July 2025",
    image: "/certificates/python.png",
    url: "https://www.hackerrank.com/certificates/87d150976e30",
  },
 
];
