import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { NavMenuItems } from "./NavMenuItems";
import { Link } from "react-router-dom";
export const NavBar = ({
  aboutRef,
  skillsRef,
  projectRef,
  contactRef,
  scrollSelection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-100 w-full h-(--nav-h) shadow-[0px_0px_5px_rgba(0,0,0,1)] backdrop-blur-[.6rem] flex items-center justify-end px-4">
        {/* menu and close icons for small screens  */}
        <div className="md:hidden cursor-pointer">
          <motion.div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isMenuOpen ? <X strokeWidth={4} /> : <Menu strokeWidth={4} />}
          </motion.div>
        </div>
        <ul className="hidden md:flex gap-4 pr-6 text-md tracking-widest">
          <a
            onClick={() => scrollSelection(aboutRef)}
            href="#about"
            className="transition-transform duration-300
         hover:scale-110"
          >
            About
          </a>

          <a onClick={() => scrollSelection(skillsRef)} href="#skills">
            Skills
          </a>

          <a onClick={() => scrollSelection(projectRef)} href="#project">
            Projects
          </a>

          <a onClick={() => scrollSelection(contactRef)} href="#contact">
            Contact
          </a>
        </ul>
      </nav>
      <NavMenuItems
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollSelection={scrollSelection}
        homeRef={aboutRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    </>
  );
};
