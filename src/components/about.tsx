"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20 bg-neo-white border-b-4 border-black relative overflow-hidden"
    >
      {/* Neo-Brutalism Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-neo-yellow border-4 border-black shadow-neo rounded-none z-0 rotate-45"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-neo-pink border-4 border-black shadow-neo rounded-full z-0"></div>

      {/* Profile Photo */}
      <motion.div
        className="relative z-10 w-48 h-48 md:w-64 md:h-64 mb-10 md:mb-0 md:mr-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo Frame */}
        <div className="absolute inset-0 bg-neo-second border-4 border-black translate-x-4 translate-y-4"></div>
        <img
          src="/profile.jpg"
          alt="Your Name"
          className="relative w-full h-full object-cover border-4 border-black grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>

      {/* Description + Button */}
      <motion.div
        className="text-center md:text-left max-w-xl z-20 bg-white border-4 border-black p-8 shadow-neo-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tighter"
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <motion.p className="text-black font-medium text-lg mb-4 leading-relaxed" variants={textVariants}>
          Hi! I'm <span className="font-black bg-neo-yellow px-1 border-2 border-black inline-block transform -rotate-1">Achmad Sapta Handoyo</span>, an Information Systems student (GPA 3.95) building <span className="italic font-bold bg-neo-second px-1 border-2 border-black inline-block transform rotate-1">Full-Stack Web Applications</span>.
        </motion.p>
        <motion.p className="text-black font-medium text-lg mb-8 leading-relaxed" variants={textVariants}>
          I specialize in <span className="font-bold underline decoration-4 decoration-neo-main">Golang</span> and modern JS (<span className="font-bold">Vue.js, React</span>). I craft robust backends and bold frontends.
        </motion.p>

        {/* Download CV Button */}
        <motion.a
          href="/CV/CV_ATS_Achmad Sapta H_2026.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white font-bold text-lg border-2 border-black hover:bg-white hover:text-black hover:shadow-neo transition-all uppercase"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          variants={textVariants}
        >
          Download CV <Download className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}