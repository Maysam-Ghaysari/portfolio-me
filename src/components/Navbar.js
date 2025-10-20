"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md   shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:block">
                Maysam Ghaysari
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex gap-4">
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <a
                href="/Resume/MyResume.pdf"
                download
                className="inline-flex items-center  bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/10 p-3  transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center  bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/10 p-3  transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/5 text-white  border border-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ease-in-out ${
          isOpen ? "max-h-64 opacity-100 " : "max-h-0 opacity-0 "
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 backdrop-blur-md border-t border-gray-400">
          {/* Download Resume - Mobile */}
          <button
          type="button"
            onClick={() => {
              console.log("Download Resume");
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white/9 rounded-full text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md font-medium"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>

          <div className="flex space-x-3">
       
          </div>
        </div>
      </div>
    </nav>
  );
}
