"use client";
import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12">My Tech Stack</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 border-2 border-transparent rounded-xl transition-all transform hover:scale-105 hover:shadow-md"
            style={{
              borderColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = tech.iconcolor ?? '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img color={tech.iconcolor}
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 md:w-20 md:h-20 mb-2"
            />
            <span className="text-gray-700 text-sm md:text-base">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
