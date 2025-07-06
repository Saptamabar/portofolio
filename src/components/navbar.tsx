"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; 
      let current = "home";

      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          current = item.href.replace("#", "");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-10000 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl text-black">&lt;/&gt;</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium pb-1 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1 bg-white border-t">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block font-medium py-2 ${
                activeSection === item.href.replace("#", "")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
