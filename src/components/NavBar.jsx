import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between text-2xl mb-16">
      <div className="hover:text-blue-400  flex  items-center gap-3 group hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Link to="/">
          
          <img
            src="https://pikaso.cdnpk.net/public/production/prompt-templates/426.jpeg"
            alt="FoodExplorer Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg ring-2 ring-cyan-400 group-hover:ring-purple-500"
          />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="hover:text-blue-400 bg-gradient-to-bl from-violet-300 to-cyan-100 bg-clip-text text-transparent font-bold ">
          <Link to="/projects" >Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
