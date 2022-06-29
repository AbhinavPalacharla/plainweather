import { useContext } from "react";
import { LocationContext } from "../context/Location.context";

export default function Testing() {
  const { location } = useContext(LocationContext);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="rounded-full bg-black/5 py-1 px-2 font-semibold">
          Latitude: {location.latitude}
        </p>
        <p className="rounded-full bg-black/5 py-1 px-2 font-semibold">
          Longitude: {location.longitude}
        </p>
      </div>
    </div>
  );
}
