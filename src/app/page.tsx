import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import ContactForm from "@/components/contactform";
import TechStack from "@/components/techstack";
import Experience from "@/components/experience";
import Certificates from "@/components/certificate";

export default function Home() {
  return (
    <main className="w-full h-dvh bg-amber-50">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <TechStack/>
      <Projects/>
      <Certificates/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
