"use client";

import { useState } from "react";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crypto Dashboard",
    category: "Frontend",
    image: "/projects/crypto-dashboard.png",
    tools: ["Next.js", "Tailwind", "GSAP"],
    github: "https://github.com/yourusername/crypto-dashboard",
    demo: "https://crypto-dashboard-demo.vercel.app",
  },
  {
    id: 2,
    title: "AI Chat App",
    category: "Fullstack",
    image: "/projects/ai-chat.png",
    tools: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ai-chat",
    demo: "https://ai-chat-demo.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    image: "/projects/portfolio.png",
    tools: ["React", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Fullstack"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  // انیمیشن ورود کارت‌ها
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center px-6 py-16 text-gray-100">
      {/* دکمه بازگشت */}
      <Link href="/">
        <div className="w-full max-w-6xl mb-10 px-4 py-2">
          <a className="block bg-white/5 backdrop-blur-md text-white font-semibold  rounded-full border border-white/10 text-center hover:bg-white/30 transition-all duration-300 px-5 py-4">
            بازگشت به صفحه اصلی
          </a>
        </div>
      </Link>

      {/* فیلتر */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-4 mb-12 backdrop-blur-lg bg-white/5 border border-white/10 px-6 py-3 rounded-full"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              filter === cat
                ? "bg-white/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* گرید پروژه‌ها */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
      >
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05 }}
              className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl transition"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20"
                  >
                    <ExternalLink size={24} />
                  </a>
                </motion.div>
              </div>

              <div className="p-6 flex flex-col">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{ color: "#60a5fa" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-sm text-gray-400 mb-4">{project.category}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
