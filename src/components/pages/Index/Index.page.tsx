import React from "react";
import { Temperature } from "./Temperature.component";
import { Metadata } from "./Metadata.component";
import { WeeklyForecast } from "./WeeklyForecast.component";

export const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="static flex flex-row items-center gap-x-16">
        <Temperature temperature={72} />
        <Metadata time="12:00" day="Monday" conditions="Sunny" />
      </div>
      <div className="flex flex-row items-center pt-40">
        <WeeklyForecast />
      </div>
    </div>
  );
};
