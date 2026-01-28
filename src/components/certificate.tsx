"use client";
import React, { useState } from "react"
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null); // State to manage the lightbox image

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center bg-neo-white px-4 py-20 border-b-4 border-black"
    >
      <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-12 uppercase tracking-tight">
        <span className="border-b-8 border-neo-second">Certificates</span>
      </h2>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white border-4 border-black shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setLightboxImage(cert.image)}
          >
            <div className="border-b-4 border-black p-2 bg-gray-100 group-hover:bg-neo-second transition-colors">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-contain bg-white border-2 border-black"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-2 leading-tight">{cert.title}</h3>
              <p className="text-neo-main-dark font-bold text-lg border-b-2 border-gray-200 pb-2 mb-2">{cert.issuer}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-black font-mono font-bold bg-neo-bg px-2 border-2 border-black text-sm">{cert.date}</span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-black border-b-4 border-neo-pink hover:bg-neo-pink transition-all px-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Credential ↗
                  </a>
                )}
              </div>
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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_#fff]">
            <button
              className="absolute -top-6 -right-6 bg-red-500 text-white p-2 border-4 border-black font-bold shadow-neo hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all z-50"
              onClick={() => setLightboxImage(null)}
            >
              CLOSE [ESC]
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightboxImage}
              alt="Certificate Preview"
              className="w-full max-h-[80vh] object-contain border-2 border-black"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}