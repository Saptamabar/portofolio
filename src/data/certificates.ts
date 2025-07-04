export interface Certificate {
  title: string;
  issuer: string;
  date: string;       // Contoh: "June 2024"
  image: string;      // Thumbnail atau logo
  url: string;        // Link ke sertifikat (misalnya PDF atau halaman view)
}

export const certificates: Certificate[] = [
  {
    title: "React Developer",
    issuer: "Dicoding",
    date: "June 2024",
    image: "/images/certificates/react.png",
    url: "https://www.dicoding.com/certificates/ABC123",
  },
  {
    title: "Cloud Practitioner",
    issuer: "AWS",
    date: "May 2024",
    image: "/images/certificates/aws.png",
    url: "https://www.aws.training/xyz",
  },
 
];
