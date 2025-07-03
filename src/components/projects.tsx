"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Hover zoom-in */}
            <div
              className="overflow-hidden cursor-pointer"
              onClick={() => setLightboxImage(project.image)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2 flex-1">{project.description}</p>

              {/* Badge tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50 transition"
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
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
