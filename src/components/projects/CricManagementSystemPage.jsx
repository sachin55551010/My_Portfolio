import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cricket from "../../assets/cricket.png";

import { useEffect } from "react";
export const CricManagementSystemPage = () => {
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

            {/* intro and photo */}
            <div className="flex gap-4">
              {/* intro */}
              <div className="flex-1 border border-foreground/20 rounded-lg p-4 bg-black/5">
                <h1 className="font-black text-2xl">
                  Cricket Tournament Management System
                </h1>
                <p className="mt-4 leading-7 tracking-wider text-sm">
                  Full-stack MERN-based cricket tournament management system
                  designed for organizing teams, scheduling matches, tracking
                  live scores, and managing tournament workflows with a scalable
                  backend and modern responsive UI.
                </p>
              </div>
              {/* project picture */}
              <div className="hidden lg:flex-1 lg:flex border border-foreground/20 rounded-lg p-4 bg-black/5 items-center justify-center">
                <div className="hidden lg:flex gap-4">
                  <img
                    src={cricket}
                    alt=""
                    className="rounded-xl h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* overview */}
            <div className="border border-foreground/20 rounded-lg p-4 bg-black/5">
              <h2 className="font-bold text-lg">📌 Project Overview</h2>

              <p className="mt-2 leading-8 tracking-wider text-sm">
                Developed a full-stack MERN application aimed at solving
                real-world challenges in cricket tournament discovery and
                management. The platform centralizes fragmented tournament
                information into a single ecosystem, enabling players, teams,
                and organizers to efficiently discover, organize, and
                participate in tournaments across different locations. The
                system allows organizers to publish tournaments with detailed
                insights including venue and ground information, participating
                teams, player data, and categorized tournament types such as
                Open, Panchayat, and Corporate events. By replacing manual
                coordination and scattered communication channels, the
                application improves visibility, accessibility, and operational
                efficiency for local sports communities. Implemented advanced
                features such as role-based access control, dynamic UI state
                management, backend-driven filtering and search, and scalable
                data structures to support real-world workflows. The project
                demonstrates strong full-stack architecture, practical
                problem-solving, and the ability to design user-centric systems
                that address genuine market needs.
              </p>
            </div>
          </div>
        </section>
        ``
        {/* problems and solutions section */}
        <section className="grid lg:grid-cols-2 gap-4 mt-6">
          {/* problems */}
          <div className="border border-foreground/20 mt-4 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🎯 Problems I Wanted to Solve</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Lack of a centralized system where users can easily discover all
                upcoming and ongoing cricket tournaments in one place.
              </li>

              <li>
                Difficulty accessing complete tournament details such as
                location, ground information, and prize structure before
                participation.
              </li>

              <li>
                Limited visibility into player performance, statistics, and
                profiles, making team selection and competition assessment
                challenging.
              </li>

              <li>
                Complex and unstructured workflows for organizers when creating
                and managing tournaments.
              </li>

              <li>
                Inefficient tools for organizing teams, players, and tournament
                operations within a single unified platform.
              </li>

              <li>
                Absence of clear tournament categorization (Open, Panchayat,
                Corporate, etc.), making it harder for users to find relevant
                events.
              </li>

              <li>
                Lack of transparent tournament ecosystems where participants can
                explore teams, players, and competition context easily.
              </li>

              <li>
                Manual coordination processes causing delays and mismanagement
                in local cricket tournaments.
              </li>
            </ul>
          </div>

          {/* solution */}
          <div className="border border-foreground/20 mt-4 rounded-lg p-4 bg-black/5">
            <h2 className="font-bold text-lg">🛠️ Solution Approach</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm mt-4 tracking-wide leading-7">
              <li>
                Adopted a mobile-first design approach considering the majority
                of users access the platform via mobile devices.
              </li>

              <li>
                Designed interconnected MongoDB schemas linking players, teams,
                and tournaments to maintain structured relationships.
              </li>

              <li>
                Automated player profile creation immediately after
                authentication to eliminate onboarding friction.
              </li>

              <li>
                Built fast, responsive UI focused on performance and smooth user
                interactions.
              </li>

              <li>
                Implemented core features tailored specifically for real-world
                local tournament workflows.
              </li>

              <li>
                Introduced tournament categorization (Open, Panchayat,
                Corporate) to improve discovery and organization.
              </li>

              <li>
                Integrated real-time updates to reflect tournament changes
                instantly for users.
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
                Google OAuth Signup & Login
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Secure JWT Authentication
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Tournament Discovery System
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Multi-Tournament Management
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Match Scheduling System
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Multi-Organizer Collaboration
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Role-Based Access Control (RBAC)
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Invitation-Based Player Onboarding
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Team Role Management
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Real-Time Updates (Socket.IO)
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Skeleton Loading & UX Enhancements
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Fully Responsive Design
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Dynamic Theme System
              </div>

              <div className="bg-gray-600/30 py-3 rounded-md w-70 font-bold text-sm p-2">
                Data Integrity & Validation Rules
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
                Implemented Google OAuth authentication and secure JWT-based
                session handling.
              </li>

              <li>
                Designed relational MongoDB schema architecture linking
                tournaments, teams, and players.
              </li>

              <li>
                Built scalable backend structure using clean routing,
                controllers, and modular design principles.
              </li>

              <li>
                Applied centralized error handling and defensive programming
                practices.
              </li>

              <li>
                Implemented role-based access control (RBAC) to enforce secure
                authorization workflows.
              </li>

              <li>
                Managed API communication efficiently using RTK Query for
                caching, fetching, and state synchronization.
              </li>

              <li>
                Designed real-world business logic with validation rules and
                edge-case handling.
              </li>

              <li>
                Improved UI/UX through skeleton loaders, empty states, and
                optimized interaction flows.
              </li>

              <li>
                Focused on performance-aware UI design and responsive layouts
                across devices.
              </li>

              <li>
                Integrated real-time features using Socket.IO to enhance live
                user experience.
              </li>

              <li>
                Learned system design thinking including data relationships,
                workflow structuring, and scalability considerations.
              </li>

              <li>
                Strengthened full-stack architecture skills through building a
                production-style MERN application.
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
                Data Modeling & Relationship Management
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Maintaining accurate relationships between players, teams,
                    matches, and tournaments.
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
                    Designed normalized MongoDB schemas with proper references
                    to ensure consistent and scalable data linking.
                  </p>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">Authorization & Access Control</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Preventing unauthorized users from modifying sensitive
                    tournament data.
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
                    Implemented role-based access control (RBAC) with backend
                    authorization checks.
                  </p>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">Business Logic Validation</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Managing complex business rules (e.g., player cannot join
                    multiple teams in one tournament).
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
                    Added backend validation logic and constraint checks before
                    database operations.
                  </p>
                </div>
              </div>
            </div>

            {/* forrth */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">Error Handling & API Stability</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Handling inconsistent API errors and edge cases across
                    routes.
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
                    Created centralized error-handling middleware for structured
                    responses.
                  </p>
                </div>
              </div>
            </div>

            {/* fifth */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">Real-Time System Updates</h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Ensuring real-time updates when tournaments are created or
                    modified.
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
                    Integrated Socket.IO to push live updates without page
                    reload.
                  </p>
                </div>
              </div>
            </div>

            {/* sixth */}
            <div className="mt-2 bg-black/10 p-4 rounded-lg">
              <h4 className="font-semibold">
                Performance & User Experience Optimization
              </h4>

              {/* problem */}
              <div className="text-sm mt-4">
                <div className="">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  <span className="font-bold text-red-500/60 px-1">
                    Problem :
                  </span>
                  <p className="inline tracking-wide leading-7">
                    Improving perceived performance during data loading and
                    empty states.
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
                    Implemented skeleton loaders and contextual UI states to
                    enhance UX.
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
