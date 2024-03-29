import { FC } from "react";
import { trpc } from "../../../utils/trpc";
import { countryCodeEmoji } from "country-code-emoji";
import { useContext } from "react";
import { LocationContext } from "../../../context/Location.context";
const states = require("us-state-converter");

export const Location: FC = () => {
  const { location } = useContext(LocationContext);

  const { data, isLoading } = trpc.useQuery([
    "weather.reverseGeocode",
    {
      latitude: location.latitude,
      longitude: location.longitude,
    },
  ]);

  if (isLoading) {
    return (
      <div>
        <span className="inline-block rounded-full bg-black/5 px-3 text-center align-text-bottom font-[400] dark:bg-white/5">
          Loading...
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="inline-block rounded-full bg-black/5 px-3 text-center align-text-bottom font-[400] dark:bg-white/5">
          {countryCodeEmoji(data[0].country)} &nbsp; {data[0].name},{" "}
          {data[0].state ? data[0].country : states.abbr(data[0].state)}
        </span>
      </div>
    );
  }
};
