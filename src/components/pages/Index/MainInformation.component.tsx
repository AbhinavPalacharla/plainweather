import type { FC } from "react";
import { trpc } from "../../../utils/trpc";
import { Location } from "./Location.component";

type PropTypes = {
  latitude: number;
  longitude: number;
};

export const MainInformation: FC<PropTypes> = ({ latitude, longitude }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { data, isLoading } = trpc.useQuery([
    "weather.currentForecast",
    {
      latitude: latitude,
      longitude: longitude,
      units: "imperial",
    },
  ]);

  console.log(data);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="static flex flex-row items-center gap-x-16">
      <div>
        <p className="text-[15rem] font-bold text-black">
          {Math.round(data.main.temp)}°
        </p>
      </div>
      <div className="flex flex-col justify-between gap-y-7 text-black">
        <div className="flex flex-row gap-x-6">
          <p className="text-xl font-light">
            {new Date().toLocaleTimeString()}
          </p>
          <Location latitude={latitude} longitude={longitude} />
        </div>
        <p className="text-6xl font-semibold">
          {days[parseInt(new Date().toLocaleTimeString())]}
        </p>
        <p className="text-xl font-light">{data.weather[0].description}</p>
      </div>
    </div>
  );
};
