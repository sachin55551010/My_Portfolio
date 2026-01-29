import { SkillsCard } from "../components/SkillsCard";

export const Skills = () => {
  return (
    <div className="min-h-screen pt-(--nav-h) p-2">
      {/* title */}
      <div className="flex items-center gap-2 mb-6">
        <span className="h-3 w-3 rounded-full bg-orange-400"></span>
        <h4 className="font-black text-xl tracking-wider text-shadow-[0px_0px_10px_rgba(255,255,255,.5)]">
          Skills and Technologies
        </h4>
      </div>
      <SkillsCard />
    </div>
  );
};
