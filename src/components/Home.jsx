import React from "react";
import TechCarousel from "./Technology";
import GitHubStats from "./GithubStats";
import ProjectCard from "./PorjectsCard";
import Footer from "./Footer";
import Tool from "./Tool";
import WorkExp from "./WorkExp";

const projects = [
  {
    title: "Streamify",
    description:
      "Streamify is a modern streaming platform showcasing trending content with seamless user experience and real-time playback..",
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
    technologies: ["React.js", "JavaScript", "Chart.js", "Moongose", "MOngoDb"],
    githubUrl: "https://github.com/DeF4lt-Cap10N/course-app",
    liveUrl: "https://lernify-app.onrender.com/",
  },
  {
    title: "KeyCrypt",
    description:
      "Developed a secure and scalable password manager application enabling users to store and manage encrypted credentials 100%",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DeF4lt-Cap10N/KeyCrypt",
    liveUrl: "https://key-crypt.vercel.app/",
  },
];

const Home = () => {
  return (
    <>
      <div className="w-full px-4 py-10 max-w-[900px] mx-auto text-white font-serif font-bold">

         {/* Navbar */}
        <div className="flex justify-between text-2xl mb-16">
          <div className="hover:text-blue-400  flex  items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <img
              src="https://pikaso.cdnpk.net/public/production/prompt-templates/426.jpeg"
              alt="FoodExplorer Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg ring-2 ring-cyan-400 group-hover:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-10">
            <div className="hover:text-blue-400">About</div>
            <div className="hover:text-blue-400">Projects</div>
          </div>
        </div>

        <div className="flex  flex-col gap-2 mb-12">
          <p className="text-sky-400 text-2xl">Hi I am,</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">Rahul Kumar.</h1>
          <h3 className="text-4xl md:text-6xl font-semibold text-gray-600 ">
            I love to build things for Web.
          </h3>

          <p className="text-lg md:text-xl text-gray-400 max-w-screen-xl">
            I'm a full-stack developer from India. I specialize in turning ideas
            into fully functional web applications. Whether you're building a
            product from the ground up or improving an existing one, I can help
            bring your vision to life with clean, efficient code.
          </p>
        </div>

        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1WcsWdCVUHZTPHeNh2S6XmTaaxxhJp6jV/view?usp=sharing",
              "_blank"
            )
          }
          className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none mb-14"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#555_0%,#777_50%,#999_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            Resume
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>

        {/* technologia */}
        <div>
          <TechCarousel />
        </div>

        {/* github */}
        <div className="mb-16">
          <GitHubStats username="DeF4lt-Cap10N" />
        </div>

        {/* exp */}
        <WorkExp />

        {/* project */}
        <div className="mt-16 pl-5 pr-5 ">
          <div className="text-4xl mb-5">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>

      <div className="relative pt-5">
        <Tool />
      </div>
    </>
  );
};

export default Home;
