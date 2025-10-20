"use client";
import { useState } from "react";
import { Code, Palette, Boxes, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    { name: "HTML", color: "from-orange-500 to-red-500", icon: Code },
    { name: "CSS", color: "from-blue-500 to-cyan-500", icon: Palette },
    { name: "JavaScript", color: "from-yellow-500 to-orange-500", icon: Sparkles },
    { name: "React", color: "from-cyan-500 to-blue-500", icon: Code },
    { name: "Next.js", color: "from-gray-600 to-gray-800", icon: Boxes },
    { name: "Tailwind CSS", color: "from-teal-500 to-cyan-500", icon: Palette },
    { name: "TypeScript", color: "from-blue-600 to-blue-800", icon: Code },
    { name: "Git & GitHub", color: "from-purple-500 to-pink-500", icon: Sparkles },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-[1280px] m-auto">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My main frontend technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/10 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition-all shadow-md"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </section>
  );
}
