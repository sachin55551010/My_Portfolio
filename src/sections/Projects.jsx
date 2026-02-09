import { ChatApp } from "../components/projects/ChatApp";
import { CricTournamentSystem } from "../components/projects/CricTournamentSystem";
import { EmpMangementSystem } from "../components/projects/EmpMangementSystem";
import { MyPortfolio } from "../components/projects/MyPortfolio";

export const Projects = () => {
  return (
    <div className="min-h-dvh pt-(--nav-h) p-2 flex flex-col gap-4">
      {/* heading */}
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-purple-400"></span>
        <h4 className="font-extrabold text-2xl tracking-wider text-shadow-[0px_0px_10px_rgb(from_var(--color-foreground)_r_g_b/0.8)]">
          Projects
        </h4>
      </div>

      {/* my projects */}
      <div className="grid gap-8 lg:gap-4 md:grid-cols-2">
        <CricTournamentSystem />
        <EmpMangementSystem />
        <ChatApp />
        <MyPortfolio />
      </div>
    </div>
  );
};
