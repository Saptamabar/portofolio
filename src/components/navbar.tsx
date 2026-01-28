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
    <nav className="fixed top-0 left-0 w-full bg-neo-white z-50 border-b-[3px] border-black shadow-neo-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* Increased height for chunkier look */}
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-black text-2xl text-black bg-neo-main px-2 py-1 border-2 border-black shadow-neo-sm transform -rotate-2">
              &lt;/&gt;
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-bold text-lg uppercase tracking-wider transition-all duration-200 px-3 py-1 border-2 ${activeSection === item.href.replace("#", "")
                    ? "bg-neo-yellow text-black border-black shadow-neo-sm -translate-y-1"
                    : "bg-transparent text-gray-800 border-transparent hover:border-black hover:bg-neo-second hover:shadow-neo-sm hover:-translate-y-1"
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
              className="text-black hover:text-neo-main focus:outline-none border-2 border-black p-1 shadow-neo-sm bg-white active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-0 bg-neo-white border-b-[3px] border-black">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block font-bold text-lg uppercase py-4 text-center border-t-2 border-black ${activeSection === item.href.replace("#", "")
                  ? "bg-neo-yellow text-black"
                  : "bg-white text-black hover:bg-neo-second"
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
