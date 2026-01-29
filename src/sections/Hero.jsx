import { useEffect, useState } from "react";
import profilePic from "../assets/profile_picture.jpg";
const roles = ["Full Stack Developer", "Frontend Engineer", "Backend Engineer"];
export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles) {
      const currentRole = roles[currentRoleIndex];
      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            // Typing
            if (currentText.length < currentRole.length) {
              setCurrentText(currentRole.slice(0, currentText.length + 1));
            } else {
              // Pause before deleting
              setTimeout(() => setIsDeleting(true), 400);
            }
          } else {
            // Deleting
            if (currentText.length > 0) {
              setCurrentText(currentText.slice(0, -1));
            } else {
              // Move to next role
              setIsDeleting(false);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }
        },
        isDeleting ? 50 : 100,
      );

      return () => clearTimeout(timeout);
    }
  }, [currentRoleIndex, currentText, isDeleting]);
  return (
    <div className="min-h-screen pt-(--nav-h) flex justify-center">
      <div className="mt-10 p-2 flex flex-col gap-10 md:flex-row-reverse md:justify-evenly md:items-center">
        {/* photo */}
        <section className="flex justify-center bg-blue md:h-80 md:w-80">
          <img
            src={profilePic}
            alt="photo"
            className="h-40 w-40 md:w-full md:h-full rounded-full object-cover"
          />
        </section>
        {/*infomation */}
        <section className="flex flex-col gap-4 h-fit w-fit md:w-[60%]">
          {/* name */}
          <div className="">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold">Hello my name is</h4>
              <h1
                className="text-3xl md:text-5xl text-blue-600 font-black tracking-wider
            "
              >
                Sachin
              </h1>
            </div>
          </div>

          {/* animation text */}
          <div className="w-full">
            <h1 className="text-2xl font-bold md:text-4xl">
              I'm a{" "}
              <span className="text-blue-600 md:tracking-wider">
                {currentText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          {/* description about me */}
          <div>
            <p className="leading-8 tracking-wider text-foreground/60">
              I’m a full-stack developer with hands-on experience building and
              maintaining web applications using modern JavaScript technologies.
              I focus on writing clean, scalable code and delivering solutions
              that solve real business problems.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
