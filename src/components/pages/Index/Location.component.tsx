import { FC } from "react";
import { trpc } from "../../../utils/trpc";
import { countryCodeEmoji } from "country-code-emoji";

type PropTypes = {
  latitude: number;
  longitude: number;
};

export const Location: FC<PropTypes> = ({ latitude, longitude }) => {
  const { data, isLoading } = trpc.useQuery([
    "weather.reverseGeocode",
    {
      latitude: latitude,
      longitude: longitude,
    },
  ]);

  if (isLoading) {
    return (
      <div>
        <span className="inline-block rounded-full bg-black/5 px-3 text-center align-text-bottom font-[400]">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div>
      <span className="inline-block rounded-full bg-black/5 px-3 text-center align-text-bottom font-[400]">
        {countryCodeEmoji(data[0].country)} &nbsp; {data[0].name},{" "}
        {data[0].country}
      </span>
    </div>
  );
};
