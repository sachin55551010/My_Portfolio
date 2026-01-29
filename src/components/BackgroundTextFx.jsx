import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const MAX_ITEMS = 5; // hard limit
const INTERVAL = 600; // was 200ms (big win)

const words = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXTJS",
  "TAILWIND",
  "BOOTSTRAP",
  "FRAMER",
  "AXIOS",
  "ZUSTAND",
  "REDUX",
  "RTK QUERY",
  "GIT",
  "GITHUB",
  "NODEJS",
  "EXPRESSJS",
  "MONGODB",
  "MONGOOSE",
  "REST API",
  "WEBSOCKETS",
  "SOCKET.IO",
  "AUTHENTICATION",
  "JWT",
  "OAUTH",
  "BCRYPT",
  "CLOUDINARY",
  "VERCEL",
];
export default function BackgroundTextFX() {
  const [items, setItems] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = prev.slice(-MAX_ITEMS + 1); // keep size capped

        next.push({
          id: idRef.current++,
          text: words[Math.floor(Math.random() * words.length)],
          x: Math.random() * 90,
          y: Math.random() * 90,
          size: Math.floor(Math.random() * 6) + 14,
          delay: Math.random() * 0.6, // stagger feel
        });

        return next;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {items.map((item) => (
          <motion.span
            key={item.id}
            className="text-foreground/30 font-bold"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              duration: 3.5, // slower animation
              delay: item.delay, // delayed popup
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${item.x}vw`,
              top: `${item.y}vh`,
              fontSize: item.size,
              whiteSpace: "nowrap",
              willChange: "transform, opacity",
            }}
          >
            {item.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
