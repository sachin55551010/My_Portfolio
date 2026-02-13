import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
const roles = [
  "Full Stack Applications",
  "Scalable Web Apps",
  "SaaS Platforms",
  "Modern Web Interfaces",
];
import { motion } from "motion/react";
export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles) {
      const currentRole = roles[currentRoleIndex];
      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            // Typing
            if (currentText.length < currentRole.length) {
              setCurrentText(currentRole.slice(0, currentText.length + 1));
            } else {
              // Pause before deleting
              setTimeout(() => setIsDeleting(true), 400);
            }
          } else {
            // Deleting
            if (currentText.length > 0) {
              setCurrentText(currentText.slice(0, -1));
            } else {
              // Move to next role
              setIsDeleting(false);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }
        },
        isDeleting ? 50 : 100,
      );

      return () => clearTimeout(timeout);
    }
  }, [currentRoleIndex, currentText, isDeleting]);
  return (
    <div className="relative z-95 min-h-screen max-w-dvw pt-(--nav-h) flex justify-center overflow-hidden">
      <div className="mt-10 p-2 flex flex-col gap-10 md:flex-row-reverse md:justify-evenly md:items-center">
        {/* photo */}
        <section className="flex justify-center bg-blue md:h-80 md:w-80">
          <img
            src={profile}
            alt="photo"
            className="h-40 w-40 md:w-full md:h-full rounded-full object-cover"
          />
        </section>
        {/*infomation */}
        <section className="flex flex-col gap-4 h-fit w-fit md:w-[60%]">
          {/* name */}
          <div className="">
            <div className="flex flex-col gap-4">
              <motion.h4
                className="text-xl font-semibold"
                initial={{ opacity: 0, y: -60 }}
                animate={{ y: [-60, 0] }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Hello my name is
              </motion.h4>
              <motion.h1
                className="hero-heading text-4xl lg:text-6xl text-blue-600 tracking-wider
            "
                initial={{ opacity: 0, x: 60 }}
                animate={{ x: [60, 0] }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeInOut" }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                Sachin
              </motion.h1>
            </div>
          </div>

          {/* animation text */}
          <div className="w-full">
            <div className="font-bold flex gap-1 items-center min-h-10">
              <h4 className="md:text-xl">I can build</h4>{" "}
              <span className="text-blue-600 md:tracking-wider text-xl md:text-4xl">
                {currentText}
              </span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* description about me */}
          <motion.div
            className="border border-foreground/10 bg-black/5 p-2 lg:py-8 lg:px-4 rounded-lg backdrop-blur-[.1rem]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ y: [60, 0] }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="leading-8 tracking-wider text-foreground/70 text-sm">
              Self-taught full-stack developer focused on solving real business
              problems by building scalable, high-performance web applications.
              Experienced in modern JavaScript technologies, clean architecture,
              and maintainable code, with a hands-on approach to turning complex
              ideas into practical digital solutions.
            </p>
          </motion.div>
        </section>
      </div>
      {/* <BackgroundTextFX /> */}
    </div>
  );
};
