import { motion } from "motion/react";
// frontend svg files
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js2 from "../assets/js2.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import rtk from "../assets/rtk.svg";
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";

// backend svg files
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import mongoose from "../assets/mongoose.svg";
import api from "../assets/api.svg";
import jwt from "../assets/jwt.svg";
import role from "../assets/role.svg";
import error from "../assets/error.svg";

//devops and tools svg files
import tools from "../assets/tools.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import ci from "../assets/CI.svg";
import config from "../assets/config.svg";
import deploy from "../assets/deploy.svg";
import docker from "../assets/docker.svg";

// engineer and practices
import system from "../assets/system.svg";
import engineer from "../assets/engineer.svg";
import code from "../assets/code.svg";
import folder from "../assets/folder.svg";
import performance from "../assets/performance.svg";
import debug from "../assets/debug.svg";
import { BlurText } from "./BlurText";

export const SkillsCard = () => {
  return (
    <div className="flex gap-6 flex-col md:grid md:grid-cols-3 lg:grid-cols-4 lg:justify-evenly lg:gap-2">
      {/* frontend skills */}
      <section className="border border-foreground/10 p-3 rounded-md bg-black/5">
        <div className="flex items-center gap-2">
          <img src={frontend} alt="frontend" className="h-10 w-auto" />
          <h4 className="font-bold tracking-wider text-md">Frontend Skills</h4>
        </div>

        {/* border */}
        <div className="h-[.1rem] w-full mt-5 bg-foreground/30 rounded-full"></div>

        {/* all skills */}
        <div className="flex flex-col gap-2 mt-4 tracking-wider text-sm">
          {/* html */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={html} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.15}>HTML</BlurText>
          </div>

          {/* css */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={css} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.2}>CSS</BlurText>
          </div>

          {/* javascript */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <img src={js2} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.25}>Javascript</BlurText>
          </div>
          {/* react */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={react} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.3}>React</BlurText>
          </div>
          {/* tailwind */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={tailwind} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.35}>Tailwind Css</BlurText>
          </div>
          {/* redux */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            <img src={redux} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.4}>Redux Toolkit</BlurText>
          </div>
          {/* rtk */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img src={rtk} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.45}>RTK Query</BlurText>
          </div>
        </div>
      </section>

      {/* backend skills */}
      <section className="border border-foreground/10 p-3 rounded-md bg-black/5">
        <div className="flex items-center gap-2">
          <img src={backend} alt="backend" className="h-10 w-auto" />
          <h4 className="font-bold tracking-wider text-md">Backend Skills</h4>
        </div>

        {/* border */}
        <div className="h-[.1rem] w-full mt-5 bg-foreground/30 rounded-full"></div>

        {/* all skills */}
        <div className="flex flex-col gap-4 mt-4 tracking-wider text-sm">
          {/* html */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-600"></span>
            <img src={node} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.15}>Node.JS</BlurText>
          </div>

          {/* css */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={express}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <BlurText delay={0.2}>Express.JS</BlurText>
          </div>

          {/* rest api */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={api}
              alt="html"
              className="h-7 w-auto bg-gray-700 p-1 rounded-md"
            />
            <BlurText delay={0.25}>REST APIs</BlurText>
          </div>
          {/* react */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={mongodb} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.3}>MongoDB</BlurText>
          </div>
          {/* tailwind */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={mongoose} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.35}>Mongoose</BlurText>
          </div>
          {/* redux */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={jwt}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <BlurText delay={0.4}>JWT Authentication</BlurText>
          </div>
        </div>
      </section>

      {/* tools */}
      <section className="border border-foreground/10 p-3 rounded-md bg-black/5">
        <div className="flex items-center gap-2">
          <img src={tools} alt="frontend" className="h-10 w-auto" />
          <h4 className="font-bold tracking-wider text-md">DevOps & Tools</h4>
        </div>

        {/* border */}
        <div className="h-[.1rem] w-full mt-5 bg-foreground/30 rounded-full"></div>

        {/* all skills */}
        <div className="flex flex-col gap-4 mt-4 tracking-wider text-sm">
          {/* git */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={git} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.15}>Git</BlurText>
          </div>

          {/* github */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={github} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.2}>Github</BlurText>
          </div>

          {/* ci/cd */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={ci} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.25}>CI/CD</BlurText>
          </div>

          {/* docker */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={docker} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.3}>Docker</BlurText>
          </div>
          {/* deployment */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={deploy} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.35}>Deployment (Vercel/Render)</BlurText>
          </div>
          {/* config */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={config} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.4}>Environment Configuration</BlurText>
          </div>
        </div>
      </section>

      {/* system design */}
      <section className="border border-foreground/10 p-3 rounded-md bg-black/5">
        <div className="flex items-center gap-2">
          <img src={engineer} alt="frontend" className="h-10 w-auto" />
          <h4 className="font-bold tracking-wider text-md">
            Engineering Practices
          </h4>
        </div>

        {/* border */}
        <div className="h-[.1rem] w-full mt-5 bg-foreground/30 rounded-full"></div>

        {/* all skills */}
        <div className="flex flex-col gap-2 mt-4 tracking-wider text-sm">
          {/* system design */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={system} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.15}>System Design</BlurText>
          </div>

          {/* clean code */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-200"></span>
            <img src={code} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.2}>Clean code principles</BlurText>
          </div>

          {/* MVC / Modular Architecture */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <img src={folder} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.25}>MVC Architecture</BlurText>
          </div>
          {/* performance */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={performance} alt="html" className="h-7 w-auto" />
            <BlurText delay={0.3}>Performance Optimization</BlurText>
          </div>
          {/* debug */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img
              src={debug}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <BlurText delay={0.35}>Debugging</BlurText>
          </div>
          {/* role access control */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img
              src={role}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-full"
            />
            <BlurText delay={0.4}>Role-based Access Control</BlurText>
          </div>
          {/* error handling */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img
              src={error}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <BlurText delay={0.45}>Error Handling</BlurText>
          </div>
        </div>
      </section>
    </div>
  );
};
