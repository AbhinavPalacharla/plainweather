import "../../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "./api/trpc/[trpc]";
import Inspect from "inspx";
import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { LocationContext } from "../context/Location.context";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [location, setLocation] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
  });

  return (
    <Inspect>
      <ThemeProvider attribute="class">
        <LocationContext.Provider value={{ location, setLocation }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocationContext.Provider>
      </ThemeProvider>
    </Inspect>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
