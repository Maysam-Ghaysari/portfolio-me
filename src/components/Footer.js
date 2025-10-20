import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-500 bg-white/0 backdrop-blur-sm  text-gray-300  p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 max-w-[1280px] m-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Notice */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Maysam Ghaysari. All Rights Reserved.
            </p>
          </div>

          {/* Page Links */}
          <nav className="flex gap-6">
            <a
              href="#projects"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Maysam-Ghaysari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/maysam-ghaysari-227676367"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/maysam_ghaysarii?igsh=MXZhemY3dXJkeDdjbQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram Profile"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
