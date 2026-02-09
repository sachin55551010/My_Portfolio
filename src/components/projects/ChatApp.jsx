import { ArrowUpRight, Github } from "lucide-react";
import chat1 from "../../assets/chat1.png";
import chat2 from "../../assets/chat2.png";
import { Link } from "react-router-dom";

export const ChatApp = () => {
  return (
    <div className="border p-3 rounded-md border-foreground/20 flex flex-col gap-3 bg-black/5">
      {/* heading */}
      <h1 className="text-lg font-bold text-center">Real Time Chat App</h1>
      {/* project image */}
      <div className="flex justify-center gap-4 border border-foreground/20 rounded-2xl p-2">
        <img src={chat1} alt="" className="rounded-xl w-35" loading="lazy" />
        <img src={chat2} alt="" className="rounded-xl w-35" loading="lazy" />
      </div>
      <div className="flex gap-4">
        <div className="bg-linear-to-r from-orange-400 to-yellow-400/40 py-1 px-3 text-[.8rem] rounded-lg">
          Sandbox
        </div>
        <div className="bg-linear-to-r from-green-400/40 to-green-700/40 py-1 px-3 text-[.8rem] rounded-lg">
          Completed
        </div>
      </div>
      {/* small description */}
      <div>
        <p className="text-foreground/70 text-sm leading-8 tracking-wide">
          Full-stack real-time chat app using MERN stack with secure
          authentication and instant messaging via Socket.IO, showcasing modern
          frontend architecture and scalable backend design.
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
              RTK Query
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Redux
            </span>
          </div>
        </div>

        {/* backend */}
        <div className="flex flex-col gap-3 bg-gray-700/10 p-2 rounded-xl">
          <h6 className="font-bold text-foreground">Backend</h6>
          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Nodejs
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Expressjs
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              MongoDB
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              JWT Auth
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/70 to-indigo-600/70 font-semibold text-gray-300 hover:shadow-[0_0_10px_var(--color-primary)] hover:cursor-pointer transition-all duration-200">
              Socket.io
            </span>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-2 justify-between items-center mt-auto">
        <Link
          to="/chat-app"
          className="bg-blue-500 py-2 px-4 rounded-xl flex items-center justify-center w-fit"
        >
          <span className="font-semibold text-sm">View Details</span>
          <ArrowUpRight strokeWidth={2} />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="https://chat-app-three-chi.vercel.app"
            className="bg-blue-500 px-5 py-2 rounded-xl font-semibold text-sm"
          >
            Live
          </Link>
          <Link
            to="https://github.com/sachin55551010/Chat_App"
            className="border border-foreground/30 px-4 py-2 rounded-xl bg-gray-500"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
