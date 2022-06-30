import React from "react";
import { ThemePicker } from "./ThemePicker.component";

export const Header = () => {
  const dateObj = new Date();

  const date = `${
    dateObj.getMonth() + 1
  }.${dateObj.getDate()}.${dateObj.getFullYear()}`;

  return (
    <div className="mt-16 flex flex-row items-center justify-between px-28">
      <span className="inlin-block h-10 w-10 rounded-md bg-black/20"></span>
      <p className="align-text-baseline inline-block text-lg">{date}</p>
      <ThemePicker />
    </div>
  );
};
