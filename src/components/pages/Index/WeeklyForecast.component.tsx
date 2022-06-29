import React from "react";
import { WeeklyForecastCell } from "./WeeklyForecastCell.component";
const data: Array<{
  day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
  high: number;
  low: number;
}> = [
  {
    day: "Sun",
    high: 72,
    low: 62,
  },
  {
    day: "Mon",
    high: 73,
    low: 63,
  },
  {
    day: "Tue",
    high: 74,
    low: 64,
  },
  {
    day: "Wed",
    high: 75,
    low: 65,
  },
  {
    day: "Thu",
    high: 76,
    low: 66,
  },
  {
    day: "Fri",
    high: 77,
    low: 67,
  },
  {
    day: "Sat",
    high: 78,
    low: 68,
  },
];

export const WeeklyForecast: React.FC = () => {
  return (
    <div className="flex flex-row gap-x-16">
      {data.map((item, i) => (
        <WeeklyForecastCell
          day={item.day}
          high={item.high}
          low={item.low}
          key={i}
        />
      ))}
    </div>
  );
};
