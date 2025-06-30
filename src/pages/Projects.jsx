import React from "react";
import ProjectCard from "../components/ProjectCard";
import Bg from "../components/Bg";

import Footer from "../components/Footer";
import Tool from "../components/Tool";
import NavBar from "../components/NavBar";
import { Scroll } from "lucide-react";

const projects = [
  {
    title: "Streamify",
    description:
      "Streamify is a modern streaming platform showcasing trending content with seamless user experience and real-time playback.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "Recoil",
    ],
    githubUrl: "https://github.com/DeF4lt-Cap10N/tube-app",
    liveUrl: "https://tube-app-iota.vercel.app/",
  },
  {
    title: "EdTech Platform",
    description:
      "Designed a high-performance course management application, streamlining course creation, enrollment, and tracking for users.",
    technologies: ["React.js", "JavaScript", "Chart.js", "Mongoose", "MongoDB"],
    githubUrl: "https://github.com/DeF4lt-Cap10N/course-app",
    liveUrl: "https://lernify-app.onrender.com/",
  },
  {
    title: "KeyCrypt",
    description:
      "Developed a secure and scalable password manager application enabling users to store and manage encrypted credentials.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DeF4lt-Cap10N/KeyCrypt",
    liveUrl: "https://key-crypt.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth">
        <Bg />
        <div className="relative z-10 max-w-[1000px] mx-auto px-4 md:px-8 py-16">
          <NavBar />
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            My Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>

      <div className="relative pt-16">
        <Tool />
      </div>
    </>
  );
};

export default Projects;
