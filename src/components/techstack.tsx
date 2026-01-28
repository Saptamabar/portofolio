"use client";
import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen flex flex-col justify-center bg-neo-bg px-4 py-20 border-b-4 border-black"
    >

      <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16 uppercase tracking-tight bg-white border-4 border-black inline-block mx-auto px-6 py-2 shadow-neo">
        My Tech Stack
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col items-center justify-center p-6 border-4 border-black bg-white shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-crosshair group"
            style={{
              borderColor: '#000',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center bg-gray-50 border-2 border-black group-hover:bg-neo-second transition-colors rounded-none">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 md:w-12 md:h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <span className="text-black font-bold text-sm md:text-base border-b-2 border-transparent group-hover:border-black uppercase text-center truncate w-full">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
