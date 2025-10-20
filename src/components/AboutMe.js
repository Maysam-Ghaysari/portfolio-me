import React from "react";

// Optional: Icons for buttons. You can use an icon library like lucide-react or heroicons.
// Here are simple SVG placeholders.
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const AboutMe = () => {
  return (
    <section
      id="about"
      className=" py-20 sm:py-28 font-sans max-w-[1280px] m-auto "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Image Placeholder */}
          <div className="w-full max-w-sm lg:w-1/3">
            <div className="relative group w-full h-auto aspect-square">
              <div className="absolute -inset-1  rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="/svg/svg1.png"
                alt="A portrait of the developer"
                className="relative w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left  bg-white/4 backdrop-blur-sm border-white/10 border-1 text-gray-300 rounded-3xl hover:bg-white/10 p-4 transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate frontend developer dedicated to creating
              beautiful, intuitive, and high-performance web applications. My
              journey in tech is driven by a love for clean code, elegant
              design, and solving complex problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Beyond coding, I enjoy exploring the latest technology trends and
              contributing to open-source projects. My goal is to leverage my
              skills to build meaningful products that make a difference.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Resume/MyResume.pdf" // Placeholder link
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold  bg-white/6 backdrop-blur-sm border-white/10 border-1 text-gray-300 rounded-3xl hover:bg-white/20 p-4 transition-all duration-300"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
