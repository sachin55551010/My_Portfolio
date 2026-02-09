import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "TAILWIND CSS",
  "FRAMER",
  "ZUSTAND",
  "REDUX",
  "RTK QUERY",
  "NODEJS",
  "EXPRESSJS",
  "MONGODB",
  "SOCKET.IO",
];

export default function BackgroundTextFX() {
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    // Function to add a new word
    const addWord = () => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const id = Date.now() + Math.random();

      const newWord = {
        id,
        text: randomWord,
        x: Math.random() * 90 + 5, // 5% to 95% to avoid edges
        y: Math.random() * 90 + 5,
        size: Math.random() * 1.5 + 0.8, // Random size 0.8 to 2.3
      };

      setVisibleWords((prev) => [...prev, newWord]);

      // Remove word after animation completes
      setTimeout(() => {
        setVisibleWords((prev) => prev.filter((w) => w.id !== id));
      }, 3000); // Match with animation duration
    };

    // Add initial words
    addWord();

    // Add new word every 800ms (adjust for desired density)
    const interval = setInterval(addWord, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pt-(--nav-h) pointer-events-none">
      <AnimatePresence>
        {visibleWords.map((word) => (
          <motion.span
            key={word.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2, y: -100 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 5,
            }}
            style={{
              position: "absolute",
              left: `${word.x}%`,
              top: `${word.y}%`,
              fontSize: ".8rem",
              fontWeight: "bold",
              fontFamily: "Archivo Black",
              userSelect: "none",
            }}
            className="font-mono text-foreground tracking-widest"
          >
            {word.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
