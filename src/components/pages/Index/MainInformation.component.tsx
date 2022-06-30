import type { FC } from "react";
import { useState, useEffect } from "react";
import { trpc } from "../../../utils/trpc";
import { Location } from "./Location.component";
import { LocationContext } from "../../../context/Location.context";
import { useContext } from "react";

// type PropTypes = {
//   latitude: number;
//   longitude: number;
// };

// export const MainInformation: FC<PropTypes> = ({ latitude, longitude }) => {
export const MainInformation: FC = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  const { location } = useContext(LocationContext);

  const { data, isLoading } = trpc.useQuery([
    "weather.currentForecast",
    {
      latitude: location.latitude,
      longitude: location.longitude,
      units: "imperial",
    },
  ]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="static flex flex-row items-center gap-x-16">
      <div>
        <p className="text-[15rem] font-bold">{Math.round(data.main.temp)}°</p>
      </div>
      <div className="flex flex-col justify-between gap-y-7">
        <div className="flex flex-row gap-x-6">
          <p className="text-xl font-light">{time}</p>
          <Location />
        </div>
        <p className="text-6xl font-semibold">{days[new Date().getDay()]}</p>
        <p className="text-xl font-light capitalize">
          {data.weather[0].description}
        </p>
      </div>
    </div>
  );
};
