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
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-neo-bg px-4 overflow-hidden pt-20 border-b-4 border-black">
      {/* Abstract Shapes (Neo-Brutalism) */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-neo-main border-4 border-black shadow-neo-lg z-0 rotate-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-neo-second border-4 border-black shadow-neo-lg z-0 -rotate-6 rounded-none"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Tech Stack Icons as Floating Stickers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isClient && animatedIconProps.map((props, index) => {
          const tech = techStack[index];
          return (
            <motion.div
              key={tech.name + index}
              className="absolute p-3 bg-white border-2 border-black shadow-neo-sm flex items-center justify-center"
              style={{
                left: `${props.randomLeft}%`,
                bottom: '-50px',
                transform: `rotate(${props.randomRotation}deg)`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [`0vh`, `-110vh`],
                rotate: props.randomRotation + 360,
              }}
              transition={{
                duration: props.randomDuration,
                repeat: Infinity,
                ease: "linear",
                delay: props.randomDelay,
              }}
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 opacity-100 grayscale hover:grayscale-0 transition-all" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-white border-4 border-black p-8 shadow-neo-lg max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform cursor-default">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-48 border-4 border-black shadow-neo-sm object-cover"
          />
        </motion.div>

        {/* Typewriter Title */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typewriter
            options={{
              strings: [
                '<span class="text-black bg-neo-main px-2">ACHMAD SAPTA HANDOYO</span>',
                '<span class="text-black bg-neo-second px-2">FULLSTACK DEVELOPER</span>',
                '<span class="text-black bg-neo-pink px-2">SOFTWARE ENGINEER</span>',
              ],
              autoStart: true,
              loop: true,
              cursor: '_',
              delay: 75,
            }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-black text-xl md:text-2xl font-bold font-mono bg-neo-bg inline-block px-4 py-2 border-2 border-black mb-8 shadow-neo-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building raw, authentic, and functional web experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-neo-main text-black font-black text-lg border-4 border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 uppercase"
          >
            View Projects <ChevronDown className="rotate-[-90deg] border-2 border-black rounded-full p-0.5 w-6 h-6 bg-white" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-black text-lg border-4 border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 uppercase"
          >
            Contact Me <span className="text-xl">✉️</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronDown className="w-12 h-12 text-black bg-white border-2 border-black p-1 shadow-neo-sm" />
      </motion.div>
    </section>
  );
}