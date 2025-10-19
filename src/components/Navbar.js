"use client";
import { useState } from "react";
import { Menu, X, Download, Globe, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md border-b  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                Portfolio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Download Resume Button */}
            <a
              href="/Resume/MyResume.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
            Download Resume
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "EN" ? "FA" : "EN")}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              <Globe size={18} />
              <span className="font-semibold">{language}</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transform hover:scale-105 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {/* Download Resume - Mobile */}
          <button
            onClick={() => {
              console.log("Download Resume");
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md font-medium"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>

          <div className="flex space-x-3">
            {/* Language Switcher - Mobile */}
            <button
              onClick={() => {
                setLanguage(language === "EN" ? "FA" : "EN");
              }}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-200 font-medium"
            >
              <Globe size={18} />
              <span>Language: {language}</span>
            </button>

            {/* Dark/Light Mode - Mobile */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-200 font-medium"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <Sun size={18} />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
