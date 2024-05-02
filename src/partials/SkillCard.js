import React from "react";

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className="m-4 w-40 flex-none text-center p-5 rounded-xl border-2 border-gray-300 mx-1">
      {skillIcon}
      <p className="text-xl font-semibold mt-4">{skillName}</p>
    </div>
  );
};

export default SkillCard;
