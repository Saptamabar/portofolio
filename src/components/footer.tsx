"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-gray-600 text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} YourName. All rights reserved.
        </p>

        {/* Sosial Media */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 hover:text-blue-500"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}