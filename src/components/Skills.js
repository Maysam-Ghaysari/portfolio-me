"use client";
import { useState, useEffect } from "react";
import { Code, Palette, Boxes, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      name: "HTML",
      percentage: 90,
      color: "from-orange-500 to-red-500",
      icon: Code,
    },
    {
      name: "CSS",
      percentage: 85,
      color: "from-blue-500 to-cyan-500",
      icon: Palette,
    },
    {
      name: "JavaScript",
      percentage: 80,
      color: "from-yellow-500 to-orange-500",
      icon: Sparkles,
    },
    {
      name: "React",
      percentage: 85,
      color: "from-cyan-500 to-blue-500",
      icon: Code,
    },
    {
      name: "Next.js",
      percentage: 82,
      color: "from-gray-600 to-gray-800",
      icon: Boxes,
    },
    {
      name: "Tailwind CSS",
      percentage: 80,
      color: "from-teal-500 to-cyan-500",
      icon: Palette,
    },
    {
      name: "TypeScript",
      percentage: 75,
      color: "from-blue-600 to-blue-800",
      icon: Code,
    },
    {
      name: "Git & GitHub",
      percentage: 78,
      color: "from-purple-500 to-pink-500",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-[1280px] m-auto">
      <div className=" relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My proficiency in modern frontend technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.slice(0, showAll ? skills.length : 4).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-white/6 backdrop-blur-sm border-1 border-gray-500 text-gray-300 rounded-3xl hover:bg-white/20 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 20}ms` }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                  {/* Background shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

                  {/* Animated Progress Bar */}
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                    }}
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>

                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                  </div>
                </div>

                {/* Skill level indicator */}
                <div className="mt-2 text-xs text-gray-500 flex justify-between">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button - Visible on all screen sizes */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <span>{showAll ? "Show Less Skills" : "View All Skills"}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="mt-4 text-sm text-gray-500">
            {showAll
              ? `Showing all ${skills.length} skills`
              : `Showing 3 of ${skills.length} skills`}
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Sparkles className="text-blue-400" size={18} />
            <span className="text-gray-300 text-sm">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-shine {
          animation: shine 2s infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
