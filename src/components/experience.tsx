"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20 relative overflow-hidden" // Added relative and overflow-hidden
    >
      {/* Subtle Background Blobs */}
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

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">Experience</h2> {/* Added z-10 */}

      <div className="max-w-5xl mx-auto space-y-8 relative z-10"> {/* Added z-10 */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow rounded-xl p-6 md:p-8 cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-blue-500 font-medium">{exp.company} · {exp.period}</p>
            <p className="text-gray-700 mt-3">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}