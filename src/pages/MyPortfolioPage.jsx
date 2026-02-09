import { CircleArrowLeft, Pin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import portfolio from "../assets/portfolio.png";
import { useEffect } from "react";
export const MyPortfolioPage = () => {
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
              <h1 className="font-black text-3xl">My Portfolio</h1>
              <p className="mt-2 leading-7 tracking-wider text-sm">
                A modern responsive developer portfolio showcasing projects,
                skills, and clean UI with light/dark themes and smooth
                animations.
              </p>
            </div>
            {/* overview */}
            <div className="border border-foreground/20 rounded-lg p-4 bg-black/5">
              <h2 className="font-bold text-lg">📌 Project Overview</h2>

              <p className="mt-2 leading-8 tracking-wider text-sm">
                A modern, responsive developer portfolio built with a clean and
                scalable frontend architecture, organized folder structure, and
                proper page-based routing. The project features a minimal and
                modern UI design with smooth animations, light and dark theme
                support, and optimized performance. Developed using the latest
                frontend technologies, it showcases my technical skills,
                featured projects, and development approach with a strong focus
                on code organization, maintainability, and user experience.
              </p>
            </div>
          </div>

          {/* project images */}
          <div className="hidden lg:flex-1 lg:flex border border-foreground/20 rounded-lg p-4 bg-black/5 items-center justify-center">
            <div className="hidden lg:flex justify-center items-center gap-4">
              <img
                src={portfolio}
                alt=""
                className="rounded-xl w-[95%]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
