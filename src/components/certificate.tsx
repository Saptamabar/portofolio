"use client";
import React from "react";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12">Certificates</h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl text-gray-700 font-semibold mb-1">{cert.title}</h3>
              <p className="text-blue-500 font-medium">{cert.issuer} · {cert.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
