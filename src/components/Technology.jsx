import React from "react";
import '../index.css'

const technologies = [
  { name: "JavaScript", icon: "JS", class: "js" },
  { name: "TypeScript", icon: "TS", class: "ts" },
  { name: "Next.js", icon: "▲", class: "next" },
  { name: "React.js", icon: "⚛", class: "react" },
  { name: "TailwindCSS", icon: "🌊", class: "tailwind" },
  { name: "Bootstrap", icon: "B", class: "bootstrap" },
  { name: "C++", icon: "C++", class: "cpp" },
  { name: "CSS", icon: "CSS", class: "css" },
  { name: "Chrome", icon: "🌐", class: "chrome" },
  { name: "Node.js", icon: "⬢", class: "node" },
  { name: "Firebase", icon: "🔥", class: "firebase" },
  { name: "Artificial Intelligence", icon: "AI", class: "ai" },
  { name: "Nginx", icon: "N", class: "nginx" },
  { name: "Express", icon: "E", class: "express" },
  { name: "TensorFlow", icon: "TF", class: "tensorflow" },
  { name: "Keras", icon: "K", class: "keras" },
];

const createBadge = ({ name, icon, class: className }) => (
  <div className="tech-badge" key={`${name}-${icon}`}>
    <div className={`tech-icon ${className}`}>{icon}</div>
    <span>{name}</span>
  </div>
);

const CarouselTrack = ({ techs, reverse = false }) => {
  const multiplied = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className={`carousel-track ${reverse ? "reverse" : ""}`}>
      {multiplied.map((tech, idx) => (
        <React.Fragment key={idx}>{createBadge(tech)}</React.Fragment>
      ))}
    </div>
  );
};

const TechCarousel = () => {
  const firstRow = technologies.slice(0, 8);
  const secondRow = technologies.slice(8);

  return (
    <div className="carousel-wrapper ">
      <div className="carousel-container carousel-row ">
        <CarouselTrack techs={firstRow} />
      </div>
      <div className="carousel-container carousel-row">
        <CarouselTrack techs={secondRow} reverse />
      </div>
    </div>
  );
};

export default TechCarousel;
