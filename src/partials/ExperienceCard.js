import React from "react";

const ExperiencesCard = ({
  experience: { company, responsibilities, technologies },
}) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <h1 className="text-xl text-center font-bold">{company}</h1>
      <hr className="my-4" />
      <p className="">{responsibilities}</p>
      <hr className="my-4" />
      <div class="w-full text-center">
        <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
          {technologies.map((tech) => (
            <div className="px-4 py-1 border-2 rounded-full">{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
