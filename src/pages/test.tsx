import React, { useContext, useEffect } from "react";
import { LocationContext } from "../context/Location.context";
import { trpc } from "../utils/trpc";

export default function TestPage() {
  const { location, setLocation } = useContext(LocationContext);

  const { data, isLoading, refetch } = trpc.useQuery([
    "weather.geocode",
    {
      location: "Portland",
    },
  ]);

  const handleClick: any = (event: MouseEvent) => {
    // event.preventDefault();

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
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="rounded-full bg-black/5 py-1 px-2 font-semibold">
          Latitude: {location.latitude}
        </p>
        <p className="rounded-full bg-black/5 py-1 px-2 font-semibold">
          Longitude: {location.longitude}
        </p>
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
      </div>
    </div>
  );
}
