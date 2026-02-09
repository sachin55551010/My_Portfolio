import { CircleArrowLeft, Pin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import { useEffect } from "react";
export const ChatAppInfoPage = () => {
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="min-h-dvh">
      {/* header */}
      <header className="p-2 flex items-center gap-2 shadow-[0px_0px_5px_rgba(0,0,0,1)]">
        <button onClick={backBtn}>
          <CircleArrowLeft />
        </button>

        <h6 className="font-semibold text-sm">Back To Home</h6>
      </header>

      {/* all content */}
      <div className="p-2 mt-4">
        {/* hero section */}
        <section className="flex lg:gap-4 justify-between">
          <div className="flex flex-col lg:flex-1 gap-4">
            {/* heading and description */}
            <div className="border border-foreground/20 rounded-lg p-4 bg-black/5">
              <h1 className="font-black text-3xl">Real Time Chat App</h1>
              <p className="mt-2 leading-7 tracking-wider text-sm">
                A modern full-stack MERN chat application with real-time
                messaging, authentication, and media support
              </p>
            </div>
            {/* overview */}
            <div className="border border-foreground/20 rounded-lg p-4 bg-black/5">
              <h2 className="font-bold text-lg">📌 Project Overview</h2>

              <p className="mt-2 leading-8 tracking-wider text-sm">
                A real-time full-stack chat application where users can
                register, authenticate securely, and communicate with other
                registered users instantly. The project focuses on building
                scalable real-time features using modern MERN stack technologies
                and clean frontend architecture.
              </p>
              <p className="text-foreground/60 leading-7 tracking-wider text-sm">
                This project was created to practice production-level
                architecture including authentication, state management,
                real-time communication, and deployment.
              </p>
            </div>
          </div>

          {/* project images */}
          <div className="hidden lg:flex-1 lg:flex border border-foreground/20 rounded-lg p-4 bg-black/5 items-center justify-center">
            <div className="hidden lg:flex gap-4">
              <img
                src={chat1}
                alt=""
                className="rounded-xl w-62"
                loading="lazy"
              />
              <img
                src={chat2}
                alt=""
                className="rounded-xl w-62"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* problems and solutions section */}
        <section className="grid lg:grid-cols-2 gap-4 mt-6">
          {/* problems */}
          <div className="border border-foreground/20 mt-4 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🎯 Problems I Wanted to Solve</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Build a real-time messaging system using modern web technologies
              </li>
              <li>Handle secure user authentication with JWT</li>
              <li>
                Manage global application state efficiently in a scalable way
              </li>
              <li>Implement modern and responsive UI</li>
              <li>Maintain clean API structure between frontend and backend</li>
              <li>Handle image uploads and media management</li>
              <li>
                Improve performance and user experience in live chat
                environments
              </li>
            </ul>
          </div>

          {/* solution */}
          <div className="border border-foreground/20 mt-4 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🛠️ Solution Approach</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Developed a full-stack MERN application separating frontend and
                backend responsibilities
              </li>
              <li>Used Socket.io for real-time communication between users</li>
              <li>Implemented JWT authentication with protected routes</li>
              <li>
                Created RESTful API architecture using Node.js and Express
              </li>
              <li>
                Used Redux Toolkit and RTK Query for efficient state and API
                management
              </li>
              <li>
                Integrated Cloudinary for image storage and media optimization
              </li>
              <li>
                Designed responsive UI using Tailwind CSS and DaisyUI components
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 flex flex-col lg:flex-row justify-between gap-4">
          {/* key features */}
          <div className="flex-1 border border-foreground/20 bg-black/5 p-4 rounded-lg">
            <h2 className="font-bold text-lg">🚀 Key Features</h2>
            <div className="mt-2 grid gap-3 lg:grid-cols-2 mt-4">
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                User Signup & Login
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Secure JWT Authentication
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Real-time Messaging
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Online Users Tracking
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Responsive UI Design
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Image Upload Support
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Protected Routes
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Global State Management
              </div>
            </div>
          </div>

          {/* learnings */}
          <div className="flex-1 border border-foreground/20 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🧠 What I Learned</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4">
              <li>
                Building scalable frontend architecture using Redux Toolkit
              </li>
              <li>Real-time communication concepts using WebSockets</li>
              <li>Handling authentication flow securely in full-stack apps</li>
              <li>Managing async API requests with RTK Query</li>
              <li>
                Structuring backend with proper error handling and middleware
              </li>
              <li>Improving UI performance and user experience</li>
              <li>Deployment workflow and environment variable management</li>
            </ul>
          </div>
        </section>
        {/* techinal challanges and solutions */}
        <section className="mt-6 border p-4 rounded-lg bg-black/5 border-foreground/20">
          <h1 className="font-bold text-lg">
            ⚡ Technical Challenges & Solutions
          </h1>

          {/* cards */}
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
            {/* first */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">Real-time State Sync</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Keeping chat messages synchronized between multiple users
                  </p>
                </div>
              </div>
              {/* solution */}
              <div className="text-sm mt-4">
                <div>
                  <span className="inline-block h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="font-bold text-green-500/60 px-1">
                    Solution :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Used Socket.io events and optimized state updates to prevent
                    unnecessary re-renders
                  </p>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">
                Authentication & Protected Routes
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Securing routes and maintaining login sessions
                  </p>
                </div>
              </div>
              {/* solution */}
              <div className="text-sm mt-4">
                <div>
                  <span className="inline-block h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="font-bold text-green-500/60 px-1">
                    Solution :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Implemented JWT token-based authentication with middleware
                    validation
                  </p>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">UI Performance</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Avoiding lag during live chat updates
                  </p>
                </div>
              </div>
              {/* solution */}
              <div className="text-sm mt-4">
                <div>
                  <span className="inline-block h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="font-bold text-green-500/60 px-1">
                    Solution :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Efficient state updates with Redux Toolkit and optimized
                    component rendering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
