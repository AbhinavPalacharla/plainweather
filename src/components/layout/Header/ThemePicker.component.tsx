import { FC, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export const ThemePicker: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md bg-black/5 font-semibold dark:bg-white/5"
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon className="h-6 w-6" />
        ) : (
          <SunIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
