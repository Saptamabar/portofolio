"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ChevronDown } from "lucide-react";
import { techStack } from "@/data/tech";
import { useState, useEffect } from "react";

interface AnimatedIconProps {
    randomDuration: number;
    randomDelay: number;
    randomLeft: number;
    randomSize: number;
    randomRotation: number;
}

export default function Hero() {
  const [animatedIconProps, setAnimatedIconProps] = useState<AnimatedIconProps[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const generatedProps = techStack.map(() => ({
      randomDuration: Math.random() * 8 + 4, 
      randomDelay: Math.random() * 5, 
      randomLeft: Math.random() * 100, 
      randomSize: Math.random() * 0.5 + 0.5, 
      randomRotation: Math.random() * 720 - 360,
    }));
    setAnimatedIconProps(generatedProps);
    setIsClient(true);

    return () => {
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-50 px-4 overflow-hidden">
      {/* Dynamic Background Elements (Existing) */}
      <motion.div
        className="absolute top-1/6 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-400 rounded-full filter blur-sm opacity-50 animate-blob" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-blue-300 rounded-full filter blur-sm opacity-50 animate-blob animation-delay-2000" />
      </motion.div>

      {/* Tech Stack Icons as Background Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Only render icons with animations once on the client */}
        {isClient && animatedIconProps.map((props, index) => {
          const tech = techStack[index]; // Get the tech data for this index

          return (
            <motion.div
              key={tech.name + index} 
              className="absolute p-2 bg-white rounded-full shadow-md flex items-center justify-center"
              style={{
                left: `${props.randomLeft}%`,
                bottom: '-20px', 
                transform: `scale(${props.randomSize})`, 
              }}
              initial={{ opacity: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0], 
                y: [`0vh`, `-100vh`], 
                rotate: props.randomRotation,
              }}
              transition={{
                duration: props.randomDuration,
                repeat: Infinity, 
                ease: "linear",
                delay: props.randomDelay,
              }}
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            </motion.div>
          );
        })}
      </div>

      {/* Konten Utama (relative z-index to be above background icons) */}
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="relative z-10 w-48 h-48 rounded-full shadow mb-4 object-cover"
        style={{
          border: '4px solid transparent',
          backgroundImage: 'white',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
        }}
      />

      {/* Judul typewriter */}
      <motion.h1
        className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 mt-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typewriter
          options={{
            strings: [
              '<span class="bg-gray-700 bg-clip-text text-transparent">Hi, I’m Sapta</span>',
              '<span class="bg-gray-700 bg-clip-text text-transparent">FullStack Developer</span>',
              '<span class="bg-gray-700 bg-clip-text text-transparent">Tech Enthusiast</span>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h1>

      {/* Subjudul */}
      <motion.p
        className="relative z-10 text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A passionate developer crafting beautiful and functional web experiences.
      </motion.p>

      {/* Tombol aksi */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition shadow flex items-center gap-2"
        >
          View Projects <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 bg-white border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition shadow flex items-center gap-2"
        >
          Contact Me <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-blue-500" />
      </motion.div>
    </section>
  );
}