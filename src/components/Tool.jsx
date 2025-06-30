import React from "react";
import {
  FaHome,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const toolItem = [
  {
    name: "Twitter",
    icon: <FaEnvelope size={20} />,
    link: "mailto:captainakash1675@gmail.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    link: "https://x.com/RahulKumar1675",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/DeF4lt-Cap10N",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/captxrahul/",
  },
];

export default function Tool() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex justify-around gap-3 items-center px-3 py-1 bg-black/60 backdrop-blur-md shadow-2xl rounded-[20px] ring-1 ring-cyan-200">
        <Link to="/">
          <div className="text-white">{<FaHome size={25} />}</div>
          <div className="absolute pointer-events-none bottom-full left-1/2 -translate-x-1/2 mb-3 w-max px-2 py-1 text-white bg-black text-sm rounded-md opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            {"Home"}
          </div>
        </Link>

        <span className="h-8 border-x-2 border-gray-600 "></span>

        {toolItem.map(({ name, icon, link }, index) => (
          <a
            href={link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:cursor-pointer p-3 rounded-full transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:rotate-6"
          >
            <div className="text-white">{icon}</div>
            <div className="absolute pointer-events-none bottom-full left-1/2 -translate-x-1/2 mb-3 w-max px-2 py-1 text-white bg-black text-sm rounded-md opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
              {name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
