import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { Context } from "../../../utils/context";
import { weatherRouter } from "../../../routers/weather.router";
import { createContext } from "../../../utils/context";

export const appRouter = trpc
  .router<Context>()
  .merge("weather.", weatherRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
