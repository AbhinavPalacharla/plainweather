import React from "react";

type PropTypes = {
  temperature: number;
};

export const Temperature: React.FC<PropTypes> = ({ temperature }) => {
  return (
    <div>
      <p className="text-[15rem] font-bold text-black">{temperature}°</p>
    </div>
  );
};
