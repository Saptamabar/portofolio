"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neo-black text-neo-white border-t-[4px] border-black mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Achmad Sapta
          </p>
          <p className="text-sm font-mono text-gray-400">All rights reserved.</p>
        </div>

        {/* Sosial Media */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Saptamabar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neo-white bg-black p-2 border-2 border-neo-white shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/achmad-sapta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neo-white bg-black p-2 border-2 border-neo-white shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:achmadsapta77@gmail.com"
            className="text-neo-white bg-black p-2 border-2 border-neo-white shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}