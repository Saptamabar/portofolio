"use client";
import React from "react";
import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section
            id="education"
            className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-20 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <motion.div
                className="absolute top-20 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
                className="absolute bottom-20 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            />

            <div className="max-w-5xl mx-auto space-y-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-3">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                        Education
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        My academic journey and educational background.
                    </p>
                </div>

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{edu.institution}</h3>
                                <p className="text-blue-600 font-semibold text-lg mt-1">{edu.degree}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-right">
                                <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold border border-blue-100">
                                    {edu.period}
                                </span>
                                <p className="text-gray-500 font-medium mt-2">GPA: <span className="text-gray-800">{edu.gpa}</span></p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                            <p className="text-gray-700 leading-relaxed text-lg">{edu.description}</p>
                        </div>

                        {edu.achievements && edu.achievements.length > 0 && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Highlights</h4>
                                <ul className="space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
