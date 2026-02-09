import { motion } from "motion/react";

export const NavMenuItems = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollSelection,
  homeRef,
  skillsRef,
  projectRef,
  contactRef,
}) => {
  const menuVariants = {
    closed: {
      height: 0,
      opacity: [1, 0.4, 0.6, 0],
      transition: { duration: 0.1, ease: "easeInOut" },
      staggerChildren: 0.1,
      staggedDirection: -1,
    },
    open: {
      height: "15rem", // your h-40
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1, // items appear one after another
        staggedDirection: 1,
      },
    },
  };

  // Child animation
  const itemVariants = {
    closed: { opacity: [0, 0.5, 0.2, 0], y: 0 },
    open: { opacity: [0, 0.2, 0.5, 1], y: 0 },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isMenuOpen ? "open" : "closed"}
      className={`fixed z-100 top-(--nav-h) w-full flex flex-col
    items-end pr-4 justify-evenly backdrop-blur-[.2rem] bg-base/40 md:hidden`}
    >
      <div
        onClick={() => setIsMenuOpen(false)}
        className="flex flex-col justify-around h-full font-semibold text-lg tracking-wider p-4"
      >
        <motion.a
          variants={itemVariants}
          onClick={() => scrollSelection(homeRef)}
          href="#about"
        >
          About
        </motion.a>

        <motion.a
          variants={itemVariants}
          onClick={() => scrollSelection(skillsRef)}
          href="#skills"
        >
          Skills
        </motion.a>

        <motion.a
          variants={itemVariants}
          onClick={() => scrollSelection(projectRef)}
          href="#project"
        >
          Projects
        </motion.a>

        <motion.a
          variants={itemVariants}
          onClick={() => scrollSelection(contactRef)}
          href="#contact"
        >
          Contact
        </motion.a>
      </div>
    </motion.div>
  );
};
