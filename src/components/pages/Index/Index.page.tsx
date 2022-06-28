import React, { useState, useEffect } from "react";
import { MainInformation } from "./MainInformation.component";
import { Metadata } from "./Metadata.component";
import { WeeklyForecast } from "./WeeklyForecast.component";
import { trpc } from "../../../utils/trpc";
import { useGeolocated } from "react-geolocated";

export const IndexPage: React.FC = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  if (!coords) {
    return (
      <div>
        <p>Fetching coordinates...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="static flex flex-row items-center gap-x-16">
        {/* <p>{coords.latitude}</p>
        <p>{coords.longitude}</p> */}
        {/* <Temperature temperature={72} /> */}
        {/* <longitude={coords.longitude} latitude={coords.latitude} /> */}
        {/* <Metadata time="12:00" day="Monday" conditions="Sunny" /> */}
        <MainInformation
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      </div>
      <div className="flex flex-row items-center pt-40">
        <WeeklyForecast />
      </div>
    </div>
  );
};
