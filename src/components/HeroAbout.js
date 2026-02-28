"use client";

import {
  Github,
  Download,
  Mail,
  ArrowDown,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroAbout() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Github,
      href: "https://github.com/Maysam-Ghaysari",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/maysam_ghaysarii?igsh=MXZhemY3dXJkeDdjbQ==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/maysam-ghaysari",
      label: "LinkedIn",
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume/RESUME-frontend.pdf";
    link.download = "RESUME-frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Framer Motion variants برای staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const bounceArrow = {
    animate: { y: [0, 10, 0] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="fixed right-0 -bottom-5 w-230 h-full hidden lg:block opacity-30 z-0 pointer-events-none">
        <Image
          src="/Me/maysamghaysari1.webp"
          alt="My Image"
          fill
          priority
          className="object-cover object-left"
          style={{
            boxShadow: "-18px 0 130px rgba(220,220,220,0.9)",
          }}
        />
      </div>

      {/* Decorative Blur Circles */}
      <div className="fixed max-sm:hidden -top-12 -left-32 w-166 h-126 bg-cyan-700 rounded-full blur-[120px] -z-10" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-4xl mx-auto text-center min-md:ml-40 space-y-6">
          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl max-sm:text-5xl md:text-6xl lg:text-8xl text-white mb-4 leading-tight"
          >
            <span className="bg-white bg-clip-text text-transparent font-[Caveat]">
              Maysam Ghaysari
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-light font-[raleway]"
          >
            Frontend Developer
          </motion.p>

          {/* Social Media */}
          <motion.div variants={fadeUp} className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-cyan-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8"
          >
            <button
              type="button"
              onClick={downloadResume}
              className="group w-full sm:w-auto flex items-center font-[raleway] justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 text-lg"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-500 text-lg"
            >
              <Mail
                size={22}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Scroll Down */}
          <motion.div {...bounceArrow} className="mt-30">
            <ArrowDown className="mx-auto text-white/60" size={32} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
