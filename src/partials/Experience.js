import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experience }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        Experience
      </h1>
      {experience.map((exp) => (
        <ExperienceCard experience={exp} />
      ))}
    </div>
  );
};

export default Experience;
