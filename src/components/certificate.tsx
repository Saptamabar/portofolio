"use client";
import React, { useState } from "react"
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null); // State to manage the lightbox image

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12">Certificates</h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col cursor-pointer" // Added cursor-pointer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setLightboxImage(cert.image)} // Open lightbox on image click
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl text-gray-700 font-semibold mb-1">{cert.title}</h3>
              <p className="text-blue-500 font-medium">{cert.issuer} · {cert.date}</p>
              {cert.url && ( // Optionally display a link if available, separate from preview
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()} // Prevent lightbox from opening when clicking this link
                >
                  View Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- */}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)} 
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightboxImage}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] md:max-h-[80vh] object-contain rounded-lg shadow-xl cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}