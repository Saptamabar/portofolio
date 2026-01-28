"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center bg-neo-bg px-4 py-20 border-b-4 border-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-black inline-block bg-white border-4 border-black p-4 shadow-neo-lg uppercase tracking-tight transform -rotate-1">
          My Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border-4 border-black rounded-none shadow-neo-lg flex flex-col transition-all hover:-translate-y-2 hover:shadow-neo hover:translate-x-[4px] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image Container with Border */}
            <div className="relative border-b-4 border-black group-hover:opacity-90 transition-opacity cursor-zoom-in" onClick={() => setLightboxImage(project.image)}>
              <div className="absolute inset-0 bg-neo-main opacity-0 group-hover:opacity-20 transition-opacity z-10 pointer-events-none"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-black text-black mb-3 uppercase leading-tight">{project.title}</h3>
              <p className="text-black font-medium mb-6 flex-1 border-l-4 border-neo-second pl-4 leading-relaxed bg-gray-50 p-2 border-t-2 border-r-2 border-b-2 border-gray-200">{project.description}</p>

              {/* Badge tech */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-neo-yellow text-black text-xs font-bold px-3 py-1 border-2 border-black shadow-neo-sm uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 bg-neo-main text-black font-bold border-2 border-black shadow-neo-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all uppercase text-sm"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-3 bg-white text-black font-bold border-2 border-black shadow-neo-sm hover:bg-black hover:text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all uppercase text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white border-4 border-black p-2 shadow-neo-lg">
            <button
              className="absolute -top-6 -right-6 bg-neo-pink text-black p-2 border-4 border-black font-bold shadow-neo hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all z-50"
              onClick={() => setLightboxImage(null)}
            >
              CLOSE X
            </button>
            <img
              src={lightboxImage}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain border-2 border-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
