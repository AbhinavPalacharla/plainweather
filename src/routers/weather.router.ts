import * as trpc from "@trpc/server";
import { z } from "zod";
import { Context } from "../utils/context";

export const weatherRouter = trpc
  .router<Context>()
  .query("currentForecast", {
    input: z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
      units: z.enum(["metric", "imperial"]),
    }),
    async resolve({ ctx: { weatherClient }, input }) {
      const { latitude, longitude, units } = input;
      const { data } = await weatherClient.get("weather", {
        params: {
          lat: latitude,
          lon: longitude,
          units: units,
          lang: "en",
        },
      });
      return data;
    },
  })
  .query("geocode", {
    input: z.object({
      location: z.string(),
    }),
    async resolve({ ctx: { weatherClient }, input }) {
      const { location } = input;

      try {
        const { data } = await weatherClient.get("geo/1.0/direct", {
          params: {
            q: location,
            limit: 5,
            lang: "en",
          },
        });

        return data;
      } catch (err) {
        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch geocode data",
          cause: err,
        });
      }
    },
  });