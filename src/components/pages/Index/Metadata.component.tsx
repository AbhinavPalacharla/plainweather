import React from "react";

type PropTypes = {
  time: string;
  day: string;
  conditions: string;
};

export const Metadata: React.FC<PropTypes> = ({ time, day, conditions }) => {
  return (
    <div className="flex flex-col justify-between gap-y-7 text-black">
      <div className="flex flex-row gap-x-6">
        <p className="text-xl font-light">{time}</p>
        <span className="inline-block rounded-full bg-black/5 px-3 text-center align-text-bottom font-[400]">
          🇫🇷 &nbsp; Paris, FR
        </span>
      </div>
      <p className="text-6xl font-semibold">{day}</p>
      <p className="text-xl font-light">{conditions}</p>
    </div>
  );
};
