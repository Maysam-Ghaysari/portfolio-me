"use client";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product management, shopping cart, and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2032&auto=format&fit=crop",
      tags: ["Next.js", "Tailwind", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with real-time data, forecasts, and interactive maps powered by multiple weather APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "API", "Chart.js"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] m-auto ">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern web development
            practices and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/6 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-500 transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 bg-white/90 rounded-full hover:bg-white transform hover:scale-110 transition-all duration-200 shadow-lg"
                    aria-label="View GitHub"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github className="text-gray-900" size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg"
                    aria-label="View Demo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            href="/allproject"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-gray-700 text-gray-300 rounded-3xl hover:bg-white/20 transform hover:scale-105 transition-all duration-500"
          >
            <span>View All Projects</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={22}
            />
          </Link>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
