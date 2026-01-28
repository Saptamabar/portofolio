"use client";
import React from "react";
import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section
            id="education"
            className="min-h-screen flex flex-col justify-center bg-white px-4 py-20 border-b-4 border-black relative overflow-hidden"
        >
            {/* Abstract Shapes */}
            <div className="absolute top-20 right-0 w-40 h-40 bg-neo-second border-l-4 border-b-4 border-black z-0"></div>
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-neo-pink border-r-4 border-t-4 border-black z-0"></div>

            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-4 flex justify-center items-center gap-4 uppercase tracking-tighter">
                        <div className="bg-neo-main p-2 border-4 border-black shadow-neo">
                            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-black" />
                        </div>
                        Education
                    </h2>
                    <p className="text-black font-bold text-xl bg-neo-bg inline-block px-4 py-2 border-2 border-black shadow-neo-sm transform rotate-1">
                        My academic journey and educational background.
                    </p>
                </div>

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="bg-white border-4 border-black p-6 md:p-10 shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b-4 border-black pb-4 border-dashed">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-black uppercase">{edu.institution}</h3>
                                <p className="text-neo-main-dark font-bold text-xl mt-1">{edu.degree}</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right">
                                <span className="inline-block bg-black text-white px-4 py-1 font-bold text-sm border-2 border-black transform -rotate-1 shadow-neo-sm mb-2">
                                    {edu.period}
                                </span>
                                <p className="text-black font-bold mt-2 text-lg">GPA: <span className="bg-neo-yellow px-2 border border-black">{edu.gpa}</span></p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-black font-medium leading-relaxed text-lg">{edu.description}</p>
                        </div>

                        {edu.achievements && edu.achievements.length > 0 && (
                            <div className="bg-neo-bg p-4 border-2 border-black">
                                <h4 className="text-lg font-black text-black mb-3 uppercase underline decoration-4 decoration-neo-second">Key Highlights</h4>
                                <ul className="space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-black font-medium">
                                            <span className="w-3 h-3 bg-black mt-2 flex-shrink-0" />
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
