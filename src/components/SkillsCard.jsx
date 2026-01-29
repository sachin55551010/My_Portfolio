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

export const SkillsCard = () => {
  return (
    <div className="flex gap-6 flex-col md:grid md:grid-cols-3 lg:grid-cols-4 lg:justify-evenly lg:gap-2">
      {/* frontend skills */}
      <section className="border border-foreground/10 p-3 rounded-md">
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
            <span>HTML</span>
          </div>

          {/* css */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={css} alt="html" className="h-7 w-auto" />
            <span>CSS</span>
          </div>

          {/* javascript */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <img src={js2} alt="html" className="h-7 w-auto" />
            <span>javascript</span>
          </div>
          {/* react */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={react} alt="html" className="h-7 w-auto" />
            <span>React</span>
          </div>
          {/* tailwind */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={tailwind} alt="html" className="h-7 w-auto" />
            <span>Tailwind</span>
          </div>
          {/* redux */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            <img src={redux} alt="html" className="h-7 w-auto" />
            <span>Redux Toolkit</span>
          </div>
          {/* rtk */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img src={rtk} alt="html" className="h-7 w-auto" />
            <span>RTK Query</span>
          </div>
        </div>
      </section>

      {/* backend skills */}
      <section className="border border-foreground/10 p-3 rounded-md">
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
            <span>Node.JS</span>
          </div>

          {/* css */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={express}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <span>Express.JS</span>
          </div>

          {/* rest api */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={api}
              alt="html"
              className="h-7 w-auto bg-gray-700 p-1 rounded-md"
            />
            <span>REST APIs</span>
          </div>
          {/* react */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={mongodb} alt="html" className="h-7 w-auto" />
            <span>MongoDB</span>
          </div>
          {/* tailwind */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img src={mongoose} alt="html" className="h-7 w-auto" />
            <span>Mongoose</span>
          </div>
          {/* redux */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <img
              src={jwt}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <span>JWT Authentication</span>
          </div>
        </div>
      </section>

      {/* tools */}
      <section className="border border-foreground/10 p-3 rounded-md">
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
            <span>Git</span>
          </div>

          {/* github */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={github} alt="html" className="h-7 w-auto" />
            <span>Github</span>
          </div>

          {/* ci/cd */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={ci} alt="html" className="h-7 w-auto" />
            <span>CI/CD</span>
          </div>

          {/* docker */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={docker} alt="html" className="h-7 w-auto" />
            <span>Docker</span>
          </div>
          {/* deployment */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <img src={deploy} alt="html" className="h-7 w-auto" />
            <span>Deployment (Vercel/Render)</span>
          </div>
          {/* config */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <img src={config} alt="html" className="h-7 w-auto" />
            <span>Environment Configuration</span>
          </div>
        </div>
      </section>

      {/* system design */}
      <section className="border border-foreground/10 p-3 rounded-md">
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
            <span>System Design</span>
          </div>

          {/* clean code */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-200"></span>
            <img src={code} alt="html" className="h-7 w-auto" />
            <span>Clean code principles</span>
          </div>

          {/* MVC / Modular Architecture */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <img src={folder} alt="html" className="h-7 w-auto" />
            <span>MVC Architecture</span>
          </div>
          {/* performance */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            <img src={performance} alt="html" className="h-7 w-auto" />
            <span>Performance Optimization</span>
          </div>
          {/* debug */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <img
              src={debug}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <span>Debugging</span>
          </div>
          {/* role access control */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img
              src={role}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-full"
            />
            <span>Role-based Access Control</span>
          </div>
          {/* error handling */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300"></span>
            <img
              src={error}
              alt="html"
              className="h-7 w-auto bg-gray-500 p-1 rounded-md"
            />
            <span>Error Handling</span>
          </div>
        </div>
      </section>
    </div>
  );
};
