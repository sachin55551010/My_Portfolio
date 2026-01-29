import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { NavBar } from "./components/NavBar";
import { useRef } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./sections/Hero";
function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollSelection = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="min-h-screen bg-base text-foreground">
      <NavBar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
        scrollSelection={scrollSelection}
      />
      <ThemeToggle />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="about" ref={aboutRef}>
                <About />
              </section>

              <section id="skills" ref={skillsRef}>
                <Skills />
              </section>

              <section id="project" ref={projectRef}>
                <Projects />
              </section>

              <section id="contact" ref={contactRef}>
                <Contact />
              </section>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
