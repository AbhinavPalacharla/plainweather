import { MainInformation } from "./MainInformation.component";
import { WeeklyForecast } from "./WeeklyForecast.component";
import { useContext, useEffect } from "react";
import { LocationContext } from "../../../context/Location.context";
import { trpc } from "../../../utils/trpc";

export const IndexPage: React.FC = () => {
  const { setLocation } = useContext(LocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const { data, isLoading, refetch } = trpc.useQuery([
    "weather.geocode",
    {
      location: "Portland",
    },
  ]);

  return (
    <div className="flex flex-col items-center">
      <div className="static flex flex-row items-center gap-x-16">
        <MainInformation />
      </div>

      <div className="flex flex-row items-center pt-40">
        <WeeklyForecast />
      </div>
    </div>
  );
};
