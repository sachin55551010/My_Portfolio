import { motion } from "motion/react";
export const BlurText = ({ children, delay = 0 }) => {
  return (
    <motion.span
      initial={{ scale: 4, opacity: 0.1, filter: "blur(2px)" }}
      whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.span>
  );
};
