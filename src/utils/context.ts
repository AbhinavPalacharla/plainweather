import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import axios from "axios";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  const weatherClient = axios.create({
    baseURL: "https://api.openweathermap.org/",
    params: {
      appid: process.env.OPENWEATHER_API_KEY,
    },
  });

  return {
    req: opts?.req,
    res: opts?.res,
    weatherClient,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
