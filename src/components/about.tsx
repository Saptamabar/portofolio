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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" // Added relative and overflow-hidden
    >
      {/* Subtle background circles/blobs */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
      />


      {/* Profile Photo */}
      <motion.img
        src="/profile.jpg" // ganti sesuai path foto kamu
        alt="Your Name"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mb-6 md:mb-0 md:mr-10 shadow-xl border-4 border-white" // Thicker border, stronger shadow
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }} // Trigger animation earlier
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Description + Button */}
      <motion.div
        className="text-center md:text-left max-w-xl z-10" // Added z-10 to ensure content is above blobs
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.2 }} // Stagger children animations
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <motion.p className="text-gray-700 mb-4 leading-relaxed" variants={textVariants}>
          Hi! I'm <span className="font-bold text-blue-600">Your Name</span>, a frontend developer passionate about
          creating <span className="italic">intuitive and beautiful web applications</span>.
          I love turning complex problems into simple, elegant designs.
        </motion.p>
        <motion.p className="text-gray-700 mb-6 leading-relaxed" variants={textVariants}>
          My toolkit currently includes <span className="font-bold text-blue-500">React</span> and{" "}
          <span className="font-bold text-blue-500">Next.js</span>, and I love bringing designs to life with{" "}
          <span className="font-bold text-purple-500">Framer Motion</span>. I'm always eager to learn new technologies
          to expand my skill set.
        </motion.p>

        {/* Download CV Button */}
        <motion.a
          href="/CV.pdf" // pastikan file ada di public/
          download
          className="inline-flex items-center gap-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }} // More pronounced shadow on hover
          whileTap={{ scale: 0.95 }}
          variants={textVariants} // Animate with other text
        >
          Download CV <Download className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}