"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center bg-neo-bg px-4 py-20 relative overflow-hidden border-b-4 border-black"
    >
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 relative z-10 text-black uppercase tracking-tight">
        <span className="bg-neo-white px-4 py-2 border-4 border-black shadow-neo-lg transform -rotate-2 inline-block">Experience</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white border-4 border-black shadow-neo-lg p-6 md:p-8 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-neo hover:translate-x-[2px] group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-2 border-black pb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-black uppercase group-hover:text-neo-main-dark transition-colors">{exp.title}</h3>
                <p className="text-neo-main-dark font-bold text-lg">{exp.company}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-neo-black text-neo-white px-3 py-1 font-bold text-sm border-2 border-transparent group-hover:border-neo-main group-hover:text-neo-main transition-all">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-black font-medium text-lg leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}