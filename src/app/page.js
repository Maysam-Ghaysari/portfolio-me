import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import WhatIDo from "@/components/What";

export default function Home() {
  return (
    <>
    
      <Navbar />
      <HeroAbout />

      <WhatIDo  />
      <ProjectsSection />
      <SkillsSection />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}
