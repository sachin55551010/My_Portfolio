export const About = () => {
  return (
    <div className="min-h-screen pt-(--nav-h) px-2">
      {/* personal information */}
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-purple-400"></span>
        <h4 className="font-black text-xl tracking-wider text-shadow-[0px_0px_10px_rgba(255,255,255,.5)]">
          About Me
        </h4>
      </div>
      <section className="flex flex-col gap-4 md:grid md:grid-cols-2 mt-4">
        <div className="rounded-md border border-foreground/10 p-2">
          <p className="opacity-60 leading-8 md:leading-12 tracking-wide text-[.9rem] md:text-md">
            I'm a MERN stack developer who enjoys building production-ready web
            applications with clean architecture and real-world logic. I focus
            on writing maintainable code, designing scalable backend systems,
            and creating smooth, responsive user experiences. I learn
            continuously by building, breaking, and improving things, and I care
            more about solid fundamentals than quick hacks.
          </p>
        </div>

        {/* skills */}
        <div className="flex text-[.68rem] md:text-[.9rem] flex-col gap-4 rounded-md border border-foreground/10 h-fit p-2 tracking-[.05rem] overflow-x-hidden">
          <h4 className="opacity-40">// My Profile</h4>
          <div>
            {/* first row */}
            <div className="flex gap-2">
              <span className="text-orange-400">export</span>
              <span className="text-orange-400 italic">const</span>
              <span className="text-purple-400">me</span>
              <span className="text-red-400">{"="}</span>
              <span className="text-yellow-400">{"{"}</span>
            </div>

            {/* second row - name */}
            <div className="flex gap-2 ml-4 mt-2">
              <span className="text-variables italic font-semibold">name:</span>
              <span className="text-green-400">"Sachin"</span>
              <span className="text-white">,</span>
            </div>

            {/* third row - role */}
            <div className="flex gap-2 ml-4 mt-2">
              <span className="text-variables italic font-semibold">role:</span>
              <span className="text-green-400">"Full Stack Developer"</span>
              <span className="text-white">,</span>
            </div>

            {/* fourth row - stack */}
            <div className="flex ml-4 mt-2">
              <span className="text-variables italic font-semibold">
                stack:
              </span>
              <span className="text-purple-400 ml-2">{"["}</span>
              <span className="text-green-400">"React"</span>
              <span className="text-white">,</span>
              <span className="text-green-400 ml-2">"Node.js"</span>
              <span className="text-white">,</span>
              <span className="text-green-400 ml-2">"Express.js"</span>
              <span className="text-white">,</span>
              <span className="text-green-400 ml-2">"MongoDB"</span>
              <span className="text-purple-400">{"]"}</span>
              <span className="text-white">,</span>
            </div>

            {/* fifth row - expertise */}
            <div className="flex ml-4 mt-2">
              <span className="text-variables italic font-semibold">
                expertise:
              </span>
              <span className="text-purple-400 ml-2">{"["}</span>

              <div className="flex flex-col">
                <br />
                <span className="text-green-400 mt-2">
                  "Full-stack MERN development"
                  <span className="text-white">,</span>
                </span>

                <span className="text-green-400 mt-2">
                  "REST API design"<span className="text-white">,</span>
                </span>

                <span className="text-green-400 mt-2">
                  "Authentication & role management"
                  <span className="text-white">,</span>
                </span>

                <span className="text-green-400 mt-2">
                  "State management & data fetching"
                  <span className="text-white">,</span>
                </span>

                <span className="text-green-400 mt-2">
                  "Performance-optimized React UIs"
                  <span className="text-white">,</span>
                </span>

                <span className="text-purple-400">
                  {"]"}
                  <span className="text-white">,</span>
                </span>
              </div>
            </div>

            {/* closing bracket */}
            <div className="flex gap-2">
              <span className="text-yellow-400">{"}"}</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </div>
      </section>
      <button className=" bg-blue-600 py-2 px-4 mt-6 rounded-md font-bold">
        Get in touch
      </button>
    </div>
  );
};
