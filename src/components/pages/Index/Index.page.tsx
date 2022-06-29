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

  const handleClick: any = (event: MouseEvent) => {
    refetch();

    console.log("data", data);
    console.log("isLoading", isLoading);

    if (!isLoading) {
      setLocation({
        latitude: data[0].lat,
        longitude: data[0].lon,
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="static flex flex-row items-center gap-x-16">
        <MainInformation />
      </div>
      <div className="mt-6">
        <button
          className="rounded-md bg-black/5 py-2 px-3 font-semibold"
          onClick={() => {
            handleClick();
          }}
        >
          Change Location
        </button>
      </div>
      <div className="flex flex-row items-center pt-40">
        <WeeklyForecast />
      </div>
    </div>
  );
};
