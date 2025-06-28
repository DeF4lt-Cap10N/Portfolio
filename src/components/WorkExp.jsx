import React from "react";
const experiences = [
  {
    title: "Hackathons",
    role: "Full Stack Developer",
    date: "Aug 2024 – Present",
    description: "Worked on rapid prototyping during national hackathons using Next.js, Tailwind, and Firebase. Delivered end-to-end solutions under tight deadlines."
  },
  {
    title: "Freelance Projects",
    role: "Full Stack Developer",
    date: "Oct 2023 – Present",
    description: "Built and deployed client applications using React, Node.js, and MongoDB. Integrated APIs, implemented secure auth flows, and automated deployments using Docker and GitHub Actions."
  }
];

const WorkExp = () => {
  return (
    <div className="px-2 md:px-2 py-5">
    
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
          Places I’ve worked at
        </p>
      </div>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 mb-8">

            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-[#0f0f0f]" />

            <h2 className="text-xl md:text-2xl font-semibold mb-1">{exp.title}</h2>
            <p className="text-gray-400 dark:text-gray-400 text-xl">{exp.role}</p>
            <p className="text-gray-600 dark:text-gray-600 text-lg">{exp.description}</p>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-md mt-1">{exp.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
