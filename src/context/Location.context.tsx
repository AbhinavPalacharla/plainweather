import { createContext } from "react";

type Location = {
  latitude: number;
  longitude: number;
};

type LocationContext = {
  location: Location;
  setLocation: (location: Location) => void;
};

export const LocationContext = createContext<LocationContext>({
  location: { latitude: 48.8566, longitude: 2.3522 },
  setLocation: () => {},
});
