import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import portfolio from "../../assets/portfolio.png";
import { motion } from "motion/react";
export const MyPortfolio = () => {
  return (
    <div className="border p-3 rounded-md border-foreground/20 flex flex-col gap-3 bg-black/5">
      {/* heading */}
      <h1 className="text-lg font-bold text-center">My Portfolio</h1>
      {/* project image */}
      <div className="flex justify-center gap-4 border border-foreground/20 rounded-2xl p-2">
        <img
          src={portfolio}
          alt=""
          className="rounded-xl w-[90%]"
          loading="lazy"
        />
      </div>
      {/* badge */}
      <div className="flex gap-4">
        <motion.div
          className="bg-linear-to-r from-orange-400 to-yellow-400/60 py-1 px-3 text-[.7rem] rounded-lg font-semibold"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Featured
        </motion.div>
        <div className="bg-linear-to-r from-green-400/40 to-green-700/40 py-1 px-3 text-[.7rem] rounded-lg font-semibold">
          Completed
        </div>
      </div>
      {/* small description */}
      <div>
        <p className="text-foreground/70 text-sm leading-8 tracking-wide">
          A modern developer portfolio featuring a responsive and minimal UI
          with light and dark theme support, smooth animations, and clean user
          experience. The platform showcases my technical skills, featured
          projects, and development journey, emphasizing performance,
          scalability, and thoughtful interface design using modern web
          technologies.
        </p>
      </div>

      {/* tech stacks */}

      <div className="flex flex-col gap-4">
        {/* frontend */}
        <div className="flex flex-col gap-3 bg-gray-700/10 p-2 rounded-xl">
          <h6 className="font-bold text-foreground">Frontend</h6>
          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              React
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Tailwind Css
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Daisy UI
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Framer Motion
            </span>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-2 justify-between items-center mt-auto">
        <Link
          to="my-portfolio"
          className="bg-blue-500 py-2 px-4 rounded-xl flex items-center justify-center w-fit"
        >
          <span className="font-semibold text-sm text-gray-300">
            View Details
          </span>
          <ArrowUpRight strokeWidth={2} className="text-gray-300" />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="https://employee-management-application-vert.vercel.app"
            className="bg-blue-500 px-5 py-2 rounded-xl font-semibold text-sm text-gray-300"
          >
            Live
          </Link>
          <Link
            to="https://github.com/sachin55551010/Employee_management_application"
            className="border border-foreground/30 px-4 py-2 rounded-xl bg-gray-500 text-gray-300"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
