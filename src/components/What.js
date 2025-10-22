"use client";

import React from "react";

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-indigo-400"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-indigo-400"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-indigo-400"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const WhatIDo = () => {
  const services = [
    {
      icon: <CodeIcon />,
      title: "Clean & Organized Code",
      description:
        "I write clean, well-documented, and scalable code following best practices for long-term maintainability.",
    },
    {
      icon: <BriefcaseIcon />,
      title: "1 Years of Experience",
      description:
        "Three years of solid experience in frontend development and UI design using modern frameworks.",
    },
    {
      icon: <LayersIcon />,
      title: "Real-World Projects",
      description:
        "Hands-on experience building real products with performance, accessibility, and design in mind.",
    },
  ];

  return (
    <section className="relative py-12 font-sans overflow-hidden max-w-[1280px] m-auto">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر بخش */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">What I Do</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            I create smooth, aesthetic, and high-performance web experiences
            using modern frontend technologies.
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 text-gray-200 transition-all duration-500
                bg-white/5 backdrop-blur-lg
                border border-white/10
                rounded-[5%_90%_30%_30%] 
                 
                "
            >
              <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-indigo-100/30 border border-white/30 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
