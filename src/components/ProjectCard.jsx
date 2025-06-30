import React from "react";

import { Github, ExternalLink } from "lucide-react";


const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative z-10 font-medium">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:from-cyan-300 group-hover:to-cyan-200">
          {title}
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8 transition-colors duration-300 group-hover:text-gray-200 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800/80 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-gray-700/80 hover:border-gray-500/70 hover:text-white hover:scale-105 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href={githubUrl}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 transition-transform duration-300 group-hover/github:scale-110" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href={liveUrl}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group/live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/live:translate-x-1 group-hover/live:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard