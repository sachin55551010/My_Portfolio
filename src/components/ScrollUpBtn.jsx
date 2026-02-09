import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={handleOnClick}
      className={`fixed h-10 w-10 rounded-full bottom-7 right-5 bg-orange-500 flex items-center justify-center cursor-pointer`}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <ArrowUpFromDot strokeWidth={3} size={18} />
    </motion.div>
  );
};
