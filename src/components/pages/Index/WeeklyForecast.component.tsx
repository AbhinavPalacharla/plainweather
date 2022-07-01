import React, { useContext } from "react";
import { LocationContext } from "../../../context/Location.context";
import { trpc } from "../../../utils/trpc";
import { WeeklyForecastCell } from "./WeeklyForecastCell.component";

export const WeeklyForecast: React.FC = () => {
  const { location } = useContext(LocationContext);
  const { data, isLoading } = trpc.useQuery([
    "weather.forecast",
    {
      latitude: location.latitude,
      longitude: location.longitude,
      units: "imperial",
    },
  ]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>No data</p>
      </div>
    );
  }

  let dayIndex = new Date().getDay();

  const days: Array<"Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat"> = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const dailyData = data.daily;

  let forecast: Array<{
    day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
    high: number;
    low: number;
  }> = [];

  dailyData.map((item: any) => {
    if (dayIndex === 7) {
      dayIndex = 0;
    }

    const day: {
      day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
      high: number;
      low: number;
    } = {
      day: days[dayIndex],
      high: Math.round(item.temp.max),
      low: Math.round(item.temp.min),
    };

    dayIndex++;

    forecast.push(day);
  });

  return (
    <div className="flex flex-row gap-x-16">
      {forecast.slice(1).map((item, i) => (
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
