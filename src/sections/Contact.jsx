import { FileText } from "lucide-react";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import git from "../assets/github.svg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
export const Contact = () => {
  return (
    <div className="min-h-dvh pt-(--nav-h) p-2 overflow-hidden">
      {/* page heading */}
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-purple-400"></span>
        <h4 className="font-extrabold text-2xl tracking-wider text-shadow-[0px_0px_10px_rgb(from_var(--color-foreground)_r_g_b/0.8)]">
          Connect With Me
        </h4>
      </div>

      {/* all content */}
      <div className="flex flex-col items-center border rounded-md border-foreground/20 p-3 bg-black/5 h-fit mt-4 pb-15">
        {/* cv */}
        <section className="bg-gray-700/10 flex flex-col items-center gap-2  h-fit p-2 rounded-lg lg:w-[70%]">
          <h6 className="font-bold text-xl">Download My CV</h6>

          {/* resume section */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <h6 className="font-bold">Explore my journey and experience.</h6>
            <p className="text-center text-sm leading-7">
              Download my CV to get a deeper look at my skills, projects, and
              professional growth.
            </p>

            <Link to="https://drive.google.com/file/d/118ywFtSjj2aBMzZ5rUph9LVpftG5gX0E/view?usp=drive_link">
              <button className="bg-linear-to-r from-green-600/50 to-teal-800/50 px-6 py-3 rounded-lg mt-4 flex items-center gap-2 cursor-pointer hover:bg-linear-to-r hover:from-green-600 hover:to-teal-800 hover:scale-105 transition-all duration-200">
                <span className="font-black">Download CV</span>
                <FileText size={20} />
              </button>
            </Link>

            <div className="h-[.1rem] bg-gray-700 w-full mt-6"></div>

            {/* email section */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <h4 className="font-semibold">Let’s Work Together</h4>
              <p className="text-sm text-foreground/60">
                Have an opportunity or idea? I’d love to hear from you.
              </p>
              <a
                href="mailto:sachin.dev1309@gmail.com"
                className="text-blue-500"
              >
                sachin.dev1309@gmail.com
              </a>
            </div>
          </div>
        </section>
        {/* social media handles */}
        <section className="mt-8">
          <h1>Follow and Connect</h1>

          {/* iocns */}
          <motion.div
            className="flex items-center justify-around bg-gray-700/20 py-3 rounded-lg mt-4 overflow-hidden"
            initial={{ opacity: 0, scale: 3, filter: "blur(10px)" }}
            whileInView={{
              opacity: [0, 0.5, 1],
              y: 0,
              scale: 1,
              filter: ["blur(8px)", "blur(6px)", "blur(4px)", "blur(0px)"],
            }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            >
              <Link to="https://www.linkedin.com/in/sachin-khatri-69138b286">
                <img
                  src={linkedin}
                  alt=""
                  className="h-5 w-auto drop-shadow-[0px_0px_5px_rgba(10,102,194,.8)]"
                />
              </Link>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1,
                delay: 1.3,
                repeat: Infinity,
                ease: "easeIn",
                repeatDelay: 2,
              }}
            >
              <Link to="https://x.com/sachinkhatri007">
                <img
                  src={twitter}
                  alt=""
                  className="h-5 w-auto drop-shadow-[0px_0px_5px_rgba(29,155,240,.8)]"
                />
              </Link>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1,
                delay: 1.6,
                repeat: Infinity,
                ease: "easeIn",
                repeatDelay: 2,
              }}
            >
              <Link to="https://github.com/sachin55551010">
                <img
                  src={git}
                  alt=""
                  className="h-5 w-auto drop-shadow-[0px_0px_5px_rgba(9,105,218,.8)]"
                />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
