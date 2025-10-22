"use client";
import { Download, Mail, ArrowDown } from "lucide-react";

export default function HeroAbout() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume/MyResume.pdf";
    link.download = "My-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* <div className="fixed top-50 left-180 w-96 h-96 bg-gray-500 rounded-full blur-[130px]" /> */}
      <div className="max-sm:hidden absolute -top-12 -left-32 w-166 h-126 bg-blue-900 rounded-full blur-[120px] " />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting with fade-in effect */}
          <div className="mb-16 animate-fadeIn">
            <span className="inline-block px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-blue-200 text-sm font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fadeIn">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Maysam Ghaysari
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-light mb-6 animate-fadeIn">
            Frontend Developer
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeIn">
            Specializing in{" "}
            <span className="text-blue-300 font-semibold">Next.js</span> and{" "}
            <span className="text-purple-300 font-semibold">Tailwind CSS</span>.
            Crafting beautiful, responsive, and performant web experiences that
            bring ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn">
            {/* Download Resume Button */}
            <button
              onClick={downloadResume}
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4  bg-white/6 backdrop-blur-sm border-1 border-white/10 text-gray-300 rounded-full hover:bg-white/20  transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-lg "
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white/6 backdrop-blur-sm border-1 border-white/10 border-1 border-gray-500 text-gray-300 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-500 font-semibold text-lg"
            >
              <Mail
                size={22}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <ArrowDown
              className="mx-auto text-white/60 max-sm:mt-40"
              size={32}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32"></div>
    </section>
  );
}
