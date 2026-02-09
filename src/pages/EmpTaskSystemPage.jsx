import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emp from "../assets/emp.png";

import { useEffect } from "react";

export const EmpTaskSystemPage = () => {
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
              <h1 className="font-black text-2xl">
                Employee Task Management System
              </h1>
              <p className="mt-2 leading-7 tracking-wider text-sm">
                Modern Full-Stack MERN Application for Task Assignment, Employee
                Management, and Real-Time Collaboration
              </p>
            </div>
            {/* overview */}
            <div className="border border-foreground/20 rounded-lg p-4 bg-black/5">
              <h2 className="font-bold text-lg">📌 Project Overview</h2>

              <p className="mt-2 leading-8 tracking-wider text-sm">
                A modern full-stack task management system where administrators
                can create, assign, and manage tasks while employees track
                progress and update status in real time. The application focuses
                on scalable architecture, secure authentication, efficient state
                management, and responsive UI using modern MERN stack
                technologies.
              </p>
              <p className="text-foreground/60 leading-7 tracking-wider text-sm">
                This project was built to practice production-level architecture
                including secure authentication, role-based task management,
                scalable state management, and real-world deployment workflows.
              </p>
            </div>
          </div>

          {/* project images */}
          <div className="hidden lg:flex-1 lg:flex border border-foreground/20 rounded-lg p-4 bg-black/5 items-center justify-center">
            <div className="hidden lg:flex gap-4">
              <img
                src={emp}
                alt=""
                className="rounded-xl h-full w-auto"
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
                Build an efficient system for assigning, tracking, and managing
                employee tasks in real time
              </li>
              <li>
                Implement secure authentication and role-based access control
                (admin vs employee) using JWT
              </li>
              <li>
                Manage global application state efficiently for tasks, users,
                and updates
              </li>
              <li>
                Design a modern, responsive, and user-friendly dashboard UI
              </li>
              <li>
                Maintain clean and scalable API architecture between frontend
                and backend
              </li>
              <li>
                Handle task updates, status changes, and workflow management
                smoothly
              </li>
              <li>
                Improve performance, usability, and productivity in team task
                management environments
              </li>
            </ul>
          </div>

          {/* solution */}
          <div className="border border-foreground/20 mt-4 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🛠️ Solution Approach</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Implemented role-based authentication using JWT to securely
                manage admin and employee access
              </li>
              <li>
                Designed a structured REST API with modular controllers and
                clean backend architecture
              </li>
              <li>
                Built dynamic dashboards for task assignment, tracking, and
                status updates
              </li>
              <li>
                Used modern state management for efficient handling of global
                task and user data
              </li>
              <li>
                Implemented filters and sorting based on task priority and
                status, along with user search functionality for efficient task
                management
              </li>

              <li>
                Implemented real-time updates or optimized data refresh
                strategies for task changes
              </li>
              <li>
                Applied scalable folder structure and reusable components to
                maintain clean and maintainable codebase
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 flex flex-col lg:flex-row justify-between gap-4">
          {/* key features */}
          <div className="flex-1 border border-foreground/20 bg-black/5 p-4 rounded-lg">
            <h2 className="font-bold text-lg">🚀 Key Features</h2>
            <div className="grid gap-3 lg:grid-cols-2 mt-4">
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                User Signup & Login
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Secure JWT Authentication
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Role-Based Access (Admin & Employee)
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Task Creation & Assignment
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Task Status Tracking
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Admin Dashboard Management
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Search, Filter & Sort Tasks
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Responsive UI Design
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Protected Routes
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Global State Management
              </div>
              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Scalable MERN Architecture
              </div>
            </div>
          </div>

          {/* learnings */}
          <div className="flex-1 border border-foreground/20 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🧠 What I Learned</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Implemented role-based access control for secure admin and
                employee workflows
              </li>
              <li>
                Designed modern dashboard UI with scalable layout patterns
              </li>
              <li>
                Built backend filtering and search functionality for efficient
                data handling
              </li>
              <li>
                Applied modern state management for predictable application flow
              </li>
              <li>
                Implemented conditional UI rendering based on user roles and
                application state
              </li>
              <li>
                Learned reusable UI design patterns for maintainable frontend
                architecture
              </li>
              <li>
                Handled condition-based requests (create vs update logic) for
                dynamic task operations
              </li>
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
              <h4 className="font-semibold">
                Authentication & Role-Based Access Control
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Implementing secure role-based access control to ensure
                    proper admin and employee authorization during login and
                    navigation
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
                    Designed JWT-based authentication with role validation
                    middleware and conditional route protection to dynamically
                    control access across frontend and backend.
                  </p>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">
                Dynamic Form State & Conditional UI Logic
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Managing dynamic UI behavior for create vs update task
                    workflows without duplicating components.
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
                    Implemented conditional rendering and reusable form logic
                    with state-driven button labels and API handling to switch
                    between create and update modes efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">
                Real-Time UI State Synchronization
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Handling live UI state changes for actions like accept,
                    reject, or status updates while maintaining consistent UX.
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
                    Used centralized state management and optimistic UI updates
                    to instantly reflect status changes while syncing with
                    backend responses.
                  </p>
                </div>
              </div>
            </div>

            {/* forrth */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">
                Backend Search & Filtering Optimization
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Implementing scalable search and filtering functionality
                    using backend logic instead of heavy frontend processing.
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
                    Built query-based API endpoints with dynamic filtering
                    parameters for employee name, priority, and task status to
                    improve performance and scalability.
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
