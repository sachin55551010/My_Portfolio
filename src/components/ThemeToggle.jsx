import { useEffect, useState } from "react";
import { Moon, MoonStar, Sun } from "lucide-react";
import { motion } from "motion/react";

export const ThemeToggle = () => {
  const [themeToggle, setThemeToggle] = useState(() => {
    const savedTheme = localStorage.getItem("myTheme");
    return savedTheme ? savedTheme : "light";
  });

  const handleToggleBtn = (val) => {
    setThemeToggle(val);
  };

  useEffect(() => {
    localStorage.setItem("myTheme", themeToggle);
    document.documentElement.setAttribute("data-theme", themeToggle);
  }, [themeToggle]);

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className={`z-100 fixed bottom-6 left-5  p-2 rounded-full`}
    >
      {themeToggle === "light" ? (
        <button
          onClick={() => handleToggleBtn("dark")}
          className={`flex items-center justify-center cursor-pointer bg-foreground text-base p-2 rounded-full shadow-[0px_0px_20px_rgba(0,0,0,.8)]`}
        >
          <Moon size={26} />
        </button>
      ) : (
        <button
          onClick={() => handleToggleBtn("light")}
          className={`flex items-center justify-center cursor-pointer bg-foreground text-base p-2 rounded-full shadow-[0px_0px_20px_rgba(255,255,255,.8)]`}
        >
          <Sun size={26} />
        </button>
      )}
    </motion.div>
  );
};
